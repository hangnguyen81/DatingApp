import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        console.log(res, 'fsdadf');
      },
      error: (error) => console.log(error),
    });
  }

  logout() {
    this.accountService.logout();
  }
}
