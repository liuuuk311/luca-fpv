---
title: "Risoluzione dei problemi video FPV"
date: "2020-09-07T00:00:00.000Z"
excerpt: Alcuni suggerimenti su come risolvere i problemi e le migliori pratiche da seguire per evitare problemi con i video FPV. L'interferenza e il rumore nel tuo feed video FPV possono essere un problema difficile da risolvere, vediamo quali sono le migliori soluzioni.
category:
    - Tutorial
tags: 
    - Risoluzione Problemi
featured: true
---

Se hai notato problemi relativi al video oppure all'OSD del tipo:

- Rumore costante nel video
- OSD intermittente: sempre, quando si arma, quando acceleri, durante flip e roll
- OSD scompare dopo pochi minuti di volo

Allora potrai essere in grado di risolvere questi problemi leggendo questo articolo.

## Alimentazione della VTX e della Camera

Per prima cosa, devi verificare quale tensione è in grado di ricevere in ingresso la tua camera FPV. La maggior parte delle telecamere FPV ha un'ampia tensione operativa spesso da 5V a 30V o anche superiore.

Il modo più sicuro per alimentare la tua fotocamera FPV è dalla VTX. Molte VTX moderne hanno un'uscita 5V filtrata dedicata per alimentare le telecamere FPV. Anche se stai già utilizzando una fonte di alimentazione filtrata per la tua VTX, sarebbe comunque meglio utilizzare l'uscita filtrata dalla VTX per la camera.

Se per qualsiasi motivo non fosse possibile alimentare la cam direttamente dalla VTX, la cosa migliore da fare è alimentare sia VTX che la fotocamera dalla stessa fonte di alimentazione filtrata e regolata.

La maggior parte dei problemi relativi al rumore sono causati dall'alimentazione della cam o della VTX (o anche entrambi), direttamente dalla batteria LiPo principale.

## L'alimentazione dalla LiPo

Come già detto, la maggior parte delle FPV cam e delle VTX moderne, possono essere alimentate direttamente da una batteria LiPo 4S o anche 6S. Tuttavia, anche se puoi farlo, non significa che sia consigliato.

Qualsiasi dispositivo video dovrebbe esser alimentato tramite una fonte stabile in modo da poter trasmettere un'immagine bella e pulita. Le condizioni di potenza fluttuanti costanti che sono causate dagli ESC e dai motori rendono rumorosa la tensione grezza di una batteria LiPo. Questo rumore può passare attraverso la PDB o l'FC e arrivare fino alla videocamera e alla VTX, manifestandosi quindi come interferenza negli occhiali.

Le VTX moderne hanno, quasi tutte, un filtro, non solo per i propri circuiti ma anche per l'uscita a 5V. Mentre le camere FPV generalmente hanno nessun filtro integrato. Quindi, per eliminare il rumore nel feed video FPV, è necessaria l'alimentazione più pulita possibile per la videocamera e la VTX, ed è proprio qui che entrano in gioco i condensatori.

## Condensatori

I condensatori vengono spesso utilizzati all'ingresso di alimentazione di un dispositivo per ridurre il rumore elettrico. Teoricamente un condensatore posizionato più vicino alla fonte del rumore è il più efficace, e quindi i piloti aggiungono i condensatori ai singoli ESC sui bracetti dei loro droni. Questo è specialmente vero nelle droni che richiedono molta potenza come ad esempio quelli della classe X.

In base a come alimenti la VTX dovresti posizionare il condensatore in posti diversi. Se riceve alimentazione da 5V, dovresti mettere il condensatore sulla pista dei 5V, se fosse 12V, allora dovresti metterla sulla pista dei 12V. Infine, se è alimentata direttamente dalla LiPo, metti il condensatore sul connettore XT60.

Spesso molte persone aggiungono i condensatori ai pad XT60 indipendentemente da come viene alimentata la VTX, e questo potrebbe aiutare a ridurre la quantità di rumore nel sistema di alimentazione in generale, ma potrebbe non essere la soluzione più efficace per il tuo video.

## Attorcigliare i fili

È buona norma attorcigliare il segnale video e la massa, questo agisce come uno schermo contro il rumore esterno indotto dagli ESC e BEC. Inoltre, tenere il segnale VTX e i cavi di alimentazione lontani da qualsiasi induttore BEC.

