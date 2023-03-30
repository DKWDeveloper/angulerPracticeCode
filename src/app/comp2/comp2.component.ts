import { Component, OnInit } from '@angular/core';
import { SerciveService } from '../service/sercive.service';
import { SingaltonService } from '../service/singalton.service';

@Component({
  selector: 'app-comp2',
  // templateUrl: './comp2.component.html',
  template: `<br /><br />
  <p>comp2 works!</p>
  user:<strong>{{name}}</strong>
  <input type="text" placeholder="comp1" #comp2>
  <button (click)="Onclick(comp2.value)">Update</button>
  <br />`,
  styleUrls: ['./comp2.component.css'],

  // providers:[SingaltonService]
})
export class Comp2Component implements OnInit {
  name: any = 'uxDeepak';

  constructor(private sr: SerciveService) { }
  ngOnInit(): void {
    this.sr.name.subscribe(n => this.name = n)
  }


  Onclick(data: any) {
    // this.name = data
    this.sr.name.next(data)
    // this.sr.subject(data).subscribe((n) => this.name = n)
  }

}
