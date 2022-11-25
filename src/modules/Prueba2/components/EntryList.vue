<template>
    <div class="entry-table">
        <div class="container izquierda"> 
              <button
                    class="btn btn-primary" 
                    v-on:click="nuevo()" >Nueva Institución
              </button>
              <button class="derecha btn btn-tertiary" > 
                <input 
                type="text"
                class="form-control"
                placeholder="Buscar entrada"
                v-model="term"/>
              </button>

              

              
            
            <div>
                <Entry
                v-for="entry in entriesByTerm"
                :key="entry.id"
                :entry="entry"
              
          
                />
            </div>
            <Fab
              icon="fa-save"
              @on:click="onDeleteEntry"/>
              
        </div>   
                            
       
          <!--            
                
                  
  -->
    </div>
  </template>


<script>
  import { defineAsyncComponent } from '@vue/runtime-core'
  import { mapGetters } from 'vuex';

    export default {
        components: {
           
            Entry: defineAsyncComponent(() => import ('./Entry.vue')),
            Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
        },
        computed:{
          ...mapGetters('tabla', ['getEntriesByTerm']),
          entriesByTerm(){
            return this.getEntriesByTerm(this.term)
          }
        },
        data(){
          return{
            term:''
          }
        },
        methods:{
          async saveEntry(){
            console.log('Guardando..')
          }
        }
        
    }
  
</script>


  <style  lang="scss" scoped>
    .izquierda{
        text-align: left;
    }
    .centro{
        text-align: center;
        }
    .derecha{
        text-align: right;
    }
    .entry-table{
        border-right:1px solid green;
        height: calc(100vh - 56px);
    }
    .entry-scrollarea{
        height: calc(1110vh -0px);
        transition: scroll;
        &:hover{
          background-color: lighten($color: grey, $amount: 45);
          transition: 0.2s  ease-in;}
    }
  </style>