import { Component, OnInit } from '@angular/core';

import { UserMock, User } from 'src/app/core/models';
import { UserOrderBy } from '../../../core/models/user.model';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

  constructor() { }

  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'email'];

  ngOnInit() {
    this.users = UserMock;
    this.users.sort(UserOrderBy.byFullName);
  }

}
