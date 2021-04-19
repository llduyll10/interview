<template>
    <button class="btn btn-danger" @click="callAPI">
        Call api
    </button>
</template>
<script>
import axios from 'axios'
export default {
    methods:{
        callAPI(){
            var obj = {
                "email":"duy10@gmail.com",
                "password":"123456"
            }
            let axiosConfig = {
                headers: {
                        'Content-type': 'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,PATCH',
                        'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token'
                    }
            };

            axios.post('https://peaceful-journey-28732.herokuapp.com/api/login',obj,axiosConfig)
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