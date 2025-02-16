##Problemas en este diseño

**Alto acoplamiento
*Pedido* crea directamente una instancia de Factura, es dependiente de su implementación.
Si *Factura* cambia, Pedido debe modificarse, lo que dificulta el mantenimiento.

**No sigue el principio Creator
*Pedido* no cumple con las condiciones necesarias para ser responsable de la creación de *Factura*.
Si se requieren diferentes tipos de facturas,*Pedido* tendría que conocer esos detalles, aumentando su responsabilidad.

##¿Qué se debe mejorar?

**Aplica correctamente el principio Creator
Se debe delegar la creación de Factura a una clase *FacturaFactory*, que se encargara de toda la gestión de las facturas,
esta conocerá todos los detalles para crear una *Factura*.

**Bajo acoplamiento
*Pedido* no debería depender directamente de la implementación de Factura.
Si *Factura* cambia, solo debería afectar a *FacturaFactory*.