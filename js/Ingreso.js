// Clase Ingreso que extiende la clase padre Dato

class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor (descripcion, valor){
        super(descripcion,valor);   
        this._id = ++Ingreso.contadorIngreso;  
    }

    get Id(){
        return this._id;
    }
  
}
