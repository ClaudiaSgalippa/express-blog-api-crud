/**CRUD*/
const posts = require("../data/postsData.js") /**Import dell'array dei post*/

/**INDEX*/
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

/**SHOW*/
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

/**STORE*/
function store(req, res) { /**Crea un nuovo post*/
  const newId = posts[posts.length - 1].id + 1; /**Creazione di un nuovo id, incrementando di +1 quello già presente*/
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  }; /**Creiamo un nuovo oggetto post con i dati ricevuti dal body*/

  posts.push(newPost); /**Aggiungiamo il nuovo post all'array esistente*/
  console.log(posts) /**Check di controllo*/

  res.status(201); /**Restituzione dello stato*/
  res.json(newPost); /**Restituzione del nuovo post*/
}

/**UPDATE*/
function update(req, res) { /**Modifica del post tramite ID*/
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

  /**Aggiorniamo i campi del post con i nuovi valori ricevuti nel body*/
  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  post.image = req.body.image || post.image;
  post.tags = req.body.tags || post.tags;

  console.log(posts) /**Check dei post*/
  res.json(post); /**Restituiamo il post aggiornato*/
}

/**MODIFY*/
function modify(req, res) { /**Modifica parzialmente del post tramite ID*/
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

  /**Aggiorniamo i campi del post con i nuovi valori ricevuti nel body*/
  req.body.title ? post.title = req.body.title : post.title = post.title;
  req.body.content ? post.content = req.body.content : post.content = post.content;
  req.body.image ? post.image = req.body.image : post.image = post.image;
  req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;

  console.log(posts) /**Check dei post*/
  res.json(post); /**Restituiamo il post aggiornato*/
}

/**DESTROY*/
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

module.exports = {index, show, store, update, modify, destroy}; /**Esportiamo tutte le funzioni*/