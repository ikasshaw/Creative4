<template>
  <div>
    <div class="wrapper">
      <p class="description">Name:</p>
      <p class="content">{{ contact.name }}</p>
    </div>
    <div class="wrapper">
      <p class="description">Email:</p>
      <p class="content">{{ contact.email }}</p>
    </div>
    <div class="wrapper">
      <p class="description">Subject:</p>
      <p class="content">{{ contact.subject }}</p>
    </div>
    <div class="wrapper">
      <p class="description">Message:</p>
      <p class="content">{{ contact.message }}</p>
    </div>
    <div class="wrapper">
      <p class="description">Date:</p>
      <p class="content">{{ readableDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    contact: {
      name: '',
      email: '',
      date: Date,
      message: '',
    },
  },

  computed: {
    readableDate() {
      return new Date(this.contact.date).toDateString();
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
  height: auto;
}

.description {
  width: 80px;
}

.content {
  max-width: 85%;
  overflow: auto;
  margin: 0;
}
</style>
