


export const getEntriesByTerm = ( state ) => (term='')=> {
   
    if (term.length === 0 ) return state.entries
    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
}


export const getEntryById = ( state ) => ( id = '') => {
    //console.log(id)
    //console.log(state.entries)
    const entry = state.entries.find( entry => entry.id === id )

    //console.log({entry})
    if ( !entry ) return

    return { ...entry } 
}


