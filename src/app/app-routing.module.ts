import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/Auth.service';
import { ProduitComponent } from './produit/produit.component';
import { PaimentComponent } from './paiment/paiment.component';
import { MesReservationComponent } from './mes-reservation/mes-reservation.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component: RegisterComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'produit',component: ProduitComponent},
  {path: 'paiment/:id',component: PaimentComponent},
  {path: 'mesRes',component: MesReservationComponent},

  
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
