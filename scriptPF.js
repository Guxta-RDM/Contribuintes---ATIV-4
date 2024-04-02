<<<<<<< HEAD
import { Contribuinte } from './ScriptC.js'

class PessoaFisica extends Contribuinte {

    // Atributos
    #sexo

    // Métodos
    constructor(nome, cpf, rendaB, sx) {
        super(nome, cpf, rendaB); //Chama o construtor da super classe

        //Próprios da Classe PessoaFisica
        this.#sexo = sx;
    }

    // Get e Set (Sexo)
    getSexo() { return this.#sexo };
    setSexo(novoSexo) { this.#sexo = novoSexo };

    // Reimplementação do método calcImposto da super classe (Contribuinte)
    calcImposto() {
        super.calcImposto()
        let alíquota;
        let pad;
        let imposto;
        let doc = super.getDocumento();
        if (doc.length === 11) {
            if (super.getRendaB() >= 0 && super.getRendaB() <= 1400) {
                return console.log("\nVocê não precisa pagar imposto.");
            }
            if (super.getRendaB() > 1400 && super.getRendaB() <= 2100) {
                alíquota = 0.10;
                pad = 100;
                imposto = (super.getRendaB() * alíquota) - pad;
                return imposto;
            }
            if (super.getRendaB() > 2100 && super.getRendaB() <= 2800) {
                alíquota = 0.15;
                pad = 270;
                imposto = (super.getRendaB() * alíquota) - pad;
                return imposto;
            }
            if (super.getRendaB() > 2800 && super.getRendaB() <= 3600) {
                alíquota = 0.25;
                pad = 500;
                imposto = (super.getRendaB() * alíquota) - pad;
                return imposto;
            }
            else {
                alíquota = 0.30;
                pad = 700;
                imposto = (super.getRendaB() * alíquota) - pad;
                return imposto;
            }
        }
        else {
            return console.log("O documento fornecido não é um CPF válido.");
        }
    }
}

export { PessoaFisica }

=======
import { Contribuinte } from './ScriptC.js'

class PessoaFisica extends Contribuinte {

    // Atributos
    #sexo

    // Métodos
    constructor(nome, doc, rendaB, sx) {
        super(nome, doc, rendaB); //Chama o construtor da super classe

        //Próprios da Classe PessoaFisica
        this.#sexo = sx;
    }

    // Get e Set (Sexo)
    getSexo() { return this.#sexo };
    setSexo(novoSexo) { this.#sexo = novoSexo };

    // Reimplementação do método calcImposto da super classe (Contribuinte)
    calcImposto() {
        super.calcImposto()
        let alíquota;
        let pad;
        let imposto;
        let doc = super.getDocumento();
        if (doc.length === 11) {
            if (super.getRendaB() >= 0 && super.getRendaB() <= 1400) {
                return console.log("\nVocê não precisa pagar imposto.");
            }
            if (super.getRendaB() > 1400 && super.getRendaB() <= 2100) {
                alíquota = 0.10;
                pad = 100;
                imposto = (super.getRendaB() * alíquota) - pad;
                return console.log("\nVocê terá de pagar R$" + imposto + " de imposto");
            }
            if (super.getRendaB() > 2100 && super.getRendaB() <= 2800) {
                alíquota = 0.15;
                pad = 270;
                imposto = (super.getRendaB() * alíquota) - pad;
                return console.log("\nVocê terá de pagar R$" + imposto + " de imposto");
            }
            if (super.getRendaB() > 2800 && super.getRendaB() <= 3600) {
                alíquota = 0.25;
                pad = 500;
                imposto = (super.getRendaB() * alíquota) - pad;
                return console.log("\nVocê terá de pagar R$" + imposto + " de imposto");
            }
            else {
                alíquota = 0.30;
                pad = 700;
                imposto = (super.getRendaB() * alíquota) - pad;
                return console.log("\nVocê terá de pagar R$" + imposto + " de imposto");
            }
        }
        else {
            return console.log("O documento fornecido não é um CPF válido.");
        }
    }
}

export { PessoaFisica }


>>>>>>> a03a7566517b57429ad7775252284353b2719d36
