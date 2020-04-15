var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

socket.emit('enviarMensaje', {
    usuario: 'Jose',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Resp del servidor: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});