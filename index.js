const express = require("express");
const app = express();

app.use(express.json());

const jadwal = {
  senin: [
    "07.30 Bahasa Bali",
    "08.50 IPAS",
    "09.30 Bahasa Indonesia"
  ],
  selasa: [
    "05.45 pjok",
    "09.30 dda",
    "14.20 matematika"
  ],
    rabu: [
    "07.30 ppkn",
    "08.50 matematika",
    "10.40 seni budaya",
    "12.00 sejarah",
    "13.40 bk", 
    "14.20 bahasa indonesia"
  ],
    kamis: [
    "07.30 kka",
    "08.50 dda",
    "13.40 agama"
  ],
    jumat: [
    "07.30 informatika",
    "11.20 bahasa inggris"
  
  ],
};

app.post("/webhook", (req, res) => {
  const hari = req.body.queryResult.parameters.hari;

  let jawaban = "Jadwal tidak ditemukan.";

  if (jadwal[hari]) {
    jawaban = `Jadwal hari ${hari}:\n` + jadwal[hari].join("\n");
  }

  res.json({
    fulfillmentText: jawaban
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server jalan di port " + port);
});
