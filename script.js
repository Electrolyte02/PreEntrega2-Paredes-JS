class Producto{
    constructor(nombre,marca,stock,precio,categoria,cantidad){
    this.nombre=nombre;
    this.marca=marca;
    this.stock=parseInt(stock);
    this.precio=parseInt(precio);
    this.categoria=categoria;
    this.cantidad=cantidad;
    }
    sumarIva(){
        this.precio=(this.precio*1.21);
    }
}

const Productos= [];
let operacion= 1;
let contador="1";
let nomProducto="";
let marProducto="";
let stoProducto="";
let preProducto="";
let catProducto="";
let canProducto="";

function cargarProducto(){
    nomProducto=prompt("Ingrese el nombre del producto a cargar");
    marProducto=prompt("Ingrese la marca del producto a cargar");
    stoProducto=prompt("Ingrese el stock del producto a cargar");
    preProducto=prompt("Ingrese el precio del producto a cargar");
    catProducto=prompt("Ingrese la categoria del producto a cargar");
    canProducto=prompt("Ingrese la cantidad(unidad,litros o gramos) del producto a cargar");
    Productos.push(new Producto(nomProducto,marProducto,stoProducto,preProducto,catProducto,canProducto));
}


do{
    cargarProducto();
    operacion=prompt("Ingrese 1 si desea continuar cargando productos u otra cosa para salir");
    operacion=parseInt(operacion);
}
while (operacion==1)

const ProductosEnStock = Productos.filter((element)=>element.stock>0);

Largo = Productos.length;

function recorrerProductos(array,fn){
  for(var i=0;i<Largo;i++){
    fn(array[i]);
}
}

console.log("Los productos que estan actualmente en stock son:");
recorrerProductos(ProductosEnStock,console.log);

