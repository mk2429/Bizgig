import React,{useState} from 'react';

export default function ReviewCard() {
    const [Allreview] = useState([
        {
          id: 1,
          name: 'Wazir Alam',
          review: 'Great service! Had an amazing experience with their Web Development team. They built a responsive and user-friendly website for my business.',
          imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small_2x/young-boy-indian-student-portrait-photo.jpg',
        },
        {
          id: 2,
          name: 'Aman Chaudhary',
          review: 'The App Development team did an excellent job! They created a custom mobile app that has significantly improved my business efficiency.',
          imageUrl: 'https://i.pinimg.com/736x/dd/b2/02/ddb20201727b7b4e5178431058a20869.jpg',
        },
        {
          id: 3,
          name: 'Shantanu',
          review: 'Digital Marketing services are top-notch! They boosted my online presence with targeted campaigns that connected with my audience.',
          imageUrl: 'https://images.pexels.com/photos/2085717/pexels-photo-2085717.jpeg?cs=srgb&dl=pexels-jigar-2085717.jpg&fm=jpg',
        },
        {
          id: 4,
          name: 'Ansh Srivastav',
          review: 'Graphics Design team delivered impactful designs for my posters and cards. They truly captivated my audience and strengthened my brand.',
          imageUrl: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: 5,
          name: 'Muskan Agarwal',
          review: 'Humne apni website banwane ke liye inki service li, aur sach kahun toh result lajawab hai! Website itni smooth aur fast hai ki customers bhi impress ho gaye. Bahut badhiya kaam kiya hai!',
          imageUrl: 'https://t3.ftcdn.net/jpg/08/14/25/28/360_F_814252814_bK3CuxthbPNGtgDKXoyJYQkZgkkyPbBI.jpg',
        },
        {
          id: 6,
          name: 'Anjali Sharma',
          review: 'Mujhe ek professional aur mobile-friendly website chahiye thi, aur inhone ekdum perfect bana ke di! Site fast bhi hai aur dikhne me bhi zabardast h.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DCs0RF4l146RPy1fxiLnhtAd411t4Ptv6A&s',
        },
        {
          id: 7,
          name: 'Vikram Patel',
          review: 'बहुत बढ़िया सेवा! Web Development टीम ने मेरी वेबसाइट को बहुत ही प्रोफेशनल और यूजर-फ्रेंडली बनाया। धन्यवाद!',
          imageUrl: 'https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?cs=srgb&dl=pexels-ravi-k-301762-938639.jpg&fm=jpg',
        },
      ]);
  return (
    <div className="review p-4 w-70">
      <div className="reviewContainer rounded">
        <div className="blogCardContainer d-flex flex-nowrap gap-3 overflow-auto p-3" style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          {Allreview.map((review, index) => (
            <div key={index} className="cardStyle card shadow-sm rounded-3 p-2 d-flex flex-column align-items-center" style={{ minWidth: '200px', maxWidth: '200px' }}>
              <div className="circleStyle rounded-circle overflow-hidden shadow-sm" style={{ width: '80px', height: '80px', marginBottom: '8px' }}>
                <img src={review.imageUrl} alt="User" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <p className="reviewTextStyle text-center w-100" style={{ fontSize: '10px', color: 'black' }}>{review.review}</p>
              <h6 className="headingStyle text-center text-muted" style={{ fontSize: '1.2rem' }}>{review.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}