import { Component, OnInit } from '@angular/core';

import { UserMock, User } from 'src/app/core/models';
import { UserOrderBy } from '../../../core/models/user.model';
import { MatDialog } from '@angular/material';
import { DialogDataUserComponent } from '../dialog-data-user/dialog-data-user.component';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'button'];

  ngOnInit() {
    this.users = UserMock;
    this.users.sort(UserOrderBy.byFullName);
  }

  more(value: User) {
    const dialogRef = this.dialog.open(DialogDataUserComponent, {
      width: '50%',
      data: value
    });
  }

}
