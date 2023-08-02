function inserNode (balise, texte) {
    const main = document.getElementById("main");

    const balisenode = document.createElement(balise);

    const textenode = document.createTextNode(texte);


    main.append(balisenode);
    balisenode.append(texte);

}

console.log(main);

inserNode("p", "Bakeli School of technologie");