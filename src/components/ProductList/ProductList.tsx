import { Product } from "../../models/products.models";

const PRODUCTLIST: Product[] = [
  {
    id: 1,
    name: "Producto 1",
    category: [
      { id: 1, name: "All Departments" },
      { id: 2, name: "Books" },
    ],
    description: "Descripción del producto 1",
    price: 9.99,
    stocked: true,
    color: "Rojo",
    images: [
      {
        id: 1,
        name: "Imagen 1",
        path: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Producto 2",
    category: [
      { id: 1, name: "All Departments" },
      { id: 2, name: "Computers" },
    ],
    description: "Descripción del producto 2",
    price: 19.99,
    stocked: false,
    color: "Azul",
    images: [
      {
        id: 1,
        name: "Imagen 3",
        path: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      },
    ],
  },
  {
    id: 3,
    name: "Producto 3",
    category: [
      { id: 1, name: "All Departments" },
      { id: 2, name: "Electrinics" },
    ],
    description: "Descripción del producto 2",
    price: 19.99,
    stocked: false,
    color: "Verde",
    images: [
      {
        id: 1,
        name: "Imagen 3",
        path: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      },
    ],
  },
  {
    id: 4,
    name: "Producto 4",
    category: [
      { id: 1, name: "All Departments" },
      { id: 2, name: "Video Games" },
    ],
    description: "Descripción del producto 2",
    price: 19.99,
    stocked: false,
    color: "Amarillo",
    images: [
      {
        id: 1,
        name: "Imagen 3",
        path: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      },
    ],
  },
  {
    id: 5,
    name: "Producto 5",
    category: [
      { id: 1, name: "All Departments" },
      { id: 2, name: "Books" },
    ],
    description: "Descripción del producto 2",
    price: 19.99,
    stocked: false,
    color: "Morado",
    images: [
      {
        id: 1,
        name: "Imagen 3",
        path: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      },
    ],
  },
  {
    id: 6,
    name: "Producto 6",
    category: [
      { id: 1, name: "All Departments" },
      { id: 2, name: "Computers" },
    ],
    description: "Descripción del producto 2",
    price: 19.99,
    stocked: false,
    color: "Anaranjado",
    images: [
      {
        id: 1,
        name: "Imagen 3",
        path: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      },
    ],
  },
];

export default PRODUCTLIST;
