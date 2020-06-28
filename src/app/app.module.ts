import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule , MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { LoaderIntercepterService } from './interceptors/loader-intercepter.service';
import { SubstationUser1Component } from './components/substation-user1/substation-user1.component';
import { StreetlightUser1Component } from './components/streetlight-user1/streetlight-user1.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AccountComponent } from './components/account/account.component';

const material = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SubstationUser1Component,
    StreetlightUser1Component,
    WelcomeComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    material,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderIntercepterService, multi: true }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
