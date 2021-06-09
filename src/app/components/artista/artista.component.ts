import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  constructor(private router:ActivatedRoute, private spotifyService: SpotifyService) { }

  idArtista: string;
  artista: any = {};
  tracks: any[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      console.log(params['id']);
      this.idArtista = params['id'];
    });
    this.getArtista();
    this.getTopTrack();
  }

  getArtista(){
    this.spotifyService.getInfoArtista(this.idArtista).subscribe(
      (data:any)=>{
        this.artista = data;
        this.loading = false;
      }
    );
  }

  getTopTrack(){
    this.spotifyService.getTopTrack(this.idArtista).subscribe(
      (data)=>{
        console.log(data);
        this.tracks = data;
      }
    )
  }


}
