<template>
    <div class="body-Header">
        <div class="body-tou">
            <van-icon name="orders-o"  />
            <van-icon name="setting-o" />
        </div>
        <div class="body-deng">
           <img src="../../../public/images/12.jpg" alt="">
           <router-link  tag="span" to="/Post">
				未登录
			</router-link>
        </div>
        <div class="body-img">
            <img src="../../../public/images/13.jpg" alt="">
        </div>
        <div class="body-img1">
            <img src="../../../public/images/14.jpg" alt="">
        </div>
        <div class="Account">
            <div>我的账户</div>
            <div class="acc-div1">
                <ul>
                    
                    <router-link to="/Message" tag="li">
                        <van-icon name="envelop-o" /><br>
                        系统消息
                    </router-link>
                    <li>
                        <van-icon name="newspaper-o" /><br>
                        购买记录
                    </li>
                    <li>
                        <van-icon name="idcard" /><br>
                        优惠券
                    </li>
                </ul>
            </div>
            <div class="acc-div1">
                <ul>
                    <li>
                        <van-icon name="point-gift-o" /><br>
                        兑换码
                    </li>
                    <li>
                        <van-icon name="home-o" /><br>
                        商城订单
                    </li>
                    <li>
                        <van-icon name="location-o" /><br>
                        地址管理
                    </li>
                </ul>
            </div>
        </div>
        <div class="Account">
            <div>我的内容</div>
            <div class="acc-div1">
                <ul>
                    <li>
                        <van-icon name="chat-o" /><br>
                        我的评论
                    </li>
                    <router-link to="/Listen" tag="li">
                        <van-icon name="service-o" /><br>
                        最近收听
                    </router-link>
                    <li>
                        <van-icon name="bookmark-o" /><br>
                        我的收藏
                    </li><br>
                     <li>
                        <van-icon name="send-gift-o" /><br>
                        我的下载
                    </li>
                </ul>
            </div>
        </div>
        <div class="Account">
            <div>我的服务</div>
            <div class="acc-div1">
                <ul>
                    <li>
                        <van-icon name="award-o" /><br>
                        推荐有利
                    </li>
                    <li>
                        <van-icon name="coupon-o" /><br>
                        常见问题
                    </li>
                    <li>
                        <van-icon name="bookmark-o" /><br>
                        意见反馈
                    </li><br>
                     <li>
                        <van-icon name="friends-o" /><br>
                        商务合作
                    </li>
                </ul>
            </div>
        </div>
        <div id="footer">
		<ul>
			<router-link tag="li" to="/Home">
                <van-icon name="wap-home-o" />
				<p>首页</p>
			</router-link>
			<router-link  tag="li" to="/Theatre">
                <van-icon name="location-o" />
				<p>剧场</p>
			</router-link>
			<router-link  tag="li" to="/mine">
				<img src="../../../public/images/bofang.jpg" alt="" class="bofang">
			</router-link>
            <router-link  tag="li" to="/Sub">
                <van-icon name="bookmark-o" />
				<p>订阅</p>
			</router-link>
            <router-link  tag="li" to="/TabBar">
                <van-icon name="user-o" />
				<p>我的</p>
			</router-link>
		</ul>
	</div>
    </div>
    
  
</template>
<script>
export default {
    name:"We"
}
</script>
<style>
    .body-Header{
        background: #fbfbfb;
    }
    .van-icon-orders-o{
        font-size: 30px;
        float: right;
        right: 10%;
    }
    .van-icon-setting-o{
        font-size: 30px;
        float: right;
    }
    .body-deng img{
        width: 40px;
        margin-left: 5%;
        margin-top: 9%;
    }
    .body-deng span{
        margin-left: 3%;
    }
    .body-img img{
        width: 90%;
        height: 5%;
        margin-left: 5%;
        margin-top: 2%;
    }
    .body-img1 img{
        width: 90%;
        height: 5%;
        margin-left: 5%;
        margin-top: 2%;
    }
    .Account div{
        margin-left: 5%;
        margin-top: 2%;
    }
    .Account{
        line-height: 25px;
        border-bottom: 1px solid #ececec;
        width: 90%;
        margin-left: 5%;
    }
    .acc-div1 ul{
        display: flex;
    }
    .acc-div1 ul li{
        flex: 1;
        text-align: center;
    }

    #footer{
        width: 100%;
        height: 50px;
        background: white;
        z-index: 100;
        border-top: 1px solid #eee;
        position: fixed;
        bottom: 0;
    }
    #footer ul{
        display: flex;
        text-align: center;
        height: 60px;
        align-items: center;
    }
    #footer ul li{
        flex: 1;
        height: 60px;
        display: block;
        line-height: 10px;
    }
    #footer ul p{
        font-size: 12px;
    }
    .bofang{
        width: 50%;
        margin-top: 5%;
    }
</style>