import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IFilms, IFilmsContent } from 'src/app/core/interfaces/films';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies/movies.service';
import { MatDialog } from '@angular/material/dialog';
import { CharactersComponent } from '../characters/characters.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: IFilmsContent[] = [];

  constructor(
    private readonly moviesService: MoviesService,
    private readonly router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.moviesService.getAllMovies()
    .pipe(
      take(1),
    )
    .subscribe((films: IFilms) => this.films = films.results);
  }

  redirectTo(url: string, data: string[]) {
    this.router.navigate([url], {
      state: data
    });
  }

  openCharacterDialog(data: string[]) {
    const dialogRef = this.dialog.open(CharactersComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
