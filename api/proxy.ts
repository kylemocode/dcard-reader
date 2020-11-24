const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

app.get('/posts', async (req, res) => {
  const limit = req.query.limit;
  const before = req.query.before || undefined;
  try {
    if (before) {
      const data = await axios.get('https://dcard.tw/_api/posts?popular=true'+ '&limit=' + limit + '&before=' + before)
      res.json(data.data);
    } else {
      const data = await axios.get('https://dcard.tw/_api/posts?popular=true'+ '&limit=' + limit)
      res.json(data.data);
    }
  } catch(err) {
    console.log('error...', err)
    res.send(err);
  }
})

app.get('/post/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const data = await axios.get('https://dcard.tw/_api/posts/'+id)
    res.json(data.data);
  } catch(err) {
    res.send(err);
  }
})

app.listen(5000, () => {
  console.log('server listening on 5000...')
})
