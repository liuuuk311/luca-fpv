---
title: La Bibbia dell'FPV
date: "2020-03-23T00:00:00.000Z"
excerpt: Hai o vorresti un drone FPV ma ti scoraggiano tutti gli acronimi? Non sai qual è il voltaggio giusto per la tua batteria? Ogni pilota, prima di volare deve leggere almeno una volta questo articolo.
category:
    - Tutorial
tags: 
    - Principianti
featured: true
---

Seguendo queste linee guida capirai in fretta come funziona il mondo FPV e le tue abilità da pilota cresceranno rapidamenti. La cosa più importante è che seguendo queste regole ti divertirai in fretta e molto più spesso. 

Prima di arrivare alla lista, vorrei premettere che questo elenco riduce solo la possibilità di guasti tecnici, smarrimento e distruzione del velivolo, o peggio della possibilità di ferire qualcuno. Non viene tentuta in considerazione la stupidità del pilota. <!-- Esempio di comportamento stupido, consiglio di non fare FPV in quel caso -->

Se invece vuoi avere un esperienza positiva nel mondo FPV, allora continua a leggere.  

## Termini Comuni

* **FPV** - First Person View ➡ Visuale in prima persona, come se tu fossi seduto all'interno del velivolo
* **LOS** – Line of Sight ➡ Pilotare a vista, con il quad sempre visbile dal pilota a terra  
* **DVR** – Digital Video Recording ➡ Sitema che permette di registrare il video mostrato negli occhiali
* **FC** – Flight Controller ➡ Controllore di volo, una scheda elettronica che asgisce come il cervello del drone
* **FW** – Firmware ➡ Software installato su schede elettroniche
* **ACC** – Accelerometro ➡ Sensore che indica l'accelerazione istantanea
* **PID** – Proporzionale Integrale Derivativo ➡ Numeri che puoi aggiustare per far volare il tuo quad nel modo in cui preferisci
* **CG** – Centro di gravità o baricentro ➡ Punto corrispondente al valor medio della distribuzione della massa quad
* **OSD** – On Screen Display ➡ Informazioni aggiuntive sullo schermo che riportano tipicamente la batteria rimanente 

## Batterie

* **LiPo** – Lithium Polymer Battery ➡ Tipo di batterie utilizzate per far volare i droni
* **mAh** – milli Ampere-ora ➡ La capacità di una batteria, come se fosse il serbatoio di un'auto

Le lipo a differenza delle batterie comuni, sono considerate "scariche" quando il loro voltaggio è 3.5 V per cella. 

Una singola cella ai polimeri di litio è: 

* Completamente carica a 4.2 V per cella
* Voltaggio di stoccaggio a 3.8 V per cella
* Completamente scarica a 3.5 V per cella

NON scaricare le tue batterie LIPO sotto i 3.5 V per cella, altrimenti rischi di danneggiarle accorciando la loro vita.

Le batterie utilizzate hanno diverse celle. Maggiore è il numero di queste celle e maggiore è il voltaggio complessivo, che si traduce in più potenza. Ogni cella ha un valore nominale di 4.2 V, e il numero di celle si conta in S. Quindi una batteria 1S avrà una sola cella e il voltaggio complessivo sarà di 4.2 V. 

* 2S ➡ 2 Celle, voltaggio complessivo 8.4 V
* 3S ➡ 3 Celle, voltaggio complessivo 12.6 V
* 4S ➡ 4 Celle, voltaggio complessivo 16.8 V
* 5S ➡ 5 Celle, voltaggio complessivo 21.0 V
* 6S ➡ 6 Celle, voltaggio complessivo 25.2 V

Le batterie più comuni sono le 4S e le 6S. Facendo un esempio pratico, se si vola un una lipo 4S al momento della partenza la batteria dovrebbe avere un voltaggio di 16.8 V e si dovrebbe atterrare quando il voltaggio è circa 14.8 V (questo è il voltaggio che andrebbe misurato con la batteria a freddo). E' normale che durante il volo, il voltaggio della batteria scenda sotto i 15 V, questo fenomeno viene anche chiamato SAG. 

