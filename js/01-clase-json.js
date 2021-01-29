var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km/h',
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color tambien se puede hacer
        this.color = nuevo_color
        console.log(this);
    }
};

bicicleta.cambiaColor("Azul");