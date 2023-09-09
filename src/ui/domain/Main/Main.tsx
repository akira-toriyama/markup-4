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
import NextImg from "next/image";
import NextLink from "next/link";
import { clsx } from "clsx";

export const Main: React.FC = () => (
  <>
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <NextImg width={40} height={24.86} src="/image-logo.svg" alt="logo" />
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
        <div className={styles.container}>
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
                  <FontAwesomeIcon color="white" size="sm" icon={faGithub} />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon color="white" size="sm" icon={faDribbble} />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon color="white" size="sm" icon={faLinkedin} />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon color="white" size="sm" icon={faMedium} />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon color="white" size="sm" icon={faTwitter} />
                </a>
              </li>
              <li>
                {/* TODO next link */}
                <a href="" target="_blank">
                  <FontAwesomeIcon color="white" size="sm" icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
          <figure>
            <NextImg
              src="/akira-toriyama.jpg"
              alt="profile"
              width={200}
              height={200}
            />
          </figure>
        </div>
      </section>
      <section id="about" className={styles.mainAbout}>
        <h2>
          <FontAwesomeIcon icon={faIcons} />
        </h2>
        <figure className={styles.mainAboutImg}>
          <NextImg
            alt="profile"
            src={"/akira-toriyama.jpg"}
            width={200}
            height={200}
            className={styles.mobile}
          />
          <NextImg
            alt="about"
            src={"/image-about.jpg"}
            width={768}
            height={300}
            className={styles.tabletAndUp}
          />
        </figure>

        <div className={styles.container}>
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
      <section id="works" className={styles.mainWorks}>
        <h2>
          <FontAwesomeIcon icon={faPalette} />
          Works
        </h2>
        <div className={styles.container}>
          <div className={styles.mainWorksItem}>
            <figure className={styles.mainWorksItemImg}>
              <NextImg
                alt="Work A"
                width={345}
                height={230}
                src={"/image-work-a3.jpg"}
                className={clsx(
                  styles.mainWorksItemImgInner,
                  styles["mainWorksItemImg--primary"]
                )}
              />
            </figure>

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
            <figure className={styles.mainWorksItemImg}>
              <NextImg
                alt="Work B"
                width={345}
                height={230}
                src={"/image-work-b.jpg"}
                className={clsx(
                  styles.mainWorksItemImgInner,
                  styles["mainWorksItemImg--secondary"]
                )}
              />
            </figure>
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
    </main>

    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
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
            <NextImg
              alt="logo"
              src="/image-logo.svg"
              width={60}
              height={37.3}
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
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faDribbble} />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faMedium} />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                {/* TODO NextLink */}
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
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
