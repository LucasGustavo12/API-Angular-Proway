
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

//vetor
vetor: Curso[]=[];

//Objeto da classe curso
curso = new Curso();

  //constructor
constructor(private curso_servico: CursoService) { }



  //URL base
  url = "http://localhost/api/php/";


  //inicializador
  ngOnInit() {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }

  //metodo Cadastro
  cadastro():void {
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {
        //adicionando dados ao vetor
        this.vetor = res;

        //limpar os atributos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        //atualizar a listagem

        this.selecao();
      }
    )
  }

  //metodo de seleção
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )

  }
  //metodo de alteração
  alterar():void{
    alert("Alterar");
  }
  //metodo de exclusão
  remover():void{
    alert("Remover");
  }

}
