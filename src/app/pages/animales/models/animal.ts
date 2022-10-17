export class Animal {
    

    constructor(
        public id_animal: number,
        public nombre: string ,
        public sexo: string,
        public especie: string,
        public altura: string,
        public color: string,
        public n_microchip: string,
        public raza: string,
        public dueno_id_dueno: number,
        public ficha_veterinaria_id_ficha: number,

    ){

        this.id_animal = id_animal
        this.nombre = nombre

    }
    
    
}
