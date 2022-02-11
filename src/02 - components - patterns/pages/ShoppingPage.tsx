import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard";

const product = {
    id: '1',title:'algo',img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return <div>
      <h1>shopping store</h1>
      <hr />
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            <ProductCard product={product}>
                <ProductCard.Title title="algod"/>
            </ProductCard>
            
            <ProductCard product={product}>
                <ProductTitle title="algod"/>
            </ProductCard>
        </div>
  </div>;
};
