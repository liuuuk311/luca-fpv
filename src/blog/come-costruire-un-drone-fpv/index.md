---
title: "Come costruire un drone FPV nel 2021: La guida passo a passo"
date: "2021-09-08T00:00:00.000Z"
excerpt: 
category:
    - Tutorial
tags: 
    - Principianti
featured: true
draft: true
---
<style>
    @media 
    only screen and (min-width: 980px) {
        td {
            width: 170px
        }
        td:nth-of-type(1){
            padding-right: 0;
            width: 175px;
        }
    }
    @media 
    only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px)  {
        /*
        Label the data on mobile view
        
        */

        #components-table td:nth-of-type(2):before { content: "Per questa build"; }
        #components-table td:nth-of-type(3):before { content: "Alternativa"; }
    }
</style>


## Per chi è pensata questa build?
Questa guida è stata pensata per le persone che non hanno mai costruito un drone FPV prima. I componenti sono stati scelti per minimizzare il numero di saldature e facilitare la configurazione.

In questo articolo spiego quindi come costruire un drone capace di arrivare fino 5km di distanza, e capace di andare fino a 160 km/h. 

Una volta costruito ecco quello che può fare questo drone.

<!-- VIDEO di alcuni voli col il drone -->

## Le basi 
Lo scopo di questo articolo è spiegare quali sono gli step necessari per costruire e configurare un drone FPV da zero. 

