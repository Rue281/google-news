import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsService } from './news.service';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// const routes: Routes = [
//   {path: '', component: AppComponent},
//   {path: 'details', component: NewsDetailsComponent}
// ];


@NgModule({
  declarations: [
    AppComponent,
    NewsDetailsComponent,
    NewsListComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path: 'details/:title/:author/:description/:urlToImage/:publishedAt/:content',
        component: NewsDetailsComponent
      },
      {
        path: '',
        component: NewsListComponent
      }
    ])
  ],
    exports: [RouterModule],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
