//https://pt.stackoverflow.com/questions/27177/o-que-%C3%A9-callback
console.log('************************* CALLBACK 1 *************************');
function callback(e) {
  alert('Aconteceu um evento ' + e.type);
}
window.addEventListener('click', callback);


/*com request*/
console.log('************************* CALLBACK 2 *************************');
function minhaCallBack(returnhtml) {
  console.log(returnhtml);
  let element =
      document.createElement("div")
    element.text = returnhtml
    document.body.appendChild(element)
}
function minhaErrorCallBack(returnhtml) {
  console.log('Error:' + returnhtml);
}

$(document).ready(function (e) {
      $.ajax({
          url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'GET',
          data: '',
          cache: false,
          success: minhaCallBack,
          error: minhaErrorCallBack
      }); 
});