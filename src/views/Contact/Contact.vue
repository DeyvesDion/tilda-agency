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
                <form>
                    <h2>Contact</h2>
                    <input
                        v-model.trim="form.name"
                        class="contactItem"
                        type="text"
                        placeholder="Votre Nom et Prénom"
                    /><br />
                    <!-- <input
                        class="contactItem"
                        type="text"
                        placeholder="Votre Prenom"
                    /><br /> -->
                    <input
                        v-model.trim="form.email"
                        class="contactItem"
                        type="passwors"
                        placeholder="Votre adresse mail"
                    /><br />
                    <textarea
                        v-model.trim="form.msg"
                        class="contactItem msg"
                        placeholder="votre message"
                    ></textarea>
                    <br />
                    <input
                        class="contactItem submit"
                        type="button"
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
            form: {
                name: "",
                email: "",
                msg: "",
            },
        };
    },
};
</script>

<style src="./Contact.css" scoped></style>
