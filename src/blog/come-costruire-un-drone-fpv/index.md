---
title: "Come costruire un drone FPV nel 2022: La guida passo a passo"
date: "2022-01-05T00:00:00.000Z"
excerpt: "Questa guida è stata pensata per chi non hanno mai costruito un drone FPV prima. I componenti sono stati scelti per facilitare la build e la configurazione."
categories:
    - Tutorial
tags: 
    - Principianti
featured: true
---
<style jsx>{`
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
`}</style>



## Per chi è pensata questa build?
Questa guida è stata pensata per le persone che non hanno mai costruito un drone FPV prima. I componenti sono stati scelti per minimizzare il numero di saldature e facilitare la configurazione.

In questo articolo spiego quindi come costruire un drone capace di arrivare fino 5km di distanza, e capace di andare fino a 160 km/h. 



## Le basi 
Lo scopo di questo articolo è spiegare quali sono gli step necessari per costruire e configurare un drone FPV da zero. 

Se sei completamente nuovo al mondo FPV, prima di iniziare assicurati di aver dato una lettura veloce a questo articolo: [FPV per principianti](https://lucafpv.com/fpv-per-principianti)

Se durante l'articolo trovi degli acronimi di cui non consoci il significato, fai riferimento a [questo articolo](https://lucafpv.com/bibbia-fpv).

Il tempo stimato per la build completa è di 2 ore, sei pronto? Bene, cominciamo!

## Occorrente

Questa build verrà fatta con i componenti specificati nella prima colonna della tabella. Tuttavia, suggerisco anche delle alternative più economiche per ogni componente. 


<div id="components-table"> 


|                 | Per questa build                                                 | Alternativa economica                      |
|-----------------|------------------------------------------------------------------|--------------------------------------------|
| **Telaio**      | <AffiliateLink href="https://www.banggood.com/custlink/3G3Y0ISrnd" label="GepRC Mark 4 HD"/>  | <AffiliateLink href="https://www.drone24hours.com/prodotto/tbs-source-one-hd-5inch/?D24H=lucapalonca" label="TBS Source One v5"/> |
| **Stack**       | Speedybee F7 V2 <br/> <AffiliateLink href="https://www.banggood.com/custlink/KvDhBS9J0P" label="Banggood"/> - <AffiliateLink href="https://www.drone24hours.com/prodotto/speedybee-f7-v2-fc-45a-3-6s-blheli_32-wifi-bluetooth/?D24H=lucapalonca" label="D24H"/>| Stack MAMBA MK4 <br/> <AffiliateLink href="https://www.banggood.com/custlink/KmKWmJPVe1" label="Banggood"/> - <AffiliateLink href="https://www.drone24hours.com/prodotto/diatone-mamba-mk4-h743-55a-6s-32bit-128k/?D24H=lucapalonca" label="D24H"/> |
| **Motori**      | T-Motor Velox V2 <br/> <AffiliateLink href="https://www.banggood.com/custlink/GvvR0iZcOF" label="Banggood"/> - <AffiliateLink href="https://www.drone24hours.com/prodotto/t-motor-v2306-v2-kv1950/?D24H=lucapalonca" label="D24H"/>   | Emax Eco II <br/> <AffiliateLink href="https://www.banggood.com/custlink/DGGdgZ9WOo" label="Banggood"/> - <AffiliateLink href="https://www.drone24hours.com/prodotto/emax-eco-ii-series-2207-1700kv-1900kv-2400kv/?D24H=lucapalonca" label="D24H"/>|
| **Sistema FPV** | <AffiliateLink href="https://www.banggood.com/custlink/v3GWKctPsE" label="Caddx Nebula Pro"/>       | <AffiliateLink href="https://www.banggood.com/custlink/mK3YB88WNN" label="Rush Tank II"/> + <AffiliateLink href="https://www.banggood.com/custlink/DvmpGpPPsW" label="Foxeer Razor Mini"/> + [Antenna](https://www.banggood.com/custlink/DKmd4Iic2y) |
| **Ricevente**   | <AffiliateLink href="https://www.drone24hours.com/prodotto/tbs-crossfire-nano-rx-se/?D24H=lucapalonca" label="TBS Crossfire Nano"/> | <AffiliateLink href="https://www.banggood.com/custlink/D33CKrHHAS" label="Frsky XM+"/> |
| **Eliche**      |  <AffiliateLink href="https://www.drone24hours.com/prodotto/ethix-s3-watermelon/?D24H=lucapalonca" label="Ethix S3"/> | Qualsiasi elica 5"                         |
| **Totale**      | **400 euro**                                                       | **270 euro**                               |


</div>

La grossa differenza in prezzo tra le due build è dovuta principalmente al fatto che questa sarà una build digitale. Tuttavia, spiegherò anche come costruire la versione analogica.

![Tutto l'occorrente](/assets/come-costruire-un-drone-fpv/occorrente.jpeg)


## Telaio
Come telaio ho scelto il GepRC Mark 4 HD, nella versione da 5". Perfetta per chi inizia, con sufficiente spazio per installare tutto il necessario.

Guardando il telaio è chiaro che GepRC è aggiornato con le pratiche di tendenza del design del telaio. Le caratteristiche come viti incassate, bracci parzialmente a sandwich, gommini per smorzare l'intero stack.

Le istruzioni di montaggio sono semplici e chiare. Una valida alternativa più economica è il TBS Source One V4.

![Il Telaio](/assets/come-costruire-un-drone-fpv/pezzi_del_frame_dall'alto.jpeg)

## Stack: FC e ESC
Il vantaggio di uno stack è che Flight Controller ed ESC sono pensati per funzionare insieme, quindi questo tipo di setup richiede poche saldature rispetto ad altre configurazioni.

Ho selezionato Speedybee F7 V2 perché ha tante funzionalità utili per un principiante, ha il Bluetooth integrato in modo da poter configurare Betaflight dal tuo telefono. Questo è molto utile sia quando si è in giro a volare, che soprattutto quando lo si configura a casa, evitando tutti i gratta capo per installare i giusti driver di Betaflight. Infine, un'altro vantaggio per cui ho deciso di scegliere questo stack è il fatto che sia  plug and play con DJI Air Unit.

È importante scegliere un FC con un BEC dedicato (uscita 9V) per DJI Air Unit e Vista. Sebbene sia possibile alimentare Vista direttamente dalla batteria LiPo, è meno probabile che la si danneggi a causa dei picchi di tensione quando si utilizza un BEC. E lo Speedybee F7 V2 ce l'ha.

![Stack](/assets/come-costruire-un-drone-fpv/stack.jpeg)

## Motori

La scelta dei motori per un drone FPV di 5" è relativamente semplice. I motori di questi tempi si comportano in modo molto simile, la differenza principale di solito è la qualità costruttiva. Per una build come questa, le dimensioni del motore come 2306, 2207, 2208 sono tutte buone opzioni.

Bisogna prestare attenzione al numero di KV del motore. Normalmente i KV si scelgo sulla base del tipo di batteria che si andrà ad utilizzare. 

Nel caso di una batteria 4S, le scelte più comuni sono tra i 2300 KV e i 2600 KV. Per le batterie si tende ad usare motori tra i 1700 KV e i 1900 KV. 

Se non sai quale batteria scegliere, consiglio di partire direttamente con le 6S. Si ha più potenza, quindi risulta più facile evitare crash all'ultimo secondo. 

## Sistema FPV
Per i principianti consiglio sempre di usare il sistema DJI FPV, insieme agli occhiali DJI. Il motivo è semplice, facilità di utilizzo e performance strabilianti senza dover smanettare molto.

Nel mondo DJI ci sono due opzioni VTX: la DJI Air Unit full size e Caddx Vista. Tuttavia, DJI ha annunciato nel marzo 2021 che non verrà più prodotta l'Air Unit, quindi la Vista sarà l'unica opzione rimasta.

Per le camere, ci sono diverse opzioni. A parte la Nebula da cui consiglio di rimaner lontani, le altre sono tutte opzioni valide. In questo caso io uso una Vista con la camera originale della DJI.

![Sistema FPV digitale](/assets/come-costruire-un-drone-fpv/caddx_vista.jpeg)

## Ricevente

Se hai già un radiocomando, assicurati di scegliere una ricevente compatibile col tuo radiocomando. Nel mio caso ho scelto la TBS Nano.

Al momento, consiglio TBS Crossfire per le sue prestazioni, affidabilità e facilità d'uso. Uso esclusivamente il sistema Crossfire in quasi tutti i miei droni FPV, perché hanno ricevitori molto compatti e non mi devo preoccupare della distanza, perché ha un range di diverse decine di chilometri.

Per utilizzare la ricevente Crossfire Nano, dovrai anche avere un modulo Crossfire TX che si collega sul retro del radiocomando.

![Ricevente TBS crossfire](/assets/come-costruire-un-drone-fpv/rx.jpeg)

## Altro occorrente

Per poi poter pilotare il drone che costruirai avrai bisogno del classico equipaggiamento di un pilota FPV. 

- **Un radiocomando**, quello che consiglio al momento è il RadioMaster TX16S con possibilmente il modulo crossfire. Se vuoi dare un'occhiata anche alle possibili alternative, leggi [quali sono i migliori radiocomandi](https://lucafpv.com/migliori-radiocomandi-per-droni-fpv).
- **Degli occhiali FPV**, la scelta migliore nel 2022 sono sicuramente gli occhiali DJI FPV (comprali su <AffiliateLink href="https://amzn.to/3AzHXH2" label="Amazon.it"/>, <AffiliateLink href="https://www.drone24hours.com/product/occhiali-dji-fpv-v2?D24H=lucapalonca" label="Drone24Hours"/> che è un negozio italiano che spedisce veloce o su <AffiliateLink href="https://www.banggood.com/custlink/KG3E6OjP11" label="Banggood"/>), sia la versione V1 che V2 vanno bene. <br/> Per chi vuole spendere meno, *le migliori scelte analogiche* in ordine di prezzo decrescente sono: <AffiliateLink href="https://www.banggood.com/custlink/GKDdt3FyqU" label="Fatshark HDO2"/>, <AffiliateLink href="https://www.banggood.com/custlink/3DDygLLa4t" label="Fatshark Attitude V6"/> e infine <AffiliateLink href="https://www.banggood.com/custlink/mKmhPmbuCO" label="Eachine EV800D"/>.
- **Delle batterie LiPo**, per questa build userò delle CNHL da 6S. E non dimenticare di comprare un carica LiPo. 

## Attrezzi
Ecco l'elenco degli strumenti essenziali per la costruzione di droni FPV. Queste sono cose che vanno acquistate una volta, e potrai usare nel futuro per altre build.

- Saldatore (<AffiliateLink href="https://amzn.to/38PEojV" label="acquista da Amazon.it" />)
- Set di cacciaviti esadecimali (<AffiliateLink href="https://amzn.to/2X3MP8i" label="acquista da Amazon.it" />)
- Un piccolo cacciavite a croce (<AffiliateLink href="https://amzn.to/3E17WsT" label="acquista da Amazon.it" />)
- Un paio di forbici per spellare e tagliare i fili
- Nastro isolante (<AffiliateLink href="https://amzn.to/3E0E3sU" label="acquista da Amazon.it" />)
- Nastro biadesivo 3M in schiuma (<AffiliateLink href="https://amzn.to/3BXcSgW" label="acquista da Amazon.it" />)
- Multimetro (<AffiliateLink href="https://amzn.to/2Xcad3U" label="acquista da Amazon.it" />)
- Fascette

## Costruzione

Vediamo tutti i passaggi per costruire il proprio drone FPV.

### 1. Assemblare il frame

Il primo passo, è montare gli standoff, ovvero i distanziali in allumnio. Il Mark4 ha standoff di due dimensioni, prima vanno usati quelli più lunghi.

![Frame con gli standoff](/assets/come-costruire-un-drone-fpv/frame_con_standoff.jpeg)

A questo punto, si passa al posizionamento dei braccetti sul frame. Sopra ogni coppia di braccetti, va aggiunto un pezzo di fibra di carbonio per aumentare la rigidità, sopra i quali fanno montati gli standoff più corti.

![Frame con i braccetti](/assets/come-costruire-un-drone-fpv/braccetti_del_frame.jpeg)

A questo punto, montanto il top plate, ovvero la parte superiore, abbiamo il frame completo. 

![Frame montato](/assets/come-costruire-un-drone-fpv/frame_montato.jpeg)

### 2. Installazione Motori 

Ora si procede col montare i motori sul frame. Per tenere le cose più ordinate, ho attorcigliato i cavi motori.

![Motore](/assets/come-costruire-un-drone-fpv/motore.jpeg)

In questo passaggio è importante fare attenzione le viti dei motori non siano troppo lunghe. Se dovessero toccare la bobina dei motori, si rischia di bruciare i motori.

### 3. Schema di cablaggio

![Schema di cablaggio](/assets/come-costruire-un-drone-fpv/wiring.png)

### 4. ESC
Il primo passaggio per lavorare sull'ESC, è installarlo assicurandosi che i pad della batteria siano rivolti verso il retro del telaio.

![Installazione ESC](/assets/come-costruire-un-drone-fpv/esc_montato.jpeg)

Prima di saldare i cavi però, vanno tagliati della dimensione giusta. In questo passaggio è importante prendere bene le misure perchè se tagliamo i cavi troppo corti, non li protremo più usare.

![Prendere le dimensioni](/assets/come-costruire-un-drone-fpv/preparazione_taglio_cavi_motori.jpeg)
![Taglio dei motori](/assets/come-costruire-un-drone-fpv/taglio_dei_fili.jpeg)
![Lunghezza del filo spelato](/assets/come-costruire-un-drone-fpv/filo_spelato.jpeg)


Quindi dobbiamo pre-saldare ogni pad. Avremo 12 pad per i motori, 3 per ciascun motore e 2 pad per il cavo della batteria.

> Per evitare di creare cortocircuiti, conviene mettere del nastro isolante sui componenti che vogliamo proteggere

![Pre saldatura](/assets/come-costruire-un-drone-fpv/presaldatura.jpeg)

A questo punto, va saldato il condensatore e il cavo XT60. In questo passaggio, è molto importante controllare più volte il verso sia del codensatore, che del cavo della batteria. Per riconoscere il lato negativo del condensatore basta individuare la banda grigia con il segno meno.

![Condensatore e XT60](/assets/come-costruire-un-drone-fpv/xt60_saldato.jpeg)

Succesivamente vanno saldati i cavi dei motori. 

![Motori saldati](/assets/come-costruire-un-drone-fpv/motori_saldati.jpeg)

### 5. Collegare FC

Sul flight controller le uniche saldature che dobbiamo fare sono relative alla ricevente e al beeper autoalimentato.

Quando si salda la ricevente, io preferisco rimuovere l'antenna perché rende tutto più semplice.

![Ricevente saldata](/assets/come-costruire-un-drone-fpv/ricevente_saldata.jpeg)

Per quanto riguarda il beeper al momento saldiamo solo il cavetto. Collegheremo poi il beeper vero e prorpio successivamente.
![Cavi del beeper](/assets/come-costruire-un-drone-fpv/ricevente_e_beeper_pronta.jpeg)

Con gli stack, ovvero FC ed ESC dello stesso produttore, collegare il flight controller è un gioco da ragazzi. Basta utilizzare il cavetto in dotazione. 

![Collegare l'FC](/assets/come-costruire-un-drone-fpv/fc_e_esc_collegati.jpg)

Per quanto riguarda i dadi che fissano il flight controller, dobbiamo assicurarci che non siano troppo stretti, altrimenti andiamo ad annullare l'effetto dei gommini anti vibrazioni.

![FC Montata](/assets/come-costruire-un-drone-fpv/fc_montata.jpeg)


### 6. Sistema FPV 

L'installazione del sistema FPV, nel caso si utilizzi il sistema digitale DJI, è molto semplice. Infatti, il flight controller scelto, è già predisposto al digitale e ci fornisce quindi un connettore e un cavetto.

Il cavetto fornito ha 6 fili, dal momento che utilizzeremo la Caddx Vista solo come VTX e non anche come ricevente, possiamo tranquillamente rimuovere il filo nero e il filo giallo.
![Rimozione cavi Caddx Vista](/assets/come-costruire-un-drone-fpv/cavi_da_tagliare_caddx.jpeg)

Quindi possiamo rimuovere anche il connettore più grande che è pensato per la DJI Air Unit.
![Rimuovere connettore dal cavo](/assets/come-costruire-un-drone-fpv/tagliare_cavo.jpeg)

Infine possiamo procedere con la saldatura dei cavi sulla Caddx Vista.
![Saldatura Caddx Vista](/assets/come-costruire-un-drone-fpv/saldato_sulla_caddx.jpeg)

### 7. Configurazione betaflight

Una volta completata la build, quello che rimane da fare è configurare Betaflight. Il grosso vantaggio di usare lo SpeedyBee F7 V2, è la possibilità di utilizzare l'app SpeedyBee per configurare tutto. Dunque non abbiamo bisogno del classico Betaflight Configurator.

In caso di flight controller diverso, puoi fare riferimento a [questa guida](https://lucafpv.com/configurare-betaflight).










