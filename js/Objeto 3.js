// Propiedades del altavoz (keys y values)

var altavoz= {
    marca: 'Altavoz Bose',
    modelo: 'SoundLink Mini II',
    anyo: '2020',
    color: 'gris',
    autonomia: '12hs',
    potencia: '100-240V',
    detalles: function(){
        console.log (`${this.marca}: ${this.modelo}\\ ${this.anyo} \\ ${this.color} \\ ${this.autonomia} \\
        ${this.potencia}`);
    }
};
