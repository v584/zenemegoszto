import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'nemtommiez-4c3df',
        appId: '1:394320342156:web:3f958b28e3785d36019fa9',
        storageBucket: 'nemtommiez-4c3df.firebasestorage.app',
        apiKey: 'AIzaSyCBNFqUMBHjK28yG3SPTdv8TbaTQW3c3s8',
        authDomain: 'nemtommiez-4c3df.firebaseapp.com',
        messagingSenderId: '394320342156',
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
