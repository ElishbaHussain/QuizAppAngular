import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router, private quizservice:QuizService){}
ngOnInit(): void {
    
}
  signOut(){
    localStorage.clear()
    clearInterval(this.quizservice.timer)
    this.router.navigate(['/register']);

  }
}
