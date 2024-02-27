import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  loginObj: any = {
    userName: 'user',
    password: 'user',
  };
  onLogin() {
    if (
      this.loginObj.userName === 'user' &&
      this.loginObj.password === 'user'
    ) {
      this.router.navigateByUrl('/products');
    } else {
      alert('Wrong credentials');
    }
  }
}
