import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  URL: string = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) {
  }

  getNewReleases(){
    const header = new HttpHeaders({
      'Authorization': 'Bearer BQBweFtzgIiSWPWxxs7D-pyCD6E0gAgidFtXYEaXH0j8J26KHgmx5LxKEd4cUirQ5ZV3cERCCitfb1aOIRA'
    });
    return this.http.get(this.URL+'browse/new-releases?country=CO',{headers:header})
        .pipe(map(data=>{
          return data['albums'].items;
        }));
  }

  getArtista(termino: string){
    const header = new HttpHeaders({
      'Authorization': 'Bearer BQBweFtzgIiSWPWxxs7D-pyCD6E0gAgidFtXYEaXH0j8J26KHgmx5LxKEd4cUirQ5ZV3cERCCitfb1aOIRA'
    });
    return this.http.get(this.URL+`search?q=${termino}&type=artist&limit=15`,{headers:header}).
        pipe(map(data=>{
          return data['artists'].items
        }));
  }

}
