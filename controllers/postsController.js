const posts = require("../data/postsData.js") /**Import dell'array dei post*/

function index(req, res) { /**Mostra tutti i post*/  
  const tag = req.query.tag; /**Salviamo il valore del parametro "tag" dalla query string, se presente*/

  if (!tag) { /**Se non è stato specificato nessun tag, restituiamo tutti i post in formato JSON*/
    return res.json(posts);
  }
  const filteredPosts = posts.filter(post => /**Altrimenti filtriamo i post che includono quel tag*/
    post.tags.includes(tag)
  );

  res.json(filteredPosts); /**Restituiamo solo i post filtrati, in formato JSON**/
}

function show(req, res) { /**Mostra un singolo post in base all'ID*/
  const id = parseInt(req.params.id); /**Recuperiamo l'ID dall'URL e lo trasformiamo in un numero*/
  const post = posts.find(post => post.id === id); /**Cerchiamo il post nell'array tramite ID*/
  
  if (!post) { /**Se non troviamo alcun post con quell'ID*/
    res.status(404); /**Imposta lo status HTTP 404*/
    return res.json({ /**Sempre in formato JSON*/
      status: 404, /**Codice errore*/
      error: "Not Found", /**Tipo di errore*/
      message: "Post non trovato" /**Messaggio d'errore*/
    });
  }
  
  res.json(post); /**Se invece esiste, restituiamo il post (sempre in formato JSON)*/
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

  if (!post) { /**Se non troviamo alcun post con quell'ID*/
    res.status(404); /**Imposta lo status HTTP 404*/
    return res.json({ /**Sempre in formato JSON*/
      status: 404, /**Codice errore*/
      error: "Not Found", /**Tipo di errore*/
      message: "Post non trovato" /**Messaggio d'errore*/
    });
  }
  posts.splice(posts.indexOf(post), 1); /**Se invece esiste, rimuoviamo il post*/
  console.log("Lista aggiornata dei post:", posts); /**Stampiamo la lista aggiornata nel terminale*/
  res.sendStatus(204); /**Rispondiamo con stato 204 (No Content)*/
}

module.exports = {index, show, store, update, destroy}; /**Esportiamo tutte le funzioni*/