let html = '<ul>';
let n = 10;
for(let i = 0;i < n;i++) {
   let x = Math.floor(Math.random() * 11);
   if(x == 10) {
      console.log('Le nombre 10 fait parti du tirage.');
   }
   html = html + '<li>' + x + '</li>';
}
document.body.innerHTML = html;