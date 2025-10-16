import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MessageService } from '../services/message.service';
import { ToastrService } from 'ngx-toastr';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  // const messageService = inject(MessageService);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // let errorMessage = 'An unexpected error occurred';

      // if (err.error.msg) {
      //   errorMessage = `Client error ${err.error.msg}`;
      // } else {
      //   switch (err.status) {
      //     case 400:
      //       errorMessage = 'Bad request: Please check your inputs';
      //       break;
      //     case 401:
      //       errorMessage = 'Unauthorized: Please login again';
      //       break;
      //     case 403:
      //       errorMessage =
      //         'Forbidden: You do not have permission to access this resource';
      //       break;
      //     case 404:
      //       if (req.url.includes('forgotPasswords')) {
      //         errorMessage =
      //           'There is no user registered with this email address';
      //       } else {
      //         errorMessage = 'Not Found: The requested resource was not found';
      //       }
      //       break;
      //     case 500:
      //       errorMessage = 'Internal Server Error: Please try again later';
      //       break;
      //     case 503:
      //       errorMessage =
      //         'Service Unavailable: Server is temporarily unavailable';
      //       break;
      //     default:
      //       errorMessage = `Server Error: ${err.status} — ${err.message}`;
      //   }
      // }

      console.error('HTTP Error', {
        status: err.status,
        message: err.error.msg,
        url: req.url,
        error: err,
      });

      // messageService.showMessage('error', err.error.msg);
      toastr.error(err.error.msg);

      return throwError(() => new Error(err.error.msg));
    })
  );
};
