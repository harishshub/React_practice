import React from "react";
import { Fasure } from "./Components/defaultImages";
import { Save,Top,Best } from "./Components/defaultText";

// {
//     id:,
//     spon:"",
//     best:<></>,
//     imgURL:"",
//     name:"",
//     color:"",
//     rating:"",
//     availability:,
//     badge:<></>,
//     cost:"₹,",
//     discount:"₹,",
//     offer:"% off",
//     save:<Save />,
//     top:<></>,
// },

const info = [
    {
        id:1,
        spon:"Sponsored",
        imgURL:"https://rukminim2.flixcart.com/image/612/612/xif0q/gamingconsole/8/j/n/1000-xxu-00022-microsoft-wireless-controller-original-imagsz5uqykzz6zt.jpeg?q=70",
        name:"MICROSOFT Xbox Series S XXU-00022 1000 GB with None",
        color:"Black",
        rating:4.8,
        availability:21,
        badge:<Fasure/>,
        cost:"₹40,990",
        save:<Save />,
    },
    {
        id:2,
        spon:"Sponsored",
        imgURL:"https://rukminim2.flixcart.com/image/612/612/l4bn5ow0/gamingconsole/8/o/0/2-wired-and-wireless-tv-video-game-8-bit-console-built-in-1280-original-imagf96dnzwnfgg4.jpeg?q=70",
        name:"PTCMart Wired and Wireless TV video game 8 bit console ...",
        color:"White",
        rating:"3.3",
        availability:16,
        cost:"₹2,601",
        discount:"₹4,999",
        offer:"47% off",
        top:<Top />
        
    },
    {
        id:3,
        best:<Best/>,
        imgURL:"https://rukminim2.flixcart.com/image/612/612/xif0q/gamingconsole/5/n/u/-original-imaghyykrhvewh4y.jpeg?q=70",
        name:"SONY PlayStation 5 console 825 GB",
        color:"NA",
        rating:"4.6",
        availability:4019,
        cost:"₹44,990",
        discount:"₹54,990",
        offer:"18% off",
        top:<Top />
    },
    {
        id:4,
        spon:"",
        best:<></>,
        imgURL:"https://rukminim2.flixcart.com/image/612/612/kfbfr0w0/gamingconsole/h/g/g/rrt-00022-1024-xbox-yes-original-imafvsyhtamawykz.jpeg?q=70",
        name:"MICROSOFT Xbox Series X 1024 GB",
        color:"Black",
        rating:"4.8",
        availability:859,
        badge:<></>,
        cost:"₹48,969",
        discount:"₹55,990",
        offer:"12% off",
        save:<Save />,
        top:<></>,
    },
    {
      id: 5,
      spon: "",
      best: <></>,
      imgURL: "https://rukminim2.flixcart.com/image/612/612/xif0q/gamingconsole/z/b/w/-original-imagtk7vfbzqbjg6.jpeg?q=70",
      name: "SONY PlayStation 5 Digital Edition 825 GB with Astro's Playroom",
      color: "White",
      rating: "4.8",
      availability:"1592" ,
      badge: <Fasure/>,
      cost: "₹44,990",
      save: < Save/>,
    //   top: <Top/>,
    },
    

]

export default info;