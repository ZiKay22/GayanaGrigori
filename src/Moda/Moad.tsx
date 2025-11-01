import "../Toys/gnomiki.css"
import { Toy_Card } from "../Toys/toy_card"
export const arr_l=[{
 id:1,
 img:"https://i.postimg.cc/FKJFNM47/photo-2025-06-02-17-57-55.jpg"
},
{
    id:2,
     img:"https://i.postimg.cc/RZH2F4W5/photo-2025-06-02-17-58-17.jpg"

},
{
    id:3,
    img:"https://i.postimg.cc/qB1PD1PY/photo-2025-06-02-17-58-15.jpg"
},
{
    id:4,
    img:"https://i.postimg.cc/R0crP4mQ/photo-2025-06-02-17-58-13.jpg"
},
{
    id:5,
    img:"https://i.postimg.cc/1tQSP4Bj/photo-2025-06-02-17-58-09.jpg"
},
{
    id:6,
    img:"https://i.postimg.cc/xdHQWLvm/photo-2025-06-02-17-58-03.jpg"
},
{
    id:7,
    img:"https://i.postimg.cc/GpnVTVDB/photo-2025-06-02-17-58-18.jpg"
},
{
    id:8,
    img:"https://i.postimg.cc/7Z5JJQ4y/photo-2025-06-02-18-06-17.jpg"
},
{
    id:9,
    img:"https://i.postimg.cc/28qKcrFb/photo-2025-06-02-17-58-42.jpg"
},
{
    id:10,
    img:"https://i.postimg.cc/nLDg9K7y/photo-2025-11-01-11-50-48-2.jpg"
},
{
    id:11,
    img:"https://i.postimg.cc/hj0CV2G1/photo-2025-11-01-11-50-51.jpg"
},
{
    id:12,
    img:"https://i.postimg.cc/qRmskSq4/photo-2025-11-01-11-50-52.jpg"
},

{
    id:13,
    img:"https://i.postimg.cc/rs0rqp7n/photo-2025-11-01-11-50-54.jpg"
},

{
    id:14,
    img:"https://i.postimg.cc/4xbW9Jxp/photo-2025-11-01-11-50-55.jpg"
},

]

export const Moda=()=>{
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