<template>
    <Navbar/>

    <div>
        <div>
            <EntryList/>
        </div>
    </div>
    <Footer/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'


export default {
    components: {
        Navbar: defineAsyncComponent(() => import ('../components/Navbar.vue')),
        Footer: defineAsyncComponent(() => import ('../components/Footer.vue')),
        EntryList: defineAsyncComponent(() => import ('../components/EntryList.vue'))
    },
    methods: {
        ...mapActions('tabla', ['loadEntries'])
    },
    computed: {
        ...mapState( 'tabla', ['isLoading'])
    },
    created() {
        this.loadEntries()
    }
}
</script>