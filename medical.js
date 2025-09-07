import readlineSync from "readline-sync";

function medicalExpertSystem(symptoms) {
  const { temperature, cough, headache, rash, soreThroat, lossSmell } = symptoms;

  if (temperature > 38 && cough) {
    return "Диагноз: тұмау (influenza)";
  }
  if (headache && rash) {
    return "Диагноз: аллергия ықтимал";
  }
  if (temperature >= 37 && soreThroat) {
    return "Диагноз: ангина/тонзиллит ықтимал";
  }
  if (cough && temperature < 38) {
    return "Диагноз: суық тию (common cold)";
  }
  if (lossSmell && temperature >= 37) {
    return "Диагноз: вирустық инфекция (COVID-19 болуы мүмкін)";
  }

  return "Диагноз анықталмады: дәрігерге жүгініңіз.";
}

function main() {
  console.log("🩺 Медициналық сараптамалық жүйе (Rules only)\n");

  const temperature = parseFloat(readlineSync.question("Температура (°C): "));
  const cough = readlineSync.question("Жөтел бар ма? (иә/жоқ): ").toLowerCase() === "иә";
  const headache = readlineSync.question("Бас ауруы бар ма? (иә/жоқ): ").toLowerCase() === "иә";
  const rash = readlineSync.question("Тері бөртпесі бар ма? (иә/жоқ): ").toLowerCase() === "иә";
  const soreThroat =
    readlineSync.question("Тамақ ауыруы бар ма? (иә/жоқ): ").toLowerCase() === "иә";
  const lossSmell =
    readlineSync.question("Иіс/дәм жоғалуы бар ма? (иә/жоқ): ").toLowerCase() === "иә";

  const symptoms = { temperature, cough, headache, rash, soreThroat, lossSmell };

  const result = medicalExpertSystem(symptoms);
  console.log("\n👉 " + result);
}

main();
