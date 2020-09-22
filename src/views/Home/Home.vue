<template>
    <div class="">
        <Banner />
        <Prestation />
        <Production />
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import Prestation from "@/components/Prestation/Prestation.vue";
import Production from "@/components/Production/Production.vue";
// import Estimate from "@/components/estimate/Estimate.vue";

export default {
    name: "Home",
    components: {
        Banner,
        Prestation,
        Production,
    },
};
</script>
