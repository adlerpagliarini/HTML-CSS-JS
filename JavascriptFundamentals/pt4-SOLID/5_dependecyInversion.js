/*Acoplamento é um padrão de desenvolvimento muito ruim porque torna seu código mais difícil de ser refatorado.*/
class InventoryRequester {
    constructor() {
      this.REQ_METHODS = ['HTTP'];
    }
    requestItem(item) {
      // ...
    }
}
class InventoryTracker {
    constructor(items) {
      this.items = items;
      // Ruim: Nós criamos uma dependência numa implementação de request especifica.
      // Nós deveriamos apenas ter requestItems dependendo de um método de request: `request`
      this.requester = new InventoryRequester(); // Nao pode ser trocado
    }
    requestItems() {
      this.items.forEach((item) => {
        this.requester.requestItem(item);
      });
    }
}
const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();


/*************************************************************************************************/

class InventoryTrackerOK {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }
  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }
  requestItem(item) {
    // ...
    console.log('v1', item);
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ['WS'];
  }
  requestItem(item) {
    // ...
    console.log('v2', item);
  }
}

// Construindo nossas dependências externamente e injetando-as, podemos facilmente
// substituir nosso módulo de request por um novo mais chique que usa WebSockets
const inventoryTrackerOK = new InventoryTrackerOK(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTrackerOK.requestItems();