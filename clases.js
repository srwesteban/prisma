class curso {
    #titulo="hola";
    nombre;

    constructor(){
        this.nombre="daniel";
    }

    mostrarTitulo() {
        console.log(this.#titulo);
    }

    get nombre(){
        return this.nombre;
    }

    set nombre(name){
        this.nombre=name;
    }


}


// let curso = class{}