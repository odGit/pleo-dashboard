import React from 'react'
import { useAppContext } from '../Context'

const Collection = () => {
  const [state] = useAppContext()
  const expenses = state.data

  return (
    <div className='collection'>
      {expenses.map((expense) => (
        <p key={expense.id}>{expense.merchant}</p>
      ))}
    </div>
  )
}

export default Collection
