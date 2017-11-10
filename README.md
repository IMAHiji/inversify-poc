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


https://github.com/jaysoo/todomvc-redux-react-typescript/blob/master/client/todos/model.ts
http://blog.ng-book.com/introduction-to-redux-with-typescript-and-angular-2/
https://github.com/ng-book/angular2-redux-chat/tree/master/redux-counter/src/app

### Desired Structure:
 * Store is created on the server
 * Reducers are on each app
 * Actions are async and trigger state changes in the store located on the server.



