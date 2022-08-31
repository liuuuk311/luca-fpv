---
title: "Cos'è ExpressLRS ed è davvero meglio di Crossfire?"
date: "2022-08-31T00:00:00.000Z"
excerpt: Tutorial passo dopo passo per configurare ExpressLRS 2.4Ghz sia su radiocomandi OpenTX che su EdgeTX 
categories: 
    - Tutorial
tags: 
    - ExpressLRS
    - Radicomando
featured: false
---

<style jsx>{`
    
    td:nth-of-type(1) {
        font-weight: 600;
    }

    #hardware-table td:nth-of-type(1){
        width: 25%;
    }
    @media 
    only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px)  {
        /*
        Label the data on mobile view
        
        */
        #hardware-table td:nth-of-type(1){
            background-color: #fff;
            padding: 0;
            width: 100%;
        }
        #hardware-table td:nth-of-type(2):before { content: "Nome" }
        #hardware-table td:nth-of-type(3):before { content: "Kit completo" }
        #hardware-table td:nth-of-type(4):before { content: "Prezzo" }
        #hardware-table td:nth-of-type(5):before { content: "Venditori" }
        
        #range-table td:nth-of-type(1):before { content: "Frequenza" }
        #range-table td:nth-of-type(1){
            width: 100%;
        }
        #range-table td:nth-of-type(2):before { content: "Distanza Massima" }
        #range-table td:nth-of-type(3):before { content: "Freq. Aggiornamento" }
        #range-table td:nth-of-type(4):before { content: "Potenza" }
        #range-table td:nth-of-type(5):before { content: "Video" }
    }
`}</style>

ExpressLRS è un sistema di radio-controllo open source che si concentra sulla latenza e sulla distanza di funzionamento. È anche molto più conveniente rispetto a TBS Crossfire e Frsky R9M. Se stai cercando un modo più economico per iniziare a volare a lungo raggio e preferisci l'open source, allora ExpressLRS potrebbe essere perfetto per te.

Al momento siamo alla versione 2, e la versione 3 che aggiunge tante nuove funzionalità e quasi pronta per esssere rilasciata.

## I Vantaggi di ExpressLRS (ELRS)

- **Ricco di funzionalità**: ExpressLRS è un moderno sistema RC che offre la maggior parte, se non tutte, le funzionalità di cui i piloti FPV hanno bisogno.
- **Distanza del segnale**: <Link to="#range-table">i test</Link> hanno dimostrato che è possibile ottenere decine di chilometri di autonomia con soli 100 mW. 
- **Bassa latenza**: la versione a 900 MHz di ExpressLRS funziona a una frequenza di aggiornamento massima di 200 Hz, che è superiore a 150 Hz di Crossfire. La versione a 2,4 GHz può funzionare anche a 500 Hz!
- **Open source**: viene sviluppato da una comunità attiva e aggiornato regolarmente. Diversi produttori possono realizzare hardware compatibile per il software (proprio come per Betaflight), il che significa che ci sono più opzioni e disponibilità di moduli ricevitore e trasmettitore.
- **Conveniente**: poiché è open source, il software è gratuito, quindi il costo è puramente hardware. E la concorrenza tra i produttori fa abbassare il prezzo, il che è ottimo per i consumatori.
- **Relativamente facile da configurare**: i moduli TX e RX comunicano tramite il protocollo seriale CRSF standard (Crossfire) per un facile utilizzo con Betaflight e OpenTX/EdgeTX.

## ELRS è fantastico ma non per tutti
Rispetto altri sistemi RC, come ad esempio TBS Crossfire o ImmersionRC Ghost, ExpressLRS è tecnicamente un po' più complesso. Questo significa che il processo di flash e aggiornamento del firmware non sono cosi intuitivi come nei sistemi commerciali menzionati prima.

Il progetto è open source e si sta evolvendo rapidamente, il che è sicuramente un bene perché quindi il sistema potrà solo che migliorare!

