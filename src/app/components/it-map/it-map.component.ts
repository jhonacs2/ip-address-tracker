import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Icon, Map } from 'leaflet';
import { first, interval } from 'rxjs';

@Component({
  selector: 'app-it-map',
  templateUrl: './it-map.component.html',
  styleUrls: ['./it-map.component.scss']
})
export class ItMapComponent implements OnInit, AfterViewInit {

  private _map: Map | undefined;
  private _iconMap: Icon | undefined;


  constructor() {
    this._map = undefined;
    this._iconMap = undefined;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._map = L.map('map').setView([-16.49943150495561, -68.12264070539186], 15);
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(this._map);

    this._iconMap = L.icon({
      iconUrl: './assets/svg/icon-location.svg',
      iconSize: [40, 50],
      iconAnchor: [20, 50],
      shadowUrl: 'icon-location.svg',
    });

    const marker = L.marker([-16.49943150495561, -68.12264070539186], { icon: this._iconMap }).addTo(this._map);

    interval(1000).pipe(first()).subscribe(value => {
      marker.remove()
      console.log(marker);
      console.log('uo');
      this._map!.setView([-16.500915256592567, -68.12258798067283], 15);
      let myIcon = L.icon({
        iconUrl: './assets/svg/icon-location.svg',
        iconSize: [40, 50],
        iconAnchor: [20, 50],
        shadowUrl: 'icon-location.svg',
      });
      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }).addTo(this._map!);


      L.marker([-16.500915256592567, -68.12258798067283], { icon: myIcon }).addTo(this._map!);
    });
  }
}
