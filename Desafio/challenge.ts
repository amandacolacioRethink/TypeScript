import { Pokemon,pokemons } from "./data";
import {translatePokemonTypeNames} from "./translatedTypes"

//Procurar um pokemon por nome
const lookForPokemonByName = (name: string): Pokemon | undefined => { // tipo Pokemon (string, number ou array de string) ou undefined
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name === name) {
        return pokemons[i];
      }
    }
  };

console.log(lookForPokemonByName('bulbasaur'))

//retornar lista que pertence a categoria do tipo que vai ser passado por parâmetro
const listAllPokemonsByType = (type:string) : Pokemon[] =>{
    let list : Pokemon[] = [];
    for(let i = 0; i < pokemons.length; i++){
        if (pokemons[i].type[0] == type || pokemons[i].type[1] == type) {
            list.push(pokemons[i]);
        } 
    }
    console.log(list) 
    return list
}
//console.log(listAllPokemonsByType('grass'))

//retorne uma array onde os nomes das categorias dos pokemons foram trocadas de inglês para português
const changePokemonTypeNamesToPortuguese = (): void => {
    for (let i = 0; i < pokemons.length; i++) {
      for (let j = 0; j < pokemons[i].type.length; j++) {
        pokemons[i].type[j] = translatePokemonTypeNames[pokemons[i].type[j]];
      }
      console.log(pokemons[i].type);
      
    }
  };

changePokemonTypeNamesToPortuguese()


