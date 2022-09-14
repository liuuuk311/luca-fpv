---
title: "Come costruire un drone FPV economico nel 2022"
date: "2022-09-13T00:00:00.000Z"
excerpt: "Se non hanno mai costruito un drone FPV prima, questa guida è per te. Ecco come costuire un drone FPV senza spendere troppo"
categories:
    - Principianti
    - Guide Acquisto 
tags: 
    - Build Completa
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
Questa guida è stata pensata per le persone che non hanno mai costruito un drone FPV prima. Ho scelto i componenti di questa build solo guardando il loro prezzo, di modo da tenerlo il più basso possible. 

Il risultato è questo drone che può arrivare fino ad 1km di distanza e capace di raggiungere circa 150 km/h.

![Drone Completo](/assets/costruire-un-drone-fpv-economico/drone_completo.jpg)

Prima di vedere come costruirlo ti ricordo che se vuoi puoi sostenermi gratuitamente acquistando i pezzi di questa build utilizzando i link in questo articolo. Sono link affiliati, il che vuol dire che il negozio mi corrisponderà una piccola commissione senza nessun costo aggiuntivo per te. In alternativa <OutsideLink label="puoi anche offrirmi una birra" href="https://www.buymeacoffee.com/iamlucafpv" /> se vuoi. 


## Le basi 
Lo scopo di questo articolo è spiegare quali sono gli step necessari per costruire e configurare un drone FPV da zero. 

