---
title: Come tunare i PID
date: "2020-05-02T00:00:00.000Z"
excerpt: In questo tutorial cerco di spiegare cosa si intende con PID, quali sono gli effetti sulla stabilità e manovrabilità del drone e anche qualche consiglio su come tunare i PID. 
category:
    - Tutorial
tags: 
    - Intermedio
featured: true
---

La maggior parte dei configuratori di quad come Betaflight e KISS permettono di aggiustare i valori PID per migliorare le performance di volo. In questo tutorial cerco di spiegare cosa si intende con PID, quali sono gli effetti sulla stabilità e manovrabilità del drone e anche qualche consiglio su come tunare i PID. 

## Cosa significa PID?

**PID** è un acronimo che sta per Proporzionale, Integrale e Derativo. Parte del lavoro che il flight controller svolge durante il volo è eseguire questo algoritmo. L'FC legge dati dai sensori e calcola quanto veloci i motori devono girare per poter avere la velocità di rotazione che si desidera.

Lo scopo del sistema di controllo PID è quello di correggere l'**errore**, ovvero la differenza tra il **valore misurato** dal giroscopio e il **setpoint**, ovvero la velocità di rotazione che si desidera. L'errore può essere minimizzato aggiustando i controlli di input ad ogni iterazione, e di conseguenza cambierà la velocità dei motori. 

![Sistema di controllo PID](/images/tunare-pid/sistema_pid.png)

Ci sono tre valori in un controllore PID, nella figura sono indicati come K<sub>P</sub>, K<sub>I</sub> e K<sub>D</sub>. Per semplicità chiamiamoli, termine P, termine I e termine D. 

Cerco di fare del mio meglio per spiegarlo in modo chiaro e con meno matematica possibile. 

- “P” controlla l'**errore istantaneo** – più lontano si trova dal setpoint e con più forza cerca di avvicinarsi
- “D” è una previsione sull'**errore futuro** – guarda quanto velocemente ci si avvicina al setpoint e cerca di contrastare l'effetto del termine P per minimizzare la possibilità di andare oltre
- “I” è la somma degli **errori passati**, e controlla le forze che avvengono nel tempo; per esempio se il tuo quad devia costantemente da un setpoint per colpa del vento, questo termine farà in modo di compensare questo effetto

## Tunare i PID è un'arte

Tunare i PID per un quadricotter è una forma d'arte. Capire come bilanciare i diversi aspetti delle caretteristiche di volo per far rispondere perfettamente il modello secondo il tuo stile di volo, non è una cosa che si impara in una giornata. 

Magari preferisci un quad che sia più scattante, ma senza oscillazioni, oppure vuoi avere una senzazione più fluida in risposta ai tuoi input, ma senza che sia troppo dolce. Il segreto è trovare il giusto compromesso.

Qualche anno fa tunare i PID del quad era assolutamente necessario perchè i firmware degli FC non erano assolutamente ottimizzati. Per fortuna, oggi questo non è più vero per i mini quad. Questo grazie anche alle tecniche sofisticate di riduzione del rumore e ad algoritmi più ottimizati negli FC moderni. 

Molto spesso i quad volano già bene con i PID di default, a meno che tu non stia usando componenti di scarsa qualità oppure modelli preassemblati veramente economici. 

Detto questo, si possono sempre migliorare le performance di volo tramite un po' di PID tuning. E ricorda che ognuno ha diverse preferenze su come tunare i propri quad.

## Cos'è il Looptime?

Il loop è l'insieme di passi che il PID controller deve compiere partendo dalla lettura dei sensori al calcolo del valore di output. I processori montati sui flight controller moderni sono in grado di eseguire migliaia di iterazioni (loop) per secondo.

Il tempo che l'FC impiega a completare il loop, viene chiamato looptime e viene misurato in millisecondi oppure Hz.  Ad esempio:

- Looptime = 1 s → 1 iterazione al secondo = 1Hz
- Looptime = 1ms (0.001 s) = 1KHz

