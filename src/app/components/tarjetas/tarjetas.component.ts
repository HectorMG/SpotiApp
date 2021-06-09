import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verArtista(item:any){
    let artsitaId;
    if(item.type === 'artist'){
      artsitaId = item.id;
    }else{
      artsitaId = item.artists[0].id;
    }
    this.router.navigate(['/artista',artsitaId]);
  }

}
