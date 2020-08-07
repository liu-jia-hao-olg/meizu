<template>
    <div class="login_body">
        <div class="tou">
            <strong>密码登录</strong>
        </div>
        <div class="dd">
            <span>手机号</span>
            <input class="login_text" v-model="shoujihao" type="text" placeholder="请输入手机号" style="color:red">
        </div>
        <div class="dd">
            <span>密码</span>
            <input class="login_text" type="password" placeholder="请输入您的密码">
        </div>
        <div class="login_btn">
            <input id="ann" :class="yanse" type="submit" value="登录" @click="dianji()">
        </div>
     
    </div>
</template>
<script>
export default {
    name:"Login",
    data() {
        return {
            shoujihao:'',
            yanse:'hui'
        }
    },
    watch:{
        shoujihao:function(){
            if(this.shoujihao==''){
                return this.yanse="hui";
            }else{
                return this.yanse="red";
            }
        }
    },
    methods: {
        dianji:function(){
            var phone = document.getElementsByClassName("login_text")[0];
            var phonezz = /^1[3456789]\d{9}$/;
            var pwd = document.getElementsByClassName("login_text")[1];
            var pwdzz = /^[a-zA-Z0-9]{6,22}$/;
            if(phone.value == 0){
                alert("账号不能为空!");
            }else{
            //    document.getElementById("ann").style.background = 'red';
                if(!phonezz.test(phone.value)){
                    alert("请输入正确的手机号码!")
                }else{
                    if(pwd.value==0){
                         alert("密码不能为空!");
                    }else{
                        if(!pwdzz.test(pwd.value)){
                            alert("输入密码不符合要求！密码由6-22位数字和英文混合组成");
                        }else{
                            alert("登陆成功!");
                        }
                    }
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
    .hui{
        background: #dee2e6;
        color: #fff;
    }
    .red{
        background: #f0dd71;
        color: #000;
    }
    
</style>