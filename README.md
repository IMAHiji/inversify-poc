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