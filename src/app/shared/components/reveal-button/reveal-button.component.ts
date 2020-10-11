import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reveal-button',
  templateUrl: './reveal-button.component.html',
  styleUrls: ['./reveal-button.component.scss']
})
export class RevealButtonComponent implements OnInit {
  @Output() toggleEmitter = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleEmitter.emit()
  }
}
