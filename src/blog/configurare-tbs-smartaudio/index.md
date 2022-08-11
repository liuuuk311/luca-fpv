---
title: Come configurare TBS SmartAudio in Betaflight
date: "2020-09-29T00:00:00.000Z"
excerpt: In questo tutorial spiego come configurare il protocollo SmartAudio sulle VTX compatibili per poterle controllare attraverso l'OSD di Betaflight.
categories:
    - Principianti
tags: 
    - Betaflight
    - Configurazione
featured: false
---
Se hai mai provato a cambiare canale e potenza attraverso i tastini della tua VTX, allora saprai quanto possa essere difficile. SmartAudio ti permette di cambiare le impostazioni con molta più facilità.

SmartAudio è un protocollo che consente di modificare le impostazioni VTX, come il canale e la potenza di uscita da Betaflight OSD o dalla Taranis tramite LUA Script. Il controllo della VTX è talvolta chiamato anche "VTX telemetry".

Il controllo della VTX è utile anche ad esempio quando partecipi alle gare. Infatti se cadi, puoi abilitare PitMode sulla tua VTX direttamente dal tuo posto senza precipitarti sul tuo quad. Ciò garantisce il minimo disturbo agli altri piloti che sono ancora in aria e protegge potenzialmente il tuo VTX dal surriscaldamento dovuto alla mancanza di flusso d'aria.

## Limitazioni
Un problema con il controllo VTX da OSD è che devi essere sul canale corretto per cominciare, altrimenti dovresti cercare il canale corretto con i tuoi occhiali per trovare il canale sul quale trasmette la VTX.

Ecco perché probabilmente è più facile farlo dallo schermo della Taranis usando i LUA Script, poiché puoi modificare le impostazioni del trasmettitore video indipendentemente dal tuo canale VTX.

## VTX Compatibili
Attualmente esistono diversi tipi di protocollo che consentono agli utenti di modificare le impostazioni VTX dai loro Taranis utilizzando i LUA Script o nel menu OSD di Betaflight.

Tuttavia, la maggior parte dei produttori di VTX sembra utilizzare solo "Tramp Telemetry" o "SmartAudio". Di seguito è riportato un elenco degli ultimi VTX che utilizzano questi protocolli e supportano il controllo VTX:

Tramp Telemetry:
- Tramp HV
- Matek VTX HV
- Holybro Atlatl HV
- FuriousFPV Gara Stealth

SmartAudio:
- TBS Unify Pro
- AKK X2, X2P, FX2, FX3
- Tramp Rush Tank

Tutti questi diversi protocolli hanno lo stesso scopo e la configurazione dovrebbe essere simile tranne che in Betaflight Configurator è necessario selezionare il protocollo che si sta utilizzando.

## Connessione 
Hai solo bisogno di collegare un filo!

La connessione di diversi protocolli VTX è la stessa, l'unica differenza è il nome del pin. Per le VTX che utilizzano la telemetria Tramp, il pin di connessione è solitamente chiamato "Telemetry", mentre per SmartAudio, il pin è chiamato "Audio" o "SmartAudio". 

Basta collegare il pin "Telemetry" o il pin "SmartAudio" al pin TX di qualsiasi UART.

![Connessione SmartAudio](/assets/configurare-tbs-smartaudio/smartaudio_connessione.png)

## Configurazione in Betaflight 
In Betaflight Configurator, vai alla scheda Porta e in Periferiche dell'UART che stai utilizzando per il controllo VTX, scegli il protocollo/dispositivo corrispondente dal menu a tendina.

- Per i dispsitivi compatibili con SmartAudio, scegli "TBS SmartAudio"
- Per quelli compatibili con Tramp Telemetry, seleziona "IRC Tramp"

Salvalo e FC dovrebbe ora riavviarsi.

![Sezione delle porte in Betaflight](/assets/configurare-tbs-smartaudio/porte.png)

Quindi vai alla scheda Configurazione e abilita la funzione OSD Betaflight. Se sei nuovo in Betaflight, ecco una guida che ti mostra [come utilizzare l'OSD di Betaflight](https://lucafpv.com/configurare-osd-betaflight/).

Salva le modifiche ed il gioco è fatto, ora dovresti essere in grado di accedere all'OSD di Betaflight e vedere le tue impostazioni VTX.

![Attivazione OSD](/assets/configurare-tbs-smartaudio/osd_attivo.png)

Infine, se stai eseguendo il firmware Betaflight 4.1 o più recente, devi inserire le VTX table per la tua VTX particolare, altrimenti il controllo Smartaudio VTX non funzionerà. Il vecchio firmware Betaflight non ha bisogno di farlo e dovrebbe funzionare immediatamente.

## Controllare la VTX da OSD

Per accedere al menu OSD di Betaflight, sposta semplicemente il gas al centro e lo yaw a sinistra, mentre il pitch in avanti.

Selezionare "Feature" nel menu OSD.

![OSD - menu feature](/assets/configurare-tbs-smartaudio/osd_feature.png)

In versioni più vecchie di Betaflight veniva fatta distinzione tra "VTX SA" (per SmartAudio) e "VTX TR" (per Tramp Telemetry). Nell'ultima versione, sono indicate semplicemente con VTX. Seleziona quello che stai utilizzando.

![OSD - menu VTX](/assets/configurare-tbs-smartaudio/osd_vtx.png)

E in questa schermata dovresti essere in grado di vedere le tue impostazioni VTX.

Se non vengono visualizzate informazioni, probabilmente c'è qualcosa che non va con la connessione hardware o forse le impostazioni della porta sbagliate. Prova un UART diverso se continui a riscontrare problemi. Inoltre puoi provare Soft Serial se non funziona nulla.

L'interfaccia è autoesplicativa, qui puoi cambiare banda VTX, canale e potenza di uscita. Per salvare le modifiche, selezionare "SET" e "Confirm".
