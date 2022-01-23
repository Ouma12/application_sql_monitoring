import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  constructor(private http:HttpClient) {
    this.getJson().subscribe(data=>{console.log(data)})
    this.getProject().subscribe(res=>{console.log(res)})
   }
   public getJson():Observable <any>{
     return this.http.get("./assets/mydata.json");
   }
   public getProject():Observable<any>{
     return this.http.get("./assets/projectJson.json");
   }

   }

