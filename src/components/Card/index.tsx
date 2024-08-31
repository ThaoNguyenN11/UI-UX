import classNames from 'classnames/bind';
import styles from './Card.module.sass';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

type CardProps = {
    children: ReactNode;
    leftIllus?: ReactNode;
    rightIllus?: ReactNode;
    background?: string;
    bgcolor?: string
};

function Card({ background, children, leftIllus, rightIllus, bgcolor }: CardProps) {

    const classes = cx('wrapper', bgcolor)

    return (
        <div className={classes}>
            {background && (
                <div className={cx('background')}>
                    <img src={background} alt="background" />
                </div>
            )}
            <div className={cx('content')}>
                {leftIllus && <span className={cx('illustrator')}>{leftIllus}</span>}
                <div className={cx('title')}>{children}</div>
                {rightIllus && <span className={cx('illustrator')}>{rightIllus}</span>}
            </div>
        </div>
    );
}

export default Card;
