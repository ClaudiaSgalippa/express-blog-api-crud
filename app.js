const express = require("express"); /**Importiamo il framework "Express"*/
const app = express(); /**Creiamo un'istanza dell'applicazione "Express"*/
const port = 3000; /**Dichiariamo il numero della porta su cui il server ascolterà*/
const postsRouter = require("./routers/posts.js"); /**Import del router con le rotte (CRUD) per i post*/

app.use(express.static("public")); /**Middleware - Configuriamo la cartella "public" per rendere siponibili i file "statici" (le immagini)*/

app.use(express.json()); /**Middleware - attivazione Bodyparser - Configuriamo il file per leggere i dati JSON (per le CRUD: prima per INDEX, SHOW & DESTROY, ora anche per STORE e UPDATE)*/

app.get("/", (req, res) => { /**Definiamo la rotta principale ("/")*/
    res.send("<h1>Server del mio blog</h1>") /**Risposta inviata al client quando visita la home*/
}); 

app.use("/posts", postsRouter); /**Indichiamo che tutte le rotte definite in "posts.js" partiranno con /posts (montiamo il router per i post)*/

app.listen(port, () => { /**Avviamo il server e lo facciamo "ascoltare" sulla porta indicata precedentemente*/
    console.log(`Prova di ricezione ${port}`); /**Console.log di prova per vedere se arriva la "chiamata"*/
});