import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'

import { AngularMaterialModule } from './angular-material/angular-material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { WishlistFormComponent } from './wishlist-form/wishlist-form.component';

const routes: Routes = [
  {path: 'wishlist', component: UserWishlistComponent},
  {path: 'home', component: HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'wishlist-form', component: WishlistFormComponent}
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    UserWishlistComponent,
    WishlistFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
