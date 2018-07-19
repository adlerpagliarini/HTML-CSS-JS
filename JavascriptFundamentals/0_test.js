let f = () => {
	let i = 1;
	return () => {
		console.log(i); //avaiable
	}
}

console.dir(f());
f();

for(let i = 0; i<3; i++){
    const g = () => {
        console.log(i);
    }
    g();
}

for(let i = 0; i<3; i++){
    setTimeout(() => {
        console.log(i);
    },1000);
}

for(var i = 0; i<3; i++){
    setTimeout(() => {
        console.log(i);
    },1000);
}

for(var i = 0; i<3; i++){
    ((i) =>
     { setTimeout(() => {
        console.log(i);
    },1000)})(i);
}


/********************PROMISSE***************************/
function loadImage(url) {
    return new Promise((resolve, reject) => {
      let image = new Image()
  
      image.onload = function() {
        resolve(image)
      }
  
      image.onerror = function() {
        let message =
          'Could not load image at ' + url
        reject(new Error(msg))
      }
  
      image.src = url
  
    })
  }
let addImg = (src) => {
    let imgElement =
      document.createElement("img")
    imgElement.src = src
    document.body.appendChild(imgElement)
  }
  
  Promise.all([
    loadImage('http://www.tagcode.com.br/tagcode/upload/textoslayout/tagCodeHome1_1.png'),
    loadImage('http://www.tagcode.com.br/tagcode/upload/textoslayout/tagCodeHome1_1.png'),
    loadImage('http://www.tagcode.com.br/tagcode/upload/textoslayout/tagCodeHome1_1.png'),
  ]).then((images) => {
    images.forEach(img => addImg(img.src))
  }).catch((error) => {
    // handle error later
  })
  /*********************************************/
const numberPromise = new Promise((resolve) => {
    resolve(5);
    resolve(10);
});
numberPromise.then(value => console.log(value));

/*
const numberObservable = new Observable((observer) => {
  observer.next(5);
  observer.next(10);
});
numberObservable.subscribe(value => console.log(value));
*/

console.log('************************* FETCH *************************');
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

//PROMISSE
/*https://youtu.be/yo3MJPcVJc8?t=303*/

console.log('************************* NESTED CALLBACK WITH FETCH *************************');
$(document).ready(function (e) {
  $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      type: 'GET',
      data: '',
      cache: false,
      success: function(r){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(json => console.log(json))
      },
      error: function(e){
        console.log(e);
      }
  }); 
});


let unique_array = Array.from(new Set([1,2,3,3]));
console.log(unique_array);

/* return unit value
public getElementsWhereAgeGreaterThanTwenty() : Array<Element>{
    return = this.Elements.filter(e => e.Age > 20).reduce((allSaved, e) => {
                if (!allSaved.find(({Num}) => Num === e.Num)) {
                    allSaved.push(e);
                }
                return allSaved;
                }, []);
    //return Array.from(r.reduce((m, t) => m.set(t.Num, t), new Map()).values());

}*/



