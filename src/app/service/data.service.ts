import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Character } from '../common/character';

const URL = 'http://hp-api.herokuapp.com/api/characters';

@Injectable()
export class DataService {

  private characterSubject = new Subject<Character[]>();
	characters: Observable<Character[]>;
	favoriteCharacters = [];


  constructor(private http: HttpClient) {

    this.characters = this.characterSubject.asObservable();
		this.http.get<Character[]>(URL).subscribe(data => {
			this.characterSubject.next(data);
		})

   }

   getFavoriteCharacters(): Character[] {
		return this.favoriteCharacters;
	}

	addToFavorites(item: Character) {
		this.favoriteCharacters.push(item);
	}

	removeFromFavorites(item: Character) {
		for(let i=0; i < this.favoriteCharacters.length; i++){
			if(this.favoriteCharacters[i] == item){
				this.favoriteCharacters.splice(i, 1);
			}
		}
	}

}
