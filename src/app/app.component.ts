import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectbdb';

  constructor(private router:Router){}

  getUsers(){
    this.router.navigate(["get"]);
  }

  addUsers(){
    this.router.navigate(["add"]);
  }
}
