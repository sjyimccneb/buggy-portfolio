const collapseBtn = document.querySelector('.close-btn');
const expandBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');
const modalContainer = document.querySelector('.modal-header');
const projectsContainer = document.getElementById('projects');
const contactForm = document.querySelector('.contact-form');
const email = document.getElementById('email');
const formStatus = document.getElementById('my-form-status');
const formInput = document.querySelector('.form-input');
const getLocalStorage = () => {
  let contact = {};
  if (localStorage.getItem('contact')) {
    contact = JSON.parse(localStorage.getItem('contact'));
  }

  return contact;
};

const contactDetails = getLocalStorage();
const projects = [
  {
    name: 'stories',
    title: 'Multi-Post Stories',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    src: './assets/Img-Placeholder.png',
    live: 'https://www.google.com/',
    sourceCode: 'https://www.google.com/',
  },
  {
    name: 'printing',
    title: 'Profesional Art Printing Data',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    tech: ['html', 'bootstrap', 'JS'],
    src: './assets/card-bg.png',
    live: 'https://www.google.com/',
    sourceCode: 'https://www.google.com/',
  },
  {
    name: 'dashboard',
    title: 'Data Dashboard Healthcare',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    tech: ['html', 'bootstrap', 'JS'],
    src: './assets/dashboard-card.png',
    live: 'https://www.google.com/',
    sourceCode: 'https://www.google.com/',
  },
  {
    name: 'portfolio',
    title: 'Website Protfolio',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    tech: ['html', 'bootstrap', 'JS'],
    src: './assets/porfolio-card.png',
    live: 'https://www.google.com/',
    sourceCode: 'https://www.google.com/',
  },
];
expandBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});
collapseBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  projects.map((item) => {
    const { name, title, info, tech, src } = item;
    if (name === 'stories') {
      const article = document.createElement('article');
      article.classList.add('project-card');
      article.classList.add('card');
      article.dataset.name = name;

      article.innerHTML = `<div class="card-header">
              <img
                src="${src}"
                alt="${title}"
                class="card-header-img"
              />
            </div>
            <div data-name="stories">
              <div class="card-body">
                <h2 class="card-title">${title}</h2>
                <p class="card-info">
                     ${info}
                    </p>
                <ul class="tech-container">
                ${tech.map((tech) => `<li class="tech">${tech}</li>`)}
                </ul>
              </div>
              <div class="card-footer">
                <button class="btn pop-toggler">See Project</button>
              </div>
            </div>
          `;
      return projectsContainer.appendChild(article);
    }
    const container = document.createElement('div');
    container.classList.add('project-cards-container');
    const article = document.createElement('article');
    article.classList.add('project-card-variant');
    article.classList.add(name);
    article.classList.add('card');
    article.dataset.name = name;
    article.innerHTML = `<div class="card-variant-body">
                <h2 class="card-title">${title}</h2>
                <p class="card-info">
                 ${info}
                </p>
                <ul class="tech-container">
                ${tech.map((tech) => `<li class="tech">${tech}</li>`)}
                </ul>
              </div>
              <div class="card-variant-footer">
                <button class="btn btn-block pop-toggler">See Project</button>
              </div>`;

    return projectsContainer.appendChild(article);
  });
  const children = [...projectsContainer.children];
  children.forEach((child) => {
    if (child.classList.contains('card')) {
      let projButton;
      const projName = child.dataset.name;
      if (child.classList.contains('project-card')) {
        projButton = child.children[1].children[1].children[0];
      } else {
        projButton = child.children[1].children[0];
      }
      projButton.addEventListener('click', () => {
        const { title, info, tech, src, live, sourceCode } = projects.find(
          (item) => item.name === projName
        );
        const modalContent = `<h3 class="card-title">
                  ${title}
                </h3>
                <ul class="tech-container">
                ${tech.map((tech) => `<li class="tech">${tech}</li>`)}
                </ul>
                <div class="project-card">
                  <div class="pop-img-container">
                    <img
                      src="${src}"
                      alt="${title}"
                      class="card-header-img"
                    />
                  </div>
                  <div class="modal-body">
                    <p class="card-info">
                     ${info}
                    </p>
                    <div class="btns-container">
                      <a class="btn" target="_blank"  href="${live}">
                        See Live <img src="./assets/link.svg" alt="link-icon"
                      /></a>
                      <a class="btn"href="${sourceCode}"
                        >See Source <img src="./assets/git.svg" alt="git icon"
                      /></a>
                    </div>
                  </div>
                </div>
              `;
        modalContainer.innerHTML = modalContent;
        modal.classList.add('show-modal');
      });
    }
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
// Add code here
const showAlert = (info, type) => {
  formStatus.classList.add(type);
  formStatus.textContent = info;
  setTimeout(() => {
    formStatus.classList.remove(type);
    formStatus.textContent = '';
  }, 3000);
};
//
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (/[A-Z]/.test(email.value)) {
    showAlert('email should be lowercase', 'danger');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showAlert('please  provide a valid email', 'danger');
    return;
  }
  const data = new FormData(e.target);
  fetch(e.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        showAlert('Thanks for your submission!', 'success');
        contactForm.reset();
        localStorage.removeItem('contact');
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            showAlert(
              `${data.errors.map((error) => error.message).join(', ')}`,
              'danger'
            );
          } else {
            showAlert(
              'Oops! There was a problem submitting your form',
              'danger'
            );
          }
        });
      }
    })
    .catch((error) => {
      showAlert('Oops! There was a problem submitting your form', 'danger');
      console.log(error);
    });
});
formInput.forEach((inputfield) => {
  inputfield.addEventListener('input', (e) => {
    const { name } = e.target;
    const { value } = e.target;
    contactDetails[name] = value;
    localStorage.setItem('contact', JSON.stringify(contactDetails));
  });
});

window.addEventListener('DOMContentLoaded', () => {
  formInput.forEach((inputfield) => {
    inputfield.value = contactDetails[inputfield.name] || '';
  });
});
