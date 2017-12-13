

//Overall App State Shape
export type AppState = {
    messaging?:MessagingState,
    count?:CountState
};

//Messaging State Shape
export type MessagingState = {
    lastMessage:number,
    messages:Message[]
}

//Individual Message type
export type Message = {
    id:number,
    text:string,
    type:MessageType
}
//Message Types
export type MessageType = 'info' | 'success' | 'error'


export type CountState = {
    currentCount:number
}

