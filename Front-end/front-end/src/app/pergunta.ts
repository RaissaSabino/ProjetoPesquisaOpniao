import { Alternativa } from "./alternativa";

export interface Pergunta {
    idForm:number
    tipo: number ;
    qtdeAlt: number;
    conteudoPergunta : string
    alternativas : Array<Alternativa>
  }