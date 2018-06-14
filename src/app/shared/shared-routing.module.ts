import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PopOverComponent } from '../pop-over/pop-over.component';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

const routes: Routes = [
  { path: '', component: PhotoGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
