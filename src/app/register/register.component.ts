import { Component, OnInit } from '@angular/core';
import { SerciveService } from '../service/sercive.service';
import { SingaltonService } from '../service/singalton.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // providers:[]
})
export class RegisterComponent implements OnInit {

  arrayList: any[] = [];

  constructor(private _service: SerciveService, private _singelton: SingaltonService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getData()
    this.arrayList = this._singelton.getArray()
  }

  otherData: any = '';
  // ngOninit() {
  // }

  sendData(value: any) {
    this._singelton.getValue(value)
  }

  getData() {
    this.otherData = this._service.getDataFromOtherService()
    return this.otherData
    // console.log("otherService Data:-", this.otherData)
  }
}
