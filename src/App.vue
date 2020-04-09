<template>
  <div id="app">
    <div id="container">
      <div id="titleText">
        <div id="titleWrapper">
          <span id="txt">GET YOUR CRYPTIC WRITING PROMPTS HERE</span>
          <span id="txt2">GET YOUR CRYPTIC WRITING PROMPTS HERE</span>
          <span id="gradient" />
          <span id="dodge" />
        </div>
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
  overflow: hidden;
}

#titleText {
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#titleWrapper {
  display: inline-flex;
  filter: brightness(200%);
  overflow: hidden;
}

#txt {
  background: black;
  width: 100%;
  font-size: 9.8vw;
  /* background-color: #000; */
  font-family: 'Crimson Text', serif;
  line-height: 12vh;
}

#txt2 {
    width: 100%;
  font-size: 9.8vw;
  font-family: 'Crimson Text', serif;
  line-height: 12vh;
  position: absolute;
  mix-blend-mode: difference;
  filter: blur(3px);
}

#gradient {
  background: linear-gradient(88.96677098247767deg, rgba(218, 179, 182,1) 21.778195678513733%,rgba(218, 179, 182,1) 22.991194635164245%,rgba(108, 117, 150,1) 80.00214559773828%);
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
}

#dodge {
  background: radial-gradient(circle, #fff, #000 35%) center / 25% 25%;
  position: absolute;
  top: -100%;
  left: -100%;
  right: 0;
  bottom: 0;
  mix-blend-mode: color-dodge;
  animation: dodge-area 3s linear infinite;
}

@keyframes dodge-area {
  to {
    transform: translate(50%, 50%);
  }
}

#container2 {
  display: flex;
  height: 100%;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


@media only screen and (orientation: portrait) {
  #container {
    flex-direction: column;
    height: 95%;
  }

  #container2 {
    height: 70%;
    width: 95%;
  }

  #titleText {
    width: 95%;
    font-size: 10vw;
    height: 25%;
    overflow: hidden;
  }

  #txt {
        font-size: 10.7vw;
        line-height: 10vw;
  }

  #titleWrapper {
    /* margin: -5px; */
    background: #000;
    border-right: 7px solid black;
    border-bottom: 2px solid black;
  }

  #txt2 {
        font-size: 10.7vw;
        line-height: 10vw;
  }

  #hello {
    height: 40%;
  }

  #allOfThem {
    height: 55%;
  }

  #titleNew {
    font-size: 4.7vw;
    margin-bottom: -8.5vw;
  }

  #twit [data-v-28d66af3] {
    margin-bottom: 5vh;
  }

  #titleAll {
    font-size: 3.5vw;
    margin-bottom: -6.5vw;
  }
}

</style>
