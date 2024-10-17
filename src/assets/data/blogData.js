// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "The best way to drive cars",
    author: "Binod Chaudhary",
    date: "12 june, 2024",
    time: "9pm",
    imgUrl: img01,
    description:
      " Driving a car is not just about getting from one place to another; it's an experience that combines freedom, convenience, and joy. The best way to drive is to prioritize safety and awareness on the road. Always wear your seatbelt, adhere to speed limits, and stay alert for pedestrians and other vehicles. Familiarize yourself with your car's controls and features to enhance your driving experience. Whether you're navigating city streets or cruising on highways, practicing defensive driving helps anticipate potential hazards and keeps you and others safe.Additionally, choose routes that not only get you to your destination but also allow you to enjoy the scenery. Regular maintenance of your vehicle, such as checking tire pressure and oil levels, ensures smooth driving. Lastly, embrace the journey by listening to your favorite music or podcasts.",
    quote:
      " With the right mindset and precautions, driving can be a delightful part of your daily routine. Enjoy the ride!",
  },

  {
    id: 2,
    title: "If your car battery is down", 
    author: "Subhan",
    date: "12 Dec, 2023",
    time: "9pm",
    imgUrl: img02,
    description:
      " If your car battery is down, first check for signs such as dim headlights or clicking sounds when starting the engine. Ensure your car is safely parked and turn off all electrical components. If you have jumper cables and another vehicle, you can jump-start the battery by connecting the positive terminal of the dead battery to the positive terminal of the working battery, and then connecting the negative terminal of the working battery to a metal surface on the dead car. If jump-starting doesn’t work, the battery may need replacement. Frequent battery issues could indicate an alternator problem, so consider consulting a mechanic. Regular maintenance, like checking battery health and cleaning terminals, can help prevent future issues.",
    quote:
      "so consider consulting a mechanic. Regular maintenance, like checking battery health and cleaning terminals, can help prevent future issues.",
  },

  {
    id: 3,
    title: "The best way to give trip",
    author: "Rajan",
    date: "12 july, 2024",
    time: "9pm",
    imgUrl: img03,
    description:
      " Planning the best trip requires careful consideration and organization. First, define your destination and the duration of your trip, considering factors like climate and local events. Create a detailed itinerary that includes must-see attractions, activities, and dining options, allowing for flexibility to explore. Research transportation options, whether by car, plane, or public transport, to ensure a smooth journey. Pack efficiently by making a list of essentials based on the weather and planned activities. Consider booking accommodations in advance to secure the best rates and locations. Finally, stay connected with local maps or travel apps for navigation and tips. Embrace spontaneity and enjoy the experience, capturing moments along the way to create lasting memories.",
    quote:
      " Embrace spontaneity and enjoy the experience, capturing moments along the way to create lasting memories.",
  },
];

export default blogData;
