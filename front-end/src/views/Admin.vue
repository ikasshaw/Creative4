<template>
  <div class="admin">
    <h2>Add Or Edit A Project</h2>
    <div class="heading">
      <h3>Add an Item</h3>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title" />
        <p></p>
        <textarea v-model="description" placeholder="Description" />
        <p></p>
        <input type="file" name="photo" @change="fileChanged" />
        <p></p>
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h3>{{ addItem.title }}</h3>
        <p>{{ description }}</p>
        <img :src="addItem.path" />
      </div>
    </div>
    <p></p>
    <p></p>
    <div class="heading">
      <h3>Edit/Delete an Item</h3>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search" />
        <div class="suggestions" v-if="suggestions.length > 0">
          <div
            class="suggestion"
            v-for="s in suggestions"
            :key="s.id"
            @click="selectItem(s)">
            {{ s.title }}
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.title" />
        <p></p>
        <textarea id="editDescription" v-model="findItem.description" />
        <p></p>
        <img :src="findItem.path" />
      </div>
      <p></p>

      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div>

    <h2>Contacts</h2>

    <div class="contacts" v-for="contact in contacts" :key="contact.id">
      <Contact :contact="contact"></Contact>
      <button v-bind:key="contact.id" @click="deleteContact(contact)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Contact from '../components/Contact';
export default {
  name: 'Admin',
  data() {
    return {
      title: '',
      file: null,
      addItem: null,
      contacts: [],
      projects: [],
      findTitle: '',
      findItem: null,
      description: '',
      buttonId: '',
    };
  },

  components: {
    Contact,
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
        let r2 = await axios.post('/api/project', {
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
        let response = await axios.get('/api/contact');
        this.contacts = response.data;
        response = await axios.get('/api/project');
        this.projects = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(project) {
      this.findTitle = '';
      this.findItem = project;
    },
    async deleteItem(item) {
      try {
        await axios.delete('/api/project/' + item._id);
        this.findItem = null;
        await this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put('/api/project/' + item._id, {
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
    async deleteContact(item) {
      try {
        await axios.delete('/api/contact/' + item._id);
        this.findItem = null;
        await this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    suggestions() {
      let items = this.projects.filter(item =>
        item.title.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return items.sort((a, b) => a.name > b.name);
    },
  },
};
</script>

<style scoped>
.admin {
  display: flex;
  flex-direction: column;
  align-content: center;
  /*justify-content: center;*/
  align-items: center;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
  flex-direction: column;
  /*justify-self: center;*/
  justify-content: center;
  width: 75%;
  margin-bottom: 30px;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25em;
  width: 100%;
  height: fit-content;
}

button {
  background-color: #afecaf;
  border: 0;
  padding: 5px;
  height: 45px;
  border-radius: 3px;
}

.upload {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.upload h2 {
  margin: 0;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  /*width: 200px;*/
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #58a4b0;
  color: #fff;
}

.actions button:first-child {
  background-color: #d64933;
}

.actions button {
  width: 33%;
}

.actions {
  display: flex;
  justify-content: space-evenly;
  height: 30px;
}

#editDescription {
  min-height: 200px;
}

textarea::-webkit-scrollbar {
  width: 5px;
  resize: vertical;
  background-color: transparent;
}

.contacts {
  width: 90%;
  padding: 5px;
  border: #777777 2px solid;
  margin: 5px;
}
.contacts button {
  background-color: #d64933;
}
</style>
