import React from 'react'

const GreatNovel = ({ id, title, authorId}) => (
  <div key={id} className="novel">
    {`${title} (${authorId})`}
  </div>
)

export default GreatNovel