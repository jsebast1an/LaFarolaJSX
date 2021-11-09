export const productos = [{id:1, stock: 5, nombre: "Adidas Forum Low", precio:25000, year:2021, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/16eaddcfedcb4b6cb8f0ac9300d39534_9366/Zapatillas_Forum_Plus_Blanco_FY5223_04_standard.jpg"},
                        {id:2, stock: 5, nombre: "BMW CX Negro", precio:25000, year:2020, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5283254bb21d42448677ac5e003b6670_9366/Zapatillas_Forum_Mid_Blanco_FY4976_04_standard.jpg"},
                        {id:3, stock: 5, nombre: "BMW CX Negro", precio:35000, year:2020, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/73bf69add89345409287acf000d3e3b0_9366/Zapatillas_Forum_Bold_HER_Studio_London_Blanco_H00472_04_standard.jpg"},
                        {id:4, stock: 5, nombre: "BMW CX Negro", precio:55000, year:2020, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e40ece488fa54126af50ac8d00ee4c01_9366/Maleta_Deportiva_Essentials_3_Tiras_Mediana_Negro_GN2046_04_standard.jpg"},
                        {id:5, stock: 5, nombre: "BMW CX Negro", precio:65000, year:2020, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8ef5553a84354f36a819ac9600d1e661_9366/Maleta_Deportiva_adidas_4ATHLTS_Pequena_Rosa_GU0973_04_standard.jpg"},
                        {id:6, stock: 5, nombre: "BMW CX Negro", precio:55000, year:2019, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/Zapatillas_Superstar_Blanco_EG4958_04_standard.jpg"},
                        {id:7, stock: 5, nombre: "BMW CX Negro", precio:27000, year:2020, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4bc064f2ff6c4d848308aad801165d86_9366/Zapatillas_Superstar_Negro_EG4957_04_standard.jpg"},
                        {id:8, stock: 5, nombre: "BMW CX Negro", precio:35000, year:2021, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9447f0c6eac344d78dd5ac7700f4a48d_9366/Zapatillas_Superstar_Negro_FX5538_04_standard.jpg"}]


export const getItems = new Promise ((res, rej) => {
    
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