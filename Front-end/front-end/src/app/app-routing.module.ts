import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdmComponent } from './home-adm/home-adm.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { CadastroAdmComponent } from './cadastro-adm/cadastro-adm.component';
import { LoginComponent } from './login/login.component';
import { TelaChaveComponent } from './tela-chave/tela-chave.component';
import { CriarEditarFormComponent } from './criar-editar-form/criar-editar-form.component';

const routes: Routes = [
  {path:'', component:HomeAdmComponent},
  {path:'formulario', component:FormUsuarioComponent},
  {path:'cadastro', component:CadastroAdmComponent},
  {path:'login',component:LoginComponent},
  {path:'acesso',component:TelaChaveComponent},
  {path:'create-edit',component:CriarEditarFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
