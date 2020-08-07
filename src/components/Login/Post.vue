<template>
    <div class="login_body">
        <div class="tou">
            <strong>注册</strong>
        </div>
        <div class="dd">
            <p><span>{{tishi}}</span><span>(注册领60元优惠券)</span></p>
            <input class="login_text" v-model="shoujihao" type="text" placeholder="请输入手机号" style="color:#000">
        </div>
        <div class="login_btn">
             
				<input  id="ann" :class="yanse" type="submit" value="发送" @click="dianji()">
			
        </div>
        <div class="body-ju">
            <p>点击按钮即为同意<span>用户协议</span></p>
        </div>
    </div>
</template>
<script>
export default {
    name:"Post",
    data() {
        return {
            tishi:'手机号',
            shoujihao:'',
            yanse:'hui'
        }
    },
    watch:{
        shoujihao:function(){
            if(this.shoujihao==''){
                return this.yanse="hui",this.tishi='手机号';
            }else{
                return this.yanse="red";
            }
        }
    },
    methods: {
        dianji:function(){
            var phone = document.getElementsByClassName("login_text")[0];
            var phonezz = /^1[3456789]\d{9}$/;
            if(phone.value == ''){
                // alert(1);
            }else{
                if(!phonezz.test(phone.value)){
                    this.tishi='手机号码格式不正确!';
                } else{
                    this.$router.push({
                        path:'/login'
                    })
                }
                
            }
        }
    }
}
</script>
<style scoped>
    *{
        cursor: pointer;
    }
    .tou{
        line-height: 150px;
        font-size: 30px;
        margin-left: 10px;
    }
    .dd span{
         margin-left: 10px;
    }
    .dd span:nth-of-type(2){
        color: #d55106;
    }
    #content .login_body{
        width: 100%;
    }
    .login_body .login_text{
        width: 94%;
        height: 42px;
        border: none;
        border-bottom: 1px #e0e0e0 solid;
        margin-left: 5px;
        outline: none;
    }
    .login_body .login_btn{
        height: 50px;
        margin: 10px;
    }
    .login_body .login_btn input{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        border: none;
        color: white;
    }
    .body-ju{
        text-align: center;
        color: #c7c7c7;
    }
    .body-ju span{
        color: #9ea07b;
    }
    .hui{
        background: #dee2e6;
        color: #fff;
    }
    .red{
        background: #f0dd71;
        color: #000;
    }
    
</style>