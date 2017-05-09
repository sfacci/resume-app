import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isNavbarCollapsed = false; // if screen size is small set to true
  userIsSignedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged( 
      user => { this.userIsSignedIn = user ? true : false;
    });
  }

  signOutUser() {
    this.authService.signOutUser();
  }
  
}

