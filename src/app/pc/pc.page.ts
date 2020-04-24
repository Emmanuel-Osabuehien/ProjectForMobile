import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.page.html',
  styleUrls: ['./pc.page.scss'],
})
export class PcPage implements OnInit {

  myStatus3:string;
  constructor(private storage:Storage) { }

  ngOnInit() {

  }

  saveStatus3() {
    console.log(this.myStatus3);
    this.storage.set("pc", this.myStatus3);
  
    }

}
