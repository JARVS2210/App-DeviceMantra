import { ImageSourcePropType } from "react-native"

interface ImageCarouselType {
  title: string;
  showTitle: boolean;
  imagePath: ImageSourcePropType;
  description: string;
  showDescription: boolean;
  imageId: number;
}

export default ImageCarouselType