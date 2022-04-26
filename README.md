# AbortController (JavaScript)

Esta interfaz representa un objeto controlador que le permite cancelar una o más solicitudes web cuando lo desee.
Puede crear un nuevo AbortController utilizando el constructor ***new AbortController()***. La comunicación con una solicitud DOM se realiza mediante un ***AbortSignal***.

Nota: Cuando se llama a *abort()* , la promesa *fetch()* rechaza con un Error de tipo DOMException , con el nombre *AbortError*.

## Fetch: Abort

Como sabemos fetch devuelve una promesa. Y generalmente JavaScript no tiene un concepto de “abortar” una promesa. Entonces, ¿cómo podemos abortar una llamada al método fetch? 
Existe para esto de forma nativa un objeto especial: *AbortController*. Puede ser utilizado para abortar no solo fetch sino otras tareas asincrónicas también.

Este controlador es un objeto extremadamente simple.

    - Tiene un único método abort(),
    - y una única propiedad signal que permite establecerle escuchadores de eventos.

Cuando **abort()** es invocado:

    - controller.signal emite el evento "abort".
    - La propiedad controller.signal.aborted toma el valor true.

Generalmente tenemos dos partes en el proceso:

    - El que ejecuta la operación de cancelación, genera un listener que escucha a controller.signal.
    - El que cancela: este llama a **controller.abort()** cuando es necesario.
