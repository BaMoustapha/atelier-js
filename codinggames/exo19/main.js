let html = '<ul>';
let n = 10;
let n10 = 0;
for(let i = 0;i < n;i++) {
let n = Math.floor(Math.random() * 11);
if(n == 10) {
n10++;
}

html = html + '<li>' + n + '</li>';
}
html = html + '<p>Il y a eu ' + n10 + ' tirages de 10.</p>'

document.body.innerHTML = html;