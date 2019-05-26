<template>
  <!-- イラストリスト -->
  <div style="padding:20px 0;">
    <div id="scroll-top" style="margin-top:40px; font-size:16px;">
      {{targetIllusts.length}} HIT ! （全{{illusts.length}}件）
    </div>

    <template v-if="targetIllusts.length > 0">
      <div style="display:flex; flex-wrap:wrap; margin-top:20px;">
        <!-- リスト -->
        <el-card v-for="illust in displayedIllusts" :key="illust.id"
          shadow="always"
          style="margin:12px 0 0 2%; width:30%;"
          :style="{ 'background-color': illust.character.COLOR }"
          class="illust-card">
          <div style="width:100%; height:120px;">
            <img :src="illust.src"
              loading="lazy"
              style="object-fit:contain; width:100%; height:100%;">
          </div>
          <div style="padding:14px;">
            <span style="font-size:12px;">{{illust.quote}}</span>
          </div>
        </el-card>

        <!-- さらに読み込む -->
        <template v-if="displayedIllusts.length < targetIllusts.length">
          <el-card :key="'loadmore'"
            shadow="always"
            style="margin:12px 0 0 2%; width:30%; min-height:120px;
              background-color:#12345633; display:flex; align-items:center; justify-content:center;"
            class="illust-card">
            <el-button type="primary" @click="loadMore">さらに読み込む</el-button>
          </el-card>
        </template>

        <el-button id="scroll-top-button"
          type="info" round
          style="margin:60px auto; padding:12px 40px;"
          @click="scrollTop">
          ↑ トップに戻る
        </el-button>
      </div>
    </template>
  </div>
</template>

<script>
import Illust from '../models/Illust.js';
import CHARACTER from '../models/Character.js';

export default {
  components: {},
  props: {
    word: {
      default: '',
    },
    characterId: {
      default: '',
    },
  },
  data() {
    return {
      illusts: [],  // all illusts
      limit: 10,
      limitDiff: 10,
    };
  },
  watch: {
    word: function() {
      this.limit = this.limitDiff;
    },
  },
  computed: {
    displayedIllusts() {
      return this.targetIllusts.slice(0, this.limit);
    },
    targetIllusts() {
      return this.illusts
        .filter((illust) => {
          if (!this.characterId) return true;
          if (this.characterId === CHARACTER.ALL.ID) return true;
          if (!illust.character) return false;

          return illust.character.ID === this.characterId;
        })
        .filter((illust) => {
          if (!this.word) return true;

          if (!illust.quote) return false;
          return illust.quote.includes(this.word);
        });
    }
  },
  mounted() {
    this.fetchQuotes()
    .then((quotes) => {
      this.illusts = quotes.map(q => new Illust(q));
    })
  },
  methods: {
    //
    fetchQuotes() {
      const url = 'data/5hanayome/quotes.json'

      return new Promise((resolve) => {
        fetch(url)
          .then(data => data.json())
          .then((json) => {
            // console.log('fetchQuotes json', json);
            resolve(json);
          });
      });
    },
    //
    loadMore() {
      this.limit += this.limitDiff;
      this.limit = Math.min(this.limit, this.targetIllusts.length);
    },
    //
    scrollTop(){
      document.getElementById('scroll-top').scrollIntoView(false);
    },
  }
}
</script>

<style scoped>
#scroll-top-button {
  display: none;
}
@media screen and (max-width:480px) {
  .illust-card {
    width: 100% !important;
  }

  #scroll-top-button {
    display: block;
  }
}
</style>