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
        return '#ff3f34';
      case 'Slytherin':
        return '#05c46b';
      case 'Hufflepuff':
        return '#ffa801';
        case 'Ravenclaw':
        return '#3c40c6'
    }
  }
  
}
