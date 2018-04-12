import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClientService } from './services/cliente.service';
import { ErrorInterceptorProvider } from './services/interceptor-error';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';





@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    LoginComponent, IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ClientService,LoginService, , ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
