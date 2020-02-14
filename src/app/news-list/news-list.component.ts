import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(public service: NewsService, private router: Router) { }

  ngOnInit() {
    this.getArticles();
  }
  articles;

  // get data from service
  getArticles() {
    this.service.getNews().subscribe(data => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
  goToOtherComponent(url, title, author, description, urlToImage, publishedAt, content) {
    this.router.navigate([url, title, author, description, urlToImage, publishedAt, content], {state:{'test':'Test success'}, queryParams: { title: title, author: author}, skipLocationChange: true}).then( (e) => { //, replaceUrl: false
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
