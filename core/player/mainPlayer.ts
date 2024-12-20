import type { BIPbody } from "../nucleos/bipedo/body.ts";
import type { SOUL } from "../nucleos/soul.ts";
import type { IPlayer } from "./IPlayer.ts";

export class CPlayer implements IPlayer {
    id: number;
    nombre: string;
    body: BIPbody;
    soul: SOUL;
    skills: any
    clase: any
    inventory: any

    constructor(player: IPlayer) {
        this.id = player.id;
        this.nombre = player.nombre;
        this.body = player.body;
        this.soul = player.soul;
        this.clase = player.clase;
    }

    async setItemInventori(item, cantidad) {
        try {
            let existe = this.inventory.find((obj) => obj.id == item.id)
            if (existe) {
                existe.cantidad += cantidad
            } else {
                this.inventory.push({ id: item.id, cantidad: cantidad })
            }
        } catch (error) {
            console.error(error)
        }
    }

    async getItem() {
        throw new Error("Method not implemented.");
    }

    async consumeItem(item, cantidad) {
        try {
            let existe = this.inventory.find((obj) => obj.id == item.id)
            if (!existe) {
                return { status: false, message: "No se encontro el item en el inventario", data: null }
            }
            existe.cantidad -= cantidad
            return { status: true, message: "No se encontro el item en el inventario", data: null }
        } catch (error) {
            console.error(error)
        }
    }

    async setItemBody(item, part) {
        try {
            let contentbody=["item_head","item_torso","item_left_arm","item_right_arm","item_left_leg","item_right_leg"]
            if(!contentbody.includes(part)){
                return {status:false,message:'No se puede colocar el item en ese lugar',data:null}
            }
            this.body[`${part}`] = item
            return {status:true,message:'item colocado',data:null}
        } catch (error) {
            console.error(error)
        }
    }
    
}
