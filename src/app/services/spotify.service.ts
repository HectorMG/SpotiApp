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
        'Bearer BQBweFtzgIiSWPWxxs7D-pyCD6E0gAgidFtXYEaXH0j8J26KHgmx5LxKEd4cUirQ5ZV3cERCCitfb1aOIRA',
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
