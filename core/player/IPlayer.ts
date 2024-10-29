import type { BIPbody } from "../nucleos/bipedo/body";
import type { SOUL } from "../nucleos/soul";

export interface IPlayer {
  id: number;
  nombre: string;
  body: BIPbody;
  soul: SOUL;
  skills: object;
  clase: number;
}
