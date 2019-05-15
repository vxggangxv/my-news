<template>
  <section class="sec user">
    <h1 class="text-hide">User Profile</h1>
    <user-profile :userInfo="fetchedUser">
      <div slot="userName">{{ fetchedUser.id }}</div>
      <span slot="userKarma">{{ fetchedUser.karma }} karma</span>
    </user-profile>
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
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userId)
      .then(() => this.$emit('off:progress'))
      .catch(() => console.log('fail'));
    // fetchUser(userId)
    //   .then(res => console.log(res))
    //   .catch(error => console.log(error));
  },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
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