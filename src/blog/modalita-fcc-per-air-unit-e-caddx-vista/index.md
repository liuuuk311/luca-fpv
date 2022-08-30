---
title: "Sbloccare la modalità FCC per DJI Goggles v1 e v2"
date: "2022-08-30T00:00:00.000Z"
excerpt: Tutorial su come sbloccare la DJI Air Unit e Caddx Vista in modalità FCC, con potenza a 700mW e 8 canali
categories: 
    - Tutorial
tags: 
    - DJI
featured: false
---

<style jsx>{`
    
    td:nth-of-type(1) {
        font-weight: 600;
    }

    @media 
    only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px)  {
        /*
        Label the data on mobile view
        
        */
        #file-table td:nth-of-type(1):before { content: "Numero nel file " }
        
        #file-table td:nth-of-type(2):before { content: "Modalità" }
        #file-table td:nth-of-type(3):before { content: "Canali disponibili" }
    }
`}</style>


La modalità FCC ti consente di avere accesso alla piena potenza di trasmissione di 700 mW e 8 canali, mentre la modalità CE supporta solo un massimo di 25 mW e 4 canali disponibili. In questo tutorial spiegherò in modo semplice come puoi sbloccare il tuo sistema FPV di DJI per ottenere migliori performance.

## Vantaggi della modalità FCC
Abilitando la modalità FCC, avrai accesso a 8 canali e 4 diversi livelli di potenza di trasmissione:
- 25 mW
- 200 mW
- 500 mW
- 700 mW

Solo se sei in modalità FCC, potrai eseguire l'hack che ti permette di aumentare ulteriormente la potenza di trasmissione fino a 1200 mW e abilitare la velocità in bit di 50 Mbps per il tuo feed video.

## Come capire in che modalità sei

Per scoprire se sei in modalità CE o FCC, puoi semplicemente controllare quanti canali sono disponibili nei tuoi occhiali DJI FPV (sotto l'opzione Player).

4 canali significa modalità CE e 8 significa modalità FCC e se sei in modalità CE, l'unica opzione di alimentazione è 25 mW. Se sei già in modalità FCC, sei a posto e non devi fare altro.

## Come sbloccare la modalità FCC sull'Air Unit

1. Estrai la scheda micro SD dall'Air Unit
2. Crea un file di testo all'interno della scheda sd, chiamalo naco (in modo che il nome del file e l'estensione diventino naco.txt)
3. Scrivi 1 nel file di testo (che significa modalità FCC per USA)
4. Inserire la scheda SD nell'Air Unit
5. Accendi gli occhiali e poi Air Unit

Per verificare se l'hai modificato con successo, controlla di nuovo nel menu Player e controlla se ci sono 8 canali.

Puoi rimetterlo in modalità CE inserendo il numero 3 nel file di testo. Il significato del numero nel file di testo:

<div id="file-table">

| Numero nel file | Modalità | Canali disponibili |
|-----------------|----------|--------------------|
| 1               | FCC      | 8                  |
| 2               | FCC      | 4                  |
| 3               | CE       | 4                  |
| 4               | SRRC     | 4                  |
| 5               | Giappone | 3                  |
| 6               | Corea    | 4                  |
| 7               | Brasile  | 4                  |
| 8               | Francia  | 4                  |

</div>

## Come sbloccare la modalità FCC per la Caddx Vista

1. Accendi sia gli occhiali che la Caddx Vista, attendi di vedere l'immagine negli occhiali
2. Collega il cavo USB alla Vista, un'unità esterna dovrebbe apparire sul tuo computer
3. Crea un file di testo, chiamalo naco (in modo che il nome del file e l'estensione diventino naco.txt)
4. Digita 1 nel file di testo e salvalo
5. Copia il file di testo nell'unità esterna di Vista, scollega il cavo USB
6. Riavvia sia Vista che FPV Goggles

Per verificare se l'hai modificato con successo, controlla di nuovo nel menu Player e controlla se ci sono 8 canali.

Come con l'Air Unit, puoi rimetterlo in modalità CE inserendo il numero 3 nel file di testo.

## Come sbloccare la potenza di trasmissione fino a 1200mw
Se i 700mw non vi bastano, esiste un ulteriore procedura per sbloccare la potenza di trasmissione a 1000mW e a 1200mW.

La procedura è molto simile a quella precedente, solo che **la scheda SD questa volta va inserita negli occhiali**. Questa procedura funziona sia con i DJI Goggles v1 che con i v2.

Create quindi un file .txt e nominatelo *naco_pwr.txt*.

Al suo interno scrivete "pwr_1" (senza virgolette) se volete trasmettere a 1000mW oppure "pwr_2" (sempre senza virgolette) se volte davvero la massima potenza di 1200mW. 

Salvate quindi il file e caricatelo sulla vostra scheda SD. Inseritela nei DJI Googles, alimentateli ed attendete qualche secondo e avete sbloccato i vostri DJI Goggles. 

## Ripetere questa procedura dopo ogni aggiornamento
Purtroppo è necessario ripetere la procedura spiegata in questo tutorial, ogni volta che aggiorni il firmware sui tuoi occhiali DJI FPV e sull'Air Unit. Infatti, l'aggiornamento ripristinerà le impostazioni di alimentazione in base alla tua regione (ad esempio, se aggiorni dall'Italia, lo riporterà alla modalità CE), quindi potresti dover ripetere questo processo.

