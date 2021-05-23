import React from 'react'

const SearchBox = ({searchField, inputSearch}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--grean bg-lightest-blue' type='search' placeholder='Type your bot' onChange={inputSearch}></input>
        </div>
        
    )
}

export default SearchBox