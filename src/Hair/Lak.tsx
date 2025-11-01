import "../Toys/gnomiki.css"
import { Toy_Card } from "../Toys/toy_card"
export const arr_l=[{
 id:1,
 img:"https://i.postimg.cc/tJJvh5JV/photo-2025-06-02-16-45-58.jpg"
},
{
    id:2,
    img:"https://i.postimg.cc/YC0gMsVF/photo-2025-06-02-16-46-07.jpg"
},
{
    id:3,
    img:"https://i.postimg.cc/pdZtCsW0/photo-2025-06-02-16-46-10.jpg"
},
{
    id:4,
    img:"https://i.postimg.cc/BnZW6xcH/photo-2025-06-02-16-46-16.jpg"
},
{
    id:5,
    img:"https://i.postimg.cc/rF8ZCq0L/photo-2025-06-02-16-46-22.jpg"
},
{
    id:6,
    img:"https://i.postimg.cc/XNgQvt21/photo-2025-06-02-16-46-38.jpg"
},
{
    id:7,
    img:"https://i.postimg.cc/rygNTxmv/photo-2025-06-02-16-46-42.jpg"
},
{
    id:8,
    img:"https://i.postimg.cc/RFdKMxMc/photo-2025-06-02-16-46-46.jpgs"
}


]

export const Lak=()=>{
    return(
<section className="gnom">
<div className="container">
    <div className="row flx1 ">

  
        {
                
                arr_l.map((item)=>
          <Toy_Card arr={item} />
                )
            }
</div>
  </div>

        
</section>
    )
    
}