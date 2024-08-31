import classNames from 'classnames/bind'
import styles from './Status.module.sass'
import { ReactNode } from 'react'

const cx = classNames.bind(styles)

type StatusProps = {
    title : ReactNode
    option1? : string
    option2? : string
    option3? : string
}


function Status({ title, option1, option2, option3 } : StatusProps) {

    const props = {option1, option2, option3}
    
    const classes = cx('status', {
        option1: option1,
        option2: option2,
        option3: option3,
    })

    return (
        <div className={classes} {...props}>
            <span className={cx('title')}>{title}</span>
        </div>
    )
}

export default Status;