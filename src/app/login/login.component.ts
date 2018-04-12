import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formGroup : FormGroup;
  constructor(private formBuilder : FormBuilder, private loginService: LoginService) {
  this.formGroup = this.formBuilder.group({

senha: ['',[Validators.required]],
email: ['',[Validators.required,Validators.email]],

  })

   }

  ngOnInit() {
  }
  login(){
    this.loginService.insert(this.formGroup.value)
    .subscribe(response => {
      console.log("login efetuado com sucessoo");
    }, error =>{
      console.log("erro ao logar");
    })
    console.log(this.formGroup.value);
  }

}