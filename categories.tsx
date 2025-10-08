export interface CategoryItem {
  id: number;
  name: string;
  subcategories: string[];
  imageUrl?: string;
}

export const categoryList: CategoryItem[] = [
  {
    id: 0,
    name: "Selecciona una opcion",
    subcategories: ["Selecciona"],
  },
  {
    id: 1,
    name: "Electrónicos",
    subcategories: [
      "Teléfonos",
      "Televisores",
      "Portátiles",
      "Cámaras",
      "Audio",
      "Aire acondicionado",
      "Teclados",
      "Auriculares",
      "Dispositivos",
      "Smartwatches",
      "Cables de cargas",
      "Rastreadores inteligentes",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514731/category/electronics/tjcozedwwzujet9kq5st.webp",
  },
  {
    id: 18,
    name: "Videojuegos",
    subcategories: [
      "Consolas",
      "Juegos",
      "Accesorios",
      "Sillas de Juego",
      "Volantes de Juego",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514732/category/gaming/inpctreyumvbimf49utj.webp",
  },
  {
    id: 2,
    name: "Ropa",
    subcategories: ["Hombres", "Mujeres", "Niños", "Bebés", "Ropa Interior"],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514741/category/clothing/eb4vw5qbmg5lyop7okbk.webp",
  },
  {
    id: 3,
    name: "Hogar",
    subcategories: ["Muebles", "Electrodomésticos", "Decoración", "Jardín"],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514734/category/home/fpnpxkz3hecumijbxykl.webp",
  },
  {
    id: 4,
    name: "Juguetes y Juegos",
    subcategories: [
      "Juegos de Mesa",
      "Juguetes Educativos",
      "Juguetes para Exteriores",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514735/category/toys_and_games/qyndwxdjvsupkjccka8k.webp",
  },
  {
    id: 5,
    name: "Automotriz",
    subcategories: [
      "Partes",
      "Accesorios",
      "Herramientas",
      "Cuidado del Coche",
    ],
  },
  {
    id: 6,
    name: "Salud y Belleza",
    subcategories: [
      "Cuidado de la Piel",
      "Maquillaje",
      "Cuidado del Cabello",
      "Perfumes",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514734/category/health_and_beauty/ip7bphovg0iq2xskvilf.webp",
  },
  {
    id: 7,
    name: "Deportes",
    subcategories: [
      "Equipo de Deportes",
      "Ropa Deportiva",
      "Nutrición Deportiva",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514738/category/sports/x1eozfsq6r3ah3hwzdud.webp",
  },
  {
    id: 8,
    name: "Libros",
    subcategories: [
      "Novelas",
      "No Ficción",
      "Autoayuda",
      "Infantiles",
      "Educativos",
      "Desarrollo Personal",
      "Psicología",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514741/category/books/ow3cryvosa3scazoaws7.webp",
  },
  {
    id: 9,
    name: "Calzado",
    subcategories: [
      "Zapatos de Hombre",
      "Zapatos de Mujer",
      "Zapatos de Niños",
      "Zapatos Deportivos",
      "Sandalias",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514732/category/footwear/ai3cplhkeytbcszf6pzv.webp",
  },
  {
    id: 10,
    name: "Joyas y Accesorios",
    subcategories: [
      "Collares",
      "Pulseras",
      "Aretes",
      "Anillos",
      "Relojes",
      "Smartwatches",
    ],
    imageUrl:
      "https://img.freepik.com/free-vector/jewelry-accessories-realistic-set_1284-16770.jpg?w=2000",
  },
  {
    id: 10,
    name: "Accesorios para hombres",
    subcategories: ["Gorras y Sombreros", "Gafas", "Corbatas", "Cinturones"],
  },
  {
    id: 11,
    name: "Bolsas y Equipaje",
    subcategories: [
      "Bolsos de Mano",
      "Mochilas",
      "Equipaje",
      "Carteras",
      "Maletines",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514740/category/bags_and_luggage/zjbvyb4sjfnosb0im109.webp",
  },
  {
    id: 12,
    name: "Fitness",
    subcategories: [
      "Equipo Fitness",
      "Cuerda de saltar",
      "Tapetes de Yoga",
      "Pesas",
      "Bandas de Resistencia",
      "Báscula inteligente",
      "Ropa de Fitness",
      "Botellas de agua deportivas",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514733/category/fitness/wfoe70aaewxezi8sksp8.webp",
  },
  {
    id: 13,
    name: "Aire Libre",
    subcategories: [
      "Equipo de Camping",
      "Equipo de Senderismo",
      "Pesca",
      "Muebles de Exterior",
      "Barbacoa",
    ],
    imageUrl:
      "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/06/Outdoor-furniture-ideas-good-housekeeping.jpeg",
  },
  {
    id: 14,
    name: "Suministros para Mascotas",
    subcategories: [
      "Comida para Perros",
      "Juguetes para Gatos",
      "Jaulas para Pájaros",
      "Acuarios",
      "Ropa para Mascotas",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514738/category/pet_supplies/l8e2l5u7uaztp6c3dnje.webp",
  },
  {
    id: 15,
    name: "Instrumentos Musicales",
    subcategories: [
      "Guitarras",
      "Pianos",
      "Tambores",
      "Instrumentos de Viento",
      "Instrumentos de Cuerda",
    ],
    imageUrl:
      "https://cdn1.epicgames.com/ue/item/MusicalInstruments_Screenshot_01-1920x1080-4091939f118fb786ae3fb1fab71c76e8.png?resize=1&w=1920",
  },
  {
    id: 16,
    name: "Gourmet y Abarrotes",
    subcategories: [
      "Café y Té",
      "Especias",
      "Lácteos",
      "Productos Orgánicos",
      "Postres",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514740/category/gourmet_groceries/qcujlf7kdepllrb91f2l.webp",
  },
  {
    id: 19,
    name: "Computadoras y Hardware",
    subcategories: [
      "Portátiles",
      "Computadoras de Escritorio",
      "Procesadores",
      "Tarjetas Gráficas",
      "Memoria (RAM)",
      "Placas Base",
      "Almacenamiento (SSD/HDD)",
      "Fuentes de Poder",
      "Sistemas de Enfriamiento",
      "Gabinetes",
      "Monitores",
      "Periféricos (Teclado, Ratón, etc.)",
      "Cables y Conectores",
      "Redes",
    ],
    imageUrl:
      "https://res.cloudinary.com/dou/image/upload/v1696514739/category/computers_and_hardware/tdnebdldxghlj3zk4jua.webp",
  },
];
