import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

  counter: number = 0;
  message: any = '0'

  increase() {
    this.counter = this.counter + 1;
    this.message = this.counter;
  }

  decrease() {
    this.counter = this.counter - 1;
    this.message = this.counter;

  }

}
