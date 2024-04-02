<<<<<<< HEAD
import { Contribuinte } from './ScriptC.js'

class PessoaJuridica extends Contribuinte {

    // Atributos
    #ano_de_fundacao

    // Métodos
    constructor(nome, cnpj, rendaB, adf) {
        super(nome, cnpj, rendaB); //Chama o construtor da super classe

        //Próprios da Classe PessoaJuridica
        this.#ano_de_fundacao = adf;
    }

    //Get e Set (Ano de Fundação)
    getADF() { return this.#ano_de_fundacao };
    setADF(novaADF) { this.#ano_de_fundacao = novaADF };

    calcImposto() {
        let alíquota = 0.10;
        let imposto;
        let doc = super.getDocumento();

        if (doc.length === 14) {
            imposto = super.getRendaB() * alíquota;
            return imposto;
        }
        else {
            return console.log("\nIsso não é um CNPJ válido.");
        }


    }

}

export { PessoaJuridica }


=======
import { Contribuinte } from './ScriptC.js'

class PessoaJuridica extends Contribuinte {

    // Atributos
    #ano_de_fundacao

    // Métodos
    constructor(nome, doc, rendaB, adf) {
        super(nome, doc, rendaB); //Chama o construtor da super classe

        //Próprios da Classe PessoaJuridica
        this.#ano_de_fundacao = adf;
    }

    //Get e Set (Ano de Fundação)
    getADF() { return this.#ano_de_fundacao };
    setADF(novaADF) { this.#ano_de_fundacao = novaADF };

    calcImposto(doc) {
        let alíquota = 0.10;
        let imposto;

        if (doc.length === 14) {
            imposto = super.getRendaB() * alíquota;
            return console.log("\nVocê terá de pagar R$" + imposto + " de imposto.");
        }
        else {
            return console.log("\nIsso não é um CNPJ válido.");
        }


    }

}

export { PessoaJuridica }


>>>>>>> a03a7566517b57429ad7775252284353b2719d36
