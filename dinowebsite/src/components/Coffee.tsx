import { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";

const Coffee = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        async function getCoffeeAmount() {
            let response = await fetch("https://tm-coffeecounter.jonasclaesbe.workers.dev/api/coffee-count")
            let data = await response.json()
            console.log(typeof (data.amountOfCoffees))
            setData(data)
        }
        getCoffeeAmount()
    }, []);
    return (
        <div className='w-1/2 md:w-3/5 lg:w-3/6 xl:w-2/6 ml-20 lg:ml-60'>
            <h1 className="font-heading text-3xl sm:text-4xl pt-52 pb-5 text-dinoblack">
                DI coffee counter:
            </h1>
            <p className='font-heading text-3xl text-dinoblack' id='Totalcoffee'><Icon icon="bx:coffee" />  {data.amountOfCoffees}</p>
        </div>
    );
}

export default Coffee;