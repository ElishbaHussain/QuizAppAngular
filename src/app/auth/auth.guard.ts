import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class authGuard {
  constructor(private router:Router){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean{
    debugger
    if(localStorage.getItem('Participant')!=null)
     
    return true;
   this.router.navigate(['/register']);
  return false;
  }
  }

