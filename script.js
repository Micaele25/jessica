const courses = [
  // IA
  {
    category: 'IA',
    title: 'Inteligência Artificial na Prática',
    description: 'Aprenda IA do zero!',
    rating: 5,
    reviews: 120,
    image: 'img/curso.jpg',
    duration: 40,
    modules: 6,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'IA',
    title: 'Machine Learning Avançado',
    description: 'Domine algoritmos de ML!',
    rating: 4,
    reviews: 95,
    image: 'img/curso.jpg',
    duration: 55,
    modules: 8,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'IA',
    title: 'Redes Neurais com TensorFlow',
    description: 'Construa modelos com TensorFlow!',
    rating: 5,
    reviews: 130,
    image: 'img/curso.jpg',
    duration: 48,
    modules: 7,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },

  {
    category: 'IA',
    title: 'Inteligência Artificial na Prática',
    description: 'Aprenda IA do zero!',
    rating: 5,
    reviews: 120,
    image: 'img/curso.jpg',
    duration: 80,
    modules: 8,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },

  // Backend
  {
    category: 'Backend',
    title: 'Backend com Node.js',
    description: 'Crie APIs robustas!',
    rating: 4,
    reviews: 85,
    image: 'img/curso.jpg',
    duration: 36,
    modules: 5,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'Backend',
    title: 'APIs com Python',
    description: 'Construa APIs eficientes!',
    rating: 4,
    reviews: 70,
    image: 'img/curso.jpg',
    duration: 42,
    modules: 6,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'Backend',
    title: 'Spring Boot para Web',
    description: 'Crie sistemas com Java e Spring!',
    rating: 5,
    reviews: 100,
    image: 'img/curso.jpg',
    duration: 60,
    modules: 9,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },

  // Frontend
  {
    category: 'Frontend',
    title: 'Frontend com React',
    description: 'Desenvolva interfaces modernas!',
    rating: 5,
    reviews: 150,
    image: 'img/curso.jpg',
    duration: 50,
    modules: 7,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'Frontend',
    title: 'Vue.js para Iniciantes',
    description: 'Aprenda Vue do zero!',
    rating: 3,
    reviews: 60,
    image: 'img/curso.jpg',
    duration: 35,
    modules: 5,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'Frontend',
    title: 'Interfaces com Angular',
    description: 'Crie SPAs com Angular!',
    rating: 4,
    reviews: 80,
    image: 'img/curso.jpg',
    duration: 45,
    modules: 6,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },

  // Devops
  {
    category: 'Devops',
    title: 'DevOps na Prática',
    description: 'Automatize seus projetos!',
    rating: 4,
    reviews: 90,
    image: 'img/curso.jpg',
    duration: 38,
    modules: 6,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'Devops',
    title: 'Docker e Kubernetes',
    description: 'Orquestre contêineres como um profissional!',
    rating: 5,
    reviews: 140,
    image: 'img/curso.jpg',
    duration: 52,
    modules: 8,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'Devops',
    title: 'CI/CD com GitHub Actions',
    description: 'Automatize deploys com CI/CD!',
    rating: 4,
    reviews: 75,
    image: 'img/curso.jpg',
    duration: 30,
    modules: 4,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },

  // UX Design
  {
    category: 'UX Design',
    title: 'UX Design Essencial',
    description: 'Crie experiências incríveis!',
    rating: 5,
    reviews: 110,
    image: 'img/curso.jpg',
    duration: 46,
    modules: 7,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'UX Design',
    title: 'Prototipagem com Figma',
    description: 'Prototipe interfaces com Figma!',
    rating: 4,
    reviews: 95,
    image: 'img/curso.jpg',
    duration: 32,
    modules: 5,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
  {
    category: 'UX Design',
    title: 'Design Thinking',
    description: 'Resolva problemas com empatia e criatividade!',
    rating: 5,
    reviews: 125,
    image: 'img/curso.jpg',
    duration: 41,
    modules: 6,
    professor: {
      name: 'Professor Guanabara',
      photo: 'img/guanabara.jpg',
    },
  },
];

// Configurações de paginação
const coursesPerPage = 4;
let currentPage = 1;
let currentCategory = 'IA';
let searchText = '';

// Elementos DOM
const courseContainer = document.getElementById('course-container');
const tabs = document.querySelectorAll('#course-tabs button');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const currentPageSpan = document.getElementById('current-page');
const searchInput = document.querySelector('input[type="text"]');

// Controle de rolagem das categorias
const categoriesContainer = document.querySelector('.overflow-x-auto');
const prevCategoriesBtn = document.getElementById('prev-categories');
const nextCategoriesBtn = document.getElementById('next-categories');

function updateCategoriesButtons() {
    const container = categoriesContainer;
    const hasOverflow = container.scrollWidth > container.clientWidth;
    
    // Sempre mostrar os botões se houver overflow
    prevCategoriesBtn.style.display = hasOverflow ? 'block' : 'none';
    nextCategoriesBtn.style.display = hasOverflow ? 'block' : 'none';
    
    // Atualizar estado dos botões baseado na posição da rolagem
    prevCategoriesBtn.style.opacity = container.scrollLeft > 0 ? '1' : '0.5';
    nextCategoriesBtn.style.opacity = 
        container.scrollLeft < (container.scrollWidth - container.clientWidth - 1) ? '1' : '0.5';
}

prevCategoriesBtn.addEventListener('click', () => {
    categoriesContainer.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

nextCategoriesBtn.addEventListener('click', () => {
    categoriesContainer.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

categoriesContainer.addEventListener('scroll', updateCategoriesButtons);
window.addEventListener('resize', updateCategoriesButtons);

// Inicializar estado dos botões
updateCategoriesButtons();

// Função para renderizar cursos
function renderCourses() {
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = course.category === currentCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchText.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  const start = (currentPage - 1) * coursesPerPage;
  const end = start + coursesPerPage;
  const coursesToShow = filteredCourses.slice(start, end);

  courseContainer.innerHTML = '';

  if (coursesToShow.length === 0) {
    courseContainer.innerHTML = `
      <div class="col-span-full text-center py-8">
        <p class="text-gray-600 text-lg">Nenhum curso encontrado para "${searchText}"</p>
      </div>
    `;
    return;
  }

  coursesToShow.forEach((course) => {
    const stars = '★'.repeat(course.rating) + '☆'.repeat(5 - course.rating);
    const courseCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src="${course.image}" alt="Imagem do curso" class="w-full h-40 object-cover" />
                <div class="p-4 flex flex-col gap-2">
                    <h3 class="text-lg font-bold text-[#1E3A8A]">${course.title}</h3>
                    <div class="flex items-center gap-2">
                        <img src="${course.professor.photo}" alt="Foto do professor" class="w-12 h-12 rounded-full" />
                        <span class="text-sm text-gray-800 font-medium">${course.professor.name}</span>
                    </div>
                    <div class="flex flex-col gap-4 mt-2">
                        <div class="flex flex-row gap-2">
                            <div class="items-center bg-white border-2 border-[#0B4B83] px-4 py-1 rounded">
                                <span class="text-blue-800 font-bold">${course.duration}h</span>
                            </div>
                            <span class="text-[#0B4B83]">duração</span>
                        </div>
                        <div class="flex flex-row gap-2">
                            <div class="items-center bg-white border-2 border-[#0B4B83] px-4 py-1 rounded">
                                <span class="text-blue-800 font-bold">${course.modules}</span>
                            </div>
                            <span class="text-[#0B4B83]">módulos</span>
                        </div>

                        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 mt-3">
                            <div class="flex items-center justify-center text-base text-blue-900 bg-[#D6EBFE] px-6 py-2 rounded-md flex-1">
                                ${course.rating.toFixed(1)} <span class="ml-1 text-[#0B4B83]">${stars}</span>
                            </div>
                            <button class="bg-[#0B4B83] text-white px-6 py-2 rounded hover:bg-blue-800 text-base font-medium flex-1">
                                Inscrever
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    courseContainer.innerHTML += courseCard;
  });

  currentPageSpan.textContent = currentPage;
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;
}

// Evento para as abas
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Atualizar estilo das abas
    tabs.forEach((t) => {
      t.classList.remove('bg-blue-500', 'text-white');
      t.classList.add('bg-gray-200', 'text-gray-700');
    });
    tab.classList.remove('bg-gray-200', 'text-gray-700');
    tab.classList.add('bg-blue-500', 'text-white');

    // Filtrar cursos pela categoria
    currentCategory = tab.getAttribute('data-category');
    currentPage = 1;
    renderCourses();
  });
});

// Evento para paginação
prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderCourses();
  }
});

nextPageBtn.addEventListener('click', () => {
  const filteredCourses = courses.filter(
    (course) => course.category === currentCategory
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderCourses();
  }
});

// Evento para pesquisa
searchInput.addEventListener('input', (e) => {
  searchText = e.target.value;
  currentPage = 1;
  renderCourses();
});

// Renderizar cursos iniciais
renderCourses();
