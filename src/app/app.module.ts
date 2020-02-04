import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatDatepickerModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table/table.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './login/login.component';
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
    RouterModule.forRoot(appRoutes),

    TranslateModule.forRoot(),
  ],
  declarations: [AppComponent, ProfileComponent
   ],
  bootstrap: [AppComponent],


})
export class AppModule { }
