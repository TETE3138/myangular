import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class GetBeerPhotoService {

  constructor(private http:Http) { }


  getBeertPhotoList() {
    return this.http.get("https://api.punkapi.com/v2/beers")
      .map((res) => res.json());
  }
}
