const Company = require("../db/models/company");

// Middleware sprawdzający, czy użytkownik jest właścicielem firmy
const checkOwnership = async (req, res, next) => {
  try {
    // Sprawdź, czy użytkownik jest zalogowany
    if (!req.session.user) {
      // console.log("Użytkownik nie jest zalogowany");
      return res.status(401).send("Nie jesteś zalogowany");
    }

    // Pobierz nazwę firmy z parametrów URL
    const { name } = req.params;
    // console.log("Nazwa firmy:", name);

    // Znajdź firmę na podstawie nazwy
    const company = await Company.findOne({ slug: name });
    // console.log("Firma:", company);

    // Sprawdź, czy firma istnieje
    if (!company) {
      // console.log("Firma nie istnieje");
      return res.status(404).send("Firma nie istnieje");
    }

    // Sprawdź, czy zalogowany użytkownik jest właścicielem firmy
    if (company.user.toString() !== req.session.user._id.toString()) {
      // console.log("Użytkownik nie jest właścicielem firmy");
      return res.status(403).send("Brak uprawnień do wykonania tej operacji");
    }

    // Jeśli użytkownik jest właścicielem firmy, przechodzimy do następnego middleware lub kontrolera
    // console.log("Użytkownik jest właścicielem firmy");
    next();
  } catch (error) {
    console.error("Błąd weryfikacji uprawnień użytkownika:", error);
    return res
      .status(500)
      .send("Wystąpił błąd weryfikacji uprawnień użytkownika");
  }
};

module.exports = checkOwnership;
