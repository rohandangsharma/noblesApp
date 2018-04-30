import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { CastlePageModule } from './castle.module';

/**
 * Generated class for the CastlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-castle',
  templateUrl: 'castle.html',
})

export class CastlePage {
  day: number;
  dayName: string = "monday";
  date: string;

  meal: string = "Lunch";

  dates:Array<Date> = new Array;

  weekdays:Array<string> = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');


  constructor(public navCtrl: NavController, public navParams: NavParams, public DataProvider: DataProvider, public http: HttpClient) {
    
    let today = new Date; // get current date
    let first = (today.getDate() - today.getDay())+1;
    
    if (today.getDay()!=0 && today.getDay()!=6){
      this.dayName=this.weekdays[today.getDay()];
    }
    this.date = today.getMonth()+1 + "/" + today.getDate();
    
    for (let i=0; i<5; i++){
      console.log(today);  
      let hello = new Date;
      this.dates[i]= new Date(hello.setDate(first+i));
    }
    console.log(this.dates);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CastlePage');
    this.getFood(this.dayName);
  }

  setMeal(){
    if(this.meal = "Lunch"){
      this.meal = "Dinner";
    }
    else{
      this.meal="Lunch";
    }
  }

  getFood(day:string) {
    let xhttp = new XMLHttpRequest();
    let url = "https://nobilis.nobles.edu/skyworld/castlemenu.php?DisplayType=Phone";
    let num = this.dates[this.weekdays.indexOf(day)-1];
    this.date = num.getMonth()+1 + "/" + num.getDate()
    
    url+="&mealType=" + this.meal;
    url+="&Date=" + this.date;

    
    console.log(url);

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(day).innerHTML= this.responseText;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
}

