import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFilms } from '../../interfaces/films';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllMovies(): Observable<IFilms> {
    return this.http.get<IFilms>(environment.starWarsBaseApi+'/films');
  }
}
