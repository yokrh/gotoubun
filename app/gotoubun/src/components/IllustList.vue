<template>
  <!-- イラストリスト -->
  <div>
    <div style="margin-top:40px; font-size:16px;">{{targetIllusts.length}} HIT ! （全{{illusts.length}}件）</div>

    <template v-if="targetIllusts.length > 0">
      <div style="display:flex; flex-wrap:wrap; margin-top:20px;">
        <!-- イラスト -->
        <el-card v-for="illust in targetIllusts" :key="illust.id"
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
      illusts: [],
    };
  },
  computed: {
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

      // HAS NOT PREPARED IMAGE
      const END = 5 * 65;
      this.illusts = this.illusts.slice(0, END);
    })
  },
  methods: {
    /**
     * fetch quotes
     */
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
  }
}
</script>

<style scoped>
@media screen and (max-width:480px) {
  .illust-card {
    width: 100% !important;
  }
}
</style>