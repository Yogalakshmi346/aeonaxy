import React from 'react'

 function Default(props) {
  return (
    <div>
      <h1>this is default</h1>
      <h1>{props.pfname}-{props.plname}-{props.page}</h1>

    </div>
  )
}
Default.defaultProps = {
    pfname:"yoga",
    plname:"priya",
    page:24

}

export default Default
