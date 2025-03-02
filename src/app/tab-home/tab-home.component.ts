import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from "@ionic/angular";
import { CustomHeaderComponent } from "../custom-header/custom-header.component";
import { JikanService } from 'src/app/services/jikan.service';
import { NgForOf, NgIf } from "@angular/common";
import {AnimeDetailComponent} from "../anime-detail/anime-detail.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tab-home',
    templateUrl: './tab-home.component.html',
    styleUrls: ['./tab-home.component.scss'],
    imports: [
        IonicModule,
        CustomHeaderComponent,
        NgForOf,
        NgIf
    ]
})
export class TabHomeComponent  implements OnInit {
    isLoading: boolean = true;
    animes: any[] = [];
    selectedAnimeId: number | null = null;

  constructor(
    private jikanService: JikanService,
    private router: Router
  ) { }

  ngOnInit() {
      this.isLoading = true;

      this.jikanService.getPopularAnimes().subscribe({
          next: (response) => {
              this.animes = response.data;
              console.log('Animes populares:', this.animes);
          },
          error: (error) => {
              console.error('Error al obtener los animes populares:', error);
          },
          complete: () => {
              console.log('Solicitud completada');
              this.isLoading = false;
          }
      });
  }

    async openDetail(anime: any) {
      this.selectedAnimeId = anime.mal_id;
      await this.router.navigate(['/anime', anime.mal_id]);
    }

}
