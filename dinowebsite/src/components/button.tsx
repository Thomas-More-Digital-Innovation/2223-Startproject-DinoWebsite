import type { NextPage } from "next";

// variable with type NextPage with a color input
const Button: NextPage<{ color: string }> = ({ color }) => {
    console.log(color);
    return (
        <button className={`bg-${color} hover:bg-${color} text-${color} font-bold py-2 px-4 rounded`}>eee</button>
    );
};

export default Button;