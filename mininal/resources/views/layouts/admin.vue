<template>
    <TheHeader></TheHeader>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered style="width: 100%;">
                    <TheMenu />
                    <template #header>
                        <div>BẢNG ĐIỀU KHIỂN</div>
                    </template>

                </a-list>
            </div>
            <div class="col-12 col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <TheFooter></TheFooter>
</template>
<script>
import TheHeader from "../components/admin/TheHeader.vue";
import TheHead from "../components/admin/TheHead.vue";
import TheFooter from "../components/admin/TheFooter.vue";
export default {
    components:{
        TheHeader,
        TheHead,
        TheFooter
    }
}
</script>
