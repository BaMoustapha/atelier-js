let tableau = '<table>';
let lignes = 5;
let colonnes = 3;

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + '<td>ba</td>';
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;