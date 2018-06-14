import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedRoutingModule } from './shared-routing.module';

import { PopOverComponent } from '../pop-over/pop-over.component';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PopOverComponent,
    PhotoGalleryComponent
  ]
})
export class SharedModule { }
