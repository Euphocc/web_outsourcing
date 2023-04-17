<template>
    <div class="container">
        <div class="row">
            <div class="card">
                <img src="@/assets/search.png" class="card-img-top" alt="图片上链">
                <div class="card-body">
                    <h5 class="card-title">图片上链</h5>
                    <p class="card-text">将您的图片加入水印并上链存证，在数据库内生成唯一标识，并得到加入水印的图片与唯一IPFSHash凭证。</p>
                    <div class="mb-3">
                        <label for="formFile" class="form-label"></label>
                        <input class="form-control" type="file" id="formFile" @change="uploadWatermark">
                    </div>
                    <div class="result" v-if="moduleDisplay.result">
                        <div class="res-result">上传结果：{{ uploadResult.result ? '成功' : '失败' }}</div>
                        <div class="res-result" v-if="uploadResult.result">您作品的IPFSHash：{{ uploadResult.IPFSHash }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import { reactive } from 'vue'


let uploadResult = reactive({ result: false });
let moduleDisplay = reactive({ result: false });
async function openNewWindow(filename) {
    const strUrl = "http://192.168.134.179:8082/embedded/" + filename;
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.download = filename;
    a.target = '_blank';
    a.href = strUrl;
    a.click();
    document.body.removeChild(a);
}
let uploadWatermark = (e) => {
    let formdata = new FormData();
    formdata.append('file', e.target.files[0]);
    axios.post('/embed',
        formdata
        , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res) => {
            moduleDisplay.result = true;
            uploadResult.result = res.data.Result;
            uploadResult.IPFSHash = res.data.IPFSHash;
            if (uploadResult.result === true) {
                openNewWindow(e.target.files[0].name);
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