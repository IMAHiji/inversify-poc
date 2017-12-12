# Inversify POC

## Primary Goals:

1. Create control containers using inversify to hold stores
2. Create stores using redux
3. Make stores available to client applications regardless of framework
(no angular/react/whatever allowed!)

The goal of this POC is to demonstrate the potential of using an IOC pattern
to inject a remote (server-side) store into a local
store. In this POC, we are using [Inversify](http://inversify.io/) as the
mode of injection and [Redux](https://redux.js.org/) as the store.

Ideally, this POC should demonstrate that remote stores can be injected
into local stores without regard for whichever framework is being used to
serve the client app, so long as the stores can be injected and merged.

## Get started:
1. [Clone this repo](https://github.com/IMAHiji/inversify-poc.git)
2. _npm install_
3. start the server using `npm run dev`

## What's inside:

1. [Inversify](http://inversify.io/)
2. [Redux](https://redux.js.org/)
3. [Redux-Actions](https://redux-actions.js.org/)



### Desired Structure:
 * Store is created on the server and injected to whatever requests the IOC container that holds the store
 * Ability to combine a local store with the injected remote store
 * Actions are async and trigger state changes in the store located on the server. ( _maybe no?_ )

### What's inside:
* `/src/constant`: Tags and Types, the former of which is not currently used in this simple implementation.  The
latter (Types) are used to generate unique Symbols for each container ("Symbol('blahblah') 對啊.
* `/src/entities`: Is the class that's used to describe the shape of the inversify container
* `/src/interfaces`: It contains .... interfaces!
* `/src/inversify`: holds the `ioc_config` that binds the inversion control entity to a
controllable container.
* `/src/store`:  All the redux stuff.

### What's Left:
1. Implement usage of redux observables