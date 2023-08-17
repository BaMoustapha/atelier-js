let texte = prompt("")

function inserNode (li, texte) {
    const main = document.getElementById("main");

    const linode = document.createElement(li);

    const textenode = document.createTextNode(texte);


    main.append(linode);
    linode.append(texte);

}

console.log(main);

inserNode("li", texte);