Il voltaggio di stoccaggio per un pacco di batterie 4S è 15.2 V. Se sai di non utilizzarle più di 5 giorni, è meglio portare le batterie al giusto voltaggio. Quando sei pronto un'altra sessione di volo, ricarica le batterie in tempo.

Un altro parametro delle batterie viene indicato con la C, tipicamente è un numero arbitrario che rappresenta quanta potenza può fornire la batteria.

## Radio e Video

* **RC** – Radio Connessione ➡ Collegamento radio tra il radiocomando e la ricevente 
* **RSSI** – Radio Signal Strength Indicator ➡ Numero che indica la qualità della connessione radio
* **TX** - Trasmettitore ➡ Componente elettronico che invia segnali elettromagnetici
* **RX** – Ricevente ➡ Componente elettronico che riceve segnali elettromagnetici
* **VTX** – Video Trasmettitore ➡ Componente elettronico che invia segnali video 
* **VRX** – Video Ricevente ➡ Componente elettronico che riceve ed interpreta segnali video
* **RTH** – Return To Home ➡ Funzione che permette al drone di tornare alla base

### Antenne Radio e Video

Le antenne usate in questo hobby sono prevalntemente di due tipi:

* Omnidirezionali ➡ Antenne che inviano e ricevono segnali da tutte le direzioni
* Patch ➡ Antenne ad alto guadagno, garantiscono più range (distanza), ma sono nella direzione in cui puntano

Il guadagno di un antenna di misura i dbi. Più il guadagno è alto e maggiore sarà la distanza a cui potrà inviare e ricevere segnali. Le antenne con alto guadagno, sono direzionali quindi inviano e ricevono segnali in una precisa direzione. Antenne con guadagno inferiore garantiscono un miglior segnale distribuito equamente in aree vicine. 

Per la maggior parte dei quad con sistemi FPV è sufficiente avere un'antenna omnidirezionale da 3dbi sul ricevitore video, accoppiata ad una VTX di buona qualità con un'antenna omnidirezionale da 3dbi.

<!-- Ecco una lista delle migliori VTX sul mercato. --> <!-- Se invece sei in dubbio su quale antenna sia meglio per le tue esigenze ecco questo articolo che spero ti possa aiutare. -->

## Protocolli e Frequenze

In breve, un protocollo è un insieme di regole che vengono stabilite, in questo caso per trasmettere e comprendere segnali elettrici. Ci sono diversi protocolli radio che permettono di controllare il quad, i migliori al momento sono:

* **SBUS** ➡ Molto comune e veloce
* **CRSF** ➡ Il protocollo CrossFire è il più veloce al momento

Le frequenze più usate per la connessione radio sono 900 MHz, 2.4 GHz, e 5.8 GHz. La più usata è 2.4 GHz. Per quanto riguarda la connessione video analogica, le frequenze sono le stesse, ma la più comune è 5.8 GHz.

Tipicamente, segnali a frequenze più basse riescono a penetrare con più facilità gli ostacoli. Inoltre hanno una portata maggiore.

## Consigli Generali

Di fondamentale importanza è capire che meno esperienza si ha, e più sarà il tempo necessario per reagire. Questo assumento che tutta la tua attrezzatura funzioni correttamente. Ecco una serie di raccomandazioni generali:

Comincia con il minimo indispensabile e aggiungi compoenti un po' alla volta. Ogni volta che aggiungi un nuovo componente testa completamente l'intero sistema. Che sia testare che il video funzioni oppure che i motori si armano correttamente (chiaramente dopo aver rimosso le eliche), o anche solo alimentare il quad per esser sicuri che tutti i componenti siano saldati correttamente. 

Quando costruisci il primo velivolo FPV assicurati di inizare in modo semplice. Meglio ancora seguire i consigli dei più esperti anche acquistando i componenti consigliati. 

### Linee Guida per FPV

* Costruisci sempre in modo intelligente e garantendo un po' di gioco tra i vari componenti. Questi quad si schianteranno di sicuro e se al loro interno è tutto montato in modo stretto, sarà più facile che qualcosa si rompi.

* Salda bene e fai tanta pratica nel saldare. Probabilmente saldare è la cosa più importante quando devi costruire il tuo drone.

