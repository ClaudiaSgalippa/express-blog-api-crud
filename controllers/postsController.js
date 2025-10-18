const posts = require("../data/postsData.js") /**Import dell'array dei post*/

function index(req, res) { /**Mostra tutti i post*/
  res.json(posts); /**Ora in formato JSON*/
}

function show(req, res) { /**Mostra un singolo post in base all'ID*/
  const id = parseInt(req.params.id); /**Recuperiamo l'ID dall'URL e lo trasformiamo in un numero*/
  const post = posts.find(post => post.id === id); /**Cerchiamo il post nell'array tramite ID*/
  res.json(post); /**Ora in formato JSON*/
}

function store(req, res) { /**Crea un nuovo post*/
  res.send("Creazione di un nuovo post");
}

function update(req, res) { /**Modifica del post tramite ID*/
  res.send("Modifica di un post" + req.params.id);
}

function destroy(req, res) { /**Elimina il post tramite ID*/
  const id = parseInt(req.params.id); /**Recuperiamo l'ID dall'URL e lo trasformiamo in un numero*/
  const post = posts.find(post => post.id === id); /**Cerchiamo il post nell'array tramite ID*/

  posts.splice(posts.indexOf(post), 1); /**Rimuoviamo il post*/
  console.log("Lista aggiornata dei post:", posts); /**Stampiamo la lista aggiornata nel terminale*/
  res.sendStatus(204); /**Rispondiamo con stato 204 (No Content)*/
}

module.exports = {index, show, store, update, destroy}; /**Esportiamo tutte le funzioni*/