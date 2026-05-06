<template>
    <h1>Contactez moi</h1>

    <div class="contact">
        <!--
        @submit = "quand le formulaire est envoyé"
        .prevent = empeche le comportement par défault (rechargement de la page)
        "sendEmail" = appelle la fonction sendEmail()
        -->
        <form @submit.prevent="sendEmail">
            <!--v-model = liaison automatique variable/input-->
            <input v-model="name" type="text" placeholder="Prénom" required>
            <input v-model="surname" type="text" placeholder="Nom" required>
            <input v-model="email" type="email" placeholder="Email" required>
            <input v-model="objet" type="text" placeholder="Objet" required>
            <textarea v-model="message" placeholder="Message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>

        <!--afficher p si success = true-->
        <p v-if="success">Message envoyé !</p>
    </div>
</template>

<script>
//import du systeme pour l'envoi du message
    import emailjs from "@emailjs/browser"

    export default {
        //déclaration des variables 
        data() {
            return {
                name: "",
                surname: "",
                email: "",
                objet: "",
                message: "",
                success: false
            }
        },

        //methods = qui contient mes fonctions
        methods: {
            sendEmail() {
                emailjs.send( //fonction qui envoie le formulaire à EmailJS
                    "service_dawrunm",  //service email (serviceID)
                    "template_pam6but", //template (templateID)
                    {
                        //liaison des variables avec les données du template
                        //this. = accès aux données
                        //templateParams (objet contenant les données envoyées au template EmailJS)
                        prenom: this.name,
                        nom: this.surname,
                        email: this.email,      
                        objet: this.objet,
                        message: this.message
                    },
                    "RAAykAj5KGGwq2TtX" //Clé publique
                )
                .then(() => { //then() = quand l'email est envoyé avec succès, exécute la suite
                    this.success = true

                    //Reset des champs
                    this.name = ""
                    this.surname = ""
                    this.email = ""
                    this.objet = ""
                    this.message = ""
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>
    .contact {
        width: 100%;
        max-width: 420px;
        margin: 80px auto;
        padding: 30px;

        background-color: #16161a;
        backdrop-filter: blur(10px);

        border-radius: 16px;
        box-shadow: 10px 10px 20px black;

        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* inputs */
    input, textarea {
        width: 100%;
        max-width: 400px;
        margin: 10px 0;
        padding: 12px 14px;

        border-radius: 8px;
        border: 1px solid transparent;

        background-color: #242629;
        color: white;

        outline: none;
        transition: 0.2s;
        }

        /* focus (quand l'utilisateur clique dessus)*/
        input:focus, textarea:focus {
        border: 1px solid #7f5af0;
        box-shadow: 0 0 0 2px rgba(127,90,240,0.3);
    }

    /* textarea */
    textarea {
        min-height: 100px;
        resize: none;
        }

        /* bouton */
        button {
        margin-top: 15px;
        width: 100%;

        padding: 12px;
        border: none;
        border-radius: 8px;

        background: linear-gradient(135deg, #7f5af0, #5a3df0);
        color: white;
        font-weight: bold;

        cursor: pointer;
        transition: 0.3s;
    }

    /* hover bouton */
    button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(127,90,240,0.4);
    }

    /* bouton disabled */
    button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    /* message succès */
    .success {
        margin-top: 15px;
        color: #4ade80;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .contact {
            width: 90%;
            margin: 40px auto;
            padding: 20px;
        }

        input, textarea {
            font-size: 14px;
        }

        button {
            padding: 10px;
        }
    }
</style>