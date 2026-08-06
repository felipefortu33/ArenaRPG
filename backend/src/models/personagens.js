// ============================================================================
//  personagens.js  —  Nosso "banco de dados" em memória (um array)
//  Aqui CRIAMOS objetos com  new  a partir das classes.
// ============================================================================

import { Personagem } from "./Personagem.js";
import { Heroi } from "./Heroi.js";
import { Mago } from "./Mago.js";

// Cada linha usa "new" para instanciar (criar) um objeto de uma classe.
export const personagens = [
  new Heroi("Aragon", 120, 22, 6, "🦸"),
  new Mago("Gandalf", 90, 20, 3, 40, "🧙"),
  new Heroi("Valquíria", 110, 25, 5, "⚔️"),
  Mago.criarAprendiz("Merlin"),      // criado pelo MÉTODO ESTÁTICO (sem "new"!)
  new Personagem("Golem", 150, 16, 10, "🗿"),
  new Personagem("Goblin", 70, 20, 2, "👺"),
];
