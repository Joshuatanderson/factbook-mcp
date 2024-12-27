export type RegionKey = 
  | 'Africa'
  | 'Antarctica'
  | 'AustraliaOceania'
  | 'CentralAmericaAndCaribbean'
  | 'CentralAsia'
  | 'EastAndSoutheastAsia'
  | 'Europe'
  | 'MiddleEast'
  | 'NorthAmerica';

export type RegionValue = 
  | 'africa'
  | 'antarctica'
  | 'australia-oceania'
  | 'central-america-n-caribbean'
  | 'central-asia'
  | 'east-n-southeast-asia'
  | 'europe'
  | 'middle-east'
  | 'north-america';

export const regions: Record<RegionKey, RegionValue> = {
  Africa: 'africa',
  Antarctica: 'antarctica',
  AustraliaOceania: 'australia-oceania',
  CentralAmericaAndCaribbean: 'central-america-n-caribbean',
  CentralAsia: 'central-asia',
  EastAndSoutheastAsia: 'east-n-southeast-asia',
  Europe: 'europe',
  MiddleEast: 'middle-east',
  NorthAmerica: 'north-america'
} as const;
  