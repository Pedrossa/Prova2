import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from '../domain/servicos';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServicoService {

  constructor(private http :HttpClient) { }

getServico() : Observable<Servico[]>{

  return this.http.get<Servico[]>(`https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/clientes`);
}


}