import { Component, Input, OnInit } from '@angular/core';
import { Buzz } from 'src/app/components/TTypeBuzz';
import { ApiService } from 'src/app/components/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buzz: Buzz[] = [];
  next: number = 0;
  correct: number = 0;
  isdisabled: boolean = false;
  status: boolean = false;

  constructor(private api: ApiService, private route: Router) {}
  ngOnInit(){
    this.getBuzz();
  }
 
  getBuzz():void{
    this.api.getBuzz().subscribe(data => {
      this.buzz = data.results
      this.buzz.forEach(data => data.alQuestions = this.embaralharArray(data.incorrect_answers, data.correct_answer));
    });
    
  }

  Next(){
    this.next++;
    this.status = false;
    this.isdisabled = false;
    if(this.next > this.buzz.length -1){
      this.api.setResult(this.correct);
      this.route.navigate(['result']);
    }
  }

  clickResponse(option:any){
    this.status = true;
    if(option === this.buzz[this.next].correct_answer){
      this.correct += 10;
    }
    this.isdisabled = true;
    
  }

  embaralharArray = (array: any, arr: any) => {
    const result = [...array, arr];
    const number = 0.5;
    return result.sort(() => Math.random() - number);
  };

}
