import React from 'react'
import SearchInput from './SearchInput'
import SortOrderSelect from './SortOrderSelect'
import SortParameterSelect from './SortParameterSelect'

const Filters = () => {
    return (
        <div className='filters'>
            <div className='search'>
                <label className='search-lbl'>Search</label>
                <SearchInput />
            </div>
            <div className='sort'>
                <label className='sort-lbl'>Sort by</label>
                <SortParameterSelect />
                <SortOrderSelect />
            </div>
        </div>
    )
}

export default Filters
