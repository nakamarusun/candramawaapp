import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopbarComponent } from './topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuroutingComponent } from './menurouting/menurouting.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SizeDetectorService } from './common/size-detector.service';
import { SizeDetectorComponent } from './common/size-detector.component';
import { SidebarService } from './common/sidebar.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './menu/products/products/products.component';
import { HomeComponent } from './menu/home/home/home.component';
import { SearchComponent } from './topbar/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductcardComponent } from './menu/products/productcard/productcard.component';

@NgModule({
  declarations: [
    SizeDetectorComponent,
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    NotfoundComponent,
    MenuroutingComponent,
    ProductsComponent,
    HomeComponent,
    SearchComponent,
    ProductcardComponent,
  ],
  imports: [
    // What components are we going to use in this project
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    NgbModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [SizeDetectorService, SidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
