import React from 'react'

const Add = (myTitle , myImg ,myRate , handleAdd ,myDescription ) => {
    console.log(myTitle)

  return (
    <div>
<input type="text" placeholder='title' ref={myTitle} />
<input type="text" placeholder='img' ref={myImg} />
<input  type= "number" placeholder='rate' ref={myRate} />
<input type="text" placeholder='description' ref={myDescription} />

<button onClick={handleAdd}>add movie</button>

    </div>
  )
}

export default Add