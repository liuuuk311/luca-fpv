---
title: Come usare GyroFlow per stabilizzare video FPV
date: "2022-04-22T00:00:00.000Z"
excerpt: In questa guida spiego come stabilizzare i tuoi video FPV per avere video fluidi
categories:
    - Tutorial
tags: 
    - Principianti
featured: true
---



Qual è il segreto per fare video FPV stabili come questo?

<YouTubeEmbed link="https://youtu.be/VigfASabhvE?t=15"/>

La risposta è: **GyroFlow**.

Gyroflow è un programma di stabilizzazione video open source, è gratuito e funziona con qualsiasi fotocamera. Stabilizza i video utilizzando i dati del giroscopio, registrati internamente (all'interno della fotocamera) o esternamente (da Betaflight Blackbox), quindi importati in Gyroflow.

Anche per questo motivo è considerato più potente di Reelsteady poiché quest'ultimo è compatibile solo con GoPro.

## GyroFlow oppure Reelsteady GO

<div id="comparison-table">

|                    | **GyroFlow** | **Reelsteady GO** |
|--------------------|--------------|-------------------|
|              Costo |   Gratuito   |        $99        |
|          Anteprima |    Fluida    |      A scatti     |
|  Camere supportate |    Tutte*    |     Solo GoPro    |
| Tempi di Rendering |    Veloce    |       Lento       |

</div>


> *GyroFlow supporta tutte camere come GoPro e Insta360 che registrano internamente i dati di movimento dal giroscopio, quindi possono essere utilizzate direttamente con Gyroflow. 
> 
> Tuttavia, se la fotocamera che stai utilizzando non ce l'ha, dovresti ottenere i dati del giroscopio da Betaflight Blackbox, alcuni usano persino un controller di volo dedicato per questo. Sempre più telecamere hanno un giroscopio integrato progettato per funzionare con Gyroflow, come Runcam Thumb e Split HD.


Nonostante l'interfaccia utente più raffinata e i tempi di esportazione più rapidi, alcune persone potrebbero obiettare che il risultato di Reelsteady GO supera ancora Gyroflow. Ma ricorda che il principale vantaggio di Gyroflow è la capacità di stabilizzare le riprese da qualsiasi videocamera desideri. Per non parlare del Gyroflow è ancora in continua evoluzione, quindi migliorerà sicuramente.


## Download GyroFlow
GyroFlow può essere scaricato gratuitamente attraverso [GitHub](https://github.com/gyroflow/gyroflow/releases)
Scorri verso il basso fino a "Assets", scegli il link per il download per il tuo sistema operativo.

Se vuoi approfondire il funzionamento di Gyroflow, puoi leggere la [documentazione](https://docs.gyroflow.xyz/)



## Come funziona

Come primo step, apri GyroFlow e trascina il video che vuoi stabilizzare nel centro.

![Interfaccia GyroFlow](/assets/come-usare-gyroflow-per-stabilizzare-video-fpv/gyroflow.png)

GyroFlow è sostanzialmente diviso in 3 sezioni. Da sinistra verso destra abbiamo, tutto ciò che si riferisce all'input, quindi tutte le informazioni di base sul file video come su quale telecamera è registrato, codifica, formato, risoluzione ecc.

Sotto, hai il profilo dell'obiettivo, teoricamente il software dovrebbe essere in grado di riconoscere la camera in automatico e selezionare il profilo adatto, altrimenti inserisci semplicemente il nome della tua fotocamera nella barra di ricerca lì.

La parte successiva è selezionare il file di dati del giroscopio. Se stai utilizzando la GoPro, i dati del giroscopio sono già incorporati nel file video. Se hai la GoPro e un'altra videocamera che registra contemporaneamente, puoi effettivamente utilizzare i dati del giroscopio della GoPro per stabilizzare le riprese dell'altra videocamera, il che è una caratteristica piuttosto interessante.

Sotto la finestra di anteprima, puoi utilizzare i pulsanti "[" e "]" per tagliare il video per la parte di cui hai bisogno. Il pulsante accanto al volume consente di abilitare/disabilitare la stabilizzazione.

Sulla destra, hai il pannello di stabilizzazione, e tutte le opzioni per modificare il video finale stabilizzato.

Il FOV predefinito è 1 ed è abbastanza buono per quasi tutti i miei voli, puoi rimpicciolire o ingrandire a seconda dei tuoi gusti, ma zoomando troppo lontano potresti vedere i bordi neri quando la fotocamera si muove troppo.

Il prossimo è Smoothness, in pratica è la quantità di stabilizzazione applicata al tuo video. È importante non esagerare, troppa stabilizzazione rende il volo FPV in realtà robotico e innaturale. Ho trovato 0.3-0.4 un buon punto di partenza per la maggior parte delle persone. Mentre per voli cinematic, con poche manovre brusche fino a 0.7 può andare bene.

Puoi riprodurre il filmato in tempo reale per decidere quale FOV e fluidità ti servono prima di esportare, il che è fantastico.

Lo zoom dinamico controlla la velocità di ingrandimento/riduzione dello zoom quando avviene la stabilizzazione. Quando lo zoom è più veloce, la stabilizzazione è più efficace, ma quando è troppo veloce diventa innaturale. 2-2.5 secondi è più naturale per me.

A mio parere, l'esperienza utente di GyroFlow è migliore di Reelsteady GO (parlando puramente della GUI e del funzionamento, non della qualità dell'immagine o della stabilizzazione).
