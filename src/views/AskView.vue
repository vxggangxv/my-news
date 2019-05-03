<template>
    <div>
        <p v-for="ask in this.$store.state.ask" :key="ask.id" class="post">
            <a :href="ask.url">{{ ask.title }}</a>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </p>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_ASK')
            .then(() => console.log('sucess'))
            .catch(() => console.log('fail'));
    }
}
</script>

<style scoped>
.post {
    padding: 5px;
    padding-left: 10px;
    
}
</style>
