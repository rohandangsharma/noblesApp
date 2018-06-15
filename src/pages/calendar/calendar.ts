import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';



/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  tab1: any
  tab2: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public http: HttpClient) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.dataProvider.getSeason();
    this.getDirectoryData();
  }

    // get(){
    //   let searchtext = "select item.condition from weather.forecast where woeid =2390265"
    //   let url = "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=xml";
  
    //   let weatherData = this.http.get(url, {responseType: 'text'});
    //   let parser = new DOMParser();
    //   let doc = parser.parseFromString(weatherData, "text/xml");
      
  
    //   console.log(doc.getElementsByTagName(""));
    // }


    getDirectoryData() {
      this.dataProvider.weather().subscribe(output=>{
        console.log(output);
        let parser = new DOMParser();
        let doc = parser.parseFromString(output, "text/xml");
        let temp = doc.getElementsByTagName("yweather:condition")[0].getAttribute('temp') + "°F";
        let text = doc.getElementsByTagName("yweather:condition")[0].getAttribute('text');
        console.log(temp + " " + text);
      }, (error)=>{
        console.log('errors', error);
      });
    }
    

}

