# Horizon

> An online IQ test web service

A commercial project planned, developed, and deployed with real payment integration.
<br />
Built by a 2-person team (1 frontend, 1 backend); I was responsible for the entire frontend.

<p>
  <a href="#japanese">🇯🇵 日本語</a> &nbsp;|&nbsp;
  <a href="#korean">🇰🇷 한국어</a>
</p>

&nbsp;

## Project Overview

| Field           | Details                                                               |
| :-------------- | :-------------------------------------------------------------------- |
| **Period**      | Sep 2024 – Mar 2025 (approx. 6 months)                               |
| **Team**        | 1 Frontend, 1 Backend                                                 |
| **Role**        | Frontend end-to-end (planning · design · implementation · deployment) |
| **Status**      | Service discontinued                                                  |

&nbsp;

## Tech Stack

- **Core** &nbsp; React 18, React Router v6, JavaScript ES6+, Node.js 20.13.1
- **Styling** &nbsp; Tailwind CSS, Framer Motion
- **State** &nbsp; React Context API
- **HTTP** &nbsp; Axios
- **Payment** &nbsp; NICE Pay SDK
- **Deploy** &nbsp; AWS (EC2, S3, Elastic Beanstalk, RDS, Route53, ALB), GitHub Actions, Nginx
- **Other** &nbsp; Recharts, react-spinners, react-world-flags, @headlessui/react

&nbsp;

## Architecture

![Architecture](./docs/architecture.png)

The frontend and backend are each deployed to independent Elastic Beanstalk environments. User requests flow through Route53 → SSL → ALB and are forwarded to the Nginx server on each EC2 instance.
<br/>
GitHub Actions uploads build artifacts to S3, which Elastic Beanstalk then pulls and deploys to each environment.

&nbsp;

## Key Implementations

### 1. IQ Conversion Algorithm & Dynamic Result Branching by Score Range

After a 40-minute test, the number of correct answers is converted into an IQ score, and a different result screen is dynamically rendered depending on the score range. Score and answer data collected during the test, along with post-payment result data, are managed via React Context API — enabling state sharing across multiple routes from the test page to the payment completion page without prop drilling.

### 2. NICE Pay Payment Integration

The NICE Pay SDK is loaded dynamically only when the user navigates to a page requiring payment, preventing unnecessary increases to the initial bundle size. A UUID generated at order creation is passed as the `orderId` in the payment request, establishing a 1:1 mapping between payment transactions and order data. Payment success/failure callbacks drive conditional rendering and automatic routing to the result page.

### 3. Social Proof–Driven Conversion

The main screen displays a list of previous test-takers' nationalities (flags) and scores to encourage new visitors to start the test. Flags are rendered using `react-world-flags` based on ISO country codes.

### 4. Result Sharing UX

The result page provides sharing options for Facebook, Naver, and X (Twitter), as well as URL copying. Each SNS sharing flow is implemented as a separate component that constructs the appropriate query parameters per platform's sharing URL spec.

&nbsp;

## Project Structure

```
src/
├── App.js / index.js
├── Timer.js                  # 40-minute test timer
├── apiUrls.js                # Backend API endpoints
├── contextTest/
│   └── MyContext.js          # Global state for test flow
├── routes/                   # Page routes
│   ├── Home.js
│   ├── IQTest.js
│   ├── ResultAfterPay.js
│   └── Help.js
└── components/
    ├── body/                 # Main page sections
    ├── test/                 # Test · payment · result flow
    ├── payment/              # Payment result handling
    ├── sns/                  # SNS sharing components
    ├── locale/               # Country selection · flags
    ├── serviceInfos/         # Terms · policies
    ├── header/ · footer/
    └── underHome/            # Feature intro · reviews
```

&nbsp;

## Repository Notes

- The original project was developed under a team organization. This repository is a public-facing fork of the frontend portion, separated with the consent of the other team member.
- Actual service endpoints, identifiers, and other sensitive values used in production have been masked with `▣` and no sensitive information is included.

&nbsp;

---

<details id="japanese">
<summary>日本語</summary>

&nbsp;

# Horizon

> オンラインIQテストWebサービス

実際に決済が行われる商用サービスとして、企画・開発・デプロイまで手がけたプロジェクト。
<br />
2人チーム（フロントエンド1名、バックエンド1名）で進め、私はフロントエンド全般を担当。

&nbsp;

## プロジェクト概要

