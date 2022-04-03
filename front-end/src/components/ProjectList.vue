<template>
  <div class="wrapper">
    <div class="projects">
      <div class="project" v-for="project in projects" :key="project.id">
        <p class="project-title">{{ project.title }}</p>
        <img class="image" :src="project.path" />
        <p class="project-description">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProjectList',
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get('/api/project');
        this.projects = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.project-title {
  padding-top: 40px;
  font-size: 1.5em;
}

.project-description {
  padding-top: 20px;
  color: #acacac;
}

.image {
  max-width: 390px;
  border-radius: 5px;
}

@media (min-width: 768px) {
  .project {
    width: 65%;
  }

  .image {
    height: 360px;
    object-fit: contain;
  }
}
</style>
