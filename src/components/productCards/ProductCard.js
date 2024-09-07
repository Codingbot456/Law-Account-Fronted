import React from 'react';
import ReactStars from 'react-rating-stars-component';
import useProductDetails from '../hooks/useProductImages';

const ProductCard = ({ product, addToCart, setSelectedProduct }) => {
    const productId = product.product_id; // Assuming `product_id` is used in the hook
    const { details, loading, error } = useProductDetails(productId); // Use the hook to fetch details

    const handleCardClick = () => {
        setSelectedProduct(product);
    };

    return (
        <div className='new'>
            <div className='card' style={{ border: 'none' }}>
                <div className='card-gap3'>
                    <div className='card-abt3' onClick={handleCardClick}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error loading images: {error.message}</p> // Ensure error message is displayed
                        ) : details.images && details.images.length > 0 ? (
                            <img
                                src={details.images[0]} // Correctly accessing the first image URL
                                alt={product.name || "Product Image"} // Default alt text for better accessibility
                                className='card-image3'
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                    <div className='card-info3'>
                        <div className='card-info3-3'>
                            <h6>{product.name}</h6>
                            <p>{product.description}</p> {/* Use <p> instead of <p1> for standard HTML */}
                            <h5>Price: ${product.price}</h5>
                        </div>
                        <div className="transparent-background">
                            <ReactStars
                                count={5}
                                value={4.7} // Assuming this is a placeholder rating; adjust as needed
                                size={24}
                                edit={false}
                                activeColor="#FFA41C" // Amazon-like yellow color
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
