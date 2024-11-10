import { BIPbody } from "../nucleos/bipedo/body";
import { SOUL } from "../nucleos/soul";

export interface IEnemy {
    id: number;
    nombre: string;
    body: BIPbody;
    soul: SOUL;
    skills: object;
    clase: number;
    inventory: Array<any>;
}