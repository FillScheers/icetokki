import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { PlaylistDomainModule } from '@icetokki/playlist/domain';
import { ManageComponent } from './manage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    PlaylistDomainModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forChild([{ path: '', component: ManageComponent }]),
  ],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class PlaylistFeatureManageModule {}
