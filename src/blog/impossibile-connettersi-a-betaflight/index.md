---
title: "Impossibile aprire la porta seriale in Betaflight: Ecco la soluzione"
date: "2020-09-30T00:00:00.000Z"
excerpt: In questo articolo andremo a risolvere il problema di connessione a Betaflight più comune. Se non riesci a connetterti a Betaflight perché esce il messaggio di errore "Impossibile aprire la porta seriale", questo articolo fa per te.
categories:
    - Tutorial
tags: 
    - Betaflight
featured: false
---

import AffiliateLink from "../../components/blog/affiliate-link.js"

Abbastanza spesso, una volta collegato il flight controller a Betaflight, il configuratore visualizza il seguente messaggio di errore:
> Impossibile aprire la porta seriale

## Motivo del problema
In realtà, il flight controller comunica con il computer tramite la porta USB ma non è l'interfaccia USB diretta.
Infatti, il software deve pensare che sia in realtà una vecchia porta COM seriale. Questo è solo il modo in cui è possibile leggere e scrivere i chip sul controller di volo.

## Soluzione
Questo problema può essere risolto con facilità. Devi semplicemente scaricare i driver della porta COM virtuale da <AffiliateLink href="https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers" label="SiLabs"/> che sono disponibili per Windows, Linux e Mac.

Non sono necessari più di un paio di minuti per installare i driver e, se richiesto dal computer, è sufficiente riavviare il computer. Ricorda, prima di riprovare scollega il flight controller dall'USB.

Chiudi il configuratore, riaprilo, collega la scheda e fai clic su Connetti. Tutto dovrebbe funzionare bene ora.

Per assicurarti che il controller di volo funzioni correttamente, dai un'occhiata al menu a tendina in alto a destra dello schermo e controllara a quale dispositivo Betaflight sta cercando di connettersi.

![Dispositivi visti da Betaflight](/assets/impossibile-connettersi-a-betaflight/bf_dispositivi.png)

Qua dipende da quale sistema operativo stai usando. Se usi Windows il disposivo verrà riconosciuto e comunicherà attraverso una porta COM, mentre su Mac e Linux sarà simile all'imagine sotto.

![Connessione a Betaflight](/assets/impossibile-connettersi-a-betaflight/bf_connessione.png)


## Altre soluzioni
- **Prova un altro cavo**: a volte un cavo USB vecchio può causare alcuni problemi di connettività tra la scheda e il configuratore. Il problema può essere risolto utilizzando un cavo completamente nuovo o diverso.
- **Prova un'altra porta USB**: potresti anche provare una nuova porta USB poiché in alcune occasioni la porta USB potrebbe dare problemi.
- **Riavviare il computer**: prova anche riavviare il sistema per vedere se risolve il problema di connettività.

Infine, ho scritto una [guida PDF in italiano](https://lucafpv.com/problemi-comuni-droni-fpv/) nella quale raccolgo tutti i problemi comuni e le loro soluzioni, se la scarichi ti può sempre tornare utile.