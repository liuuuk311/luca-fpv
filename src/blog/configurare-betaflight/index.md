---
title: Come configurare Betaflight per la prima volta
date: "2020-04-04T00:00:00.000Z"
excerpt: Come configurare passo per passo il firmware Betaflight per la prima volta, selzionare le giuste impostazioni per il tuo quadricottero e volare per la prima volta.
category:
    - Tutorial
tags: 
    - Principianti
featured: true
---
Questa guida spiega come configurare passo per passo il firmware Betaflight, selzionare le giuste impostazioni per il tuo quadricottero e volare per la prima volta.

Betaflight è un firmware open source compatibile con molti flight controller, questo firmware è progettato appositamente per mini quad. 

## Introduzione

Per rendere questo tutorial il più semplice possibile, assumo che tu abbia compomenti comuni:

- Ricevente Frsky con protocollo SBUS e telemetria SmartPort
- Un flight controller F3 o F4 con installato Betaflight 3.2 o versioni più recenti
- ESC che supportano il protocollo DShot

<!-- Prima di cominciare, devi [scaricare e installare Betaflight con i relativi driver](). -->

> Questa guida è stata scritta usando la versione 10.6.0 di Betaflight Configurator, versioni successive potrebbero avere diverse impostazioni


## Aggiornare il Firmware

Quando compri un nuovo FC ti arriva sempre con una versione di Betaflight già installata. Quindi in realtà, non c'è bisgono di flashare il nuovo firmware a meno che tu non voglia usare l'ultima versione di Betaflight, e solitamente non è mai una cattiva idea. 

