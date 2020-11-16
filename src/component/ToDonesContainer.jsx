import React from 'react'

export default function ToDonesContainer({toDones, updateItem}) {

/* in this component we used third method to pass props, by writing the name of the defined props directly instead of "props"  */

    return (
        <div className='todones-container'>
            <h3>BACKLOG</h3>
            {toDones.map(toDone=>{
                return(
                    <div className='todones-item' key={toDone.id}>
                        <p>{toDone.text}</p>
                        <div className='actions'>
                            <button 
                                className='btn' onClick={()=> updateItem(toDone.id)}> &#8635;
                            </button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}
