import Head from "next/head"
import { twoDecimals } from "../../utils/format"
import { fromImageToUrl, API_URL} from "../../utils/urls"
//import products from "../../products.json"
import BuyButton from '../../components/BuyButton'


const Product = ({product}) => {
    return (
        <div>
            <Head>
                {product.meta_title && 
                    <title>
                        {product.meta_title}
                    </title>}
                {product.meta_description && <meta name="description" contant={product.meta_description} />}    
            </Head>    
                <h3>
                    {product.name}
                </h3>
                <img src={fromImageToUrl(product.image)}/>
                <h3>
                    {product.name}
                </h3>
                <BuyButton product={product} />
                <p>
                    ${twoDecimals(product.price)}
                </p>
                <p>
                    {product.content}    
                </p>    
            

        </div>
    )
}
export async function getStaticProps({params:{slug}}){
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()
    return{
        props:{
            product:found[0]
        }
    }
}
export async function getStaticPaths(){
    const product_res = await fetch(`${API_URL}/products/`)
    const products = await product_res.json()

    return{
        paths: products.map(product =>({params:{slug:String(product.slug)}
        })),
        fallback: false
    }
}
export default Product