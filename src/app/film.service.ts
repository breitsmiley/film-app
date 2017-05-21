import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

const API_KEY = '520bbe17';

@Injectable()
export class FilmService {
  searchUrl = `http://www.omdbapi.com/?apiKey=${API_KEY}&page=1&s=`;
  filmUrl = `http://www.omdbapi.com/?apiKey=${API_KEY}&i=`;

  constructor(private http: Http) { }

  private extractListData(res: Response) {
    const body = res.json();
    return body.Search || {};
  }

  private extractItemData(res: Response) {
    const body = res.json();
    return body || {};
  }

  getFilms (filmName: string) {
    return this.http.get(this.searchUrl + filmName).map(this.extractListData);
  }

  getFilmById (filmId: string) {
    return this.http.get(this.filmUrl + filmId).map(this.extractItemData);
  }

}
