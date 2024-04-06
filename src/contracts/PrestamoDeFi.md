# Contrato PrestamoDeFi

Este contrato inteligente se desarrolla para la plataforma DeFi (Finanzas Descentralizadas) y permite la gestión de préstamos entre prestatarios y el prestamista principal o socio principal. Los clientes pueden solicitar préstamos, depositar garantías, y los empleados del prestamista pueden aprobar, reembolsar préstamos o liquidar garantías.

## Características Principales

- **Gestión de Roles**: Diferencia entre el socio principal, empleados prestamistas y clientes.
- **Solicitudes de Préstamo**: Los clientes pueden solicitar préstamos especificando un monto y un plazo.
- **Aprobación de Préstamos**: Los empleados prestamistas pueden aprobar préstamos solicitados por los clientes.
- **Depósito de Garantías**: Los clientes deben depositar garantías antes de solicitar préstamos.
- **Reembolso de Préstamos**: Permite a los clientes reembolsar los préstamos antes de la fecha límite.
- **Liquidación de Garantías**: En caso de que un préstamo no sea reembolsado a tiempo, el empleado prestamista puede liquidar la garantía.

## Estructuras

- **EstadoPrestamo**: Enumeración de los posibles estados de un préstamo (`Pendiente`, `Aprobado`, `Reembolsado`, `Liquidado`).
- **Prestamo**: Estructura que representa un préstamo, incluyendo ID, prestatario, monto, plazo, tiempo de solicitud, tiempo límite y estado.
- **Cliente**: Estructura que representa un cliente, incluyendo si está activado, saldo de garantía, y un mapping de sus préstamos.

## Modificadores

- **soloSocioPrincipal**: Restringe la ejecución de funciones al socio principal.
- **soloEmpleadoPrestamista**: Restringe la ejecución de ciertas funciones a empleados prestamistas.
- **soloClienteRegistrado**: Verifica si el llamante está registrado como cliente.

## Eventos

- **SolicitudPrestamo**: Emitido cuando un cliente solicita un nuevo préstamo.
- **CambioEstadoPrestamo**: Emitido cuando cambia el estado de un préstamo.

## Funciones Principales

### Alta de Empleados y Clientes

- `altaPrestamista(address nuevoPrestamista)`: Registra un nuevo empleado prestamista.
- `altaCliente(address nuevoCliente)`: Registra un nuevo cliente en el sistema.

### Gestión de Préstamos

- `solicitarPrestamo(uint256 monto, uint256 plazo)`: Permite a un cliente solicitar un préstamo.
- `aprobarPrestamo(address prestatario, uint256 id)`: Permite a un empleado prestamista aprobar un préstamo pendiente.
- `reembolsarPrestamo(uint256 id)`: Permite a un cliente reembolsar un préstamo aprobado.
- `liquidarGarantia(address prestatario, uint256 id)`: Permite a un empleado prestamista liquidar la garantía de un préstamo no reembolsado.

### Consultas

- `obtenerPrestamosPorPrestatario(address prestatario)`: Devuelve los IDs de préstamos de un prestatario.
- `obtenerDetalleDePrestamo(address prestatario, uint256 id)`: Devuelve los detalles de un préstamo específico.

## Cómo Usar

1. El socio principal puede agregar empleados prestamistas mediante `altaPrestamista`.
2. Los empleados pueden registrar clientes usando `altaCliente`.
3. Los clientes depositan garantías a través de `depositarGarantia` y luego pueden solicitar préstamos.
4. Los empleados revisan y aprueban los préstamos mediante `aprobarPrestamo`.
5. Los clientes pueden reembolsar sus préstamos usando `reembolsarPrestamo`.
6. Si un préstamo no se reembolsa a tiempo, un empleado puede liquidar la garantía con `liquidarGarantia`.

## Conclusión

Este contrato proporciona una base sólida para la creación de una plataforma DeFi dedicada a la gestión de préstamos, ofreciendo transparencia, seguridad y flexibilidad en las operaciones de préstamo.
