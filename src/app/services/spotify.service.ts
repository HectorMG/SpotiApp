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
        'Bearer BQCT7X8jd_FKcGiaiWOFFQoxWy6N7obNUFBhMXZyOToVtPe9d42WU1lQbc0nj97jy7rTXmbk5BQZfmAqbZo',
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

  getInfoArtista(id: string){
    return this.getQuery(`artists/${id}`).pipe(
      map((data)=>data)
    );
  }

  getTopTrack(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data=>data['tracks'])
    );
  }
}
