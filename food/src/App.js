import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GetStarted from './components/GetStarted';
import SVECW from './components/SVECW';
import Dental from './components/Dental';
import Degree from './components/Degree';
import Diploma from './components/Diploma';
import VIT from './components/VIT'; // Import VIT component
// Importing all icons
import '@fortawesome/fontawesome-free/css/all.css';

// Importing specific icons (e.g., heart icon)
import '@fortawesome/fontawesome-free/css/regular.css'; // for regular icons
import '@fortawesome/fontawesome-free/css/solid.css';   // for solid icons
    const foodItems = [
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "dum tea",
      "price": "10",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "bellam tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "ginger tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "masala tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "sugar less tea",
      "price": "10",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "lemon tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "ginger lemon tea",
      "price": "20",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "badam milk",
      "price": "20",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "kulad chai",
      "price": "20",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "coffee",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "green tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "hot chocolate",
      "price": "20",
      "category": "tea"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "samosa",
      "price": "5",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "egg puff",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "veg puff",
      "price": "15",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "fruit biscuits",
      "price": "8",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "osmania biscuits",
      "price": "5",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "vanila shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "chocolate shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "strawberry shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "oreo shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "kitkat shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "butterscotch shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "mango milk shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "caramel shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "rose milk",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "lime mint cooler",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "fizi mojito",
      "price": "55",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "cold coffee",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "rose milk",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "ginger lemon ice tea",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "lassi",
      "price": "40",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "matka lassi",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "tealeaf",
      "item": "mango lassi",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "vit",
      "store": "maggie point",
      "item": "maggie",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "maggie point",
      "item": "sweet corn35",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "tiffin centre",
      "item": "mysore bajji",
      "price": "10",
      "category": "tiffins"
    },
    {
      "location": "vit",
      "store": "tiffin centre",
      "item": "minpa bajji",
      "price": "10",
      "category": "tiffins"
    },
    {
      "location": "vit",
      "store": "tiffin centre",
      "item": "uttapam",
      "price": "35",
      "category": "tiffins"
    },
    {
      "location": "vit",
      "store": "tiffin centre",
      "item": "puri",
      "price": "45",
      "category": "tiffins"
    },
    {
      "location": "vit",
      "store": "tiffin centre",
      "item": "chapati",
      "price": "40",
      "category": "tiffins"
    },
    {
      "location": "vit",
      "store": "tiffin centre",
      "item": "egg chapati",
      "price": "50",
      "category": "tiffins"
    },
    {
      "location": "vit",
      "store": "tiffin centre",
      "item": "gari",
      "price": "40",
      "category": "tiffins"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "egg puff",
      "price": "25",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "veg puff",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "chicken puff",
      "price": "35",
      "category": "non veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "chicken samosa",
      "price": "25",
      "category": "non veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "chicken roll",
      "price": "50",
      "category": "non veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "paneer roll",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "red velvet cup cake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "chocolate cupcake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "black forest pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "red velvet pastry",
      "price": "70",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "butter scotch pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "chocolate caramel pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "oreo pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "lava cake",
      "price": "55",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "walnet brownie",
      "price": "45",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "chocolate pudding",
      "price": "50",
      "category": "cake"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "sweet corn roll",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "chicken kabab",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "veg sandwich",
      "price": "80",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "junnu",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "coke",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "fanta",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "thumbsup",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "artos sweet",
      "price": "15",
      "category": "drinks"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "artos salt",
      "price": "15",
      "category": "drinks"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "limca",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "vit",
      "store": "lake view canteen",
      "item": "minute maid",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "vit",
      "store": "tandoori",
      "item": "chicken shawarma",
      "price": "100",
      "category": "non veg"
    },
    {
      "location": "vit",
      "store": "tandoori",
      "item": "chicken curry",
      "price": "120",
      "category": "non veg"
    },
    {
      "location": "vit",
      "store": "tandoori",
      "item": "paneer curry",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "tandoori",
      "item": "butter naan",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "bar",
      "price": "15",
      "category": "icecreams"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "bar",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "cups",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "cups",
      "price": "45",
      "category": "icecreams"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "cones",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "cones",
      "price": "45",
      "category": "icecreams"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "cones",
      "price": "55",
      "category": "icecreams"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "tru juice",
      "price": "10",
      "category": "juice"
    },
    {
      "location": "vit",
      "store": "amul ice creams",
      "item": "butter milk",
      "price": "10",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "maggie point",
      "item": "maggie",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "fried chicken [2p]",
      "price": "150",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "chicken strips[4p]",
      "price": "150",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "chicken lollipops[5p]",
      "price": "150",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "chicken lollipops[3p]",
      "price": "100",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "chicken poppers[large]",
      "price": "150",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "chicken poppers[small]",
      "price": "100",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "chicken wings[4p]",
      "price": "80",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "chicken burger",
      "price": "80",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "veg burger",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "veg sandwich",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "corn samosa",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "french fries",
      "price": "80",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "veg balls",
      "price": "80",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "veg sticks",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "veg patty",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "yummy",
      "item": "myonnaise",
      "price": "10",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "egg puff",
      "price": "25",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "veg puff",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "chicken puff",
      "price": "35",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "chicken samosa",
      "price": "25",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "chicken roll",
      "price": "50",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "paneer roll",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "red velvet cup cake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "chocolate cupcake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "black forest pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "red velvet pastry",
      "price": "70",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "butter scotch pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "chocolate caramel pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "oreo pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "lava cake",
      "price": "55",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "walnet brownie",
      "price": "45",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "chocolate pudding",
      "price": "50",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "sweet corn roll",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "chicken kabab",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "veg sandwich",
      "price": "80",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "junnu",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "coke",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "fanta",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "thumbsup",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "artos sweet",
      "price": "15",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "artos salt",
      "price": "15",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "limca",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "central square",
      "item": "minute maid",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "single puri",
      "price": "20",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "single vada",
      "price": "20",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "mysoore bajji",
      "price": "30",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "ravva punuku",
      "price": "30",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "chapati",
      "price": "40",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "egg chapati",
      "price": "50",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "plain dosa",
      "price": "30",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "onion dosa",
      "price": "35",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "masala dosa",
      "price": "45",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "ravva dosa",
      "price": "40",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "egg dosa",
      "price": "50",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "uttapam",
      "price": "40",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "mirchi bajji",
      "price": "20",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "challa punugulu",
      "price": "20",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "onion pakoda",
      "price": "30",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tiffin centre",
      "item": "egg bajji",
      "price": "20",
      "category": "tiffins"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "dum tea",
      "price": "10",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "bellam tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "ginger tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "masala tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "sugar less tea",
      "price": "10",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "lemon tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "ginger lemon tea",
      "price": "20",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "badam milk",
      "price": "20",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "kulad chai",
      "price": "20",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "coffee",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "green tea",
      "price": "15",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "hot chocolate",
      "price": "20",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "samosa",
      "price": "5",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "egg puff",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "veg puff",
      "price": "15",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "fruit biscuits",
      "price": "8",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "osmania biscuits",
      "price": "5",
      "category": "tea"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "vanila shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "chocolate shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "strawberry shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "oreo shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "kitkat shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "butterscotch shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "mango milk shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "caramel shake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "rose milk",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "lime mint cooler",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "fizi mojito",
      "price": "55",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "cold coffee",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "rose milk",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "ginger lemon ice tea",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "lassi",
      "price": "40",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "matka lassi",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tealeaf",
      "item": "mango lassi",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "tandoori",
      "item": "chicken shawarma",
      "price": "100",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "tandoori",
      "item": "chicken curry",
      "price": "120",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "tandoori",
      "item": "paneer curry",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "tandoori",
      "item": "butter naan",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "bar",
      "price": "15",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "bar",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "cups",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "cups",
      "price": "45",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "cones",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "cones",
      "price": "45",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "cones",
      "price": "55",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "tru juice",
      "price": "10",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "amul ice creams",
      "item": "butter milk",
      "price": "10",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "egg puff",
      "price": "25",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "veg puff",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chicken puff",
      "price": "35",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chicken samosa",
      "price": "25",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chicken roll",
      "price": "50",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "paneer roll",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "red velvet cup cake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chocolate cupcake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "black forest pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "red velvet pastry",
      "price": "70",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "butter scotch pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chocolate caramel pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "oreo pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "lava cake",
      "price": "55",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "walnet brownie",
      "price": "45",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chocolate pudding",
      "price": "50",
      "category": "cake"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "sweet corn roll",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chicken kabab",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "veg sandwich",
      "price": "80",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "junnu",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "coke",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "fanta",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "thumbsup",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "artos sweet",
      "price": "15",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "artos salt",
      "price": "15",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "limca",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "minute maid",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chicken pizza",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "aloo grilled sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "pizza sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "cheese garlic sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "paneer sandwich",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "bbq chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chicken periperi sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "zinger chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "tandoori chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "veg burger",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chicken burger",
      "price": "80",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "strawberry shake",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "butterscotch shake",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "vanila oreo",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "temple square",
      "item": "chocolate milkshake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "svecw",
      "store": "panipuri stall",
      "item": "panipuri",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "panipuri stall",
      "item": "dahi puri",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "panipuri stall",
      "item": "masala puri",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "panipuri stall",
      "item": "chat",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "panipuri stall",
      "item": "mixture",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "panipuri stall",
      "item": "mirapakay bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "panipuri stall",
      "item": "artikay bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "panipuri stall",
      "item": "bajji mixture",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "bananna",
      "price": "40",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "kharbuja",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "apple",
      "price": "45",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "promogranate",
      "price": "45",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "carrot",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "orange",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "pineapple",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "grape",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "pappaya",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "watermelon",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "sappota",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "juice centre",
      "item": "fruit salad",
      "price": "40",
      "category": "juice"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "vanila softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "chocolate softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "mixed softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "vanila scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "chocolate scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "butterscotch scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "pista scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "strawberry scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "americandry scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "froot single",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "cashew grape single scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "blackcurrent ",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "softy icecream",
      "item": "roll icecreams",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "svecw",
      "store": "franky stall",
      "item": "chicken frankie",
      "price": "75",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "franky stall",
      "item": "paneer frankie",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "milk parlour",
      "item": "chittidli",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "milk parlour",
      "item": "cool drinks",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "svecw",
      "store": "milk parlour",
      "item": "sweets",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "milk parlour",
      "item": "butter milk",
      "price": "10",
      "category": "drinks"
    },
    {
      "location": "dental",
      "store": "maggie point",
      "item": "maggie",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "bananna",
      "price": "40",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "kharbuja",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "apple",
      "price": "45",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "promogranate",
      "price": "45",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "carrot",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "orange",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "pineapple",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "grape",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "pappaya",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "watermelon",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "sappota",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "dental",
      "store": "juice centre",
      "item": "fruit salad",
      "price": "40",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "bar",
      "price": "15",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "bar",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "cups",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "cups",
      "price": "45",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "cones",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "cones",
      "price": "45",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "cones",
      "price": "55",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "tru juice",
      "price": "10",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "amul ice creams",
      "item": "butter milk",
      "price": "10",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "egg puff",
      "price": "25",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "veg puff",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chicken puff",
      "price": "35",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chicken samosa",
      "price": "25",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chicken roll",
      "price": "50",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "paneer roll",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "red velvet cup cake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chocolate cupcake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "black forest pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "red velvet pastry",
      "price": "70",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "butter scotch pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chocolate caramel pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "oreo pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "lava cake",
      "price": "55",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "walnet brownie",
      "price": "45",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chocolate pudding",
      "price": "50",
      "category": "cake"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "sweet corn roll",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chicken kabab",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "veg sandwich",
      "price": "80",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "junnu",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "coke",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "fanta",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "thumbsup",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "artos sweet",
      "price": "15",
      "category": "drinks"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "artos salt",
      "price": "15",
      "category": "drinks"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "limca",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "minute maid",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chicken pizza",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "aloo grilled sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "pizza sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "cheese garlic sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "paneer sandwich",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "bbq chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chicken periperi sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "zinger chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "tandoori chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "veg burger",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chicken burger",
      "price": "80",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "strawberry shake",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "butterscotch shake",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "vanila oreo",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "degree",
      "store": "temple square",
      "item": "chocolate milkshake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "degree",
      "store": "panipuri stall",
      "item": "panipuri",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "panipuri stall",
      "item": "dahi puri",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "panipuri stall",
      "item": "masala puri",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "panipuri stall",
      "item": "chat",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "panipuri stall",
      "item": "mixture",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "panipuri stall",
      "item": "mirapakay bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "panipuri stall",
      "item": "artikay bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "panipuri stall",
      "item": "bajji mixture",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "bananna",
      "price": "40",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "kharbuja",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "apple",
      "price": "45",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "promogranate",
      "price": "45",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "carrot",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "orange",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "pineapple",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "grape",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "pappaya",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "watermelon",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "sappota",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "juice centre",
      "item": "fruit salad",
      "price": "40",
      "category": "juice"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "vanila softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "chocolate softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "mixed softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "vanila scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "chocolate scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "butterscotch scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "pista scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "strawberry scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "americandry scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "froot single",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "cashew grape single scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "blackcurrent ",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "softy icecream",
      "item": "roll icecreams",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "degree",
      "store": "franky stall",
      "item": "chicken frankie",
      "price": "75",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "franky stall",
      "item": "paneer frankie",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "milk parlour",
      "item": "chittidli",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "milk parlour",
      "item": "cool drinks",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "degree",
      "store": "milk parlour",
      "item": "sweets",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "milk parlour",
      "item": "butter milk",
      "price": "10",
      "category": "drinks"
    },
    {
      "location": "5",
      "store": "amul ice creams",
      "item": "bar",
      "price": "15",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "amul ice creams",
      "item": "bar",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "amul ice creams",
      "item": "cups",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "amul ice creams",
      "item": "cups",
      "price": "45",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "amul ice creams",
      "item": "cones",
      "price": "35",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "amul ice creams",
      "item": "cones",
      "price": "45",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "amul ice creams",
      "item": "cones",
      "price": "55",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "amul ice creams",
      "item": "tru juice",
      "price": "10",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "amul ice creams",
      "item": "butter milk",
      "price": "10",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "egg puff",
      "price": "25",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "veg puff",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chicken puff",
      "price": "35",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chicken samosa",
      "price": "25",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chicken roll",
      "price": "50",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "paneer roll",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "red velvet cup cake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chocolate cupcake",
      "price": "35",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "black forest pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "red velvet pastry",
      "price": "70",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "butter scotch pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chocolate caramel pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "oreo pastry",
      "price": "60",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "lava cake",
      "price": "55",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "walnet brownie",
      "price": "45",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chocolate pudding",
      "price": "50",
      "category": "cake"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "sweet corn roll",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chicken kabab",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "veg sandwich",
      "price": "80",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "junnu",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "coke",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "fanta",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "thumbsup",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "artos sweet",
      "price": "15",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "artos salt",
      "price": "15",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "limca",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "minute maid",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chicken pizza",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "aloo grilled sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "pizza sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "cheese garlic sandwich",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "paneer sandwich",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "bbq chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chicken periperi sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "zinger chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "tandoori chicken sandwich",
      "price": "70",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "veg burger",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chicken burger",
      "price": "80",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "strawberry shake",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "butterscotch shake",
      "price": "50",
      "category": "shakes"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "vanila oreo",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "diploma",
      "store": "temple square",
      "item": "chocolate milkshake",
      "price": "60",
      "category": "shakes"
    },
    {
      "location": "diploma",
      "store": "panipuri stall",
      "item": "panipuri",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "panipuri stall",
      "item": "dahi puri",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "panipuri stall",
      "item": "masala puri",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "panipuri stall",
      "item": "chat",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "panipuri stall",
      "item": "mixture",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "panipuri stall",
      "item": "mirapakay bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "panipuri stall",
      "item": "artikay bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "panipuri stall",
      "item": "bajji mixture",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "bananna",
      "price": "40",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "kharbuja",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "apple",
      "price": "45",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "promogranate",
      "price": "45",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "carrot",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "orange",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "pineapple",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "grape",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "pappaya",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "watermelon",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "sappota",
      "price": "30",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "juice centre",
      "item": "fruit salad",
      "price": "40",
      "category": "juice"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "vanila softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "chocolate softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "mixed softy",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "vanila scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "chocolate scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "butterscotch scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "pista scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "strawberry scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "americandry scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "froot single",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "cashew grape single scoop",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "blackcurrent ",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "softy icecream",
      "item": "roll icecreams",
      "price": "30",
      "category": "icecreams"
    },
    {
      "location": "diploma",
      "store": "franky stall",
      "item": "chicken frankie",
      "price": "75",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "franky stall",
      "item": "paneer frankie",
      "price": "60",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "milk parlour",
      "item": "chittidli",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "milk parlour",
      "item": "cool drinks",
      "price": "20",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "milk parlour",
      "item": "sweets",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "milk parlour",
      "item": "butter milk",
      "price": "10",
      "category": "drinks"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "single puri",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "single vada",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "mysoore bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "ravva punuku",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chapati",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg chapati",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "plain dosa",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "onion dosa",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "masala dosa",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "ravva dosa",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg dosa",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "uttapam",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "mirchi bajji",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "challa punugulu",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "onion pakoda",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg bajji",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken friedrice",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken biryani",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "veg biryani",
      "price": "120",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "veg friedrice",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "mixed biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg biryani",
      "price": "160",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "prawn biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "sp biryani",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "panjabi biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg friedrice",
      "price": "120",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken roasted friedrice",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "prawn friedrice",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "mixed friedrice",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "sp friedrice",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "veg noodles",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg noodles",
      "price": "110",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken noodles",
      "price": "130",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "meals",
      "price": "76",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg omlet single",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg omlet double",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg 65",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "egg manchuria",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken 65",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken spring roll",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken manchuria",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken kabab",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chilli chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "lemon chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "peper chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "chicken pakodi",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "veg manchuria",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "veg cutlet",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "diploma",
      "store": "anapurna",
      "item": "onion pakodi",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "single puri",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "single vada",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "mysoore bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "ravva punuku",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chapati",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg chapati",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "plain dosa",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "onion dosa",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "masala dosa",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "ravva dosa",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg dosa",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "uttapam",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "mirchi bajji",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "challa punugulu",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "onion pakoda",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg bajji",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken friedrice",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken biryani",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "veg biryani",
      "price": "120",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "veg friedrice",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "mixed biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg biryani",
      "price": "160",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "prawn biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "sp biryani",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "panjabi biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg friedrice",
      "price": "120",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken roasted friedrice",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "prawn friedrice",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "mixed friedrice",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "sp friedrice",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "veg noodles",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg noodles",
      "price": "110",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken noodles",
      "price": "130",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "meals",
      "price": "76",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg omlet single",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg omlet double",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg 65",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg manchuria",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken 65",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken spring roll",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken manchuria",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken kabab",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chilli chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "lemon chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "peper chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chicken pakodi",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "veg manchuria",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "veg cutlet",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "onion pakodi",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "single puri",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "single vada",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "mysoore bajji",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "ravva punuku",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "chapati",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg chapati",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "plain dosa",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "onion dosa",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "masala dosa",
      "price": "45",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "ravva dosa",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "egg dosa",
      "price": "50",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "uttapam",
      "price": "40",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "mirchi bajji",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "challa punugulu",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "svecw",
      "store": "anapurna",
      "item": "onion pakoda",
      "price": "30",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "egg bajji",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken friedrice",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken biryani",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "veg biryani",
      "price": "120",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "veg friedrice",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "mixed biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "egg biryani",
      "price": "160",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "prawn biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "sp biryani",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "panjabi biryani",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "egg friedrice",
      "price": "120",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken roasted friedrice",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "prawn friedrice",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "mixed friedrice",
      "price": "200",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "sp friedrice",
      "price": "190",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "veg noodles",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "egg noodles",
      "price": "110",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken noodles",
      "price": "130",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "meals",
      "price": "76",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "egg omlet single",
      "price": "20",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "egg omlet double",
      "price": "35",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "egg 65",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "egg manchuria",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken 65",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken spring roll",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken manchuria",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken kabab",
      "price": "60",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chilli chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "lemon chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "peper chicken",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "chicken pakodi",
      "price": "170",
      "category": "non veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "veg manchuria",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "veg cutlet",
      "price": "100",
      "category": "veg"
    },
    {
      "location": "degree",
      "store": "anapurna",
      "item": "onion pakodi",
      "price": "30",
      "category": "veg"
    }
  ];

  function App() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/vit" element={<VIT foodItems={foodItems} />} />
            <Route path="/svecw" element={<SVECW foodItems={foodItems} />} />
            <Route path="/dental" element={<Dental foodItems={foodItems} />} />
            <Route path="/degree" element={<Degree foodItems={foodItems} />} />
            <Route path="/diploma" element={<Diploma foodItems={foodItems} />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
