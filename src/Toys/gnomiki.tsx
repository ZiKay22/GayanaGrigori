import "./gnomiki.css"
import { Toy_Card } from "./toy_card"
export const arr_g=[{
 id:1,
 img:"https://i.postimg.cc/K8fJwwkT/photo-2025-05-31-15-08-35.jpg"
},
{
    id:2,
    img:"https://i.postimg.cc/tJdMTTTS/photo-2025-05-31-15-25-56.jpg"
},
{
    id:3,
    img:"https://i.postimg.cc/hvK020Ds/photo-2025-05-31-15-27-23.jpg"
},
{
    id:4,
    img:"https://i.postimg.cc/3rPGr15c/photo-2025-05-31-15-28-57.jpg"
},
{
    id:5,
    img:"https://i.postimg.cc/6qLBXBNw/photo-2025-05-31-15-30-43.jpg"
},
{
    id:6,
    img:"https://i.postimg.cc/sf9z1ftC/photo-2025-05-31-15-31-44.jpg"
}

]

export const Gnom=()=>{
    return(
<section className="gnom">
<div className="container">
    <div className="row flx1 ">

  
        {
                
                arr_g.map((item)=>
                    <Toy_Card arr ={item} />
          
                )
            }
</div>
  </div>

        
</section>
    )
    
}