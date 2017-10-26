import { Component, OnInit } from '@angular/core';
import {GetBeerPhotoService} from '../../services/getbeerphoto.service'
import {GetphotoService} from '../../services/getphoto.service'
@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  private beerList : BearPhoto[];

  constructor(private getBearPhoto: GetBeerPhotoService) { }

  ngOnInit() {
    
    this.getBearPhoto.getBeertPhotoList().subscribe((response) => {
      this.beerList = response;
    })
  }

}
interface BearPhoto {
  id: number;
  tagline:string;
  name: string;
  image_url: string;
}
