class Contribuinte {

    // Atributos
    #nome
    #documento
    #rendaB

    // Métodos
    constructor(n, d, rB) {
        this.#nome = n;
        this.#documento = d;
        this.#rendaB = rB;
    }

    // Gets e Setters
    getNome() { return this.#nome };
    setNome(novoNome) { this.#nome = novoNome };
    getDocumento() { return this.#documento };
    setDocumento(novoDocumento) { this.#documento = novoDocumento };
    getRendaB() { return this.#rendaB };
    setRendaB(novaRenda) { this.#rendaB = novaRenda };

    calcImposto() { }

}

export { Contribuinte }
