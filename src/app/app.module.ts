import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { ShopWindowComponent } from './components/shop-window/shop-window.component';
import { ShopCardComponent } from './components/UI/shop-card/shop-card.component';
import { CoursesService } from './services/courses.service';
import {HttpClientModule} from '@angular/common/http';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ShopCardClassScoolPipe } from './components/UI/shop-card/shop-card-class-scool.pipe';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ShopWindowComponent,
    ShopCardComponent,
    FilterCoursesPipe,
    ShopCardClassScoolPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
