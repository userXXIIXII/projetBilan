<template>
    <h1>Contactez moi</h1>

    <div class="contact">
        <form @submit.prevent="sendEmail">
            <input v-model="name" type="text" placeholder="Prénom" required>
            <input v-model="surname" type="text" placeholder="Nom" required>
            <input v-model="email" type="email" placeholder="Email" required>
            <input v-model="objet" type="text" placeholder="Objet" required>
            <textarea v-model="message" placeholder="Message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>

        <p v-if="success">Message envoyé !</p>
    </div>
</template>

<script>
    import emailjs from "@emailjs/browser"

    export default {
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

        methods: {
            sendEmail() {
                emailjs.send(
                    "service_dawrunm",
                    "template_pam6but",
                    {
                        prenom: this.name,
                        nom: this.surname,
                        email: this.email,
                        objet: this.objet,
                        message: this.message
                    },
                    "RAAykAj5KGGwq2TtX"
                )
                .then(() => {
                    this.success = true

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
    max-width: 420px;
    margin: 80px auto;
    padding: 30px;

    background: rgba(30, 30, 30, 0.8);
    backdrop-filter: blur(10px);

    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);

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

    background: #2a2a2a;
    color: white;

    outline: none;
    transition: 0.2s;
    }

    /* focus */
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
    transition: 0.25s;
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
</style>