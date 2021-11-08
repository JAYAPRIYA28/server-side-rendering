import { useState} from "react";
import { useRouter } from "next/router";

function Event({users}){

    const [events, setEvent] = useState(users)
    const router = useRouter()

    const fetEvents = async() => {
        const response = await fetch("http://localhost:4000/products?price=100");
    const data = await response.json()
    setEvent(data)
    router.push('/event?price=100', undefined, {shallow: true})
    }
 



    return(
        <div>
        <button onClick={fetEvents} >100</button>
        {events.map(users=>{
            return(
            <div>
            <div>{users.id}</div><br/>
            <div>{users.title}</div><br/>
            <div>{users.price}</div><br/>
            <div>{users.description}</div>

            </div>
            )
            
        })}

        </div>
    )
}

export default Event;

export async function getServerSideProps(context){
    const {query} = context
    const {catagory} = query
    const queryString = catagory ? 'price=100' : '';
    const response = await fetch(`http://localhost:4000/products?${queryString}`);
    const data = await response.json()

    return {
        props: {
            users : data
        },
    }
}