import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { StudentModule } from './student/student.module';
import { ViewBookDetailComponent } from './view-book-detail/view-book-detail.component';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';

const routes: Routes = [
  {path: 'home', component: ActivatedRouteComponent},
  {path: 'view-book-detail/:id', component: ViewBookDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },

  { path: 'home', title: 'HomeRoute', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'products', component: ProductsComponent, children: [
      // { path: '', component: ProductsComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],


  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
