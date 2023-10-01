import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/register',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'quiz',component:QuizComponent, canActivate:[authGuard]},
  {path:'result',component:ResultComponent,canActivate:[authGuard]},

  {path:'navbar',component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
