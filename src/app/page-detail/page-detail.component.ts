import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JikanService} from "../services/jikan.service";
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
  imports: [
    IonicModule,
    NgIf
  ]
})
export class PageDetailComponent  implements OnInit {
  anime: any = null;

  constructor(private route: ActivatedRoute,
              private jikanService: JikanService,
              private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.jikanService.getAnimeById(id).subscribe(
        (response: any) => {
          this.anime = response.data; // Access the data property
          console.log(this.anime);
        });
    }
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  goBack() {
    this.location.back();
  }
}
