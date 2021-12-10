import { Component, OnInit } from '@angular/core';
//import { UserService } from "../services/user/user.service";
import { AuthService } from '../services/auth/login/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styles: [],
})
export class RedirectComponent implements OnInit {
  constructor(
    private authService: AuthService,
    //private _userService: UserService,
    public router: Router
  ) {
    
    // check login
    if (authService.isAuthenticated()) {
      this.router.navigate(['/home/']);
      return;
    }

    this.router.navigate(['/login']);
  
 
  }

  ngOnInit() {}
}