import Button from '../../Button';

function MenuItems({ data, onClick }) {
    return (
        <Button className="menu-item" to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
