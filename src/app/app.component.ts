import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './shared/components/message/message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
