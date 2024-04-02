<<<<<<< HEAD
import { PessoaFisica } from "./scriptPF.js";
import { PessoaJuridica } from "./scriptPJ.js";

class GrupoDeContribuintes {

    // Atributos 
    #contribuintes;

    // Métodos
    constructor() {
        this.#contribuintes = [];
    }

    //Gets e Sets
    getContribuinte() { return this.#contribuintes };
    setContribuinte(contribuinte) { this.#contribuintes = contribuinte };

    addContribuinte(c) {
        this.#contribuintes.push(c);
    }

    getTotalImposto() {
        let T = 0;
        for (let c of this.#contribuintes) {
            T += c.calcImposto();
        }
        return console.log("O imposto total de todos os contribuintes é de: " + T);
    }

    getPorcentagemContribuintesFeminino() {
        let contagem = 0;
        let TotalC = 0;
        for (let c of this.#contribuintes) {
            if (c instanceof PessoaFisica) {
                TotalC++;
            }
        }

        for (let c of this.#contribuintes) {
            if (c instanceof PessoaFisica) {
                if (c.getSexo() == 'F' || c.getSexo() == 'f') {
                    contagem++;
                }
            }
        }

        let porcent = (contagem / TotalC) * 100;

        return console.log("Porcentagem de contribuintes femininas: " + porcent + "%");

    }

}

=======
import { Contribuinte } from "./ScriptC.js";
import { PessoaFisica } from "./scriptPF.js";
import { PessoaJuridica } from "./scriptPJ.js";

class GrupoDeContribuintes{

    // Atributos
    #Contribuintes

    // Metodos
    constructor(c){
        this.#Contribuintes = c
    }

    // Gets e Sets
    getContribuinte(){ return this.#Contribuintes};
    setContribuinte(c){ this.#Contribuintes = c};

    addContribuinte(){
        
    }

    listContribuintes(){
       
    }

}

>>>>>>> a03a7566517b57429ad7775252284353b2719d36
