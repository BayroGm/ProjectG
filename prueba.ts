


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
    funcion1() { }
    funcion2() { }
    funcion3() { }
}

console.log(functionsMap);

function log(target: any, propertyKey: string, descriptor?: PropertyDescriptor): PropertyDescriptor | void {
    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }
    console.log(descriptor)
    console.log(target)
    console.log(propertyKey)
    if (descriptor && typeof descriptor.value === 'function') {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        console.log(`Llamada a ${propertyKey} con argumentos: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Resultado de ${propertyKey}: ${result}`);
        return result;
      };
      return descriptor;
    }
  }
  
  class Ejemplo {
    @log
    suma(a: number, b: number) {
      return a + b;
    }
  }
  
  const ejemplo = new Ejemplo();
  ejemplo.suma(2, 3);
  
