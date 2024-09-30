import './categoty-item.styles.scss'
// import PropTypes from 'prop-types';

const CategoryItem = ({category}) => {
  const {title, imageUrl} = category;
  return (
    <div className="category-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
  )
}

// CategoryItem.propTypes = {
//   category: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default CategoryItem