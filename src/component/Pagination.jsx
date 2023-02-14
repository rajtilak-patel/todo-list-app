import React from 'react'

const Pagination = ({page, pageChange, todoqty}) => {
  return (
    <div style={{padding:"20px"}}>
        <button disabled={page===1} onClick={()=>pageChange(-1)} style={{padding:"5px 20px ",fontSize:"20px",marginRight:"5px",cursor:"pointer",borderRadius:"8px",color:"black" }}>prev</button>
      <button style={{padding:"5px 20px ",fontSize:"20px",marginRight:"5px",cursor:"pointer",borderRadius:"8px",color:"black" }}>{page}</button>
      {/* <p>{Math.ceil(todoqty/4)}</p> */}
      <button disabled={page===Math.ceil(todoqty/4)} onClick={()=>pageChange(1)} style={{padding:"5px 20px ",fontSize:"20px",marginLeft:"5px",cursor:"pointer",borderRadius:"8px",color:"black"}}>next</button>
    </div>
  )
}

export default Pagination
