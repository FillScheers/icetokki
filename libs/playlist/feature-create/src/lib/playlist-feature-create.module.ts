import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistDomainModule } from '@icetokki/playlist/domain';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [CommonModule, PlaylistDomainModule],
  declarations: [CreateComponent],
  exports: [CreateComponent],
})
export class PlaylistFeatureCreateModule {}
