import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthorized = this.loginService.getIsAuthorized();

  constructor(private loginService: LoginService) {}

  login(): void {
    const loginDetails = {
      username: 'codelex-admin',
      password: 'Password1234',
    };

    this.loginService.login(loginDetails);
  }

  logout(): void {
    this.loginService.logout();
  }
}
