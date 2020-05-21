
// Propiedades del Amplificador (keys y values)

var amplificador = {
    marca: 'Amplificador Vox',
    modelo: 'Mini5 Rhythm',
    anyo: 2020,
    color: 'negro',
    alto: '350mm',
    largo: '350mm',
    ancho: '200mm',
//Método (función dentro de un objeto)
    detalles: function(){
        console.log (`${this.marca}: ${this.modelo}\\ ${this.anyo} \\ ${this.color} \\ ${this.alto} 
        \\ ${this.largo} \\ ${this.ancho}`);
    } 
};




