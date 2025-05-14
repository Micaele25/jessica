const courses = [
  {
    category: 'IA',
    title: 'Inteligência Artificial na Prática',
    description: 'Aprenda IA do zero!',
    rating: 5,
    reviews: 120,
    image: 'curso.jpg',
  },
  {
    category: 'Backend',
    title: 'Backend com Node.js',
    description: 'Crie APIs robustas!',
    rating: 4,
    reviews: 85,
    image: 'curso.jpg',
  },
  {
    category: 'Frontend',
    title: 'Frontend com React',
    description: 'Desenvolva interfaces modernas!',
    rating: 5,
    reviews: 150,
    image: 'curso.jpg',
  },
  {
    category: 'Devops',
    title: 'DevOps na Prática',
    description: 'Automatize seus projetos!',
    rating: 4,
    reviews: 90,
    image: 'curso.jpg',
  },
  {
    category: 'UX Design',
    title: 'UX Design Essencial',
    description: 'Crie experiências incríveis!',
    rating: 5,
    reviews: 110,
    image: 'curso.jpg',
  },
  {
    category: 'IA',
    title: 'Machine Learning Avançado',
    description: 'Domine algoritmos de ML!',
    rating: 4,
    reviews: 95,
    image: 'curso.jpg',
  },
  {
    category: 'Backend',
    title: 'APIs com Python',
    description: 'Construa APIs eficientes!',
    rating: 4,
    reviews: 70,
    image: 'curso.jpg',
  },
  {
    category: 'Frontend',
    title: 'Vue.js para Iniciantes',
    description: 'Aprenda Vue do zero!',
    rating: 3,
    reviews: 60,
    image: 'curso.jpg',
  },
];

// Configurações de paginação
const coursesPerPage = 4;
let currentPage = 1;
let currentCategory = 'IA';

// Elementos DOM
const courseContainer = document.getElementById('course-container');
const tabs = document.querySelectorAll('#course-tabs button');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const currentPageSpan = document.getElementById('current-page');

// Função para renderizar cursos
function renderCourses() {
  const filteredCourses = courses.filter(
    (course) => course.category === currentCategory
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  const start = (currentPage - 1) * coursesPerPage;
  const end = start + coursesPerPage;
  const coursesToShow = filteredCourses.slice(start, end);

  courseContainer.innerHTML = '';

  coursesToShow.forEach((course) => {
    const stars = '★'.repeat(course.rating) + '☆'.repeat(5 - course.rating);
    const courseCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
<img src="${
      course.image
    }" alt="Imagem do curso" class="w-full h-40 object-cover" />
                <div class="p-4 flex flex-col gap-2">
                    <h3 class="text-lg font-bold text-[#1E3A8A]">${
                      course.title
                    }</h3>
                    <div class="flex items-center gap-2">
                        <img src="guanabara.jpg" alt="Foto professor" class="w-12 h-12 rounded-full" />
                        <span class="text-sm text-gray-800 font-medium">Professor Guanabara</span>
                    </div>
                    <div class="flex flex-col gap-4 mt-2">
                    <div class="flex flex-row gap-2">
                    <div class="items-center bg-white border-2 border-[#0B4B83] px-4 py-1 rounded">
                            <span class="text-blue-800 font-bold">40h</span>
                        </div>
                        <span class="text-[#0B4B83]">duração</span>
                    </div>
                    <div class="flex flex-row gap-2">
                        <div class="items-center bg-white border-2 border-[#0B4B83] px-4 py-1 rounded">
                            <span class="text-blue-800 font-bold">6</span>
                        </div>
                        <span class="text-[#0B4B83]">módulos</span>
                    </div>
                    </div>
                    <div class="flex justify-between items-center mt-3">
                        <div class="flex items-center text-base text-blue-900 bg-[#D6EBFE] px-8 py-2 rounded-md">
                            ${course.rating.toFixed(
                              1
                            )} <span class="ml-1 text-[#0B4B83]">${stars}</span>
                        </div>
                        <button class="bg-[#0B4B83] text-white px-8 py-2 rounded hover:bg-blue-800 text-base font-medium">
                            Inscrever
                        </button>
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

// Renderizar cursos iniciais
renderCourses();
