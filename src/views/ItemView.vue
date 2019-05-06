<template>
  <div>
    <section class="sec item">
      <div class="user-container">
        <i class="fas fa-user-circle"></i>
        <div class="user-desc">
          <router-link :to="'/user/' + userName">{{ userName }}</router-link>
          <p class="time">{{ userTimeAgo }}</p>
        </div>
      </div>
      <h1 class="q-tit">{{ userQuestion }}</h1>
      <div class="q-content" v-html="fetchedItem.content"></div>

        <!-- <div>
        <section class="header-container">
          <div class="user-container">
            <div>
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="user-description">
              <router-link :to="'/user/' + userName">{{ userName }}</router-link>
              <div class="time">{{ userTimeAgo }}</div>
            </div>
          </div>
          <h2>{{ userQuestion }}</h2>
        </section>
        <section>
          <div v-html="userContent" class="content"></div>
        </section>
      </div> -->
    </section>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['fetchedItem']),
      userName() {
        return this.fetchedItem.user;
      },
      userTimeAgo() {
        return this.fetchedItem.time_ago;
      },
      userQuestion() {
        return this.fetchedItem.title;
      },
      userContent() {
        return this.fetchedItem.content;
      },
    },
    created() {
      const itemId = this.$route.params.id;
      this.$store.dispatch('FETCH_ITEM', itemId)
        .then(() => console.log('sucess'))
        .catch(() => console.log('fail'));
      // fetchItem(itemId)
      //   .then(res => console.log(res))
      //   .catch(error => console.log(error));
    }
  }
</script>

<style lang="scss" scoped>
.sec.item {
  // background: #f6f6ef;
  padding: 5px 10px;
  color: $fg-gray;
  .user-container {
    display: flex;
    align-items: center;
    padding: 15px 0;
    line-height: 1.3;
    font-size: 14px;
    // justify-content: space-between;
    .fa-user-circle {
      // color: #03C2E6;
      margin-right: 10px;
      font-size: 40px;
      color: #FF6500;
    }
  }
  .q-tit {
    margin-bottom: 10px;
  }
  .q-content {
    line-height: 1.3;
    word-break: keep-all;
  }
}
</style>