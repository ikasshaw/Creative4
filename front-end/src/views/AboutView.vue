<template>
  <div class="about">
    <h2 class="customheader">About Me</h2>

    <div class="about-container">
      <img src="../assets/images/headshot.jpg" alt="beautiful kiddo" />

      <p>
        I'm Isaac Shaw and I'm a senior in the mechanical engineering program at
        Brigham Young University. I've always been curious about how things work
        on the inside.
        <br />
        <br />

        My interest lie particularly in mechatronics, prototyping, programming,
        and manufacturing.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 10px;
}

.about-container p {
  padding-top: 20px;
  width: 100%;
}

.about-container img {
  display: flex;
  max-height: 360px;
  max-width: 360px;
}

@media (min-width: 768px) {
  .about-container img {
    max-height: 360px;
    max-width: 360px;
  }

  select {
    width: 12vw;
  }
}
</style>
