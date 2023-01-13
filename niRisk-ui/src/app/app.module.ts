import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/dashboard/header/header.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { MainComponent } from './Components/dashboard/main/main.component';
import { SideNavComponent } from './Components/dashboard/side-nav/side-nav.component';
import { TopWidgetsComponent } from './Components/dashboard/top-widgets/top-widgets.component';
import { TopThreeProductsComponent } from './Components/dashboard/top-three-products/top-three-products.component';
import { LastFewTransactionsComponent } from './Components/dashboard/last-few-transactions/last-few-transactions.component';
import { SalesByCategoryComponent } from './Components/dashboard/sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from './Components/dashboard/sales-by-month/sales-by-month.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationsComponent,
    MainComponent,
    SideNavComponent,
    TopWidgetsComponent,
    TopThreeProductsComponent,
    LastFewTransactionsComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
