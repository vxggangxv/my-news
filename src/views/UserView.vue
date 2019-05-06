<template>
  <section class="sec user">
    <p class="dl"><span class="dt">ID</span> <span class="dot">:</span> <span class="dd">{{ fetchedUser.id }}</span></p>
    <p class="dl"><span class="dt">Karma</span> <span class="dot">:</span> <span class="dd">{{ fetchedUser.karma }}</span></p>
    <p class="dl"><span class="dt">Joined</span> <span class="dot">:</span> <span class="dd">{{ fetchedUser.created }}</span></p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['fetchedUser'])
    },
    created() {
      const userId = this.$route.params.id;
      this.$store.dispatch('FETCH_USER', userId);
      // fetchUser(userId)
      //   .then(res => console.log(res))
      //   .catch(error => console.log(error));
    }
  }
</script>

<style lang="scss" scoped>
.sec.user {
  // background: #f6f6ef;
  padding: 5px 10px;
  .dl {
    padding: 2.5px 0;
    line-height: 1.5;
    font-size: 14px;
    color: $fg-gray;
    display: flex;
    > span {

    }
    .dt {
      min-width: 60px;
    }
    .dot {
      margin: 0 5px;
    }
    .dd {
      
    }
  }
}
</style>