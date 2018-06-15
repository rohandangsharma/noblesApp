import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {
  schools: Array<{name: string, image: string}>;
  
  startDate:Date;

  games=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public DataProvider: DataProvider) {
    //let today = new Date;
    this.startDate = new Date(+new Date - 12096e5);
    
    
    this.schools = [
      { 
        name: 'Belmont Hill',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Belmont_Hill_School_Seal.svg/1200px-Belmont_Hill_School_Seal.svg.png'
      },
      { 
        name: 'Brooks',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Brooks.png/220px-Brooks.png'
      },
      { 
        name: 'Rivers',
        image: 'https://images.noodle.com/profiles/schools/ktjNb/photos/RiversCrestred.png'
      },
      { 
        name: 'BBN',
        image: 'https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1452229532/dh7pslj2c1bkavgzyq1d.png'
      },
      { 
        name: 'Roxbury Latin',
        image: 'http://upload.wikimedia.org/wikipedia/en/8/8e/Roxbury_Latin_School_escutcheon.png'
      },
      { 
        name: "Governor's",
        image: 'https://withtruecourage.org/wp-content/uploads/2017/08/gov-favicon-1.png'
      },
      { 
        name: "St. George's",
        image: 'https://sgs.reachboarding.com/__uploads/sgs/Assets/EMBLEM-T%20StGeorges%20USA.png'
      },
      { 
        name: 'Groton',
        image: 'https://i.vimeocdn.com/portrait/19391240_300x300'
      },
      { 
        name: "St. Mark's",
        image: 'http://stmarkbristol.com/wp-content/uploads/2014/11/sms_cyo.gif'
      },
      { 
        name: 'Lawrence Academy',
        image: 'http://www.bostonherald.com/sites/default/files/styles/gallery/public/blog_posts/Lawrence%20Academy.png?itok=IWdu99ck'
      },
      { 
        name: "St. Sebastian's",
        image: 'https://static1.squarespace.com/static/55b799b6e4b0abd99ecc36d9/55d3826ce4b0154038b7aa72/55d3827ae4b0d010f4bb8a83/1473166500746/?format=300w'
      },
      { 
        name: 'Middlesex',
        image: 'https://www.eloquent-systems.com/images/client/mxschool.png'
      },
      { 
        name: 'Tabor',
        image: 'https://tabor.reachboarding.com/__uploads/tabor/photos/Tabor-transparent.png'
      },
      { 
        name: 'Milton',
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
      },
      { 
        name: 'Thayer Academy',
        image: 'http://www.thayer.org/uploaded/Redesign/images/Thayer_Seal_facebook.png'
      },
      {
        name: 'Winsor',
        image: 'https://www.winsor.edu/uploaded/themes/build/images/home/winsor-seal.png'
      },
      {
        name: "St. Paul's",
        image: 'https://bbk12e1-cdn.myschoolcdn.com/ftpimages/36/logo/coatOfArms.png'
      },
      {
        name: "DCD",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTj1XPeTbBTADjpRLtjQTBfHe-TpwvKHLTE0h1XXDi7Sa2nWm'
      },
      {
        name: "Fenn",
        image: 'https://pbs.twimg.com/profile_images/518387736966070272/wlZr5vej.jpeg'
      },
      {
        name: "Newton Country Day",
        image: 'https://pbs.twimg.com/profile_images/637023605612658689/PDBLGuhd_400x400.jpg'
      },
      {
        name: "Metro Lacrosse",
        image: 'https://s3.amazonaws.com/sr-application/images/lacrosserecruits/2015/5/21125_metrologo.jpg'
      },
      {
        name: "ISL",
        image: 'https://s3.amazonaws.com/hsc-main/assets/1331101/1331101-poster.jpg?1404762069'
      },
      {
        name: "Montrose School",
        image: 'https://i.vimeocdn.com/portrait/17315026_300x300'
      },
      {
        name: "Xaverian",
        image: 'https://bbk12e1-cdn.myschoolcdn.com/ftpimages/849/logo/mainLogo2015.png'
      },
      {
        name: "Deerfield",
        image: 'https://i.imgur.com/SY5CSBn.png'
      },
      {
        name: "NEIRA",
        image: 'http://www.neirarowing.org/images/logo.gif'
      },
      {
        name: "Shore Country Day",
        image: 'https://bbk12e1-cdn.myschoolcdn.com/ftpimages/452/logo/SCDS-Logo-288.png'
      },
      {
        name: "USRowing",
        image: 'https://membership.usrowing.org/img/logo.png'
      },
      {
        name: "Regatta",
        image: 'https://membership.usrowing.org/img/logo.png'
      },
      {
        name: "Marianapolis",
        image: 'http://vnis.edu.vn/sites/default/files/images/logo/marianapolis_preparatory_school_logo.jpg'
      },
      {
        name: "Dexter",
        image: 'https://static1.squarespace.com/static/583e34f51b631b9300394fb0/t/599ef134a803bb5701bac54f/1503588666998/cmyk+png+png.png'
      },
      {
        name: "Dana",
        image: 'https://bbk12e1-cdn.myschoolcdn.com/ftpimages/887/logo/footer-seal.png'
      },
      {
        name: "Fay",
        image: 'https://pbs.twimg.com/profile_images/1750297933/red_crest_400x400.jpg'
      }
    ];
  }

  ionViewDidLoad() {
    console.log(this.startDate);
    console.log('ionViewDidLoad ScoresPage');
    this.getSportsData();
  }

  getSportsData() {
    this.games=[];
    this.DataProvider.games(this.startDate).subscribe(output=>{
      let parser = new DOMParser();
      let doc = parser.parseFromString(output, "text/xml");
      let len = doc.documentElement.childNodes.length;
      let temp = [];

      for (var i=0; i<len; i++){
        let curr = this.games[i] = doc.getElementsByTagName("Event")[i];
        temp[i] = curr;
      }
      //Show games starting with most recent using reverse()
      this.games = temp.reverse();
      console.log(this.games);
    }, (error)=>{
      console.log('errors', error);
      
    });
  }

  findImage(school:string){
    console.log(school);
    for(let i=0; i<this.schools.length; i++){
      if(school.includes(this.schools[i].name)){
        return this.schools[i].image;
      }
    }
    //if no image is found, show yellow question mark
    return "http://opossum.es/wp-content/uploads/2015/01/Lol_question_mark-uai-258x258.png";
  }
  

}
