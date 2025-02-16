import React from "react";
function SmallImg () {
    const Card= [
        {
          img:"img1.png",
          title:"All"
        },
        {
            img:"img2.png",
            title:"Restaurants"
          },
          {
            img:"img3.png",
            title:"Hotels"
          },
          {
            img:"img4.png",
            title:"Home services"
          },
          {
            img:"img5.png",
            title:"Shopping"
          },
          {
            img:"img6.png",
            title:"Beauty & Spas"
          },
          {
            img:"img7.png",
            title:"Car location"
          },
          {
            img:"img8.png",
            title:"Park"
          },
          {
            img:"img9.png",
            title:"museum"
          },
          {
            img:"img10.png",
            title:"Car wash"
          },
          {
            img:"img11.png",
            title:"Bars"
          },
          {
            img:"img12.png",
            title:"Gyms"
          },
    ]
    return(
        <section className="p-4 w-full">
            <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-3  gap-x-6 ml-3 pl-5  w-full ">
           {Card.map((item, index) => (
    <div key={index} className="card">
        <img src={item.img} alt=""/>
        <p className="text-[10px] pt-2"> {item.title}  </p>
    </div>
))}
           
           

            </div>
        </section>
    )
}
export default SmallImg