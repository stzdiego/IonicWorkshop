import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-custom-header',
    templateUrl: './custom-header.component.html',
    styleUrls: ['./custom-header.component.scss'],
    imports: [
        IonicModule
    ]
})
export class CustomHeaderComponent  implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit(
  ) {
    console.log('title', this.title);
  }

}
