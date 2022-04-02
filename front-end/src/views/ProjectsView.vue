<template>
  <div class="projects">
    <h2 class="pageTitle">Projects</h2>
    <ProjectList :projects="projects" />
  </div>
</template>

<script>
import ProjectList from '../components/ProjectList';
export default {
  name: 'ProjectsView',
  components: {
    ProjectList,
  },
  computed: {
    projects() {
      return this.$root.$data.projects;
    },
  },
};
</script>

<style scoped></style>
