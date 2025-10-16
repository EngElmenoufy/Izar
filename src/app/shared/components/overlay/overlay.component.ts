import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css',
})
export class OverlayComponent {
  isOpened = input<boolean>(false);
  closePopup = output();

  onClosePopup() {
    this.closePopup.emit();
  }
}
