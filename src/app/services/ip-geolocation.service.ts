import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ipGeoResponse } from '../interfaces/geoIpResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class IpGeolocationService {

  private readonly BASE_URl = `https://geo.ipify.org/api/v2/country,city?apiKey=${ environment.apiKey }&`;

  constructor( private _httpClient: HttpClient ) { }

  public getIpGeolocation( ipAddress: string ): Observable<ipGeoResponse> {
    return this._httpClient.get<ipGeoResponse>(`${ this.BASE_URl }ipAddress=${ ipAddress }`);
  }
}
