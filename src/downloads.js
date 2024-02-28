function descargarRAR() {
    // Ruta del archivo RAR
    var rutaArchivoRAR = "src/descargar.rar";
  
    // Crear un enlace invisible
    var enlace = document.createElement("a");
  
    // Establecer la URL del enlace como la ruta del archivo
    enlace.href = rutaArchivoRAR;
  
    // Establecer el atributo 'download' con el nombre del archivo
    enlace.download = "extension-tmo.rar";
  
    // Agregar el enlace al DOM
    document.body.appendChild(enlace);
  
    // Simular un clic en el enlace para iniciar la descarga
    enlace.click();
  
    // Eliminar el enlace del DOM después de la descarga
    document.body.removeChild(enlace);
  }
