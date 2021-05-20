import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  URL: string = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const header = new HttpHeaders({
      Authorization:
        'Bearer BQAYWN5ZRqm2Ul2cYX6S_4ZEyiGN7JbIguaue1rk4geXXzAtYB6qlJtWiwyem5AFhoRt5t-dok-lrYg1lYI',
    });

    return this.http.get(URL, { headers: header });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }
}
