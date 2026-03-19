<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إلى مينا</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Tajawal', sans-serif; }
        .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .animate-pop {
            animation: pop 0.5s ease-out;
        }
        @keyframes pop {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-gray-900 via-black to-red-900 min-h-screen flex items-center justify-center p-6">

    <div class="glass p-8 rounded-3xl shadow-2xl max-w-md w-full text-center animate-pop">
        <h1 class="text-4xl font-bold text-white mb-6 border-b border-red-500 pb-4 tracking-wide">
            مـيـنـا 📸
        </h1>
        
        <div class="space-y-6">
            <p class="text-2xl text-red-100 leading-relaxed font-medium">
                حاط العباس عليج إذا طلعنا وما صورتيني عدل
            </p>
            
            <div class="py-4">
                <span class="text-5xl">⚠️</span>
            </div>

            <p class="text-3xl font-bold text-red-500 bg-red-500/10 py-3 rounded-xl">
                خرا عليج ا
            </p>
        </div>

        <div class="mt-8 flex justify-center space-x-4 space-x-reverse">
            <span class="inline-block w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
            <span class="inline-block w-3 h-3 rounded-full bg-red-600 animate-pulse delay-75"></span>
            <span class="inline-block w-3 h-3 rounded-full bg-red-600 animate-pulse delay-150"></span>
        </div>
    </div>

</body>
</html>
