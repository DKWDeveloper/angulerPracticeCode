import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private element: ElementRef) {
    this.changeColor('green')
    // console.log('custom directive', element)
    // element.nativeElement.style.color = 'green'
  }

  @HostListener("mouseenter") mouseEnter() {
    this.changeColor('red')
  }

  @HostListener("mouseleave") mouseLeave(){
    this.changeColor('green')
  }


  changeColor(color: any) {
    this.element.nativeElement.style.color = color
  }
}
