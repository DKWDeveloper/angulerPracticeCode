import { Component } from '@angular/core';
import { BookDataServiceService } from '../service/book-data-service.service';
import { Book } from '../service/bookInterface';

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
  styleUrls: ['./activated-route.component.css']
})
export class ActivatedRouteComponent {

  data!: Book[];
  constructor(private _ser: BookDataServiceService) { }

  ngOnInit() {
    this.getDataOfBook();
  }

  getDataOfBook() {
    this._ser.getBooks().subscribe((res) => this.data = res)
  }

}
