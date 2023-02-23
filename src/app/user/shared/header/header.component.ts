import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogInComponent } from '../../log-in/log-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private dialog: MatDialog
    ) { }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 0,
        title: 'Account'
    };

    this.dialog.open(LogInComponent, dialogConfig);
    
    const dialogRef = this.dialog.open(LogInComponent, dialogConfig);  
    dialogRef.close();
}
}
