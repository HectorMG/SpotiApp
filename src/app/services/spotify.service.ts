import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  URL: string = 'https://api.spotify.com/v1/browse/';

  constructor(private http: HttpClient) {
  }

  getNewReleases(){
    const header = new HttpHeaders({
      'Authorization': 'Bearer BQAjhudpd-4HulqcOem6E1ElBQgGcTYAFDz65sE8iz_rJ5dCXNuSR6k_tU0pv2rx-qGrSpN9J5LmH5ewYvk'
    });
    return this.http.get(this.URL+'new-releases?country=CO',{headers:header});
  }
}
