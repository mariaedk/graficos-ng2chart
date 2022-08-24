import { environment } from './../../environments/environment';
import { Regiao } from './../models/regiao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor(private httpClient: HttpClient) { }

  urlApiRegiao = `${environment.urlApi}/api/regiao`

  getRegioes()
  {
    return this.httpClient.get<Regiao[]>(this.urlApiRegiao);
  }

  getQtdHabitantes()
  {
    return this.httpClient.get<number[]>(`${this.urlApiRegiao}/habitantes`);
  }

  getNomesRegioes()
  {
    return this.httpClient.get<string[]>(`${this.urlApiRegiao}/nomesRegioes`);
  }
}
