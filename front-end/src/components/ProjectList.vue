<template>
  <div class="wrapper">
    <div class="projects">
      <div class="project" v-for="project in projects" :key="project.id">
        <p class="project-title">{{ project.title }}</p>
        <img class="image" :src="'images/' + project.image" />
        <p class="project-description" v-bind="project.description">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    projects: Array,
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
