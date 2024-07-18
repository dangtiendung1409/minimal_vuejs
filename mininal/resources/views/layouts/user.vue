<template>
    <TheNav></TheNav>
    <router-view></router-view>
    <TheFooter></TheFooter>
</template>
<script>

import TheNav from "../components/user/TheNav.vue";
import TheFooter from "../components/user/TheFooter.vue";
export default {
    components:{

        TheNav,
        TheFooter
    }
}
</script>
