const products = [
    {id: 1,title: "Super Mario",description: "Nace la saga por excelencia de los videojuegos. Un clásico inmortal, y el segundo juego más vendido de la historia de las consolas.",category: "Family Games",stock:"number",price: 100, pictureUrl:"https://ichef.bbci.co.uk/news/800/cpsprodpb/F98B/production/_99838836_mario976.jpg.webp"},
    {id: 2,title: "Contra",description: "Contra se desarrolla en el futuro lejano del año 2633 d.C., donde la malvada Organización Red Falcon ha establecido una base en el ficticio archipiélago de Galuga cerca de Nueva Zelanda en un complot para acabar con la humanidad",category: "Family Games",stock:"number",price: 100, pictureUrl:"https://www.latercera.com/resizer/ZVVMGYfpAqqSODm2LqI88uSZRKo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/BVXR4GRFXZBKTPR7VWUB7FDOG4.jpg"},
    {id: 3,title: "Sonic",description: "Sonic es un erizo azul de 15 años, 1 metro y 35 kilogramos que tiene la habilidad de correr a la velocidad del sonido, una característica que se muestra en la mayoría de sus juegos, siendo, además, su seña de identidad.",category: "Sega Games",stock:"number",price: 100, pictureUrl:"https://assets.reedpopcdn.com/digitalfoundry-2018-revisiting-sonic-cd-retro-1523175451779.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/digitalfoundry-2018-revisiting-sonic-cd-retro-1523175451779.jpg"},
    {id: 4,title: "Islander",description: "Apartado técnico más que vistoso y diversión sencilla, en un curioso arcade en el que los huevos ocultan patinetes. Muy parecido al Wonder Boy de SEGA.",category: "Sega Games",stock:"number",price: 100, pictureUrl:"https://4.bp.blogspot.com/-Bgk7SdlNu8U/TkxLtDZ1CLI/AAAAAAAAAQI/o2ymoLh-h2s/s1600/adventure-island-2.gif"}
]

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
        return resolve(products);
        }, 2000)
    })

    return promise
    };

    export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout(() => {
        return resolve(result);
        }, 2000)
    })

    return promise
    };

    export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
        return resolve(results);
        }, 2000)
    })

    return promise
    };