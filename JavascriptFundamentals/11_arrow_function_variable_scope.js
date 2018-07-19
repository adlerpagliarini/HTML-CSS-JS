/* Arrows Function */
//https://youtu.be/oxoFVqetl1E?t=687
const Fun = function() {
    return {
      abc : 'Adler Pagliarini',
      methodF : function() {
        console.log(this.abc); // OK
        let innerF = function(){
          console.log(this.abc); // NOT DEFINED
        }
        innerF();
      }
    }
  }
  let fun = new Fun();
  fun.methodF(); //not defined
  
  const FunTwo = function() {
    return {
      abc : 'Adler Pagliarini two',
      methodF : function() {
        console.log(this.abc); // OK
        let innerF = () => {
          console.log(this.abc); // OK
        }
        innerF();
      }
    }
  }
  let funTwo = new FunTwo();
  funTwo.methodF();
  
  //without constructor
  const FunThree = {
      abc : 'Adler Pagliarini three',
      methodF : function() {
        console.log(this.abc); // OK
        let innerF = () => {
          console.log(this.abc); // OK
        }
        innerF();
      }
  }
  FunThree.methodF();
  /* Arrows Function */