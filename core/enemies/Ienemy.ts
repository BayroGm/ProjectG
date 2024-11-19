import { BIPbody } from "../nucleos/bipedo/body.ts";
import { SOUL } from "../nucleos/soul.ts";

export interface IEnemy {
    id: number;
    nombre: string;
    body: BIPbody;
    soul: SOUL;
    skills: object;
    clase: number;
    inventory: Array<any>;
}
