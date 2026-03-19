"use client";

export default function Page() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(-45deg, #000000, #2a0000, #4a0000, #000000)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 10s ease infinite',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      textAlign: 'center',
      direction: 'rtl'
    }}>
      
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(220, 38, 38, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
        }
      `}</style>

      <div style={{
        background: 'rgba(20, 20, 20, 0.8)',
        backdropFilter: 'blur(15px)',
        padding: '50px',
        borderRadius: '40px',
        border: '4px solid #cc0000',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        maxWidth: '500px',
        width: '100%',
        animation: 'popIn 0.8s ease-out'
      }}>
        
        <h1 style={{ 
          fontSize: '4rem', 
          margin: '0 0 30px 0', 
          color: '#ff0000',
          textShadow: '3px 3px 0px #fff'
        }}>
          مـيـنـا 📸
        </h1>

        <div style={{
          fontSize: '1.8rem',
          lineHeight: '1.6',
          marginBottom: '40px',
          fontWeight: 'bold'
        }}>
          حاط <span style={{ color: '#ff4d4d', textDecoration: 'underline' }}>العباس عليج</span> 
          <br /> 
          إذا طلعنا وما صورتيني عدل
        </div>

        <div style={{
          background: '#ff0000',
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: '900',
          padding: '20px',
          borderRadius: '15px',
          display: 'inline-block',
          width: '100%',
          animation: 'pulse 1.5s infinite'
        }}>
          خرا عليج ا
        </div>

        <div style={{ marginTop: '30px', opacity: '0.5' }}>
          ⚠️ عاجل جداً ⚠️
        </div>
      </div>
    </div>
  );
}
