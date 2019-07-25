<template>
    <v-container fluid fill-height text-xs-center>
        <v-layout align-center justify-center>
            <v-flex xs6>
                <h1 class="display-2 mb-5 font-weight-thin">Send me an email</h1>
                <form>
                    <v-text-field
                        v-model="name"
                        v-validate="'required|max:10'"
                        :counter="10"
                        :error-messages="errors.collect('name')"
                        label="Name"
                        data-vv-name="name"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        v-validate="'required|email'"
                        :error-messages="errors.collect('email')"
                        label="E-mail"
                        data-vv-name="email"
                        required
                    ></v-text-field>
                    <v-textarea
                        v-model="message"
                        v-validate="'required'"
                        :error-messages="errors.collect('message')"
                        label="Your message"
                        data-vv-name="message"
                        required
                    ></v-textarea>
                    <v-btn @click="submit" class="mt-5" color="#1565C0">submit</v-btn>
                    <v-btn @click="clear" class="mt-5" color="#1565C0">clear</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn to="/" class="mt-3" color="#E53935">
                        <v-icon left>arrow_back</v-icon>
                        Back to main Page
                    </v-btn>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import axios from 'axios';

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      email: '',
      message: '',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
        },
        custom: {
          name: {
            required: () => 'Name cannot be empty',
            max: 'The name field may not be greater than 10 characters'
          },
          message: {
              required: () => 'Message cannot be empty'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary);
    },

    methods: {
      submit () {
        this.$validator.validateAll()
          .then(result => {
            if (!result) {
              alert('Oops! Something went wrong.');
              return;
            }
            axios.post('https://immense-ridge-25248.herokuapp.com/', { 
                name: this.name, 
                email: this.email, 
                message: this.message 
            })
            .then(response => {
              if (response.data.msg === 'success') {
                alert('Message sent!');
                this.clear();
              } else if (response.data.msg === 'fail') {
                alert('Message failed to send.');
              }
            });
          })
      },
      clear () {
        this.name = '';
        this.email = '';
        this.message = '';
        this.$validator.reset();
      }
    }
  }
</script>