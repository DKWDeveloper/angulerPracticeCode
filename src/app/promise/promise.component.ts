import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
  title: string = 'Promise'
  base_url: string = 'https://jsonplaceholder.typicode.com/todos/'
  // data: any = [];

  isLoading: boolean = true;
  data: any;
  errorMessage: string = '';
  results: unknown[];

  ngOnInit(): void {
    // this.fetchMethod()
    // this.fetchdata_usingtry_catch()
    // this.fetchData_throwError()
    // this.promiseMethod()
    // this.promiseFetchMethod()
    this.getResults()

    // this.usingForLoop()


  }

  /**This function fetch the data from json server using fetch method */
  fetchMethod() {
    fetch(this.base_url)
      .then(res => res.json())
      .then((result) => {
        this.data = result
      }).catch(error => console.log('this url not valid', error))
  }

  /**This function fetch the data from json server using async and await method method */
  async fetchdata_usingtry_catch() {
    try {
      const fetchData = await fetch(this.base_url)
      const serveData = await fetchData.json()
      this.data = serveData
      console.log('my data', serveData)

    } catch (error) {
      console.log('error', error)
    } finally {

      console.log('finally fetch the data')
    }

  }

  /**This method is throw a error  */
  async fetchData_throwError() {
    try {
      const response = await fetch(this.base_url)
      if (!response.ok) {
        throw new Error('network error');
      }
      const result = await response.json();
      this.data = result;
    } catch (error) {
      // console.log('Error', error)
      this.errorMessage = error;
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 3000)

  }

  /**This is basic of promise  */
  promiseMethod() {
    let promise = new Promise((resolve, reject) => {
      if (this.isLoading == false) {
        resolve('resolve the problem')
      }
      else {
        reject('reject the task')
      }
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 1000)


    promise.then(res => console.log(res))
      .catch(err => console.log('trow a error', err))
  }

  /**using the new promise of fetch the data */
  promiseFetchMethod(): Promise<any> {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)

    return new Promise((resolve, relect) => {
      fetch(this.base_url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('network error ');
          }
          return response.json();
        }).then((ressult) => {
          console.log(ressult)
          resolve(this.data = ressult)
        }).catch((error) => {
          this.errorMessage = error
          relect(this.errorMessage = error)
        })
    })
  }

  /**promise.all method  */
  getResult1() {
    // Return a promise
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Result 1')
        resolve(1);
      }, 1000);
    });
  }

  getResult2() {
    // Return a promise
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Result 2')
        resolve(2);
      }, 2000);
    });
  }

  getResult3() {
    // Return a promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Result 3')
        // reject('Result 3');
        resolve(3)
      }, 1000);
    });
  }

  getResults() {
    // Create an array of promises
    const promises = [
      this.getResult1(),
      this.getResult2(),
      this.getResult3()
    ];

    // Execute all promises in parallel using Promise.all()



    // Promise.race(promises)
    //   .then((results) => {
    //     console.log(results)
    //     // this.results = results;
    //   })
    //   .catch((error) => {
    //     console.error('Promise error:', error);
    //   });


    Promise.all(promises)
      .then((results) => {
        console.log(results)
        // this.results = results;
      })
      .catch((error) => {
        console.error('Promise error:', error);
      });
  }


  /**Same code using one function means that reduce the length of code  */
  promisesArr = [];
  array: any = [];

  promise_fun(value: any, msg: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        // if (value == 3) {
        //   // reject(msg)
        //   resolve(value)
        // } 
        // else {
        //   console.log(msg)
        //   reject(value)
        // }
        console.log(msg)

        resolve(value)

      }, value * 2000)
    })
  }

  arr = ['', 'Promise -->first', 'Promise -->second', 'Promise -->thrid']

  usingForLoop() {
    for (let i = 1; i <= 3; i++) {
      this.promisesArr.push(this.promise_fun(i, this.arr[i]));
    }


    Promise.all(this.promisesArr)
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        console.error('Error:', error)
      })



  }

}




