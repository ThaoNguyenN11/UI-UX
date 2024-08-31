import classNames from "classnames/bind";
import { ReactNode } from "react";
import Header from "../components/Header";
import styles from './DefaultLayout.module.sass'
import Sidebar from "../components/Sidebar";

const cx = classNames.bind(styles)

type Props = {
    children : ReactNode;
}

function DefaultLayout({ children } : Props) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}><Header /></div>
            <div className={cx('sidebar')}><Sidebar /></div>
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;