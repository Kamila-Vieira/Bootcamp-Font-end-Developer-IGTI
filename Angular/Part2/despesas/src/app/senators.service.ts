import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URLBase = 'http://localhost:3000';

export interface Senator {
  id: number;
  nomeSenador: string;
}

export interface SenatorExpanses {
  id: number;
  nomeSenador: string;
  despesas: [
    tipo: number,
    fornec: string,
    ano: number,
    mes: number,
    dia: number,
    valor: number,
    total: number
  ];
}

@Injectable({
  providedIn: 'root',
})
export class SenatorsService {
  constructor(private http: HttpClient) {}

  listSenators() {
    return this.http.get<Senator[]>(`${URLBase}/senadores`);
  }

  retrieveSenator(id: number) {
    return this.http.get<SenatorExpanses>(`${URLBase}/despesassenador/${id}`);
  }

  totalExpanses(senator: SenatorExpanses) {
    return this.http.put<SenatorExpanses>(
      `${URLBase}/despesassenador/${senator.id}`,
      senator
    );
  }
}
