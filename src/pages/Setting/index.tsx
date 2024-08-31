import classNames from 'classnames/bind';
import styles from './Setting.module.sass';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faKey, faTrophy, faUserPen } from '@fortawesome/free-solid-svg-icons';
import DoughnutChart from '../../components/Chart/DoughnutChart';
import Switch from '@mui/material/Switch';
import Popup from '../../components/Popup';
import TextField from '../../components/TextField';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Setting() {

    const [changePw, setChangePw] = useState(false);

    const toggleChangePw = () => {
        setChangePw(!changePw);
    };

    const [editProfile, setEditProfile] = useState(false);

    const toggleEditProfile = () => {
        setEditProfile(!editProfile);
    };



    return (
        <div className={cx('wrapper')}>
            <h2>Cài đặt</h2>
            <div className={cx('profile')}>
                <div className={cx('image')}>
                    <div className={cx('avatar')}>
                        <img src={import.meta.env.BASE_URL + 'images/ava.png'} alt="" />
                    </div>
                </div>
                <div className={cx('info')}>
                    <h3>Thông tin tài khoản</h3>
                    <div>
                        <div className={cx('info-content')}>
                            <h4>Họ Tên : Nguyễn Văn Panda</h4>
                            <h4>Email : Panda123@gmail.com</h4>
                        </div>
                        <h4>Số điện thoại : 0123456789</h4>
                    </div>
                    <div className={cx('action')}>
                        <Button primary="true" onClick={toggleChangePw} lefticon={<FontAwesomeIcon icon={faKey} />}>
                            Thay đổi mật khẩu
                        </Button>
                        <Popup header="Thay đổi mật khẩu" show={changePw} onClose={toggleChangePw}>
                            <div className={cx('popup-content-item')}>
                                <h4>Mật khẩu hiện tại</h4>
                                <TextField type="text" />
                            </div>
                            <div className={cx('popup-content-item')}>
                                <h4>Nhập lại mật khẩu</h4>
                                <TextField type="text" />
                            </div>
                        </Popup>
                        <Button primary="true" onClick={toggleEditProfile} lefticon={<FontAwesomeIcon icon={faUserPen} />}>
                            Chỉnh sửa hồ sơ
                        </Button>
                        <Popup header="Cập nhật hồ sơ" show={editProfile} onClose={toggleEditProfile}>
                            <div className={cx('popup-content-item')}>
                                <h4>Họ tên</h4>
                                <TextField type="text" />
                            </div>
                            <div className={cx('popup-content-item')}>
                                <h4>Email</h4>
                                <TextField type="text" />
                            </div>
                            <div className={cx('popup-content-item')}>
                                <h4>Số điện thoại</h4>
                                <TextField type="text" />
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
            <div className={cx('feature')}>
                <div className={cx('card-item')}>
                    <div className={cx('item-header')}>
                        <div className={cx('header-title')}>
                            <h3>Thành tích</h3>
                        </div>
                        <div className={cx('header-image')}>
                            <FontAwesomeIcon icon={faTrophy} size="2x" />
                        </div>
                    </div>
                    <div className={cx('item-content')}>
                        <div className={cx('achieve-item')}>
                            <div className={cx('achieve-title')}>
                                <h4>
                                    <FontAwesomeIcon icon={faTrophy} /> Lính mới
                                </h4>
                                <p>Thiết lập mục tiêu đầu tiên</p>
                            </div>
                            <div className={cx('achieve-chart')}>
                                <DoughnutChart percent={100} color='15, 209, 134'/>
                                <h4 className={cx('data-chart')}>1 / 1</h4>
                            </div>
                        </div>
                        <div className={cx('achieve-item')}>
                            <div className={cx('achieve-title')}>
                                <h4>
                                    <FontAwesomeIcon icon={faTrophy} /> Thông thạo 1
                                </h4>
                                <p>Thiết lập 20 mục tiêu</p>
                            </div>
                            <div className={cx('achieve-chart')}>
                                <DoughnutChart percent={25} color='15, 209, 134'/>
                                <h4 className={cx('data-chart')}>5 / 20</h4>
                            </div>
                        </div>
                        <div className={cx('achieve-item')}>
                            <div className={cx('achieve-title')}>
                                <h4>
                                    <FontAwesomeIcon icon={faTrophy} /> Ong chăm chỉ
                                </h4>
                                <p>Cập nhật tiến độ liên tục trong 7 ngày</p>
                            </div>
                            <div className={cx('achieve-chart')}>
                                <DoughnutChart percent={28.5} color='15, 209, 134'/>
                                <h4 className={cx('data-chart')}>2 / 7</h4>
                            </div>
                        </div>
                        <div className={cx('achieve-item')}>
                            <div className={cx('achieve-title')}>
                                <h4>
                                    <FontAwesomeIcon icon={faTrophy} /> Lính mới
                                </h4>
                                <p>Thiết lập mục tiêu đầu tiên</p>
                            </div>
                            <div className={cx('achieve-chart')}>
                                <DoughnutChart percent={100} color='15, 209, 134'/>
                                <h4 className={cx('data-chart')}>1 / 1</h4>
                            </div>
                        </div>
                        <div className={cx('achieve-item')}>
                            <div className={cx('achieve-title')}>
                                <h4>
                                    <FontAwesomeIcon icon={faTrophy} /> Bản hợp đồng số 1
                                </h4>
                                <p>Nạp lần đầu</p>
                            </div>
                            <div className={cx('achieve-chart')}>
                                <DoughnutChart percent={0} color='15, 209, 134'/>
                                <h4 className={cx('data-chart')}>0 / 1</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('card-item')}>
                    <div className={cx('item-header')}>
                        <div className={cx('header-title')}>
                            <h3>Thông báo</h3>
                        </div>
                        <div className={cx('header-image')}>
                            <FontAwesomeIcon icon={faBell} size="2x" />
                        </div>
                    </div>
                    <div className={cx('item-content')}>
                        <div className={cx('notifi-item')}>
                            <p>Thông báo hoàn thành mục tiêu</p>
                            <Switch color="success" />
                        </div>
                        <div className={cx('notifi-item')}>
                            <p>Thông báo nhắc nhở hàng ngày</p>
                            <Switch color="success" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
