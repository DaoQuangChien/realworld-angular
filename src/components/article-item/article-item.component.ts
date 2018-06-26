import { Component, OnInit, Input } from '@angular/core';

export interface ArticleItemData {
  slug: string;
  title: string;
  description: string;
  tagList: string[];
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    image: string;
  };
}

@Component({
  selector: 'app-article-item',
  templateUrl: 'article-item.component.html',
  styleUrls: ['article-item.component.css'],
})
export class ArticleItemComponent implements OnInit {
  @Input() articleItem: ArticleItemData;
  createdDate: string;

  constructor() { }

  ngOnInit() {

  }
}
