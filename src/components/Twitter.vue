<template>
  <div id="twit">
    <img
      v-if="canttweet"
      id="iconTransparent"
      src="../assets/twitter-icon-png-12.png"
    >
    <a
      v-else 
      href="#"
      @click="openTweet"
    ><img
      id="icon"
      src="../assets/twitter-icon-png-12.png"
    >
    </a>
  </div>
</template>

<script>
export default {
    name: 'Twitter',
    props: {
        canttweet: Boolean,
        sentence: String
    },
    methods: {
        voidOpen: function () {javascript:void(0)},
        openTweet: function () {
            window.open(`https://twitter.com/intent/tweet?text=${this.sentence.start}+${this.sentence.subject}+${this.sentence.verb}+${this.sentence.adverb}+${this.sentence.prep}`, "Ratting", "width=550, height=270, left=150, top=200, toolbar=0, status=0,");
        }
    }
}
</script>

<style scoped>
#icon {
    max-width: 6%;
}

#iconTransparent {
    opacity: 0.5;
    max-width: 6%;
}

#twit {
    margin-top: -10px;
    margin-bottom: -5px;
}

</style>