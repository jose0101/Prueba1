import { createStore } from 'vuex'

import tabla from "../modules/Prueba2/tabla";
const store = createStore({
    modules:{
        tabla,
    }

})

export default store
