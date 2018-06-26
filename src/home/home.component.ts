import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleItemData } from '../components/article-item/article-item.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomePageComponent implements OnInit {
  private articles: ArticleItemData[] = [];

  constructor(private homeSerive: HomeService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.homeSerive.getArticles().subscribe(articles => this.articles = articles.articles);
  }
}
