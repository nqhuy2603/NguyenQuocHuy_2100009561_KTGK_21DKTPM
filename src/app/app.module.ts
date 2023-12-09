import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ThoisuComponent } from './thoisu/thoisu.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { LamdepComponent } from './lamdep/lamdep.component';
import { TamsuComponent } from './tamsu/tamsu.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrangchuComponent,
    ThoisuComponent,
    GiaitriComponent,
    KinhdoanhComponent,
    LamdepComponent,
    TamsuComponent,
    DangnhapComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
