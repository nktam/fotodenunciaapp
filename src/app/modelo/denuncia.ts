export class Denuncia {

    constructor(
        public id: number=-1,
        public texto: string,
        public foto: string,
        public localizacion: string,
        public fecha: Date
    ) { };

    static fromJson(data: any) {
        if(!data.texto) {
            throw (new Error("Argumento inválido: la estructura no concuerda con el modelo"));
        }
        return new Denuncia(data.id, data.texto, data.foto, data.localizacion, data.fecha);
    }



}