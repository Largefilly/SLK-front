import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginAsSpectator() {
    this.router.navigate(['login-spect']);
  }

  loginAsStaff() {
    this.router.navigate(['login-staff']);
  }
}
