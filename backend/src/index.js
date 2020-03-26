const express = require('express');
const cors = require('cors');
const routes =  require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */
/**
 * metodos HTTP:
 * 
 * GET: buscar uma informacao do back-end
 * POST: criar uma informacao no backend
 * put: alterar uma informacao no back end
 * DELETE: deltar uma informacao no back-end
 */

 /**
  * Tipos de parametros
  * 
  * Query Params: parametros nomeados enviados na rota apos "?"(filtros de paginacao)
  * Route Params: parametros utilizados para identificar recursos
  * Request Body: Corpo da requisicao, utilizado para criar e alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where('*')
    */


app.listen(3333);
