import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  firstName: any;

  /**This is input receive data parent to child */
  @Input() myData: any;
  @Input() myfunction: any;
  @Input() myObject: any;
  @Input() myArray: any;

  @Output() myChildData: EventEmitter<string> = new EventEmitter();
  childData: string = 'Hi i am child Data'
  childObject: any = {name: 'Drk', age: '25'}



  childSendData() {
    this.myChildData.emit(this.childData)
    this.myChildData.emit(this.myData)
    this.myChildData.emit(this.childObject)

  }

  parentToChild() {
    console.log('data ', this.myData)
    // console.log('this is function',this.myfunction())
    // console.log('function ',this.myfunction())
    console.log('object ', this.myObject)
    console.log('array', this.myArray)
  }

  ngOnInit(): void {
    this.parentToChild()
  }


  onSubmit(value: any) {
    console.log(value)
  }

  reactiveForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.min(18), Validators.max(50)]),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])),
    password: new FormControl('', [Validators.required]),

  })



  setValue() {
    this.reactiveForm.setValue({
      firstName: 'John Doe',
      email: 'dk@gmail.com',
      password: 'john.doe@example.com'
    });
  }

  patchValue() {
    this.reactiveForm.patchValue({
      firstName: 'Jane Smith',
    });
  }


  disableEmail() {
    this.reactiveForm.get('email')?.disable();
  }

  enableEmail() {
    this.reactiveForm.get('email')?.enable();
  }

  resetEmail() {
    this.reactiveForm.reset();
  }
  /***This finctions indicates different-2 property */

  submitForm() {
    // console.log(this.reactiveForm.value)
    // console.warn(this.reactiveForm)
    // console.log(this.reactiveForm.value.firstName)
    console.log(this.reactiveForm.get('firstName')?.value)
    console.log(this.reactiveForm.get('firstName')?.touched)
    console.log(this.reactiveForm.get('firstName')?.dirty)
    console.log(this.reactiveForm.get('firstName')?.valid)
    console.log(this.reactiveForm.get('firstName')?.invalid)
    console.log(this.reactiveForm.get('firstName')?.errors)
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
    } else {
      this.reactiveForm.markAllAsTouched();
      // this.reactiveForm.reset();

    }
  }

  get fnError() {
    return this.reactiveForm.get('firstName')
  }

  get passError() {
    return this.reactiveForm.get('password')
  }

  get emailError() {
    return this.reactiveForm.get('email')
  }

}
