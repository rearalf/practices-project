import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bin2DecAppComponent } from './projects/bin2-dec-app/bin2-dec-app.component';
import { BorderRadiusPreviewerComponent } from './projects/border-radius-previewer/border-radius-previewer.component';
import { CSV2JSONComponent } from './projects/csv2-json/csv2-json.component';
import { CalculatorAppComponent } from './projects/calculator-app/calculator-app.component';
import { ButtonComponent } from './projects/calculator-app/button/button.component';

@NgModule({
  declarations: [AppComponent, Bin2DecAppComponent, BorderRadiusPreviewerComponent, CSV2JSONComponent, CalculatorAppComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
