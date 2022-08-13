<template>
  <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-none d-lg-block">
    <!--    <img src="static/img/bg.jpg" alt="">-->
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
        <h1 class="text-light"><a href="/qianduan"><span>Music homepage</span></a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="qianduan.html"><img src="static/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>


      <nav class="nav-menu float-right d-none d-lg-block">
        <ul>
          <li class="active"><a href="/hello">主页</a></li>
          <li><a @click="pushTo('hello')">音乐信息</a></li>
          <li><a>歌曲信息</a></li>
          <li><a>团队</a></li>
          <li><a>可视化</a></li>
        </ul>
      </nav><!-- .nav-menu -->

    </div>
  </header><!-- End Header -->
</template>

<script>
import {useRouter} from 'vue-router'

const ToIndex = () => {
  const router = useRouter()
  const pushTo = (path) => {
    router.push(`/${path}`)
  }
  return {
    pushTo
  }
}
export default {
  name: "HeaderVue",
  setup() {
    const {pushTo} = ToIndex()
    return {
      pushTo
    }
  }
}
</script>

<style scoped>

</style>
