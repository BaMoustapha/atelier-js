let ch = '';
for(let i = 1;i <= 5;i++) {
   for(let k = 1;k <= i;k++) {
      ch = ch + i;
   }
   ch = ch + '<br />';
}
document.body.innerHTML = ch;