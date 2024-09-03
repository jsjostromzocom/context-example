import {useState} from 'react'
import {TextContext} from "./context/TextContext.tsx";
import {MyTextComponent} from "./components/MyTextComponent.tsx";
import './App.css'

function App() {
    const [text, setText] = useState('hello world')

    return (
        <>
            <TextContext.Provider value={{text, setText}}>
                <h2>Root app</h2>
                <p>{text}</p>
                <MyTextComponent/>
            </TextContext.Provider>

        </>
    )
}

export default App
