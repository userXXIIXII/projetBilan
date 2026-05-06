/*script personnalisé qui génère automatiquement la date du build du projet, 
l'enregistre dans une variable d'environnement, puis Vue l'affiche dans le footer*/

//writeFileSync = fonction qui écrit dans un fichier immédiatement 
//fs = File System, module Node qui permet de créer, lire et modifier des fichier
import { writeFileSync } from "fs";

//Crée la date actuelle
//toLocateDateString("fr-FR") = convertit en format français: jj/mm/aaaa
const date = new Date().toLocaleDateString("fr-FR");

// Récupère la date actuelle et l'écrit dans .env
writeFileSync(".env", `VITE_BUILD_DATE=${date}`);


//.env car Vite lit automatiquement ce fichier
//VITE_ car Vite expose uniquement les variables commençant par ça