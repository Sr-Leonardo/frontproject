import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  users: User[] = [];

  constructor(private service:UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe( data=>{
      this.users=data;
    });
  }



}
