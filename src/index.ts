import express from 'express';

const serve = express();

serve.listen(3000, () => {
  console.log(`Friiverse Server running at http://localhost:3000`);
});