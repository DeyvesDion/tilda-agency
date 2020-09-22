<template>
    <div>
        <Banner />
        <div class="">
            <div class="agency">
                <div class=" description text-left">
                    <h2 class="title ml-3">
                        Tilda Agency<br />
                        10 ans d'innovation <br />& de passion
                    </h2>
                    <h3 class="subTitle ml-3">
                        La mission de notre agence web: développer des solutions
                        digitales pour transformer votre métier
                    </h3>
                </div>
                <div class="imgBox">
                    <img class="agencyImg" src="../../assets/agence.jpg" />
                </div>
            </div>
            <!-- Counter -->
            <div class="row productionCounter">
                <div class="col-lg-12 counter">
                    <div class="exp">
                        <div class="title num">10</div>
                        <br />
                        <p class="description">années d'expérience</p>
                    </div>
                    <div class="client">
                        <div style="display:flex">
                            <span>+</span>
                            <div class="title num">100</div>
                        </div>
                        <br />
                        <p class="description">clients satisfaits</p>
                    </div>
                    <div class="projet">
                        <div style="display:flex">
                            <span>+</span>
                            <div class="title num">120</div>
                        </div>
                        <br />
                        <p class="description">projets réalisés</p>
                    </div>
                </div>
            </div>

            <div class="agency2">
                <div class="imgBox">
                    <img class="agencyImg" src="../../assets/neon.jpg" />
                </div>
                <div class=" description text-right">
                    <h2 class="title mr-4">
                        Plus de 10 ans<br />
                        d'expérience
                    </h2>
                    <h3 class="subTitle mr-4">
                        Depuis 2000, notre vocation est de développer des
                        solutions web et mobiles sur-mesure répondant
                        parfaitement aux enjeux et besoins de nos clients.
                        <br /><br />
                        Nos domaines de compétence couvrent l’analyse projet, la
                        graphie, la programmation, l’hébergement, le support et
                        la maintenance des solutions.
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/Banner/Banner.vue";
export default {
    name: "Agency",
    components: {
        Banner,
    },
};
</script>

<style src="./Agency.css" scoped></style>
