<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رسالة إلى مينا | عاجل</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@700&family=Tajawal:wght@500;800;900&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        custom: ['Tajawal', 'sans-serif'],
                        calligraphy: ['Aref Ruqaa', 'serif'],
                    },
                    animation: {
                        'gradient-x': 'gradient-x 15s ease infinite',
                        'fade-in-down': 'fadeInDown 1s ease-out',
                        'fade-in-up': 'fadeInUp 1s ease-out 0.5s both',
                        'bounce-short': 'bounceShort 0.5s ease-out 1s both',
                        'pulse-fast': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        'gradient-x': {
                            '0%, 100%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' },
                        },
                        fadeInDown: {
                            '0%': { opacity: '0', transform: 'translateY(-20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        bounceShort: {
                            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                            '40%': { transform: 'translateY(-15px)' },
                            '60%': { transform: 'translateY(-7px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .font-custom { font-family: 'Tajawal', sans-serif; }
        .font-calligraphy { font-family: 'Aref Ruqaa', serif; }
        
        /* تأثير زجاجي متقدم */
        .glass-panel {
            background: rgba(17, 24, 39, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        /* تخصيص الخلفية المتحركة */
        .animated-bg {
            background: linear-gradient(-45deg, #000000, #1a0505, #4c0505, #000000);
            background-size: 400% 400%;
        }
    </style>
</head>
<body class="animated-bg animate-gradient-x min-h-screen flex items-center justify-center p-4 font-custom overflow-hidden relative">

    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHZpZXdCb3g9IjAgMCA0IDQiPjxnIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEgM2gydjJIM0gxeiIvPjwvZz48L3N2Zz4=')] opactiy-20"></div>

    <div class="relative z-10 w-full max-w-lg transition-transform duration-500 hover:scale-[1.02]">
        
        <div class="glass-panel rounded-[30px] p-10 md:p-14 border-4 border-black shadow-[10px_10px_0px_#000]">
            
            <div class="text-center mb-10 animate-fade-in-down relative">
                <span class="absolute -top-6 -right-6 text-4xl animate-pulse">✨</span>
                <h1 class="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white font-calligraphy relative inline-block">
                    مـيـنـا
                    <span class="absolute bottom-0 left-0 w-full h-2 bg-red-600 rounded-full"></span>
                </h1>
                <p class="text-white/50 text-sm mt-2 tracking-widest uppercase">Emergency Message</p>
            </div>
            
            <div class="space-y-8 animate-fade-in-up">
                
                <div class="relative bg-black/50 p-6 rounded-2xl border-l-4 border-red-500 shadow-inner">
                    <p class="text-3xl font-medium text-white leading-snug font-custom">
                        حاط <span class="font-black text-red-400">العباس علیج</span> إا طلعنا وما صورتيني <span class="underline decoration-red-500 decoration-wavy">عدل</span>
                    </p>
                </div>
                
                <div class="flex justify-center animate-bounce-short">
                    <div class="bg-red-600/20 p-5 rounded-full border-2 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        <svg class="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </div>
                </div>

                <div class="text-center mt-12 overflow-hidden rounded-xl border-4 border-red-600 shadow-[8px_8px_0px_#7f1d1d] group">
                    <p class="text-5xl font-black text-white bg-red-600 py-4 px-6 font-custom transform transition-transform group-hover:scale-110 group-hover:rotate-1 animate-pulse-fast">
                        خرا عليج ا
                    </p>
                </div>
                
            </div>
            
            <div class="mt-12 flex justify-center space-x-3 space-x-reverse opacity-50">
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <div class="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-100"></div>
            </div>

        </div>
    </div>

</body>
</html>
