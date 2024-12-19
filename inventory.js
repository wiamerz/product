const prompt = require('prompt-sync')();

//first class
class produit{
  constructor(id, name, description, quantite, prix){
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantite = quantite;
    this.prix = prix; 
  } 
}

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
  const quantite = prompt("entrer le quantite de ce produit: ");
  const prix = prompt("enter le prix de ce produit: ");
  
  const newProduit = new produit(this.name, description, quantite, prix);
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
  else {
    
  }


 }
 /*
//fonction de modification 
modifierproduit(){

}
//fonction de suppression 
supprimerproduit(){

}*/
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

 /* case '3':
    break;
  
  case '4':
    break;

  case '5':
    break;

  case '6':
    break;*/
  
  default:
    console.log('choix non trouve');
    break;
}
}