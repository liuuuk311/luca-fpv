---
title: Tutte le modalità di Betaflight su un canale AUX
date: "2022-08-26T00:00:00.000Z"
excerpt: Betaflight ha tante modalità di volo, ma i canali radio sono limitati, ecco la soluzione per configurare tutto sulla radio
categories:
    - Software
    - Intermedio
tags: 
    - Configurazione
    - Betaflight
    - Radiocomando
featured: false
---

Il modo più comune con il quale si configuarano le modalità di volo di Betaflight sul proprio radiocomando è quello di mettere una funzionalità per ogni canale ausiliario (AUX Channel). Quindi ad esempio, AUX 1 per armare il drone, AUX 2 il beeper, AUX 3 turtle mode e così via. 

Come si può facilmente capire questo è un problema perché i canali AUX non sono infiniti, anzi, spesso in FPV voliamo con 8 canali. Si vola con solo 8 canali per avere la miglior latenza e quindi le migliori performance. Ma di 8 canali disponibili, i primi 4 ovviamente sono utilizzati da gas, yaw, roll e pitch e quindi rimaniamo con solo 4 AUX.

In questa guida spiego come configurare più funzionalità sullo stesso canale AUX, e anche come utilizzare diversi switch sul telecomando e associarli allo stesso AUX.

Il bello di questo metodo è che può esser fatto con praticamente qualsiasi radio, non solo quelle che supportano OpenTX.


## La mia configurazione

Io utilizzo Crossfire come RC link, e per ottenere le migliori performance utilizzo la modalità a 8 canali. Come dicevo prima però, i primi 4 canali sono già occupati per trasmettere Gas, Yaw, Roll e Pitch. 

Inoltre, per quanto riguarda il video uso il sistema digitale DJI, e per poter vedere sugli occhiali la qualità del collegamento Crossfire tra il mio radiocomando e il drone, devo utilizzare un canale ausiliario, in particolare io uso l'AUX 4. 

Quindi di fatto mi rimangono a disposizione solo 3 canali ausiliari: AUX 1, AUX 2, e AUX 3.

Le funzionalità di cui ho bisogno sul mio drone sono:
- **PreArm**: Come forma di sicurezza
- **Arm**: Ovviamente per armare il drone e volare
- **Modalità Airmode**: Attiva di default, ma trovo utile anche poterla disattivare con uno switch per qualche trick
- **Turtle Mode**: Modalità fondamentale dopo una caduta per far girare il drone e ripartire, utile soprattutto se il drone cade in una zona non raggiungibile
- **Angle Mode**: Come forma di sicurezza può esser comodo stabilizzare il drone
- **GPS Rescue**: Attivare il ritorno a casa da uno switch è fondamentale in casi di emergenza o se va via il segnale video

![La mia configurazione](/assets/tutte-le-modalita-di-betaflight-su-un-canale-aux/la_mia_configurazione.png)

Dunque, ricapitolando se configurassi tutto tramite switch a due posizioni, in cui la levetta in una posizione attiva la modalità e nell'altra posizione la disattiva avrei bisogno di 6 switch sul radiocomando e 6 canali ausiliari.

Vediamo quindi come è possibile configurare più modalità di Betaflight su un solo AUX channel. In particolare, in questa guida configurerò la modalità acro, turtle mode, angle mode e GPS rescue su due switch a tre posizioni ma che trasmettono tutte sullo stesso canale ausiliario.

## Come configurare il radiocomando

Nota che gli screenshot in questa guida li ho fatti sul mio radiocomando, un Radiomaster TX16S con EdgeTX, ma i passaggi sono uguali per tutti i radiocomandi OpenTX/EdgeTX. Anche per gli altri radiocomandi, il ragionamento che va applicato è lo stesso, le uniche differenze che potrebbero esserci sono i nomi nei menù.

Prima tutto dobbiamo entrare nella configurazione del modello, e andare sulla pagina del mixer.

![Menu Mixer su Edge TX](/assets/tutte-le-modalita-di-betaflight-su-un-canale-aux/menu_mixer.jpg)

Una volta in questa pagina dobbiamo andare sul canale su cui vogliamo trasmettere, nel mio caso CH7, e selezionare con la rotellina del radiocomando. Dovrebbe uscire un menù come questo e selezionare Edit (o modifica).

![Menu Edit su Edge TX](/assets/tutte-le-modalita-di-betaflight-su-un-canale-aux/menu_edit.jpg)

A questo punto, dobbiamo impostare come Source (o sorgente) il valore MAX (1) e fare attenzione che il peso (weight) sia 100% (2), e soprattutto che questo canale non sia associato a nessuno switch (3).

![Modifica CH7](/assets/tutte-le-modalita-di-betaflight-su-un-canale-aux/primo_max.jpg)

Ora possiamo tornare nella pagina precedente e sempre su CH7 cliccare con la rotellina e scegliere di aggiungere un elemento sotto, tramite l'opzione "Insert After".

![Insert After Menu su EdgeTX](/assets/tutte-le-modalita-di-betaflight-su-un-canale-aux/insert_after.jpg)


Dunque, ora siamo pronti per **configurare il primo switch**. Il primo switch che configuro è quello segnato con SC. Questo switch a tre posizioni lo configuro in modo tale che quando sarà in posizione di riposo manterrà attiva l'airmode, nella posizione intermedia la disattiverà, mentre nell'ultima posizione attiva turtle mode. Queste tre funzionalità sono sullo stesso switch perché non saranno mai attive tutte e tre contemporaneamente.

Quindi per configuare questi comportamenti sulla radio dobbiamo selezionare ancora una volta MAX come sorgente. Questa volta però il peso (weight) sarà -10%, e infine lo switch che attiva questa condizione sarà SC- ovvero la posizione intermedia dello switch SC.

![Configurare lo switch SC](/assets/tutte-le-modalita-di-betaflight-su-un-canale-aux/secondo_max.jpg)

Di fatto, con questa configurazione al momento sul canale 7 (ovvero AUX 3) di default verrà trasmesso il massimo valore. Nel momento in cui viene spostato lo switch SC sulla posizione intermedia, verrà sottratto un 10% dal valore totale. Così facendo potremo avere diversi valori sullo stesso canale, attivati anche da switch diversi.

Il procedemento eseguito per lo switch SC in posizione intermedia va quindi ripetuto per lo switch SC in posizione finale e poi io configuro anche lo switch SD sullo stesso canale. 

Una volta completata la procedura per tutti gli switch dovrai trovarti in una situazione simile a quella nella foto sotto.

![Situazione finale](/assets/tutte-le-modalita-di-betaflight-su-un-canale-aux/finale.jpg)

Come puoi notare dalla foto, tra i due switch SC e SD c'è una distanza maggiore, infatti SC in posizione finale è a -20% mentre SD in posizione centrale è a -50%. Questo ci tornerà utile nel passaggio successivo quando configureremo Betaflight.

## Come configurare Betaflight

Per quanto riguarda la configurazione di Betaflight è molto semplice, soprattutto se sai già configurare le modalità di volo in Betaflight Configurator.

![Configurazione Betaflight](/assets/tutte-le-modalita-di-betaflight-su-un-canale-aux/bf.png)

Ricordo sempre di fare delle prove con il radiocomando accesso e connesso al drone. Prova a muovere gli switch e controlla che ogni switch sia assegnato alla modalità corretta.

Betaflight ti segnalerà la modalità attiva colorando di arancione il riquadro a sinistra.

Ora che hai configurato gli switch con tutte le modalità di Betaflight che ti servono, sei pronto per volare il tuo drone!