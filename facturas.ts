class Factura {
  constructor(numero: string, total: number) {}
}

class Pedido {
  crearFactura(): Factura {
    return new Factura("F001", 20000);
  }
}
