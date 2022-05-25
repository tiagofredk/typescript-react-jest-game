import React from 'react'

type IContext = {
    players: {playerName: string, score: number}[],
    setPlayers: (players: {playerName: string, score: number}[]) => void,
}

export const Context = React.createContext({} as IContext);

type IChildren = {
    children: React.ReactNode;
}

export default function ContextProvider({ children }: IChildren) {

    const [players, setPlayers] = React.useState<{playerName: string, score: number}[]>([]);
    // const [players, setPlayers] = React.useState<IState[]>([]);

    return (
        <Context.Provider value={{ players, setPlayers }}>
            {children}
        </Context.Provider>
    )
}