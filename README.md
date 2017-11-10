# Inversify POC

## Goal:
The goal of this POC is to demonstrate the feasability (or lack thereof?)
of using an IOC pattern to inject a remote (server-side) store into a local
store. In this POC, we are using [Inversify](http://inversify.io/) as the
mode of injection and [Redux](https://redux.js.org/) as the store.

Ideally, this POC should demonstrate that remote stores can be injected
into local stores without regard for whichever framework is being used to
serve the client app, so long as the stores can be injected and merged.

## Get started:
1. [Clone this repo](https://github.com/IMAHiji/inversify-poc.git)
2. _npm install_
3. start the server using `node-ts server.ts`

## What's inside:

1. [Express Server](https://expressjs.com/)
2. [Inversify](http://inversify.io/)
3. [Inversify Express Utilities](https://github.com/inversify/inversify-express-utils)
4. [Redux](https://redux.js.org/)


### Desired Structure:
 * Store is created on the server
 * Reducers are on each app
 * Actions are async and trigger state changes in the store located on the server.

### What's inside:

The `server.ts` file initializes and creates some dummy container bindings
that can be accessed and tested using your browser's route, eg: visiting
_:3030/user_ will trigger the `getUser()` method, returning `userStorage`
defined in the `/service/service-user` service.

### What currently sucks (rather, what is left):
1. The redux store is generated, but more research is needed on how to generate
the correct interfaces that can be used to define said store in an injectable controller
2. Need to decide from where actions will be dispatched, how to ensure parity of state between
applications that are requesting the common store
3. Will the common store be mutable by client applications?
4. Will the entire store be injected into each client application, with slices of the store being skimmed with
reducers in the client apps?
