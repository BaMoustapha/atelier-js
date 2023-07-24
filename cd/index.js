function puissance(base, exposant){
    if (exposant === 0) {
        return 1;
      }

      let resultat = base;

      for (let i=1; i<exposant; i++)
      {
       resultat *= base;
       return resultat;
      
      }

}


const resultat = puissance(2, 5);
console.log(resultat)