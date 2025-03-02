import {Component, Input, OnInit} from '@angular/core';
import { IonicModule } from "@ionic/angular";
import {ModalController} from "@ionic/angular";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
  imports: [
    IonicModule
  ]
})
export class AnimeDetailComponent implements OnInit {
  @Input() anime: any;
  safeUrl: SafeResourceUrl = '';

  constructor(private modalController: ModalController, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.anime.trailer.embed_url);
  }

  close() {
    this.modalController.dismiss().then(r => console.log(r));
  }

}
