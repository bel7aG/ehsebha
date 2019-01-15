import React from 'react'

const EditExpense = ({ match }) => {
  const { params } = match 
  return (
    <div>
      Welcom to expense {params.id}
    </div>  
  )
}

export default EditExpense