Se sei completamente nuovo al mondo FPV, prima di iniziare assicurati di aver dato una lettura veloce a questo articolo: [FPV per principianti](https://lucafpv.com/fpv-per-principianti)

Se durante l'articolo trovi degli acronimi di cui non consoci il significato, fai riferimento a [questo articolo](https://lucafpv.com/bibbia-fpv).

Il tempo stimato per la build completa è di XX ore, sei pronto? Bene, cominciamo!

## Occorrente

Questa build verrà fatta con i componenti specificati nella prima colonna della tabella. Tuttavia, suggerisco anche delle alternative più economiche per ogni componente. 

<div id="components-table"> 


|                 | Per questa build                                                 | Alternativa economica                      |
|-----------------|------------------------------------------------------------------|--------------------------------------------|
| **Telaio**      | [GepRC Mark 4 HD](https://www.banggood.com/custlink/3G3Y0ISrnd)  | [TBS Source One v4](https://www.drone24hours.com/prodotto/tbs-source-one-v4-5-pollici/) |
| **Stack**       | Speedybee F7 V2 <br/> [Banggood](https://www.banggood.com/custlink/KvDhBS9J0P) - [D24H](https://www.drone24hours.com/prodotto/speedybee-f7-v2-fc-45a-3-6s-blheli_32-wifi-bluetooth/?D24H=lucapalonca)| Stack Mamba F405 <br/> [Banggood](https://www.banggood.com/custlink/33mYe9SWBk) - [D24H](https://www.drone24hours.com/prodotto/mamba-basic-f405-mk2-50a-bls-4-6s/?D24H=lucapalonca) |
| **Motori**      | T-Motor Velox V2 <br/> [Banggood](https://www.banggood.com/custlink/GvvR0iZcOF) - [D24H](https://www.drone24hours.com/prodotto/t-motor-v2306-v2-kv1950/?D24H=lucapalonca)   | Emax Eco II <br/> [Banggood](https://www.banggood.com/custlink/DGGdgZ9WOo) - [D24H](https://www.drone24hours.com/prodotto/emax-eco-ii-series-2207-1700kv-1900kv-2400kv/?D24H=lucapalonca)|
| **Sistema FPV** | [Caddx Vista](https://www.banggood.com/custlink/mGDh6iZcL3)       | [Rush Tank II](https://www.banggood.com/custlink/mK3YB88WNN) + [Foxeer Predator 5](https://www.banggood.com/custlink/GGKy6SIcbU) + [Antenna](https://www.banggood.com/custlink/DKmd4Iic2y) |
| **Ricevente**   | [TBS Crossfire Nano](https://www.drone24hours.com/prodotto/tbs-crossfire-nano-rx-se/?D24H=lucapalonca) | [R9M Mini](https://www.drone24hours.com/prodotto/frsky-r9mx-ota-sbus-long-range-900mhz-micro-rc-receiver-access/?D24H=lucapalonca) |
| **Eliche**      | [HQ Ethix S3](https://www.drone24hours.com/prodotto/ethix-s3-watermelon/?D24H=lucapalonca) | Qualsiasi elica 5"                         |
| **Totale**      | **400 euro**                                                       | **270 euro**                               |


</div>

La grossa differenza in prezzo tra le due build è dovuta principalmente al fatto che questa sarà una build digitale. Tuttavia, spiegherò anche come costruire la versione analogica.

<!-- Foto di tutti le parti che servono -->


## Telaio
Come telaio ho scelto il GepRC Mark 4 HD, nella versione da 5". Perfetta per chi inizia, con sufficiente spazio per installare tutto il necessario.

Guardando il telaio è chiaro che GepRC è aggiornato con le pratiche di tendenza del design del telaio. Le caratteristiche come viti incassate, bracci parzialmente a sandwich, gommini per smorzare l'intero stack.

Le istruzioni di montaggio sono semplici e chiare. Una valida alternativa più economica è il TBS Source One V4.

## Stack: FC e ESC
Il vantaggio di uno stack è che Flight Controller ed ESC sono pensati per funzionare insieme, quindi questo tipo di setup richiede poche saldature rispetto ad altre configurazioni.

Ho selezionato Speedybee F7 V2 perché ha tante funzionalità utili per un principiante, ha il Bluetooth integrato in modo da poter configurare Betaflight dal tuo telefono. Questo è molto utile sia quando si è in giro a volare, che soprattutto quando lo si configura a casa, evitando tutti i gratta capo per installare i giusti driver di Betaflight. Infine, un'altro vantaggio per cui ho deciso di scegliere questo stack è il fatto che sia  plug and play con DJI Air Unit.

È importante scegliere un FC con un BEC dedicato (uscita 9V) per DJI Air Unit e Vista. Sebbene sia possibile alimentare Vista direttamente dalla batteria LiPo, è meno probabile che la si danneggi a causa dei picchi di tensione quando si utilizza un BEC. E lo Speedybee F7 V2 ce l'ha.

## Motori

La scelta dei motori per un drone FPV di 5" è relativamente semplice. I motori di questi tempi si comportano in modo molto simile, la differenza principale di solito è la qualità costruttiva. Per una build come questa, le dimensioni del motore come 2306, 2207, 2208 sono tutte buone opzioni.

Bisogna prestare attenzione al numero di KV del motore. Normalmente i KV si scelgo sulla base del tipo di batteria che si andrà ad utilizzare. 

Nel caso di una batteria 4S, le scelte più comuni sono tra i 2300 KV e i 2600 KV. Per le batterie si tende ad usare motori tra i 1700 KV e i 1900 KV. 

Se non sai quale batteria scegliere, consiglio di partire direttamente con le 6S. Si ha più potenza, quindi risulta più facile evitare crash all'ultimo secondo. 


## Sistema FPV
Per i principianti consiglio sempre di usare il sistema DJI FPV, insieme agli occhiali DJI. Il motivo è semplice, facilità di utilizzo e performance strabilianti senza dover smanettare molto.

Nel mondo DJI ci sono due opzioni VTX: la DJI Air Unit full size e Caddx Vista. Tuttavia, DJI ha annunciato nel marzo 2021 che non verrà più prodotta l'Air Unit, quindi la Vista sarà l'unica opzione rimasta.

Per le camere, ci sono diverse opzioni. A parte la Nebula da cui consiglio di rimaner lontani, le altre sono tutte opzioni valide. In questo caso io uso una Vista con la camera originale della DJI.

## Ricevente

Se hai già un radiocomando, assicurati di scegliere una ricevente compatibile col tuo radiocomando. Nel mio caso ho scelto la TBS Nano.

Al momento, consiglio TBS Crossfire per le sue prestazioni, affidabilità e facilità d'uso. Uso esclusivamente il sistema Crossfire in quasi tutti i miei droni FPV, perché hanno ricevitori molto compatti e non mi devo preoccupare della distanza, perché ha un range di diverse decine di chilometri.

Per utilizzare la ricevente Crossfire Nano, dovrai anche avere un modulo Crossfire TX che si collega sul retro del radiocomando.


## Altro occorrente

Per poi poter pilotare il drone che costruirai avrai bisogno del classico equipaggiamento di un pilota FPV. 

- **Un radiocomando**, quello che consiglio al momento è il RadioMaster TX16S con possibilmente il modulo crossfire. Se vuoi dare un'occhiata anche alle possibili alternative, leggi [quali sono i migliori radiocomandi](https://lucafpv.com/migliori-radiocomandi-per-droni-fpv).
- **Degli occhiali FPV**, la scelta migliore nel 2021 sono sicuramente gli [occhiali DJI FPV](), sia la versione V1 che V2 vanno bene. <br/> Per chi vuole spendere meno, *le migliori scelte analogiche* in ordine di prezzo decrescente sono: [Fatshark HDO2](), [Fatshark Attitude V6]() e infine [Eachine EV800D]().
- **Delle batterie LiPo**, per questa build userò delle CNHL da 6S. E non dimenticare di comprare un carica LiPo. 

## Attrezzi
Ecco l'elenco degli strumenti essenziali per la costruzione di droni FPV. Queste sono cose che vanno acquistate una volta, e potrai usare nel futuro per altre build.

- Saldatore ([acquista da Amazon](https://amzn.to/38PEojV))
- Set di cacciaviti esadecimali ([acquista da Amazon](https://amzn.to/2X3MP8i))
- Un piccolo cacciavite a croce ([acquista da Amazon](https://amzn.to/3E17WsT))
- Un paio di forbici per spellare e tagliare i fili
- Nastro isolante ([acquista da Amazon](https://amzn.to/3E0E3sU))
- Nastro biadesivo 3M in schiuma ([acquista da Amazon](https://amzn.to/3BXcSgW))
- Multimetro ([acquista da Amazon](https://amzn.to/2Xcad3U))
- Fascette

1. Assemblare il frame (foto)

2. Installazione Motori (foto) 
Lunghezza viti motori (foto) attenzione che non tocchino

3. Schema di cablaggio (da fare)

Prova a vedere se ci sta tutto senza saldare (foto), capiamo la lunghezza dei fili (foto)

4. Saldare ESC (foto)
- pre saldare
- xt60
- condensatore
- motori

TIP: scotch sul elettronica da non saldare

5. Collegare FC (foto)

6. Check e test motori
Spiegare rotazione motori

7. Ricevente (foto)

8. Sistema FPV 

9. Buzzer 

10. Configurazione betaflight - Link

11. Test di volo - Video 

12. PID Tuning









