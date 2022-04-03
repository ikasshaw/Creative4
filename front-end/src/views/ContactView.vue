<template>
  <div>
    <h2>Contact</h2>
    <div class="contact-methods">
      <ContactMeForm></ContactMeForm>

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
import axios from 'axios';
import ContactMeForm from '../components/ContactMeForm';
export default {
  name: 'ContactView',
  components: {
    ContactMeForm,
  },

  data() {
    return {
      title: '',
      file: null,
      addItem: null,
      items: [],
      findTitle: '',
      findItem: null,
      description: '',
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name);
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title,
          description: this.description,
          path: r1.data.path,
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get('/api/items');
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = '';
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete('/api/items/' + item._id);
        this.findItem = null;
        await this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put('/api/items/' + item._id, {
          title: this.findItem.title,
          description: this.findItem.description,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item =>
        item.title.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return items.sort((a, b) => a.title > b.title);
    },
  },
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
