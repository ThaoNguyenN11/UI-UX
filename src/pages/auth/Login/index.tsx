import classNames from 'classnames/bind';
import styles from './Login.module.sass';
import TextField from '../../../components/TextField';
import config from '../../../config';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('background')} src={import.meta.env.BASE_URL + 'images/primaryBG.png'} alt="" />
            <div className={cx('form')}>
                <div className={cx('item')}>
                    <div className={cx('form-content')}>
                        <h2>Đăng nhập</h2>
                        <div className={cx('content-item')}>
                            <h4>Email</h4>
                            <TextField type="text" />
                            <h4>Mật khẩu</h4>
                            <TextField type="password" />
                        </div>
                        <Button none='true' to={config.routes.login}>Quên mật khẩu</Button>
                        <Button to={config.routes.home} primary="true" type='submit'>Đăng nhập</Button>
                        <h4>Hoặc</h4>
                        <div className={cx('login-option')}>
                            <Button outline="true">
                                <div className={cx('platform')}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <h4>Đăng nhập với Facebook</h4>
                                </div>
                            </Button>
                            <Button outline="true">
                                <div className={cx('platform')}>
                                    <FontAwesomeIcon icon={faGoogle} />
                                    <h4>Đăng nhập với Google</h4>
                                </div>
                            </Button>
                            <Button outline="true">
                                <div className={cx('platform')}>
                                    <FontAwesomeIcon icon={faMicrosoft} />
                                    <h4>Đăng nhập với Microsoft</h4>
                                </div>
                            </Button>
                        </div>
                        <Button none='true' to={config.routes.register}>Tạo tài khoản mới</Button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src={import.meta.env.BASE_URL + 'images/login2.png'} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
