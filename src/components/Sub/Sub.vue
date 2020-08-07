<template>
    <div class="body-Sub">
        <div class="body-tou">
            <span>订阅</span>
            <span>Subscribe</span>
        </div>
        <div class="body-img">
            <img src="../../../public/images/15.jpg" alt="">
        </div>
        <van-tabs type="card">
            <van-tab title="最近更新">
                <div class="body-xin">
                    <div class="clear">
                        <div><img src="../../../public/images/16.jpg" alt="" class="xin-img"></div>
                        <div class="dao">
                            <span>梁文道 ______________</span><br>
                            <strong>一千零一夜</strong>
                            <p>回到人间的读书节目</p>
                            <p>第一夜：《了不起的盖茨比》
                            <van-icon name="play-circle" />
                                <span>已听：30%</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="body-xin">
                    <div class="clear">
                        <div><img src="../../../public/images/17.jpg" alt="" class="xin-img"></div>
                        <div class="dao">
                            <span>周铁君 ______________</span><br>
                            <strong>你好，童年</strong>
                            <p>和周铁君在一起，谈谈教育</p>
                            <p>马家辉：这个节目是在帮...
                            <van-icon name="play-circle" />
                                <span>已听：30%</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="body-xin">
                    <div class="clear">
                        <div><img src="../../../public/images/18.jpg" alt="" class="xin-img"></div>
                        <div class="dao">
                            <span>Alan See ______________</span><br>
                            <strong>学会绅装的伪装</strong>
                            <p>回到人间的读书节目</p>
                            <p>梁文道xAlan See：开始懂绅装
                                <span>未观看</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="body-xin">
                    <div class="clear">
                        <div><img src="../../../public/images/19.jpg" alt="" class="xin-img"></div>
                        <div class="dao">
                            <span>看理想编辑部 ______________</span><br>
                            <strong>100个职业告白</strong>
                            <p>回到人间的读书节目</p>
                            <p>00.游轮导航Emmma：朋友圈
                                <span>未观看</span>
                            </p>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="最新订阅">
                <div class="body-xin">
                    <div class="clear">
                        <div><img src="../../../public/images/18.jpg" alt="" class="xin-img"></div>
                        <div class="dao">
                            <span>Alan See ______________</span><br>
                            <strong>学会绅装的伪装</strong>
                            <p>回到人间的读书节目</p>
                            <p>梁文道xAlan See：开始懂绅装
                                <span>未观看</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="body-xin">
                    <div class="clear">
                        <div><img src="../../../public/images/19.jpg" alt="" class="xin-img"></div>
                        <div class="dao">
                            <span>看理想编辑部 ______________</span><br>
                            <strong>100个职业告白</strong>
                            <p>回到人间的读书节目</p>
                            <p>00.游轮导航Emmma：朋友圈
                                <span>未观看</span>
                            </p>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="最近常听">
                <div class="body-xin">
                    <div class="clear">
                        <div><img src="../../../public/images/16.jpg" alt="" class="xin-img"></div>
                        <div class="dao">
                            <span>梁文道 ______________</span><br>
                            <strong>一千零一夜</strong>
                            <p>回到人间的读书节目</p>
                            <p>第一夜：《了不起的盖茨比》
                            <van-icon name="play-circle" />
                                <span>已听：30%</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="body-xin">
                    <div class="clear">
                        <div><img src="../../../public/images/17.jpg" alt="" class="xin-img"></div>
                        <div class="dao">
                            <span>周铁君 ______________</span><br>
                            <strong>你好，童年</strong>
                            <p>和周铁君在一起，谈谈教育</p>
                            <p>马家辉：这个节目是在帮...
                            <van-icon name="play-circle" />
                                <span>已听：30%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
        

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
    name:"Sub"
}
</script>
<style>
    .body-Sub{
        background: #fbfbfb;
        width: 100%;
        height: 90%;
    }
    .body-tou{
        margin-left: 6%;
    }
    .body-tou span:nth-of-type(1){
        font-size: 18px;
    }
    .body-tou span:nth-of-type(2){
        font-size: 12px;
        margin-left: 2%;
        color: #ccc;
    }
    .body-img img{
        width: 91%;
    }
    .van-tabs__wrap{
        width: 100%; 
        margin-top: 2%;
    }
    .body-xin{
        margin-left: 5%;
        margin-top: 2.5%;
    }
    .body-xin div{
        line-height: 25px;
    }
    .clear:after{
        content: '';
        display: block;
        clear: both;
    }
    .xin-img{
        width: 100%;
    }
    .body-xin>div>div{
        float: left;
    }
    .body-xin>div>div:first-of-type{
        width: 27%;
    }
    .body-xin>div>div:last-of-type{
        width: 70%;
    }
    .dao{
        margin-left: 3%;
    }
    .dao span{
        color: #aaa;
    }
    .dao p{
        color: #aaa;
        margin-top: -3%;
        font-size: 14px;
    }
    .dao p:nth-of-type(2){
        color: #343434;
        width: 80%;
    }
    .dao p:nth-of-type(2) span{
        color: #a69452;
    }
</style>