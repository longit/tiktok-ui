import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button({
    to,
    href,
    primary,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className="b__button" {...props}>
            <span>{children}</span>
        </Comp>
    );
}
