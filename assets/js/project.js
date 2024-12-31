AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Employee Management System (Self Project)",
    cardImage: "https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp",
    description: "A Website Using HTML, CSS, JavaScript, React.js, Expess.js, Node.js, PostgreSQL",
    // Previewlink: "https://easejourney.netlify.app/",
    Githublink: "https://github.com/kushwaha-suraj/React-Employee-Management",
  },
  {
    title: "React Ecommerce (Self Project)",
    cardImage: "https://avantify.io/wp-content/uploads/2023/12/ecommerce.jpeg",
    description: "A Website Using HTML, CSS, JavaScript, React.js, Expess.js, Node.js",
    // Previewlink: "https://easejourney.netlify.app/",
    Githublink: "https://github.com/kushwaha-suraj/node-react-ecommerce",
  },
  {
    title: "Travel Advisor (Self Project)",
    cardImage: "https://camo.githubusercontent.com/a022acbb6af9167a78ae59cd62a18243652f497f888ed01b354a00cb1df2b967/68747470733a2f2f692e6962622e636f2f71706832635a6e2f696d6167652e706e6767",
    description: "A Website Using HTML, CSS, JavaScript, React.js, Expess.js, Node.js",
    // Previewlink: "https://easejourney.netlify.app/",
    Githublink: "https://github.com/kushwaha-suraj/project_travel_advisor",
  },
  {
    title: "React Password Generator (Self Project)",
    cardImage: "https://i0.wp.com/whatismyip.network/wp-content/uploads/2019/09/Strong-Password-Generator.jpg?fit=1280%2C721&ssl=1",
    description: "A Website Using HTML, CSS, JavaScript, React.js, Expess.js, Node.js",
    // Previewlink: "https://easejourney.netlify.app/",
    Githublink: "https://github.com/kushwaha-suraj/React-Password_Generator",
  },
  {
    title: "React Weather App (Self Project)",
    cardImage: "https://img.freepik.com/premium-vector/weather-climate-vocabulary-with-cute-cartoon-characters-kids_535862-1422.jpg?semt=ais_hybrid",
    description: "A Website Using HTML, CSS, JavaScript, React.js, Expess.js, Node.js",
    // Previewlink: "https://easejourney.netlify.app/",
    Githublink: "https://github.com/kushwaha-suraj/React-weather-using-api",
  },
  {
    title: "Music Copyright Detection (Self Project)",
    cardImage: "https://www.ipandlegalfilings.com/wp-content/uploads/2023/04/Copyright-of-Music1-1.jpg",
    description: "Using Python, Expess.js, Node.js",
    // Previewlink: "https://easejourney.netlify.app/",
    Githublink: "https://github.com/kushwaha-suraj/Music-Copyright-Detection-Script-master",
  },
  {
    title: "Music Different Bit Streaming (Self Project)",
    cardImage: "https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp",
    description: "Using Expess.js, Node.js",
    // Previewlink: "https://easejourney.netlify.app/",
    Githublink: "https://github.com/kushwaha-suraj/Stream-Music-On-Different-Bits",
  },
  {
    title: "Ease Joureney (Major Project)",
    cardImage: "assets/images/project-page/easejourney.jpg",
    description: "A Website Using HTML, CSS, JavaScript, React.js, Expess.js, Node.js, MongoDB",
    Previewlink: "https://easejourney.netlify.app/",
    Githublink: "https://github.com/kushwaha-suraj/easeJourney",
  },
  {
    title: "Jyoti Industries (Client Project)",
    cardImage: "assets/images/project-page/jyotiindustries.jpg",
    description: "A Website Using HTML, CSS, JavaScript, Bootstrap",
    Previewlink: "https://jyotiindustriesdelhi.netlify.app/",
  },
  {
    title: "VSA India (Client Project)",
    cardImage: "assets/images/project-page/vsa.jpg",
    description: "A Website Using HTML, CSS, JavaScript, Bootstrap",
    Previewlink: "https://vsa-india.org/",
  },
  {
    title: "Sample Website",
    cardImage: "assets/images/project-page/candselectrical.jpg",
    description: "A Website Using HTML, CSS, JavaScript, Bootstrap",
    Previewlink: "https://candselectrical.netlify.app/",
    Githublink: "https://github.com/kushwahassuraj/c-s_electrical.github.io",
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
