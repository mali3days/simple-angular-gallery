import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Image } from '../models/image.model';

@Injectable()
export class GalleryService {
  private API_PATH = 'https://picsum.photos';

  private _images: BehaviorSubject<any>;

  constructor (
    private http: HttpClient,
  ) {
    this._images = new BehaviorSubject([]);
  }

  get images() {
    return this._images.asObservable();
  }

  getImageList(): void {
    this.http
      .get(`${this.API_PATH}/list`)
      .toPromise()
      .then(res => {
        this._images.next(res);
      });
  }
}
