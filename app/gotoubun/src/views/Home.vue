<template>
  <!-- 五等分の花嫁 -->
  <div style="padding:0 2%; min-height:100%; background-color:#e87e9e11;">
    <!-- タイトル -->
    <h1 style="margin:0; padding:24px 0; font-size:32px;">
      五等分の花嫁
      <span style="display:block; font-size:24px;">イラスト検索</span>
    </h1>
    <p style="padding:0 4%; font-size:14px;">
      <a href="https://twitter.com/5Hanayome_anime" target="_blank"
        style="text-decoration:none; color:#3B94D9;">公式twitterアカウント</a>が配信しているイラストをセリフから検索できる非公式サイトです。<br/>
      <span style="font-size:12px; padding-top:8px;">
        リストは不定期更新です。だいたい公式のモーメントまとめから追加しています。（そろそろ公式LINEスタンプ欲しい → <a href="https://store.line.me/stickershop/product/9131680/ja">きた！</a>）
      </span>
    </p>

    <!-- ワード -->
    <el-input style="margin:24px 8%; width:84%;"
      placeholder="セリフを入力してください"
      v-model="word"
      @keyup.enter.native="onKeyupEnter">
    </el-input>

    <!-- キャラ -->
    <el-radio-group v-model="characterId"
      style="margin-top:20px;"
      class="character-radio-group">
      <el-radio :label="CHARACTER.ALL.ID">{{CHARACTER.ALL.NAME}}</el-radio>
      <el-radio :label="CHARACTER.ICHIKA.ID">{{CHARACTER.ICHIKA.NAME}}</el-radio>
      <el-radio :label="CHARACTER.NINO.ID">{{CHARACTER.NINO.NAME}}</el-radio>
      <el-radio :label="CHARACTER.MIKU.ID">{{CHARACTER.MIKU.NAME}}</el-radio>
      <el-radio :label="CHARACTER.YOTSUBA.ID">{{CHARACTER.YOTSUBA.NAME}}</el-radio>
      <el-radio :label="CHARACTER.ITSUKI.ID">{{CHARACTER.ITSUKI.NAME}}</el-radio>
    </el-radio-group>

    <!-- イラストリスト -->
    <IllustList :word="word" :characterId="characterId" style="margin-top:20px;"></IllustList>
  </div>
</template>

<script>
import CHARACTER from '../models/Character.js';
import IllustList from '@/components/IllustList.vue'

export default {
  components: {
    IllustList,
  },
  props: {},
  data() {
    return {
      CHARACTER,
      word: '',
      characterId: CHARACTER.ALL.ID,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    //
    onKeyupEnter() {
      document.activeElement.blur();
    },
  },
}
</script>

<style scoped>
@media screen and (max-width:480px) {
  .character-radio-group {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0 !important;
  }
  .character-radio-group >>> .el-radio {
    margin: 12px 2%;
    width: 28%;
  }
}
</style>