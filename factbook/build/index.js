import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
const ROOT = "https://github.com/factbook/factbook.json/raw/master/";
const USER_AGENT = "factbook-mcp/1.0";
const server = new Server({
    name: "factbook",
    version: "1.0.0",
    description: "Pull information about countries via the MCP",
    author: "Joshua Anderson",
    license: "MIT",
}, {
    capabilities: {
        tools: {}
    }
});
const GetCountryInfoSchema = z.object({
    country: z.string()
});
server.setRequestHandler(ListToolsRequestSchema, async (request) => {
    return {
        tools: [
            {
                name: "get-country-info",
                description: "Get info about a country",
                inputSchema: {
                    type: "object",
                    properties: {
                        country: {
                            type: "string",
                            description: "A short country identifier used by the CIA World Factbook. Note that this is the original GEC (formerly FIPS) codes, not ISO. For example, au for austria, gm for germany, etc. All data is fetched as raw JSON."
                        }
                    }
                }
            },
            // {
            //     name:"get-factbook-codes",
            //     description: "Get a list of all country codes for the CIA World Factbook",
            //     // inputSchema: {
            //     //     type: "object",
            //     //     properties: {
            //     //         continents: {
            //     //             type: "string",
            //     //             description: "The continent to get codes for. Valid values are: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America."
            //     //         }
            //     //     }
            //     // }
            // }
        ]
    };
});
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
        if (name === "get-country-info") {
            const { country } = GetCountryInfoSchema.parse(args);
            const code = country.toUpperCase();
            const TEMP_HARDCODED_CONTINENT = "europe";
            const resp = await fetch(`${ROOT}/${TEMP_HARDCODED_CONTINENT}/${code}.json`, {
                headers: {
                    "User-Agent": USER_AGENT,
                    "Accept": "application/json"
                }
            });
            if (!resp.ok) {
                return { error: `Failed to fetch data: ${resp.statusText}` };
            }
            const data = await resp.json();
            return { data };
        }
        return { error: `Unknown tool ${name}` };
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            throw new Error(`Invalid arguments: ${error.errors
                .map((e) => `${e.path.join(".")}: ${e.message}`)
                .join(", ")}`);
        }
        throw error;
    }
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Factbook MCP server is running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main()", error);
    process.exit(1);
});
