import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  Injectable,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';

type messageType = 'success' | 'error' | 'wrong';

@Injectable({
  providedIn: 'root',
})
export class MessageService implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private type = signal<messageType | undefined>(undefined);
  private message = signal<string | undefined>(undefined);

  private timer: any;

  typeSignal = this.type.asReadonly();
  messageSignal = this.message.asReadonly();

  showMessage(type: messageType, message: string) {
    this.type.set(type);
    this.message.set(message);

    this.autoCloseMessage();
  }

  autoCloseMessage() {
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setTimeout(() => {
        this.closeMessage();
      }, 5000);
    }
  }

  closeMessage() {
    this.type.set(undefined);
    this.message.set(undefined);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
