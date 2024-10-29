
// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const buf = new Uint8Array(1024); // Buffer para leer la entrada
    while (true) {
      // Solicitar al usuario que ingrese una opción
      console.log("Ingrese una opción (o 'salir' para terminar):");
      
      // Leer la entrada del teclado
      const n = await Deno.stdin.read(buf);
      const input = new TextDecoder().decode(buf.subarray(0, n)).trim();
  
      // Comprobar si el usuario quiere salir
      if (input.toLowerCase() === 'salir') {
        console.log("Saliendo...");
        break;
      }
  
      // Procesar la entrada
      console.log(`Usted ingresó: ${input}`);
    }
  }