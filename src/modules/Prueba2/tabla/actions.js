import  prueba2Api  from "@/api/prueba2Api"


export const loadEntries = async ( {commit}) => {
    const {data} = await prueba2Api.get('/entries.json')
    //console.log(data)
    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
        //console.log(entries)
    }
    commit('setEntries', entries )
}

export const updateEntry = async ({ commit }, entry) => {  // entry debe de ser un parámetro

    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const resp = await prueba2Api.put( `/entries/${ entry.id }.json`, dataToSave )

    dataToSave.id = entry.id

    // Commit de una mutation -> updateEntry
    commit('updateEntry', { ...dataToSave })
}


export const createEntry = async ({ commit }, entry ) => {

    // dataToSave
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const { data } = await prueba2Api.post( `entries.json`, dataToSave )

    dataToSave.id = data.name

    commit('addEntry', dataToSave )

    return data.name

}


export const deleteEntry = async ({ commit }, id ) => {

    await prueba2Api.delete(`/entries/${ id }.json`)
    commit('deleteEntry', id)

    return id
}