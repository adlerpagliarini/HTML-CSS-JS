console.log('************************* PROMISE *************************');
const MyPromise = function (url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (response.status !== 200)
              reject(new Error("Looks like there was a problem. Status Code: " + response.status));
            

            response.json().then(data => {
              resolve(data);
            });
          })
        .catch(function(err) {
            reject(new Error('Fetch Error :-S', err));
        });            
        /*$.getJSON(url)
          .done((json) => resolve(json))
          .fail((xhr, status, err) => reject(status + err.message));*/
      });
}

console.log('************************* PROMISE OBJECT WITH *************************');
let promise = MyPromise('https://jsonplaceholder.typicode.com/posts/1').then(
    (r) =>{ 
        console.log(r);
    }
);

Promise.all([
    MyPromise('https://jsonplaceholder.typicode.com/posts/1'),
    MyPromise('https://jsonplaceholder.typicode.com/posts/2'),
    MyPromise('https://jsonplaceholder.typicode.com/posts/3')
  ]).then((parm) => {
    console.log('parm', parm);
    let redArray = parm.reduce((ac, current) => {ac.push(current.id); return ac;}, []);
    let red = parm.reduce((ac, current) => ac += current.id, 0);
    console.log(redArray, red);
  }).catch((error) => {
    console.log(error);
  })