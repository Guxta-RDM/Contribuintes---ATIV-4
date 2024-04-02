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

let GDC = new GrupoDeContribuintes();
let PF1 = new PessoaFisica('Gustavo', '46645452829', 5000, 'M');
let PF2 = new PessoaFisica('Ana', '46643452522', 5000, 'F');
let PF3 = new PessoaFisica('Ana Maria', '48849246239', 5000, 'F');
let PJ1 = new PessoaJuridica('Zatatech', '87212448000157', 80000, 2007);
let PJ2 = new PessoaJuridica('Acre', '87212448040157', 80000, 2007);
GDC.addContribuinte(PF1);
GDC.addContribuinte(PF2);
GDC.addContribuinte(PF3);
GDC.addContribuinte(PJ1);
GDC.addContribuinte(PJ2);
GDC.getTotalImposto();
GDC.getPorcentagemContribuintesFeminino();
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

// let GDC = new GrupoDeContribuintes();
// let PF = new PessoaFisica('Gustavo', '46645452829', 2000, 'Masculino');
// let PJ = new PessoaJuridica('Tech Animus', '48800847000187', 5000, 2005);
// GDC.addContribuinte(PF);
// GDC.addContribuinte(PJ);
// GDC.listContribuintes();
>>>>>>> a03a7566517b57429ad7775252284353b2719d36
