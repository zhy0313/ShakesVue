<template>
    <div :class="$style.home" class="rel">
        <div 
            :class="$style.shootingStory" 
            :style="{ opacity: isTop ? 1 : 0 }"
            class="trans rel">
            <button>
                <i class="iconfont icon-tianjiagouwuche"></i>
                <span>拍摄故事</span>
            </button>
        </div>
        <div 
            :class="$style.homeMain" 
            :style="{ top: isTop ? '8vh' : 0 }"
            class="trans abs">
            <van-nav-bar
                @click-left="onClickLeft()"
                @click-right="onClickRight()">
                <span slot="left">1111111</span>
                <span slot="title">
                    <span>推荐</span>
                    <span>附近</span>
                </span>
                <span slot="right">2222222222</span>
            </van-nav-bar>
        </div>
    </div>
</template>

<script src="./Home.js" type="text/javascript"></script>

<style module lang="scss">
    @import './Home.scss';
</style>