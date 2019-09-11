import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { User } from 'src/app/core/models';

@Component({
  selector: 'app-dialog-data-user',
  templateUrl: './dialog-data-user.component.html',
  styleUrls: ['./dialog-data-user.component.scss']
})
export class DialogDataUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDataUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
