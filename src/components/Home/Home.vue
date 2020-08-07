<template>
    <div class="body-Home">
        <div class="body-tou">
            <span>首页</span>
            <span>Home</span>
            <van-icon name="search" />
        </div>
        <div class="body-lun">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item><img src="../../../public/images/2.jpg" alt="" class="lun-img"></van-swipe-item>
                <van-swipe-item><img src="../../../public/images/3.jpg" alt="" class="lun-img"></van-swipe-item>
                <van-swipe-item><img src="../../../public/images/4.jpg" alt="" class="lun-img"></van-swipe-item>
                <van-swipe-item><img src="../../../public/images/5.jpg" alt="" class="lun-img"></van-swipe-item>
                <van-swipe-item><img src="../../../public/images/6.jpg" alt="" class="lun-img"></van-swipe-item>
            </van-swipe>
        </div>
        <div class="acc-div1">
                <ul>
                    <li>
                        <span> 
                            <van-icon name="wap-home" />
                        </span><br>
                        大厅
                    </li>
                    <li>
                        <span>
                            <van-icon name="browsing-history" />
                        </span><br>
                        博物馆
                    </li>
                    <li>
                        <span><van-icon name="card" /></span><br>
                        美术馆
                    </li>
                    <li>
                        <span><van-icon name="manager" /></span><br>
                        图书馆
                    </li>
                    <li>
                        <span><van-icon name="coupon" /></span><br>
                        演讲厅
                    </li>
                </ul>
        </div>
        <div class="acc-div1">
                <ul>
                    <li>
                        <span> 
                            <van-icon name="hot" />
                        </span><br>
                        音乐厅
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span><br>
                        剧院
                    </li>
                    <li>
                        <span><van-icon name="invition" /></span><br>
                        生活馆
                    </li>
                    <li>
                        <span><van-icon name="graphic" /></span><br>
                        故事深林
                    </li>
                    <li>
                        <span><van-icon name="expand" /></span><br>
                        全部
                    </li>
                </ul>
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
    name:"Home"
}
</script>
<style>
    .body-Home{
        background: #fbfbfb;
        width: 100%;
        height: 90%;
    }
    .van-icon-search{
        float: right;
        right: 5%;
    }
    .lun-img{
        width: 90%;
        margin-left: 5%;
        margin-top: 2%;
    }
    .acc-div1 ul{
        margin-top: 2%;
        display: flex;
    }
    .acc-div1 ul li{
        flex: 1;
        text-align: center;
    }
    .acc-div1 ul li span{
        background: #f2f2f2;
        padding: 5px;
        border-radius: 50%;
        line-height: 15px;
        text-align: center;
    }
</style>