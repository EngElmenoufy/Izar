import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.isLoading.set(true);
  loadingService.loadingFor.set(req.url.split('/').at(-1));
  console.log(req.url.split('/').at(-1));
  return next(req).pipe(
    finalize(() => {
      loadingService.isLoading.set(false);
      loadingService.loadingFor.set(undefined);
    })
  );
};
