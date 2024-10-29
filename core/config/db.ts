// db.ts
import { Database, SQLite3Connector } from 'https://deno.land/x/denodb/mod.ts';

// Configuración del conector SQLite
const connector = new SQLite3Connector({
  filepath: '../../database.sqlite', // Ruta del archivo de la base de datos
});

// Crear una instancia de la base de datos
const db = new Database(connector);

// Exportar la base de datos para usarla en otros archivos
export { db };