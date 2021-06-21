import React from 'react'

const greatNovel = ({ id, title, authorId}) => (
  <div key={id} className="novel">
    {`${title} (${authorId})`}
  </div>
)

export default greatNovel