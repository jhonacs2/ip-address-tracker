import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LeafletService } from '../../services/leaflet.service';
import { LatLngExpression } from 'leaflet';

@Component({
  selector: 'app-it-map',
  templateUrl: './it-map.component.html',
  styleUrls: ['./it-map.component.scss']
})
export class ItMapComponent implements AfterViewInit {
  @ViewChild('htmlDivMap') public htmlContainerMap: ElementRef | undefined;

  private readonly _latLong: LatLngExpression;

  constructor( private _leafletService: LeafletService ) {
    this._latLong = [-16.49943150495570, -68.12264070539186];
  }

  ngAfterViewInit(): void {
    this._leafletService.initMapLeaflet(this._latLong, this.htmlContainerMap?.nativeElement.id);
  }
}
