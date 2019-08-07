class Contacts {
	constructor(name, firstname){
		this.name = name;
		this.firstname = firstname;
	}
	describe(){
	return `Nom : ${this.name}, Prénom : ${this.firstname}`;
  }
}

let first_choice = -1
const contacts_names = ["Lévisse", "Nelsonne"];
const contacts_firstnames = ["Carole", "Mélodie"];
console.log('Bienvenue dans le gestionnaire de contacts!')

while (first_choice !== 0) {
	console.log('0 : Quitter le programme\n1 : Afficher les contacts\n2 : Ajouter un contact');
	const contact_choice = Number(prompt("Entrez 0, 1 ou 2"));
	if (contact_choice===0){
		first_choice = 0;
	}else if (contact_choice===1) {
		for(let i = 0; i<contacts_names.length; i++){
			const create = new Contacts(contacts_names[i], contacts_firstnames[i]);
			console.log(create.describe());
		}
	}else if (contact_choice===2){
		const new_name = prompt("Entrez le nom");
		contacts_names.unshift(new_name);
		const new_firstname = prompt("Entrez le prénom");
		contacts_firstnames.unshift(new_firstname);
	}else{
		console.log('Il faut entrer 0, 1 ou 2.')
	}
}

