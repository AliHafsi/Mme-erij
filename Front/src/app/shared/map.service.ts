import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';



@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  baseUrl:string ='http://localhost:3000/data'
;
  constructor(private http: HttpClient) { }
  
 
  makeMarkers(map: L.Map): void {
    
    
    this.http.get(this.baseUrl).subscribe((res: any) => {
     var smallIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
        iconSize:    [55, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        shadowSize:  [41, 35]
      });
    
      for (const c of res) {
        const lon = c.coordinates[0];
        const lat = c.coordinates[1];
        const marker = L.marker([lon, lat],{icon:smallIcon}).addTo(map);

        
        marker.bindPopup(`<center>
        <p> <strong>${c.name}</strong>
        
        <h6>Longitude</h6>
        <br/>${c.coordinates[0]}</p>
        <h6>Latitude</h6>
        <br/>${c.coordinates[1]}</p>
        <p>
        </center>
        <img style=" max-width: -webkit-fill-available;"src="${c.image}"/>
        <br/>
        <p>${c.description}</p>`
        ).openPopup();
      }
    });
  }
}


  

