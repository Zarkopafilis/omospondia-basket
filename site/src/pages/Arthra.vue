<template>
  <Layout :title="title">   
    <section>
        <ArthroCard v-for="a in arthra" :key="a.href" :arthro="a"/>
    </section>
    <div class="anchor-pad-bot"/>
  </Layout>
</template>

<script>
import arthra from '~/data/epistimonika.json'
import ArthroCard from '~/components/ArthroCard.vue'

export default {
  name: 'Arthra',
  components: {
    ArthroCard
  },
  data () {
    return {
      arthra,
      title: 'Επιστημονικά Άρθρα'
    }
  },
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:site', content: '@v_ntakouris' },
        { name: 'twitter:creator', content: '@v_ntakouris' }
      ]
    }
  }
}
</script>


<style>
</style>
