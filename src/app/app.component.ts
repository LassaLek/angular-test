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
            /* animace na miste praveho postranniho panelu */
            style({transform: 'translateX(+100%)', opacity: '0'}),
            animate('350ms cubic-bezier(0.785, 0.135, 0.150, 0.860)', style({transform: 'translateX(0%)', opacity: '1'}))
          ]
        ),
        transition(
          ':leave',
          [
            animate('350ms cubic-bezier(0.785, 0.135, 0.150, 0.860)', style({transform: 'translateX(+100%)', opacity: '0'}))
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
