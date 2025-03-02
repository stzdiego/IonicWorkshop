import { Component, OnInit } from '@angular/core';
import { JikanService } from 'src/app/services/jikan.service';
import { CustomHeaderComponent } from "../custom-header/custom-header.component";
import {IonicModule, ModalController, ToastController} from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { AnimeDetailComponent } from "../anime-detail/anime-detail.component";

@Component({
  selector: 'app-tab-search',
  templateUrl: './tab-search.component.html',
  styleUrls: ['./tab-search.component.scss'],
  imports: [
    CustomHeaderComponent,
    IonicModule,
    FormsModule,
    NgIf,
    NgForOf
  ]
})
export class TabSearchComponent  implements OnInit {
  query: string = '';
  animes: any[] = [];
  currentPage: number = 1;
  selectedAnimeId: number | null = null;

  constructor(
    private jikanService: JikanService,
    private toastController: ToastController,
    private modalController: ModalController) { }

  ngOnInit() {
    console.log('TabSearchComponent');
  }

  searchAnimes() {
    this.currentPage = 1;
    this.animes = [];
    this.loadMore();
  }

  loadMore(event?: any) {
    if (this.query.trim().length === 0) {
      if (event) event.target.complete();
      return;
    }

    this.jikanService.searchAnimes(this.query, this.currentPage).subscribe({
      next: (response) => {
        this.animes = [...this.animes, ...response.data];
        this.currentPage++;
        if (event) event.target.complete();
        console.log(this.animes);
      },
      error: async (error) => {
        if (error.status === 429) {
          const toast = await this.toastController.create({
            message: 'Request limit reached. Please wait 60 seconds.',
            duration: 5000,
            color: 'danger',
            position: 'top'
          });
          await toast.present();
        }
        console.error(error);
        if (event) event.target.complete();
      }
    });
  }

  async openDetail(anime: any) {
    this.selectedAnimeId = anime.mal_id;
    const modal = await this.modalController.create({
      component: AnimeDetailComponent,
      componentProps: { anime}
    });

    return await modal.present();
  }
}
