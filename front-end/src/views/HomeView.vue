<template>
  <div class="home-layout">
    <div class="home-chunk">
      <p class="Title-name">Hello. I'm Isaac Shaw</p>
      <p class="short-bio">
        Mechanical Engineering Student at Brigham Young University
      </p>
    </div>
  </div>
</template>

<style scoped>
.home-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.home-chunk {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #e6e8e6;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.home-chunk img {
  width: 100%;
}

.Title-name {
  position: relative;
  text-align: center;
  padding: 15px;
  border: 5px;
  font-size: 3.5em;
}

.short-bio {
  position: relative;
  text-align: center;
  padding: 5px;
  border: 5px;
}

.home-description {
  padding: 30px;
  text-align: center;
  text-justify: auto;
}
</style>
