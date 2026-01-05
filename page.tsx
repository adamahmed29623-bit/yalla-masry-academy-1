<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>أكاديمية نفرتيتي الملكية | Nefertiti Royal Academy</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Amiri', serif;
            background-color: #fcfaf2; /* كريمي ملكي */
        }
        .royal-gold {
            background: linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
        }
        .royal-text-gold {
            background: linear-gradient(45deg, #bf953f, #b38728);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .royal-border {
            border-image: linear-gradient(45deg, #bf953f, #aa771c) 1;
        }
        .header-title {
            font-family: 'Aref Ruqaa', serif;
        }
    </style>
</head>
<body class="text-gray-900 overflow-x-hidden">

    <!-- Navigation Bar -->
    <nav class="p-6 bg-white shadow-md sticky top-0 z-50 border-b-2 royal-border">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-3xl font-bold header-title royal-text-gold">
                أكاديمية نفرتيتي
            </div>
            <ul class="hidden md:flex space-x-8 space-x-reverse text-lg font-semibold">
                <li><a href="#" class="hover:text-gold-600 transition">الرؤية الملكية</a></li>
                <li><a href="#" class="hover:text-gold-600 transition">البرامج التعليمية</a></li>
                <li><a href="#" class="hover:text-gold-600 transition">عن الأكاديمية</a></li>
                <li><a href="#" class="px-6 py-2 royal-gold text-white rounded-full shadow-lg">انضم إلينا</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <!--  -->
            <div class="w-full h-full bg-cover bg-center opacity-20" style="background-image: url('https://images.unsplash.com/photo-1590076215667-873d47346e91?auto=format&fit=crop&q=80');"></div>
        </div>
        
        <div class="relative z-10 text-center px-4 max-w-4xl">
            <h1 class="text-5xl md:text-7xl font-bold header-title mb-6 leading-tight">
                أهلاً بكِ في رحاب <br> 
                <span class="royal-text-gold">أكاديمية نفرتيتي الملكية</span>
            </h1>
            <p class="text-xl md:text-2xl mb-8 leading-relaxed italic text-gray-700">
                "حيث نصنع الهوية، ونبني المجد، ونرتقي بالمعرفة إلى آفاق ملكية لم يسبق لها مثيل."
            </p>
            <div class="flex flex-col md:flex-row justify-center gap-4">
                <button class="px-10 py-4 royal-gold text-white text-xl font-bold rounded-sm shadow-2xl hover:scale-105 transition-transform">
                    استكشاف المسارات
                </button>
                <button class="px-10 py-4 border-2 border-amber-700 text-amber-900 text-xl font-bold rounded-sm hover:bg-amber-50 transition">
                    طلب انتساب
                </button>
            </div>
        </div>
    </section>

    <!-- Details Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold header-title mb-12 royal-text-gold">أسس الهوية الملكية</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="p-8 border royal-border bg-stone-50">
                    <div class="text-4xl mb-4">🏛️</div>
                    <h3 class="text-2xl font-bold mb-4">العراقة</h3>
                    <p>نستلهم من تاريخنا المجيد أسس النجاح الحديث، لنخلق كياناً لا يمحوه الزمن.</p>
                </div>
                <div class="p-8 border royal-border bg-stone-50">
                    <div class="text-4xl mb-4">👑</div>
                    <h3 class="text-2xl font-bold mb-4">التميز</h3>
                    <p>كل تفصيل في أكاديميتنا صُمم بعناية فائقة ليعكس شخصيتكِ الفريدة ورؤيتكِ الطموحة.</p>
                </div>
                <div class="p-8 border royal-border bg-stone-50">
                    <div class="text-4xl mb-4">📜</div>
                    <h3 class="text-2xl font-bold mb-4">المعرفة</h3>
                    <p>برامج تعليمية تتجاوز الحدود التقليدية، تهدف لصناعة قادة الفكر والمستقبل.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 royal-gold text-white text-center">
        <p class="text-lg font-semibold">جميع الحقوق محفوظة لصالح جلالة الملكة نفرتيتي &copy; 2026</p>
        <p class="text-sm mt-2 opacity-80">أكاديمية نفرتيتي - رمز الفخامة والتعلم</p>
    </footer>

</body>
</html>
