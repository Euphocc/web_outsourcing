<template>
    <div class="card">
        <img src="@/assets/search.png" class="card-img-top" alt="侵权检测系统">
        <div class="card-body">
            <h5 class="card-title">侵权检测</h5>
            <p class="card-text">当您发现互联网上出现的疑似侵权的作品，可通过识别水印和链上检测，确定其是否侵权。</p>
            <div class="mb-3">
                <label for="formFile" class="form-label"></label>
                <input class="form-control" type="file" id="formFile" @change="uploadWatermark">
            </div>
            <div class="result" v-if="moduleDisplay.result">
                <div class="res-result">侵权结果：{{ !(detectResult.IPFSHashes === null) ? '已侵权' : '未侵权' }}</div>
                <div v-if="!detectResult.result">请检查输入格式与网络</div>
                <div class="res-ipfshashes" v-if="!(detectResult.IPFSHashes === null)">
                    以下是可能的侵权IPFSHash:（若不显示，可能为您上传的并非水印加密后的图片。）
                    <div class="res-ipfshashes" v-for="IPFSHash in detectResult.IPFSHashes" :key="IPFSHash">{{ IPFSHash }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import { reactive } from 'vue'

let detectResult = reactive({ result: false });
let moduleDisplay = reactive({ result: false });

function openNewWindow() {
    const strUrl = "http://192.168.134.179:8082/images";
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.target = "_blank";
    a.href = strUrl;
    a.click();
    document.body.removeChild(a);
}

let uploadWatermark = (e) => {
    let formdata = new FormData();
    formdata.append('file', e.target.files[0]);
    axios.post('/authenticate',
        formdata
        , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res) => {
            moduleDisplay.result = true;
            detectResult.result = res.data.Result;
            detectResult.IPFSHashes = res.data.IPFSHashes;
            if (detectResult.result === false) {
                window.alert("上传图片失败！请检查网络或输入格式！错误信息：" + res);
            }
            if (!(detectResult.IPFSHashes === null)) {
                // window.open('http://192.168.134.179:8082/images');
                console.log(res);
                openNewWindow();
            }
        }).catch((error) => {
            window.alert("上传图片失败！请检查网络或输入格式！错误信息：" + error)
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