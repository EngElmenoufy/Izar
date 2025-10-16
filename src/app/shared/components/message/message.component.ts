import { Component, inject } from '@angular/core';
import { MessageService } from '../../../core/services/message.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  animations: [
    trigger('message', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(15rem)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateX(15rem)' })
        ),
      ]),
    ]),
  ],
})
export class MessageComponent {
  messageService = inject(MessageService);

  onCloseMessage(): void {
    this.messageService.closeMessage();
  }
}
