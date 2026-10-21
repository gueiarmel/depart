const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte); // Type : number ; unité : FCFA
const alimentation = Number(alimentationTexte); // Type : number ; unité : FCFA
const loisirs = Number(loisirsTexte); // Type : number ; unité : FCFA

// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepense = transport + alimentation + loisirs; // Type : number ; unité : FCFA
const budgetRestant = budget - totalDepense; // Type : number ; unité : FCFA
const budgetRespected = budgetRestant >= 0; // Type : boolean

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Nom : ${nom}`);
console.log(`Budget : ${budget} FCFA`);
console.log(`Trois dépenses : ${transport} FCFA, ${alimentation} FCFA, ${loisirs} FCFA`);
console.log(`Total : ${totalDepense} FCFA`);
console.log(`Reste : ${budgetRestant} FCFA`);
console.log(`État du budget : ${budgetRespected} `);

