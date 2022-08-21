import { io } from 'socket.io-client' ;
import React , { useState } from 'react' ;


const socket =  io("http://localhost:8000" , { transports : [ 'websocket']})

export default function Home(){
  const [ name , setName  ] = useState("")
  const handlepost  =( e )=>{
      socket.emit("roomsatu" ,  { post: name })
  }
  const [ list , setList ]  = useState([]); 

  socket.on("dewanipara"  , ( data ) => {
    console.log(data )
    setList([...list , data ])
  })
  var i =0 ;
  return(
    <div>      test
    <br />
    <input type="text"  onChange= { (e) => setName( e.target.value )} />
    <button onClick={ handlepost }>Send comment </button>
    { JSON.stringify(list)}
    <br />
    { list.map((p  ) => (
      <div key={i++}> <li   > { p.post} </li> </div>
      
    ) )  }
    </div>
  )

}