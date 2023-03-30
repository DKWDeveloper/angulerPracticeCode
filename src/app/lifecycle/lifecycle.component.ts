import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() childValue: any = 'Hello'
  title: any = 'docheck'



  constructor() {
    // console.log('Constructor call first')
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(`'ngOnChanges called'+ ${changes['childValue'].currentValue}`)
    console.log('ngOnChanges called previous value' + ' ' + changes['childValue'].previousValue)

    console.log('ngOnChanges called current value' + ' ' + changes['childValue'].currentValue)
  }

  ngOnInit() {
    console.log('ngOnInit called ')
  }

  ngDoCheck() {
    console.log('DoCheck lifecycle')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewINit')

  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }

  ngOnDestroy(){
    console.log('component destroy')
  }


  onclick() {
    console.log('heoolo')
  }



}
