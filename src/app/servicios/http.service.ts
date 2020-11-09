import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {retry, catchError} from "rxjs/operators";
import {Denuncia} from "../modelo/denuncia";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // url base. Se puede incluir en un fichero de configuración
  base_path="http://localhost:3000/denuncias";

  constructor(private http: HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({"Content-Type": "application/json", }),
  };

  // Handle API errors

  handleError(error: HttpErrorResponse) {

    if(error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, `+`body was: ${error.error}`
      );

    }

    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");

  }

  createItem(item): Observable<Denuncia> {
    let datos=`{"texto":"${item.texto}", "foto":${item.foto}, "localizacion":${item.localizacion}, "fecha":${item.fecha}}`;
    console.log(datos);
    return this.http
      .post<Denuncia>(this.base_path, datos, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getItem(id): Observable<Denuncia> {
    return this.http
      .get<Denuncia>(this.base_path+"/"+id)
      .pipe(retry(2), catchError(this.handleError));

  }

  getList(): Observable<Denuncia[]> {
    return this.http
      .get<Denuncia[]>(this.base_path)
      .pipe(retry(2), catchError(this.handleError));

  }

  updateItem(id, item): Observable<Denuncia> {
    return this.http
      .put<Denuncia>(
        this.base_path+"/"+id,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));

  }

  deleteItem(id) {
    return this.http
      .delete<Denuncia>(this.base_path+"/"+id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}