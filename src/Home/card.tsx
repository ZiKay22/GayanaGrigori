import "./home.min.css"
export const Card=()=>{
    return(
<section className="card_sec">
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active ">
        <div className="d-flex justify-content-center">
           <img src="https://i.postimg.cc/RhJFtkfn/photo-2025-05-31-14-58-53.jpg" className="d-block " alt="..." height={600}/>   
        </div>
    
    </div>
       <div className="carousel-item">
        <div className="d-flex justify-content-center">
            <img src="https://i.postimg.cc/RZH2F4W5/photo-2025-06-02-17-58-17.jpg" className="d-block " alt="..." height={600}/>
        </div>
      
    </div>
       <div className="carousel-item">
        <div className="d-flex justify-content-center">
            <img src="https://i.postimg.cc/qB1PD1PY/photo-2025-06-02-17-58-15.jpg" className="d-block " alt="..." height={600}/>
        </div>
      
    </div>
    <div className="carousel-item">
        <div className="d-flex justify-content-center">
            <img src="https://i.postimg.cc/fb7gzyrV/photo-2025-05-31-15-03-24.jpg" className="d-block " alt="..." height={600}/>
        </div>
      
    </div>

    <div className="carousel-item">
        <div className="d-flex justify-content-center">
           <img src="https://i.postimg.cc/13svWstP/photo-2025-05-31-15-08-41.jpg" className="d-block" alt="..." height={600}/>   
        </div>
    
    </div>
        <div className="carousel-item">
        <div className="d-flex justify-content-center">
           <img src="https://i.postimg.cc/K8fJwwkT/photo-2025-05-31-15-08-35.jpg" className="d-block" alt="..." height={600}/>   
        </div>
    
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
    )

}