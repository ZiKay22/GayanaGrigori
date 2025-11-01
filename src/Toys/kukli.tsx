import "./gnomiki.css"
import { Toy_Card } from "./toy_card"
export const arr_k=[{
 id:1,
 img:"https://i.postimg.cc/13svWstP/photo-2025-05-31-15-08-41.jpg"
},
{
    id:2,
    img:"https://i.postimg.cc/T358nntF/photo-2025-05-31-16-22-23.jpg"
},
{
    id:3,
    img:"https://i.postimg.cc/X7Xp5Dd8/photo-2025-05-31-16-16-16.jpg"
},
{
    id:4,
    img:"https://i.postimg.cc/MTDgz5GM/photo-2025-05-31-16-23-09.jpg"
},
{
    id:5,
    img:"https://i.postimg.cc/FHdpTp5b/photo-2025-05-31-16-17-54.jpg"
},
{
    id:6,
    img:"https://i.postimg.cc/Z0kn4Jn5/photo-2025-05-31-16-18-40.jpg"
},
{
    id:7,
    img:"https://i.postimg.cc/DZ2YpGc2/photo-2025-05-31-16-24-09.jpgs"
},
{
    id:8,
    img:"https://i.postimg.cc/fb7gzyrV/photo-2025-05-31-15-03-24.jpg"
},
{
    id:9,
    img:"https://i.postimg.cc/Qtrf9TzQ/photo-2025-05-31-16-17-27.jpg"
}



]

export const Barbi=()=>{
    return(
<section className="gnom">
<div className="container">
    <div className="row flx1 ">

  
        {
                
                arr_k.map((item)=>
          <Toy_Card arr={item} />
                )
            }
</div>
  </div>

        
</section>
    )
    
}