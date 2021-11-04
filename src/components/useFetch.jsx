export const productos = [{id:1, nombre: "BMW CX Negro", precio:25000, year:2021, img: "https://ibb.co/z8mh8Mc"},
                        {id:2, nombre: "BMW CX Negro", precio:25000, year:2020, img: "https://ibb.co/z8mh8Mc"},
                        {id:3, nombre: "BMW CX Negro", precio:35000, year:2020, img: "https://ibb.co/z8mh8Mc"},
                        {id:4, nombre: "BMW CX Negro", precio:55000, year:2020, img: "https://ibb.co/z8mh8Mc"},
                        {id:5, nombre: "BMW CX Negro", precio:65000, year:2020, img: "https://ibb.co/z8mh8Mc"},
                        {id:6, nombre: "BMW CX Negro", precio:55000, year:2019, img: "https://ibb.co/z8mh8Mc"},
                        {id:7, nombre: "BMW CX Negro", precio:27000, year:2020, img: "https://ibb.co/z8mh8Mc"},
                        {id:8, nombre: "BMW CX Negro", precio:35000, year:2021, img: "https://ibb.co/z8mh8Mc"}]


export const useFetch = new Promise ((res, rej) => {
    
    const condition = true
    
    if (condition) {
        setTimeout(() => {
            res(productos)
        }, 2000);
    } else {
        setTimeout(() => {
            rej("error")
        }, 2000); 
    }
})