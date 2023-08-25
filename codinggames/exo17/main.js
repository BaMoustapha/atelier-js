let html = '<ul>';
let n = 10;
for(let i = 0;i < n;i++) {
   html = html + '<li>' + Math.floor(Math.random() * 100) + '</li>';
}
document.body.innerHTML = html;