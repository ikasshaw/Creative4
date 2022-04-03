<template>
  <div class="projects">
    <h2 class="pageTitle">Projects</h2>
    <ProjectList />
  </div>
</template>

<script>
import ProjectList from '../components/ProjectList';
// import axios from 'axios';
export default {
  name: 'ProjectsView',
  components: {
    ProjectList,
  },
  // created() {
  //   this.getItems();
  // },
  // methods: {
  //   async getItems() {
  //     try {
  //       let response = await axios.get('/api/project');
  //       this.contacts = response.data;
  //       return true;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },
  // computed: {
  //   projects() {
  //     return this.$root.$data.projects;
  //   },
  // },
};
</script>

<style scoped>
.projects::-webkit-scrollbar {
  scrollbar-base-color: black !important;
  width: 0 !important;
}
</style>
