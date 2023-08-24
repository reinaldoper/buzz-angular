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
    this.api.getBuzz().subscribe(data => this.buzz = data.results);
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

  clickResponse(target:any){
    const { value } = target;
    this.status = true;
    if(value === 'correct'){
      this.correct += 10;
    }
    this.isdisabled = true;
    
  }

}
