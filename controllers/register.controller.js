var connection = require('../models/conexao.db');
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "name": req.body.nome,
        "nickname": req.body.nickname,
        "email": req.body.email,
        "password": req.body.password,
        "created_at": today,
        "updated_at": today
    }
    connection.query('INSERT INTO utilizador SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Utilizador registado com sucesso!'
        })
      }
    });
}
