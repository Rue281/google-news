import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}
  //@Input() data: string[];
  title: string;
  author: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;

  comments = [
    {image: 'assets/images/female.jpeg',
    name: 'Olya',
    date:'Jan 16,2013',
    text: 'Unlike many news organisations, we chose an approach that means all our reporting is free and available for everyone. We need your support to keep delivering quality journalism that’s open and independent. Every reader contribution, however big or small, is so valuable.'
  },
  {image: 'assets/images/female.jpeg',
    name: 'Lara',
    date: 'Feb 16,2013',
    text: 'Interestingly, Bill Barr said he hoped Trump would respond to the attorney general’s criticism of the president’s comments on Roger Stone.'
  }];

  ngOnInit() {
    console.log('NewsDetailsComponent');
    this.route.params
      .subscribe(v => console.log(v));
    this.route.data
      .subscribe(v => console.log(v));
    console.log(this.route.component);
    this.route.queryParams
      .subscribe(v => console.log(v));
    this.route.paramMap.subscribe(
      m => {
        console.log('author: ', m.get('title'));
        this.title = m.get('title');
        this.author = m.get('author');
        this.description = m.get('description');
        this.urlToImage = m.get('urlToImage');
        this.publishedAt = m.get('publishedAt');
        this.content = m.get('content');
        //author, description, urlToImage, publishedAt, content
      }
    );
    //console.log(this.router.getCurrentNavigation().extras.state);
  }
}
