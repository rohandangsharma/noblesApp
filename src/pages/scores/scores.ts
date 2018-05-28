import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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

  games= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public DataProvider: DataProvider) {
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
        name: 'BB&N',
        image: 'https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1452229532/dh7pslj2c1bkavgzyq1d.png'
      },
      { 
        name: 'RL',
        image: 'http://upload.wikimedia.org/wikipedia/en/8/8e/Roxbury_Latin_School_escutcheon.png'
      },
      { 
        name: 'Governors',
        image: 'https://withtruecourage.org/wp-content/uploads/2017/08/gov-favicon-1.png'
      },
      { 
        name: 'St. Georges',
        image: 'https://sgs.reachboarding.com/__uploads/sgs/Assets/EMBLEM-T%20StGeorges%20USA.png'
      },
      { 
        name: 'Groton',
        image: 'https://i.vimeocdn.com/portrait/19391240_300x300'
      },
      { 
        name: 'St. Marks',
        image: 'http://stmarkbristol.com/wp-content/uploads/2014/11/sms_cyo.gif'
      },
      { 
        name: 'Lawrence',
        image: 'http://www.bostonherald.com/sites/default/files/styles/gallery/public/blog_posts/Lawrence%20Academy.png?itok=IWdu99ck'
      },
      { 
        name: 'St. Sebs',
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
        name: 'Thayer',
        image: 'http://www.thayer.org/uploaded/Redesign/images/Thayer_Seal_facebook.png'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
    this.getSportsData();
  }

  getSportsData() {
    this.games=[];
    this.DataProvider.games().subscribe(output=>{
      let parser = new DOMParser();
      let doc = parser.parseFromString(output, "text/xml");
      let len = doc.documentElement.childNodes.length;

      for (var i=0; i<len; i++){
        //let curr = this.games[i] = doc.getElementsByTagName("Event")[i];
        //this.games[i] = curr;
      }
      console.log(this.games);
    }, (error)=>{
      console.log('errors', error);
      
    });
    // this.showList();
  }

}
