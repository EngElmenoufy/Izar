import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = signal<boolean>(false);
  loadingFor = signal<string | undefined>(undefined);
}
