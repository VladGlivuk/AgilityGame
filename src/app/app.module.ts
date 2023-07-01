import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { Header } from './components/Header/header.component';
import { HeaderForm } from './components/Header/Form/form.component';
import { Score } from './components/Header/Score/score.component';
import { Content } from './components/Content/content.component';
import { CellItem } from './components/Content/Row/Cell/cell.component';
import { RowItem } from './components/Content/Row/row.component';

@NgModule({
  declarations: [AppComponent, Header, HeaderForm, Score, Content, CellItem, RowItem],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
