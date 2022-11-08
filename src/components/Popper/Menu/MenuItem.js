import Button from '../../Button';

function MenuItems({ data }) {
    return (
        <Button className="menu-item" to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
