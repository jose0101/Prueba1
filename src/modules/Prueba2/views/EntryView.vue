<template>

    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            
            <div>
                <span class="text-success fs-3 fw-bold">hola</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>
      </div>



    </template>

    <Fab 
        icon="fa-save"
    />

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex' 
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage'
import { getEntryById } from '../tabla/getters'


export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    data() {
        return {
            entry: null,
            localImage: null,
            file: null
        }
    },
    computed: {
        ...mapGetters('tabla', ['getEntryById']), 
        day() {
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }
    },
    methods:{
        loadEntry(){
            const entry= this.getEntryById(this.id)
            if(!entry) this.$router.push({ name: 'entry'})

            this.entry = entry
            //console.log(entry)
        }
    },


    created() {
        // console.log(this.$route.params.id)
        this.loadEntry()
    },

    watch: {
        id() {
            this.loadEntry()
        }
    }



}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>