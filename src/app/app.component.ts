import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NewsService } from './news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // this.getArticles();
  }
  constructor(public service: NewsService, private router: Router) {}

  title = 'google-news';

  // articles;

  // // get data from service
  // getArticles() {
  //   this.service.getNews().subscribe(data => {
  //     console.log(data);
  //     this.articles = data['articles'];
  //   });
  // }
  // goToOtherComponent(url,title) {
  //   this.router.navigate([url, title]).then( (e) => {
  //     if (e) {
  //       console.log("Navigation is successful!");
  //     } else {
  //       console.log("Navigation has failed!");
  //     }
  //   });
  // }
}
