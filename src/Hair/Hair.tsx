import "../Toys/gnomiki.css"
import { Toy_Card } from "../Toys/toy_card"
export const arr_h=[{
 id:1,
 img:"https://i.postimg.cc/kg8F38KP/photo-2025-06-02-16-17-42.jpg"
},
{
    id:2,
    img:"https://i.postimg.cc/rmh5C9Xx/photo-2025-06-02-16-17-49.jpg"
},
{
    id:3,
    img:"https://i.postimg.cc/CxykN1tP/photo-2025-06-02-16-17-53.jpg"
},
// {
//     id:4,
//     img:"https://i.postimg.cc/4yD7BL87/photo-2025-06-02-16-17-45.jpg"
// }


]

export const Hair=()=>{
    return(
<section className="gnom">
<div className="container">
    <div className="row flx1 ">

  
        {
                
                arr_h.map((item)=>
          <Toy_Card arr={item} />
                )
            }
</div>
  </div>

        
</section>
    )
    
}