// Dados dos cursos (simulados)
const courses = [
    { category: "IA", title: "Inteligência Artificial na Prática", description: "Aprenda IA do zero!", rating: 5, reviews: 120 },
    { category: "Backend", title: "Backend com Node.js", description: "Crie APIs robustas!", rating: 4, reviews: 85 },
    { category: "Frontend", title: "Frontend com React", description: "Desenvolva interfaces modernas!", rating: 5, reviews: 150 },
    { category: "Devops", title: "DevOps na Prática", description: "Automatize seus projetos!", rating: 4, reviews: 90 },
    { category: "UX Design", title: "UX Design Essencial", description: "Crie experiências incríveis!", rating: 5, reviews: 110 },
    { category: "IA", title: "Machine Learning Avançado", description: "Domine algoritmos de ML!", rating: 4, reviews: 95 },
    { category: "Backend", title: "APIs com Python", description: "Construa APIs eficientes!", rating: 4, reviews: 70 },
    { category: "Frontend", title: "Vue.js para Iniciantes", description: "Aprenda Vue do zero!", rating: 3, reviews: 60 },
];

// Configurações de paginação
const coursesPerPage = 4;
let currentPage = 1;
let currentCategory = "IA";

// Elementos DOM
const courseContainer = document.getElementById("course-container");
const tabs = document.querySelectorAll("#course-tabs button");
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");
const currentPageSpan = document.getElementById("current-page");

// Função para renderizar cursos
function renderCourses() {
    // Filtrar cursos pela categoria
    const filteredCourses = courses.filter(course => course.category === currentCategory);
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;

    // Pegar cursos da página atual
    const start = (currentPage - 1) * coursesPerPage;
    const end = start + coursesPerPage;
    const coursesToShow = filteredCourses.slice(start, end);

    // Renderizar cursos
    courseContainer.innerHTML = "";
    coursesToShow.forEach(course => {
        const stars = "★".repeat(course.rating) + "☆".repeat(5 - course.rating);
        const courseCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="w-full h-40 bg-gray-300 flex items-center justify-center">
                    <span class="text-gray-500">[Imagem Curso]</span>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-semibold">${course.title}</h3>
                    <p class="text-gray-600">${course.description}</p>
                    <div class="mt-2 flex items-center">
                        <span class="text-yellow-400">${stars}</span>
                        <span class="ml-2 text-gray-600">(${course.reviews})</span>
                    </div>
                </div>
            </div>
        `;
        courseContainer.innerHTML += courseCard;
    });

    // Atualizar paginação
    currentPageSpan.textContent = currentPage;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

// Evento para as abas
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Atualizar estilo das abas
        tabs.forEach(t => {
            t.classList.remove("bg-blue-500", "text-white");
            t.classList.add("bg-gray-200", "text-gray-700");
        });
        tab.classList.remove("bg-gray-200", "text-gray-700");
        tab.classList.add("bg-blue-500", "text-white");

        // Filtrar cursos pela categoria
        currentCategory = tab.getAttribute("data-category");
        currentPage = 1;
        renderCourses();
    });
});

// Evento para paginação
prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderCourses();
    }
});

nextPageBtn.addEventListener("click", () => {
    const filteredCourses = courses.filter(course => course.category === currentCategory);
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderCourses();
    }
});

// Renderizar cursos iniciais
renderCourses();