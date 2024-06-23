// Merci de suivre GIGI CODEX

// Fonction appelée lorsqu'un utilisateur tape dans l'input de recherche
const onSearch = () => {

    // Sélection de l'input de recherche par sa classe
    const inputSearch = document.querySelector(".search");

    // Récupération de la valeur de l'input et conversion en majuscules pour une comparaison non sensible à la casse
    const filter = inputSearch.value.toUpperCase();

    // Sélection de tous les éléments de liste dans le ul avec l'id 'list'
    const list = document.querySelectorAll("#list li");

    // Boucle pour parcourrir chaque element de la liste
    list.forEach((el) => {

        // Récupération du texte de l'élément et conversion en majuscules
        const text = el.textContent.toUpperCase();
        
        // Si le texte de l'élément inclut la valeur filtrée, on l'affiche, sinon on le cache
        el.style.display = text.includes(filter) ? "" : "none";
    });
};