Come detto prima, i flight controller moderni sono in grado di avere looptime di 8KHz, e alcuni addirittura arrivano a 32KHz. Ad ogni modo, non è detto che un looptime maggiore sia meglio. Ci sono pro e contro nell'usare looptime alti, infatti molte persone preferiscono usare 8KHz. 



## L'effetto di ogni termine

Modificare i valori PID alter il comportamento del quadricottero in modi diversi. In questa sezione cerco si spiegare gli effetti di ogni termine.

## Termine P

Il termine P determina con quanta **forza il flight controller cerca di correggere l'errore** per ottenere la traiettoria di volo che si vuole seguire. 

In generale, un valore alto per il termine P si traduce in un controllo più deciso, mentre per valori bassi di P avrai un controllo più delicato.

Puoi anche immaginarlo come il parametro che gestisce la sensitività e la risposta del quad. Per valori alti di P il quad risponderà in modo più scattante, quasi come se avessi aumentato i tuoi rate. 

Se il valore di P è troppo alto, il quad diventa troppo sensibile e cercherà di correggere eccessivamente gli errori. In questi casi, la correzione dell'errore va troppo oltre e il tuo quad avrà oscillerà ad alta frequenza durante il volo. Queste oscillazioni saranno più nette nel momento in cui viri con molta decisione.

Se devi ridurre le osccillazioni, una possibilità è quella di ridurre il termine P, ma attento a non ridurlo troppo altrimenti il quad inizierà a risultare troppo morbido nelle risposte. 

## Termine I

Il termine I determina con quanta forza il flight controller cerca di **mantenere l'altitudine del drone rispetto alle forze esterne**, come ad esempio vento e baricentro sbilanciato. 

Puoi vederlo come ad un **parametro di rigidità** quando il quad si muove in stallo, e quanto bene riesce a mantenere la sua altitudine. 

Con Betaflight, il termine I di default funziona abbastanza bene su quasi tutti i quad. Ma se noti una sorta **drifting**, allora potresti provare ad aumentarlo. Quando I è troppo basso potresti dover correggiere la traiettoria molto più spesso, specialmente se hai utilizzi il gas. 

Qundo I diventa troppo alto, il drone sembrerà molto rigido e non agile. Un valore eccessivo di I potrebbe causare anche oscillazioni a bassa frequenza. 

Un altro problma che il termine I può risolovere sono i così detti “**throttle dips**“, ovvero dopo una forte accelerezione verso l'alto, nel momento in cui si azzera il gas, il muso del quad tende verso il basso. 

Nessuna coppia di ESC, motori o eliche sono veramente identiche, e quindi esse forniranno diversi livelli di spinta. Quando fai un punch out, ovvero dai. molto gas per poi abbssarlo velocemente, gli RPM dei diversi motori potrebbero essere leggermente out-of-sync causando un throttle dip.

Aumentando i termine I, puoi fixare questi piccoli dettagli nelle performance di volo. Qualche tempo fa, per evitare troppa rigidità nei quad, in Betaflitght venne introdotta una feature chiamata “**Anti Gravity**“. In poche parole, permette di avere un termine I basso mentre si fa cruising, e durante i punch out il termine I viene aumentato temporanemente. 

## Termine D

Il termine D serve a smorzare e ridurre la correzione eccessiva causati da termine P. Riduce la sensazione di avere un quad che rimbalza troppo, aumentando D puoi ammorbidire e contrastare le oscillazioni dovute ad un valore troppo alto di P, inoltre è utile per minimizzare le oscillazioni causate dal propwash.

Quando D è troppo basso, il tuo quad avrà dei bounce-back alla fine di un flip o di un roll, inoltre potrai notare un peggioramento nelle oscillazioni causate dal propwash durante le discesce verticali. 

Aumentare D può migliorare questi problemi, tuttavia, un valore eccessivamente alto di D, può introdurre vibrazioni nel drone perchè amplifica il ruomore all'interno del sistema, e questo porta al surriscaldamento dei motori.

