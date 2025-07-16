import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { question, chatHistory } = await request.json();

    const userMessage = {
      role: "user",
      parts: [{ text: question }]
    };

    const updatedChatHistory = [...chatHistory, userMessage];

    const requestBody = {
      contents: updatedChatHistory
    };

    console.log('Request body:', requestBody);


    const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    const geminiApiKey = 'AIzaSyAOav82BONuO-owTfdlyB9tS3kZaNiXgS0';
    
    const response = await fetch(`${geminiApiUrl}?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    const text = data.candidates[0].content.parts[0].text;
    
    return NextResponse.json({ text });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}