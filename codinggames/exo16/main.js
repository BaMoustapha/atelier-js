let tableau = '<table>';
let lignes = prompt('nombre de ligne');
let colonnes = prompt('nombre de colonne');

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + '<td>ba</td>';
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;