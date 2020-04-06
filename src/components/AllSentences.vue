<template>
  <div id="allOfThem">
    <div id="titleAll">
      <h1>Previously Generated:</h1>
    </div>
    <div id="inside">
      <ul id="sentList">
        <li
          v-for="sent in list.slice().reverse()"
          id="sent" 
          :key="sent.id"
        > 
          {{ `${sent.start} ${sent.subject} ${sent.verb} ${sent.adverb} ${sent.prep}` }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllSentences',
  props: {
    //   newsent: String,
    //   clicked: Boolean,
      list: Array
  },
//   data: () => ({
//     list: [],
//   }),
//   mounted() {
//     axios
//       .get('/api/allSentences')
//       .then(response => {
//         this.list = response.data;
//       })
//       .catch(console.error)
//   },
  methods: {
      addSentence: function() {
          this.list.push(newsent);
          console.log(newsent);
          clicked = false;
      }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#allOfThem {
  width: 90%;
  height: 50%;
  background-image: url("../assets/quartz.jpg");
  background-size: cover;
  display:flex;
  align-items: center;
    flex-direction: column;
  justify-content: center;
}

#titleAll {
    z-index: 2;
    width: 110%;
    color: #000;
    font-family: 'Petit Formal Script', cursive;
    font-size: 150%;
    margin-bottom: -40px;
    margin-top: -40px;
    text-shadow: 2px 2px #fff;
}

#inside {
    height: 70%;
    max-height: 90%;
    width: 90%;
    max-width: 90%;
    border-radius: 15px;
    border: 4px double #000;
    display: flex;
  align-items: center;
    flex-direction: column;
  justify-content: center;
    overflow: scroll;
    background-color: RGB(255, 255, 255, 0.3);
}

#sentList {
    overflow:auto;
    margin: 0px;
    margin-left: 0px;
    padding-left:0px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Crimson Text', serif;
    font-size: 1.1rem;
}

#sent {
  text-shadow: none;
  width: 90%;
  /* height: 58%; */
  /* border: 1px solid #fff; */
  padding: 5px;
  margin: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: RGB(0, 0, 0);
}
</style>
