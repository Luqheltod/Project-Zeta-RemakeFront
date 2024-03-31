import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RestInfo } from "../models/restInfo";
import { InstaDeathInfo } from "../models/instadeath";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class GameService {
  constructor(private http: HttpClient) {}


  private urlEndPoint:string = 'http://localhost:8080/projectz/'
  
  rest(restModifier: number) : Observable<RestInfo>  {
    return this.http.get<RestInfo>(this.urlEndPoint+`rest/${restModifier}`);
  }

  getInstadeathInfo(idOptions: number) : Observable<InstaDeathInfo> {
    return this.http.get<InstaDeathInfo>(this.urlEndPoint+`instadeath/${idOptions}`);
  }
  }