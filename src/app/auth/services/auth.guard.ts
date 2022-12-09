import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private auth: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    if (!(await this.auth.isAuthenticated())) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
