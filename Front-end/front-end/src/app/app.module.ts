import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { TelaChaveComponent } from './tela-chave/tela-chave.component';
import { CriarEditarFormComponent } from './criar-editar-form/criar-editar-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    TelaChaveComponent,
    CriarEditarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:TopBarComponent},
      {path:'login',component:LoginComponent},
      {path:'acesso',component:TelaChaveComponent},
      {path:'edit',component:CriarEditarFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
