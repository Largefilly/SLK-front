import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent {
  email: string = '';
  dni: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginStaff(this.email, this.dni).subscribe(isValid => {
      if (isValid) {
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}