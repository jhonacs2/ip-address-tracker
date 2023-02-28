import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IpGeolocationService } from '../../services/ip-geolocation.service';
import { IpDetails } from '../../interfaces/ip-details.interface';
import { first } from 'rxjs';
import { LeafletService } from '../../services/leaflet.service';

@Component({
  selector: 'app-it-search',
  templateUrl: './it-search.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ItSearchComponent implements OnInit {

  @ViewChild('htmlInputIp') public htmlInputIp: ElementRef<HTMLInputElement>;

  public ipDetails: IpDetails | undefined;

  constructor( private _ipGeolocationService: IpGeolocationService,
               private _leafletService: LeafletService ) {
    this.htmlInputIp = {} as ElementRef;
  }

  ngOnInit(): void {
  }

  public searchIpAddress(): void {
    const valueInput = this.htmlInputIp.nativeElement.value;
    this._ipGeolocationService.getIpGeolocation(valueInput)
      .pipe(first())
      .subscribe(value => {
        this._leafletService.updateMapLeaflet([value.location.lat, value.location.lng]);
        this.ipDetails = {
          ipAddress: value.ip,
          location: value.location,
          isp: value.isp
        };
      });
  }
}
