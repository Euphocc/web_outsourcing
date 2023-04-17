<template>
    <div class="card">
        <img src="@/assets/evidence.jpg" class="card-img-top" alt="侵权检测系统">
        <div class="card-body">
            <h5 class="card-title">证据固化</h5>
            <p class="card-text">发现侵权，您可以将网上发现的信息进行操作录屏，将录屏的结果文件上链存证，实现固化证据。</p>
            <div class="mb-3">
                <label for="formFile" class="form-label"></label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">侵权图片的IPFSHash</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" v-model="imgIPFS1"
                        aria-describedby="inputGroup-sizing-default">
                </div>
                <input class="form-control" type="file" id="formFile" @change="uploadIllegalWork">
                <div v-if="moduleDisplay.result">
                    <div>上传结果：{{ returnData.result ? '成功' : '失败' }}</div>
                    <div v-if="!returnData.result">请检查输入格式与网络</div>
                    <div v-if="returnData.result">取证视频的IPFSHash:<br>{{ returnData.videohash }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { reactive } from 'vue'
let imgIPFS1 = ref('');
let moduleDisplay = reactive({ result: false });
let returnData = reactive({})

let uploadIllegalWork = (e) => {
    let formdata = new FormData();
    formdata.append('file', e.target.files[0]);
    formdata.append('img', imgIPFS1.value);
    axios.post('/reportVideo',
        formdata
        , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res) => {
            moduleDisplay.result = true;
            returnData.result = res.data.Result;
            returnData.videohash = res.data.IPFSHash;
        }).catch((error) => {
            window.alert("上传失败！请检查网络，错误信息：" + error)
        })
}

</script>
<style scoped>
.card {
    text-align: center;
    width: 25rem;
    /* margin-left: 5rem;*/
    margin-top: 4rem;
}

.card-img-top {
    margin-top: 0.5rem;
    margin-left: 3.5rem;
    width: 14rem;
    height: 14rem;
}
</style>