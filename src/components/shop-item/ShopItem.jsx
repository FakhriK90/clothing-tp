import PropTypes from 'prop-types';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import './shop-item.styles.scss';

const ShopItem = ({item}) => {
    const { name, imageUrl, price } = item;
    return (
        <div className='shop-item-page'>
        <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{name.toUpperCase()}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={imageUrl}
          alt={`${name}`}
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>{price} DT</Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          className="button2"
        >
          Shop now
        </Button>
      </CardContent>
    </Card>
    </div>
    );
}


ShopItem.propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  };

export default ShopItem;