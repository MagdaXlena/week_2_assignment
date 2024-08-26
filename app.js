let  images= [
    {
        url: 'https://res.cloudinary.com/dk-wassersport/image/upload/v1715066982/yacht/leopard42-kat-segeln-fra-2021-pr-aa3r8474-modifier_86c16e8e932d0b38ccfb8ebd1a788596.jpg',
        alt: 'Leopard 42',
    },
    {
        url: 'https://media.bateaux.com/src/images/news/articles/ima-image-40061.jpg',
        alt: 'Bali 4.2'

    },
    {   
        url: 'https://ik.imagekit.io/zizooboats/boat/0009/08/99baf45553ae40cf0279143d38c06f093b9b78ae.jpeg',
        alt: 'Fountaine Pajot 42'
    },
    {
        url:'https://images.boatsgroup.com/resize/1/22/85/2022-lagoon-42-sail-9162285-20240530040921467-1_XLARGE.jpg?w=400&h=267&t=1721963603835&exact&format=webp',
        alt:'Lagoon 42'
    },
    {
        url: 'https://www.sailmagazine.com/.image/t_share/MTc2Nzk0MDgxMDYwNTMwMTE4/hh50-mod.jpg',
        alt: 'HH50'
    }
]

const gallery = document.getElementById('gallery');
const bigImage = document.getElementById('bigImage')

function thumbnail() {
    images.forEach(function(image){
        let singleImage = document.createElement('img')
        singleImage.src = image.url;
        singleImage.alt = image.alt;
    
    
        singleImage.addEventListener('click', function() {
            console.log(`Clicked on ${image.alt}`)
            createBigImage(image)
        })

        singleImage.addEventListener('keydown', function (event) {
            console.log(event)
            if (EventCounts.code ==='Enter') {
                createBigImage(image)
            }
        })

        gallery.appendChild(singleImage);
}) 
}

thumbnail()

function createBigImage(imageParams) {
    bigImage.innerHTML = ''
    // make an image tag
const bigImageElement = document.createElement('img')
    
   bigImageElement.src = imageParams.url
   bigImageElement.alt = imageParams.alt

   bigImage.appendChild(bigImageElement)
}

