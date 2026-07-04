import React, { useState } from 'react';

function AiChatbot() {
  const [messages, setMessages] = useState([{ text: "Salom! Men PDP Junior AI yordamchisiman. Qanday yordam bera olaman?", isAi: true }]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Foydalanuvchi xabarini ekranga qo'shish
    const userMessage = { text: input, isAi: false };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Bu yerga backend orqali AI API ga so'rov yuborish kodi yoziladi
    // Hozircha sun'iy javob (Mock) qaytarib turamiz:
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Xadra filialimizda Dasturlash Asoslari kursi bor!", isAi: true }]);
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '350px', background: '#141414', border: '1px solid #00df9a', borderRadius: '12px', padding: '15px', color: '#fff', zIndex: 10000 }}>
      <h3 style={{ color: '#00df9a', margin: '0 0 10px 0' }}>PDP JUNIOR AI</h3>
      <div style={{ height: '250px', overflowY: 'auto', marginBottom: '10px', padding: '5px', background: '#0a0a0a', borderRadius: '8px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.isAi ? 'left' : 'right', margin: '5px 0' }}>
            <span style={{ background: msg.isAi ? '#222' : '#00df9a', color: msg.isAi ? '#fff' : '#000', padding: '6px 12px', borderRadius: '10px', display: 'inline-block', fontSize: '14px' }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} style={{ flex: 1, padding: '8px', borderRadius: '5px', border: 'none', background: '#222', color: '#fff' }} placeholder="Savolingizni yozing..." />
        <button onClick={handleSend} style={{ background: '#00df9a', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Sizga</button>
      </div>
    </div>
  );
}

export default AiChatbot;