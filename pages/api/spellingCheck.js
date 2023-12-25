import { spellCheckByDAUM } from 'hanspell';

export default async function handler(req, res) {
  let data = [];
  const check = function (json) {
    data = data.concat(json);
  };
  const end = function () {
    res.json(data);
  };
  const error = function (err) {
    console.error('// error: ' + err);
  };

  spellCheckByDAUM(req.body.text, 6000, check, end, error);
}
