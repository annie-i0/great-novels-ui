import React from 'react'

const GreatNovel = ({ id, title, author}) => (
  <div key={id} className="novel">
    {`${title} (${author})`}
  </div>
)

export default GreatNovel