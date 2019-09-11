<template>
  <section class="sec item">
    <div class="ask-container">
      <user-profile :user-info="fetchedItem"></user-profile>
      <h1 class="q-tit">{{ userQuestion }}</h1>
      <div class="q-content" v-html="userContent"></div>
    </div>
    <div class="division"></div>
    <div class="comment-container">
      <h2>Comments</h2>
      <div v-for="item in fetchedItem.comments" :key="item.index" class="content">
        <user-profile :user-info="item"></user-profile>
        <div v-html="item.content"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  created() {
    this.$emit('on:progress');
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId)
      .then(() => this.$emit('off:progress'))
      .catch(() => console.log('fail'));
    // fetchItem(itemId)
    //   .then(res => console.log(res))
    //   .catch(error => console.log(error));
  },
  computed: {
    ...mapGetters([
      'fetchedItem', 'userName', 'userTimeAgo', 'userQuestion', 'userContent', 'contentPoints',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.sec.item {
  // background: #f6f6ef;
  padding: 5px 10px;
  line-height: 1.3;
}
.ask-container {

}
.division {
  margin: 20px 0px;
  @include size(100%, 1px);
  background-color: #e9e9e9;
}
.comment-container {
  color: $fg-gray;
  word-break: keep-all;
  h2 {
    margin-bottom: 5px;
    line-height: 1;
  }
  .content {
    padding-left: 10px;
    & + .content {
      margin-top: 15px;
      // padding-top: 15px;
      border-top: 1px solid #e9e9e9;
    }
  }
}
</style>