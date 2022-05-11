const db = require("../config/db");

exports.checkConnection = async (req, res) => {
  try {
    
    const { rows } = await db.query(`SELECT NOW()`);
    res.status(200).send("Banco de dados conectado com sucesso!");

  } catch (error) {

    console.error('checkConnection', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};