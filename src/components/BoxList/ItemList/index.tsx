import classNames from "classnames/bind";
import styles from './ItemList.module.sass'
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

type Props = {
    children : ReactNode;
    to? : string
    lefticon? : ReactNode
}

function ItemList({ children, lefticon, to } : Props) {

    let Comp: React.ElementType = 'div';

    const props = {to}

    if (to) {
        Comp = Link;
    }

    return <Comp className={cx('wrapper')} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('content')}>{children}</span>
        </Comp>
}

export default ItemList;