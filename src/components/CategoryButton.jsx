import React from 'react'

export const CategoryButton = ({ allCategories, filterCategory }) => {
  return (
    <div className='categories'>
      {
        allCategories.map(category => (
          <button className='btn-category'
            key={category} 
            onClick={() => filterCategory(category)} >
            {category}
          </button>
        ))
      }
    </div>

  )
}
