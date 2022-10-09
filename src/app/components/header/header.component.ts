import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthorized = this.loginService.getIsAuthorized();
  publicHeaderItems = [
    {
      path: '/airports',
      title: 'Airports',
    },
    {
      path: '/search',
      title: 'Search',
    },
  ];
  privateHeaderItems = [
    {
      path: '/airports',
      title: 'Airports',
    },
    {
      path: '/search',
      title: 'Search',
    },
    {
      path: '/find',
      title: 'Find flight',
    },
    {
      path: '/add',
      title: 'Add flight',
    },
  ];

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
