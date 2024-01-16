document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById('overlay').style.display = 'flex';
  }, 2000); // Le pop-up apparaîtra après 2 secondes (2000 millisecondes)
});

function acceptCookies() {
  document.getElementById('overlay').style.display = 'none';
  // Ici, tu peux ajouter ton code pour enregistrer le consentement des cookies, comme par exemple un cookie pour sauvegarder ce choix.
}

// Fonction pour rechercher des utilisateurs GitHub via l'API
async function searchGitHubUsers(query) {
    const apiUrl = `https://api.github.com/search/users?q=${query}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.items.map(item => item.login);
    } catch (error) {
        console.error("Erreur lors de la recherche GitHub :", error);
        return [];
    }
}

// Modifier la fonction search pour intégrer les résultats de l'API
async function search(query) {
    const results = [];

    // Ajouter les résultats de la recherche locale
    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase().includes(query.toLowerCase())) {
            results.push(data[i]);
        }
    }

    // Ajouter les résultats de la recherche via l'API GitHub
    const githubResults = await searchGitHubUsers(query);
    results.push(...githubResults);

    return results;
}
