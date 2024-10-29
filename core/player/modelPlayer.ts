import type { BIPbody } from "../nucleos/bipedo/body.ts";
import type { SOUL } from "../nucleos/soul.ts";
// models/user.ts
import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";
import { db } from "../config/db.ts"; // Importar la instancia de la base de datos

interface IPlayer {
    id:number,
    nombre: String;
    body: BIPbody;
    soul: SOUL;
    skills: Object;
    clase: Number;
}

class MPlayer extends Model {
    static table = "player"; // Nombre de la tabla
    static timestamps = false; // Habilitar timestamps

    static fields = {
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

export { IPlayer, MPlayer };
