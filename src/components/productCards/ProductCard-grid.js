import React from 'react';
import ReactStars from 'react-rating-stars-component';
import useProductDetails from '../hooks/useProductImages';

const ProductCard = ({ product, addToCart, setSelectedProduct }) => {
    console.log("Product prop:", product); // Log the product prop to check its structure

    const productId = product.product_id; // Use product.product_id since that's how your data is structured
    const { details, loading, error } = useProductDetails(productId); // Use the hook to fetch details

    // Log the fetched details
    console.log("Product ID:", productId);
    console.log("Loading state:", loading);
    console.log("Error state:", error);
    console.log("Fetched details:", details);

    const handleCardClick = () => {
        setSelectedProduct(product);
    };

    return (
        <div className='new4'>
            <div className='card' style={{ border: 'none' }}>
                <div className='card-gap4'>
                    <div className='card-abt4' onClick={handleCardClick}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error loading images: {error.message}</p>
                        ) : details.images && details.images.length > 0 ? (
                            <img 
                                src={details.images[0]} // Correctly accessing the first image URL
                                alt={product.name} 
                                className='card-image4' 
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                    <div className='card-info4'>
                        <div className='card-info4-4'>
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                            <h6>Price: ${product.price}</h6>
                        </div>
                        <div className="transparent-background">
                            <ReactStars
                                count={5}
                                value={4.7}
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
