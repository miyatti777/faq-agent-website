# FAQ検索エージェント

AI搭載の24時間対応FAQ検索サービス

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/miyatti777/faq-agent-website)

## 🚀 デモ

まだデプロイされていません。以下の手順でデプロイしてください。

## 📋 機能

- 🤖 OpenAI Agent Builder搭載
- 💬 24時間365日対応
- 📦 配送・返品に関するFAQ
- 💳 支払い方法に関するFAQ
- 👤 アカウント管理に関するFAQ
- 🎁 ポイント・特典に関するFAQ

## 🛠️ セットアップ

### 1. Workflow IDの設定

`index.html` の以下の部分を編集：

```javascript
const CONFIG = {
    workflowId: 'wf_あなたのWorkflow ID',  // ここを変更
    version: '1',
};
```

### 2. Vercelにデプロイ

```bash
# Vercel CLIでデプロイ
npm install -g vercel
vercel
```

または上の「Deploy with Vercel」ボタンをクリック

### 3. Agent Builderでドメイン登録

デプロイ後、取得したVercel URLを OpenAI Agent Builder の Publish画面で登録してください。

例: `https://faq-agent-website.vercel.app`

## 📁 ファイル構成

```
.
├── index.html       # メインHTMLファイル
├── vercel.json      # Vercel設定
├── .gitignore       # Git除外設定
└── README.md        # このファイル
```

## 🎨 カスタマイズ

### 色の変更

```javascript
primaryColor: '#667eea',  // お好みの色に変更
```

### メッセージの変更

```javascript
welcomeMessage: 'あなたのメッセージ',
```

## 💰 コスト

- **Vercel**: 無料（Hobbyプラン）
- **OpenAI Agent Builder**: 従量課金（約$0.01〜0.05/リクエスト）

## 📚 ドキュメント

- [OpenAI Agent Builder](https://platform.openai.com/docs/agents)
- [Vercel Documentation](https://vercel.com/docs)

## 📝 ライセンス

MIT License

---

Created by miyatti777



