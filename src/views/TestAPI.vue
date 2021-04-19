<template>
    <button class="btn btn-danger" @click="callAPI">
        Call api
    </button>
</template>
<script>
import api from '@/services/base-services.js'
export default {
    methods:{
        callAPI(){
            var obj = {
                "email":"duy10@gmail.com",
                "password":"123456"
            }
            api.get('https://peaceful-journey-28732.herokuapp.com/api/login',obj)
                .then(res =>{
                    console.log('res',res)
                })
                .catch(err =>{
                    console.log('err',err)
                })
        }
    }
}
</script>