<template>
  <div>
    <whppt-input v-model="listId" label="Create Send List ID" />
    <whppt-button class="md-primary md-raised" @click="saveSettings">Save</whppt-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import WhpptInput from '@whppt/nuxt/lib/components/ui/Input.vue';
import WhpptButton from '@whppt/nuxt/lib/components/ui/Button.vue';

export default {
  name: 'WhpptCreateSendSiteSetting',
  components: { WhpptInput, WhpptButton },
  props: { settings: { type: Object, default: () => ({}) } },
  data: () => ({
    listId: '',
  }),
  computed: {
    ...mapState('whppt-nuxt/site', ['siteSettings']),
  },
  mounted() {
    console.log(this.settings);
    this.loadSiteSettings().then(siteSettings => {
      if (siteSettings.subscriptionListId) this.listId = siteSettings.subscriptionListId;
    });
  },
  methods: {
    ...mapActions('whppt-nuxt/site', ['saveSiteSettings', 'loadSiteSettings']),
    saveSettings() {
      this.saveSiteSettings({ siteSettings: { ...this.siteSettings, subscriptionListId: this.listId } });
    },
  },
};
</script>
