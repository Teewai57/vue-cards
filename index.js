

import image from "./images/image.jpg"

const cards = Vue.createApp({
    data(){
        return {
            name: "Toyo",
            cardContent: [
               { image: image, title:"Travels and luxury", text: "The very best of qualities you could get"},
               { image: image, title:"Travels and luxury", text: "The very best of qualities you could get"},
               { image: image, title:"Travels and luxury", text: "The very best of qualities you could get"},
               { image: image, title:"Travels and luxury", text: "The very best of qualities you could get"},
               { image: image, title:"Travels and luxury", text: "The very best of qualities you could get"},
               { image: image, title:"Travels and luxury", text: "The very best of qualities you could get"},

            ]
        }
    }
})

cards.mount("#app");