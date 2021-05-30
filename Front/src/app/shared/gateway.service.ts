import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'



import {Gateway} from '../shared/Gateway';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  selectedGateway:Gateway;
  gateways:Gateway[];
  readonly baseURL= 'http://localhost/3000/data';


  constructor(private http:HttpClient) { }

  postGateway(gateway:Gateway)
  {return this.http.post (this.baseURL,gateway)}

getGatewayList()
{return this.http.get (this.baseURL)}

putGateway(gateway:Gateway)
{return this.http.put (this.baseURL +`/${gateway.id}`,gateway)}

deletGateway(id:string)
{return this.http.delete(this.baseURL+`/${id}`)} 
}
