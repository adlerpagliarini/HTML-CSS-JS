/*Como foi dito por Bertrand Meyer, “entidades de software (classes, módulos, funções, etc.) 
devem se manter abertas para extensões, mas fechadas para modificações.
” Mas o que isso significa? Esse princípio basicamente diz que você deve 
permitir que usuários adicionem novas funcionalidades sem mudar código já existente.*/

class AjaxAdapter extends Adapter {
    constructor() {
        super();
        this.name = 'ajaxAdapter';
    }
}
class NodeAdapter extends Adapter {
    constructor() {
        super();
        this.name = 'nodeAdapter';
    }
}
class HttpRequester {
    constructor(adapter) {
        this.adapter = adapter;
    }
    fetch(url) {
        if (this.adapter.name === 'ajaxAdapter') { return makeAjaxCall(url).then((response) => {
               // transforma a resposta e retorna
            });
        } else if (this.adapter.name === 'httpNodeAdapter') { return makeHttpCall(url).then((response) => {
            // transforma a resposta e retorna
            });
        }
    }
}
function makeAjaxCall(url) {
    // faz a request e retorna a promessa
}
function makeHttpCall(url) {
    // faz a request e retorna a promessa
}

/******************************************************/
class AjaxAdapter extends Adapter {
    constructor() {
        super();
        this.name = 'ajaxAdapter';
    }
    request(url) {
      // faz a request e retorna a promessa
    }
}
class NodeAdapter extends Adapter {
    constructor() {
        super();
        this.name = 'nodeAdapter';
    }
    request(url) {
      // faz a request e retorna a promessa
    }
}

class HttpRequester {
    constructor(adapter) {
        this.adapter = adapter;
    }
    fetch(url) {
        return this.adapter.request(url).then((response) => {
            // transforma a resposta e retorna
        });
    }
}