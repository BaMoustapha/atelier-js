let ht = prompt("Montant HT ?");
let taux_tva = prompt("Taux de TVA ?");
let taux_tva_calcul = (taux_tva / 100) + 1;
let ttc = ht * taux_tva_calcul;
document.body.innerText = ttc;