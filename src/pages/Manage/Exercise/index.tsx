import classNames from 'classnames/bind';
import styles from './Exercise.module.sass';
import Status from '../../../components/Status';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faChevronRight, faFileArrowUp, faGraduationCap, faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/Card';
import { useState } from 'react';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup';
import TextField from '../../../components/TextField';
import BoxList from '../../../components/BoxList';
import ItemList from '../../../components/BoxList/ItemList';

const cx = classNames.bind(styles);

function Exercise() {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(prevShowPopup => !prevShowPopup);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <h2 className={cx('heading-text')}>
                    Quản lý KPI
                    <Link to={config.routes.manage} className={cx('overlay-link')}></Link>
                </h2>
                <FontAwesomeIcon icon={faChevronRight} />
                <h2 className={cx('heading-text')}>Rèn luyện</h2>
            </div>
            <div className={cx('exercise')}>
                <Card rightIllus={<img src={import.meta.env.BASE_URL + 'images/illustration3.png'} />}>
                    <div>
                        <h2>RÈN LUYỆN</h2>
                        <p>Chăm chỉ rèn luyện mỗi ngày</p>
                    </div>
                    <Status option3="true" title="5 Mục tiêu" />
                </Card>
                <Link to={config.routes.exercise} className={cx('overlay-link')}></Link>
            </div>
            <div className={cx('action')}>
                <Button primary="true" onClick={togglePopup} lefticon={<FontAwesomeIcon icon={faPlus} />}>
                    Mục tiêu mới
                </Button>
                <Popup header="Thêm mục tiêu" show={showPopup} onClose={togglePopup}>
                    <div className={cx('popup-content-item')}>
                        <h4>Tên mục tiêu</h4>
                        <TextField type="text" />
                    </div>
                    <div className={cx('popup-content-item')}>
                        <h4>Mô tả</h4>
                        <TextField type="text" />
                    </div>
                    <div className={cx('popup-content-item')}>
                        <h4>Thiết lập chỉ số đánh giá</h4>
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
                        <Button light="true" lefticon={<FontAwesomeIcon icon={faPlus} />}>
                            Thêm chỉ số đánh giá
                        </Button>
                    </div>
                    <div className={cx('popup-content-item')}>
                        <h4>Thiết lập thời hạn</h4>
                        <div className={cx('popup-date')}>
                            <div className={cx('popup-date-picker')}>
                                <p>Bắt đầu</p>
                                <TextField type="date" />
                            </div>
                            <div className={cx('popup-date-picker')}>
                                <p>Kết thúc</p>
                                <TextField type="date" />
                            </div>
                        </div>
                    </div>
                </Popup>
                <Button primary="true" lefticon={<FontAwesomeIcon icon={faFileArrowUp} />}>
                    Tải tệp tin
                </Button>
            </div>
            <div className={cx('target')}>
                <BoxList heading="Mục tiêu thiết lập">
                    <ItemList to={config.routes.details} lefticon={<FontAwesomeIcon icon={faGraduationCap} />}>
                        <div className={cx('title')}>
                            <h3>Thể thao</h3>
                            <div className={cx('duration')}>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <p>12/02/2024 - 12/05/2024</p>
                            </div>
                        </div>
                        <div className={cx('target-action')}>
                            <button>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button style={{ color: '#FF7039', marginRight: '10px' }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </ItemList>
                    <ItemList to={config.routes.details} lefticon={<FontAwesomeIcon icon={faGraduationCap} />}>
                        <div className={cx('title')}>
                            <h3>Lỗi sống</h3>
                            <div className={cx('duration')}>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <p>01/02/2024 - 31/06/2024</p>
                            </div>
                        </div>
                        <div className={cx('target-action')}>
                            <button>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button style={{ color: '#FF7039', marginRight: '10px' }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </ItemList>
                    <ItemList to={config.routes.details} lefticon={<FontAwesomeIcon icon={faGraduationCap} />}>
                        <div className={cx('title')}>
                            <h3>Hoạt động XH</h3>
                            <div className={cx('duration')}>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <p>01/02/2024 - 31/06/2024</p>
                            </div>
                        </div>
                        <div className={cx('target-action')}>
                            <button>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button style={{ color: '#FF7039', marginRight: '10px' }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </ItemList>
                </BoxList>
            </div>
        </div>
    );
}

export default Exercise;
