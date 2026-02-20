'use client';
import React from 'react';

export default function PrankPage() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      direction: 'rtl',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // خلفية رمادية هادئة للتمويه
      margin: 0,
      overflow: 'hidden'
    }}>
      
      {/* ستايل الأنيميشن للملصقات المضحكة */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* ملصقات تناسب الكلام */}
      <div style={{ fontSize: '5rem', marginBottom: '20px' }}>
        <span style={{ display: 'inline-block', animation: 'bounce 1s infinite' }}>💩</span>
        <span style={{ display: 'inline-block', animation: 'spin 3s linear infinite', margin: '0 15px' }}>🖋️</span>
        <span style={{ display: 'inline-block', animation: 'bounce 1s infinite' }}>😂</span>
      </div>

      {/* النص الأساسي */}
      <h1 style={{ 
        fontSize: '3.5rem', 
        color: '#333', 
        margin: '0', 
        fontWeight: 'bold' 
      }}>
        ملاك أم البعرور
      </h1>

      {/* الرسالة التحتية */}
      <p style={{ 
        fontSize: '1.8rem', 
        color: '#555', 
        marginTop: '20px',
        backgroundColor: '#eee',
        padding: '10px 20px',
        borderRadius: '10px'
      }}>
        الولد بعده القلم بطيزه 🖋️🍑
      </p>

      {/* لمسة إضافية */}
      <div style={{ marginTop: '30px', fontSize: '1.2rem', color: '#888' }}>
        جاري جلط المتابعين... ⏳
      </div>

    </div>
  );
}
