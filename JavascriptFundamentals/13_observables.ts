import { Observable, Subject, asapScheduler, pipe, of, from, interval, timer, merge, fromEvent, SubscriptionLike, PartialObserver, throwError, forkJoin } from 'rxjs';
import { map, filter, reduce, scan, catchError, flatMap, switchMap, takeUntil, toArray, concatMap, zip } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

console.log('Adler Pagliarini - Observables');

console.log('************* RACING REQUEST ***************'); //reference: https://x-team.com/blog/rxjs-observables/

document.addEventListener('DOMContentLoaded', function () {

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
    }  
}

var postId = 0;
let getPost = () => {
    //let postId = Math.round(Math.random() * 9) + 1;
    postId += 1;
    const postApiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return ajax(postApiUrl);//.pipe(map(r => r.response)).subscribe((res) => console.log(res), () => {}, () => console.log(`completed-${postId}`));
}

let getPostById = (postId) => {
  postId += 1;
  const postApiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  return ajax(postApiUrl);//.pipe(map(r => r.response)).subscribe((res) => console.log(res), () => {}, () => console.log(`completed-${postId}`));
}

let getValue = () => {
  return Observable.create((observer:any) => {
    let postId = 0;
    postId++;
    observer.next('Hey guys! ' + postId)
    observer.complete()
  });
}

  // Print Clicked
  const button = document.getElementById('btn');
  const clicks$ = fromEvent(button, 'click');
  clicks$.subscribe({
    next(value) { console.log('clicked', value); },
    error(error) { console.error(error); },
    complete() { console.info('done'); }
  });

  // Ajax Request with Flat using button event
  const buttonFlat = document.getElementById('btnFlat');
  const clicksFlat$ = fromEvent(buttonFlat, 'click');
  clicksFlat$.pipe(flatMap(getPost)).subscribe({
    next(result) { wait(250); console.log('Flat ' + result.response.id + ' ' + result.response.title); },
    error(error) { console.error(error); },
    complete() { console.info(`completed`); }
  });

  // Ajax Request with Switch using button event
  const buttonSwitch = document.getElementById('btnSwitch');
  const clicksSwitch$ = fromEvent(buttonSwitch, 'click')
  clicksSwitch$.pipe(switchMap(getPost)).subscribe({
    next(result) { wait(250); console.log('Switch ' + result.response.id + ' ' + result.response.title); },
    error(error) { console.error(error); },
    complete() { console.info(`completed`); }
  });


  // Testing Interval and Ajax Request with Switch
  let getIntervalValue = () => {
      return interval(3000);
  } 
  getValue().subscribe((x:any) => {
    let parmRecived = x;
    console.log(parmRecived);
  }); 
        //Get Value using button event
  const buttonSwitchValue = document.getElementById('btnSwitchValue');
  const clicksSwitchValue$ = fromEvent(buttonSwitchValue, 'click')
  clicksSwitchValue$.pipe(switchMap(getIntervalValue)).subscribe({
    next(result) { console.log('Switch ' + result); },
    error(error) { console.error(error); },
    complete() { console.info(`completed`); }
  });
        //Ajax Request using button event
  const buttonSwitchRequest = document.getElementById('btnSwitchRequest');
  const clicksSwitchRequest$ = fromEvent(buttonSwitchRequest, 'click')  
  const switchInterval$ = clicksSwitchRequest$.pipe(switchMap(() => interval(1000)), filter(value => value < 5)); //const filter$ = switchInterval$.pipe(filter(value => value <= 5));
  switchInterval$.subscribe(
    (next) => { getPostById(next).subscribe( (result) => { console.log(result.response); }) },
    (err) => { console.error(err) },
    () => { console.info('completed') }
  );


//*************************************************************************************************************************/
  // Multiples Requests and Reduce using Id From Array
     //flatMap will return aleatory response
     //concatMap will return response in order
     //switchMap will return the last request
     //toArray a group the responses into just one (next call function)
  const projectIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  //Test one
  from(projectIds).pipe(map((id) => getPostById(id))).subscribe(
    (next) => next.subscribe((next) => console.log(next.response))
  );
  
  //Test Two
  var cont = 0;
  //without toArray() operator, cont = 3
  //with toArray() operator, cont = 1
  from(projectIds).pipe(concatMap((id) => getPostById(id)), toArray()).subscribe(
    (next) => {
                cont++; 
                recieveTheMultiplesResponse(next);
              },
    (err) => console.error(err),
    () => { console.log('cont:' + cont); }
  );

  let recieveTheMultiplesResponse = (response) => {
    let reduced = response.reduce((acc, current) => {
        acc.push(current); return acc;
    },[]);
    let reducedSum = response.reduce((acc, current) => {
      acc += current.response.id; return acc;
  },0);
    console.log('Reduced', reduced, reducedSum);
  }

});