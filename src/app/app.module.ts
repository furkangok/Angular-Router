import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeroesModule } from "./heroes/heroes.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, CrisisListComponent, PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
