# System Zarządzania Projektami Portfolio

## Przegląd

Projekt portfolio jest teraz zorganizowany w prosty, łatwy w zarządzaniu system. Wszystkie dane projektów znajdują się w jednym pliku (`main.js`), a każdy projekt ma numeryczne ID.

## Struktura Projektu

```
main.js - Zawiera wszystkie dane projektów (tablica `projektyData`)
  ├── id: 1, 2, 3... (numeryczne ID projektu)
  ├── title: "Nazwa Projektu"
  ├── type: "Dom", "Inwestycja", itp.
  ├── size: "120m²"
  ├── date: "2025"
  ├── images: [] (tablica URLów do zdjęć)
  ├── problem: "Opis wyzwania"
  ├── solution: "Jak to rozwiązaliśmy"
  ├── result: "Osiągnięty rezultat"
  └── benefits: [] (tablica korzyści)
```

## Jak Dodać Nowy Projekt

### Krok 1: Przygotuj Dane
Otwórz `main.js` i znajdź tablicę `projektyData` (linia ~178).

### Krok 2: Dodaj Nowy Wpis
Dodaj nowy obiekt do tablicy:

```javascript
{
  id: 4,
  title: "Nazwa Twojego Projektu",
  type: "Dom",
  size: "100m²",
  date: "2025",
  images: [
    "https://link-do-zdjecia-1.jpg",
    "https://link-do-zdjecia-2.jpg",
    "https://link-do-zdjecia-3.jpg"
  ],
  problem: "Jakie było główne wyzwanie?",
  solution: "Jak Ty to rozwiązałeś?",
  result: "Jaki był ostateczny rezultat?",
  benefits: [
    "Korzyść 1",
    "Korzyść 2",
    "Korzyść 3"
  ]
}
```

### Krok 3: Dodaj Zdjęcia
- Możesz używać zewnętrznych linków (np. z Pexels, Unsplash)
- Lub przechowywać zdjęcia lokalnie w folderze `public/images/`

### Krok 4: Test
1. Uruchom: `npm run dev`
2. Przejdź do sekcji "Projekty"
3. Sprawdź czy nowy projekt wyświetla się prawidłowo

## Pola Projektu - Szczegółowy Opis

| Pole | Typ | Opis | Przykład |
|------|-----|------|---------|
| `id` | number | Unikalny identyfikator projektu | `1`, `2`, `3` |
| `title` | string | Nazwa/tytuł projektu | "Dom Szeregowy" |
| `type` | string | Kategoria projektu | "Dom", "Inwestycja", "Biuro" |
| `size` | string | Metraż projektu | "120m²", "85m²" |
| `date` | string | Rok wykonania | "2025", "2024" |
| `images` | array | Tablica URLów do zdjęć | `["url1", "url2"]` |
| `problem` | string | Opis problemu/wyzwania | "Chaotyczny układ..." |
| `solution` | string | Jak to rozwiązaliście | "Przeprojektowaliśmy..." |
| `result` | string | Osiągnięty rezultat | "Przestrzeń zyskała..." |
| `benefits` | array | Lista korzyści | `["Benefit 1", "Benefit 2"]` |

## Wymagania Dotyczące Zawartości

### Zdjęcia
- **Format**: JPG, PNG
- **Rozmiar**: Min. 800x500px (zalecane: 1920x1080)
- **Liczba**: Min. 1, maks. 10 na projekt
- **Źródła**:
  - Zewnętrzne linki (Pexels, Unsplash, itp.)
  - Lokalne pliki w `public/images/`

### Teksty
- **title**: Max. 50 znaków
- **problem**: 2-4 zdania
- **solution**: 2-4 zdania
- **result**: 2-4 zdania
- **benefits**: 3 elementy

## Licznik Projektów

Licznik automatycznie się aktualizuje. Wyświetla się w formacie: `Bieżący / Razem`

- Bieżący licznik jest liczony od 1
- Aktualizuje się automatycznie gdy dodasz nowy projekt

## Wskazówki Praktyczne

### Najlepsze Praktyki
1. Zawsze dodaj zdjęcie na początek (pierwsze zdjęcie = miniaturka)
2. Uporządkuj problemy od największego do najmniejszego
3. Rozwiązania powinny być konkretne i mierzalne
4. Korzyści powinny być widoczne dla klienta

### Optymalizacja Wydajności
- Używaj zdjęć skompresowanych (max. 500KB na zdjęcie)
- Jeśli jest wiele projektów, używaj linków zamiast lokalnych plików
- Testuj na różnych urządzeniach (mobile, tablet, desktop)

### SEO
- Zdjęcia posiadają alt-text z tytułem projektu
- Każdy projekt jest indeksowany przez wyszukiwarki
- Title i description są automatycznie SEO-friendly

## Dostępne Pola dla Przyszłych Rozszerzeń

Te pola mogą być dodane w przyszłości:
- `tags`: Tablicataż (`["tag1", "tag2"]`)
- `location`: Lokalizacja projektu
- `testimonial`: Opinia klienta
- `videoUrl`: Link do wideo z projektem
- `downloadUrl`: Link do pobrania oferty/dokumentacji

## Struktura Galerii Projektów

Każdy projekt posiada wbudowaną galerię:
- Przesuwanie strzałkami (poprzednie/następne zdjęcie)
- Klikanie na kropki (szybki dostęp do konkretnego zdjęcia)
- Swipe na urządzeniach mobilnych
- Nawigacja klawiaturą (strzałki lewo/prawo)

## Kontakt

Jeśli potrzebujesz pomocy lub chcesz dodać nowe funkcjonalności do systemu zarządzania projektami, skontaktuj się z zespołem deweloperskim.
