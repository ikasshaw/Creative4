<template>
  <div>
    <h2>Contact</h2>
    <div class="contact-methods">
      <div class="prefmethod">
        <p>
          The best method of contacting me is through email at
          <a href="mailto: isaacshaw1@gmail.com">isaacshaw1@gmail.com</a>.
          Otherwise, feel free to look at my Github or LinkedIn profile linked
          below!
        </p>
      </div>

      <div class="methods">
        <a target="_blank" href="https://www.linkedin.com/in/shawisaac"
          ><img src="../../src/assets/images/LI-In-Bug.png" alt="LinkedIn Icon"
        /></a>

        <a target="_blank" href="https://github.com/ikasshaw"
          ><img
            src="../../src/assets/images/GitHub-Mark-120px-plus.png"
            alt="Github icon"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
};
</script>

<style scoped>
.contact-methods {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-content: space-around;
  justify-content: space-around;
}

.prefmethod {
  display: flex;
  margin-top: 30%;
  width: 90%;
  align-self: center;
  text-align: center;
  justify-content: center;
  align-content: center;
}

.prefmethod a {
  text-decoration: none;
  color: #58a4b0;
}

.methods {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  align-content: center;
  justify-content: center;
  background-color: #e6e8e6;
  margin-bottom: 10vh;
}

.methods a {
  align-self: center;
  justify-self: center;
}

.methods img {
  max-width: 60px;
  align-content: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .prefmethod {
    margin-top: 10%;
  }

  .methods {
    width: 100vw;
  }

  select {
    width: 12vw;
  }
}
</style>
