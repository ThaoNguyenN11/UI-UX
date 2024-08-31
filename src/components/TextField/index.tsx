import classNames from "classnames/bind";
import styles from './TextField.module.sass'

const cx = classNames.bind(styles)

type TextFieldProps = {
    type: string
    placeholder?: string
    small? : boolean
    require? : boolean

}


function TextField({ type, placeholder, small } : TextFieldProps) {
    
    const classes = cx('wrapper', {
        small : small,
    })

    return ( 
        <input className={classes} type={type} placeholder={placeholder} required/>
     );
}

export default TextField;