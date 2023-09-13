function calculerAge() {
    const jour = parseInt(document.getElementById('jour').value);
    const mois = parseInt(document.getElementById('mois').value);
    const annee = parseInt(document.getElementById('annee').value);

    const dateNaissance = new Date(annee, mois - 1, jour); // Soustraire 1 au mois car les mois commencent à 0
    const dateActuelle = new Date();
    

    const differenceEnMillisec = dateActuelle - dateNaissance;
    console.log("differenceEnMillisec")

    const annees = Math.floor(differenceEnMillisec / (365.25 * 24 * 60 * 60 * 1000));
    const moisRestants = Math.floor((differenceEnMillisec % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const joursRestants = Math.floor((differenceEnMillisec % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    document.getElementById('age').textContent = annees;
    document.getElementById('moisRestants').textContent = moisRestants;
    document.getElementById('joursRestants').textContent = joursRestants;
}