import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


import { Calendar } from '@ionic-native/calendar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
myStatus:string;
myStatus2:string;
myStatus3:string;
long:number;
lat:number;
  constructor(private storage:Storage, private calendar:Calendar, 
    private geolocation:Geolocation) {}

  ionViewWillEnter() {
    
  }

  calMethod(){
    this.calendar.createCalendar("calMethod").then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

  locationMethod(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat=resp.coords.latitude
      this.long=resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ngOnInit() {
    this.storage.get("ps").then(
      (data) => {
    this.myStatus = data;
    })
    .catch (
      (error) => {
      }
    );
    this.storage.get("xbox").then(
      (data) => {
    this.myStatus2 = data;
    })
    .catch (
      (error) => {
      }
    );
    this.storage.get("pc").then(
      (data) => {
    this.myStatus3 = data;
    })
    .catch (
      (error) => {
      }
    );
  }
}


