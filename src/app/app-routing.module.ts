import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'', redirectTo:'/register',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'quiz',component:QuizComponent},
  {path:'result',component:ResultComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
