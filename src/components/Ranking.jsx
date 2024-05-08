import { FaStar, FaRegStar } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types, no-unused-vars
const StarRating = ({ rating, onChange }) => {
    const renderStars = () => {
        const maxStars = 5;
        let stars = [];
        for (let i = 1; i <= maxStars; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }
        return stars;
    };

    return (
        <div>
            {renderStars()}
        </div>
    );
}

export default StarRating