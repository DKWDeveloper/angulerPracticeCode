import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomdirectiveDirective } from './customdirective.directive';
import { SerciveService } from './service/sercive.service';
import { HttpClientModule } from '@angular/common/http'
import { OtherServiceService } from './service/other-service.service';
import { RouterModule } from '@angular/router';
import { RouterComponent } from './router/router.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';
import { ViewBookDetailComponent } from './view-book-detail/view-book-detail.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PromiseComponent } from './promise/promise.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
// import { StudentModule } from './student/student.module';

// import { SingaltonService } from './service/singalton.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomerListComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    LifecycleComponent,
    CustomdirectiveDirective,
    RouterComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    RxjsComponent,
    ViewchildComponent,
    ActivatedRouteComponent,
    ViewBookDetailComponent,
    PaginationComponent,
    PromiseComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule,
    NgxSpinnerModule
    // StudentModule




  ],
  providers: [SerciveService, OtherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App module')
  }
}
