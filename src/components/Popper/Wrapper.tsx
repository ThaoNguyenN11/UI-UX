import classNames from "classnames/bind";
import styles from './Popper.module.sass'
import { ReactNode } from "react";

const cx = classNames.bind(styles)

type Props = {
    children : ReactNode;
    color? : string;
}

function Wrapper({ children, color } : Props) {

    const classes = cx('wrapper', {
        bgColor : color
    })

    return <div className={classes}>{children}</div>
}

export default Wrapper;