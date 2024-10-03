import ImageCarouselType from "../../interfaces/ImageCarouselType"

// Fetch from database
// const imageCarouselData = async () => {
//        try {
//            // Simulate an API call
//            const response = await new Promise(resolve => {
//                setTimeout(() => resolve({ data: 'Sample Data' }), 1000);
//            });
//            return response.data;
//        } catch (error) {
//            console.error("Error fetching data:", error);
//        }
//    };

// export { imageCarouselData };


export const imageCarouselData: ImageCarouselType[] = [
  {
    title: 'home_carousel_image_1',
    showTitle: true,
    imagePath:  require('../../assets/images/carousel/home_carousel_image_1.jpg'),
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque a deserunt incidunt.',
    imageId: 1,
    showDescription: true
  },
  {
    title: 'home_carousel_image_2',
    showTitle: true,
    imagePath:  require('../../assets/images/carousel/home_carousel_image_2.jpg'),
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque a deserunt incidunt.',
    imageId: 2,
    showDescription: true
  },
  {
    title: 'home_carousel_image_3',
    showTitle: true,
    imagePath:  require('../../assets/images/carousel/home_carousel_image_3.jpg'),
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque a deserunt incidunt.',
    imageId: 3,
    showDescription: false
  },
  {
    title: 'home_carousel_image_4',
    showTitle: false,
    imagePath:  require('../../assets/images/carousel/home_carousel_image_4.jpg'),
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque a deserunt incidunt.',
    imageId: 4,
    showDescription: true
  },
  {
    title: 'home_carousel_image_5',
    showTitle: true,
    imagePath:  require('../../assets/images/carousel/home_carousel_image_5.jpg'),
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque a deserunt incidunt.',
    imageId: 5,
    showDescription: true
  },
]