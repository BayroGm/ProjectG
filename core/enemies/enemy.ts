import { BIPbody } from "../nucleos/bipedo/body";
import { armas } from "../nucleos/items/armas/arma";
import { SOUL } from "../nucleos/soul";
import { IEnemy } from "./Ienemy";

export class CEnemy implements IEnemy {
    id: number;
    nombre: string;
    body: BIPbody;
    soul: SOUL;
    skills: object;
    clase: number;
    inventory: any[];
    constructor(enemy: IEnemy) {
        this.id = enemy.id;
        this.nombre = enemy.nombre;
        this.body = enemy.body;
        this.soul = enemy.soul;
        this.skills = enemy.skills;
        this.clase = enemy.clase;
        this.inventory = enemy.inventory;
    }

    async setItemInventori(item: any, cantidad: number) {
        try {
            let existe = this.inventory.find((obj) => obj.id == item.id);
            if (existe) {
                existe.cantidad += cantidad;
            } else {
                this.inventory.push({ id: item.id, cantidad: cantidad });
            }
        } catch (error) {
            console.error(error);
        }
    }

    async getItem() {
        throw new Error("Method not implemented.");
    }

    async consumeItem(item: any, cantidad: number) {
        try {
            let existe = this.inventory.find((obj) => obj.id == item.id);
            if (!existe) {
                return {
                    status: false,
                    message: "No se encontro el item en el inventario",
                    data: null,
                };
            }
            existe.cantidad -= cantidad;
            return {
                status: true,
                message: "No se encontro el item en el inventario",
                data: null,
            };
        } catch (error) {
            console.error(error);
        }
    }

    async setItemBody(item: armas, part: string) {
        try {
            let contentbody = [
                "item_head",
                "item_torso",
                "item_left_arm",
                "item_right_arm",
                "item_left_leg",
                "item_right_leg",
            ];
            if (!contentbody.includes(part)) {
                return {
                    status: false,
                    message: "No se puede colocar el item en ese lugar",
                    data: null,
                };
            }
            this.body[`${part}`] = item;
            return { status: true, message: "item colocado", data: null };
        } catch (error) {
            console.error(error);
        }
    }
    
    async setDamage(item: armas, objetivo: string) {
        try {
            let contentbody=["head","torso","left_arm","right_arm","left_leg","right_leg"]
            // COMPROBAMOS SI EL OBJETIVO CUANTA CON ARMADURA
            let objetivoarmadura = this.body[`item_${objetivo}`]
        } catch (error) {
            console.error(error);
        }
    }
}
