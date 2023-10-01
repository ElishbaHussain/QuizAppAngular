import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
constructor(private router:Router, public quizservice:QuizService){}
ngOnInit(){
  if(parseInt(localStorage.getItem('seconds'))>0){
    this.quizservice.seconds=parseInt(localStorage.getItem('seconds'))
    this.quizservice.qnProgress=parseInt(localStorage.getItem('qnProgress'))
    this.quizservice.qns=JSON.parse(localStorage.getItem('qns'))
    if(this.quizservice.qnProgress ==10)
    this.router.navigate(['/result'])
  else
  this.startTimer()
  }
  else{
    this.quizservice.seconds=0;
    this.quizservice.qnProgress=0;
    this.quizservice.GetQuestions().subscribe(
      (data:any)=>{
  
        this.quizservice.qns =data;
  this.startTimer();
      }
    )
  }

  

  }
  startTimer(){
    this.quizservice.timer=setInterval(()=>{
      this.quizservice.seconds++;
      localStorage.setItem('seconds', this.quizservice.seconds.toString());
    },1000);
  }
  answer(qID, choice) {
           this.quizservice.qns[this.quizservice.qnProgress].answer =choice;
           localStorage.setItem('qns',JSON.stringify(this.quizservice.qns));
           this.quizservice.qnProgress++;
           localStorage.setItem('qnProgress',this.quizservice.qnProgress.toString());
           if(this.quizservice.qnProgress ==10){
            clearInterval(this.quizservice.timer);
            this.router.navigate(['/result']);
           }
  }}

