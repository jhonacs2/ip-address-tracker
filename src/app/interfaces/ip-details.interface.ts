import { Location } from './geoIpResponse.interface';

export interface IpDetails {
  ipAddress: string,
  location: Location,
  isp: string
}
