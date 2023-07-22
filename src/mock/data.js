const lista = [
    {id:'1',nombre:"Auricular LOGITECH G335",categoria:"auriculares",stock:9,desc:"Sumérgete en el mundo de los videojuegos con los auriculares gamer Logitech G Series G335 en color negro. Diseñados especialmente para brindarte una experiencia de audio inmersiva, estos auriculares over-ear cuentan con un micrófono incorporado para que puedas comunicarte con tus compañeros de equipo de manera clara y efectiva.",precio:46740,img:"https://i.postimg.cc/rmzyGGJJ/a1.png"},
    {id:'2',nombre:"Auricular REDRAGON Zeus X H510",categoria:"auriculares",stock:12,desc:"¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Redragon Zeus X no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",precio:50566,img:"https://i.postimg.cc/FF8zZ6wJ/a2.jpg"},
    {id:'3',nombre:"Auricular RAZER Kraken X Lite",categoria:"auriculares",stock:3,desc:"Sumérgete en el mundo de tus videojuegos favoritos con los auriculares gamer Razer Kraken X Lite en color negro. Diseñados especialmente para brindarte una experiencia de audio inmersiva, estos auriculares over-ear cuentan con una unidad de diafragma de 40 mm que te proporciona un sonido nítido y potente. Además, su impedancia de 32 Ω y respuesta en frecuencia de 12 Hz - 28 kHz garantizan una calidad de audio excepcional en todo momento.",precio:51250,img:"https://i.postimg.cc/ZRqn7zT6/a3.webp"},
    {id:'4',nombre:"Auricular LOGITECH Astro a10",categoria:"auriculares",stock:14,desc:"¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Astro A10 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",precio:55350,img:"https://i.postimg.cc/Hk4LTknQ/a4.jpg"},
    {id:'5',nombre:"Auricular LOGITECH G435",categoria:"auriculares",stock:6,desc:"¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G435 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",precio:62642,img:"https://i.postimg.cc/WbZ3fnPY/a5.jpg"},
    {id:'6',nombre:"Auricular COOLERMASTER MH670",categoria:"auriculares",stock:8,desc:"¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Cooler Master MH670 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",precio:73261,img:"https://i.postimg.cc/PxFx0Vx9/a6.jpg"},
    {id:'7',nombre:"Auricular HYPERX Cloud Stinger",categoria:"auriculares",stock:2,desc:"¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Stinger no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",precio:83695,img:"https://i.postimg.cc/zfzGvYH4/a7.webp"},
    {id:'8',nombre:"Auricular HYPERX Cloud II Black",categoria:"auriculares",stock:11,desc:"Sumérgete en una experiencia de juego inigualable con los auriculares gamer HyperX Cloud II KHX-HSCP en color gun metal. Diseñados especialmente para gamers, estos auriculares over-ear te ofrecen un sonido de alta calidad y una comodidad excepcional durante largas sesiones de juego. El micrófono incorporado te permite comunicarte con claridad con tus compañeros de equipo, mientras que la cancelación de ruido garantiza que te mantengas enfocado en la acción sin distracciones. Con una unidad de diafragma de 53 mm, una impedancia de 60 Ω y una respuesta en frecuencia de 15 Hz a 25.000 Hz, estos auriculares te brindan un audio nítido y potente para que no te pierdas ningún detalle. Además, su diseño elegante con luz LED añade un toque de estilo a tu setup. Conéctalos fácilmente a tus dispositivos a través del conector Jack 3.5 mm y disfruta de una experiencia de juego superior con los auriculares HyperX Cloud II.",precio:83695,img:"https://i.postimg.cc/FKHkqLpf/a8.jpg"},
    {id:'9',nombre:"Teclado REDRAGON Dragonborn",categoria:"teclados",stock:5,desc:"Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.",precio:30304,img:"https://i.postimg.cc/L8R1t7Z3/t1.png"},
    {id:'10',nombre:"Teclado REDRAGON Shrapnel",categoria:"teclados",stock:7,desc:"Sumérgete en el mundo del gaming con el teclado Redragon Shrapnel K589RGB, diseñado especialmente para los gamers más exigentes. Este teclado cuenta con resistencia a salpicaduras, lo que te brinda mayor tranquilidad durante tus intensas sesiones de juego. La retroiluminación RGB te permite personalizar el aspecto de tu teclado y jugar en ambientes con poca luz. Las teclas de acceso rápido y el pad numérico facilitan el uso de funciones y comandos frecuentes, mientras que las teclas anti-ghost aseguran que tus acciones en el juego se registren correctamente, incluso cuando presionas varias teclas al mismo tiempo.",precio:34525,img:"https://i.postimg.cc/907WKWsw/t2.jpg"},
    {id:'11',nombre:"Teclado REDRAGON Kumara K552",categoria:"teclados",stock:1,desc:"La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.",precio:35158,img:"https://i.postimg.cc/KvtTgF4Y/t3.png"},
    {id:'12',nombre:"Teclado LOGITECH K835",categoria:"teclados",stock:10,desc:"Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.",precio:39000,img: "https://i.postimg.cc/C1WZz6gD/t4.png"},
    {id:'13',nombre:"Teclado REDRAGON Deimos",categoria:"teclados",stock:13,desc:"Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.",precio:46125,img:"https://i.postimg.cc/PJYCZzX7/t5.png"},
    {id:'14',nombre:"Teclado REDRAGON Draconic",categoria:"teclados",stock:4,desc:"Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.",precio:47080,img:"https://i.postimg.cc/13HNJHGh/t6.png"},
    {id:'15',nombre:"Teclado REDRAGON Magic-Wand",categoria:"teclados",stock:15,desc:"Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.",precio:47951,img:"https://i.postimg.cc/mrp1Ggpm/t7.png"},
    {id:'16',nombre:"Mouse LOGITECH G203",categoria:"mouses",stock:1,desc:"Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.",precio:18695,img:"https://i.postimg.cc/htqjFdDD/m1.jpg"},
    {id:'17',nombre:"Mouse COOLERMASTER MM711",categoria:"mouses",stock:7,desc:"Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento. Con tu Cooler Master MM711 encontrá eso que buscás en un solo aparato con la mejor tecnología.",precio:18817,img: "https://i.postimg.cc/43j457SR/m2.png"},
    {id:'18',nombre:"Mouse REDRAGON Storm Elite",categoria:"mouses",stock:13,desc:"Con más de 20 años de experiencia en fabricación de productos, Redragon innova día a día en diseño y calidad. Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.",precio:18963,img: "https://i.postimg.cc/SNb245Vb/m3.jpg"},
    {id:'19',nombre:"Mouse VSG Aquila Air",categoria:"mouses",stock:12,desc:"Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento. Con tu VSG Aquila Air encontrá eso que buscás en un solo aparato con la mejor tecnología.",precio:21238,img: "https://i.postimg.cc/Dm32K9Kj/m4.png"},
    {id:'20',nombre:"Mouse RAZER Deathadder V2",categoria:"mouses",stock:8,desc:"Desde 2005 Razer es la marca líder de estilo de vida para jugadores. Ha diseñado y construido el ecosistema de hardware, software y servicios más grande del mundo. La ubicación de cada botón y curva de los mouses Razer se crearon para adaptarse perfectamente a tu mano. Gracias a estos dispositivos, conseguirás una experiencia de juego cómoda y placentera.",precio:23709,img:"https://i.postimg.cc/fWGXLkzF/m5.jpg"}
]

export function getProducts () {
    return new Promise ((resolve, reject) => {
        let error = false
        setTimeout(() => {
            if (error) {
                reject('No se encontro información')
            } else {
                resolve(lista)
            }
        }, 2000)
    })
} 

export const getItem = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(lista.find((item) => item.id === id))
        }, 2000)
    })
}