import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = [];

  onSubmitUser(user: object) {
    this.users = [...this.users, user];
  }
}