| 項目             | 内容                                              |
| :--------------- | :------------------------------------------------ |
| **期間**         | 2024年9月 〜 2025年3月（約6ヶ月）                 |
| **チーム構成**   | フロントエンド1名、バックエンド1名                |
| **役割**         | フロントエンド全般（企画・設計・実装・デプロイ）  |
| **サービス状態** | 運営終了                                          |

&nbsp;

## 技術スタック

- **Core** &nbsp; React 18, React Router v6, JavaScript ES6+, Node.js 20.13.1
- **Styling** &nbsp; Tailwind CSS, Framer Motion
- **State** &nbsp; React Context API
- **HTTP** &nbsp; Axios
- **Payment** &nbsp; NICE Pay SDK
- **Deploy** &nbsp; AWS (EC2, S3, Elastic Beanstalk, RDS, Route53, ALB), GitHub Actions, Nginx
- **その他** &nbsp; Recharts, react-spinners, react-world-flags, @headlessui/react

&nbsp;

## アーキテクチャ

![Architecture](./docs/architecture.png)

フロントエンドとバックエンドはそれぞれ独立した Elastic Beanstalk 環境にデプロイされ、ユーザーのリクエストは Route53 → SSL → ALB を経由して各 EC2 インスタンスの Nginx に転送される。
<br/>
GitHub Actions がビルド成果物を S3 にアップロードすると、Elastic Beanstalk がそれを取得して各環境にデプロイする構成。

&nbsp;

## 主な実装

### 1. IQ換算アルゴリズムとスコア帯別の動的結果分岐

40分のテスト終了後、正答数をIQスコアに換算し、スコア帯に応じて異なる結果画面を動的にレンダリングする。テスト中に収集したスコア・回答データや決済後の結果データは React Context API で管理し、テストページから決済完了ページまで複数のルートをまたぐ画面遷移において、prop drilling なしで状態を共有している。

### 2. NICE Pay 決済連携

決済が必要なページに遷移したときのみ NICE Pay SDK を動的にロードし、初期バンドルの不要な増加を防ぐ。注文時に生成した UUID を決済リクエストの `orderId` として渡すことで決済と注文データを1対1で紐付け、決済成功・失敗のコールバックに応じて条件付きレンダリングおよび結果ページへの自動ルーティングを処理する。

### 3. ソーシャルプルーフによる流入促進

メイン画面に過去の受験者の国籍（国旗）とスコアの一覧を表示し、新規訪問者の受験を促す。`react-world-flags` を使用して ISO 国コードをもとに国旗をレンダリングしている。

### 4. 結果シェア UX

受験結果ページから Facebook・Naver・X（Twitter）へのシェアおよび URL コピー機能を提供する。各 SNS のシェア URL 仕様に合わせてパラメータを組み立てるコンポーネントを分離して実装した。

&nbsp;

## プロジェクト構成

```
src/
├── App.js / index.js
├── Timer.js                  # 40分計測タイマー
├── apiUrls.js                # バックエンド API エンドポイント
├── contextTest/
│   └── MyContext.js          # テストフロー全体のグローバル状態
├── routes/                   # ページルート
│   ├── Home.js
│   ├── IQTest.js
│   ├── ResultAfterPay.js
│   └── Help.js
└── components/
    ├── body/                 # メインページセクション
    ├── test/                 # テスト・決済・結果フロー
    ├── payment/              # 決済結果処理
    ├── sns/                  # SNS シェアコンポーネント
    ├── locale/               # 国選択・国旗
    ├── serviceInfos/         # 利用規約・ポリシー
    ├── header/ · footer/
    └── underHome/            # 機能紹介・レビュー
```

&nbsp;

## リポジトリについて

- 原本はチーム組織で進めたプロジェクトであり、本リポジトリはチームメンバーの同意を得て、自分が担当したフロントエンド部分を公開目的で分離したもの。
- 実際のサービスで使用されたエンドポイントや識別子などは `▣` でマスク処理しており、機密情報は含まれていない。

</details>

&nbsp;

<details id="korean">
<summary>한국어</summary>

&nbsp;

# Horizon

> 온라인 IQ 테스트 웹서비스의 프론트엔드

실제 결제가 이루어지는 상용 서비스로 기획·개발·배포까지 진행한 프로젝트.
<br />
2인 팀(프론트엔드 1, 백엔드 1)으로 진행했으며, 저는 프론트엔드 전반을 담당함.

