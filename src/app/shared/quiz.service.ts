import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //--------------Propertie--------------

  readonly rootUrl= 'https://localhost:44370';
  qns:any[];
  seconds:number;
  timer;
  qnProgress:number;
  correctQuetionCount:number=0;
  //-----------Helper Method------------------

  constructor(private http:HttpClient,) { }
  displayTimeElapsed(){
    return Math.floor(this.seconds/ 3600) +':'+Math.floor(this.seconds/60)+':'+Math.floor(this.seconds % 60);
  }
  //----------Http Method----------------
  insertParticipant(name:string, email:string){
    var body ={
      Name :name,
      Email:email
    }
    return this.http.post(this.rootUrl +'/api/InsertParticipant', body)

  }
  GetQuestions(){
    return this.http.get(this.rootUrl +'/api/Questions');
  }
  getAnswers(){
    var body= this.qns.map(x=>x.QnID)
    return this.http.post(this.rootUrl+'/api/Answers', body)
  }
  getParticipantName(){
    var participant=JSON.parse(localStorage.getItem('Participant'));
    return participant.Name;
  }
  submitScore(){
    var body= JSON.parse(localStorage.getItem('Participant'));
    body.Score = this.correctQuetionCount;
    body.TimeSpent=this.seconds
    return this.http.post(this.rootUrl+'/api/UpdateOutput', body)
  }
}
