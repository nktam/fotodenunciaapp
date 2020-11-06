export class Denuncia {

    constructor(
        public id: string,
        public texto: string,
        public foto: string,
        public localizacion: string,
        public fecha: Date,
        public solucionado: boolean,
        public fechaSolucion: Date
    ) {};

    static fromJson(data: any) {
        if(!data.descripcion) {
            throw (new Error("Argumento inválido: la estructura no concuerda con el modelo"));
        }
        return new Denuncia(data.id, data.texto, data.foto, data.localizacion, data.fecha, data.solucionado, data.fechaSolucion);
    }
}