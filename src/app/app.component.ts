import { AfterViewChecked, AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { filter, find, first, from, interval, map, reduce, Subscription } from 'rxjs'
import { SerciveService } from './service/sercive.service';
import { NgForm } from '@angular/forms';
import { ViewchildComponent } from './viewchild/viewchild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // title = 'Angular_project';
  // data = 'My angular Data';
  // value = 100
  // myfunction() {
  //   return 'this is just function'
  // }
  // array: any = [];
  // mapData: any;
  // data1: Subscription = new Subscription;
  // value: any;
  // value2: any;


  /**15 march code */
  @ViewChild(ViewchildComponent)
  value!: ViewchildComponent;


  // ngAfterViewChecked(){
  //   this.value.increase()
  // }

  CallInParentIncrease() {
    this.value.increase();
  }

  CallInParentDecease() {
    this.value.decrease();
  }




  // ---------------


  // -------This is today task type script-------
  title = "CodeSandbox";
  valid: boolean = false;
  isLoggedIn: boolean = true;

  onclick() {
    this.valid = true;
  }

  selectOption: any;

  getSelectedValue(value: any) {
    console.log(value.target.value);
    this.selectOption = value.target.value;
  }

  product = [
    { productId: 1, productName: "Laptop", productPrice: "30,000" },
    { productId: 2, productName: "iphone", productPrice: "90,000" },
    { productId: 3, productName: "tv", productPrice: "20,000" }
  ];


  // ------- 2-march-2023------------

  newArr: any = [];

  constructor(private sr: SerciveService) {
    // console.log('component')
  }

  showApiData() {
    return this.sr.getData().subscribe((res) => {
      // console.log('api data',res)
      this.newArr = res
    })
  }


  onSubmit(value: any) {
    return this.sr.postData(value).subscribe((res) => {
      this.newArr.push(res.title)
      console.log(res)
    })
  }


  deleteData(value2: any) {
    console.log(value2)
    this.sr.deleteData(value2).subscribe((res) => {
      console.log('data deleted successfully', res)
      // this.newArr.delete(value2);

    })
  }

  updateData() {
    this.sr.putMethod().subscribe((res) => {
      console.log('This is update data', res)
    })
  }



  myData: any = '==> Parent tochild'

  myfunction() {
    console.warn('this is function')
  }

  myObject = {
    name: 'Deepak',
    lastName: 'Kumar',
    age: '25'
  }

  myArray = [10, 20, 30, 40, 50]



  recieveData(value: any) {
    console.log("this is parent component", value)
  }


  // ---------end-----------

  ngOnInit(): void {

    // this.getOuput()
    this.getProductData()

    this.showApiData()
    // this.deleteData()
    // this.onSubmit

    // this.mapMethod()

  }


  pr!: number;
  pn!: string;
  arrObj: any = [];

  getProductData() {
    // this.pr = this.sr.product.productId
    // this.pn = this.sr.product.productName

    this.arrObj = this.sr.product;

  }
  getOuput() {
    this.sr.msg()
  }

  // -------------end-------------



  dataValue: any;
  submitData(inputValue: any) {
    this.dataValue = inputValue
  }

  // form keyword make array observable
  cars = from([
    { id: 1, "color": "purple", "type": "minivan", "registration": new Date('2017-01-03'), "capacity": 7 },
    { id: 2, "color": "red", "type": "station wagon", "registration": new Date('2018-03-03'), "capacity": 5 },
    { id: 3, "color": "black", "type": "creta", "registration": new Date("2023-03-04"), },
    { id: 4, "color": "white", "type": "creta", "registration": new Date('2023-03-04'), "capacity": 7 },
    { id: 5, "color": "black", "type": "swift", "registration": new Date('2023-03-03'), "capacity": 5 },
  ])












  // ngOnInit(): void {
  //   const castVideos = interval(1000);
  //   this.data1 = castVideos.pipe(map(data => 'video' + data)).subscribe(res => {
  //     // console.log(res)
  //     // this.array = res
  //     // return this.value = res
  //   })

  //   setTimeout(() => {
  //     this.data1.unsubscribe();
  //   }, 10000)


  //   this.arrayObj()


  //   // console.log('ngOnInit life cycle called')
  // }

  /**
   * This function used to 
   * @param data
   */



  /**
 * This function is used to calculate the sum of two numbers.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 *
 * @returns {number} The sum of `a` and `b`.
 */



  /**function addNumbers(a, b) {
    return a + b;
  }
  */




  // arrayObj(data?: any): void {
  //   this.cars.pipe(map(d => {
  //     // d.color
  //     return d.capacity
  //   })).subscribe(res => {
  //     // this.value2 = 
  //     console.warn(res)
  //     return this.sr.print(res, 'box')
  //   })



  //   var fill = this.cars.pipe(filter<any>((data) => {
  //     // console.log('fillterdata', data.id)
  //     return data.capacity
  //   })).subscribe((res) => {
  //     // console.log('registration', res)
  //   })

  //   console.log('filterrrr',fill)

  //   this.cars.pipe(reduce<any>((acc, ele, index) => {
  //     console.log(ele)
  //     // return ele
  //   })).subscribe((res) => {
  //     console.log('data of reduce =>', res)
  //   })

  //   this.cars.pipe(find<any>((data, index) => {
  //     // console.log(data.color === 'black')
  //     // console.log(index)
  //     return data
  //   })).subscribe((result) => {
  //     // console.log(result)

  //     return result
  //   })


  // }



}
