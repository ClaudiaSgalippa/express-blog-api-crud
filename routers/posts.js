const express = require("express"); /**Importiamo il framework "Express"*/
const router = express.Router(); /**Creiamo un router*/
const postsController = require("../controllers/postsController.js"); /**Import del controller*/

//**Rotte CRUD*/
router.get("/", postsController.index); /**INDEX - Mostra tutti i post*/
router.get("/:id", postsController.show); /**SHOW - Mostra un singolo post in base all'ID*/
router.post("/", postsController.store); /**STORE - Crea un nuovo post*/
router.put("/:id", postsController.update); /**UPDATE - Modifica del post tramite ID*/
router.patch("/:id", postsController.modify); /**MODIFY - Modifica parziale del post tramite ID*/
router.delete("/:id", postsController.destroy); /**DESTROY - Elimina il post tramite ID*/

module.exports = router; /**Esportiamo il router per poterlo usare (app.js)*/