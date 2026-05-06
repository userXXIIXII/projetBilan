<template>
    <h1>Mes réalisations</h1>
    
    <!--Carte projet-->
    <div class="projects">
        <!--Pour chaque éléments dans projects, je l'appelle p
        key = identifiant unique pour chaque projet
        v-for = parcourt chaque projet du tableau-->

        <div v-for="p in projects" :key="p.id" class="card">
            <h3>{{ p.titre }}</h3>
            <img :src="p.preview" class="card-image">
            <!--Au click selected devient le projet cliqué-->
            <button @click="selected = p">Voir</button>
        </div>
    </div>

    <!--Si selected = true, alors le modal s'affiche

    Modal qui affiche les détails du projet sélectionné
    
    Selected = la variable qui contient le projet choisi-->
    
    <Modal 
        :isOpen="selected"
        :titre="selected?.titre"
        :description="selected?.description"
        :image="selected?.image"
        :demo="selected?.demo"
        :github="selected?.github"
        @close="selected = null" 
    />

    <p class="bio">
        Sur cette page, vous trouverez un aperçu détaillé de 
        mes réalisations en développement web, du front-end 
        au back-end. Chaque projet illustre non seulement ma 
        maîtrise des technologies modernes, mais aussi ma 
        capacité à concevoir des interfaces intuitives, à résoudre 
        des problèmes complexes et à créer des expériences 
        utilisateurs fluides et engageantes.
    </p>
    
</template>

<script>
import Modal from '../components/Modal.vue'

import meteoImg from "../assets/weather-app-img.png"
import cvImg from "../assets/CV-html.png"
import meteoIcon from "../assets/weather-app.png"
import cvIcon from "../assets/cv.png"

export default {
    components: { Modal },

    data() {
        return {
            //selected = null car aucun projet sélectionné par defaut donc modal fermé
            selected: null,

            projects: [
                {
                    id: 1,
                    titre: "App météo",
                    description: "Ce projet est une application météo développée en HTML, CSS et JavaScript, permettant d’afficher à JavaScript et à l’utilisation d’une API.",
                    image: meteoImg,
                    preview: meteoIcon,
                    demo: "https://userxxiixii.github.io/weather_app/",
                    github: "https://github.com/userXXIIXII/weather_app"
                },

                {
                    id: 2,
                    titre: "CV - HTML",
                    description: "CV développé en HTML, mettant en avant une structure claire et sémantique pour présenter mes informations personnelles, mes compétences et mon parcours.",
                    image: cvImg,
                    preview: cvIcon,
                    demo: "https://userxxiixii.github.io/CV-CEF/",
                    github: "https://github.com/userXXIIXII/CV-CEF"
                }
            ]
        }
    }
}

</script>

<style scoped>

    .projects {
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    /* carte */
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 300px;
        height: 300px;
        background: #16161a;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 10px 10px 20px black;

        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    /* image */
    .card-image {
        height: 150px;
        width: 150px;
        filter: drop-shadow(10px 10px 10px black);
    }

    /* contenu */
    .card-content {
        padding: 15px;
        text-align: center;
    }

    .card>h3 {
        color: white;
        font-size: 16px;
        margin: 10px 0;
    }

    /* bouton */
    .card button {
        padding: 8px 12px;
        border: none;
        border-radius: 6px;
        background: #7f5af0;
        color: white;
        cursor: pointer;
    }

    /* hover effet */
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 10px 10px 20px black;
    }

    .bio {
        padding-top: 50px;
        max-width: 850px;
        margin: 0 auto;
        text-align: center;
    }

@media (max-width: 768px) {
    .projects {
        flex-direction: column;
        align-items: center;
    }

    .card {
        width: 85%;
        max-width: 400px;
    }

    .card-image {
        width: 120px;
        height: 120px;
    }
}
</style>