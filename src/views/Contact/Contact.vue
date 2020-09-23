<template>
    <div class="contact">
        <div class="contactWrap">
            <div class=" description text-left shadow-lg">
                <h2 class="title ml-3">Tilda Agency<br /></h2>
                <p class="ml-3">
                    <span class="subTitle">Agence web à Paris</span><br />
                    <span class="Adress">75016 Paris, 01 00 00 00 00</span>
                </p>
            </div>
            <div class="formBox shadow-lg">
                <form @submit.prevent="submit">
                    <h2>Contact</h2>
                    <transition name="fade">
                        <div
                            v-if="notifSucces === true"
                            class="notifSucces shadow-lg"
                        >
                            <h3 class="msgNotif">
                                Message envoyé !
                            </h3>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div
                            v-if="notifError === true"
                            class="notifError shadow-lg"
                        >
                            <h3 class="msgNotif">
                                Renseigné tous les champs !
                            </h3>
                        </div>
                    </transition>

                    <input
                        v-model.trim="name"
                        class="contactItem"
                        type="text"
                        placeholder="Votre Nom et Prénom"
                    />
                    <input
                        v-model.trim="email"
                        class="contactItem"
                        type="email"
                        placeholder="Votre adresse mail"
                    />
                    <textarea
                        v-model.trim="msg"
                        class="contactItem msg"
                        placeholder="votre message"
                    ></textarea>
                    <input
                        class="contactItem submit"
                        type="submit"
                        value="Envoyer"
                    />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            name: null,
            email: null,
            msg: null,
            notifSucces: false,
            notifError: false,
        };
    },
    methods: {
        submit() {
            if (this.name && this.email && this.msg) {
                this.notifSucces = true;
                setTimeout(() => {
                    this.notifSucces = false;
                }, 5000);
            } else {
                this.notifError = true;
                setTimeout(() => {
                    this.notifError = false;
                }, 3000);
            }
            (this.name = null), (this.email = null), (this.msg = null);
        },
    },
};
</script>

<style src="./Contact.css" scoped></style>
