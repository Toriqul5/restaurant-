import React from 'react';


const RestaurantMap = () => {
  const Card = [
    {
      name: 'The melt',
      rating: 3.5,
      reviews: 334,
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      image: 'siam1.png', // replace with actual image URLs
    },
    {
      name: 'Lokma',
      rating: 5.0,
      reviews: 253,
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      image: 'siam1.png', 
    },
    {
      name: 'The sun',
      rating: 4.5,
      reviews: 654,
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      image: 'siam.png', 
    },
   
    
  ];

  return(
    <section className='p-6 '>

      <h1 className='text-[32px] text-[#1E1E1E] text-start p-8 font-bold pb-4 md:pl-28'>Also discover...</h1>
      <div className='md:flex justify-center items-center gap-x-5 pr-7'>

        {
          Card.map((Item, index) => {
            return (
              <div key={index} className='gap-x-3'>
                <img src={Item.image} alt="" className='pb-3 '/>
                <h3 className='text-[22px] font-bold text-[#232323]'>{Item.name}</h3>
                <p className='lg:w-[257px] w-[180px] text-[16px] text-[#8F8F8F]'>{Item.description}</p>
                <div className='flex gap-x-3 pt-3'>
                    <img src="star.png" alt="" />
                  <p> {Item.rating}</p>
                  <p> {Item.reviews} (reviews) </p>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default RestaurantMap;
