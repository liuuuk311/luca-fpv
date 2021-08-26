---
title: "Come montare il GPS su un drone FPV: Collegamenti e configurazione"
date: "2021-08-26T00:00:00.000Z"
excerpt: Come montare il modulo GPS come ad esempio il Beitian BN-220, su un drone FPV da racing? In questo articolo spiego come collegare il GPS e configurarlo in modo da utilizzare GPS Rescue su Betaflight
category: 
    - Tutorial
tags: 
    - Principianti
featured: true
---

Come montare il modulo GPS su un drone FPV? In questa guida ti mostrerò come impostare e configurare il GPS su un **drone FPV** per volare senza più preoccuparti di un possibile failsafe.

## Perché usare un GPS su un drone FPV?
La risposta sembra banale, per evitare di perdere il nostro prezioso drone appena costruito. Giusto?

Si, ma non solo. Avere un modulo GPS sul drone ci permette di ottenere molte informazioni utili durante il volo. Tutte queste informazioni vengono mostrate sull'OSD. Se non sai come fare, leggi [come configurare l'osd](https://lucafpv.com/configurare-osd-betaflight).

Tra le informazioni utili troviamo l'indicazione di dove si trova il punto di partenza. Questo non è da sottovalutare, infatti se ci allontaniamo di diverse centinaia di metri, diventa molto facile perdere l'orientamento e non riuscire a tornare indietro.

Possiamo anche mostrare la latitudine e la longitudine, di modo da sapere in ogni momento la posizione esatta del drone. In questo modo, in caso di crash, riguardando il video registrato sul DVR degli occhiali, sarà possibile recuperare il modello.


## Dove montare il GPS? 

La posizione in cui si monta il modulo GPS è fondamentale per avere un buon segnale. I posti migliori sono lontano dagli altri compoenti elettronici per evitare interferenze. Si cerca di sempre di metterlo più in alto possibile. 

Io sui miei droni, spesso stampo in 3D un supporto che monto a seconda del frame. Ultimamente sto trovando molto comodo montare il GPS sopra lo strap della batteria, tramite questo [supporto in 3D](https://www.thingiverse.com/thing:3217191). 

Questa soluzione ha degli ottimi vantaggi. Il modulo si trova nel punto più alto e lontano dal resto dell'elettronica. La sua semplicità di montaggio però, è anche il suo svantaggio, perché in un eventuale crash é facile che si stacchi.

Ad ogni modo, altri posti comuni in cui montarlo sono sopra il mount della GoPro, oppure sopra un bracetto. 


## Collegamento GPS e FC

Il modulo GPS, più comune usato nei droni FPV è il Beitian BN-220 (Acquistalo su [Amazon](https://amzn.to/2WoRamu) o [Banggood](https://www.banggood.com/custlink/mKmd4V9K5P)). Questo modulo ha uno spinotto con 4 fili colorati.  
Il connettore può entrare in un solo modo quindi li non si può sbagliare. Ora per collegarlo al flight controller, basta collegare il filo che si trovo più vicino alla piccola batteria (il filo rosso), ad un pad 5V dell'FC. Il filo nero va collegato ad un pad GND. 

Per quanto riguarda TX e RX, come per tutti i dispositivi seriali, il filo TX (quello dopo il nero), va collegato ad un pad RX sul flight controller. Mentre il filo RX del GPS va collegato ad un pad TX sul flight controller.

### Quali TX e RX uso sul flight controller?

Dipende da te. Scegli i pad che sono più comodi su cui saldare. 
> Devi solo fare attenzione che la UART corrispondente non sia già in uso

Ad esempio, se ho liberi i pad TX2 e RX2, che corrispondono alla UART2, e non li sto usando per nessun altro dispositivo, allora posso tranquillamente usarli per il GPS. 

E' importante che si utilizzi la coppia, ovvero se scelgo TX2, devo usare per forza RX2 e non posso usare RX1 o RX3. 

![Cablaggio per il GPS](/images/configurare-gps/collegamento_gps_fc.jpg)