<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs12>
                <h2 class="display-3 mb-3 font-weight-regular space"
                    style="color: #cacaca; letter-spacing: 3px;">Omar Flores Quintana</h2>
            </v-flex>
            <vue-typer 
                text="< Curiosity-Driven Development />"
                caretAnimation="phase"
                pre-type-delay='1500'
                type-delay='100'>
            </vue-typer>
            <v-flex xs12>
                <v-chip color="light-blue" text-color="white" style="width: 60px; height: 6px;"></v-chip>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs6 mt-5 mr-3>
                <v-card color="primary">
                    <v-card-text>
                        <h2 class="display-4">
                            <i class="fas fa-flask text-md-center"></i>
                        </h2>
                    </v-card-text>
                </v-card>
                <v-card color="warning" class="mt-4">
                   <v-card-text>
                       <h2 class="display-4">
                            <i class="far fa-file-alt"></i>
                        </h2>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6 mt-5>
                <v-card color="success">
                    <v-card-text>
                        <h2 class="display-4">
                            <i class="fab fa-github"></i>
                        </h2>                    
                    </v-card-text>
                </v-card>
                <v-card color="error" class="mt-4">
                    <v-card-text>
                        <h2 class="display-4">
                            <i class="fas fa-address-card"></i>
                        </h2>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    
</template>

<script>
import  { VueTyper } from 'vue-typer';

export default {
    components: {
        VueTyper
    }
}
</script>

<style scoped lang="scss">
    .vue-typer {
        font-size: 2rem;
        font-family: 'Courier New', Courier, monospace;
        

         /deep/ .custom.char {

             &.typed { 
                color: #cacaca;
             }
        } 

        /deep/ .custom.caret {
            background-color: rgb(202, 202, 202);
            width: 1rem;
            height: 3px;
            margin-top: 2.2rem;
            visibility: visible;
            opacity: 1;

            &.complete {
                display: inline-block;
            }
        }
    }



    .square {
      width: 10rem;
      height: 10rem;
      background-color: #FF6867;
    }

  .big {
    padding: 3rem;
  }

  .space {
      letter-spacing: 15px;
  }
</style>
