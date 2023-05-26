import React from 'react'

const Filter = ({onFilterChange, category, filter, onSortChange}) => {

  return (
    <> 
    <h3 className='hogText'>Filter by Greased Status</h3>
    <select value={category} onChange={(e)=>onFilterChange(e.target.value)} className='filterWrapper'>
        <option value="All">All</option>
        <option value="greased">greased</option>
        <option value="not-greased">not-greased</option>
    </select>

    <div className='sort' >
        <p>Sort by Weight or Name</p>
        <select value={filter} onChange={(e)=>onSortChange(e.target.value)}>
            <option value="All">All</option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
        </select>
    </div>
    </>
  )
}

export default Filter