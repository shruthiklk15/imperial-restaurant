import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
                        { path: 'about', component: AboutComponent },
                        { path: 'menu', component: MenuComponent },
                        { path: 'dish-detail/:id', component: DishdetailComponent },
<<<<<<< HEAD
                        { path: 'contact', component: ContactComponent },
                        { path: 'login', component: LoginComponent}];
=======
                        { path: 'contact', component: ContactComponent }];
>>>>>>> 14b885770bb29a3543906d741567130c7d004272

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
