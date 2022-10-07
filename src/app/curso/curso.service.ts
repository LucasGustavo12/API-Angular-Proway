import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'

})
export class CursoService {


  //url
  url = "http://localhost/api/php/";

  vetor: Curso[] = [];


  //construtor
  constructor(private http: HttpClient) { }


  //metodo de listar
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+'listar').pipe(
      map((res:any) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }

  //cadastrar curso
  cadastrarCurso(c:Curso):Observable<Curso[]> {
    return this.http.post(this.url+'cadastrar',{cursos:c})
    .pipe(map((res:any) => {
      this.vetor.push(res['cursos']);
      return this.vetor;
    }))
  }

}
