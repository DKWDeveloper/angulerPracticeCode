import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';
import { BookDataServiceService } from '../service/book-data-service.service';
import { Book } from '../service/bookInterface';

@Component({
  selector: 'app-view-book-detail',
  templateUrl: './view-book-detail.component.html',
  styleUrls: ['./view-book-detail.component.css']
})
export class ViewBookDetailComponent {
  book: Book = new Book();
  // book: any;

  constructor(private route: ActivatedRoute,
    private bookservice: BookDataServiceService,
    private location: Location) { }

  ngAfterContentInit(): void {
    this.route.params.subscribe(params => {
      // alert(params['id']);
      this.bookservice.getBook(parseInt(params['id'])).subscribe((item: any) => this.book = item)
    })

  }
  goBack(): void {
    this.location.back();
  }
}
