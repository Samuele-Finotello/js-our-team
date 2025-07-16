const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const memberTeam = (member) => {
  const memberInfo = `<div class="col-4 d-flex">
          <div class="col-4 p-0">
            <img class="img-fluid" src="./${member['img']}" alt="">
          </div>
          <div class="col-8 bg-dark text-light ps-4 lh-lg py-3">
            <h4 class="card-title">${member['name']}</h4>
            <p class="card-text m-0">${member['role']}</p>
            <p class="card-text text-primary">${member['email']}</p>
          </div>
        </div>`
  return memberInfo;
}

const ourTeam = document.getElementById('our-team');

for (let i = 0; i < teamMembers.length; i++) {
  let card = memberTeam(teamMembers[i]);
  ourTeam.innerHTML += card;
}