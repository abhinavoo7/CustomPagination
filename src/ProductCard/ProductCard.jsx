import "./ProductCard.scss";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={image}
        alt={title}
        loading="lazy"
      />
      <span>{title}</span>
    </div>
  );
};

export default ProductCard;
