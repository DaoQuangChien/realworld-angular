import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { HomeModule } from './home.module';
import { ROOT_API } from '../app/app.key-info';
import { ArticleItemData } from '../components/article-item/article-item.component';

interface ArticlesData {
  articles: ArticleItemData[];
  articlesCount: number;
}
@Injectable()
export class HomeService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getArticles(): Observable<any> {
    return this.http.get<ArticlesData>(`${ROOT_API}/articles`).pipe(
      catchError(this.handleError('getArticles'))
    );
  }
}
