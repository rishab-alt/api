const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/atc/online', async (req, res) => {
  try {
    const response = await axios.get('https://api.vatsim.net/v2/atc/online');
    const onlineAtcData = response.data;

    res.render('online-atc', { onlineAtcData });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/atc/online', async (req, res) => {
    try {
      const response = await axios.get('https://api.vatsim.net/v2/atc/online');
      const onlineAtcData = response.data;
  
      res.render('online-atc', { onlineAtcData });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get('/metar/:icao', async (req, res) => {
    try {
      const icao = req.params.icao;
      const response = await axios.get(`https://metar.vatsim.net/${icao}`);
      const metarData = response.data;
  
      // Render the METAR page with METAR data
      res.render('metar', { metarData });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
