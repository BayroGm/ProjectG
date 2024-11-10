interface IArma {
    id: number;
    name: string;
    tipo: number,
    description: string;
    rec_stributos: object,
    damage: number
    habilidad: number
    stats: object
}

export class armas implements IArma {
    id: number;
    name: string;
    tipo: number;
    description: string;
    rec_stributos: object;
    damage: number;
    habilidad: number;
    stats: object;
    constructor(arma: IArma) {
        this.id=arma.id
        this.name=arma.name
        this.tipo=arma.tipo
        this.description=arma.description
        this.rec_stributos=arma.rec_stributos
        this.damage=arma.damage
        this.habilidad=arma.habilidad
        this.stats=arma.stats
    }
}