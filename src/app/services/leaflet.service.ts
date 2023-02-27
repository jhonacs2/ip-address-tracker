import { Injectable } from '@angular/core';
import { Icon, LatLngExpression, Map, Marker, TileLayer } from 'leaflet';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class LeafletService {

  private readonly URL_LAYER_GOOGLE = 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
  private readonly URL_LOCATION_ICON = './assets/svg/icon-location.svg';
  private readonly URL_NAME_LOCATION_ICON = 'icon-location.svg';

  private _map: Map | undefined;
  private _iconMap: Icon | undefined;
  private _marker: Marker | undefined;
  private _tileLayer: TileLayer | undefined;

  constructor() {
  }

  public initMapLeaflet( latLong: LatLngExpression, idElementHtml: string ): void {
    this._map = L.map(idElementHtml).setView(latLong, 15);
    this._tileLayer = L.tileLayer(this.URL_LAYER_GOOGLE, {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(this._map);
    this._iconMap = L.icon({
      iconUrl: this.URL_LOCATION_ICON,
      iconSize: [40, 50],
      iconAnchor: [20, 50],
      shadowUrl: this.URL_NAME_LOCATION_ICON,
    });
    this._marker = L.marker(latLong, { icon: this._iconMap }).addTo(this._map);
  }



}
