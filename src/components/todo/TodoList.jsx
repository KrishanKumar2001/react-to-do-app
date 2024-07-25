import React, { Fragment } from 'react'

const TodoList = ({items,handleDelete,handleUpdate}) => {
  console.log(items);
  return (
    <section className='todo'>
           <h2>Courses</h2>
           <table>
            <thead>
                 <th>Id</th>
                 <th>Course</th>
                 <th>Trainer</th>
                 <th>Edit</th>
            </thead>
            <tbody>
              {
                items.length>0 && items.map((obj)=>{
                  return(
                     <Fragment key={obj.id}>
                         <tr>
                             <td>{obj.id.slice(0,4)}</td>
                             <td>{obj.course}</td>
                             <td>{obj.trainer}</td>
                             <td className='edit-buttons'>
                                <button className='update' onClick={()=>{handleUpdate(obj.id)}}>Update</button>
                                <button className='delete' onClick={()=>handleDelete(obj.id)}>Delete</button>
                             </td>
                         </tr>
                     </Fragment>
                  )
                })
              }
                {/* {
                 items.length>0 && items.map(({id,course,trainer})=>{
                    return <Fragment key={id}>
                             <tr key={id}>
                                 <td>{id}</td>
                                 <td>{course}</td>
                                 <td>{trainer}</td>
                             </tr>
                    </Fragment>
                  })
                } */}
            </tbody>
           </table>
    </section>
  )
}

export default TodoList