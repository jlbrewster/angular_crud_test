import { Injectable } from '@angular/core';
import { never, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './models/Product';
import { MockProducts } from './models/Mock-products';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl: string = 'api/mockProducts';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(
    private http: HttpClient
  ) { }
  
  /** GET products from the mock server */
  getProducts(): Observable<Product[]> {
    // :: this works for display ::
    // const _mockProducts = of(
    //   MockProducts
    // );
    // _mockProducts.subscribe(res => console.log(res));
    // return _mockProducts;
    return this.http.get<Product[]>(this.productUrl)
      .pipe(
        tap(result => console.log(result))
        // tap(_mockProducts => this.log('fetched products')),
        // catchError(this.handleError<Product[]>('getProducts', []))
      );
  }
  
  // log(arg0: string): void {
  //   throw new Error('Method not implemented.');
  // }
  // handleError<T>(arg0: string, arg1: never[]): (err: any, caught: Observable<unknown>) => import("rxjs").ObservableInput<any> {
  //   throw new Error('Method not implemented.');
  // }

  getProductBySku(sku: string): Observable<Product> {
    const url = `${this.productUrl}/${sku}`;
    return this.http.get<Product>(url).pipe(
      // tap(_ => this.log(`fetched product sku=${sku}`)),
      // catchError(this.handleError(`getProduct sku=${sku}`, []))
    );
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productUrl, product, this.httpOptions).pipe(
      // tap(_ => this.log(`updated product sku=${product.sku}`)),
      // catchError(this.handleError<any>('updateProduct', []))
    );
  }

  // I believe this to be superfluous to the one in the compoment
  deleteProduct(sku: string): Observable<Product> {
    // const url = `${this.prodcutsUrl}/${id}`;
    // return this.http.delete<Hero>(url, this.httpOptions).pipe(
    //   tap(_ => this.log(`deleted hero id=${id}`)),
    //   catchError(this.handleError<Hero>('deleteHero'))
    // );
    return of();
  }
 /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


} // end CLASS

//   /** GET heroes from the server */
//   getHeroes(): Observable<Hero[]> {
//     return this.http.get<Hero[]>(this.heroesUrl)
//       .pipe(
//         tap(_ => this.log('fetched heroes')),
//         catchError(this.handleError<Hero[]>('getHeroes', []))
//       );
//   }

//   /** GET hero by id. Return `undefined` when id not found */
//   getHeroNo404<Data>(id: number): Observable<Hero> {
//     const url = `${this.heroesUrl}/?id=${id}`;
//     return this.http.get<Hero[]>(url)
//       .pipe(
//         map(heroes => heroes[0]), // returns a {0|1} element array
//         tap(h => {
//           const outcome = h ? 'fetched' : 'did not find';
//           this.log(`${outcome} hero id=${id}`);
//         }),
//         catchError(this.handleError<Hero>(`getHero id=${id}`))
//       );
//   }

//   /** GET hero by id. Will 404 if id not found */
//   getHero(id: number): Observable<Hero> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get<Hero>(url).pipe(
//       tap(_ => this.log(`fetched hero id=${id}`)),
//       catchError(this.handleError<Hero>(`getHero id=${id}`))
//     );
//   }


//   //////// Save methods //////////

//   /** POST: add a new hero to the server */
//   addHero(hero: Hero): Observable<Hero> {
//     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
//       tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
//       catchError(this.handleError<Hero>('addHero'))
//     );
//   }

//   /** DELETE: delete the hero from the server */
//   deleteHero(id: number): Observable<Hero> {
//     const url = `${this.heroesUrl}/${id}`;

//     return this.http.delete<Hero>(url, this.httpOptions).pipe(
//       tap(_ => this.log(`deleted hero id=${id}`)),
//       catchError(this.handleError<Hero>('deleteHero'))
//     );
//   }

//   /** PUT: update the hero on the server */
//   updateHero(hero: Hero): Observable<any> {
//     return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
//       tap(_ => this.log(`updated hero id=${hero.id}`)),
//       catchError(this.handleError<any>('updateHero'))
//     );
//   }

//   /**
//    * Handle Http operation that failed.
//    * Let the app continue.
//    *
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead

//       // TODO: better job of transforming error for user consumption
//       this.log(`${operation} failed: ${error.message}`);

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }

//   /** Log a HeroService message with the MessageService */
//   private log(message: string) {
//     this.messageService.add(`HeroService: ${message}`);
//   }
// }

