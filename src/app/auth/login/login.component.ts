import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,
              private router: Router) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
   
    this.authService.signInUser(email, password);
  
    firebase.auth().onAuthStateChanged( 
      user => {
      if (user) {
        // User is signed in.
        this.router.navigate(['/start']); 
      } 
    });
    
    // redirect to start page
    
  }
}
