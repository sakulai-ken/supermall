<template>
  <van-tabbar class="tabbar" v-model="active" inactive-color="#f6ff6f">
    <van-tabbar-item class="tab-bar-item" replace to="/">
      <div class="icon">
        <van-icon name="home-o" size="22" dot />
      </div>
      <div class="text">标签</div>
    </van-tabbar-item>
    <van-tabbar-item class="tab-bar-item" replace to="/about">
      <div class="icon">
        <van-icon name="search" size="22" badge="9" />
      </div>
      <div class="text">标签</div>
    </van-tabbar-item>
    <van-tabbar-item class="tab-bar-item" replace to="/home">
      <div class="icon">
        <van-icon name="friends-o" size="22" badge="99" />
      </div>
      <div class="text">标签</div>
    </van-tabbar-item>
    <van-tabbar-item class="tab-bar-item" replace to="/cart">
      <div class="icon">
        <van-icon name="setting-o" size="22" />
      </div>
      <div class="text">标签</div>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #42b983;
  box-shadow: 0px -1px 1px #f0f0f04d;
}

.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

/* .van-tabbar-item--active {
  
} */
.van-tabbar-item--active .icon {
  color: #ff4784;
}
.van-tabbar-item--active div {
  color: #7824ff;
}

.text {
  margin-top: 2px;
}

.icon {
  margin-top: -4px;
}
</style>
