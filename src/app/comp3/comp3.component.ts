import { Component } from '@angular/core';
import { SerciveService } from '../service/sercive.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
  name: any = 'uxDeepak';

  constructor(private tr: SerciveService) { }
  ngOnInit() {
    this.tr.name.subscribe((data => {
      this.name = data
    }))
  }

  Onclick(data: any) {
    // this.name = data
    this.tr.name.next(data)
    // this.sr.subject(data).subscribe((n) => this.name = n)
  }


}
