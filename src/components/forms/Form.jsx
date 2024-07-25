import React from 'react'


const Form = ({course,trainer,handleChange,handleSubmit}) => {
    //console.log(name,trainer,handleChange,handleSubmit)
    

  return (
     
    <div className='form-container'>
       
         <form action="" onSubmit={handleSubmit}>
                  <div className='form-group'>
                       <label htmlFor="name">name</label>
                       <input type="text"  name="course" onChange={handleChange} value={course}   placeholder='Enter course' required/>
                  </div>
                  <div className='form-group'>
                       <label htmlFor="trainer">trainer</label>
                       <input type="text"  name="trainer" onChange={handleChange} value={trainer} placeholder='Enter trainer' required/>
                  </div>
                   
                   
                    <button >submit</button>
                  
                  
         </form>
    </div>
  )
}

export default Form