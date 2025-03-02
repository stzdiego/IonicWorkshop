import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JikanService {
  private baseUrl = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) { }

  getAnimeById(id: string): any {
    return this.http.get<any>(`${this.baseUrl}/anime/${id}`);
  }

  getPopularAnimes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/top/anime`);
  }

  searchAnimes(query: string, page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/anime?q=${query}&page=${page}`);
  }
}
