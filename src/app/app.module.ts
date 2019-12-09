import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { HeroListComponent } from "./hero-list/hero-list.component";

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, CrisisListComponent, HeroListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
