<template>
    <div class="container">
        <div class="production">
            <div class="row description">
                <!-- Counter -->

                <div class="col-lg-12">
                    <h2 class="title text-center">Nos réalisations</h2>
                    <p class="subTitle text-center">
                        Avec plus de 100 réalisations à notre actif, nous sommes
                        leader en région Parisienne.
                    </p>
                </div>
            </div>
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

            <!-- Production list -->

            <div class="row">
                <div class="website col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="cardContainer">
                        <div class="theCard">
                            <div class="front frontImg1">
                                <!-- <h2 class="cardTitle">Crédit agricole</h2> -->
                            </div>
                            <div class="back">
                                <p class="backDescription">
                                    Le Crédit agricole, anciennement surnommé la
                                    « Banque verte » du fait de son activité
                                    d'origine au service du monde agricole.
                                </p>
                                <div class="cardBtn">
                                    <a href="#">
                                        <span></span>
                                        Voir le projet
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intanet col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="cardContainer">
                        <div class="theCard">
                            <div class="front frontImg2">
                                <!-- <h2 class="cardTitle">Société génerale</h2> -->
                            </div>
                            <div class="back">
                                <p class="backDescription">
                                    La Société Générale est l’un des piliers
                                    bancaires français, créée en 1864.
                                </p>
                                <div class="cardBtn">
                                    <a href="#">
                                        <span></span>
                                        Voir le projet
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobilApp col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="cardContainer">
                        <div class="theCard">
                            <div class="front frontImg3">
                                <!-- <h2 class="cardTitle">
                                    Transformation digitale
                                </h2> -->
                            </div>
                            <div class="back">
                                <p class="backDescription">
                                    Le Crédit lyonnais, société anonyme, connue
                                    sous son appellation commerciale LCL depuis
                                    2005.
                                </p>
                                <div class="cardBtn">
                                    <a href="#">
                                        <span></span>
                                        Voir le projet
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 mt-5">
                <div class="allProductiondBtn text-center">
                    <a href="#">
                        <span></span>
                        Toutes nos réalisations
                    </a>
                </div>
            </div>
            <!-- Estimation -->
            <div class="row estimation">
                <div class="col-lg-12">
                    <h2 class="title text-center">
                        Vous souhaitez estimer votre projet ?
                    </h2>
                    <p class="subTitle text-center">
                        Appelez-nous ! Tout simplements (+33) 1 00 00 00 00
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Production",
};
</script>

<style src="./Production.css" scoped></style>