## ESC e FC BEC

Il MOSFET sull'ESC possono creare interferenze che influiscono sul tuo FC e, se la videocamera e il VTX sono collegati ad esso, potresti ottenere video rumorosi.

## Attenzione alla terra

Idealmente, tutti i pin di messa a terra sono gli stessi, ma in realtà non è sempre vero.

I pin di terra sono collegati utilizzando un pezzo di filo o una pista di rame su una PCB. Qualsiasi conduttore ha resistenza, capacità e induttanza.

Per questo motivo, ci sarà una differenza di tensione tra due pin di terra su un circuito stampato se c'è corrente che li attraversa. Come se fosse un resistore estremamente piccolo.

Questo è il motivo per cui è buona norma collegare la massa della VTX e camera allo stesso pin o a due pin di massa il più vicino possibile l'uno all'altro.

## Corretta connessione

Molti collegano il sistema FPV come mostrato nella seguente figura. 

![Connessione errata del sistema FPV](/images/rumore-video-fpv/cam_vtx_connessione_sbagliata.png)

* La camera alimentata dalla VTX tramite l'uscita 5V e massa sempre dalla VTX, semplicemente perché la VTX lo permette
* La VTX ha l'ingresso video e massa connessi all'uscita video e alla massa dell'OSD
* Il segnale video della camera connesso all'ingresso video dell'OSD

Non rimane altro da collegare e sembra tutto pronto, tuttavia questa non è la connessione ideale. 

Per avere una connessione ideale, la massa della camera dovrebbe esser collegata alla massa dell'OSD, come mostrato in figura. Questo collegamento aggiuntivo ha molti benefici. 

![Corretta connessione del sistema FPV](/images/rumore-video-fpv/cam_vtx_corretta_connessione.png)

**La regola generale** è il segnale video e la massa della camera devono esser connesse entrambe all'ingresso video e massa dell'OSD. Il segnale video e la massa della VTX vanno collegate entrambe all'uscita video e massa dell'OSD.

## Linee bianche

Le "linee bianche" sono solitamente un segno di rumore elettrico eccessivo nell'alimentazione della camera FPV o della VTX, o di entrambi. L'aggiunta di un condensatore all'alimentazione dell'ESC o dei pad XT60 dovrebbe solitamente risolverlo.

Quando ricevi linee nel tuo video FPV, prova prima a correggere la potenza della tua configurazione FPV alimentando la tua fotocamera FPV dalla tua VTX. Se non funziona, prova ad aggiungere un condensatore.

## Linee nere

Le "linee nere" sono generalmente correlate a bassa potenza, che sono comunemente causate da una VTX che richiede molta energia. Alcune VTX non funzionano bene con la tensione ridotta e potrebbero avere difficoltà a fornire la potenza di uscita desiderata.

Se ricevi linee nere nel feed video, potresti notare che il problema è peggio con una potenza di uscita maggiore come 800 mW rispetto a una potenza inferiore come 25 mw. Se fosse davvero così, allora è sicuramente correlato a una potenza o tensione insufficiente alla VTX.

Puoi provare ad alimentare il tuo VTX direttamente dalla batteria. Se questo non risolve il problema, potresti avere un VTX o una fotocamera difettosi.

## Quasi l'ultima risorsa

Se hai  alcune linee nel tuo video, ma nessuno dei precedenti punti è stato utile, potrebbe essere che la VTX o i cavi della telecamera  raccolgono del rumore da altri componenti. Questo potrebbe essere il motivo se esegui lunghi cavi di segnale dalla telecamera e dal VTX.

La soluzione potrebbe essere quella di utilizzare un "filo schermato" (mini cavo coassiale) al posto del normale filo di silicone.

## Controlla le antenne

Magari il tuo problema di rumore non è affatto legato all'alimentazione, molti problemi video possono essere ricondotti alle antenne. Assicurarsi che entrambe le antenne VTX e quelle sugli occhiali siano entrambe montate correttamente e che siano del tipo di connettore corretto, cioè RP-SMA/SMA , e della corretta polarizzazione RHCP/LHCP . Un'altra cosa che puoi provare è cambiare canale, potresti captare interferenze da una fonte esterna.
