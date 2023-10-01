import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  implements OnInit{
  constructor(public quizservice :QuizService, private router:Router){}
  ngOnInit(): void {
if(parseInt(localStorage.getItem('qnProgress'))==10){
    this.quizservice.seconds=parseInt(localStorage.getItem('seconds'))
    this.quizservice.qnProgress=parseInt(localStorage.getItem('qnProgress'))
    this.quizservice.qns=JSON.parse(localStorage.getItem('qns'))

      this.quizservice.getAnswers().subscribe(
        (data:any)=>{
          this.quizservice.correctQuetionCount=0;
          this.quizservice.qns.forEach((e,i)=>{
            if(e.answer == data[i])
            this.quizservice.correctQuetionCount++;
          e.correct = data[i]
          })
        }
      )}
      else
      this.router.navigate(['/quiz'])
  }
  onSubmit(){
    this.quizservice.submitScore().subscribe(()=>{
      this.restart();
    })
  }
  restart(){
    localStorage.setItem('qnProgress',"0")
    localStorage.setItem('qns',"")
    localStorage.setItem('seconds',"0")
    this.router.navigate(['/quiz'])
  }

}