Se sei completamente nuovo al mondo FPV, prima di iniziare assicurati di aver dato una lettura veloce a questo articolo: [FPV per principianti](https://lucafpv.com/fpv-per-principianti)

Se durante la lettura dell'articolo trovi degli acronimi di cui non consoci il significato, fai riferimento a [questo articolo](https://lucafpv.com/bibbia-fpv).

Il tempo stimato per la build completa è di 2 ore, sei pronto? Bene, cominciamo!

## Occorrente

Questa build verrà fatta con i componenti specificati nella prima colonna della tabella. Tuttavia, suggerisco anche delle alternative per ogni componente, in caso alcuni pezzi non fossero disponibili. 


<div id="components-table"> 


|                 | Per questa build                                                 | Alternativa                      |
|-----------------|------------------------------------------------------------------|--------------------------------------------|
| **Telaio**      | <AffiliateLink href="https://www.banggood.com/custlink/GKDrCdNEBd" label="Clone Apex"/>  | <AffiliateLink href="https://www.drone24hours.com/prodotto/tbs-source-one-hd-5inch/?D24H=lucapalonca" label="TBS Source One v5"/> |
| **Stack**       | Stack MAMBA MK2 <br/> <AffiliateLink href="https://www.banggood.com/custlink/Km3cWhsE6r" label="Banggood"/> - <AffiliateLink href="https://www.drone-fpv-racer.com/en/diatone-mamba-f405-mk2-f50-4-6s-stack-6722.html?aff=75" label="DFR"/>| Nessuna alternativa |
| **Motori**      | T-Motor Velox V2 <br/> <AffiliateLink href="https://www.banggood.com/custlink/GvvR0iZcOF" label="Banggood"/> - <AffiliateLink href="https://www.drone24hours.com/prodotto/t-motor-v2306-v2-kv1950/?D24H=lucapalonca" label="D24H"/>   | Emax Eco II <br/> <AffiliateLink href="https://www.banggood.com/custlink/DGGdgZ9WOo" label="Banggood"/> - <AffiliateLink href="https://www.drone24hours.com/prodotto/emax-eco-ii-series-2207-1700kv-1900kv-2400kv/?D24H=lucapalonca" label="D24H"/> - <AffiliateLink label="DFR" href="https://www.drone-fpv-racer.com/en/emax-eco-ii-series-2207-1700kv-brushless-motor-6908.html?aff=75"/>|
| **Sistema FPV** | <AffiliateLink href="https://www.banggood.com/custlink/G3KcrynY46" label="Eachine TX805S"/> + <AffiliateLink href="https://www.banggood.com/custlink/DvmpGpPPsW" label="Foxeer Razor Mini"/> + <AffiliateLink href="https://www.drone-fpv-racer.com/en/cp5-rp-sma-120mm-antenna-rhcp-by-truerc-9670.html?aff=75" label="Antenna" />     | <AffiliateLink href="https://www.banggood.com/custlink/DKmpcRAy6n" label="Eachine TX805"/> + <AffiliateLink href="https://www.banggood.com/custlink/DvmpGpPPsW" label="Foxeer Razor Mini"/> + <AffiliateLink href="https://www.drone-fpv-racer.com/en/cp5-rp-sma-120mm-antenna-rhcp-by-truerc-9670.html?aff=75" label="Antenna"/> |
| **Ricevente**   | <AffiliateLink href="https://www.banggood.com/custlink/D33CKrHHAS" label="Frsky XM+"/> | <AffiliateLink href="https://www.banggood.com/custlink/vDGpyLAboE" label="Ricevente ELRS"/> |
| **Eliche**      | <AffiliateLink href="https://www.drone-fpv-racer.com/en/hqprop-ethix-s3-5x31x3-pc-2x-cw-2xccw-4060.html?aff=75" label="Ethix S3"/> | Qualsiasi elica 5"                         |
| **Totale**      | **Circa 220 euro**                                                       | **Circa 240 euro**                               |


</div>

Per abbassare il costo della build ho scelto di costruire un drone analogico. Se sei interessato a come costruire un drone digitale col sistema DJI FPV, [questa altra guida fa per te](https://lucafpv.com/come-costruire-un-drone-fpv).

Sarà comunque una build pensata per le 6S, e quindi sarà bella potente. 


<Support />

## Telaio
Come telaio ho scelto il <AffiliateLink href="https://www.banggood.com/custlink/GKDrCdNEBd" label="clone dell'Apex di Mr. Steele"/>, nella versione da 5". Perfetta per chi inizia, con sufficiente spazio per installare tutto il necessario.

La scelta di questo telaio è per dure ragioni, il prezzo (mi è costato meno di 30 euro) e per il fatto che sia molto carino. Guardando il telaio è chiaro che è esattamente uguale al design del telaio originale. Nella confezione sono presenti anche parti stampate in 3D di buona qualità, ma non sono presenti le istruzioni.

Sia chiaro, da questo telaio non ci si può aspettare una qualità alla pari del frame orginale. Però penso che sia un buon compromesso per chi non vuole spendere più di 100 euro su un frame.

Le istruzioni di montaggio sono semplici e chiare. Una valida alternativa dal prezzo simile è il <AffiliateLink label="TBS Source One V5" href="https://www.drone-fpv-racer.com/en/tbs-source-one-5-frame-v5-9847.html?aff=75" />.

![Il Telaio](/assets/costruire-un-drone-fpv-economico/pezzi_del_frame_dall'alto.jpg)

## Stack: FC e ESC
Il vantaggio di uno stack è che Flight Controller ed ESC sono pensati per funzionare insieme, quindi questo tipo di setup richiede poche saldature rispetto ad altre configurazioni.

Ho selezionato l'<AffiliateLink label="F405 MK2 di Mamba" href="https://www.banggood.com/custlink/Km3cWhsE6r"/> perché è una scelta economica con le funzionalità standard. Va spesso in offerta e si riesce ad aquistare spesso sotto i 100 euro. Se non vuoi aspettare i lunghi tempi di spedizione di Banggond ti consiglio di acquistarlo su <AffiliateLink href="https://www.drone-fpv-racer.com/en/diatone-mamba-f405-mk2-f50-4-6s-stack-6722.html?aff=75" label="Drone FPV Racer" />.

![Stack](/assets/costruire-un-drone-fpv-economico/stack.jpg)

## Motori

La scelta dei motori per un drone FPV di 5" è relativamente semplice. I motori al giorno d'oggi si comportano in modo molto simile, la differenza principale di solito è la qualità costruttiva. Per una build come questa, le dimensioni del motore come 2306, 2207, 2208 sono tutte buone opzioni.

Bisogna prestare attenzione al numero di KV del motore. Normalmente i KV si scelgono sulla base del tipo di batteria che si andrà ad utilizzare. 

Nel caso di una batteria 4S, le scelte più comuni sono tra i 2300 KV e i 2600 KV. Per le batterie si tende ad usare motori tra i 1700 KV e i 1900 KV. 

Se non sai quale batteria scegliere, consiglio di partire direttamente con le 6S. Si ha più potenza, quindi risulta più facile evitare crash all'ultimo secondo. 

Per questa build ho scelto dei motori T-motor, che sono un'ottima marca, famosi per la loro qualità costruittiva. Tuttavia, dal momento che questa è la build economica, ho optato per i Velox V2, la linea economica di T-Motor. I T-Motor Velox V2 li puoi acquistare su <AffiliateLink href="https://www.banggood.com/custlink/GvvR0iZcOF" label="Banggood"/>, <AffiliateLink href="https://www.drone24hours.com/prodotto/t-motor-v2306-v2-kv1950/?D24H=lucapalonca" label="Drone24Hours"/> oppure su <AffiliateLink label="Drone FPV Racer" href="https://www.drone-fpv-racer.com/en/t-motor-velox-v2306-v2-1950kv-7115.html?aff=75" />. Un'altra alternativa economica sono gli <AffiliateLink label="Emax ECO II" href="https://www.drone-fpv-racer.com/en/emax-eco-ii-series-2207-1700kv-brushless-motor-6908.html?aff=75"/>.

## Sistema FPV
Per chi vuole costruire un drone FPV spendendo poco la scelta è facile, bisogna usare un sistema analogico. 

Chiaramente non non tutti i sistemi analogici costano uguali, per esempio un sistema di alto livello può benissimo superare i 100 euro e avvicinarsi ad un sistema digitale.

Per questa build economica, tra camera, VTX e antenna ho speso circa 60 euro.

![Sistema FPV digitale](/assets/costruire-un-drone-fpv-economico/sistema_fpv.jpg)

## Ricevente

Se hai già un radiocomando, assicurati di scegliere una ricevente compatibile col tuo radiocomando.

Al momento la scelta più economica per una ricevente è sicuramente la <AffiliateLink href="https://www.banggood.com/custlink/D33CKrHHAS" label="Frsky XM+"/>, questa ricevente ha poche funzionalità e la distanza massima a cui riesce a ricevere segnali non è il massimo. 

Una alternativa potrebbe essere anche utilizzare [Express LRS](https://lucafpv.com/expresslrs), sempre che il tuo radiocomando supporti questo protocollo (oppure che tu abbia comprato il modulo trasmittente).

## Altro occorrente

Per poi poter pilotare il drone che costruirai avrai bisogno del classico equipaggiamento di un pilota FPV. 

- **Un radiocomando**, quello che consiglio al momento è il RadioMaster TX16S con possibilmente il modulo crossfire. Se vuoi dare un'occhiata anche alle possibili alternative, leggi [quali sono i migliori radiocomandi](https://lucafpv.com/migliori-radiocomandi-per-droni-fpv).
- **Degli occhiali FPV** per chi vuole spendere meno, le migliori scelte analogiche in ordine di prezzo decrescente sono: <AffiliateLink href="https://www.banggood.com/custlink/GKDdt3FyqU" label="Fatshark HDO2"/>, <AffiliateLink href="https://www.banggood.com/custlink/3DDygLLa4t" label="Fatshark Attitude V6"/> e infine <AffiliateLink href="https://www.banggood.com/custlink/mKmhPmbuCO" label="Eachine EV800D"/>.
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

Vediamo tutti i passaggi per costruire un drone FPV economico.

### 1. Assemblare il frame

 In tutto ci sono tre plate, quello superiore è quello più lungo di tutti, poi c'è uno corto e uno che è una via di mezzo. Il primo passo, è inserire le viti nel plate più corto. Le viti da inserire sono 8 viti da 12mm (quelle più lunghe in confezione).

![Viti nel plate](/assets/costruire-un-drone-fpv-economico/viti_parte_1.jpg)

Una volta inserite le viti, giriamo il pezzo di carbonio con le viti dentro in modo da trovarci con le viti che spuntano fuori.

![Viti nel plate girate](/assets/costruire-un-drone-fpv-economico/viti_parte_2.jpg)

A questo punto, si passa al posizionamento dei braccetti sul frame. I braccetti vanno fatti fermare con le viti che abbiamo posizionato in precedenza.

![Frame con i braccetti](/assets/costruire-un-drone-fpv-economico/bracetti.jpg)

A questo punto, montiamo la seconda parte del bottom plate e la posizioniamo sopra i braccetti e facendo passare la punta delle viti nei buchi nel pezzo di carbonio. Infine utilizziamo i ferma vite in metallo. 

![Ferma viti](/assets/costruire-un-drone-fpv-economico/ferma_viti.jpg)

Ora possiamo aggiungere gli otto standoff. Nota che hanno due dimensioni diverse, quelli più corti vanno nella parte posteriore (ovvero la parte più rialzata).

![Standoff](/assets/costruire-un-drone-fpv-economico/standoff.jpg)

Per concludere ci manca da installare i due pezzi che utilizzeremo per fissare la camera FPV e il top plate. Per i pezzi che fissano la camera, stai attento a installarli correttamente altrimenti il frame non si chiude. Dovrai montare questi pezzi con una tacchetta verso l'alto e due verso il basso.

![Frame completo](/assets/costruire-un-drone-fpv-economico/frame_completo.jpg)

### 2. Installazione Motori 

Ora si procede col montare i motori sul frame. Per tenere le cose più ordinate, ho attorcigliato i cavi motori.

![Motore](/assets/costruire-un-drone-fpv-economico/motori.jpg)

In questo passaggio è importante fare attenzione le viti dei motori non siano troppo lunghe. Se dovessero toccare la bobina dei motori, si rischia di bruciare i motori.

### 3. Schema di cablaggio

![Schema di cablaggio](/assets/costruire-un-drone-fpv-economico/wiring.png)

### 4. ESC
Prima di montare l'ESC sul frame dobbiamo inserire le viti lunghe 30 mm all'interno del telaio. È importante in questo passaggio di controllare che le viti non tocchino il top plate, altrimenti il telaio non si potrà chiudere. 

Come trucchetto possiamo inserire un gommino insieme alla vite, in questo modo.

![Gommino e vite](/assets/costruire-un-drone-fpv-economico/gommini_vite.jpg)

A questo punto è necessario aggiungere dei gommini per distanziare l'ESC dalle viti del telaio. Possiamo usare i gommini che arrivano con lo stack, oppure dei gommini comuni.

![Gommini per distanziare l'ESC](/assets/costruire-un-drone-fpv-economico/gommini_2.jpg)

Alcune delle successive foto sono state fatte durante [un'altra build](https://lucafpv.com/come-costruire-un-drone-fpv), ma i passaggi sono gli stessi per questo motivo ho utilizzato queste foto.

Prima di saldare i cavi però, vanno tagliati della dimensione giusta. In questo passaggio è importante prendere bene le misure perchè se tagliamo i cavi troppo corti, non li protremo più usare.

![Prendere le dimensioni](/assets/come-costruire-un-drone-fpv/preparazione_taglio_cavi_motori.jpeg)
![Taglio dei motori](/assets/come-costruire-un-drone-fpv/taglio_dei_fili.jpeg)
![Lunghezza del filo spelato](/assets/come-costruire-un-drone-fpv/filo_spelato.jpeg)


Quindi dobbiamo pre-saldare ogni pad. Avremo 12 pad per i motori, 3 per ciascun motore e 2 pad per il cavo della batteria.

A questo punto, va saldato il condensatore e il cavo XT60. In questo passaggio, è molto importante controllare più volte il verso sia del codensatore, che del cavo della batteria. Per riconoscere il lato negativo del condensatore basta individuare la banda grigia con il segno meno.

![Condensatore e XT60](/assets/come-costruire-un-drone-fpv/xt60_saldato.jpeg)

Successivamente vanno saldati i cavi dei motori. 

![Motori saldati](/assets/come-costruire-un-drone-fpv/motori_saldati.jpeg)

<Support />

### 5. Sistema FPV 

L'installazione del sistema FPV, comprende quindi saldare la VTX e la camera al Fligth Controller. Per fare questo è sufficiente seguire i collegamenti indicati nello schema di cablaggio che abbiamo visto prima.

Come abbiamo visto nello schema, ci basta utilizzare 4 cavi, quindi i due evidenziati nella foto sotto sono inutilizzati. In realtà potremmo utilizzarli per alimentare direttamente la camera senza passare dal flight controller, ma questo complica un po' il tutto perché dovremmo utilizzare un connettore adatto.

![Cavi VTX](/assets/costruire-un-drone-fpv-economico/vtx.png)


### 6. Collegare FC

Sempre seguendo lo schema di cablaggio, sul flight controller quindi dobbiamo collegare la camera, la VTX e la ricevente. 

Partiamo con la camera. È molto semplice, basta infatti utilizzare il cavetto in dotazione con la camera e saldarlo sui pad corretti del flight controller. Per comodità prima prendo le misure per la lunghezza del cavetto, poi taglio i cavi per non averli troppo lunghi. Quindi stacco il cavetto dalla camera e inizio a saldare.

Poi possiamo procedere con la VTX. In modo simile, seguendo lo schema, saldiamo i 4 cavi sul flight controller.

> Consiglio per le saldature: Utilizza una punta del saldatore che sia della giusta dimensione e cerca di tenere solo poco tempo il saldatore sui pad del flight controller.

Allo stesso modo colleghiamo anche la ricevente. E il risultato finale dovrebbe essere simile a questo.


![Saldature finali](/assets/costruire-un-drone-fpv-economico/finale.jpg)

Alla fine poi, ho deciso di fissare la VTX con un pezzo di nastro biadesivo e delle fascette alla parte superiore del frame.


![Saldature finali](/assets/costruire-un-drone-fpv-economico/vtx_montata.jpg)

### 7. Configurazione Betaflight

Per la configurazione di Betaflight, ho già scritto un tutorial al riguardo e puoi fare riferimento a [questa guida](https://lucafpv.com/configurare-betaflight).

Per quanto riguarda la configurazione di SmartAudio per controllare la VTX (il cavo verde nello schema di cablaggio), ti consiglio di leggere [questo articolo](https://lucafpv.com/configurare-tbs-smartaudio/#:~:text=configurazione%20in%20betaflight)










