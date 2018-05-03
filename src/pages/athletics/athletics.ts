import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AthleticsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athletics',
  templateUrl: 'athletics.html'
})
export class AthleticsPage {

  mySportsRoot = 'MySportsPage'
  scoresRoot = 'ScoresPage'
  upcomingRoot = 'UpcomingPage'

  schools: Array<{name: string, image: string}>;

  constructor(public navCtrl: NavController) {
    this.schools = [
      {
        name: 'Nobles',
        image: "https://d3oiiej22pa06r.cloudfront.net/uploads/community/logo/192/nobles-logo.png"
      },
      { 
        name: 'Belmont Hill',
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
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
        name: 'Roxbury Latin',
        image: 'http://upload.wikimedia.org/wikipedia/en/8/8e/Roxbury_Latin_School_escutcheon.png'
      },
      { 
        name: 'Governors Academy',
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
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
      },
      { 
        name: 'Lawrence',
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
      },
      { 
        name: 'St. Sebastians',
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
      },
      { 
        name: 'Middlesex',
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
      },
      { 
        name: 'Tabor Academy',
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
      },
      { 
        name: 'Milton Academy',
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
      },
      { 
        name: 'Thayer Academy',
        image: 'https://www.milton.edu/wp-content/uploads/2015/01/Milton_seal_color.png'
      }
    ];
  }
  
  
}
