import classNames from 'classnames/bind';
import styles from './Register.module.sass';
import TextField from '../../../components/TextField';
import config from '../../../config';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('background')} src={import.meta.env.BASE_URL + 'images/primaryBG.png'} alt="" />
            <div className={cx('form')}>
                <div className={cx('item')}>
                    <img src={import.meta.env.BASE_URL + 'images/login2.png'} alt="" />
                </div>
                <div className={cx('item')}>
                    <div className={cx('form-content')}>
                        <h2>Đăng ký</h2>
                        <div className={cx('content-item')}>
                            <h4>Họ và tên</h4>
                            <TextField type="text" />
                            <h4>Email</h4>
                            <TextField type="text" />
                            <h4>Mật Khẩu</h4>
                            <TextField type="password" />
                            <h4>Nhập lại mật khẩu</h4>
                            <TextField type="password" />
                        </div>
                        <Button to={config.routes.login} primary="true">Đăng ký</Button>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h4>Đã có tài khoản ?</h4>
                            <Button none="true" to={config.routes.login}>
                                Đăng nhập
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
