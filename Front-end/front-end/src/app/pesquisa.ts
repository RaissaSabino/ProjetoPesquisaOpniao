import { Adm } from "./adm";
import { Pergunta } from "./pergunta";

export interface Pesquisa {
    id: number,
    nome: string,
    codigo:string
    adm : Adm,
    admId : number,
    perguntas : Array<Pergunta>
}