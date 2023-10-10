var connection = require('../models/conexao.db');

/* AUTENTICADOR DE lOGIN */
module.exports.authenticate = function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  connection.query('SELECT * FROM utilizador WHERE email = ?', [email], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      if (results.length > 0) {
        if (password == results[0].password) {

          res.redirect('/home')

        } else {
          res.json({
            status: false,
            message: "O email ou a password estão incorretos!"
          });
        }

      }
      else {
        res.json({
          status: false,
          message: "Este email não está associado a nenhum utilizador!"
        });
      }
    }
  });
} 