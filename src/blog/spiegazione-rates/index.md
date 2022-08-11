---
title: Cosa sono RC Rate, RC Expo e Super Rate di Betaflight?
date: "2020-09-05T00:00:00.000Z"
excerpt: Ecco cosa sono RC Rate, RC Expo e Super Rate di Betaflight e come questi parametri influenzano le performance di un drone.
categories:
    - Principianti
tags: 
    - Rates
featured: false
---

Queste funzionalità sono nella sezione di PID tuning di Betaflight, se sei interessato a come tunare il tuo drone, dai un'occhiata a questo [articolo](https://lucafpv.com/).

## In breve

Questo ariticolo spiega i rates di Betaflight classici. La combinazione di  RC Rate e Super Rate determina quanto veloce il drone può girare (Massima Velocità Angolare), e viene misurata in gradi al secondo. Expo cambia la sensibilità al centro degli stick. Cambiando il Super Rate cambia la velocità massima angolare, ma anche la sensibilità al centro dello stick, viene modificata. 

Non sono stato chiarissimo? Ora provo a spiegarlo più nel dettaglio.



## RC Rate

RC Rate modifica la sensibilità dei tuoi stick. Un valore alto, fa sì che il tuo quad ruoti molto senza dover spostare tanto lo stick.

Un rate alto renderà il quad molto più reattivo, ma al tempo stesso, sarà più difficile da controllare in quanto un piccolo movimento dagli stick del radiocomando, produrra un grande movimento del drone.

Aumentare l'RC Rate può far girare il quad più veloce, infatti se inserisci un valore più grande potrai veder aumentare i tuoi gradi/secondo nel grafico. Questo ti permette di fare flip e roll più veloci, ma tipicamente per controllare quanto veloci devo essere i trick, si usa il Super Rate. 

## RC Expo

RC Expo controlla l'aspetto esponenziale della curva. In pratica aumenta la precisione vicino al centro mantenendo la velocità di rotazione massima alla fine dello stick.

Il valore di Expo è un valore percentuale. A 0% la velocità di rotazione tra le estremità dello stick risulta lineare. Lo si può pensare come ad una V dove il centro rappresenta lo stick in posizione centrale. Spostando lo stick al 50%, il quad routerà alla metà della massima velocità di rotazione. Aumentando l'Expo, la precisione nel centro aumenta, e quindi per ottenere una rotazione pari alla metá della massima velocità di rotazione, sarà necessario spostare lo stick più del 50%. In questo caso quindi la forma è più simile ad una U.

## Super Rate

Il parametro Super Rate cambia sia il comportamento all'estremità che al centro dello stick, e quindi combina gli effetti di RC Rate e RC Expo.

Aumentando il Super Rate, ottieni una precisione moderata nel centro dello stick per poter volare con precisione, e allo stesso tempo un alta velocità di rotazione per fare filp e roll spostando lo stick tutto a lato. 

Questo parmetro va sempre aggiustato insieme ai due sopra per ottenere il giusto stick feel.

## Quali RC Rate, Expo and Super Rate usare?

Questo è una scelta personale, e dipende molto dallo stile con il quale vuoi volare. Per freestyle io tendo ad usare questi:

![I miei rates (lucafpv)](/assets/spiegazione-rates/lucafpv_rates.png)

Ecco cosa puoi fare per trovare i tuoi rate. 

Comincia sempre con l'**RC Rate**. Inizia a volare in giro senza fare flip e roll, assicurati che il quadricottero risponda abbastanza velocemente quando fai delle curve.

Quindi aumenta o diminuisci il **Super Rate** finchè non trovi la giusta velocità massima di rotazione facendo dei flip e dei roll. Poi anche dare un'occhiata all'interfaccia grafica di Betaflight per vedere quanti gradi al secondo scegli. Di solito io utilizzo circa 800 gradi/secondo. Ricorda che il Super Rate modifica anche la precisione al centro dello stick, quindi potresti dover aggiustare nuovamente l'RC Rate.

Ora potrai volare in modo precsio muovendo poco gli stick. Quindi puoi aggiustare l'**RC Expo** finchè non trovi il giusto equilibrio tra precisione e velocità. 

Probabilmente dovrai fare diversi aggiustamenti prima di trovare i parametri adatti per te. Ad ogni modo, se sei interessato puoi anche provare i rate di piloti famosi, spesso le loro configurazioni sono pubbliche. Trova un pilota con uno stile simile al tuo e prova i suoi rate come punto di partenza.

Non c'è un valore giusto o sbagliato per questi parametri, l'importante è tu sia a tuo agio. 

## Consistenza

Cerca di avere i rate che siano consistenti su tutti i tuoi droni. Questo è importante perché aiuta a sviluppare una sorta di memoria muscolare, soprattuto sugli assi dello yaw e del roll.

Se hai rate diversi sui tuoi quad, ci impiegherai più tempo ad abituarti. Quindi avere rate che siano consistenti su tutte le tue build è molto utile. 

## Throttle Mid e Expo

Infine, vicino a RC Rate e Expo, è possibile anche configurare i parametri di Throttle Mid e Throttle Expo.

**Throttle Expo** cambia la forma della curva dello stick del gas. In particolare, appiattisce la curva attorno al centro e permette di avere una risposta più morbida e una maggior precisione vicino a questo livello di gas.

**Throttle Mid** cambia il punto della curva nel quale vuoi applicare il Throttle Expo. Di defaul è al 50% del gas (0.50), ma secondo me è meglio impostarlo al tuo livello abituale di volo normale, infatti è in quel punto che avrai bisogno di maggior precisione per controllare l'altitudine. 

Throttle Mid non farà nulla se imposti il Throttle Expo a 0, perché la curva del gas sarà una retta indipendentemente da dove il punto di  throttle mid sia. 

Personlmente scelgo di usare circa il 10% di **throttle expo** per avere una miglior precisione e un throttle più morbito, soprattuto se volo vicino ad oggetti.

## TPA e TPA Breakpoint

TPA diminuisce i valori PID di una certa percetunale in proporzione al valore del gas. Questo aiuta a ridurre le vibrazioni create dal forti accelerate. 

TPA breakpoint definisce da che valore del throttle i valori PID devono cominciare ad abbassarsi. Normalmente dovresti impostarlo poco sotto al valore del throttole dopo il quale inizi ad osservare vibrazioni.