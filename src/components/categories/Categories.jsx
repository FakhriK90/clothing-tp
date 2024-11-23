import PropTypes from 'prop-types';
import CategoryItem from "../category-item/CategoryItem";
import "./categories.styles.scss";

const Categories = ({categories}) => {


  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Categories;
