import styles from '../styles/styles.module.css'
import noimage from '../assets/no-image.jpg'
import { ReactElement, useState } from 'react';
import {useProduct} from '../hooks/useProduct'

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
}

interface Product {
    id:string,
    title:string,
    img?:string
}

export const ProductImage = ({img = ''})=>{
    return <img className={styles.productImg} src={img ? img : noimage} alt="Product image" />
}

export const ProductTitle = ( {title} : {title:string})=>{

    return <span className={styles.productDescription}>{title}</span>

}

interface ProductButtonsProps{
    buttonMinus:boolean,
    counterb:boolean,
    buttonAdd:boolean,
    counter:number,
    increaseBy:(value:number)=>void
}

export const ProductButtons = ({buttonMinus,counterb,buttonAdd,counter,increaseBy}:ProductButtonsProps)=>{
    return (
        <div className={styles.buttonsContainer}>
            {buttonMinus && <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>}
            {counterb && <div className={styles.countLabel}>{counter}</div>}
            {buttonAdd && <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>}
      </div>
    )
}

export const ProductCard = ({children, product}:Props) => {

    const {counter,increaseBy} = useProduct()

    return <div className={styles.productCard}>

      <ProductImage img={product.img}/>
      <ProductTitle title={product.title}/>
      <ProductButtons buttonAdd={false} buttonMinus ={true} counter={counter} counterb ={true} increaseBy={increaseBy}/> 
      
  </div>;
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons; 