&nbsp;

## 프로젝트 개요

| 항목            | 내용                                        |
| :-------------- | :------------------------------------------ |
| **기간**        | 2024.09 ~ 2025.03 (약 6개월)                |
| **팀 구성**     | 프론트엔드 1명, 백엔드 1명                  |
| **역할**        | 프론트엔드 전반 (기획 · 설계 · 구현 · 배포) |
| **서비스 상태** | 운영 종료                                   |

&nbsp;

## 기술 스택

- **Core** &nbsp; React 18, React Router v6, JavaScript
- **Styling** &nbsp; Tailwind CSS, Framer Motion
- **State** &nbsp; React Context API
- **HTTP** &nbsp; Axios
- **Payment** &nbsp; NICE Pay SDK
- **Deploy** &nbsp; AWS (EC2, S3, Elastic Beanstalk, RDS, Route53, ALB), GitHub Actions, Nginx
- **기타** &nbsp; Recharts, react-spinners, react-world-flags, @headlessui/react

&nbsp;

## 아키텍처

![Architecture](./docs/architecture.png)

프론트엔드와 백엔드가 각각 독립된 Elastic Beanstalk 환경에 배포되며, 사용자 요청은 Route53 → SSL → ALB를 거쳐 각 EC2 인스턴스의 Nginx로 전달됨.
<br/>
GitHub Actions가 빌드 산출물을 S3에 업로드하면 Elastic Beanstalk가 이를 가져가 각 환경에 배포하는 구조.

&nbsp;

## 주요 구현

### 1. IQ 환산 알고리즘 및 점수 구간별 동적 결과 분기

- 40분 응시 후 정답 수를 IQ로 환산하고, 점수 구간에 따라 서로 다른 해설 화면을 동적으로 렌더함. 응시 중 수집한 점수·답안 데이터와 결제 후 결과 데이터 등은 React Context API로 관리해, 테스트 페이지부터 결제 완료 페이지까지 여러 라우트를 오가는 흐름에서 prop drilling 없이 상태를 공유함.

### 2. NICE Pay 결제 연동

- 결제가 필요한 페이지에 진입했을 때만 NICE Pay SDK를 동적으로 로드해, 불필요한 초기 번들 증가를 방지함. 주문 시 생성한 UUID를 결제 요청의 `orderId`로 전달하여 결제 건과 주문 데이터를 1:1로 매칭하고, 결제 성공/실패 콜백에 따라 조건부 렌더링 및 결과 페이지 자동 라우팅을 처리함.

### 3. 소셜 프루프 기반 진입 유도

- 메인 화면에 이전 응시자의 국적(국기)과 점수 리스트를 노출하여 새로운 방문자의 진입을 유도함. `react-world-flags`를 활용해 ISO 국가 코드 기반으로 플래그를 렌더링함.

### 4. 결과 공유 UX

- 응시 결과 페이지에서 Facebook, Naver, X(Twitter) 공유 및 URL 복사 기능을 제공함. 각 SNS별 공유 URL 규격에 맞게 파라미터를 구성하는 컴포넌트를 분리해 구현함.

&nbsp;

## 프로젝트 구조

```
src/
├── App.js / index.js
├── Timer.js                  # 40분 응시 타이머
├── apiUrls.js                # 백엔드 API 엔드포인트
├── contextTest/
│   └── MyContext.js          # 응시 흐름 전역 상태
├── routes/                   # 페이지 라우트
│   ├── Home.js
│   ├── IQTest.js
│   ├── ResultAfterPay.js
│   └── Help.js
└── components/
    ├── body/                 # 메인 페이지 섹션
    ├── test/                 # 테스트 · 결제 · 결과 흐름
    ├── payment/              # 결제 결과 처리
    ├── sns/                  # SNS 공유 컴포넌트
    ├── locale/               # 국가 선택 · 국기
    ├── serviceInfos/         # 약관 · 정책
    ├── header/ · footer/
    └── underHome/            # 기능 소개 · 후기
```

&nbsp;

## 레포지토리 안내

- 원본은 팀 조직에서 진행한 프로젝트이며, 본 리포지토리는 팀원의 동의를 얻어 본인이 담당한 프론트엔드 부분을 공개 목적으로 분리한 것.
- 실제 서비스에 사용된 엔드포인트, 식별자 등은 `▣`로 마스킹 처리했으며, 민감 정보는 포함되어 있지 않음.

</details>

---

