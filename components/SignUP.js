import React, { useState } from 'react';
import styles from '../styles/SignUp.module.css';
import Image from 'next/image';
import Login from './Login';

function SignUP(props) {
  const [modal1, setModal1] = useState(false);

  const signInHandler = () => {
    setModal1(true);
  };
  const backdropHandler1 = () => {
    setModal1(null);
  };

  return (
    <div>
      {modal1 && <Login onSure={backdropHandler1}></Login>}
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navhead}>
            {`Let's`} learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
        </div>
        <div>
          <span className={styles.head}>Create Account</span>
          <span className={styles.login}>
            Already have an account?
            <button
              href="#"
              style={{
                color: 'blue',
                border: 'none',
                backgroundColor: 'transparent',
              }}
              onClick={signInHandler}
            >
              Sign In
            </button>{' '}
          </span>
        </div>
        <div>
          <span className={styles.table}>
            <form>
              <div className={styles.box1}>
                <span className={styles.box11}>
                  <input
                    type="text"
                    placeholder="First Name"
                    id="fname"
                    name="firstname"
                    style={{ width: 90, border: 'none' }}
                  ></input>
                </span>
                <span className={styles.br}></span>
                <span className={styles.box12}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lname"
                    name="lastname"
                    style={{ width: 90, border: 'none' }}
                  ></input>
                </span>
              </div>
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
              <div className={styles.box4}>
                <input
                  type="password"
                  placeholder="Confirm Password"
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
          <div className={styles.disclaimer}>
            By signing up, you agree to our Terms & conditions, Privacy policy
          </div>
          <div className={styles.accountbtn}>
            <button className={styles.acntbtn}>Create Account</button>
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

export default SignUP;
