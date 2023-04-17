<template>
    <div class="card">
        <img src="@/assets/judge.png" class="card-img-top" alt="侵权检测系统" @change="legalProtect">
        <div class="card-body">
            <h5 class="card-title">维权处理</h5>
            <p class="card-text">您可以提出维权申请并上报侵权信息给维权处理团队，对接律师法律部门进行维权处理。收到申请后，我们会尽快联系您。</p>
            <div class="mb-3">
                <label for="formFile" class="form-label"></label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">侵权图片的IPFSHash</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" v-model="imgIPFS2"
                        aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">取证视频的IPFSHash</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" v-model="videoIPFS"
                        aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="您的邮箱地址" v-model="emailAddress">
                </div>
                <button type="button" class="btn btn-primary" @click="legalProtect">提交</button>
                <div v-if="moduleDisplay.result">上传结果：{{ returnData.result }}</div>
            </div>
        </div>

    </div>
</template>
<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import { ref } from 'vue'
let imgIPFS2 = ref('');
let videoIPFS = ref('');
let emailAddress = ref('');
let returnData = reactive({});
let moduleDisplay = reactive({ result: false });

let legalProtect = () => {

    let formdata = new FormData();
    // let file = e.target.files[0];
    formdata.append('img', imgIPFS2.value);
    formdata.append('video', videoIPFS.value);
    formdata.append('mail', emailAddress.value);
    axios.post('/apply',
        formdata
        , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res) => {
            moduleDisplay.result = true;
            returnData.result = res.data.Result ? '成功' : '失败';
        }).catch((error) => {
            window.alert("上传失败！请检查网络或输入格式，错误信息：" + error)
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

.btn-primary {
    text-align: center;
}
</style>