import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class SingaltonService {

  constructor() { }
  listArray: any[] = [400];

  getValue(value: any) {
    this.listArray.push(value)
    // console.log(this.listArray)
  }

  getArray() {
    return this.listArray;
  }

}
