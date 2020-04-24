import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ps',
  templateUrl: './ps.page.html',
  styleUrls: ['./ps.page.scss'],
})
export class PsPage implements OnInit {
  myStatus:string;
  constructor(private storage:Storage) { }

  ngOnInit() {

  }

  saveStatus() {
    console.log(this.myStatus);
    this.storage.set("ps", this.myStatus);
  
    }
    

}
