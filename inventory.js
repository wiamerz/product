const prompt = require('prompt-sync')();
const {produit} = require("./produit");
const fs = require('fs');


// second class
class inventory{
    constructor(){
      this.products = []; // Tableau pour stocker les produits
        this.nextId = 1;    // Identifiant unique pour chaque produit
    }

//fonction d'addition 
 addproduit(){
  const name = prompt("entrer le nom de produit: ");
  const description = prompt("donne description de le produit: ");
  const quantite = parseInt(prompt("entrer le quantite de ce produit: "));
  const prix = parseFloat(prompt("enter le prix de ce produit: "));

  if (isNaN(quantite) || isNaN(prix)) {
    console.log("Veuillez entrer des valeurs valides pour la quantité et le prix.");
    return;
  }
  
  const newProduit = new produit(this.nextId, name, description, quantite, prix);
  this.products.push(newProduit);
  this.nextId++;

  console.log("le produit entrer avec succes");
  
}

//fonction d'affichage
 afficherproduit(){
  if (this.products.length == 0){
    console.log("non produit disponible");
    return; 
  } 
  for (let i = 0; i < this.products.length; i++ ){
    const produit = this.products[i];
    console.log(`~~~~~~~~~~Le produit ${i + 1}~~~~~~~~~~~~~`);
    console.log(`Nom: ${produit.name}`);
    console.log(`Description: ${produit.description}`);
    console.log(`Quantité: ${produit.quantite}`);
    console.log(`Prix: ${produit.prix} MAD`);

  }
 }
 
//fonction de modification 
modifierproduit(){
  if (this.products.length == 0){
    console.log("non produit disponible");
    return; 
  }
  
  const id = parseInt(prompt("Entrer l'ID du produit à modifier : "));
  const quantite = parseInt(prompt("Entrer la nouvelle quantité : "));
  const prix = parseFloat(prompt("Entrer le nouveau prix : "));

  const produit = this.products.find(p => p.id === id);

  if (!produit) {
      console.log(`Non produit trouvé avec cette ID.`);
      return;
  }
  produit.quantite = quantite;
  produit.prix = prix;

  console.log(`Produit avec ID ${id} mis à jour avec succès.`);
}


//fonction de suppression 
supprimerproduit() {
  if (this.products.length === 0) {
    console.log("Aucun produit disponible.");
    return;
  }

  const id = parseInt(prompt("Entrer l'ID du produit à supprimer : "), 10);

  if (isNaN(id)) {
    console.log("Veuillez entrer un ID valide.");
    return;
  }

  const newLength = this.products.length;
  this.products = this.products.filter(produit => produit.id !== id);

  if (this.products.length === newLength) {
    console.log("Aucun produit trouvé avec cet ID.");
  } else {
    console.log("Le produit a été supprimé avec succès.");
  }
}

saveToFile(filename = 'save.json') {
  try {
    const data = JSON.stringify(this.products, null, 2);
    fs.writeFileSync(filename, data, 'utf-8');
    console.log(`Produits sauvegardés avec succès dans ${filename}`);
  } catch (error) {
    console.error("Erreur lors de la sauvegarde des produits :", error.message);
  }
}

}

const inventaire = new inventory();

while(true){
  console.log("~~~~~~~~~Menu~~~~~~~~");
  console.log("1.Ajoute un produit");
  console.log("2.Affichage des produits");
  console.log("3.Mise a jour de produit");
  console.log("4.Supprimer un produit");
  console.log("5.Persistance des données ");
  console.log("6.quitter");

  const choix = prompt("entrer votre choix: ");

switch(choix){

  case '1': 
  inventaire.addproduit();
  break;

  case '2':
  inventaire.afficherproduit();
  break;

  case '3':
  inventaire.modifierproduit();
    break;
  
  case '4':
  inventaire.supprimerproduit();
    break;
   
  case '5':
  inventaire.saveToFile();
    break;

  case '6':
    console.log("au revoir <3 ");
    process.exit(0);
  
  default:
    console.log('choix non trouve');
    break;
}
}