const movies = [
    {
        id: 1,
        title: "Stranger Things",
        year: 2016,
        genre: "Ficção Científica, Terror",
        rating: 4.8,
        poster: "Images/Stranger_Post.jpg",
        description: "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina."
    },
    {
        id: 2,
        title: "The Crown",
        year: 2016,
        genre: "Drama, História",
        rating: 4.6,
        poster: "Images/TheCrown_Post.jpg",
        description: "Esta série dramática narra o reinado da rainha Elizabeth II e os eventos que moldaram a segunda metade do século XX."
    },
    {
        id: 3,
        title: "La Casa de Papel",
        year: 2017,
        genre: "Crime, Drama",
        rating: 4.7,
        poster: "Images/LCDP_Post.png",
        description: "Oito ladrões fazem reféns e se trancam na Casa da Moeda da Espanha enquanto o líder do grupo manipula a polícia para realizar seu plano."
    },
    {
        id: 4,
        title: "The Witcher",
        year: 2019,
        genre: "Fantasia, Ação",
        rating: 4.5,
        poster: "Images/Witcher_Post.jpg",
        description: "O solitário caçador de monstros Geralt de Rívia luta para encontrar seu lugar num mundo onde as pessoas muitas vezes são mais perversas que as criaturas."
    },
    {
        id: 5,
        title: "Breaking Bad",
        year: 2008,
        genre: "Crime, Drama",
        rating: 4.9,
        poster: "Images/Breakin_Post.jpg",
        description: "Um professor de química do ensino médio diagnosticado com câncer de pulmão se transforma em um fabricante e traficante de metanfetamina."
    },
    {
        id: 6,
        title: "The Queen's Gambit",
        year: 2020,
        genre: "Drama",
        rating: 4.7,
        poster: "Images/Queen_Post.jpg",
        description: "Em um orfanato dos anos 1950, uma jovem revela um talento incrível para o xadrez e começa a vencer torneios, mas luta contra o vício."
    }
];

const reviews = [
    {
        id: 1,
        movie: "Stranger Things",
        rating: 4.8,
        content: "Uma série incrível que combina nostalgia dos anos 80 com elementos de ficção científica e terror. Os personagens são cativantes e a trama é envolvente.",
        author: "Maria Silva"
    },
    {
        id: 2,
        movie: "The Crown",
        rating: 4.6,
        content: "Produção impecável com atuações brilhantes. Oferece um olhar fascinante sobre a monarquia britânica e os desafios enfrentados pela rainha Elizabeth II.",
        author: "João Santos"
    },
    {
        id: 3,
        movie: "La Casa de Papel",
        rating: 4.7,
        content: "Cheia de reviravoltas e tensão, esta série mantém você na ponta da cadeira. Os personagens são complexos e a trama é inteligente.",
        author: "Ana Oliveira"
    }
];

const calendarItems = [
    {
        id: 1,
        title: "Stranger Things - Temporada 5",
        date: "15",
        month: "DEZ",
        time: "Disponível a partir das 00:00"
    },
    {
        id: 2,
        title: "The Witcher - Temporada 4",
        date: "20",
        month: "DEZ",
        time: "Disponível a partir das 00:00"
    },
    {
        id: 3,
        title: "Novo Filme Original Maple",
        date: "25",
        month: "DEZ",
        time: "Disponível a partir das 18:00"
    },
    {
        id: 4,
        title: "Série Nova - Mistério na Cidade",
        date: "30",
        month: "DEZ",
        time: "Disponível a partir das 00:00"
    }
];

const lists = [
    {
        id: 1,
        title: "Favoritos",
        poster: "Images/Wandinha_Banner.jpg"
    },
    {
        id: 2,
        title: "Para Assistir",
        poster: "Images/DanDaDan_Banner.jpg"
    },
    {
        id: 3,
        title: "Séries de Ficção",
        poster: "Images/The100_Banner.jpg"
    },
    {
        id: 4,
        title: "Dramas Intensos",
        poster: "Images/Dorama_Banner.jpg"
    }
];

