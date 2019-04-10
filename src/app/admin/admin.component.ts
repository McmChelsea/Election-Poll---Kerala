import { Component, OnInit } from '@angular/core';
import { FireServiceService } from '../fire-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items: Array<any>;
  a: any;
  constructor( public db: FireServiceService) { }

  ngOnInit() { 
    this.getDetails();
  }

  getDetails = () => 
  this.db.getPeople().subscribe(res => (this.a = res));

}
