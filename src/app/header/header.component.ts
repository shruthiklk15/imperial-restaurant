import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
=======
>>>>>>> 14b885770bb29a3543906d741567130c7d004272

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openLoginForm(): void {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
}

=======
  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
