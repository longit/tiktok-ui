import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button({
    to,
    href,
    disabled,
    primary = false,
    outline = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className="btns-link" {...props}>
            <span>{children}</span>
        </Comp>
    );
}
