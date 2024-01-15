// Fonction pour changer les classes une fois la réponse cliquée
function changeStyleBtn(arr) {
  for (const item of arr) {
    const { correct, id } = item;
    // Sélection du bouton par son ID
    const btn = document.getElementById(id);
    // Désactivation de la fonction onclick pour éviter les clics supplémentaires
    btn.onclick = false;
    // Modification des classes du bouton en fonction de la correction de la réponse
    if (correct) {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-success');
    } else {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-danger');
    }
  }
}