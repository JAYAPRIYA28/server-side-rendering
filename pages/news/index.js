function News({news}){
    return(
        <div>
            News List
            {
                news.map(news=>{
                    return(
                    <div>{news.title}</div>
                    )
                })
            }
        </div>
    )
}

export default News;

export async function getServerSideProps(){
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json();

    return{
        props:{
            news:data,
        }
    }
}