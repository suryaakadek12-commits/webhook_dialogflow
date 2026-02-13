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
    "07.30 Matematika",
    "08.50 IPA",
    "09.30 PJOK"
  ]
    rabu: [
    "07.30 Bahasa Bali",
    "08.50 IPAS",
    "09.30 Bahasa Indonesia"
  ],
    kamis: [
    "07.30 Bahasa Bali",
    "08.50 IPAS",
    "09.30 Bahasa Indonesia"
  ],
    jumat: [
    "07.30 Bahasa Bali",
    "08.50 IPAS",
    "09.30 Bahasa Indonesia"
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
