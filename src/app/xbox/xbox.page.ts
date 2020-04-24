import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.page.html',
  styleUrls: ['./xbox.page.scss'],
})
export class XboxPage implements OnInit {
myStatus2:string;
constructor(private storage:Storage) { }

ngOnInit() {

}

saveStatus2() {
  console.log(this.myStatus2);
  this.storage.set("xbox", this.myStatus2);

  }
}
