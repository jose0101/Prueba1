export default{
    name: 'Prueba2',
    component: () => import(/* webpackChunkName: "Prueba2" */ '@/modules/Prueba2/layout/Prueba2Layout.vue'),
    children: [
       
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "Prueba2-entry" */ '@/modules/Prueba2/views/EntryView.vue'),
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}