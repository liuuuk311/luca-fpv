---
title: Ecco come caricare le batterie LiPo
date: "2021-08-30T00:00:00.000Z"
excerpt: Caricare le batterie LiPo può essere difficile e pericoloso, ecco come caricarle in tutta sicurezza passo per passo.
categories:
    - Tutorial
tags: 
    - Principianti
featured: false
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

        #voltage-table td:nth-of-type(2):before { content: "1S"; }
        #voltage-table td:nth-of-type(3):before { content: "2S"; }
        #voltage-table td:nth-of-type(4):before { content: "3S"; }
        #voltage-table td:nth-of-type(5):before { content: "4S"; }
        #voltage-table td:nth-of-type(6):before { content: "5S"; }
        #voltage-table td:nth-of-type(7):before { content: "6S"; }
    }
`}</style>

import YouTubeEmbed from "../../components/blog/youtube-embed.js"
import AffiliateLink from "../../components/blog/affiliate-link.js"

In questo aritcolo vedremo tutto ciò che c'è da sapere per caricare batterie LiPo (Lithium-Polymer) in maniera sicura.

## Voltaggio e numero di celle

Il voltaggio viene misurato in volt (V) ed indica il potenziale elettrico ai capi della batteria. Le batterie LiPo hanno una tensione nominale di 3,7 V.

Per aumentare la tensione, e quindi la forza elettromotrice, le batterie vengono messe in serie, andando quindi a sommare le diverse tensioni nominali. 
Il numero di celle collegato in serie viene indicato con la lettera S. Quindi una batteria 4S avrà 4 celle collegate in serie, e la sua tensione nominale sarà:  `3,7 V x 4 = 14,8 V`

## Stato di una cella

Una singola cella in una batteria LiPo è completamente carica quando la sua tensione è 4.2 V. Mentre sarà scarica a quando raggiunge 3,5 V. 

**E' importante non scaricare mai una cella sotto i 3,0 V, altrimenti la batteria si rovina permanentemente**. 

Infine, quando una batteria non viene usata per diversi giorni, è bene sempre portarla nello stato di storage, o stoccaggio. Questo è lo stato in cui ogni cella è a 3,8 V. 

Tenere una batteria scarica o carica per diversi giorni rischia seriamente di degradarne le performance nel tempo.

<div id="voltage-table">


|         | 1S    | 2S    | 3S     | 4S     | 5S     | 6S     |
|---------|-------|-------|--------|--------|--------|--------|
| Carica  | 4,2 V | 8,4 V | 12,6 V | 16,8 V | 21,0 V | 25,2 V |
| Storage | 3,8 V | 7,6 V | 11,4 V | 15,2 V | 19,0 V | 22,8 V |
| Scarica | 3,5 V | 7,0 V | 10,5 V | 14,0 V | 17,5 V | 21,0 V |

</div>

Per fortuna però, non dobbiamo ricordarci a memoria tutti questi numeri, la maggior parte dei carica batterie è in grado di ricavarlo automaticamente.

## Capacità della batteria

Si può pensare alla capacità della batteria come la dimensione del serbatoio della macchina.

La capacità della batteria si misura in mAh (milliampere-ora) ed indica quanta corrente puoi scaricare in un ora. In poche parole, maggiore è il numero di mAh è più tempo durerà la batteria.

La capacità standard per le batterie dei droni FPV si aggira attorno a 1300 mAh. Per i setup pensati per il long range questo valore può arrivare fino a 3000 mAh. Ma droni più grossi posso usare anche batterie da 10000 mAh.

Tipicamente non si scelgono batterie grosse poiché più capacità significa anche più peso e maggiori tempi di ricarica. 

## Velocità di carica

La velocità di ricarica consigliata per le batterie LiPo è 1C. Questo significa che se una se una batteria ha una capacità di 1300 mAh, per caricarla sarà necessario fornire 1,3 A. Questo caricherà la batteria in circa un'ora se completamente scarica. 

Alcuni produttori garantiscono velocità di ricariche più elevate fino a 5C. Tuttavia questo può essere pericoloso poiché può danneggiare la batteria e risultare in un incendio come questo.

<YouTubeEmbed link="https://youtu.be/fF9fhlr9S5s?t=31"/>

**Importante non confondere il C-Rating di scarica**, che spesso è indicato sull'etichetta della batteria, **con il C-Rating di carica**, che spesso non è indicato, proprio perché è sempre consigliato caricare ad 1C.

## Carica in parallelo

La ricarica in parallelo delle batterie LiPo è una tecnica tramite la quale è possibile caricare più LiPo contemporaneamente. Sfruttando la [legge di Kirchhoff](https://en.wikipedia.org/wiki/Kirchhoff%27s_circuit_laws), possiamo dedurre il comportamento di due batterie quando collegate in parallelo.

> Batterie con tensione uguale collegate in parallelo si comportano come una singola batteria, dove la capacità totale si ottiene sommando le capacità delle singole batterie.

Dunque potremo caricare due batterie 6S da 1100 mAh l'una in parallelo. Questo dal punto di vista del carica batterie sarà come ricaricare una singola batteria 6S da 2200 mAh. E la potremo caricare ad 1C fornendo 2,2 A.

Il problema con la ricarica parallela è che, collegando le batterie in parallelo, come abbiamo già detto, si raddoppia la capacità mantenendo, e questo è importante, *la tensione di una delle singole batterie*. 

Ciò significa che il caricabatterie, che normalmente controlla la batteria durante la carica per evitare il sovraccarico, non può vedere tutte le tensioni delle singole batterie, ma può vederne solo una.

Un altro problema con la ricarica parallela è la differenza delle batterie. Se le due batterie (e le celle in esse contenute) provenissero dallo stesso identico lotto di produzione, avessero la stessa identica composizione chimica, età e storia di carica e tutto il resto - in altre parole, se fossero completamente identiche - la ricarica parallela andrebbe bene. Ma non è mai possibile replicare queste condizioni. 

Anche se molti caricano le proprie batterie in parallelo con successo, molti esperti lo sconsigliano. Personalmente evito la ricarica in parallelo, preferisco evitare incendi in casa.

## Carica batterie per LiPo

Esistono diversi carica batterie per LiPo sul mercato. Di sicuro il più famoso è l'economico IMAX B6. La qualità di questo prodotto è veramente bassa e l'interfaccia non molto intuitiva. Tuttavia nella confezione ci sono diversi accessori, tra cui il fondamentale alimentatore. 

![Caricabatterie IMAX B6](/assets/caricare-batterie-lipo/imax-b6.jpeg)

Questo carica batterie può caricare batterie fino a 4S. 

> Acquista l'IMAX B6 su <AffiliateLink href="https://amzn.to/3BnLxnF" label="Amazon"/> | <AffiliateLink href="https://www.drone24hours.com/prodotto/caricabatteria-per-bilanciamento-della-batteria-lipo-imax-b6-80w-6a-con-adattatore-di-alimentazione/?D24H=lucapalonca" label="Drone24Hours"/> | <AffiliateLink href="https://www.banggood.com/custlink/3G3YeFgj2T" label="Banggood"/> 

Il mio carica batterie preferito è senza dubbio è l'ISDT Q6 Nano. Ne ho 4 di questi caricatori. Sono affidabili intuitivi e compatti, ma soprattutto economici. L'unico svantaggio rispetto all'IMAX B6 è che l'alimentatore viene venduto a parte oppure in kit. 

L'ISDT Q6 Nano può caricare batterie fino a 6S.

![Caricabatterie ISDT Q6 Nano](/assets/caricare-batterie-lipo/isdt.jpg)

Tuttavia acquistando l'alimentatore che consiglio, si riesce a creare un setup in cui un solo power supply alimenta 3 o 4 carica batterie, dando la possibilità di caricare fino a 4 batterie contemporanemente individualmente in maniera sicura, evitando così i rischi della ricarica in parallelo. 

Trovi il mio setup di ricarica nelle storie in evidenza sul mio [profilo Instagram](https://instagram.com/iamlucafpv). 

> Acquista l'<AffiliateLink href="https://www.banggood.com/custlink/DmmEetBofD" label="ISDT Q6 Nano"/> + <AffiliateLink href="https://www.banggood.com/custlink/vmDdetgauF" label="Alimentatore"/> oppure <br/> Kit carica batterie + Alimentatore su <AffiliateLink href="https://www.banggood.com/custlink/DDGYgH063g" label="Banggood"/>

## Quanto posso tenere una LiPo carica?

Una batteria LiPo può stare carica 2 o 3 giorni. Lasciarla più tempo carica rischia di rovinarla e accorciarne drasticamente la sua vita. Se sai di non usare una LiPo per più di 3 giorni, mettila in storage (3.8 V per cella). La maggior parte dei carica batterie ha programmi di carica/scarica dedicati per portare una LiPo a voltaggio di storage.

## Il carica batterie non legge una cella

A volte capita che se una cella è danneggiata o scaricata sotto i 3,0 V, il carica batteria non riesca a rilevare il voltaggio. Dunque una batteria 6S apparirà come una 5S nell'interfaccia del carica batterie.

**In queste situazioni va presta molta attenzione**. Caricare male una batteria in queste condizioni può risultare in un incendio. La cosa più sicura da fare è disporre in maniera sicura la batteria. 