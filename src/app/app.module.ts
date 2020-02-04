import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { profileService } from './profile/profile/profile.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    
    path: '',
    loadChildren: './login/login.module#LoginModule',
},
  {
    path: 'tables',
    loadChildren: './table/table/table.module#TableModule',
    
  },
  {
    path: 'profile',
    component:ProfileComponent
    
  },
  
];
@NgModule({


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    TranslateModule.forRoot(),
  ],
  declarations: [AppComponent, ProfileComponent
   ],
   providers:[profileService],
  bootstrap: [AppComponent],


})
export class AppModule { }
