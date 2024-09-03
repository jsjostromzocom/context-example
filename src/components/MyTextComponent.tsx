import {useContext} from "react";
import {TextContext} from "../context/TextContext.tsx";
import {MyOtherTextComponent} from "./MyOtherTextComponent.tsx";

export const MyTextComponent = () => {
    const {text, setText} = useContext(TextContext)

    return (
        <>
            <h2>my text component</h2>
            <p>{text}</p>
            <MyOtherTextComponent/>
        </>
    )
}