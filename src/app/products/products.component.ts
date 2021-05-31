import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[]=[

    {
    productTitle:"Real Racing 3",
    description:"Take on the world-wide motorsports – including Formula 1® - anytime, anywhere! Real cars. Real people. Real motorsports. This is Real Racing 3.Real Racing 3 features officially licensed tracks with 40 circuits at 19 real-world locations, a 43-car grid and over 250 meticulously detailed cars from manufacturers like Porsche, Bugatti, Chevrolet.",
    productImage:"https://play-lh.googleusercontent.com/4LPB5FgXDurUJRTacCBDOOQ8RSz8hfi4mZjH92dRQM3vOZQa09Zotyfa95-jLmYz7XYd=w1920-h969-rw"
    },
    {
    productTitle:"Shadow Fight 2",
    description:"Shadow Fight 2 is a nail-biting mix of RPG and classical Fighting. This game lets you equip your character with countless lethal weapons and rare armor sets, and features dozens of lifelike-animated Martial Arts techniques! Crush your enemies, humiliate demon bosses, and be the one to close the Gate of Shadows",
    productImage:"https://play-lh.googleusercontent.com/fJwl4f-3Z0entXWBcaq7PmJXd6OdIQT_1-kwyzOlCYVQRK1n31c8yRUrELxXr-x-KwE=w720-h310-rw"
    },
    
    {
    productTitle:"Garena Free Fire- World Series",
    description:"Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible Garena Free Fire- World Series",
    productImage:"https://play-lh.googleusercontent.com/-T70ljajZgriSdsuxAui9XI6FQ6l7nrSDODxwmhsBLbJVPKNIZdaq_ZY5hYvcbU3PQI=w720-h310-rw"
    },
    
    {
    productTitle:"Call of Duty",
    description:"Official CALL OF DUTY® designed exclusively for mobile phones. Play iconic multiplayer maps and modes anytime, anywhere. 100 player Battle Royale battleground? Fast 5v5 team deathmatch? Sniper vs sniper battle? Activision’s free-to-play CALL OF DUTY®: MOBILE has it all.",
    productImage:"https://play-lh.googleusercontent.com/k0JLJS4zQIXOpe3zfrARxXiCr_qH7nsa5LdCr5sB_cwsRNW0sGCwh8UR_Z9bgdQ4Vls=w720-h310-rw"
    },
    
    {
    productTitle:"Cover Fire",
    description:"Your duty is to lead the battle and become the best shooter and sniper.Download now for free one of best offline shooting games on mobiles.New mode: Sniper FPS Ops. You received the call for duty of defeat all enemies the time runs out.You received the call for duty of defeat all enemies the time runs out.",
    productImage:"https://play-lh.googleusercontent.com/79sz1xwUO_LiAFLwzvB6v88HE21kBpagTKNEb94f0FKuSms3X_hXKBOSL-nT_tICuz0=w720-h310-rw"
    },
    
    {
    productTitle:"Hill Climb Racing 2",
    description:"From the Creators of the Original Hill Climb Racing Comes Hill Climb Racing 2! It's Bigger, It's Better And It's Much Much Funner!?Hill Climb Racing 2 is a free to play online multiplayer racing game with dozens of tracks, cars and character customization at your fingertips.",
    productImage:"https://play-lh.googleusercontent.com/bJbzJzp97R44-BcnNtp7JTHdNQGx19aYJPiDVkmehqkuzeHNfThyifDBs5nd9ahzqmg=w720-h310-rw"
    }
    ];



    productsSentByChild=[];
    productCount:number=0;

    getProductDetailsFromChild(productTitle){

     
      this.productsSentByChild.push(productTitle);
      this.productCount++;
    }
}

