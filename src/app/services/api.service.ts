import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://localhost:3000/';
  httpHeaders: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getDataFromServer(endPoint: string) {
    const url = this.baseUrl + endPoint;
    console.log('url', url);
    return this.http.get(url, { headers: this.httpHeaders });
  }

  postDataToServer(endPoint: string, data: any) {
    const url = this.baseUrl + endPoint;
    console.log('Url', url);
    return this.http.post(url, data, { headers: this.httpHeaders });
  }

  putDataToServer(endPoint:string,data:any){
    const url = this.baseUrl + endPoint;
    console.log("url",url);
    return this.http.put(url,data, {headers:this.httpHeaders});
  }

  deleteDataFromServer(endPoint:string){
    const url = this.baseUrl +endPoint;
    return this.http.delete(url,{headers:this.httpHeaders});
  }
}