Un altro effetto collateralle di un D troppo alto è una diminuzione nella risposta del quad.

# Prima di tunare PID…

- Fai un backup dei tuoi PID
- Vola sempre in Acro Mode quando tuni il quad
- Assicurati che il baricentro del quad sia esattamente al centro. Nel caso non lo fosse puoi spostare leggermente la batteria avanti o indietro per cambiare la posizione del baricentro. 

> **Ricorda, il PID tuning è completamente soggettivo!**

Non esiste un modo giusto o sbagliato di tunare i PID, l'importante è che funzioni per te. Puoi dare lo stesso drone a due piloti diversi e probabilmente imposteranno dei PID diversi che si adattano al loro stile di volo. 

# Come procedo per tunare i PID

Prima di tutto, imposto sempre i miei rates. Quindi mi concentro sui PID. 

Tipicamente, provo sempre una nuova build con i PID di default prima di aggiustare i valori. Infatti, con Firmware come Betaflight, Emuflight e KISS, i valori di stock funzionano abbastanza bene per la maggior parte dei quad. Fai attenzione a qualsiasi comportamento indesiderato durante il volo, e quindi aggiusta i PID di conseguenza. 

Un altro metodo molto utilizzato è partire con valori molto bassi. Ad esempio, abbassa tutti i valori ad almeno la metà, e comincia ad alzarli finchè non ottieni un risultato indesiderato. 

Ogni volta che cambi un valore, dovresti chiedeterti se il quad comincia a volare meglio o peggio. Dovresti cercare di trovare il punto in cui il quad ha le migliori caratteristiche di volo e oltre il quale le performance iniziano a peggiorare. 

Aggiusta un asse alla volta: parti dal **roll**, quindi il **pitch**, e alla fine lo **yaw**. Io aggiusto unn valore alla volta su ogni asse, **parto con P, quindi D e alla fine I**. A volte potresti dover tunare nuovamente un valore, poiché i termini sono correlati.

Tunare un quad richede tempo, da 10 minuti fino a giorni. Molto dipende dalla qualità dei componenti, e da come è stato costruito il drone. 

### P sul Roll

Fai un po' di cruise, con un buon valore di P, il controllo dovrebbe essere preciso il quad dovrebbe seguire i tuoi comandi precisamente.

Prova a fare delle curve strette (usando sia il gas che il roll), se P è troppo basso il quad tenderà ad abbassarsi verso un lato, oppure noterai una oscillazzione lenta. Quando P è troppo alto, noterai oscillazioni molto veloci. Se P è impostato correttamente, dovresti ottenere poche oscillazioni durante le curve strette.

### P sul Pitch

Fai uno split-S, e mentre inizi ad dare gas per uscire dalla manovra, fai attenzione al movimento sull'asse del pitch. Se Il quad punta più in alto di quanto dovrebbe, allora probabilmente P è troppo basso. Se invece noti delle oscillazioni veloci, allora dovresti abbassare P.

Il tuning dovrebbe continuare finché non arrivi al punto in cui senti il quad reagire bene ai comandi e in modo agile, e controlla sempre che non ci siano troppe vibrazioni. Inoltre sarebbe utile sentire i motori, perché alcune vibrazioni possono non essere visibili attraverso la camera FPV.

### TPA

TPA è un parametro che riduce l'efficacia del termine P mentre si accelera. 

Se il quad vola bene quando il throttle è basso, ma si verificano delle oscillazioni solo quando apri il gas, aumentare il TPA potrebbe aiutarti. 

Prova a fare un punch out e se noti delle oscillazioni, alza il valore TPA. Un buon valore per il TPA ti farà avere un punch out relativamente liscio. 

### D su Roll e Pitch

Quando fai delle manovre aggressive come ad esempio flip e roll, se il tuo quad tende a rimbalzare in senso opposto, allora dovresti aumentare la D sull'asse in questione. 

Aumentare il termine D può anche aiutare a ridurre il propwash che si verifica durante le discese verticali.

