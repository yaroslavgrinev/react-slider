import React from 'react'

const _Description = ({ data }) => {
  const {name, position, description} = data
  console.log('_Description', name);
  return (
    <section className='description'>
      <h3>{name}</h3>
      <div>{position}</div>
      <div>{description}</div>
    </section>
  )
}

export default _Description