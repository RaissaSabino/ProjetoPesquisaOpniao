import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { TelaChaveComponent } from './tela-chave/tela-chave.component';
import { CriarEditarFormComponent } from './criar-editar-form/criar-editar-form.component';
import { HomeAdmComponent } from './home-adm/home-adm.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { CadastroAdmComponent } from './cadastro-adm/cadastro-adm.component';
import {AuthService} from './tela-chave/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    TelaChaveComponent,
    CriarEditarFormComponent,
    HomeAdmComponent,
    FormUsuarioComponent,
    CadastroAdmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [BrowserModule, DataTablesModule],
    RouterModule.forRoot([
      {path: '', component:TelaChaveComponent},
      {path:'login',component:LoginComponent},
      {path:'acesso',component:TelaChaveComponent},
      {path:'edit',component:CriarEditarFormComponent},
      {path:'user',component:FormUsuarioComponent}
    ]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
