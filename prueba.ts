

/**
 * para solo hacer interfaces decoradas en lugar de programar el listado de opciones
 */
const functionsMap: { [key: string]: string[] } = {};

function listFunctions(target: any) {
    const className = target.name;
    const functionNames = Object.getOwnPropertyNames(target.prototype).filter(
        (name) => name !== "constructor"
    );
    functionsMap[className] = functionNames;
}

@listFunctions
class MiInterfaz {
    funcion1() {}
    funcion2() {}
    funcion3() {}
}

console.log(functionsMap);
