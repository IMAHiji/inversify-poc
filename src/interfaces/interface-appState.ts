export type UIMessageType = 'info' | 'success' | 'error'


export type UIMessage = {
    id:number,
    text:string,
    type:UIMessageType
}

export type MessagingState = {
    lastMessage:number,
    messages:UIMessage[]
}

export type AppState = {
    messaging:MessagingState
};

