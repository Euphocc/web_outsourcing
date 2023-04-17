<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-3"><img src="@/assets/leaf_logo.png" alt="" class="img img-thumbnail"></div>
            <div class="col-7">
                <div class="title">为您的数字作品保驾护航！</div>
            </div>
        </div>
        <hr class="border border-primary border-3 opacity-75">
    </div>
    <div class="container text-center">
        <div class="row">
            <div class="col-8 intro">
                <br><br>知识产权问题可谓数字空间中一直存在的一个"顽疾",虽区块链技术为认证、确权、追责提供了技术可能性，但在元宇宙空间大量的用户创作内容（UGC）的生成和跨虚实边界的IP应用加剧知识产权管理的复杂性和混淆性。<br><br>
                点击导航栏上的“图片上链”以开始生成唯一凭证，并保存经水印处理过的原图与唯一IPFSHash。<br><br>
                点击导航栏上的“侵权检测/证据固化/维权处理”以开始维权。<br><br>
                侵权检测：上传<span style="background-color: aqua;">带有水印的原图，</span>进行侵权检测，下载可能侵权的作品。<br><br>
                证据固化：上传<span style="background-color: aqua;">侵权作品的IPFSHash与取证视频</span>，进行上链。返回上链后取证视频的IPFSHash。<br><br>
                维权处理：上传<span style="background-color: aqua;">侵权作品与取证视频的IPFSHash</span>，登记您的邮箱，我们将及时联系您。<br><br><br>
            </div>
            <div class="col-1 seperateline"></div>
            <div class="col-3">
                <div class="card contact">
                    <div class="card-header">
                        联系我们
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">example1@example.com</li>
                        <li class="list-group-item">example2@example.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.img {
    width: 100px;
    height: 100px;
}

.title {
    font-size: 2.5rem;
    line-height: 7rem;
}

.intro {
    text-align: left;
    font-size: larger;
}

.seperateline {
    background-color: pink;
    width: 1rem;
}

.contact {
    margin-top: 10rem;
    margin-left: 3rem;
}
</style>
