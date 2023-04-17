<template>
    <div class="container">
        <div class="row">
            <div class="col-8 col-sm-8 col-md-8 col-lg-5 col-xl-5 col-xxl-4">
                <IllegalDetect />
            </div>
            <div class="col-8 col-sm-8 col-md-8 col-lg-5 col-xl-5 col-xxl-4">
                <EvidenceSave />
            </div>
            <div class="col-8 col-sm-8 col-md-8 col-lg-5 col-xl-5 col-xxl-4">
                <LegalProtect />
            </div>
        </div>
    </div>
</template>
<script setup>
import EvidenceSave from './cards/EvidenceSave.vue';
import IllegalDetect from './cards/IllegalDetect.vue';
import LegalProtect from './cards/LegalProtect.vue'

</script>
<style scoped></style>