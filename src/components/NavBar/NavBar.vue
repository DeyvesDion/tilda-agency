<template>
    <div>
        <header>
            <div class="logoSection">
                <router-link to="/" class="logo">Tilda Agency</router-link>
            </div>
            <div class="toggle" onclick="toggleMenu()"></div>
            <ul class="menu">
                <li class="navItem">
                    <router-link to="/" class="navLink" onclick="toggleMenu()"
                        >Accueil</router-link
                    >
                </li>
                <li class="navItem">
                    <router-link
                        to="/agence-web"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Agence</router-link
                    >
                </li>
                <li class="navItem">
                    <router-link
                        to="/prestation"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Prestations</router-link
                    >
                </li>
                <li class="navItem">
                    <router-link
                        to="/reference"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Références</router-link
                    >
                </li>
                <li class="navItem">
                    <router-link
                        to="/contact"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Contact</router-link
                    >
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style src="./NavBar.css" scoped></style>
