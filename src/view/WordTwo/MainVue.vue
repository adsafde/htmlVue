<template>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="section-title">
        <h2>Song chart</h2>
        <p>分别收录了热门歌单排行榜，新歌排行榜，以及流行歌曲排行榜</p>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">hot</li>
            <li data-filter=".filter-card">new</li>
            <li data-filter=".filter-web">pop</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Popular song</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="(user,index) in users"
                 :key="index"
                 class="text item">{{ user }}
            </div>
          </el-card>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>DONG YI MING</span>
                <el-button class="button" text> button2</el-button>
              </div>
            </template>
            <div v-for="(user,index) in userTwo"
                 :key="index"
                 class="text item">{{ user }}
            </div>
          </el-card>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </div>
      </div>
    </div>
  </section>

  <a href="#" class="back-to-top">
    <i class="icofont-simple-up"></i>
  </a>
</template>

<script setup>
import {myFun} from "@/view/WordTwo/WordTwoJs/MainVueJs";
import users, {userTwo, name} from './WordTwoJs/getData'

const {getCookie} = myFun();
getCookie()
console.log(name)
// const ff = process.env.VUE_APP_NAME
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  overflow-y: scroll;
  height: 263px;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
