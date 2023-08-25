let n = '';
let x = 12;
for(let i = 1;i <= x;i++) {
   n = n + '<img src="https://picsum.photos/350/350?random=' + i + '" />';
}
document.body.innerHTML = n;