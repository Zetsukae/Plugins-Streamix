// @author Zetsukae
// @github https://github.com/Zetsukae
// @version 1.0

(function() {
    console.log("--- PLUGIN CHARGÉ AVEC SUCCÈS ---");

    // Créer une petite notification verte en haut à gauche
    const notif = document.createElement('div');
    notif.style.position = 'fixed';
    notif.style.top = '100px'; // Un peu en dessous du bouton Home
    notif.style.left = '10px';
    notif.style.zIndex = '999999';
    notif.style.backgroundColor = '#00ff88';
    notif.style.color = '#000';
    notif.style.padding = '10px 20px';
    notif.style.borderRadius = '8px';
    notif.style.fontWeight = 'bold';
    notif.style.boxShadow = '0 0 10px rgba(0,255,136,0.5)';
    notif.style.fontFamily = 'sans-serif';
    notif.innerText = "First EVER Plugin Works! :)";

    // Ajouter au corps de la page
    document.body.appendChild(notif);

    // La faire disparaître après 5 secondes
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 1s';
        setTimeout(() => notif.remove(), 1000);
    }, 5000);

})();
