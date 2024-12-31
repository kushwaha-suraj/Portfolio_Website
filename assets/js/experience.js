AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Full Stack Developer",
    cardImage: "assets/images/experience-page/techahead.jpg",
    place: "TechAhead",
    time: "(Jul, 2024 - Oct, 2024)",
    desp: "At Techahead, I developed and managed REST APIs and handled both backend and frontend development. I worked on key projects like Music Copyright Detection, Music Different Bit Streaming, and an Employee Management System. My tech stack included Node.js, Express, Serverless, and React.",
  },
  {
    title: "Backend Developer Intern",
    cardImage: "assets/images/experience-page/varency.webp",
    place: "Varency",
    time: "(Jun, 2023 - Sep, 2023)",
    desp: "Varency is a cutting-edge file-sharing platform designed to ensure secure and efficient sharing of digital files. During my internship, I focused on backend development, creating and managing robust RESTful APIs, integrating PostgreSQL for reliable data management, and implementing Celery for asynchronous task processing to enhance system scalability and performance.",
  },
  {
    title: "Customer Service Representative",
    cardImage: "assets/images/experience-page/ienergizer_logo.jpg",
    place: "Ienergizer IT Services Limited",
    time: "(Dec, 2021 - Jun, 2022)",
    desp: "Work with Ienergizer gives me a lots of experience includes Customer Handling, Client Handling, Data Handling, Reports Making, Backend Data Manitainig, Email Handling etc. Its gives me lots of Experiences of BPO and MNC Rules and Regualtion. By working Ienergizer i learn a lot about how a MNC work and a professional life in MNC.",
  },
  {
    title: "Customer Service Representative",
    cardImage: "assets/images/experience-page/Cogent-E.jpg",
    place: "Cogent E-Services",
    time: "(Jun, 2021 - Oct, 2021)",
    desp: "Work with Cogent gives me a lots of experience includes Customer Handling, Data Handling, Reports Making etc. Its gives me lots of Experiences of BPO and MNC Rules and Regualtion. By working Cogent i learn a lot about how a MNC work and a professional life and Work Culture in MNC.",
  },
  {
    title: "Graphic Designer",
    cardImage: "assets/images/experience-page/bigstock-Businessman-Holding-Card-With-172132808.jpg",
    place: "Kushwaha Printers",
    time: "(Approx 3 Years, Present)",
    desp: "Working in a Family Business always a amaze to not have any work pressure. In my Family Business i work as a Graphic Designer learn various Graphic Designing skills like Vector Designing, Intractive Designing Approach, Logo Designing and Various Printing Designs also. Working as a Designer develop  creative Thinking in me and i always come up with some Unique Designs for customers for their needs.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "na",
    cardImage: "assets/images/experience-page/",
    description:
      "Not Yet Done",
  },
  
];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Travel Buddy",
    subtitle: "Runner Up",
    image: "assets/images/experience-page/hackojims.png",
    desp: "In the Hack O Jims hackathon, I developed Travel Buddy, a platform designed to aggregate comprehensive information on nearby services and amenities. This feature boosted user engagement by 30%. Additionally, I implemented a user-friendly interface that redirected users to trusted booking sites, resulting in a 25% increase in bookings. My efforts earned me the runner-up position in the competition.",
  },
  {
    title: "Project Lawyer Sathi",
    subtitle: "Participant",
    image: "assets/images/experience-page/SIH.jpg",
    desp: "In the SIH Hackathon, I developed Lawyer Sathi, an AI-powered app designed to provide law-related assistance to individuals and businesses. The app leverages artificial intelligence to offer legal advice, guidance on legal procedures, and access to resources, helping users navigate legal challenges with ease.",
    href: "https://www.sih.gov.in/",
  },
  {
    title: "Project Nexus",
    subtitle: "Participant",
    image: "assets/images/experience-page/SIH.jpg",
    desp: "In our Project Nexus we Basically work with team in a Website which is a Platform or Community where Researchers, Professors and Currently Working Professionals can interact and students also to get the information about recently working projects and it reduce the dublication of idea and also help in research and development of a individuals and their projects. It was nice Experience to work in this Project and various Web Development Skills ",
    href: "https://www.sih.gov.in/",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
