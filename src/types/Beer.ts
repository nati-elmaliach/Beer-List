
interface Ingredients {
  hops: any[],
  malt: any[],
  yeast: string
}
export default interface Beer {
  id: number;
  name: string;
  description: string;
  tagline: string
  image_url: string
  ingredients: Ingredients
} 