import {useContext, useEffect} from "react";
import {TextContext} from "../context/TextContext.tsx";

export const MyOtherTextComponent = () => {
    const {text, setText} = useContext(TextContext)

    useEffect(() => {
        setTimeout(() => {
            setText('nu har det gått 5 sekunder')
        }, 5000)
    }, []);

    return (
        <>
            <h2>my other text component</h2>
            <p>{text}</p>
        </>
    )
}