import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            /*TODO přidat animaci při objevení Editor elementu */
          ]
        ),
        transition(
          ':leave',
          [
            /*TODO přidat animaci při zavření Editor elementu */
          ]
        )
      ]
    )
  ],
})
export class AppComponent {
  title = 'interview-test';
  showEditor = false;

  toggleEditor() {
    this.showEditor = !this.showEditor;
  }
}
