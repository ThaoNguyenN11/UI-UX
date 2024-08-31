import classNames from "classnames/bind";
import styles from './BoxList.module.sass'
import { ReactNode } from "react";

const cx = classNames.bind(styles)

type Props = {
    children : ReactNode;
    heading? : string
}

function BoxList({ children, heading } : Props) {
    return <div className={cx('wrapper')}>
        <h3 className={cx('heading')}>{heading}</h3>
        <div className={cx('content')}>{children}</div>
        </div>
}

export default BoxList;