import { ApiService } from 'src/app/components/api.service';
import { Component, OnInit } from '@angular/core';
import  {Router}  from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  response: number = 0;
  msg: string = '';

  constructor(private route: Router, private api: ApiService){}
  ngOnInit(): void {
    this.response = this.api.getResult();
    this.getResult();
  }

  Back(){
    this.route.navigate(['/']);
  }

  getResult(){
    if(this.response === 0){
      this.msg = 'Precisa melhorar muito, resultado abaixo do esperado!'
    } else if(this.response > 0 && this.response <= 50){
      this.msg = 'Precisa melhorar, jaja se torna expert!'
    } else if(this.response > 51 && this.response <= 80){
      this.msg = 'Parabéns, nivel bom atingido!'
    } else {
      this.msg = 'Parabéns, nivel hard alcançado!'
    }
  }

}
