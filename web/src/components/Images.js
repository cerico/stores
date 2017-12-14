import React from 'react';


const Images = (props) => {

  console.log(props)

  return (
    <div>
    {props.images ? 
      props.images.map((image,i) => <img key={i} src={image.url}/>) 
      : null}
      </div>
  )

}

export default Images