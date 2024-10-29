import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { promises as fs } from "node:fs";

type ColumnTypes = "INTEGER" | "TEXT" | "REAL" | "BLOB" | "BOOLEAN";

interface TableSchema {
  [columnName: string]: ColumnTypes;
}

export class SQLiteManager {
  private db: DB;

  constructor(databaseName: string) {
    this.db = new DB(databaseName);
  }

  // Crear una tabla a partir de un objeto JSON
  createTableFromJson(tableName: string, schema: TableSchema): void {
    const columns = Object.entries(schema)
      .map(([columnName, columnType]) => `${columnName} ${columnType}`)
      .join(", ");

    const sql =
      `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${columns})`;
    this.db.execute(sql);
  }

  // Editar una tabla (agregar una columna)
  addColumn(
    tableName: string,
    columnName: string,
    columnType: ColumnTypes,
  ): void {
    const sql =
      `ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType}`;
    try {
      this.db.execute(sql);
    } catch (error) {
      console.error(`Error al agregar columna: ${error.message}`);
    }
  }

  // Eliminar una tabla
  dropTable(tableName: string): void {
    const sql = `DROP TABLE IF EXISTS ${tableName}`;
    this.db.execute(sql);
  }

  // Cerrar la conexión a la base de datos
  close(): void {
    this.db.close();
  }
}

async function main(option:number) {
  // Leer el archivo JSON
  const data = await fs.readFile(
    "C:/Users/issac/Documents/issac/BYRO/ProjectG/core/config/plantilla.json",
    "utf-8",
  );

  // Parsear el JSON a un objeto
  const schema = JSON.parse(data);

  const dbManager = new SQLiteManager("mi_base_de_datos.db");
  for await (const table of Object.entries(schema)) {
    console.log(table);
    switch (option) {
      case 1:
        // Crear una tabla usando el esquema
        dbManager.createTableFromJson(table[0], table[1]);
        break;
      case 2:
        // Agregar una nueva columna
        // dbManager.addColumn("usuarios", "telefono", "TEXT");
        break;
      case 3:
        // Eliminar una tabla
        // dbManager.dropTable("usuarios");
        break;
      default:
        break;
    }
  }
  // Cerrar la conexión
  dbManager.close();
}

// Ejecutar la función principal
main(1).catch(console.error);
