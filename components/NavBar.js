import React, { useState } from 'react';
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import SignUP from './SignUP';

function NavBar() {
  const [modal, setModal] = useState(false);

  const signUpHandler = () => {
    setModal(true);
  };
  const backdropHandler = () => {
    setModal(false);
  };
  return (
    <div>
      {modal && <SignUP onConfirm={backdropHandler}></SignUP>}
      <div className={styles.navBar}>
        <nav className="navbar">
          <div className="container-fluid">
            <div className={styles.navM}>
              <a className="navbar-brand" href="#">
                <span>
                  <Image
                    src="/Icons/arrow.png"
                    width={16}
                    height={16}
                    alt="/"
                  ></Image>
                </span>
              </a>
              <div className={styles.joinbtn}>
                <button className={styles.btn} onClick={signUpHandler}>
                  Join Group
                </button>
              </div>
            </div>
            <div className={styles.head}>
              <a className="navbar-brand" href="#">
                <span>
                  <Image
                    src="/Icons/A.png"
                    width={18}
                    height={21}
                    alt="/"
                  ></Image>
                </span>
                <span>
                  <Image
                    src="/Icons/T.png"
                    width={18}
                    height={21}
                    alt="/"
                  ></Image>
                </span>
                <span>
                  <Image
                    src="/Icons/gw.png"
                    width={18}
                    height={21}
                    alt="/"
                  ></Image>
                </span>
                <span>.</span>
                <span>
                  <Image
                    src="/Icons/W.png"
                    width={27.89}
                    height={28.6}
                    alt="/"
                  ></Image>
                </span>
                <span>
                  <Image
                    src="/Icons/O.png"
                    width={24.98}
                    height={27}
                    alt="/"
                  ></Image>
                </span>
                <span>
                  <Image
                    src="/Icons/R.png"
                    width={15.2}
                    height={21.3}
                    alt="/"
                  ></Image>
                </span>
                <span>
                  <Image
                    src="/Icons/L.png"
                    width={13.21}
                    height={21.22}
                    alt="/"
                  ></Image>
                </span>
                <span>
                  <Image
                    src="/Icons/D.png"
                    width={16.21}
                    height={21.23}
                    alt="/"
                  ></Image>
                </span>
              </a>
              <span className={styles.searchBox}>
                <span className={styles.searchIcon}>
                  <Image
                    src="/Icons/Vector.png"
                    width={16.21}
                    height={16.23}
                    alt="/"
                  ></Image>
                </span>
                <span className={styles.input}>
                  Search for your favourite group in ATG.
                </span>
                {/* <span className={styles.input}>
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Type to search..."
                ></input> 
              </span>*/}
              </span>
              <span className={styles.register}>
                Create account.
                <span style={{ color: 'blue' }}>Its free</span>
                <span>
                  <span className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={signUpHandler}
                    ></button>
                    <ul className="dropdown-menu"></ul>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
