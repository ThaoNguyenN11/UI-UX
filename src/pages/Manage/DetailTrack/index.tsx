import classNames from 'classnames/bind';
import styles from './DetailTrack.module.sass';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../../config';
import { faChevronRight, faGraduationCap, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import Tabs from './Tabs';
import { useState } from 'react';
import Popup from '../../../components/Popup';
import TextField from '../../../components/TextField';

const cx = classNames.bind(styles);

function DetailTrack() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <h2 className={cx('heading-text')}>
                    Quản lý KPI
                    <Link to={config.routes.manage} className={cx('overlay-link')}></Link>
                </h2>
                <FontAwesomeIcon icon={faChevronRight} />
                <h2 className={cx('heading-text')}>
                    Học tập
                    <Link to={config.routes.education} className={cx('overlay-link')}></Link>
                </h2>
                <FontAwesomeIcon icon={faChevronRight} />
                <h2 className={cx('heading-text')}>Tiếng Nhật</h2>
            </div>
            <div className={cx('card')}>
                <FontAwesomeIcon className={cx('card-icon')} icon={faGraduationCap} />
                <div className={cx('card-content')}>
                    <div className={cx('content-header')}>
                        <h3>Tiếng Nhật</h3>
                        <Button primary="true" onClick={togglePopup} lefticon={<FontAwesomeIcon icon={faSquarePen} />}>
                            Cập nhật tiến độ
                        </Button>
                        <Popup header="Cập nhật tiến độ - Hôm nay, 23:30" show={showPopup} onClose={togglePopup}>
                            <div className={cx('popup-content')}>
                                <div className={cx('popup-content-inner')}>
                                    <h3>Tiếng Nhật</h3>
                                    <div className={cx('popup-target')}>
                                        <p className={cx('popup-target-name')}>Số giờ học trên lớp:</p>
                                        <TextField small type="text" />
                                        <p>Giờ / Tuần</p>
                                    </div>
                                    <div className={cx('popup-target')}>
                                        <p className={cx('popup-target-name')}>Số giờ tự học:</p>
                                        <TextField small type="text" />
                                        <p>Giờ / Tuần</p>
                                    </div>
                                    <div className={cx('popup-target')}>
                                        <p className={cx('popup-target-name')}>Số giờ thí nghiệm / thực hành:</p>
                                        <TextField small type="text" />
                                        <p>Giờ / Tuần</p>
                                    </div>
                                    <div className={cx('popup-target')}>
                                        <p className={cx('popup-target-name')}>Số giờ làm bài tập:</p>
                                        <TextField small type="text" />
                                        <p>Giờ / Tuần</p>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </div>
                    <div className={cx('content-wrapper')}>
                        <div className={cx('inner')}>
                            <b>Mô tả</b>
                            <p>Thời gian học : 2 buổi / tuần lúc 10 giờ</p>
                        </div>
                        <div className={cx('inner')}>
                            <b>Thời gian bắt đầu</b>
                            <p>23/02/2024, 10:34 PM</p>
                        </div>
                        <div className={cx('inner')}>
                            <b>Thời gian kết thúc</b>
                            <p>23/02/2024, 10:34 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('detail')}>
                <Tabs />
                <div className={cx('tab-content')}></div>
            </div>
        </div>
    );
}

export default DetailTrack;
