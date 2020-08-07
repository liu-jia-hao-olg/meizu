<template>
    <div class="body-Message">
        <div class="body-tou">
            <div class="tubiao">
                    <router-link to="/TabBar" >
                       <van-icon name="arrow-left" />
                    </router-link>
                <strong>系统消息</strong>
                <span>全部已读</span>
            </div>
            <van-tabs v-model="activeName">
                <van-tab title="站内信" name="a" class="bobo">
                    <div class="xin-div">
                        <a>996是正确的职业攻略吗？</a>
                        <p>最新节目《不完美世界的博弈：契约经历学35讲》上线，带你透过契约理解世界</p>
                        <p>
                            <span>2020-08-05 19:53:22</span>
                            <span>查看详情-></span>
                        </p>
                    </div>
                    <div class="xin-div">
                        <a>八月新节日超前点印，可享69折早鸟价</a>
                        <p>新的一月，希望好运依旧会在你这边。</p>
                        <p>
                            <span>2020-08-06 21:13:22</span>
                            <span>查看详情-></span>
                        </p>
                    </div>
                </van-tab>
                <van-tab title="通知" name="b">
                        <div class="xin-div1">
                            <p>叮，你有优惠券到账啦。</p>
                            <p>
                                <span>点击查看</span><br>
                                <span>2020-08-06 21:13:22</span>
                            </p>
                        </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name:"Message",
    data() {
    return {
      activeName: 'a',
    };
  },
}
</script>
<style>
    .tubiao{
        margin-top: 2%;
    }
    .tubiao strong{
        margin-left: 30%;
    }
    .tubiao span{
        margin-left: 20%;
    }
    .van-tabs__nav--line {
        box-sizing: content-box;
        height: 80%;
        padding-bottom: 19px;
        width: 50%;
    }
    .xin-div{
        background: #fcfcfc;
        width: 90%;
        height: 20%;
        margin-top: 5%;
    }
    .xin-div a{
        margin-left: 4.5%;
    }
    .xin-div p{
        margin-left: 4.5%;
        width: 90%;
        color: #9b9b9b;
        border-bottom: 1px #cccccc solid;
        line-height: 30px;
    }
    .xin-div p:nth-of-type(2){
        border: 0px;
    }
    .xin-div p:nth-of-type(2) span{
        color: #c4c4c4;
        font-size: 14px;
    }
    .xin-div p:nth-of-type(2) span:nth-of-type(2){
        color: #9f9780;
        font-size: 14px;
        float: right;
    }
    .xin-div1{
        background: #fcfcfc;
        width: 90%;
        height: 20%;
        margin-top: 5%;
    }
    
    .xin-div1 p{
        margin-left: 5%;
    }
    .xin-div1 p:nth-of-type(2){
        margin-left: 5%;
        line-height: 25px;
    }
    .xin-div1 p:nth-of-type(2) span{
        color: #9f9780;
        font-size: 14px;
        margin-left: 1%;
    }
    .xin-div1 p:nth-of-type(2) span:nth-of-type(2){
        color: #c4c4c4;
        font-size: 14px;
    }
    .xin-img img{
        width: 20%;
        height: 11%;
        
    }
</style>