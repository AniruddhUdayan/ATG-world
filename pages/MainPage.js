import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/MainPage.module.css';
import data from '../utils/data';
import SignUP from '../components/SignUP';
import Login from '../components/Login';

function MainPage() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const logInHandler = () => {
    setModal1(true);
  };

  const backdropHandler = () => {
    setModal(null);
  };
  const backdropHandler1 = () => {
    setModal1(null);
  };

  return (
    <div>
      {modal1 && <Login onSure={backdropHandler1}></Login>}
      {modal && <SignUP onConfirm={backdropHandler}></SignUP>}
      <div>
        <div className={styles.img}>
          <img src="/Images/Rectangle2.png" alt="/"></img>
          {/* <Image
            src="/Images/Rectangle2.png"
            alt="image"
            width={1440}
            height={400}
          ></Image> */}
        </div>
        <div className={styles.head}>Computer Engineering</div>
        <div className={styles.txt}>142,765 Computer Engineers follow this</div>
      </div>
      <div className={styles.container}>
        <div className={styles.box1}>
          <div className={styles.tab}>
            <ul className={styles.ul}>
              <a href="#">
                <li className={styles.li1}>All Posts(32)</li>
              </a>
              <a href="#">
                <li className={styles.li}>Event</li>
              </a>
              <a href="#">
                <li className={styles.li}>Education</li>
              </a>
              <a href="#">
                <li className={styles.li}>Job</li>
              </a>
              <a href="#">
                <li className={styles.li}>Article</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.btn}>
            <div>
              <button className={styles.dropbtn}>
                Write a post
                <span style={{ paddingLeft: 15 }}>
                  <Image
                    src="/Icons/drop.png"
                    alt="/"
                    width={9.17}
                    height={4.58}
                  ></Image>
                </span>
              </button>
            </div>
            <div>
              <button className={styles.iconbtn} onClick={logInHandler}>
                <span style={{ paddingRight: 6 }}>
                  <Image
                    src="/Icons/group.png"
                    alt="/"
                    width={22}
                    height={11.92}
                  ></Image>
                </span>
                Join Group
              </button>
            </div>
          </div>
          <div className={styles.location}>
            <span>
              <Image
                src="/Icons/location.png"
                alt="/"
                width={12.5}
                height={15}
              ></Image>
            </span>
            <span className={styles.locationHead}>Noida,India</span>
            <span className={styles.pencil}>
              <Image
                src="/Icons/Pencil.png"
                alt="/"
                width={15}
                height={15}
              ></Image>
            </span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.location1}>
            <span>
              <Image
                src="/Icons/!.png"
                alt="/"
                width={13.33}
                height={13.33}
              ></Image>
            </span>
            <span className={styles.locationtxt}>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
        </div>
        <span className={styles.linebrB}></span>
        <span className={styles.linebr}></span>
        <div className={styles.card1}>
          {data.posts1.map((post) => (
            <div className={styles.card} key={post.user}>
              <div className={styles.pic}>
                <Image
                  src={post.image}
                  alt="/"
                  width={692}
                  height={200}
                ></Image>
              </div>
              <div className={styles.grid}>
                <div className={styles.subject}>
                  <Image
                    src={post.subjectIcon}
                    alt="/"
                    width={77}
                    height={20}
                  ></Image>
                </div>
                <div className={styles.heading}>
                  <div className={styles.h1}>{post.heading}</div>
                  <div>
                    <button className={styles.dots}>
                      <Image
                        src={post.btn}
                        alt="/"
                        width={18.67}
                        height={4.67}
                      ></Image>
                    </button>
                  </div>
                </div>
                <div className={styles.textarea}>{post.textArea}</div>
                <div className={styles.user}>
                  <div className={styles.imguser}>
                    <Image
                      src={post.userImage}
                      alt="/"
                      width={48}
                      height={48}
                    ></Image>
                  </div>
                  <div className={styles.name}>{post.user}</div>
                  <div className={styles.view}>
                    <Image
                      src={post.viewIcon}
                      alt="/"
                      width={28.25}
                      height={10.75}
                    ></Image>
                    <div className={styles.views}>{post.views}</div>
                  </div>
                  <div className={styles.share}>
                    <Image
                      src={post.shareIcon}
                      alt="/"
                      width={13.5}
                      height={14.94}
                      style={{ padding: 10 }}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.card2}>
          {data.posts2.map((post) => (
            <div className={styles.card} key={post.user}>
              <div className={styles.pic}>
                <Image
                  src={post.image}
                  alt="/"
                  width={692}
                  height={200}
                ></Image>
              </div>
              <div className={styles.grid}>
                <div className={styles.subject}>
                  <Image
                    src={post.subjectIcon}
                    alt="/"
                    width={77}
                    height={20}
                  ></Image>
                </div>
                <div className={styles.heading}>
                  <div className={styles.h1}>{post.heading}</div>
                  <div>
                    <button className={styles.dots}>
                      <Image
                        src={post.btn}
                        alt="/"
                        width={18.67}
                        height={4.67}
                      ></Image>
                    </button>
                  </div>
                </div>
                <div className={styles.textarea}>{post.textArea}</div>
                <div className={styles.user}>
                  <div className={styles.imguser}>
                    <Image
                      src={post.userImage}
                      alt="/"
                      width={48}
                      height={48}
                    ></Image>
                  </div>
                  <div className={styles.name}>{post.user}</div>
                  <div className={styles.view}>
                    <Image
                      src={post.viewIcon}
                      alt="/"
                      width={28.25}
                      height={10.75}
                    ></Image>
                    <div className={styles.views}>{post.views}</div>
                  </div>
                  <div className={styles.share}>
                    <Image
                      src={post.shareIcon}
                      alt="/"
                      width={13.5}
                      height={14.94}
                      style={{ padding: 10 }}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.card3}>
          {data.posts3.map((post) => (
            <div className={styles.card} key={post.user}>
              <div className={styles.pic}>
                <Image
                  src={post.image}
                  alt="/"
                  width={692}
                  height={200}
                ></Image>
              </div>
              <div className={styles.grid}>
                <div className={styles.subject}>
                  <Image
                    src={post.subjectIcon}
                    alt="/"
                    width={77}
                    height={20}
                  ></Image>
                </div>
                <div className={styles.heading}>
                  <div className={styles.h1}>{post.heading}</div>
                  <div>
                    <button className={styles.dots}>
                      <Image
                        src={post.btn}
                        alt="/"
                        width={18.67}
                        height={4.67}
                      ></Image>
                    </button>
                  </div>
                </div>
                <div className={styles.textarea}>{post.textArea}</div>
                <div className={styles.user}>
                  <div className={styles.imguser}>
                    <Image
                      src={post.userImage}
                      alt="/"
                      width={48}
                      height={48}
                    ></Image>
                  </div>
                  <div className={styles.name}>{post.user}</div>
                  <div className={styles.view}>
                    <Image
                      src={post.viewIcon}
                      alt="/"
                      width={28.25}
                      height={10.75}
                    ></Image>
                    <div className={styles.views}>{post.views}</div>
                  </div>
                  <div className={styles.share}>
                    <Image
                      src={post.shareIcon}
                      alt="/"
                      width={13.5}
                      height={14.94}
                      style={{ padding: 10 }}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