Fai attenzione, un valore troppo alto per il termine D può introdurre delle oscillazioni, e inoltre può far surriscaldare i motori. Un altro segnale di un valore troppo elevato sul termine D sono oscillazioni veloci al termine di flip e roll.

Un altro modo per eliminare i bounce back alla fine di un flip o di un roll, può essere anche l'utilizzo dei Setpoint Transition.

### I sul Roll

Inclina il quad a sinistra e destra e controlla quanto bene mantiene l'angolo. Idealmente dovresti riuscire a stare alla stessa altitudine nel momento in cui rilasci lo stick. Se il quad non riesce a mantenere l'angolo, allora può significare che il termine I è basso. 

Se il tuo drone viene portato via dal vento, potresti dover aumentare il termine I. 

### I sul Pitch

Quando voli in avanti, l'angolo a cui ai inclinato il quad dovrebbe rimanere lo stesso. Se così non è dovresti provare ad aumentare la I sul pitch. 

### Anti Gravity Gain

Anti Gravity aumenta temporanemente il termine I quando avvengono rapidi cambiamenti nel throttle. Aumentando il gain viene migliorata la stabilità e la capacità di mantenere l'altituidine quando il thorttle viene aumentato rapidamente. 

Vola dritto e prova a fare dei punch out rapidi, controlla se sull'asse del pitch l'angolo rimane lo stesso. Se il muso del quad tende ad abbassarsi, allora aumenta l'Anti Gravity.

### P sullo Yaw

I PID relativi allo Yaw vanno tunati in modo separati. Tipicamente, i valori di default funzionano bene su tutti i modelli. 

Gira velocemente sull'asse dello yaw e controlla come si ferma. Se noti delle oscillazioni veloci allora dovresti abbassare P, altrimenti se il quad tende ad imbarcarsi verso un lato, dovresti aumentare P. 

Un valore eccessivo di P sullo yaw, a differenza degli altri assi (roll e pitch) non generarà troppe vibrazioni, perchè sullo yaw il quad esegue movimenti più deboli (mancanza di autorità sullo yaw). Un altro segnale che il termine P è troppo alto sul questo asse, è che durante movimenti veloci sullo yaw, il quad sale in altitudine. 

Se il valore di P sullo yaw è corretto, le rotazioni dovrebbero essere pulite e rapide.

### I sullo Yaw

Come ho già detto, il termine I cerca di prevenire drift, ma un valore troppo alto per la I dello yaw può portare a instabilità e ridurre la velocità di risposta. Nella maggior parte dei casi, questo valore di default va bene.  

# Non tutto dipende dal PID

La costruzione della tua build influenza molto le performance di volo del tuo quad. Ecco un paio di cose che dovresti controllare prima di procedere.

### Vibrazioni

Non tutte le vibrazioni sono causate da valori alti di P o D. Dovresti eliminare tutte le fonti di vibrazione prima procedere col tuning. I motori e le eliche dovrebbero essere bilanciate, il flight controller dovrebbe essere montato con dei soft mount, in modo da rimuovere possibili vibrazioni e non interferire con le letture dati del giroscopio. 

### Baricentro

Idelmente, il baricentro dovrebbe trovarsi esattamente nel centro del tuo drone. Quando il questa situazione non si verifica, alcuni motori dovranno lavorare più duramente per controbilanciare il velivolo. Questo causerà il surriscaldamento dei motori, limiterà la velocità massima e influenzerà la stabilità dell'intero quad.

Per esempio, se la LiPo è montata troppo indietro, il baricentro si sposterà verso il retro del quad. In questa situazione i motori posteriori dovranno spingere di più rispetto a quelli anteriori.

# “Quali sono i tuoi PID?” – Sbagliato

E' inutile chiedere i PID di un altro pilota e provarli sul tuo quad. In un certo senso, ogni quad è unico: motori, eliche, ESC, Flight Controller, baricentro, il frame stesso. Quindi a meno di un quad RTF, non ha senso utilizzare gli stessi PID di altri piloti. 
