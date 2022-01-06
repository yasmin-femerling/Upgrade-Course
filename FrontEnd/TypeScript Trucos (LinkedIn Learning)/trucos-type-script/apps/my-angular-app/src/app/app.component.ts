import { Component } from '@angular/core';
import { greet, sum } from '@trucos-type-script/utils';
import { Author } from '@trucos-type-script/models';
@Component({
  selector: 'trucos-type-script-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app';

  greeting = greet('Yasmin');
  author!: Author;
}
