import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: 'home', component: IndexComponent },
{ path: 'login', component: LoginComponent },
{ path: 'cadastro-cliente', component: CadastroClienteComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}