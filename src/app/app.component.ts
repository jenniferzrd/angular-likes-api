import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { Character } from './common/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  favItems: Character[];

  constructor(private data: DataService){}

  ngOnInit() {
  	this.getFavItems();
  }

  getFavItems(): void {
  	this.favItems = this.data.getFavoriteCharacters();
  }

}