<!-- In questa guida spiego [come flashare Betaflight passo per passo](https://oscarliang.com/flash-update-betaflight/). -->

------

## Betaflight per la prima volta

Per evitare complicazioni inutili, vedremo punto per punto solo le impostazioni base da configurare in Betaflight, per far in modo che il quad sia in grado di volare. Le altre impostazioni, potrai modificarle successivamente e ottimizzare alcuni parametri a tuo piacimento.

**IMPORTANTE:** Rimuovi le eliche prima di cominciare la configurazione.

### Collegare il cavo USB

Apri Betaflight Configurator sul tuo computer e una volta che hai collegato il flight controller al computer, il tuo FC si dovrebbe accendere. I prossimi passi sono leggermente diversi a seconda del tuo sistema operativo. 

![Connetti il drone](/images/betaflight/connetti_il_drone_con_usb.jpg)

Una volta collegato il drone, un nuovo disposivo seriale dovrebbe comparire nel rettangolo evidenziato nella figura sotto. Ciò che c'è scritto all'interno varia a seconda sel sistema operativo, tipicamente su Windows dovrebbe apparire `COM`, mentre su Mac e Linux `/dev/tty_QUALCOSA`. 

Quindi clicca su connetti. 

Se non riesci a connetterti e sei su Windows, molto probabilmente stai avendo qualche problema con i driver, oppure il tuo FC potrebbe essere brickato.  <!-- Follow [this guide to fix flight controller driver issues](https://oscarliang.com/fc-driver-issues-flash-firmware/). Or maybe your FC is “bricked”, which can be easily [fixed as explained in this article](https://oscarliang.com/cannot-connect-to-naze32-brick-fix/).-->

![Connetti Betaflight](/images/betaflight/connetti.png)

------

## Setup

Una volta che hai connesso il tuo FC dovresti trovarti nella schermata Setup. Da qui hai accesso alle informazioni del tuo drone e alle funzioni più basilari.

![Connetti Betaflight](/images/betaflight/setup.png)

1. Prima di modificare qualsiasi cosa, esegui un backup della configurazione attuale
2. Posizione il tuo quad su una superificie piana e premi "Calibra Accelerometro" 
3. Ora prendi il drone in mano e muovilo. Dovresti vedere il modello 3D del drone che si muove, assicurati che i movimenti del drone e del modello siano nella stessa direzione

Se il modello 3D non si muove nella stessa direzione del tuo quad, probabilmente hai installato il flight controller nella direzione sbagliata. Sul flight controller è presente una freccia, assicuratiche che punti in avanti.  Per risolvere questo problema puoi ruotare il FC finchè non è nella posizione corretta oppure puoi configurare un offset dello YAW nella sezione "Configurazione", nella parte "Allineamento Scheda e Sensori" settalo a 90, 180 oppure 270 gradi.

------

## Porte

Nella sezione porte, è possibile configurare tutte le periferiche – dispositivi esterni collegati al flight controller tramite le UART.

![Porte di Betaflight](/images/betaflight/porte.png)

1. Se usi una ricevente che utilizza SBUS o IBUS, devi abilitare “RX Seriale” sulla porta UART alla quale la ricevente è collegata

2. Se usi SmartPort, seleziona “SmartPort” sotto Uscita Telemetria, altrimenti lasciala di default
3. Se la tua VTX supporta "SmartAudio", la puoi configuare nella sezione periferiche
4. Se hai dispositivi esterni, come ad esempio il GPS, aggiungilo come sensore di ingresso nella corretta porta

Ricorda che il numero delle porte UART varia da FC a FC. Infine, ricorda di **non copiare** esattamente questa configurazione perché dipende da come hai saldato i dispositivi al tuo flight controller.

------

## Configurazione

La sezione di Configurazione contiene molti delle impostazioni relative alle performance di volo del tuo drone. 

![Configurazione motori e ESC](/images/betaflight/configurazione_motori_esc.png)

1. ESC/Caratteristiche Motore

**Protocollo ESC/Motori** – controlla le specifiche dei tuoi ESC per capire che protocollo supportanto. DShot è il protocollo raccomandato. Tipicamente, gli ESC BLHeli\_S supportano sia *DShot300* che *DShot600*, mentre gli ESC BLHeli\_32 supportanto *DShot1200*.

Disabilita sempre l'opzione “MOTOR_STOP”, altrimenti non sarai in grado di capire quando il quad è armato.

Il resto lo puoi lasciare così.

![Confgiurazione sistema](/images/betaflight/configurazione_sistema.png)

2. Configurazione di sistema

**Frequenza di loop del PID** (PID Loop) – Dipende da quanto è potente il tuo FC, personalmente utilizzo una frequenza bassa, ad esempio 2KHz su droni che generano parecchio rumore elettromagnetico, mentre per build di più alta qualità utilizzo anche 4KHz o 8KHz. In ogni caso se utilizzi 2KHz dovrebbe andar bene su quasi tutti quad.

**Frequenza di aggiornamento del giroscopio** – Tipicamente va impostata al doppio del PID Loop, quindi se hai impostato 2KHz al punto precedente, qui dovresti scegliere una frequenza di 4KHz. 

Prova a sperimentare un po' e vedi con quali frequenze ti trovi meglio, non ci sono vere e proprie regole per la scelta di queste frequenze.

Nel cambiare questi due valori e altre impostazioni, fai sempre attenzione al "Carico CPU" nella parte bassa della finestra, cerca di tenerlo sempre **sotto il 30%**. Un carico maggiore potrebbe rendere il flight controller instabile.

**Accelerometro** – puoi disabilatarlo per guadangare un po' di potenza di calcolo, ma se lo fai non potrai utilizzare né Angle Mode né Horizon Mode, infine il modello 3D nella pagina di Setup non si muoverà più. 

Barometro e Magnetometro sono assolutamente opzionali e tipicamente vengo usati per avere telemetria addizionali nei modelli ad ala fissa. Se vuoi puoi anche disabilitarli.

![Personalizzazione e Ricevente](/images/betaflight/protocollo_ricevente.png)

3. Personalizzazione – Puoi inserire il nome del modello che verrà visualizzato nell'OSD

4. **Ricevente** – Se usi una ricevente che utilizza com protocollo SBUS, IBUS oppure una ricevente Spektrum Satellite, scegli “Riceventi di tipo Seriale” nel primo menù a tendina. Per quanto riguarda il Provider di Ricevente Seriale, scegli SBUS se usi una ricevente FrSky.

   Se utilizzi PPM, seleziona “PPM RX Input” nel menù a tendina.

![Altre Impostazioni](/images/betaflight/altro.png)

5. Altre Caratteristiche

Queste sono le altre funzionalità che normalemente abilito in Betaflight. Se non sei sicuro, puoi lasciarle così come sono, puoi volare anche senza modificarle. 

- Softserial
- Telemetry (per SmartPort)
- AirMode
- OSD (se il tuo flight controller è compatibile con l'OSD di Betaflight)
- Anti-Gravity
- Dynamic Filter

Clicca su **salva e riavvia**.

------

## Ricevente

![Ricevente](/images/betaflight/ricevente.png)

In questa sezione puoi controllare se la tua ricevente funziona correttamente. 

Accendi sia il tuo radiocomando che la tua ricevente, muovi uno stick alla volta e controlla se il canale corrispondente si muove. Potresti dover rimappare i canali tramite la sezione "Mappatura Canali" se i canali risultano essere nell'ordine sbagliato. 

Se nessuno dei canali si muove controlla che:

- la ricevente sia collegata al radio comando (luce verde fissa sulla ricevente)
- di aver saldato correttamente la ricevente al tuo FC
- di aver selezionato la RX Seriale sulla corretta UART (sezione Porte)
- di aver selezionato il protocollo corretto (sezione Configurazione)

Dopo esserti assicurato che i canali funzionano correttamente, dovresti controllare i valori centrali ed estremi per i primi 4 canali (Pitch, Roll, Yaw, Gas). Questi canali dovrebbero essere centrati a 1500, e come punti estremi 1000 e 2000.

------

## Modalità di volo

![Modalità di volo](/images/betaflight/modalita_di_volo.png)

In questa sezione si trovano le modalità di volo e le funzionalità che è possibile attivare tramite i canali AUX del radiocomando, come ad esempio:

- Arm
- Angle
- GPS Rescue
- Beeper

------

## Motori

![Motori](/images/betaflight/motori.png)

**IMPORTANTE** Rimuovi le eliche, se non l'hai già fatto!

In modo delicato, alza uno slider alla volta e controlla l'ordine dei motori

- Motore 1, posteriore destro
- Motore 2, anteriore destro
- Motore 3, posteriore sinistro
- Motore 4, anteriore sinistro

![Ordine Motori](/images/betaflight/ordine_motori.png)

Se l'ordine è sbagliato, devi rimappare alcune risorse del tuo flight controller. 

Ora devi controllare la direzione nella quale girano i motori seguendo lo schema sopra. Puoi aiutarti utilizzando un pezzo di nastro adesivo. Se i motori sono posizionati in modo corretto, ma girano in senso contrario, puoi inveritre la rotazione tramite il programma BLHeliSuite.

A breve scriverò nuove guide su questi temi, quindi ti conviene iscriverti alla newsletter per rimanere aggiornato.

------

## Messa a punto PID

![Sezione PID](/images/betaflight/PID.png)

In questa sezione, per fare il tuo primo volo non serve modificare nulla. Tipicamente i valori di default vanno bene per la maggior parte dei modelli. Con il passare del tempo conoscerai meglio il tuo mini quad e a quel punto potrai provare a modificare i valori PID. 

In pratica con PID si intende i valori di tre parametri (Proporzionale, Integrale e Derivato) e vanno impostati su tutti gli assi: Rollio (Roll), Beccheggio (Pitch) e Imbardata (Yaw). La messa a punto dei PID richiede la comprensione dei tre diversi termini e come ciascuno di questi influisce le performance di volo.

<!-- Take a look at my [PID tuning guide](https://oscarliang.com/quadcopter-pid-explained-tuning/) -->

Puoi comunque aggiustare i valori dei rates ed dell'esponenziale in base al tuo stile di volo. Questi piccoli aggiustamenti posso aiutarti a volare molto meglio. Rate, Super Rate e Esponenziale influiscono sulla sensitività degli stick e quindi come il quad reagisce ai movimenti dei tuoi stick. 

Ricorda fai piccoli cambiamenti, prova a volare e nel caso riaggiusta i rates. 

<!-- Take a look at this [guide on Rate / Super Rate and Expo](https://oscarliang.com/rc-roll-pitch-yaw-rate-cleanflight/). -->

