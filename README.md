## Założenia projektu 

Aplikacja internetowa służąca do dodawania i wyszukiwania firm w okolicy

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

## Zdjęcia poglądowe

![Widok projektu](https://nextjs-festival.s3.eu-north-1.amazonaws.com/Zrzut+ekranu+2024-02-1+o+19.18.32.png)
![Widok projektu](https://nextjs-festival.s3.eu-north-1.amazonaws.com/Zrzut+ekranu+2024-02-1+o+19.18.51.png)
![Widok projektu](https://nextjs-festival.s3.eu-north-1.amazonaws.com/Zrzut+ekranu+2024-02-1+o+19.19.38.png)
![Widok projektu](https://nextjs-festival.s3.eu-north-1.amazonaws.com/Zrzut+ekranu+2024-02-1+o+19.20.26.png)
![Widok projektu](https://nextjs-festival.s3.eu-north-1.amazonaws.com/Zrzut+ekranu+2024-02-1+o+19.22.06.png)

## Instrukcja instalacji projektu

Pobieramy projekt na lokalne środowisko
Tworzymy plik .env i kopiujemy do niego zawartość .env.example, po czym definiujemy swoje własne klucze API i dane konfiguracyjne

Instalujemy npm za pomocą komendy:

```bash
npm install
```

Uruchamiamy aplikacje na lokalnym środowisku:

```bash
npm run watch
```

Domyśnie, jeżeli ustawimy port na 3000 w .env albo nie uswawimy go wcale, aplikacja powinna być dostępna na adresie [http://localhost:3000](http://localhost:3000). Adres wklejamy do przeglądarki internetowej.
