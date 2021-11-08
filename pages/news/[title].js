function newsList({list}){
    return(
        <div>
        {
            list.map(list=>{
              return(
                  <div>
                  <div>{list.id}</div><br/>
                  <div>{list.title}</div><br/>
                  <div>{list.price}</div><br/>
                  <div>{list.description}</div>
                  </div>
              )
            })
        }
         
        </div>
    )
}

export default newsList;



export async function getServerSideProps(context){
    const {params} = context;
    const response = await fetch(`http://localhost:4000/news?title=${params.title}`);
    const data = await response.json();

    return{
        props:{
          list: data,
          
        },
    }

}