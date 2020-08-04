import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { AngularFireModule } from '@angular/fire';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducer, AppEffects } from './+state';
import { SentryErrorHandler } from './sentry.error-handler';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    RouterModule.forRoot([
      {
        path: 'playlist/create',
        loadChildren: () =>
          import('@icetokki/playlist/feature-create').then(
            (m) => m.PlaylistFeatureCreateModule
          ),
      },
      {
        path: 'playlists',
        loadChildren: () =>
          import('@icetokki/playlist/feature-manage').then(
            (m) => m.PlaylistFeatureManageModule
          ),
      },
    ]),
    StoreModule.forRoot({ root: reducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFireMessagingModule,
    AngularFirePerformanceModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    SocketIoModule.forRoot({ url: 'http://localhost:3333' }),
  ],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
