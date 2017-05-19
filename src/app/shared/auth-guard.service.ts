import { Injectable }  from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AuthGuard implements CanActivate {
  loginSubject = new Subject();

  constructor(private authService: AuthService,
              private router: Router){ }

  canActivate() {
    // check authentication status
    return this.authService.isUserSignedIn().then(
      (userLoggedIn) => { 
        //show modal
        if (!userLoggedIn) { this.loginSubject.next(); }
        //deny access
        return userLoggedIn; 
      }
    );
  }

}