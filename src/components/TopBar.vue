<template>
  <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-none d-lg-block">
    <div class="container clearfix">
      <div class="contact-info float-left">
        <i class="icofont-envelope"></i><a href="mailto:001234@qq.com">001234@qq.com</a>
        <i class="icofont-phone"></i> +123 4567 8901
      </div>
      <div class="social-links float-right">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="skype"><i class="icofont-skype"></i></a>
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
      </div>
    </div>
  </section>

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="container">

      <div class="logo float-left">
        <h1 class="text-light"><a href="/qianduan123.html"><span>Music homepage</span></a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="qianduan.html"><img src="static/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav class="nav-menu float-right d-none d-lg-block">
        <ul>
          <li :class="{active:isActive===0}"><a @click="pushTo('',0)">主页</a></li>
          <li :class="{active:isActive===1}"><a @click="pushTo('hello',1)">音乐信息</a></li>
          <li :class="{active:isActive===2}"><a @click="pushTo('wrold',2)">歌曲信息</a></li>
          <li :class="{active:isActive===3}"><a @click="pushTo('t',3)">团队</a></li>
          <li :class="{active:isActive===4}"><a @click="pushTo('echarts',4)">数据</a></li>
          <li :class="{active:isActive===5}"><a href="http://localhost:8000/index">可视化</a></li>
        </ul>
      </nav><!-- .nav-menu -->

    </div>
  </header><!-- End Header -->
</template>

<script>
import {useRouter} from 'vue-router'

// const active = reactive({
//   active0: 'active',
//   active1: false,
//   active2: false,
//   active3: false,
//   active4: false,
// })
const ToIndex = () => {
  const router = useRouter()
  const pushTo = (path, id) => {
    // const activeStr = `active${id}`
    console.log(id)
    router.push(`/${path}`)
    // for (const i in active) {
    //   active[i] = i === activeStr ? 'active' : false
    // }
    // console.log(active)
  }
  return {
    pushTo
  }
}
export default {
  name: "TopBar",
  props: {
    isActive: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const name = 10
    const {pushTo} = ToIndex()
    return {
      pushTo,
      name,
      // ...toRefs(active)
    }
  }
}
</script>

<style scoped>

</style>
