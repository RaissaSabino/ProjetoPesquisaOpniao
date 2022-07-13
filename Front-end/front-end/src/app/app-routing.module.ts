import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdmComponent } from './home-adm/home-adm.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

const routes: Routes = [
  {path:'', component:HomeAdmComponent},
  {path:'form-usuario', component:FormUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
