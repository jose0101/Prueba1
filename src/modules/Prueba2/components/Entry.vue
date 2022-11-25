
<template>
    <div class="entry-container mb-3 pointer mb-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id }})">
    <table class="table table-hover">
       <thead>
     
            <div class="entry-title d-flex">
                <span class="text-success fs-5 fw-bold">{{ day }}</span>
            </div>
        </thead>
            <tbody>
            
                <tr>
                  <span>{{shortText}}</span>
                 </tr>
              </tbody>
    </table>
    </div>
  </template>
  
  <script>

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    computed: {
        shortText() {
            return ( this.entry.text.length > 30 )
                ? this.entry.text.substring(0,30) + '...'
                : this.entry.text
        },
        day() {
            return ( this.entry.date.length > 30 )
                ? this.entry.date.substring(0,30) + '...'
                : this.entry.date
        },
        month() {
            const date = new Date( this.entry.date )
            return months[ date.getMonth() ]
        },
        yearDay() {
            const date = new Date( this.entry.date )
            return `${ date.getFullYear() }, ${ days[ date.getDay() ] }`
        }
    }
}


  </script>
  
  <style  lang="scss" scoped>

  .entry-container {
    border-bottom: 1px black;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;}
  }
  .izquierda{
      text-align: left;
  }
  .centro{
      text-align: center;
      }
  .derecha{
      text-align: right;
  }
  .entry-scrollarea{
      height: calc(100vh -120px);
      transition: scroll;
      &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;}
  }
</style>