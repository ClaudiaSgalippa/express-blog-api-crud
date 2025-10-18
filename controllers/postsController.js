function index(req, res) { /**Mostra tutti i post*/
  res.send("Elenco di tutti i post");
}

function show(req, res) { /**Mostra un singolo post in base all'ID*/
  res.send("Dettagli del singolo post" + req.params.id);
}

function store(req, res) { /**Crea un nuovo post*/
  res.send("Creazione di un nuovo post");
}

function update(req, res) { /**Modifica del post tramite ID*/
  res.send("Modifica di un post" + req.params.id);
}

function destroy(req, res) { /**Elimina il post tramite ID*/
  res.send("Eliminazione del post" + req.params.id);
}

module.exports = {index, show, store, update, destroy}; /**Esportiamo tutto*/