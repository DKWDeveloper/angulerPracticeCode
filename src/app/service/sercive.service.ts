import { Injectable } from '@angular/core';
import { from, map, Subject } from 'rxjs';
import { fromEvent } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { OtherServiceService } from './other-service.service';


@Injectable({
  providedIn: 'root'
})
export class SerciveService {


  /**This code using for call the api */
  url = 'https://jsonplaceholder.typicode.com/todos'
  base_url = 'https://jsonplaceholder.typicode.com/posts'
  // url = 'https://jsonplaceholder.typicode.com/users'
  // objectId: number = 201;

  constructor(private http: HttpClient, private _otherservice: OtherServiceService) { }


  otherServiceData: any = '';

  getDataFromOtherService() {
    this.otherServiceData = this._otherservice.otherServiceMsg()
    return this.otherServiceData
  }


  getAlljsonData() {
    return this.http.get(this.base_url);
  }

  hit: any = [];
  getData(): Observable<any> {
    return this.hit = this.http.get<any>(this.url).pipe(map((response: any) => response.map((item: any) => item.title)))
  }
  // data = {
  //   title: 'This is basically push method'
  // }
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.url, data)
  }
  deleteData(data2: any): Observable<any> {
    console.log(data2.id)
    return this.http.delete<any>(`${this.url}/${data2.id}`).pipe(map((data: any) => data))
  }
  newData = { id: 1, title: 'New Data with title' }
  putId = 1
  putMethod() {
    return this.http.put<any>(`${this.url}/${this.putId}`, this.newData)
  }


  name = new Subject<any>();

  // subject(data: any) {
  //   this.name.next(data)
  // }

  product = [
    { productId: 1, productName: "Laptop", productPrice: "30,000" },
    { productId: 2, productName: "iphone", productPrice: "90,000" },
    { productId: 3, productName: "tv", productPrice: "20,000" }
  ];


  msg() {
    alert('dependency injection')
  }

  serviceData = 'Hi what are you doing'

  print(val: any, containerId: any) {
    let list = document.createElement('li');
    list.innerText = val;
    document.getElementById(containerId)?.appendChild(list)

  }

}
