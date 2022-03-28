Proyecto final 
Anny Pereira

Pasos a seguir:
1) Definir variables globales, necesarias para las distintas funciones y eventos 
2) Se crean los eventos para los botones
3) Se asigna el valor inicial de dinero (entre 10 y 15 euros)
4) Se muestra la cantidad de dinero y monedas segun sea asignado
5) Función tirar que vaya cambiando la imagen para las cajas correspondientes 
6) Un bucle para cambiar las tres imagenes al mismo tiempo
7) Comprobar si el jugador se ha quedado en "0€", muestre una notificiación conforme ha perdido  
8) Comprobar si el jugador ha ganado para mostrar una alerta conforme obtiene un premio aleatorio
9) Añadir sonido para cada caso (ganar, perder y lanzar)

Problemas encontrados:
1) Que se muestre el valor en el DIV sin quitar el simbolo de € 
2) Que cuando el usuario ganaba la partida en el ultimo lanzamiento, se mostraba el mensaje de que ha perdido
3) Que cuando se hiciera click en el boton TIRAR (los tres botones al mismo tiempo) solo restara un crédito y no tres en una sola jugada.

Resolución de problemas: (Leer muuucho y buscar metodos y soluciones para estos problemas, probarlos una y otra vez hasta conseguir solucionarlo)
1) Se agregó una condición en la cual cuando se resta un crédito, se borra el DIV y se agrega de nuevo la etiqueta SPAN con la class euros 
y el simbolo de €, con el método insertAdjacentHTML
2) Se agregó un condicional en revisarDinero que comprueba que si el usuario ha ganado no muestra la notificación de que ha perdido, sino que por
 el contrario muestra el mensaje con el premio
3) Se agregó un condicional que comprueba con el this, si el botón que se ha tocado es alguno de los botones pequeños, en caso contrario solo resta
 el dinero en tirarTodas

Comentario final: Se me hizo complicado, porque algunas cosas si que las tenia entendidas pero muchas otras no y tuve que leer mucho y 
 ver videos para comprender como poder poner en funcionamiento la maquina tragaperras. 
 Esto definitivamente me enseñó que para poder programar hay que entender primero que queremos hacer, para luego plantear como lo podemos hacer y 
 finalmente probar si funciona (muchas veces, desde la inexperiencia, no funciona, es aqui cuando se han de invertir muchas horas en buscar la información correcta)
 Son mis primeros pasos en este mundo y quedo con hambre de conocimientos, así que quedan muchas horas por delante antes de entrar al mundo laboral.


 