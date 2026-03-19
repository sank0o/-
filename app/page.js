"use client";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative" 
         style={{ background: 'linear-gradient(-45deg, #000000, #1a0505, #4c0505, #000000)', backgroundSize: '400% 400%', animation: 'gradient-x 15s ease infinite' }}>
      
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-lg transition-transform duration-500 hover:scale-[1.02]">
        <div className="bg-gray-900/70 backdrop-blur-xl rounded-[30px] p-10 md:p-14 border-4 border-black shadow-[10px_10px_0px_#000]">
          
          <div className="text-center mb-10" style={{ animation: 'fadeInDown 1s ease-out' }}>
            <h1 className="text-7xl font-black tracking-tighter text-white font-serif relative inline-block">
              مـيـنـا
              <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600 rounded-full"></span>
            </h1>
          </div>
          
          <div className="space-y-8" style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
            <div className="bg-black/50 p-6 rounded-2xl border-r-4 border-red-500 text-right">
              <p className="text-3xl font-bold text-white leading-snug">
                حاط <span className="text-red-500 underline decoration-wavy">العباس عليج</span> إذا طلعنا وما صورتيني عدل
              </p>
            </div>
            
            <div className="text-center mt-12 overflow-hidden rounded-xl border-4 border-red-600 shadow-[8px_8px_0px_#7f1d1d]">
              <p className="text-5xl font-black text-white bg-red-600 py-4 px-6 animate-pulse">
                خرا عليج ا
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
