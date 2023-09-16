import styles from "./main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDribbble,
  faLinkedin,
  faMedium,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPalette,
  faIcons,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { clsx } from "clsx";
import { ResponsiveImg } from "~/ui/general/img/ResponsiveImg";

export const Main: React.FC = () => (
  <>
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <ResponsiveImg
          {...{
            img: {
              src: "/image-logo.svg",
              alt: "logo",
            },
            width: {
              s: "40px",
              m: "60px",
              l: "40px",
            },
            height: {
              s: "25px",
              m: "37px",
              l: "25px",
            },
          }}
        />
        <span className={styles.headerLogoTitle}>Designer/Developer</span>
      </div>
      <div className={styles.headerNav}>
        <ul className={styles.headerNavMenu}>
          <li className={styles.headerNavMenuItem}>
            <NextLink href="#home">Home</NextLink>
          </li>
          <li className={styles.headerNavMenuItem}>
            <NextLink href="#works">Works</NextLink>
          </li>
          <li className={styles.headerNavMenuItem}>
            <NextLink href="#about">About</NextLink>
          </li>
          <li className={styles.headerNavMenuItem}>
            <NextLink href="#contact">Contact</NextLink>
          </li>
        </ul>
      </div>
    </header>

    <main id="home" className={styles.main}>
      <section className={styles.mainHero}>
        <div className={clsx(styles.container, styles.mainHeroContainer)}>
          <div className={styles.mainHeroHighlight}>
            <h1>
              I&apos;m <strong>Elle Kasai</strong>, a
              <strong>designer/developer</strong> based in Vancouver, Canada.
            </h1>

            <div className={styles.mainHeroHighlightLinks}>
              <p>
                このポートフォリオサイトのコードは
                {/* TODO next link */}
                <a href="#" target="_blank">
                  こちら
                </a>
                にまとまっています｡
                <br />
                お問い合わせは<a href="#contact"></a>
                コンタクトフォームからどうぞ :)
              </p>
            </div>

            <ul className={styles.socialLinks}>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="sm"
                    icon={faGithub}
                  />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="sm"
                    icon={faDribbble}
                  />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="sm"
                    icon={faLinkedin}
                  />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="sm"
                    icon={faMedium}
                  />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="sm"
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="sm"
                    icon={faYoutube}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.mainHeroImgWrapper}>
            <ResponsiveImg
              {...{
                img: {
                  src: "/akira-toriyama.jpg",
                  alt: "profile",
                  className: styles["mainHeroImgWrapper--tablet"],
                },
                width: {
                  s: "200px",
                  m: "255px",
                  l: "200px",
                },
                height: {
                  s: "200px",
                  m: "255px",
                  l: "200px",
                },
              }}
            />
          </div>
        </div>
      </section>

      <section id="works" className={styles.mainWorks}>
        <h2>
          <FontAwesomeIcon icon={faPalette} />
          Works
        </h2>
        <div className={styles.container}>
          <div className={styles.mainWorksItem}>
            <div className={styles.mainWorksItemImgWrapper}>
              <ResponsiveImg
                {...{
                  img: {
                    src: "/image-work-a3.jpg",
                    alt: "Work A",
                    className: clsx(
                      styles.mainWorksItemImgInner,
                      styles["mainWorksItemImg--primary"],
                    ),
                  },
                  wrapper: {
                    className: styles.mainWorksItemImg,
                  },
                  width: {
                    s: "335px",
                    m: "315px",
                    l: "335px",
                  },
                  height: {
                    s: "230px",
                    m: "220px",
                    l: "230px",
                  },
                }}
              />
            </div>

            <div className={styles.mainWorksItemText}>
              <h3>過去のお仕事 1</h3>
              <p>
                この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              </p>
              <p>
                この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              </p>
              {/* TODO next link */}
              <a
                href="work.html"
                className={clsx(styles.button, styles["button--primary"])}
              >
                もっと読む
              </a>
            </div>
          </div>
          <div className={styles.mainWorksItem}>
            <div className={styles.mainWorksItemImgWrapper}>
              <ResponsiveImg
                {...{
                  img: {
                    src: "/image-work-b.jpg",
                    alt: "Work B",
                    className: clsx(
                      styles.mainWorksItemImgInner,
                      styles["mainWorksItemImg--secondary"],
                    ),
                  },
                  wrapper: {
                    className: styles.mainWorksItemImg,
                  },
                  width: {
                    s: "335px",
                    m: "335px",
                    l: "335px",
                  },
                  height: {
                    s: "230px",
                    m: "230px",
                    l: "230px",
                  },
                }}
              />
            </div>
            <div className={styles.mainWorksItemText}>
              <h3>過去のお仕事 2</h3>
              <p>
                この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              </p>
              <p>
                この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              </p>
              {/* TODO next link */}
              <a
                href="work.html"
                className={clsx(styles.button, styles["button--secondary"])}
              >
                もっと読む
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.mainAbout}>
        <h2>
          <FontAwesomeIcon icon={faIcons} />
          About
        </h2>

        <div className={styles.mainAboutImg}>
          <ResponsiveImg
            {...{
              img: {
                src: "/akira-toriyama.jpg",
                alt: "profile",
                className: styles["mainAboutImg--mobil"],
              },
              wrapper: {
                className: styles["mainAboutImg--me"],
              },
              width: {
                s: "200px",
                m: "200px",
                l: "200px",
              },
              height: {
                s: "200px",
                m: "200px",
                l: "200px",
              },
            }}
          />
          <ResponsiveImg
            {...{
              img: {
                src: "/image-about.jpg",
                alt: "profile",
              },
              wrapper: {
                className: styles["mainAboutImg--about"],
              },
              width: {
                s: "768px",
                m: "768px",
                l: "768px",
              },
              height: {
                s: "300px",
                m: "300px",
                l: "300px",
              },
            }}
          />
        </div>

        <div className={clsx(styles.container, styles.mainAboutContainer)}>
          <div className={styles.mainAboutDescription}>
            <h3>自己紹介</h3>
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
          </div>
          <div className={styles.mainAboutAddition}>
            <h3>スキルセット</h3>
            <div className={styles.mainAboutAdditionSkills}>
              <ul>
                <li>UI/UX デザイン</li>
                <li>情報設計</li>
                <li>マーケティング</li>
              </ul>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
              <ul>
                <li>IT講師</li>
                <li>IT技術書執筆</li>
                <li>動画編集</li>
              </ul>
            </div>

            <h3>関連リンク</h3>
            <div className={styles.mainAboutAdditionFollow}>
              <ul className={styles.socialLinks}>
                <li>
                  {/* TODO NextLink */}
                  <a href="" target="_blank">
                    <FontAwesomeIcon
                      className={styles.mainAboutAdditionFollowIcon}
                      icon={faGithub}
                    />
                  </a>
                </li>
                <li>
                  {/* TODO NextLink */}
                  <a href="" target="_blank">
                    <FontAwesomeIcon
                      className={styles.mainAboutAdditionFollowIcon}
                      icon={faDribbble}
                    />
                  </a>
                </li>
                <li>
                  {/* TODO NextLink */}
                  <a href="" target="_blank">
                    <FontAwesomeIcon
                      className={styles.mainAboutAdditionFollowIcon}
                      icon={faLinkedin}
                    />
                  </a>
                </li>
                <li>
                  {/* TODO NextLink */}
                  <a href="" target="_blank">
                    <FontAwesomeIcon
                      className={styles.mainAboutAdditionFollowIcon}
                      icon={faMedium}
                    />
                  </a>
                </li>
                <li>
                  {/* TODO NextLink */}
                  <a href="" target="_blank">
                    <FontAwesomeIcon
                      className={styles.mainAboutAdditionFollowIcon}
                      icon={faYoutube}
                    />
                  </a>
                </li>
                <li>
                  {/* TODO NextLink */}
                  <a href="" target="_blank">
                    <FontAwesomeIcon
                      className={styles.mainAboutAdditionFollowIcon}
                      icon={faTwitter}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact" className={styles.footer}>
      <div className={clsx(styles.container, styles.footerContainer)}>
        <div className={styles.footerForm}>
          <p>お仕事のご依頼やご相談等､お問い合わせはこちらからどうぞ｡</p>
          <form>
            <div className={styles.footerFormInput}>
              <FontAwesomeIcon
                className={styles.footerFormInputIcon}
                icon={faUser}
              />
              <input type="text" placeholder="氏名" />
            </div>

            <div className={styles.footerFormInput}>
              <FontAwesomeIcon
                className={styles.footerFormInputIcon}
                icon={faEnvelope}
              />
              <input type="email" placeholder="メールアドレス" />
            </div>

            <div className={styles.footerFormTextArea}>
              <textarea placeholder="お問い合わせ内容"></textarea>
            </div>
            <input
              type="submit"
              value="送信する"
              className={clsx(styles.button, styles["button--primary"])}
            />
          </form>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.footerInfoNav}>
            <ResponsiveImg
              {...{
                img: {
                  src: "/image-logo.svg",
                  alt: "logo",
                },
                width: {
                  s: "60px",
                  m: "60px",
                  l: "60px",
                },
                height: {
                  s: "38px",
                  m: "38px",
                  l: "38px",
                },
              }}
            />
            <nav className={styles.footerInfoNavMenu}>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#works">Works</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footerInfoFollow}>
            <ul className={styles.socialLinks}>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="xs"
                    icon={faGithub}
                  />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="xs"
                    icon={faDribbble}
                  />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="xs"
                    icon={faLinkedin}
                  />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="xs"
                    icon={faMedium}
                  />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="xs"
                    icon={faYoutube}
                  />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon
                    className={styles.socialLinksIcon}
                    size="xs"
                    icon={faTwitter}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerInfoCopy}>
            <small>© 2022 Elle Kasai. All Rights Reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  </>
);
