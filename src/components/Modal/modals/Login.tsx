import Image from 'next/image';
import Link from 'next/link';

import Hello from '@assets/images/Hello.png';
import Button from '@components/Button';
import Icon from '@components/Icon';

import ModalContainer from '../components/ModalContainer';
import * as styles from '../style.css';

const Login = () => {
  return (
    <ModalContainer type="login">
      <div className={styles.helloImage}>
        <Image src={Hello} alt="안녕하세요" />
      </div>
      <div className={styles.loginTitleWrapper}>
        <span className={styles.loginTitle}>
          바로 <span className={styles.loginTitleBlack}>시작하기</span>
        </span>
        <span className={styles.loginDescription}>
          지금 로그인하고 문장을 검증하고 참고해보세요!
        </span>
      </div>
      <div className={styles.loginButtonsWrapper}>
        <Button className={styles.googleLogin}>
          <div className={styles.googleIcon}>
            <Icon icon="google" width={18} height={18} />
          </div>
          구글로 로그인하기
        </Button>
        <Button className={styles.naverLogin}>
          <div className={styles.naverIcon}>
            <Icon icon="naver" width={15} height={14} />
          </div>
          네이버로 로그인하기
        </Button>
        <Button className={styles.kakaoLogin}>
          <div className={styles.kakaoIcon}>
            <Icon icon="kakao" width={19} height={18} />
          </div>
          카카오로 로그인하기
        </Button>
      </div>
      <div className={styles.agreeDescription}>
        로그인은{' '}
        <Link className={styles.agreeLink} href="/">
          개인정보처리방침
        </Link>
        과{' '}
        <Link className={styles.agreeLink} href="/">
          이용약관
        </Link>
        에 동의하는 것을 의미합니다.
      </div>
    </ModalContainer>
  );
};

export default Login;