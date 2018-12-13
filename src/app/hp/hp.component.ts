import { Component, OnInit } from '@angular/core';
import { Character } from '../common/character';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrls: ['./hp.component.css']
})
export class HpComponent implements OnInit {

  characters: Character[];

  constructor(private data: DataService) {
    this.characters = [];
   }

  ngOnInit() {
    this.data.characters.subscribe((c: Character[]) => {
      this.characters = c;
      this.characters.forEach((charac) => {
        charac.favorite = false;
      })
    })
  }

  favCharacter = (item: Character) => {
  	if(item.favorite == false){
  		item.favorite = true;
  		this.data.addToFavorites(item);
  	} else {
  		item.favorite = false;
  		this.data.removeFromFavorites(item);
  	}
  }

  getColor(house) { 
    switch (house) {
      case 'Gryffindor':
        return 'linear-gradient(to right, #e52d27, #b31217)';
      case 'Slytherin':
        return 'linear-gradient(to right, #093028, #237a57)';
      case 'Hufflepuff':
        return 'linear-gradient(to right, #e65c00, #f9d423)';
        case 'Ravenclaw':
        return 'linear-gradient(to left, #314755, #26a0da)';
      case '': 
      return 'linear-gradient(to left, #0f2027, #203a43, #2c5364)';
    }
  }
  
}
