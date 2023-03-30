import { Component } from '@angular/core';
import { SerciveService } from '../service/sercive.service';
import { SingaltonService } from '../service/singalton.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',

  //   template: `<div>
  //   <p>comp1 works!</p>

  //   user:<strong>{{name}}</strong>

  //   <input type="text" placeholder="comp1" #box>
  //   <button (click)="Onclick(box.value)">Update</button>
  //   <br />
  // </div>`,
  styleUrls: ['./comp1.component.css'],
  // providers:[SingaltonService]
})
export class Comp1Component {
  name: any = 'UXDeepak';
  listofData: any[] = [];
  data: any = "Deepak";

  constructor(private _service: SerciveService, private _singelton: SingaltonService) { }


  singalton(value: any) {
    this._singelton.getValue(value)
  }


  callService() {
    // return this._service.msg()
    console.log(this.name = this._service.serviceData)
  }

  ngOnInit() {
    this.sendData()
    this.callService()

    this.listofData = this._singelton.getArray()

  }

  sendData() {
    this._service.name.subscribe(data => {
      this.name = data
    })
  }


  Onclick(data: any) {
    // this.name = data
    this._service.name.next(data)
    // this._service.subject(data).subscribe((n) => this.name = n)
  }

}
