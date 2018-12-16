import { Component, OnInit } from '@angular/core';

import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [
    GalleryService,
  ],
})
export class GalleryComponent implements OnInit {
  static_images = [
    '../../assets/images/1.jpg',
    '../../assets/images/2.jpg',
    '../../assets/images/3.jpg',
    '../../assets/images/4.jpg',
    '../../assets/images/5.jpg',
    '../../assets/images/6.jpg',
    '../../assets/images/7.jpg',
    '../../assets/images/8.jpg',
    '../../assets/images/9.jpg',
  ];
  images = [];

  constructor(
    private galleryService: GalleryService,
  ) {
    // this.galleryService.images.subscribe(images => {
    //   this.images = images;
    // });
  }

  ngOnInit() {
    this.galleryService.getImageList();
  }

}