* Una componenti che hanno un buona reputazione o sono molto popolari. Non comprare qualcosa di una marca sconosciuta, perchè quando avrai un problema, ci saranno meno persone in grado di aiutarti.

* Evita di alimentare la VTX o la telecamera direttamente dalla batteria, a meno che sia certo che questi componenti supportano da 2S a 6S e che abbiano al loro interno un filtro.

* Scherma i fili arrotolandoli su sè stessi. Questa è una buona pratica per evitare di ricevere disturbi nel segnale video. 

* Non volare mai con un sistema video che sia in grado di raggiungere distanze maggiori del tuo sistema RC.

* La frequenza del sistema FPV deve essere sempre maggiore di quella RC

* Controlla sembre i segnali "vitali" del quad come ad esempio: voltaggio, mAh consumati, RSSI. Il modo più comune di controllare queste cose è tramite un OSD.

* Cerca di volare sempre in zone disabitate e prive di rumore (elettromagnetico). Cerca sempre di avere il drone in LOS.

* Usa 2.4 GHz per il segnale RC e 5.8 GHz per il video a meno che tu non voglia volare per lunge distanze. In tal caso un sistema a frequenze più basse è meglio. 

* Non volare MAI senza DVR

* Ogni volta prima di decollare, controlla che le eliche siano montate correttamente. 

* Non rischiare troppo, soprattutto in una nuova location

* Non portare al limite il tuo sistema. Se non conosci i limiti del tuo sistema ricorda una cosa: se non vedi non voli. Se il tuo segnale video è disturbato, torna indietro. 

* Tieni sempre un punto di riferimento per sapere tu pilota dove sei rispetto al tuo quad. Avere una buona cognizione dello spazio può fare la differenza tra avere una bellissima esperienza di volo e potenzialmente perdere o distruggere il tuo drone, oppure peggio e ferire qualcuno. 

* La potenza di trasmissione necessaria per la maggior parte dei voli in FPV è tra i 25 e i 200 mW. Se hai probelmi di ricezione controlla che le antenne siano collegate bene. Un altro motivo del cattivo segnale potrebbe essere l'ambiente in cui voli, ad esempio la presenza di molti WiFi domesitici. 

* Non comprare le cose più economiche a meno che non si è certi della loro affidabilità. Non vale la pena rischiare di perdere un drone da centinaia di euro, per risparmiare qualche decina di euro su un componente.

* Controlla sempre tutto prima di volare, spesso quando prepari lo zaino con tutta probabilità l'antenna può muoversi, un elica può piegarsi e cosi via. 

* Prima di volare in FPV, assicurati anche per qualche secondo di essere in grado di volare in LOS

  

### Regole di comportamento per i piloti

Queste regole principamente valgono quando voli in compagnia di altri piloti. 

* Sii sempre amichevole e comincia chiedenndo se ti puoi unire ad un gruppo di piloti già esistente
* Se c'è una particolare location in cui hai visto volare in un video, chiedi sempre conferma ad un pilota locale prima di volare lì
*  Comincia sempre chiedendo su quale canale e frequenza volano gli altri piloti, fallo ancor prima di disfare lo zaino
* Avvisa chiaramente tutti più volte prima di alimentare il tuo quad. "Sto per connettermi sul canale X, va bene?" Una volta alimentato il tuo drone, tieniti pronto comunque a disconnetterlo immediatamente nel caso in cui qualche altro pilota perda il video
* Collega la batteria sempre lontano dagli altri piloti che stanno volando. Anche se siete su diversi canali e frequenze,  potreste comunque "accecare" qualche pilota se la vostra VTX, soprattutto se di bassa qualità, è molto vicino agli occhiali di qualche altro pilota
* Sempre per problemi di interferenza, quando atterri dopo un volo, se c'è gente che sta ancora volando, non atterrare vicino agli altri. Meglio farsi una passeggiata per raccogliere il drone piuttosto che far schiantare qualche altro pilota
* Non testare mai il tuo equipaggiamento vicino a persone che stanno volando
* Si sempre conscio di dove stai volando, stai constantemente attento a pedoni, cose e cambiamenti di luce