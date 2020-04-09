<template>
  <div id="hello">
    <div id="titleNew">
      <h1>Start With This:</h1>
    </div>
    <div id="generated">
      <span v-if="waiting">
        {{ sentence }}
      </span>
      <span v-else>
        {{ `${sentence.start} ${sentence.subject} ${sentence.verb} ${sentence.adverb} ${sentence.prep}` }}
      </span>
    </div>
    <button
      id="genButton"
      @click="post"
    >
      CLICK HERE TO GENERATE
    </button>
    <br>
    <Twitter
      :sentence="sentence"
      :canttweet="waiting"
    />
  </div>
</template>

<script>
import axios from 'axios';
import Twitter from './Twitter.vue'

export default {
  name: 'Sentence',
  components: {
    Twitter
  },
  data: () => ({
    sentence: "Your first prompt awaits... 🖋",
    waiting: true
  }),
  methods: {
    post: function () {
      axios
        .post('/api/newSentence')
        .then(response => {
        this.sentence = response.data;
        this.$emit("update-sentence", this.sentence);
        console.log(this.waiting);
        this.waiting = false;
        console.log(this.waiting);
        })
        .catch(console.error)
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#hello {
  width: 90%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  background-image: url("../assets/quartz.jpg");
  background-size: cover;
}

#generated {
  text-shadow: none;
  width: 90%;
  height: 30%;
  border-radius: 15px;
  font-family: 'Crimson Text', serif;
  font-weight: normal;
  padding: 10px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: RGB(0, 0, 0);
}

#genButton {
  width: 93%;
  padding: 5px;
  color: #000;
  font-family: 'Crimson Text', serif;
  font-size: 90%;
  background-color: RGB(255, 255, 255, 0.3);
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 15px;
  border: 4px double #000;
}

#genButton:hover {
    background-image: linear-gradient(
    to right, 
  #000,
  #000 16.65%,
  #fff 16.65%,
  #fff 33.3%,
  #000 33.3%,
  #000 49.95%,
  #fff 49.95%,
  #fff 66.6%,
  #000 66.6%,
  #000 83.25%,
  #fff 83.25%,
  #fff 100%
    );
  cursor: pointer;
  animation:slide 2s linear infinite;
}

@keyframes slide {
  to {
    background-position:20vw;
  }
}

#genButton:active {
  background-color: #000;
  background-image: none;
  color: #fff;
}

#genButton:focus {
  outline: none !important;
}

#titleNew {
    /* position: absolute; */
    z-index: 2;
    width: 110%;
    color: #000;
    font-family: 'Petit Formal Script', cursive;
    font-size: 2.5vw;
    margin-bottom: -5vw;
    margin-top: -5vw;
    text-shadow: 2px 2px #fff;
}

</style>
