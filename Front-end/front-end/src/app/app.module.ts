import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeAdmComponent } from './home-adm/home-adm.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeAdmComponent,
    FormUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [BrowserModule, DataTablesModule],
    RouterModule.forRoot([
      {path: '', component : HomeAdmComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
