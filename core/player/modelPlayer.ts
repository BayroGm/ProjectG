
// models/user.ts
import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";
import { db } from "../config/db.ts"; // Importar la instancia de la base de datos


class MPlayer extends Model {
    static override table = "player"; // Nombre de la tabla
    static override timestamps = false; // Habilitar timestamps

    static override fields = {
        id: { primaryKey: true, autoIncrement: true }, // Campo ID
        nombre: DataTypes.STRING,
        body: DataTypes.INTEGER,
        soul: DataTypes.INTEGER,
        skills: DataTypes.STRING,
        clase: DataTypes.INTEGER,
    };
}

// Vincular el modelo a la base de datos
db.link([MPlayer]);

export { MPlayer };
