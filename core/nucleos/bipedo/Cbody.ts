import type { BIPbody } from "./body.ts";

export abstract class BaseBipedo implements BIPbody {
    abstract head: 50;
    abstract torso: 100;
    abstract left_arm: 30;
    abstract right_arm: 30;
    abstract left_leg: 40;
    abstract right_leg: 40;
    abstract total_life: 290;
    abstract item_head: number | null;
    abstract item_torso: number | null;
    abstract item_left_arm: number | null;
    abstract item_right_arm: number | null;
    abstract item_left_leg: number | null;
    abstract item_right_leg: number | null;
    constructor(body: BIPbody) {
    }

    abstract setItemInventori(): Promise<void>;
    abstract getItem(): Promise<void>;
    abstract consumeItem(): Promise<void>;
    abstract setItemBody(): Promise<void>;
    /**
     * FUNCIÓN PARA EL CALCULO DE DAÑO
     */
    abstract setDamage(): Promise<void>;
}
