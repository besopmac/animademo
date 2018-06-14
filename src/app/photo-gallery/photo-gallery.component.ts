import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      // transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease')),
    ])
  ]
})
export class PhotoGalleryComponent implements OnInit {

  constructor() { }

  position: string;
  photoUrl = 'https://placeimg.com/400/400/people';

  ngOnInit() {
  }

  changePosition(newPosition: string) {
    this.position = newPosition;
  }

}
