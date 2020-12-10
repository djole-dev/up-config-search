import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

function Lorem() {
    const [countries, setCountries] = useState ([]);

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts?q=lorem")
        .then((res)=> {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    
    return (
       <div>
           Lorem
       </div>
    )
}

export default Lorem;
