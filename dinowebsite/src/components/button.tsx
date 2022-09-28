import type { NextPage } from "next";

// Dinoblack
// Dinowhite
// Dinocream
// Dinogreen
// Dinobiege
// Dinobrown
// component with a button that has a dinoblack color 
const ButtonDinoblack: NextPage = () => {
    return (
        <button className="bg-dinoblack text-dinowhite font-bold py-2 px-4 rounded"></button>
    )
}

const ButtonDinowhite: NextPage = () => {
    return (
        <button className="bg-dinowhite text-dinoblack font-bold py-2 px-4 rounded"></button>
    )
}

const ButtonDinocream: NextPage = () => {
    return (
        <button className="bg-dinocream text-dinoblack font-bold py-2 px-4 rounded"></button>
    )
}

const ButtonDinogreen: NextPage = () => {
    return (
        <button className="bg-dinogreen text-dinoblack font-bold py-2 px-4 rounded"></button>
    )
}

const ButtonDinobiege: NextPage = () => {
    return (
        <button className="bg-dinobiege text-dinoblack font-bold py-2 px-4 rounded"></button>
    )
}

const ButtonDinobrown: NextPage = () => {
    return (
        <button className="bg-dinobrown text-dinowhite font-bold py-2 px-4 rounded"></button>
    )
}

export { ButtonDinoblack, ButtonDinowhite, ButtonDinocream, ButtonDinogreen, ButtonDinobiege, ButtonDinobrown }