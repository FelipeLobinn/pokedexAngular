import { PokeCardComponent } from './pages/poke-card/poke-card.component';
import { SubPageComponent } from './pages/sub-page/sub-page.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PokeCardComponent,
    SubPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
