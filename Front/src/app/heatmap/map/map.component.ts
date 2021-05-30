import { Component, OnInit, AfterViewInit } from '@angular/core';
import { latLng,  marker, point, polyline, tileLayer, circleMarker, LeafletMouseEvent } from 'leaflet';
import * as L from 'leaflet';
import {HttpClient} from '@angular/common/http';
import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

import {MarkerService} from'../../../app/shared/map.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  
  private map;
  


  constructor(private markerService:MarkerService)

  {}
  ngAfterViewInit():void{
    this.initMap();
    this.markerService.makeMarkers(this.map);

  }
  private initMap():void{
    this.map=L.map('map').setView([36.81897 ,10.181667],3);
    const tiles=L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    })
    
  

  tiles.addTo(this.map);
  
}}