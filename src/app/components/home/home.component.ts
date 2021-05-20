import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean = true ;
  constructor(private spotifyServices:SpotifyService) {
   }

  ngOnInit(): void {
    this.spotifyServices.getNewReleases().subscribe(
      (data: any)=>{
        this.nuevasCanciones = data;
        console.log(data); 
        this.loading = false;
      }
    );
  }

}
