import classNames from 'classnames/bind';
import styles from './Popup.module.sass';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

type PopupProps = {
    show: boolean;
    onClose: () => void;
    header?: string;
    children: React.ReactNode;
};

function Popup({ show, onClose, header, children }: PopupProps) {
    if (!show) {
        return null;
    }

    return (
        <div className={cx('overlay')} >
            <div className={cx('wrapper')}>
                <div className={cx('popup-close')} onClick={onClose}><Button lefticon={<FontAwesomeIcon icon={faClose} />}></Button></div>
                <h3 className={cx('header')}>{header}</h3>
                <div className={cx('content')}>{children}</div>
                <div className={cx('action')}>
                    <Button primary="true" onClick={onClose}>OK</Button>
                    <Button secondary="true" onClick={onClose}>Huỷ</Button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
