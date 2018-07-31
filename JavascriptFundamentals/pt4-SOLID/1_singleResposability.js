/*

https://medium.com/trainingcenter/c%C3%B3digo-limpo-vers%C3%A3o-javascript-80adecafdbec?source=userActivityShare-78cf495128ef-1532982394
https://dev.to/remojansen/implementing-the-onion-architecture-in-nodejs-with-typescript-and-inversifyjs-10ad

Como dito em Código Limpo, “Nunca deveria haver mais de um motivo para uma classe ter que mudar”. 
É tentador empacotar uma classe em excesso com muitas funcionalidades, 
como quando você pode levar apenas uma mala em seu voo. 
O problema com isso é que sua classe não será conceitualmente coesa e 
dar-lhe-á diversos motivos para mudá-la. Minimizar o número de vezes que 
você precisa mudar uma classe é importante, porque, 
se muitas funcionalidades estão em uma classe e você mudar uma porção dela, 
pode ser difícil entender como isto afetará outras módulos que dependem dela no seu código.

*/

class UserSettingsBadWay {
    constructor(user) {
      this.user = user;
    }
    changeSettings(settings) {
      if (this.verifyCredentials()) {
        // ...
      }
    }
    verifyCredentials() {
      // ...
    }
}

  
class UserSettings {
    constructor(user) {
      this.user = user;
      this.auth = new UserAuth(user);
    }
    changeSettings(settings) {
      if (this.auth.verifyCredentials()) {
        // ...
      }
    }
}

class UserAuth {
    constructor(user) {
      this.user = user;
    }
    verifyCredentials() {
      // ...
    }
}