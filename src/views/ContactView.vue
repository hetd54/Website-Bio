<template>
  <h1>Contact Me:</h1>
  <div class="contact">
    <div class="center">
      <h2>{{ msg }}</h2>
      <main class="form">
        <form @submit.prevent="submitForm">
          <label for="firstName">First name:</label>
          <input
            type="text"
            class="roundedInput"
            id="firstName"
            name="firstName"
            placeholder="Your name"
            required
            minlength="2"
          />
          <label for="lastName">Last name:</label>
          <input
            type="text"
            class="roundedInput"
            id="lastName"
            name="lastName"
            placeholder="Your last name"
            required
            minlength="2"
          />
          <p id="emailMessage" class="errorMessage">{{ error }}</p>
          <label for="email">Email Address:</label>
          <input
            type="email"
            class="roundedInput"
            id="email"
            name="email"
            placeholder="Your email address"
            v-model="enteredEmail"
            required
          />
          <label for="comment">Message:</label>
          <input
            type="text"
            class="roundedInput"
            id="comment"
            name="comment"
            placeholder="Your message"
            required
          />
          <input id="submit" type="submit" @click="submittedEvent()" />
        </form>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      error: "",
      enteredEmail: "",
    };
  },
  methods: {
    submittedEvent: function () {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(this.enteredEmail)) {
        this.error = "You must enter a valid email!";
        return false;
      } else {
        this.msg = "Your message has been sent!";
        this.error = "";
      }
    },
  },
};
</script>

<style scoped>
.contact {
  margin: 20px;
  display: flex;
  justify-content: center;
  border-top: thick double #e56a49;
}

.errorMessage {
  color: red;
}

.form {
  background-color: #2c3e50;
  color: #eee;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 15px;
  margin: 15px;
}

input,
select {
  background-color: #354758;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  text-align: center;
  outline: 0;
  margin: 5px 0px 15px 0px;
  width: 100%;
  height: 40px;
}
label {
  font-size: 22px;
}
::placeholder {
  color: rgb(195, 192, 192);
  opacity: 1;
}
#submit {
  background-color: #e56a49;
  font-weight: bold;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  height: 50px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
}

#submit:hover {
  background-color: #db917c;
}

#comment {
  height: 5em;
}
</style>
