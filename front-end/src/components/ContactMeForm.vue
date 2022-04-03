<template>
  <div class="contactMe">
    <div class="prefmethod">
      <p>
        Use this form to get in contact or email me at
        <a href="mailto: isaacshaw1@gmail.com">isaacshaw1@gmail.com</a>.
        Otherwise, feel free to look at my Github or LinkedIn profile linked
        below!
      </p>
    </div>

    <div class="description">
      <p>Name</p>
      <input v-model="name" placeholder="Name" />
    </div>
    <p></p>
    <div class="description">
      <p>Email</p>
      <input v-model="email" placeholder="Email" />
    </div>
    <p></p>
    <div class="description">
      <p>Subject</p>
      <input v-model="subject" placeholder="Subject" />
    </div>
    <p></p>
    <div class="description">
      <p>Message</p>
      <textarea v-model="message" placeholder="Message"></textarea>
    </div>
    <p></p>
    <div class="description">
      <p></p>
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      date: null,
      addItem: null,
    };
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async submit() {
      try {
        let r1 = await axios.post('/api/contact', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          date: new Date(),
          message: this.message,
        });
        this.addItem = r1.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.contactMe {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-self: center;
  width: 65%;
}

input {
  background-color: #d6d6d6;
  border: 0;
  height: 30px;
  border-radius: 3px;
  padding: 5px;
}

textarea {
  background-color: #d6d6d6;
  border: 0;
  border-radius: 3px;
  padding: 5px;
}

button {
  background-color: #afecaf;
  border: none;
  border-radius: 3px;
}

.description {
  display: grid;
  grid-template-columns: 1fr 7fr;
  width: 100%;
}

.description p {
}

.prefmethod {
  display: flex;
  width: 90%;
  align-self: center;
  text-align: center;
  justify-content: center;
  align-content: center;
  margin: 20px 0 20px;
}

.prefmethod a {
  text-decoration: none;
  color: #58a4b0;
}
</style>
