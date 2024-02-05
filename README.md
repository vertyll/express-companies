## Link: https://express-firmy-7b94cd4bff8e.herokuapp.com/

## Założenia projektu 

Aplikacja internetowa służąca do dodawania i wyszukiwania firm w okolicy.

## Stos technologiczny

### Frontend:
- ejs jako view engine

### Backend:
- express jako framework do node.js
- MongoDB jako baza danych w projekcie
- nodemon w celu restartowanai serwera po każdym odświerzeniu pliku
- bcrypt do hashowania haseł
- cookie-parser do parsowania cookie
- dotenv w celu wykorzystania pliku .env
- helmet w celu zwiększenia zabezpieczeń serwisu
- json2csv w celu generowania pliku csv
- mongoose dla zarządzania bazą danych MongoDB
- rate-limiter-flexible w celu zabezpieczenia prób dostępu do serwisu
- multer do przetwarzania danych wejscowych formularzy

### Inne:
- ESLint do statycznej analizy kodu i utrzymania jednolitej jakości kodu

## Usługi chmurowe użyte w projekcie

### MongoDB Cloud Services

Do przechowywania danych w bazie danych została użyta platforma MongoDB Atlas.

## Zdjęcia poglądowe

![Widok projektu](https://raw.githubusercontent.com/vertyll/express-firmy/main/screenshots/Zrzut%20ekranu%202024-02-4%20o%2011.25.34.png?token=GHSAT0AAAAAACLIFWJGRXOJZ7RMGWZAQK5WZN7OXRA)
![Widok projektu](https://raw.githubusercontent.com/vertyll/express-firmy/main/screenshots/Zrzut%20ekranu%202024-02-4%20o%2011.26.10.png?token=GHSAT0AAAAAACLIFWJG7ZDIZLUPNGAS7CBKZN7OYAA)
![Widok projektu](https://raw.githubusercontent.com/vertyll/express-firmy/main/screenshots/Zrzut%20ekranu%202024-02-4%20o%2011.26.33.png?token=GHSAT0AAAAAACLIFWJHPWE3ZXE6WXPEIIK2ZN7OYBQ)
![Widok projektu](https://raw.githubusercontent.com/vertyll/express-firmy/main/screenshots/Zrzut%20ekranu%202024-02-4%20o%2011.27.06.png?token=GHSAT0AAAAAACLIFWJGO2XOJ35HFAUF2TEWZN7OYCQ)

## Instrukcja instalacji projektu

Pobieramy projekt na lokalne środowisko.
Tworzymy plik .env i kopiujemy do niego zawartość .env.example, po czym definiujemy swoje własne klucze API i dane konfiguracyjne.

Instalujemy npm za pomocą komendy:

```bash
npm install
```

Uruchamiamy aplikacje na lokalnym środowisku:

```bash
npm run watch
```

Domyśnie, jeżeli ustawimy port na 3000 w .env albo nie uswawimy go wcale, aplikacja powinna być dostępna na adresie [http://localhost:3000](http://localhost:3000). Adres wklejamy do przeglądarki internetowej.
