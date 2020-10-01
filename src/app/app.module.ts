import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import {MatListModule} from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
<<<<<<< HEAD
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ContactComponent } from './contact/contact.component';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { FormBuilderModule } from 'angular-form-builder';


// import { from } from 'rxjs';
=======
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ContactComponent } from './contact/contact.component';
>>>>>>> 14b885770bb29a3543906d741567130c7d004272

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    DishdetailComponent,
<<<<<<< HEAD
    ContactComponent,
    LoginComponent
=======
    ContactComponent
>>>>>>> 14b885770bb29a3543906d741567130c7d004272

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
<<<<<<< HEAD
    NgxStarRatingModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    // FormBuilderModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule
=======
    NgxStarRatingModule
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
