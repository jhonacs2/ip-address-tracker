export interface ipGeoResponse {
  ip: string;
  location: Location;
  domains: string[];
  isp: string;
}

export interface Location {
  'country': string,
  'region': string,
  'city': string,
  'lat': number,
  'lng': number,
  postalCode: string,
  'timezone': string,
  'geonameId': number
}
