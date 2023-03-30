import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherServiceService {

  data: any ='Hi i am otherService';

  otherServiceMsg(): any {
    // throw new Error('Method not implemented.');

    return this.data
  }

  constructor() { }
}
