---
title: Configurare l'OSD in Betaflight
date: "2020-04-11T00:00:00.000Z"
excerpt: L'OSD permette di sovrappore al video FPV informazioni importanti realtive al volo, come ad esempio il voltaggio della batteria, il tempo di volo e molto altro. In questo articolo spiego cosa puoi fare con l'OSD di Betaflight e come configurarlo.
category:
    - Tutorial
tags: 
    - Betaflight
featured: false
---

L'OSD compatibile con Betaflight è un componente integrato e una funzionalità disponibile nei flight controller che supportano Betaflight. Permette di sovrappore al video FPV informazioni importanti realtive al volo, come ad esempio il voltaggio della batteria, il tempo di volo e molto altro. 

Puoi anche usarlo come menù per configurare diverse impostazioni del tuo quad tra cui i PID, rates e molto altro. In questo articolo spiego cosa puoi fare con l'OSD di Betaflight e come configurarlo.

## Flight Controller supportati

Non tutti i flight controller con OSD integrati supportano l'OSD di Betaflight, in alcuni casi serve usare un firmware per l'OSD di terze parti.

Ad ogni modo, la maggior parte dei flight controller più recenti supportano tranquillamente l'OSD. Tra questi troviamo il Matek F405, DYS F4 Pro, Kakute F4, Omnibus F4 and Betaflight F3. Comunque, controlla sempre che nelle specifiche del prodotto sia chiaramente scritto che sia compatibile.



## Configurare l'OSD in Betaflight

> Configurare l'OSD in Betaflight è molto semplice, di seguito riporto i passi che seguo per configurare il mio.

Se il tuo FC ha l'OSD integrato, ti basta semplicemente connettere la telecamera FPV e la VTX al flight controller, come nello schema sotto. 

Ricorda che il segnale della video camera va collegato al pin flight controller segnato come "Cam" (o anche Vin), mentre la VTX va collegata al pin "VTX" (o anche Vout). Il nome dei pin dipende dal flight controller.

![Schema Matek STD con sistema FPV](/images/configurare-osd/chip_osd_schema.png)

Connetti il tuo flight controller al tuo computer e avvia Betaflight Configurator. Nella sezione **Configurazione** attiva la funzionalità  **OSD**.

![Configurazione OSD](/images/configurare-osd/attivare_OSD.png)

Ora nella sezione **OSD** puoi configurare tutte le impostazioni relative all'OSD.

![Impostazioni OSD](/images/configurare-osd/impostazioni_OSD.png)

L'interfaccia dell'OSD è molto semplice. Hai tre profili OSD, che sono identificate dalle tre colonne sulla sinistra. Per ciascun elemento puoi scegliere su quale profilo OSD mostrarlo.  

**Puoi trascinare gli elementi attivi nell'anteprima di schermo per cambiare la loro posizione. Non metterli troppo vicini agli estremi dello schermo per evitare che vengano tagliati.**

**Formato Video** – scelgiere PAL o NTSC dipende dalla tua telecamera FPV. Se non sai quale scegliere, selezione "Auto". Fai attenzione perchè l'anteprima dello schermo per "Auto" e “PAL” sono uguali, quindi se la tua video camera è NTSC, le informazioni nella parte bassa dello schermo non verranno mostrate (perchè NTSC ha una risoluzione diversa). Se utilizzi "Auto", ti conviene posizionare gli elementi verso la parte centrale dello schermo in modo che non vengano tagliati fuori.

Sotto "**Allarme**", puoi impostare il limite dell'RSSI, la capacità della batteria, e l'altitudine. Se durante il volo, raggiungi questi limiti, nel tuo schermo compariranno i relativi messaggi per avvisarti.

Gli elementi che mostro sul mio OSD sono tipicamente

- Voltaggio della batteria 
- Tempo di volo dal decollo
- RSSI
- mAh utilizzati

![OSD](/images/configurare-osd/osd.png)

Su modelli dotati di GPS, mostro ulteriori informazioni, come la direzione a casa, la distanza da casa e l'altitudine.



## Menu dell'OSD

Per attivare il menu OSD negli occhiali FPV bisogna posizionare gli stick del radiocomando nella seguente poszione: 

- **Gas a metà**
- **Yaw a sinistra**
- **Pitch in avanti**

Il gas dovrebbe rimanere a metà durante tutta la navigazione del menù.

![Menu OSD](/images/configurare-osd/osd_menu.png)

Per navigare nel menù puoi usare lo stick che controlla il **pitch per andare su e giù**, mentre usare l'asse del **roll per selezionare** le opzioni. 

Ci sono molti parametri che puoi cambiare come PID, rate, frequenze di filtro. Se la tua VTX supporta SmartAudio puoi anche cambiare canale e frequenza video e infine anche potenza di trasmissione. 

Tuttavia, al momento, non tutte le opzioni di Betaflight sono disponibili all'interno del menù OSD.

> Dopo aver effettuato le modifiche ricordati di salvarle tornando nel menù principale e selezionando l'ultima voce “Save / Exit”.



## Cambiare i font dell'OSD

Nella sezione OSD, in basso a destra trovi il tasto Font Manager. Se non ti piace il font di default, la dimensione del font o qualcosa di più riconoscibile puoi scegliere il font da questa schermata. 

![Gestione Font](/images/configurare-osd/font_osd.png)

Ricorda che una volta che hai caricato un nuovo font, non lo vedrai nell'anteprima di schermo, ma continuerai a vedere quello di default. Ma non ti preoccupare perchè nell'OSD verrà mostrato il nuovo font.

# FAQ

1. **Come mai non vedo il testo dell'OSD sul mio schermo?**

Assicurati di aver scelto il formato video corretto, prova PAL e NTSC e vedi quale funziona. Altrimenti potrebbe essere un problema di connessione tra la camera e la VTX. 

2. **Dove posso cambiare il nome che viene mostrato nell'OSD?**

Nella sezione Configurazione, c'è un riquadro relativo alla personalizzazione, li puoi settare il nome del modello.

3. **Vedo un sacco di “V” sullo schermo...**

Significa che manca il font. Ricaricare nuovamente il font dovrebbe sistemare questo problema.

4. **L'OSD non salva le impostazioni e i font**

Prova a connettere la batteria quando fai qualche modifica nell'OSD in Betaflight. 

L'OSD ha il proprio chip, e quando viene alimentato tramite USB potrebbe non avere abbastanza potenza per scrivere in memoria le modifiche. Connettendo la LiPo, ti assicuri che il chip dell'OSD sia correttamente alimentato.