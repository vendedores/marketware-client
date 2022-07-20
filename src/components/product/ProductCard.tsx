import { FC } from "react";
import "./styles/ProductCard.css";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  retailPrice: number;
  salePrice: number;
  quantity: number;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  retailPrice,
  salePrice,
  quantity,
}) => {
  return (
    <div className="product-card">
      <div className="product-card-content-container">
        <img className="product-card-image" src={imageUrl} />
        <s className="product-card-retail-price">${retailPrice}</s>
        <h2 className="product-card-sale-price">${salePrice}</h2>
        <h1 className="product-card-name">{name}</h1>
        <h2 className="product-card-quantity">{quantity}x</h2>
      </div>
    </div>
  );
};

export default ProductCard;
