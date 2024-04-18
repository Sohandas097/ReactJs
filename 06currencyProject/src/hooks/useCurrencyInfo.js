import {useEffect,useState} from "react"

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://web.archive.org/web/20240120011954/https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;