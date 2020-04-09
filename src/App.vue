<template>
  <div id="app">
    <div id="container">
      <div id="titleText">
        Get Your Cryptic Writing Prompts Here
      </div>
      <div id="container2">
        <Sentence @update-sentence="refreshSent" />
        <br>
        <AllSentences
          :list="sentenceList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Sentence from './components/Sentence.vue'
import AllSentences from './components/AllSentences.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Sentence,
    AllSentences
  },
  data: () => ({
    generated: String,
    generateClicked: Boolean,
    sentenceList: []
  }),
  mounted() {
    axios
      .get('/api/allSentences')
      .then(response => {
        this.sentenceList = response.data;
      })
      .catch(console.error)
  },
  methods: {
    refreshSent (s) {
      this.generated = s;
      this.sentenceList.push(this.generated);
      // console.log(this.generated);
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  background-color: #000;
  margin: 0 !important;
}

#app {
  font-family: 'Courier New', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000;
  margin: 0 !important;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  display: flex;
  height: 80%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#titleText {
  font-size: 8vw;
  font-family: 'Petit Formal Script', cursive;
  text-shadow: 2px 2px #000;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container2 {
  display: flex;
  height: 100%;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