Infine, ELRS supporta solo fino a 12 canali (come TBS Crossfire) a causa della larghezza di banda limitata. Dunque per i piloti di droni FPV, 12 canali sono sufficenti, ma se non lo dovessero essere puoi leggere questa guida in cui spiego [come configurare più modalità di volo su un sigolo canale aux](https://lucafpv.com/tutte-le-modalita-di-betaflight-su-un-canale-aux).

## Test del range

<div id="range-table">

| Frequenza | Distanza massima | Frequenza Aggiornamento | Potenza | Video                                                              |
|-----------|------------------|-------------------------|---------|--------------------------------------------------------------------|
| 2,4 GHz   | 10 Km            | 250 Hz                  | 100 mW  | <OutsideLink href="https://youtu.be/dJYfWLtXVg8" label="Youtube"/> |
| 900 MHz   | 30 Km            | 50 Hz                   | 1 W     | <OutsideLink href="https://youtu.be/SbWvFIpVkto" label="Youtube"/> |

</div>

## Qual è la frequenza migliore per ExpressLRS: 2.4GHz o 900MHz?

ExpressLRS è disponibile su due frequenze: 900 MHz (915/868 a seconda della regione) e 2,4 GHz.

Come dicevo, i test hanno mostrato come utilizzando ExpressLRS a 2,4 GHz è possibile arrivare fino a 33 km di distanza con soli 100 mW. Quindi, quando ti dicono che 900 MHz è migliore con la portata, non è completamente vero, a meno che tu non stia spingendo 30 km o più. 

Sicuramente a queste distanze il vero punto debole sarà il tuo collegamento video a 5,8 GHz, infatti quest'ultimo si degraderà molto prima del tuo collegamento radio. 

Tuttavia, la frequenza più bassa di 900 MHz ha una migliore penetrazione del segnale e questo per una questione di fisica.

A parte questo, la differenza principale è che il sistema a 900 MHz può utilizzare una frequenza di aggiornamento fino a 200 Hz, mentre il 2,4 GHz può arrivare fino a 500 Hz. Questo cosa significa? Vuol dire che utilizzando il sistema a 900 MHz, il modulo TX invierà alla RX sul drone meno di frequente i pacchetti con le informazioni della posizione dei tuoi stick. Questo si traduce in una sensazione di minore reattività del drone. 

Stiamo comunque parlando di frazioni di secondi di differenza, infatti il sistema a 900 MHz invia le informazioni 200 volte al secondo, mentre con 2,4 GHz i pacchetti arrivano 500 volte al secondo. Questa differenza sarà impercettibile per la maggior parte delle persone.

Se vogliamo vedere un'altro svantaggio più pratico del sistema a 900 MHz, è la dimensione delle antenne, sia sul modulo TX che sul modulo RX. Infatti, le antenne a 2,4 GHz sono molto più piccole (2,5 volte), specialmente con i ricevitori PP ed EP2 hanno quelle minuscole antenne in ceramica SMD, perfette per micro e whoops.

Inoltre, la larghezza di banda è più ampia su 2,4 GHz, il che significa che puoi volare con più persone contemporaneamente.

Infine, con 2,4 GHz, non devi preoccuparti di quale frequenza utilizzare. Con 900 MHz, devi scegliere tra 868 MHz o 915 MHz a seconda della tua regione perché le torri cellulari condividono la stessa banda e quindi possono creare interferenza e generare failsafe che fanno cadere il tuo drone. 

**Quindi, per riassumere, se vuoi l'esperienza ExpressLRS completa per le corse, il freestyle o semplicemente volare in tranquillità, io ti consiglio di scegliere la versione 2,4 GHz**.

## Moduli e riceventi

Quando ExpressLRS è uscito, era necessario costruire il tuo modulo ricevitore e trasmettitore, e quindi non alla portata di tutti. Ora finalmente puoi è possibile acquistarli nei [migliori negozi specializzati](https://lucafpv.com/dove-acquistare-prodotti-fpv).

Ancora oggi comunque puoi costruire il tuo modulo ricevitore e trasmettitore da zero procurandoti i componenti giusti, ordinando le PCB e saldando quei minuscoli chip sulla scheda. Questo è probabilmente il modo più economico, la costruzione di un modulo TX e un ricevitore, ma non tutti hanno le capacità necessarie. Se sei interessato, <OutsideLink label="la loro pagina Github" href="https://github.com/ExpressLRS/ExpressLRS"/> ha maggiori informazioni.

È anche possibile eseguire il flashing del firmware ExpressLRS sull'hardware Frsky R9M se lo hai già. E ora puoi ripristinare il firmware Frsky sull'hardware R9, se ti serve.

Ad ogni modo, la cosa più comoda è acquistare semplicemente i ricevitori e il modulo trasmettitore realizzati per ELRS. Sono economici, progettati specificamente per ExpressLRS e già caricati con il firmware, quindi sono fondamentalmente plug and play. **Moduli e riceventi di diverse marche sono comunque compatibili tra di loro, a patto che sia flashata la stessa versione di ExpressLRS**

Il modulo trasmettitore è compatibile con quasi tutte le moderne radio con alloggiamento per moduli JR, come Radiomaster TX16S, Jumper T12, T16 e T18, Frsky Taranis ecc. Esiste anche una versione del modulo chiamata "Lite" compatibile con le radio più piccole come il Jumper T- Lite e Frsky X9-Lite.

Ecco i migliori moduli TX al momento sul mercato.

<div id="hardware-table">

|                                                                              | Nome                          | Qualità      | Prezzo      | Venditori                                                                                                                                                                                                                                   |
|------------------------------------------------------------------------------|-------------------------------|--------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![HappyModel TX 2.4GHz](/assets/expresslrs/happymodel_tx_2_4ghz.jpg)         | HappyModel Modulo TX 2.4GHz   | ⭐⭐         | 💰💰        | <AffiliateLink href="https://www.banggood.com/custlink/mKmrYoAsZN" label="Banggood" />                                                                                                                                                            |
| ![BetaFPV TX 2.4GHz](/assets/expresslrs/betafpv_tx_2_4ghz.jpg)               | BetaFPV Modulo TX 2.4Ghz      | ⭐           | 💰          | <AffiliateLink href="https://www.drone24hours.com/product/betafpv-modulo-micro-tx-elrs/?D24H=lucapalonca" label="Drone24Hours" /> <br/> <AffiliateLink href="https://www.rhobbyfpv.it/prodotto/betafpv-express-lrs-modulo-micro-1w-2-4ghz/?ref=iamlucafpv" label="RhobbyFPV" /> <br/> <AffiliateLink  href="https://www.banggood.com/custlink/G3GCyoNn8U"   label="Banggood" />          |
| ![Namimno TX 2.4Ghz](/assets/expresslrs/namimno_tx_2_4ghz.jpg)              | Namimno Modulo TX 2.4Ghz      | ⭐⭐         | 💰          | <AffiliateLink href="https://www.banggood.com/custlink/vDGpyLAboE" label="Banggood" />         |

</div>



