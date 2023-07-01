import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { Header } from './components/Header/header.component';
import { HeaderForm } from './components/Header/Form/form.component';
import { Score } from './components/Header/Score/score.component';

@NgModule({
  declarations: [AppComponent, Header, HeaderForm, Score],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
