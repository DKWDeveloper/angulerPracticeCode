import { Component, OnInit } from '@angular/core';
import { find, first, from, map, Observable, of, pluck, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {


  ngOnInit(): void {
    // this.observableMethod()
    this.observableMethod2()
  }

  /**
   * This is function does synchronous
   */
  // observableMethod() {
  //   const observable = new Observable((data) => {
  //     data.next(1);
  //     data.next(2);
  //     data.next(3);
  //     setTimeout(() => {
  //       data.next(1);
  //       data.complete()
  //     }, 2000)
  //   })

  //   observable.subscribe((data) => console.log(data))

  // }

  observableMethod2() {
    // const observable = new Observable((data) => {
    //   data.next(1);
    //   data.next(2);
    //   data.next(3);
    //   setTimeout(() => {
    //     data.next(4);
    //     data.complete();
    //   }, 1000);
    // })

    // observable.subscribe((res) => {

    // })

    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    // });
    // console.log('just after subscribe');

    /**This 'from' operator convert array into observable array */
    let cars = from([
      { id: 1, "color": "purple", "type": "minivan", "registration": new Date('2017-01-03'), "capacity": 7 },
      { id: 2, "color": "red", "type": "station wagon", "registration": new Date('2018-03-03'), "capacity": 5 },
      { id: 3, "color": "black", "type": "creta", "registration": new Date("2023-03-04"), },
      { id: 4, "color": "white", "type": "creta", "registration": new Date('2023-03-04'), "capacity": 7 },
      { id: 5, "color": "black", "type": "swift", "registration": new Date('2023-03-03'), "capacity": 5 },
    ])

    /**This 'of' creation operator convert value in observable string  */
    // let str = of('Deepak', 'Kumar', 'Aman')
    // str.subscribe((res) => console.log(res))


    /**This first method not required callback function  */
    // cars.pipe(first()).subscribe((d) => console.log(d))



    /**This find method requied callback function */
    // cars.pipe(find((d: any) => d)).subscribe((d) => console.log(d))

    /**This method just return value of array object */
    // cars.pipe(pluck('type')).subscribe((d) => console.log('pluck', d))




  }

}
