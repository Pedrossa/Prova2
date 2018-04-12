import { Component, OnInit } from '@angular/core';
import { Servico } from '../domain/servicos';

import { ServicoService } from '../services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {



  servicos : Servico[];
  constructor(private servicecomponent : ServicoService) {
    this.getServico();
   }

  ngOnInit() {
  }
  
getServico(){
  this.servicecomponent.getServico()
  .subscribe(response => {
this.servicos = response;
console.log(response);

  })
}
}