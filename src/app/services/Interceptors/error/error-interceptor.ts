import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) =>{
      console.error('HTTP Error:', error);
      if(error.status === 401){
        localStorage.removeItem('loggoedInUser');
        localStorage.removeItem('loggedInPassword');
        window.location.href = '/login';
      }
      else if(error.status === 500){
        console.error('Server error occurred. Please try again later.');
      } else if( error.status === 404){
        console.error('Resource not found.');
        alert('The requested resource was not found. Please check the URL and try again.');
      }
     return throwError(() => error);
    })
  );
};
