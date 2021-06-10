export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
export const MAGIC_PUBLIC_KEY=process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_9A7FAE850BDC7F08'
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51Ih6lzGOv1qFATlA1KwzoQqunWSncsVXenGtvsS7iJAfKZLw7htMuFZXOJzBlyu2QpGYo7IB7knIw76FTwWpHuQ800SXWCgne0'
/**
 * Given image return url, works for local and deployed strapis
 * @param{any} image
 */


export const fromImageToUrl = (image) => {

    if(!image){
        return "vercel.svg"
    }
    if(image.url.indexOf("/")===0){
      return `${API_URL}${image.url}`
    }
  return (
    image.url
  )
}

export default fromImageToUrl
