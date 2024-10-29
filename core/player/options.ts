import type { BIPbody } from "../nucleos/bipedo/body.ts";
import type { SOUL } from "../nucleos/soul.ts";
import { CPlayer } from "./mainPlayer.ts";

export class playerOptions extends CPlayer {
    constructor(player: CPlayer) {
        super(player);
    }
}
