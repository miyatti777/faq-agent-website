// Vercel Function: ChatKitセッション作成エンドポイント
// Qiita記事の方法を踏襲し、Vercel Functionsで実装

export default async function handler(req, res) {
  // CORSヘッダー設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONSリクエスト（プリフライト）対応
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // POSTメソッドのみ許可
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // OpenAI APIを使ってChatKitセッションを作成
    const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'chatkit_beta=v1',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        workflow: { 
          id: 'wf_68e4692701c88190b320ee7546ec44d70e84b98b70d37035' 
        },
        user: req.body?.deviceId || 'anonymous-user',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API Error:', errorText);
      throw new Error(`OpenAI API returned ${response.status}`);
    }

    const data = await response.json();
    
    // client_secretを返す
    return res.status(200).json({ 
      client_secret: data.client_secret 
    });

  } catch (error) {
    console.error('ChatKit session creation failed:', error);
    return res.status(500).json({ 
      error: 'Failed to create ChatKit session',
      details: error.message 
    });
  }
}



