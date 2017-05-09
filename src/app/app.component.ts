import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/auth.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sarah&quot;s Resume';
  
  constructor(private authService : AuthService ) {}

  ngOnInit() {
   this.authService.intializeApp();
  }
}
