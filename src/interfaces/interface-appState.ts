

//Overall App State Shape
export type AppState = {
    messaging?:MessagingState,
    count?:CountState
};

//Messaging State Shape
export type MessagingState = {
    lastMessage:number,
    messages:UIMessage[]
}

//Individual Message type
export type UIMessage = {
    id:number,
    text:string,
    type:UIMessageType
}
//Message Types
export type UIMessageType = 'info' | 'success' | 'error'


export type CountState = {
    currentCount:number
}

