---
title: Come configurare i canali in Betaflight e su OpenTX
date: "2020-09-23T00:00:00.000Z"
excerpt: Un problema molto comune è la mappatura errata dei canali in Betaflight. In questo tutorial vediamo cos'è e come funziona. Inoltre vediamo come mappare i canali in modo corretto sia in Betaflight che in OpenTX.
categories:
    - Tutorial
tags: 
    - Principianti
    - Betaflight
featured: true
---

La mappatura dei canali è semplice ma confusa per i principianti dei droni FPV. Se sbagli, le uscite del canale in Betaflight risponderanno alle levette sbagliate. 

Se ti è capitato di chiederti perché il drone non si arma oppure in Betaflight Configurator vedi il modello girare senza che tu stia dando nessun comando, probabilmente hai il mapping dei canali sbagliato.

Ecco come correggere la configurazione della mappa dei canali e come impostarla correttamente.


## Che cos'è il mapping dei canali?
La mappa dei canali è fondamentalmente l'ordine dei quattro canali di controllo: Pitch, Roll, Throttle e Yaw.

Questi sono chiamati in modo diverso in OpenTX:

- Roll = Aileron (AIL)
- Pitch = Elevator (ELE)
- Throttle = Throttle (THR)
- Yaw = Rudder (RUD)

Ecco perché le mappe dei canali sono chiamate **AETR** (AETR1234) o **TAER** (TAER1234). Queste sono i due mapping dei canali comuni utilizzate nei droni FPV.

Puoi organizzare il mapping dei canali nella pagina Mixes della radio se hai una radio OpenTX.

![Mapping AETR dei canali su OpenTX](/assets/configurare-canali-betaflight-opentx/aetr.jpg)

Qui metto Aileron sul canale 1, Elevator sul canale 2, Throttle sul canale 3 e Yaw sul canale 4, e quindi il mapping dei canali sarà AETR, o AETR1234. Questa è la mappa dei canali predefinita in Betaflight.


## Perché il mapping è importante?
È possibile organizzare l'ordine delle uscite dei canali (gli output degli stick) tramite un mapping dei canali. Ma quando le uscite del canale arrivano al ricevitore, sono solo una serie di numeri, il flight controller non saprà quale numero si riferisce al gas e quale numero al roll. Ecco perché devi indicare in Betaflight in modo esplicito quale mapping dei canali stai utilizzando (l'ordine in cui si trovano i canali).


Se imposti la mappa dei canali sbagliata in Betalfight, l'uscita del canale risponderà allo stick sbagliato. Il tuo quad probabilmente non si armerà perché l'acceleratore non è al valore più basso, ma se in qualche modo riesci ad armarlo, molto probabilmente impazzirà! 

![Mapping dei canali sbagliato](/assets/configurare-canali-betaflight-opentx/wrong_mapping.png)


## Come sistemare un mapping sbagliato?
Semplice, vai alla scheda Ricevente in Betaflight Configurator e seleziona un'opzione diversa in Mappa canali:

- Il mapping dei canali predefinita di Betaflight è AETR (o AETR1234)
- L'altro mapping dei canali comuni TAER (TAER1234) è sotto l'opzione "Spektrum/Graupner/JR"

Se nessuna dei mapping dei canali in Betaflight funziona, allora dovresti controllare il mix dei canali sul tuo radiocomando e vedere se c'è qualcosa che non va nella configurazione.

![Configurare il mapping dei canali](/assets/configurare-canali-betaflight-opentx/mapping.png)

## Come cambiare il mapping in OpenTX?
Puoi scegliere quale mapping dei canali usare sul tuo radiocomando, ecco come cambiare il mapping in OpenTX.

Vai alla pagina MIXES nella configurazione del modello. I primi quattro canali indicano il mapping, che è TAER in questo caso.

![Mapping TAER dei canali su OpenTX](/assets/configurare-canali-betaflight-opentx/taer.jpg)

Se voglio cambiarlo in AETR, devo solo spostare i canali. Seleziona il canale che desideri spostare e tieni premuto il pulsante Invio. Fare clic sull'opzione "Move".

![Muvoere un canale su OpenTX](/assets/configurare-canali-betaflight-opentx/menu.jpg)

Sposto THR su CH3 (appena sopra ELE).

![Muvoere un canale su OpenTX](/assets/configurare-canali-betaflight-opentx/move.jpg)

Quindi sposto AIL su CH1 e sposto ELE su CH2. 
Ecco fatto 😄 Ora dovresti controllare se il mapping è impostato correttamente in Betaflight.

![Mapping AETR dei canali su OpenTX](/assets/configurare-canali-betaflight-opentx/aetr.jpg)

Non importa quale sia l'ordine dei controlli negli input in OpenTX, lasciali semplicemente cosî come sono. Il mapping è determinato solo dal mix.



Consiglio di utilizzare AETR1234, perché è l'impostazione predefinita in Betaflight. Se usi TAER, devi cambiare il mapping in Betaflight ogni volta che configuri un nuovo quad (o flashi un nuovo firmware), che è piuttosto inutile.