export type FactbookResponse = {
  Introduction?: {
    Background?: {
      text: string;
    };
  };
  Geography?: {
    Location?: {
      text: string;
    };
    "Geographic coordinates"?: {
      text: string;
    };
    "Map references"?: {
      text: string;
    };
    Area?: {
      total?: {
        text: string;
      };
      land?: {
        text: string;
      };
      water?: {
        text: string;
      };
    };
    "Area - comparative"?: {
      text: string;
    };
    "Land boundaries"?: {
      total?: {
        text: string;
      };
      "border countries"?: {
        text: string;
      };
    };
    Climate?: {
      text: string;
    };
    Terrain?: {
      text: string;
    };
    Elevation?: {
      "highest point"?: {
        text: string;
      };
      "lowest point"?: {
        text: string;
      };
      "mean elevation"?: {
        text: string;
      };
    };
    "Natural resources"?: {
      text: string;
    };
    "Population distribution"?: {
      text: string;
    };
  };
  "People and Society"?: {
    Population?: {
      total?: {
        text: string;
      };
      male?: {
        text: string;
      };
      female?: {
        text: string;
      };
    };
    Nationality?: {
      noun?: {
        text: string;
      };
      adjective?: {
        text: string;
      };
    };
    Languages?: {
      Languages?: {
        text: string;
      };
      "major-language sample(s)"?: {
        text: string;
      };
    };
    Religions?: {
      text: string;
    };
  };
  Economy?: {
    "Economic overview"?: {
      text: string;
    };
    "Real GDP (purchasing power parity)"?: {
      "Real GDP (purchasing power parity) 2023"?: {
        text: string;
      };
      "Real GDP (purchasing power parity) 2022"?: {
        text: string;
      };
      "Real GDP (purchasing power parity) 2021"?: {
        text: string;
      };
      note?: string;
    };
    Industries?: {
      text: string;
    };
  };
  Government?: {
    "Country name"?: {
      "conventional long form"?: {
        text: string;
      };
      "conventional short form"?: {
        text: string;
      };
      "local long form"?: {
        text: string;
      };
      "local short form"?: {
        text: string;
      };
    };
    "Government type"?: {
      text: string;
    };
    Capital?: {
      name?: {
        text: string;
      };
      "geographic coordinates"?: {
        text: string;
      };
    };
  };
  Military?: {
    "Military and security forces"?: {
      text: string;
      note?: string;
    };
    "Military expenditures"?: {
      "Military Expenditures 2024"?: {
        text: string;
      };
      "Military Expenditures 2023"?: {
        text: string;
      };
    };
  };
  Communications?: {
    "Telephones - fixed lines"?: {
      total?: {
        text: string;
      };
      "subscriptions per 100 inhabitants"?: {
        text: string;
      };
    };
    "Internet users"?: {
      total?: {
        text: string;
      };
      "percent of population"?: {
        text: string;
      };
    };
  };
  "Transnational Issues"?: {
    "Refugees and internally displaced persons"?: {
      "refugees (country of origin)"?: {
        text: string;
      };
      "stateless persons"?: {
        text: string;
      };
    };
    "Illicit drugs"?: {
      text: string;
    };
  };
}; 