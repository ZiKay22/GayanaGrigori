import "./gnomiki.css"
type CardItem = {
  id: number;
  img: string;
};

export const Toy_Card=({arr}:{arr:CardItem})=>{
    return(


  
        
                
                <div key={arr.id} className="cg col-lg-3 col-12" >
  <img src={arr.img} className="c-img" alt="..."/>
</div>
             

    )
    
}