import type { BIPbody } from "../nucleos/bipedo/body.ts";
import type { SOUL } from "../nucleos/soul.ts";
import type { IPlayer } from "./IPlayer.ts";

export class CPlayer implements IPlayer {
    id: number;
    nombre: string;
    body: BIPbody;
    soul: SOUL;
    skills:any
    clase:any

    constructor(player: IPlayer) {
        this.id = player.id;
        this.nombre = player.nombre;
        this.body = player.body;
        this.soul = player.soul;
        this.clase = player.clase;
    }

    
}
