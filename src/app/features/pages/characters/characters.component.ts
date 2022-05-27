import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any[],
    private readonly utilsService: UtilsService,
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.utilsService.getData(this.data)
    .pipe(
      take(1),
    )
    .subscribe(data => {
      this.characters = data;
      this.loading = false;
    });
  }
}
