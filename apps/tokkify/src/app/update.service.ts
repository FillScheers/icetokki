import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {}

  update() {
    this.swUpdate.activateUpdate();
  }

  checkForUpdate() {
    this.swUpdate.checkForUpdate();
  }
}
