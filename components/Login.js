import React from 'react';
import Image from 'next/image';
import styles from '../styles/Login.module.css';

function Login(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onSure}></div>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navhead}>
            {`Let's`} learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
        </div>
        <div>
          <span className={styles.head}>Sign In</span>
          <span className={styles.login}>
            Don’t have an account yet?
            <a href="#" style={{ color: 'blue' }}>
              Create new for free!
            </a>{' '}
          </span>
        </div>
        <div>
          <span className={styles.table}>
            <form>
              <div className={styles.box2}>
                <div>
                  {' '}
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    style={{ width: 180, border: 'none', paddingTop: 7 }}
                  ></input>
                </div>
              </div>
              <div className={styles.box3}>
                <input
                  type="password"
                  placeholder="Password"
                  id="pass"
                  name="pass"
                  style={{ width: 180, border: 'none', paddingTop: 7 }}
                ></input>
              </div>
            </form>
          </span>
          <span className={styles.img}>
            <Image
              src="/Images/signup.png"
              alt=""
              width={320}
              height={320}
            ></Image>
          </span>
          <div className={styles.accountbtn}>
            <button className={styles.acntbtn}>Sign In</button>
          </div>
        </div>
        <div className={styles.signupbtn}>
          <button className={styles.fb}>
            <div style={{ width: 30 }}>
              <Image
                src="/Icons/fb.png"
                alt="/"
                width={16}
                height={16}
                style={{ marginTop: 5 }}
              ></Image>
            </div>
            <div> Sign up with Facebook</div>
          </button>
          <button className={styles.g}>
            {' '}
            <div style={{ width: 30 }}>
              <Image
                src="/Icons/G.png"
                alt="/"
                width={16}
                height={16}
                style={{ marginTop: 3 }}
              ></Image>
            </div>
            <div> Sign up with Facebook</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
