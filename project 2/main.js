import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroRotatingText();
  initScrollAnimations();
  initFAQ();
  initTestimonialsCarousel();
  initProjekty();
  initSchematAlter2();
  initCennikAnimations();
});

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }

      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

function initHeroRotatingText() {
  const rotatingTexts = document.querySelectorAll('.rotating-text');
  let currentIndex = 0;

  setInterval(() => {
    rotatingTexts[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % rotatingTexts.length;
    rotatingTexts[currentIndex].classList.add('active');
  }, 3500);
}

function initScrollAnimations() {
  const procesSteps = document.querySelectorAll('.proces-step');
  const ideaParagraphs = document.querySelectorAll('.idea-content p');

  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, observerOptions);

  procesSteps.forEach(step => observer.observe(step));
  ideaParagraphs.forEach(p => observer.observe(p));
}

function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const answer = question.nextElementSibling;

      faqQuestions.forEach(q => {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
          q.nextElementSibling.style.maxHeight = '0';
        }
      });

      if (isExpanded) {
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
      } else {
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

function initTestimonialsCarousel() {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');

  let currentTestimonial = 0;

  testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Przejdź do opinii ${index + 1}`);
    if (index === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      showTestimonial(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.carousel-dot');

  function showTestimonial(index) {
    testimonials.forEach(t => {
      t.classList.remove('active', 'prev');
    });

    dots.forEach(d => d.classList.remove('active'));

    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
  }

  prevBtn.addEventListener('click', () => {
    const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prevIndex);
  });

  nextBtn.addEventListener('click', () => {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(nextIndex);
  });

  let autoplayInterval = setInterval(() => {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(nextIndex);
  }, 6000);

  const carouselContainer = document.querySelector('.testimonials-carousel');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });

  carouselContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => {
      const nextIndex = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(nextIndex);
    }, 6000);
  });
}

const projektyData = [
     {
    id: 1,
    title: "Łazienka marzeń",
    type: "Kamienica",
    size: "7m²",
    date: "2015",
    images: [
       "/images/projects/001/1.jpg",
       "/images/projects/001/2.jpg",
       "/images/projects/001/3.jpg",
       "/images/projects/001/4.jpg",
       "/images/projects/001/5.jpg"
    ],
problem: "Stan deweloperski. Ze względu na narożny układ kamienicy zastany jest nietypowy układ ścian. Punkty mediów narzucają niekorzystny układ dla projektu pomieszczenia. Prysznic miał powstać w nietypowym miejscu, technicznie trudnym do realizacji. Dwie mokre strefy.",
    solution: "Przestawione ścianki działowe i punkty mediów. Niewidoczne podniesienie podłogi w celu ukrycia rury odpływowej. Hydraulika zaprojektowana na milimetry.",
    result: "Przestrzeń zyskała logikę i komfort użytkowania. Zmieścił się prysznic marzeń w oczekiwanym miejscu. Podniesiona podłoga stanowi część projektowanego odpływu. Zabieg pomógł ukształtować także dodatkowe pomieszczenia, poza projektowaną łazienką: Powstała mini garderoba i sensowny układ kuchni. 'Na deser' została zaprojektowana mozaika (w stylu ilustracji Charley Harper'a)",
    benefits: ["Praktyczny podział na strefy", "Dużo przestrzeni", "Pokonane przeszkody techniczne"]
  },
    
  {
    id: 2,
    title: "Budżetowa kuchnia",
    type: "Stare budownictwo",
    size: "40m²",
    date: "2025",
    images: [
    "/images/projects/002/1.jpg",
    "/images/projects/002/2.jpg",
    "/images/projects/002/3.jpg",
    "/images/projects/002/4.jpg"
    ],
    problem: "Niewielka kuchnia, wymagająca remontu. Ograniczona ścianami nośnymi. Punkty wody i pralka muszą zostać na swoim miejscu. Bardzo niski budżet. Niewielka przestrzeń robocza. Pralka musi zostać.",
    solution: "Odzyskiawnie starych materiałów i mebli. Odmalowanie kafli",
    result: "Przestrzeń zyskała logikę i komfort użytkowania. Dużo przestrzeni robiczej dzieki wielkim blatom. Kompromisem był mały stół, ale korzystają z niego tylko dwie osoby. ",
    benefits: ["Szybka realizacja", "Niski koszt", "Dużo przestrzeni roboczej"]
  },
  
  {
    id:3,
    title: "Domek szeregowy",
    type: "Jednorodzinny",
    size: "120m²",
    date: "2025",
    images: [
 "/images/projects/003/1.jpg"
    ],
    problem: "Przestronny dom z chaotycznym układem funkcjonalnym i niewykorzystanym potencjałem elewacji południowo-zachodniej. Nieprawidłowo zaprojektowana strefa dzienna i jej doświetlenie. Wątpliwości co do możliwości i zasadności dobudowania wiaty garażowej w przyszłośći.",
    solution: "Przeprojektowaliśmy analizę potrzeb klienta. Policzona została ergonomia strefy dziennej i jej okien. Powstał nowy układ ścian działowych w kilku pomieszczeniach.",
    result: "Przestrzeń zyskała logikę i komfort użytkowania. Na górze przedpokój jest krótszy a pomieszczenia większe. Łazienka zyskała południowe okno. Pokój dziecka jest bezwzględnie lepiej ułożony i równomiernie doświetlony.",
    benefits: ["Wydajne doświetlenie pomieszczeń", "Lepsza organizacja przestrzeni do życia", "Garaż bez kompromisów na jakości"]
  },
 
  {
    id: 4,
    title: "Kamienica w Poznaniu",
    type: "Mieszkanie",
    size: "80m²",
    date: "2021",
    images: [

 "/images/projects/004/1.jpg"
      
    ],
    problem: "Rodzina z dwójką dzieci zmagała się z ciągłym bałaganem i brakiem miejsca na rzeczy codziennego użytku. Pomieszczenia były źle zorganizowane - duży salon był rzadko używany, podczas gdy strefa dzienna była zbyt mała.",
    solution: "Przeprojektowaliśmy strefy funkcjonalne domu. Stworzyliśmy większą i bardziej praktyczną kuchnię z jadalnią. Zaprojektowaliśmy dedykowaną przestrzeń do nauki dla dzieci i dodaliśmy inteligentne systemy przechowywania w każdej strefie. Dodaliśmy przestrzenie magazynowe z nieuczęszczanych strefach komunikacji.",
    result: "Mieszkanie stało się przyjaze  dla całej rodziny. Każdy członek rodziny ma swoją przestrzeń, a równocześnie strefa wspólna sprzyja spędzaniu czasu razem. Właściciele podkreślają, że wreszcie czują się komfortowo we własnym domu.",
    benefits: ["Lepsze zarządzanie przestrzenią", "Więcej miejsca do życia", "Zadowolona rodzina"]
  },

];

let currentProjektIndex = 0;
let currentGalleryIndexes = {};
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('DOMContentLoaded', function() {
  initProjekty();
});

function initProjekty() {
  projektyData.forEach((_, index) => {
    currentGalleryIndexes[index] = 0;
  });

  renderProjekt(currentProjektIndex);
  updateProjektIndicator();

  document.addEventListener('keydown', handleKeyboardNavigation);
}

function handleKeyboardNavigation(e) {
  if (e.key === 'ArrowLeft') {
    navigateProjekt(-1, false);
  } else if (e.key === 'ArrowRight') {
    navigateProjekt(1, false);
  }
}

function navigateProjekt(direction, shouldScroll = true) {
  const totalProjects = projektyData.length;
  currentProjektIndex = (currentProjektIndex + direction + totalProjects) % totalProjects;
  renderProjekt(currentProjektIndex);
  updateProjektIndicator();
  if (shouldScroll && window.innerWidth <= 750) {
    scrollToProjektySection();
  }
}

function navigateProjektWithScroll(direction) {
  navigateProjekt(direction, true);
}

function scrollToProjektySection() {
  const projektySection = document.getElementById('projekty');
  if (projektySection) {
    projektySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function moveGallery(projektIndex, direction) {
  const projekt = projektyData[projektIndex];
  const maxIndex = projekt.images.length - 1;
  currentGalleryIndexes[projektIndex] += direction;
  if (currentGalleryIndexes[projektIndex] < 0) {
    currentGalleryIndexes[projektIndex] = maxIndex;
  } else if (currentGalleryIndexes[projektIndex] > maxIndex) {
    currentGalleryIndexes[projektIndex] = 0;
  }
  updateGalleryPosition(projektIndex);
}

function setGallerySlide(projektIndex, slideIndex) {
  currentGalleryIndexes[projektIndex] = slideIndex;
  updateGalleryPosition(projektIndex);
}

function renderProjekt(index) {
  const projekt = projektyData[index];
  const container = document.getElementById('projekt-content');
  if (!container) return;

  container.innerHTML = `
    <div class="projekt-gallery" id="projekt-gallery-${index}">
      <div class="gallery-slides" id="gallery-slides-${index}">
        ${projekt.images.map((img, i) => `
          <div class="gallery-slide">
            <img src="${img}" alt="${projekt.title} - zdjęcie ${i + 1}"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22%3E%3Crect fill=%22%23ddd%22 width=%22800%22 height=%22500%22/%3E%3Ctext fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22Arial%22 font-size=%2224%22%3EZdjęcie ${i + 1}%3C/text%3E%3C/svg%3E'">
          </div>
        `).join('')}
      </div>

      ${projekt.images.length > 1 ? `
        <button class="gallery-nav gallery-nav-left" onclick="moveGallery(${index}, -1)" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="gallery-nav gallery-nav-right" onclick="moveGallery(${index}, 1)" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div class="gallery-controls">
          ${projekt.images.map((_, i) => `
            <button class="gallery-dot ${i === 0 ? 'active' : ''}"
                    onclick="setGallerySlide(${index}, ${i})"
                    type="button"
                    aria-label="Przejdź do zdjęcia ${i + 1}"></button>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <div class="projekt-info">
      <div class="projekt-header-wrapper">
        <button class="projekt-nav projekt-nav-prev" onclick="navigateProjekt(-1, false)" type="button" aria-label="Poprzedni projekt">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="11 17 6 12 11 7"></polyline>
            <polyline points="18 17 13 12 18 7"></polyline>
          </svg>
        </button>

        <div style="flex: 1;">
          <h3 class="projekt-title">${projekt.title}</h3>
          <div class="projekt-tags">
            <span class="projekt-tag tag-type">${projekt.type}</span>
            <span class="projekt-tag tag-size">${projekt.size}</span>
            <span class="projekt-tag tag-date">${projekt.date}</span>
          </div>
        </div>

        <button class="projekt-nav projekt-nav-next" onclick="navigateProjekt(1, false)" type="button" aria-label="Następny projekt">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="13 17 18 12 13 7"></polyline>
            <polyline points="6 17 11 12 6 7"></polyline>
          </svg>
        </button>
      </div>

      <div class="projekt-sections">
        <div class="projekt-section">
          <h3>Wyzwanie</h3>
          <p>${projekt.problem}</p>
        </div>

        <div class="projekt-section">
          <h3>Rozwiązanie</h3>
          <p>${projekt.solution}</p>
        </div>

        <div class="projekt-section">
          <h3>Rezultat</h3>
          <p>${projekt.result}</p>
        </div>
      </div>

      <div class="projekt-benefits">
        ${projekt.benefits.map(benefit => `
          <span class="benefit-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            ${benefit}
          </span>
        `).join('')}
      </div>
    </div>
  `;

  const mainContainer = document.getElementById('projekt-content').parentElement;
  const oldBottomNav = document.querySelector('.projekt-nav-bottom');
  if (oldBottomNav) oldBottomNav.remove();

  const oldIndicator = document.querySelector('.projekt-indicator');
  if (oldIndicator) oldIndicator.remove();

  const bottomNav = document.createElement('div');
  bottomNav.className = 'projekt-nav-bottom';
  bottomNav.innerHTML = `
    <button class="projekt-nav-btn prev-btn" onclick="navigateProjektWithScroll(-1)" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="11 17 6 12 11 7"></polyline>
        <polyline points="18 17 13 12 18 7"></polyline>
      </svg>
    </button>

    <div class="projekt-indicator">
      <span id="projekt-current">${currentProjektIndex + 1}</span> / <span id="projekt-total">${projektyData.length}</span>
    </div>

    <button class="projekt-nav-btn next-btn" onclick="navigateProjektWithScroll(1)" type="button">
      <span>Kolejny projekt</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="13 17 18 12 13 7"></polyline>
        <polyline points="6 17 11 12 6 7"></polyline>
      </svg>
    </button>
  `;

  mainContainer.appendChild(bottomNav);
  initGallerySwipe(index);
}

function initGallerySwipe(projektIndex) {
  const gallery = document.getElementById(`projekt-gallery-${projektIndex}`);
  if (!gallery) return;

  gallery.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  gallery.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleGallerySwipe(projektIndex);
  }, { passive: true });
}

function handleGallerySwipe(projektIndex) {
  const swipeThreshold = 50;
  const swipeDistanceX = touchEndX - touchStartX;
  const swipeDistanceY = Math.abs(touchEndY - touchStartY);

  if (Math.abs(swipeDistanceX) > swipeThreshold && swipeDistanceY < 100) {
    if (swipeDistanceX > 0) {
      moveGallery(projektIndex, -1);
    } else {
      moveGallery(projektIndex, 1);
    }
  }
}

function updateGalleryPosition(projektIndex) {
  const slides = document.getElementById(`gallery-slides-${projektIndex}`);
  const dots = document.querySelectorAll('.gallery-dot');

  if (slides) {
    const offset = currentGalleryIndexes[projektIndex] * -100;
    slides.style.transform = `translateX(${offset}%)`;
  }

  dots.forEach((dot, index) => {
    if (index === currentGalleryIndexes[projektIndex]) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function updateProjektIndicator() {
  const currentEl = document.getElementById('projekt-current');
  const totalEl = document.getElementById('projekt-total');
  if (currentEl) currentEl.textContent = currentProjektIndex + 1;
  if (totalEl) totalEl.textContent = projektyData.length;
}

window.navigateProjekt = navigateProjekt;
window.navigateProjektWithScroll = navigateProjektWithScroll;
window.moveGallery = moveGallery;
window.setGallerySlide = setGallerySlide;

const scenarioConfigAlter2 = { 1: true, 2: true, 3: true, 4: true, 5: false, 6: true };

const scenarioImages = {
  1: "https://images.pexels.com/photos/16865477/pexels-photo-16865477.jpeg?auto=compress&cs=tinysrgb&w=600",
  2: "https://images.pexels.com/photos/8469938/pexels-photo-8469938.jpeg?auto=compress&cs=tinysrgb&w=600",
  3: "https://images.pexels.com/photos/8381908/pexels-photo-8381908.jpeg?auto=compress&cs=tinysrgb&w=600",
  4: "https://images.pexels.com/photos/2225430/pexels-photo-2225430.jpeg?auto=compress&cs=tinysrgb&w=600",
  5: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
  6: "https://images.pexels.com/photos/17647252/pexels-photo-17647252.jpeg?auto=compress&cs=tinysrgb&w=600"
};

const scenariosDataAlter2 = {
 
  1: {
    title: "PLANUJESZ ZAKUP",
    subtitle: "Wsparcie na starcie", description: "Masz na oku lokal? Sprawdzimy go. Nie masz? Pomożemy Ci go znaleźć.", icon: "iconSearch",
    stages: [
      { number: 1, title: "To aystent przy zakupie", icon: "iconHome", question: "Nie wiesz czy lokal nie ma wad? Nie wiesz gdzie lub czego dokłádnie szukasz?" },
      { number: 2, title: "Bez audytu ryzykujesz", icon: "iconAlert", points: ["Ukryte wady konstrukcyjne", "Złe rozmieszczenie pomieszczeń", "Problemy z instalacjami", "Koszty remontu przekraczające budżet", "Utrata wartości inwestycji"] },
      { number: 3, title: "Audyt to Twoja polisa", icon: "iconCheck", points: ["Sprawdzimy każdy metr kwadratowy", "Wykryjemy wady PRZED zakupem", "Ocenimy potencjał przestrzeni", "Wycenimy realny koszt zmian", "Doradzimy czy warto inwestować"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Świadoma decyzja – kupisz lub odrzucisz ze spokojem", "Negocjacje – zbijasz cenę o koszt napraw", "Plan działania – wiesz co zmienić i w jakiej kolejności", "Oszczędność – unikniesz kosztownych błędów"] }
    ]
  },
  
  2: {
    title: "JUŻ KUPIONE",
    subtitle: "Szybki Audyt", description: "Tu liczy się czas. Może zdążymy ze zmianami lokatorskimi.", icon: "iconContract",
    stages: [
      { number: 1, title: "Masz nowy lokal", icon: "iconContract", question: "Cena była dobra, lokalizacja też..." },
      { number: 2, title: "Deweloperski standard ≠ Twoje potrzeby", icon: "iconAlert", points: ["Uniwersalny układ dla 'przeciętnego' klienta", "Nieprzemyślane strefy funkcjonalne", "Marnowana powierzchnia", "Niewykorzystany potencjał wnętrza", "Brak personalizacji pod Twój styl życia"] },
      { number: 3, title: "Audyt odkryje potencjał", icon: "iconCheck", points: ["Sprawdzimy funkcjonalność układu", "Znajdziemy nieoczywiste możliwości", "Zaproponujemy zmiany lokatorskie", "Optymalizujemy przestrzeń pod Ciebie", "Doradzimy co zmienić PRZED wykończeniem"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Optymalizacja – każdy metr wykorzystany sensownie", "Oszczędność – zmiany przed wykończeniem = mniejsze koszty", "Komfort – lokal idealnie dopasowany do Ciebie", "Wartość – przemyślane wnętrze = wyższa cena przy sprzedaży"] }
    ]
  },
  3: {
    title: "POTRZEBA ZMIAN", subtitle: "Retusz Przestrzeni", description: "Coś nie funkcjonuje prawidłowo. Sprawdźmy, czy można lepiej.", icon: "iconHourglass",
    stages: [
      { number: 1, title: "Masz lokal od dawna", icon: "iconHourglass", question: "Coś jednak nie funkcjonuje prawidłowo...", subQuestion: "Czujesz, że można lepiej, ale nie wiesz jak? Dowiedz się..." },
      { number: 2, title: "Symptomy złego układu", icon: "iconAlert", points: ["Ciągły bałagan mimo sprzątania", "Brak miejsca na wszystko", "Niewygodne codzienne czynności", "Pomieszczenia które nie są używane", "Uczucie ciasności mimo dużej powierzchni"] },
      { number: 3, title: "Audyt zdiagnozuje problemy", icon: "iconCheck", points: ["Przeanalizujemy Twoje nawyki i potrzeby", "Znajdziemy źródło problemów", "Zaproponujemy konkretne rozwiązania", "Pokażemy jak zmienić przestrzeń bez remontu", "Lub zaplanujemy efektywny remont"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Diagnoza – zrozumiesz dlaczego coś nie działa", "Rozwiązania – konkretne pomysły na zmiany", "Priorytetyzacja – wiesz od czego zacząć", "Komfort życia – lokal wreszcie wspiera Twoje potrzeby"] }
    ]
  },
  4: {
    title: "POD WYNAJEM", subtitle: "Kalkulator rentowności", description: "Sprawdźmy jak szybko i niedrogo dostosować lokal.", icon: "iconKey",
    stages: [
      { number: 1, title: "Masz lokal inwestycyjny", icon: "iconKey", question: "Chcesz wynajmować z zyskiem?", subQuestion: "Możemy szybko i niedrogo sprawdzić jak ją dostosować do najmu." },
      { number: 2, title: "Typowe problemy lokali pod wynajem", icon: "iconAlert", points: ["Nieprzemyślany układ odstraszający najemców", "Za mała rentowność w stosunku do potencjału", "Brak uniwersalności dla różnych grup najemców", "Wysokie koszty utrzymania zjadające zyski", "Nieoptymalne wykończenie = wyższe koszty remontów"] },
      { number: 3, title: "Audyt maksymalizuje rentowność", icon: "iconCheck", points: ["Sprawdzimy jak zwiększyć atrakcyjność dla najemców", "Zaproponujemy optymalne rozwiązania wykończeniowe", "Pokażemy jak obniżyć koszty eksploatacji", "Doradzimy jak uniknąć drogich błędów", "Zaplanujemy inwestycję pod długoterminowy zysk"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Wyższa stawka najmu – atrakcyjna przestrzeń = więcej zainteresowanych", "Szybszy najem – przemyślany układ przyciąga najemców", "Niższe koszty – optymalizacja mediów i materiałów", "Długoterminowy zysk – inwestycja która się zwraca"] }
    ]
  },
  5: {
    title: "Nowy Projekt Wnętrza", subtitle: "Projekt bez zbędności", description: "Mniej dekoracji, więcej konkretów.", icon: "iconSparkles",
    stages: [
      { number: 1, title: "Szukasz projektu wnętrza", icon: "iconSparkles", question: "Niezależnie od statusu twojego lokalu...", subQuestion: "Chcesz funkcjonalny projekt bez przepłacania za zbędne dekoracje?" },
      { number: 2, title: "Tradycyjne projekty są drogie", icon: "iconAlert", points: ["Wysokie koszty projektowania (często 5-10 tys. zł)", "Długi czas realizacji (2-3 miesiące)", "Skupienie na dekoracjach zamiast funkcji", "Drogie materiały bez uzasadnienia", "Brak elastyczności w realizacji"] },
      { number: 3, title: "Nasz projekt to konkret", icon: "iconCheck", points: ["Skupiamy się na funkcjonalności i ergonomii", "Optymalizujemy koszty bez utraty jakości", "Szybka realizacja projektu (1-2 tygodnie)", "Praktyczne rozwiązania dla Twojego stylu życia", "Pełna dokumentacja techniczna"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Oszczędność – projekt 2-3x tańszy niż u tradycyjnych architektów", "Szybkość – gotowy projekt w ułamku czasu", "Praktyczność – każdy element ma uzasadnienie", "Elastyczność – łatwe modyfikacje i adaptacje"] }
    ]
  },
  6: {
    title: "JESTEŚ DEWELOPEREM", subtitle: "Partner Inwestycji", description: "Upewnijmy się, że oddajesz klientom najwyższą jakość.", icon: "iconHouseUp",
    stages: [
      { number: 1, title: "Budujesz dla klientów", icon: "iconHouseUp", question: "Chcesz zapewnić najwyższą jakość?", subQuestion: "Spróbujmy razem sprawdzić, co da się poprawić w Twojej inwestycji." },
      { number: 2, title: "Ryzyko dla dewelopera", icon: "iconAlert", points: ["Układy nieoptymalne dla przyszłych mieszkańców", "Błędy ergonomiczne w standardowych projektach", "Marnowana przestrzeń w lokalach", "Niezadowoleni klienci = gorsze opinie", "Trudności w sprzedaży/wynajmie problemowych lokali"] },
      { number: 3, title: "Audyt deweloperski", icon: "iconCheck", points: ["Sprawdzimy ergonomię i funkcjonalność układów", "Wykryjemy problemy zanim trafią do klientów", "Zaproponujemy optymalizacje zwiększające wartość", "Pomożemy stworzyć lokale łatwiejsze w sprzedaży", "Doradzamy jak zwiększyć satysfakcję klientów"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Jakość – zadowoleni klienci = lepsza reputacja", "Sprzedaż – lepsze lokale sprzedają się szybciej", "Wartość – optymalne układy = wyższa cena za m²", "Przewaga – wyróżnij się jakością na tle konkurencji"] }
    ]
  }
};

const iconsAlter2 = {
  iconSearch: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  iconContract: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 15l2 2 4-4"></path>',
  iconHourglass: '<path d="M6.5 2h11M6.5 22h11M6 2v4l6 6-6 6v4M18 2v4l-6 6 6 6v4M12 12h.01" stroke-linecap="round" stroke-linejoin="round"/>',
  iconKey: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
  iconSparkles: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z">',
  iconHouseUp: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="12 15 12 9"></polyline><polyline points="9 12 12 9 15 12"></polyline>',
  iconHome: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  iconAlert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path> <line x1="12" y1="8" x2="12" y2="13"></line><circle cx="12" cy="17" r="0.3"></circle>',
  iconCheck: '<polyline points="20 6 9 17 4 12"></polyline>',
  iconTrending: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>'
};

document.addEventListener('DOMContentLoaded', function() {
  initSchematAlter2();
});

function initSchematAlter2() {
  renderScenarioCardsAlter2();
  const backBtn = document.getElementById('back-btn');
  const collapseBtn = document.getElementById('collapse-btn');
  if (backBtn) backBtn.addEventListener('click', function(e) { e.preventDefault(); hideFlowchartAlter2(); });
  if (collapseBtn) collapseBtn.addEventListener('click', function(e) { e.preventDefault(); hideFlowchartAlter2(); });
}

function renderScenarioCardsAlter2() {
  const container = document.getElementById('scenario-selector');
  if (!container) return;

  container.innerHTML = Object.keys(scenariosDataAlter2)
    .filter(id => scenarioConfigAlter2[id])
    .map(id => {
      const scenario = scenariosDataAlter2[id];
      const imageUrl = scenarioImages[id];
      return `<div class="scenario-card" data-scenario="${id}"><div class="scenario-image" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url('${imageUrl}');"><svg class="scenario-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconsAlter2[scenario.icon]}</svg></div><div class="scenario-content"><h3>${scenario.title}</h3><p class="scenario-title">${scenario.subtitle}</p><p class="scenario-desc">${scenario.description}</p><div class="scenario-cta">Zobacz schemat →</div></div></div>`;
    }).join('');

  document.querySelectorAll('.scenario-card').forEach(card => {
    card.addEventListener('click', function() {
      const scenarioId = parseInt(this.getAttribute('data-scenario'));
      showFlowchartAlter2(scenarioId);
    });
  });
}

function showFlowchartAlter2(scenarioId) {
  const data = scenariosDataAlter2[scenarioId];
  if (!data) return;

  const selector = document.getElementById('scenario-selector');
  const container = document.getElementById('flowchart-container');
  const steps = document.getElementById('flowchart-steps');
  const collapseBtn = document.getElementById('collapse-btn');

  if (selector) selector.style.display = 'none';
  if (container) container.style.display = 'block';
  if (collapseBtn) collapseBtn.style.display = 'inline-block';

  if (steps) {
    steps.innerHTML = data.stages.map(stage => `<div class="flow-step"><div class="flow-step-number">${stage.number}</div><div class="flow-step-header"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconsAlter2[stage.icon] || iconsAlter2.iconHome}</svg><div class="flow-step-content"><h4>${stage.title}</h4>${stage.question ? `<p class="flow-step-question">${stage.question}</p>` : ''}${stage.subQuestion ? `<p class="flow-step-subquestion">${stage.subQuestion}</p>` : ''}${stage.points ? `<ul class="flow-step-list">${stage.points.map(point => `<li>${point}</li>`).join('')}</ul>` : ''}</div></div></div>`).join('');
  }

  setTimeout(() => {
    const schematSection = document.getElementById('schemat');
    if (schematSection) schematSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function hideFlowchartAlter2() {
  const selector = document.getElementById('scenario-selector');
  const container = document.getElementById('flowchart-container');
  const collapseBtn = document.getElementById('collapse-btn');

  if (container) container.style.display = 'none';
  if (selector) selector.style.display = 'grid';
  if (collapseBtn) collapseBtn.style.display = 'none';

  setTimeout(() => {
    const schematSection = document.getElementById('schemat');
    if (schematSection) schematSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function initCennikAnimations() {
  const cards = document.querySelectorAll('.cennik-card');
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}
