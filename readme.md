# [HTML/CSSブロックコーディング デザインをすらすら再現できる](https://www.amazon.co.jp/gp/product/B0BHYYSWYQ/ref=ppx_yo_dt_b_d_asin_title_o00?ie=UTF8&psc=1)

## デザイン

[Figma](https://www.figma.com/file/WsqRZ49ELc0HRXERQH9ahm/design-block-coding?type=design&t=8fRvhIjnYBBBx4Uc-6)

## 書籍

[HTML/CSSブロックコーディング デザインをすらすら再現できる](https://www.amazon.co.jp/gp/product/B0BHYYSWYQ/ref=ppx_yo_dt_b_d_asin_title_o00?ie=UTF8&psc=1)

![本の画像](https://m.media-amazon.com/images/I/51XJwUqsahL.jpg)

## 特徴

### Next.js を使用

State管理などはないですが、デファクトスタンダードなので使用しました。

### スタイルは、scssを使用

[`happy-css-modules`](https://github.com/mizdra/happy-css-modules)を使用して型のを生成しました。

#### メリット

対応する`class`へのジャンプも可能な事、存在しない`class`を使用している場合にビルドエラー
にできる事が良かったです。

`stylelint`を使用できる事がメリットでした。

#### デメリット

`@use`などを使うと、TS恩恵おそらくなくなりそう。
