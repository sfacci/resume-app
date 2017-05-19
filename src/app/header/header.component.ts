import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../auth/auth.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { Subject } from 'rxjs/Subject';
import { AuthGuard } from '../shared/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isNavbarCollapsed = true; 
  userIsSignedIn = false;

  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;
  
  constructor(private authService: AuthService,
              private authGuard : AuthGuard ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged( 
      user => { 
        this.userIsSignedIn = user ? true : false;
    });
    this.authGuard.loginSubject.subscribe(
      () => {
        this.modal.onAnimate(); 
        
        // this.modal.show();
        // this.modal.hide();
      }
    );
  }

  signOutUser() {
    this.authService.signOutUser();
  }
  
}

