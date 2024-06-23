import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-spect',
  templateUrl: './login-spect.component.html',
  styleUrls: ['./login-spect.component.css']
})
export class LoginSpectComponent {
  dni: string = '';
  codigoBoleto: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginViewer(this.dni, this.codigoBoleto).subscribe(isValid => {
      if (isValid) {
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}