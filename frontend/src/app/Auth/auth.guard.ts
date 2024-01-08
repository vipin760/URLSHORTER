import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { USER_KEY } from '../shared/constants/key';

@Injectable({
  providedIn: 'root',
})
export class userGuard implements CanActivate {
  constructor(private router: Router) {}
////////////////////////////////////////////////////////////////////////
  canActivate(): boolean {
    const token = localStorage.getItem(USER_KEY);
    if (token) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
////////////////////////////////////////////////////////////////////////
}