function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

function populateReleases() {
    const releasesCarousel = document.getElementById('releases-carousel');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.setAttribute('data-id', movie.id);

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating">${createRatingStars(movie.rating)}</span>
                </div>
            </div>
        `;

        releasesCarousel.appendChild(movieCard);
    });
}

function populateReviews() {
    const reviewsContainer = document.querySelector('.reviews-container');

    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';

        reviewCard.innerHTML = `
            <div class="review-header">
                <span class="review-movie">${review.movie}</span>
                <span class="review-rating">${createRatingStars(review.rating)}</span>
            </div>
            <div class="review-content">
                <p>${review.content}</p>
            </div>
            <div class="review-author">
                <span>Por: ${review.author}</span>
            </div>
        `;

        reviewsContainer.appendChild(reviewCard);
    });
}

function populateCalendar() {
    const calendarContainer = document.querySelector('.calendar');

    calendarItems.forEach(item => {
        const calendarItem = document.createElement('div');
        calendarItem.className = 'calendar-item';

        calendarItem.innerHTML = `
            <div class="calendar-date">
                <span class="day">${item.date}</span>
                <span class="month">${item.month}</span>
            </div>
            <div class="calendar-info">
                <h3 class="calendar-title">${item.title}</h3>
                <p class="calendar-time">${item.time}</p>
            </div>
        `;

        calendarContainer.appendChild(calendarItem);
    });
}

function populateLists() {
    const listsContainer = document.querySelector('.lists');

    lists.forEach(list => {
        const listCard = document.createElement('div');
        listCard.className = 'list-card';

        listCard.innerHTML = `
            <img src="${list.poster}" alt="${list.title}" class="list-poster">
            <h3 class="list-title">${list.title}</h3>
        `;

        listsContainer.appendChild(listCard);
    });
}

function openMovieModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-year').textContent = movie.year;
    document.getElementById('modal-genre').textContent = movie.genre;
    document.getElementById('modal-rating').innerHTML = createRatingStars(movie.rating);
    document.getElementById('modal-description').textContent = movie.description;
    document.getElementById('modal-poster').src = movie.poster;

    const trailerBtn = document.querySelector('.modal-info .btn-primary');
    trailerBtn.onclick = function() {
        window.open('https://www.youtube.com/watch?v=U4sndXXtrtE', '_blank');
    };

    document.getElementById('movie-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('movie-modal').style.display = 'none';
}

function searchMovies(query) {
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    const releasesCarousel = document.getElementById('releases-carousel');
    releasesCarousel.innerHTML = '';

    if (filteredMovies.length === 0) {
        releasesCarousel.innerHTML = '<p>Nenhum filme ou série encontrado.</p>';
        return;
    }

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.setAttribute('data-id', movie.id);

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating">${createRatingStars(movie.rating)}</span>
                </div>
            </div>
        `;

        releasesCarousel.appendChild(movieCard);
    });

    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', function () {
            const movieId = parseInt(this.getAttribute('data-id'));
            openMovieModal(movieId);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    populateReleases();
    populateReviews();
    populateCalendar();
    populateLists();

    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', function () {
            const movieId = parseInt(this.getAttribute('data-id'));
            openMovieModal(movieId);
        });
    });

    document.getElementById('modal-close').addEventListener('click', closeModal);

    document.getElementById('movie-modal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

    document.querySelector('.search-bar button').addEventListener('click', function () {
        const query = document.querySelector('.search-bar input').value;
        searchMovies(query);
    });

    document.querySelector('.search-bar input').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            const query = this.value;
            searchMovies(query);
        }
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(20, 20, 20, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(20, 20, 20, 0.95)';
        }
    });

    document.querySelector('.hero-buttons .btn-primary').addEventListener('click', function () {
        window.open('https://www.youtube.com/watch?v=U4sndXXtrtE', '_blank');
    });

    document.querySelector('.hero-buttons .btn-secondary').addEventListener('click', function () {
        openMovieModal(1);
    });
});