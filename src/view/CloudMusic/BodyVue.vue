<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <!-- Slide 1 -->
          <div class="carousel-item active" style="background-image: url('static/img/slide/slide-1.jpg');">
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animated fadeInDown">Welcome to <span>Music</span></h2>
                <p class="animated fadeInUp">
                  有一种美妙的乐声始终诱使我去倾听，无法回避，那就是人类创造的音乐。它像黑夜里的烛光，像朗空中的明月;像清晨的露珠，像黄昏的余晖;像亲切的问候，像甜蜜的微笑;像春天里的微风，像冬日里的火炉;像初恋者的心扉。像母亲的抚摩，像久别重逢者的狂热拥抱，像依依惜别时的绵绵回望……
                </p>
                <a href="/word1" class="btn-get-started animated fadeInUp scrollto">Music information</a>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item" style="background-image: url('static/img/slide/slide-2.jpg');">
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animated fadeInDown">Colorful music</h2>
                <p class="animated fadeInUp">
                  如果心太累，就在路边歇歇脚，给空了的杯子里加一瓢清澈的水，给瘪了的行囊里加一点生命的干粮;听听风雨，那是你随身携带的音乐，不经意间行云流水早已把你绘成了他们的背景。</p>
                <a href="/word2" class="btn-get-started animated fadeInUp scrollto">Song ranking</a>
              </div>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="carousel-item" style="background-image: url('static/img/slide/slide-3.jpg');">
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animated fadeInDown">That's the beauty of music</h2>
                <p class="animated fadeInUp">习惯一个人的音乐，一个人的音乐是心灵最深处地呻吟。也许只有自己才听得懂，可是却依然希望自己听的音乐能把周围和未来打动。</p>
                <a href="/index" class="btn-get-started animated fadeInUp scrollto">commence start</a>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BodyVue"
}
</script>

<style scoped>

</style>
