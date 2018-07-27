import { Observable, Subject, asapScheduler, pipe, of, from, interval, timer, merge, fromEvent, SubscriptionLike, PartialObserver, throwError } from 'rxjs';
import { map, filter, reduce, scan, catchError, flatMap, switchMap, takeUntil } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

console.log('Adler Pagliarini - Observables');
var observable = Observable.create((observer:any) => {
  console.log('Im the observable');
  observer.next('Hey guys!')
  observer.next('How are you?')
  observer.complete()
  observer.next('This will not send')
})

console.log('***************************');
observable.subscribe();
observable.subscribe((x:any) => {
    let parmRecived = x;
    console.log(parmRecived);
});
console.log('****************************')
observable.subscribe(
  (x:any) => addItem(x),
  (error:any) => addItem(error),
  () => addItem('Completed')
);

function addItem(val:any) {
  console.log(val);
}
console.log('****************************');

const numbers$ = from([0, 1, 2, 3, 4, undefined]);
numbers$.subscribe(
  (value) => (value == undefined) ? throwError(new Error()) : console.log(value),
  (err) => console.error(err),
  () => console.info('done')
)

console.log('*************REQUEST***************');
//Both return the same result
const albumsApiUrl = `https://jsonplaceholder.typicode.com/posts/1`;
ajax(albumsApiUrl)
.subscribe(
  res => console.log(res.response),
  err => console.error(err),
  () => console.log('completed')
);
//Both return the same result
ajax(albumsApiUrl).pipe(map(r => r.response)).subscribe((res) => console.log(res), () => {}, () => console.log('completed-2' ));
//
ajax(albumsApiUrl)
.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('completed')
);

//TIMER EXAMPLE 
  
    //Outer timer fires once initially and then every 2 seconds
    timer(0, 3000)
    //Each outer event cancels the previous inner one and starts a new one
    .pipe(switchMap(outer => interval(1000))) //1 second
    .subscribe(x => console.log(x)); 
  