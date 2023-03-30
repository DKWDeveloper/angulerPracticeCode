import { Component } from '@angular/core';
import { SerciveService } from '../service/sercive.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  title: any = 'Pagination'
  list: any;
  page: number = 1;
  count: number;
  tableSize: number = 10;
  tableSizes: any = [10, 15, 20]

  isLoading: boolean = false;

  constructor(private _data: SerciveService, private spinner: NgxSpinnerService) { }

  toggleloading() {
    this.isLoading = true;
    // console.log('loading true')
    setTimeout(() => {
      this.isLoading = false;
      // console.log('loading false')

    }, 2000)
  }


  ngOnInit() {
    this.showData()
  }

  showData() {
    this._data.getAlljsonData().subscribe((res) => {
      return this.list = res;
    })
  }

  onTableDataChange(event: any) {
    this.toggleloading()
    console.log(event)
    this.page = event;
    this.showData()
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    // this.page = 1;
    this.showData();
  }
}
