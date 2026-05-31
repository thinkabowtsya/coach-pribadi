const topicsList = [
    "Self Introduction", "Daily Routine", "Family", "Hobbies", "Food", "Home & City", "Weekly Review 1",
    "Morning Activities", "Workday Routine", "Weekend Activities", "Likes and Dislikes", "Feelings", "Simple Questions", "Weekly Review 2",
    "Present Habit", "Past Activities", "Future Plans", "Asking About Time", "Describing People", "Describing Places", "Weekly Review 3",
    "Small Talk", "Meeting New People", "Talking About Yourself", "Talking About Your Day", "Talking About Your Study", "Talking About Your Work", "Weekly Review 4", "Mixed Practice", "Monthly Test 1",
    "My Job", "Tasks and Responsibilities", "Meetings", "Deadlines", "Asking for Help", "Explaining Problems", "Weekly Review 5",
    "University Life", "Thesis Topic", "Research Method", "Data and Analysis", "Explaining Results", "Asking Academic Questions", "Weekly Review 6",
    "Programming Basics", "Web Development", "Application Features", "Bugs and Fixes", "Learning New Skills", "Explaining a Project", "Weekly Review 7",
    "Social Media", "Shopping", "Restaurant", "Travel", "Health", "Making Plans", "Weekly Review 8", "Mixed Practice", "Monthly Test 2",
    "Giving Opinions", "Agreeing and Disagreeing", "Explaining Reasons", "Comparing Options", "Talking About Preferences", "Giving Suggestions", "Weekly Review 9",
    "Memorable Experience", "A Difficult Day", "A Problem I Solved", "My Learning Journey", "My Work Experience", "My Future Goals", "Weekly Review 10",
    "Job Interview Introduction", "Strengths and Weaknesses", "Explaining Skills", "Explaining Experience", "Discussing a Project", "Workplace Small Talk", "Weekly Review 11",
    "Meeting Someone New", "Casual Conversation", "Workplace Roleplay", "Academic Roleplay", "Problem-Solving Roleplay", "Opinion Discussion", "Weekly Review 12", "Final Mixed Practice", "Final Speaking Test"
];

const daySpecificData = {
    2: { v: [["wake up", "bangun tidur"], ["breakfast", "sarapan"], ["prepare", "bersiap-siap"], ["leave", "berangkat"], ["rest", "istirahat"]], e: ["I usually wake up at 6 AM.", "After that, I eat breakfast.", "In the evening, I rest."] },
    3: { v: [["parents", "orang tua"], ["sibling", "saudara"], ["childhood", "masa kecil"], ["gather", "berkumpul"], ["support", "dukungan"]], e: ["My parents always support me.", "I have one sibling.", "We often gather during holidays."] },
    4: { v: [["hobby", "hobi"], ["leisure", "waktu luang"], ["interest", "minat"], ["spend", "menghabiskan"], ["enjoy", "menikmati"]], e: ["My hobby is reading.", "I spend my leisure time outside.", "I enjoy learning new things."] },
    5: { v: [["delicious", "lezat"], ["recipe", "resep"], ["ingredient", "bahan"], ["spicy", "pedas"], ["cook", "memasak"]], e: ["This food is delicious.", "I need a new recipe.", "I love spicy meals."] },
    6: { v: [["neighborhood", "lingkungan"], ["hometown", "kampung"], ["crowded", "ramai"], ["building", "bangunan"], ["comfortable", "nyaman"]], e: ["My neighborhood is quiet.", "The city is crowded.", "My home is comfortable."] },
    7: { v: [["review", "mengulas"], ["progress", "kemajuan"], ["recall", "mengingat"], ["memory", "ingatan"], ["improve", "meningkatkan"]], e: ["Let's review our progress.", "I need to recall the words.", "I want to improve my memory."] },
    8: { v: [["prepare", "menyiapkan"], ["commute", "perjalanan"], ["traffic", "lalu lintas"], ["breakfast", "sarapan"], ["energetic", "bersemangat"]], e: ["I prepare my bag.", "The traffic is bad.", "I feel energetic today."] },
    9: { v: [["task", "tugas"], ["deadline", "tenggat waktu"], ["meeting", "rapat"], ["busy", "sibuk"], ["focus", "fokus"]], e: ["I have a new task.", "The deadline is tomorrow.", "I must focus on my work."] },
    10: { v: [["relax", "bersantai"], ["hangout", "nongkrong"], ["movie", "film"], ["grocery", "belanjaan"], ["park", "taman"]], e: ["I relax at home.", "We hangout at the cafe.", "I buy groceries."] },
    11: { v: [["favorite", "favorit"], ["hate", "benci"], ["prefer", "lebih suka"], ["adore", "sangat suka"], ["bother", "mengganggu"]], e: ["That is my favorite book.", "I prefer tea over coffee.", "Loud noise bothers me."] },
    12: { v: [["happy", "bahagia"], ["stressed", "stres"], ["exhausted", "kelelahan"], ["excited", "antusias"], ["anxious", "cemas"]], e: ["I feel happy today.", "Work makes me stressed.", "I am excited for the trip."] },
    13: { v: [["ask", "bertanya"], ["explain", "menjelaskan"], ["clarify", "mengklarifikasi"], ["understand", "mengerti"], ["repeat", "mengulangi"]], e: ["Let me ask a question.", "Please explain this to me.", "Could you repeat that?"] },
    14: { v: [["consistent", "konsisten"], ["habit", "kebiasaan"], ["evaluate", "mengevaluasi"], ["reflect", "merenung"], ["achieve", "mencapai"]], e: ["I build a consistent habit.", "Let's evaluate our study.", "I reflect on my day."] },
    15: { v: [["routine", "rutinitas"], ["usually", "biasanya"], ["normally", "normalnya"], ["daily", "sehari-hari"], ["always", "selalu"]], e: ["I usually walk to work.", "This is my daily routine.", "I always drink water."] },
    16: { v: [["yesterday", "kemarin"], ["last", "lalu"], ["previously", "sebelumnya"], ["happened", "terjadi"], ["remember", "ingat"]], e: ["I worked late yesterday.", "Last week was busy.", "I remember what happened."] },
    17: { v: [["tomorrow", "besok"], ["next", "berikutnya"], ["plan", "rencana"], ["intend", "berniat"], ["schedule", "jadwal"]], e: ["I plan to travel.", "Next year will be better.", "Let's schedule a call."] },
    18: { v: [["clock", "jam"], ["exactly", "tepat"], ["duration", "durasi"], ["late", "terlambat"], ["early", "awal"]], e: ["Look at the clock.", "What is the exact duration?", "Don't be late."] },
    19: { v: [["friendly", "ramah"], ["tall", "tinggi"], ["smart", "pintar"], ["polite", "sopan"], ["creative", "kreatif"]], e: ["She is very friendly.", "He is a tall guy.", "My boss is smart."] },
    20: { v: [["beautiful", "indah"], ["spacious", "luas"], ["noisy", "berisik"], ["cozy", "nyaman"], ["modern", "modern"]], e: ["The park is beautiful.", "My room is cozy.", "It is a modern building."] },
    21: { v: [["confident", "percaya diri"], ["summarize", "merangkum"], ["recall", "mengingat"], ["fluent", "lancar"], ["challenge", "tantangan"]], e: ["I feel more confident.", "Can you summarize it?", "This is a speaking challenge."] },
    22: { v: [["weather", "cuaca"], ["recent", "baru-baru ini"], ["greeting", "salam"], ["casual", "santai"], ["chat", "mengobrol"]], e: ["The weather is nice.", "Let's have a casual chat.", "Any recent news?"] },
    23: { v: [["introduce", "memperkenalkan"], ["handshake", "jabat tangan"], ["familiar", "akrab"], ["pleasure", "kesenangan"], ["welcome", "selamat datang"]], e: ["Let me introduce myself.", "It is a pleasure.", "Welcome to our team."] },
    24: { v: [["background", "latar belakang"], ["passion", "hasrat"], ["currently", "saat ini"], ["goal", "tujuan"], ["personality", "kepribadian"]], e: ["My background is in IT.", "I am currently working here.", "My passion is coding."] },
    25: { v: [["tiring", "melelahkan"], ["productive", "produktif"], ["event", "acara"], ["happen", "terjadi"], ["mood", "suasana hati"]], e: ["It was a tiring day.", "Very productive meeting.", "My mood is good."] },
    26: { v: [["subject", "mata pelajaran"], ["major", "jurusan"], ["assignment", "tugas"], ["campus", "kampus"], ["learn", "belajar"]], e: ["My major is math.", "I have an assignment.", "I learn new things."] },
    27: { v: [["industry", "industri"], ["position", "posisi"], ["colleague", "rekan kerja"], ["project", "proyek"], ["manage", "mengelola"]], e: ["I work in the tech industry.", "I manage a project.", "My colleague is helpful."] },
    28: { v: [["practice", "latihan"], ["review", "ulasan"], ["milestone", "pencapaian"], ["journey", "perjalanan"], ["dedicated", "berdedikasi"]], e: ["We reached a milestone.", "I am dedicated to practice.", "Enjoy the journey."] },
    29: { v: [["combine", "menggabungkan"], ["topic", "topik"], ["various", "bermacam-macam"], ["switch", "beralih"], ["adapt", "beradaptasi"]], e: ["Let's combine the topics.", "I can adapt easily.", "We switch contexts."] },
    30: { v: [["test", "ujian"], ["measure", "mengukur"], ["result", "hasil"], ["comprehensive", "menyeluruh"], ["nervous", "gugup"]], e: ["It is time for a test.", "Let's measure the result.", "Don't be nervous."] },
    31: { v: [["developer", "pengembang"], ["role", "peran"], ["full-time", "penuh waktu"], ["salary", "gaji"], ["company", "perusahaan"]], e: ["I am a software developer.", "It is a full-time role.", "The company is great."] },
    32: { v: [["responsible", "bertanggung jawab"], ["handle", "menangani"], ["daily", "sehari-hari"], ["require", "membutuhkan"], ["duty", "kewajiban"]], e: ["I am responsible for UI.", "My duty is to code.", "I handle the database."] },
    33: { v: [["agenda", "agenda"], ["discuss", "berdiskusi"], ["attend", "menghadiri"], ["slide", "salindia"], ["conclude", "menyimpulkan"]], e: ["What is the agenda?", "Let's discuss this.", "I must attend the meeting."] },
    34: { v: [["urgent", "mendesak"], ["submit", "menyerahkan"], ["postpone", "menunda"], ["tight", "ketat"], ["delay", "keterlambatan"]], e: ["This is very urgent.", "We cannot delay.", "The deadline is tight."] },
    35: { v: [["assist", "membantu"], ["stuck", "terjebak"], ["favor", "bantuan"], ["block", "menghalangi"], ["guide", "panduan"]], e: ["Can you assist me?", "I am stuck here.", "Do me a favor."] },
    36: { v: [["issue", "masalah"], ["error", "kesalahan"], ["cause", "penyebab"], ["solve", "menyelesaikan"], ["complicated", "rumit"]], e: ["There is an error.", "We must find the cause.", "It is too complicated."] },
    37: { v: [["workplace", "tempat kerja"], ["communication", "komunikasi"], ["professional", "profesional"], ["evaluate", "mengevaluasi"], ["skill", "keterampilan"]], e: ["Communication is key.", "Evaluate your skill.", "Act like a professional."] },
    38: { v: [["lecture", "kuliah"], ["professor", "profesor"], ["library", "perpustakaan"], ["semester", "semester"], ["graduate", "lulus"]], e: ["The lecture is long.", "I study at the library.", "I will graduate soon."] },
    39: { v: [["research", "penelitian"], ["title", "judul"], ["propose", "mengusulkan"], ["theory", "teori"], ["academic", "akademik"]], e: ["I propose a new topic.", "My research is about AI.", "It is an academic theory."] },
    40: { v: [["qualitative", "kualitatif"], ["survey", "survei"], ["sample", "sampel"], ["observe", "mengamati"], ["collect", "mengumpulkan"]], e: ["We use a survey.", "I will observe the users.", "We collect the data."] },
    41: { v: [["chart", "grafik"], ["statistic", "statistik"], ["significant", "signifikan"], ["pattern", "pola"], ["analyze", "menganalisis"]], e: ["Analyze the chart.", "We found a pattern.", "The result is significant."] },
    42: { v: [["conclude", "menyimpulkan"], ["show", "menunjukkan"], ["evidence", "bukti"], ["prove", "membuktikan"], ["finding", "temuan"]], e: ["The data shows a trend.", "We can conclude this.", "Here is the evidence."] },
    43: { v: [["clarify", "mengklarifikasi"], ["refer", "merujuk"], ["cite", "mengutip"], ["valid", "sah"], ["argument", "argumen"]], e: ["Please clarify your point.", "I cite this paper.", "Your argument is valid."] },
    44: { v: [["academic", "akademik"], ["thesis", "tesis"], ["progress", "kemajuan"], ["understand", "memahami"], ["review", "mengulas"]], e: ["My thesis progress is good.", "I understand the topic.", "Let's review the academic paper."] },
    45: { v: [["variable", "variabel"], ["loop", "perulangan"], ["logic", "logika"], ["function", "fungsi"], ["syntax", "sintaksis"]], e: ["Declare a variable.", "Use a for loop.", "Check the function logic."] },
    46: { v: [["frontend", "tampilan depan"], ["backend", "tampilan belakang"], ["server", "peladen"], ["browser", "peramban"], ["layout", "tata letak"]], e: ["I build the frontend.", "The server is fast.", "Fix the layout bug."] },
    47: { v: [["login", "masuk"], ["dashboard", "dasbor"], ["button", "tombol"], ["notify", "memberi tahu"], ["profile", "profil"]], e: ["Click the login button.", "Check the dashboard.", "We will notify the user."] },
    48: { v: [["debug", "mengawaputu"], ["crash", "rusak"], ["patch", "tambalan"], ["deploy", "menyebarkan"], ["trace", "melacak"]], e: ["I will debug the code.", "The app crashed.", "Deploy the patch now."] },
    49: { v: [["tutorial", "panduan"], ["course", "kursus"], ["framework", "kerangka kerja"], ["master", "menguasai"], ["practice", "berlatih"]], e: ["I watch a tutorial.", "I want to master React.", "Practice every day."] },
    50: { v: [["architecture", "arsitektur"], ["scale", "skala"], ["module", "modul"], ["integrate", "mengintegrasikan"], ["launch", "meluncurkan"]], e: ["Explain the architecture.", "We integrate the module.", "Ready to launch."] },
    51: { v: [["technical", "teknis"], ["code", "kode"], ["review", "ulasan"], ["bug", "kutu"], ["improve", "meningkatkan"]], e: ["We do a code review.", "Fix the technical bug.", "Improve the syntax."] },
    52: { v: [["post", "kiriman"], ["share", "membagikan"], ["viral", "viral"], ["comment", "komentar"], ["scroll", "menggulir"]], e: ["I share a post.", "It went viral.", "Don't scroll too much."] },
    53: { v: [["price", "harga"], ["discount", "diskon"], ["cart", "keranjang"], ["checkout", "bayar"], ["expensive", "mahal"]], e: ["The price is cheap.", "Add to cart.", "Let's checkout now."] },
    54: { v: [["menu", "menu"], ["order", "memesan"], ["delicious", "lezat"], ["waiter", "pelayan"], ["bill", "tagihan"]], e: ["Can I see the menu?", "I want to order.", "The bill, please."] },
    55: { v: [["ticket", "tiket"], ["flight", "penerbangan"], ["hotel", "hotel"], ["explore", "menjelajahi"], ["baggage", "bagasi"]], e: ["Book a flight ticket.", "We explore the city.", "My baggage is heavy."] },
    56: { v: [["sick", "sakit"], ["medicine", "obat"], ["doctor", "dokter"], ["hospital", "rumah sakit"], ["healthy", "sehat"]], e: ["I feel sick.", "Take your medicine.", "Eat healthy food."] },
    57: { v: [["weekend", "akhir pekan"], ["arrange", "mengatur"], ["schedule", "jadwal"], ["join", "bergabung"], ["confirm", "mengonfirmasi"]], e: ["Let's arrange a meeting.", "Will you join us?", "Please confirm your schedule."] },
    58: { v: [["practical", "praktis"], ["daily", "harian"], ["vocabulary", "kosakata"], ["recall", "mengingat"], ["confident", "percaya diri"]], e: ["Use practical vocabulary.", "Recall the words.", "Feel more confident."] },
    59: { v: [["combine", "menggabungkan"], ["random", "acak"], ["scenario", "skenario"], ["switch", "beralih"], ["respond", "merespon"]], e: ["A random scenario.", "Switch the topic.", "Respond quickly."] },
    60: { v: [["test", "ujian"], ["intermediate", "menengah"], ["measure", "mengukur"], ["evaluate", "mengevaluasi"], ["perform", "melakukan"]], e: ["An intermediate test.", "Measure your skill.", "Perform well."] },
    61: { v: [["opinion", "pendapat"], ["personally", "secara pribadi"], ["viewpoint", "sudut pandang"], ["believe", "percaya"], ["stand", "pendirian"]], e: ["In my opinion, no.", "Personally, I agree.", "From my viewpoint."] },
    62: { v: [["absolutely", "benar-benar"], ["disagree", "tidak setuju"], ["valid", "sah"], ["completely", "sepenuhnya"], ["oppose", "menentang"]], e: ["I completely agree.", "I must disagree.", "You have a valid point."] },
    63: { v: [["because", "karena"], ["therefore", "karena itu"], ["reason", "alasan"], ["cause", "penyebab"], ["mainly", "terutama"]], e: ["The main reason is cost.", "Therefore, we wait.", "Because it is safe."] },
    64: { v: [["better", "lebih baik"], ["worse", "lebih buruk"], ["alternative", "alternatif"], ["compare", "membandingkan"], ["similar", "serupa"]], e: ["This is a better alternative.", "Compare the two.", "They are similar."] },
    65: { v: [["prefer", "lebih suka"], ["rather", "lebih memilih"], ["favorite", "favorit"], ["choose", "memilih"], ["appeal", "menarik"]], e: ["I prefer tea.", "I would rather stay.", "It appeals to me."] },
    66: { v: [["suggest", "menyarankan"], ["advise", "menasihati"], ["recommend", "merekomendasikan"], ["perhaps", "mungkin"], ["better", "lebih baik"]], e: ["I suggest we wait.", "I strongly recommend it.", "Perhaps it is better."] },
    67: { v: [["debate", "debat"], ["discuss", "berdiskusi"], ["opinion", "pendapat"], ["reason", "alasan"], ["express", "mengekspresikan"]], e: ["Express your opinion.", "Let's debate this.", "Discuss the reason."] },
    68: { v: [["unforgettable", "tak terlupakan"], ["memory", "kenangan"], ["happen", "terjadi"], ["amazing", "luar biasa"], ["remind", "mengingatkan"]], e: ["It was an amazing memory.", "It reminds me of home.", "Truly unforgettable."] },
    69: { v: [["struggle", "perjuangan"], ["tough", "tangguh"], ["overcome", "mengatasi"], ["exhaust", "melelahkan"], ["terrible", "mengerikan"]], e: ["It was a tough day.", "I struggled a lot.", "I feel exhausted."] },
    70: { v: [["fix", "memperbaiki"], ["strategy", "strategi"], ["resolve", "menyelesaikan"], ["tackle", "menangani"], ["challenge", "tantangan"]], e: ["I fixed the error.", "We resolved the issue.", "It was a big challenge."] },
    71: { v: [["progress", "kemajuan"], ["step", "langkah"], ["improve", "meningkatkan"], ["gradual", "bertahap"], ["focus", "fokus"]], e: ["I made good progress.", "Step by step.", "A gradual improvement."] },
    72: { v: [["hire", "mempekerjakan"], ["promote", "mempromosikan"], ["role", "peran"], ["handle", "menangani"], ["contribute", "berkontribusi"]], e: ["I was hired last year.", "I handle a team.", "I contribute to the project."] },
    73: { v: [["achieve", "mencapai"], ["target", "sasaran"], ["dream", "mimpi"], ["pursue", "mengejar"], ["vision", "visi"]], e: ["I will pursue my dream.", "We must achieve the target.", "A clear vision."] },
    74: { v: [["storytelling", "bercerita"], ["past", "masa lalu"], ["future", "masa depan"], ["narrate", "meriwayatkan"], ["share", "berbagi"]], e: ["Share your story.", "Narrate the past.", "Plan the future."] },
    75: { v: [["candidate", "kandidat"], ["apply", "melamar"], ["profile", "profil"], ["background", "latar belakang"], ["suitable", "cocok"]], e: ["I am a suitable candidate.", "Let me share my profile.", "I apply for this role."] },
    76: { v: [["strength", "kekuatan"], ["weakness", "kelemahan"], ["detail", "teliti"], ["impatient", "tidak sabar"], ["improve", "meningkatkan"]], e: ["My strength is coding.", "I am detail-oriented.", "I want to improve my weakness."] },
    77: { v: [["expert", "ahli"], ["proficient", "mahir"], ["capable", "mampu"], ["tool", "alat"], ["framework", "kerangka kerja"]], e: ["I am proficient in Java.", "I am capable of managing.", "I use modern tools."] },
    78: { v: [["handle", "menangani"], ["manage", "mengelola"], ["deliver", "mengirimkan"], ["lead", "memimpin"], ["project", "proyek"]], e: ["I lead a small team.", "I handle the server.", "We delivered the project."] },
    79: { v: [["scope", "cakupan"], ["timeline", "lini masa"], ["budget", "anggaran"], ["resource", "sumber daya"], ["success", "kesuksesan"]], e: ["The project scope is large.", "We are under budget.", "It was a success."] },
    80: { v: [["weekend", "akhir pekan"], ["coffee", "kopi"], ["break", "istirahat"], ["weather", "cuaca"], ["relax", "bersantai"]], e: ["How was your weekend?", "Let's take a coffee break.", "Good weather today."] },
    81: { v: [["interview", "wawancara"], ["professional", "profesional"], ["confident", "percaya diri"], ["answer", "menjawab"], ["career", "karir"]], e: ["Answer the question.", "Be professional.", "It is good for your career."] },
    82: { v: [["introduce", "memperkenalkan"], ["handshake", "jabat tangan"], ["familiar", "akrab"], ["pleasure", "kesenangan"], ["welcome", "selamat datang"]], e: ["Let me introduce myself.", "It is a pleasure.", "Welcome to our team."] },
    83: { v: [["hobby", "hobi"], ["interest", "minat"], ["weekend", "akhir pekan"], ["family", "keluarga"], ["relax", "bersantai"]], e: ["What is your hobby?", "Let's relax.", "Do you have any interest?"] },
    84: { v: [["colleague", "rekan kerja"], ["task", "tugas"], ["deadline", "tenggat waktu"], ["meeting", "rapat"], ["busy", "sibuk"]], e: ["I have a new task.", "The deadline is tomorrow.", "I must focus on my work."] },
    85: { v: [["thesis", "tesis"], ["professor", "profesor"], ["research", "penelitian"], ["paper", "makalah"], ["library", "perpustakaan"]], e: ["I wrote a paper.", "Talk to the professor.", "My research is about AI."] },
    86: { v: [["bug", "kutu"], ["server", "peladen"], ["fix", "memperbaiki"], ["trace", "melacak"], ["error", "kesalahan"]], e: ["Trace the error.", "Fix the bug.", "The server is down."] },
    87: { v: [["debate", "debat"], ["agree", "setuju"], ["disagree", "tidak setuju"], ["viewpoint", "sudut pandang"], ["reason", "alasan"]], e: ["I disagree with you.", "From my viewpoint.", "Explain your reason."] },
    88: { v: [["roleplay", "bermain peran"], ["scenario", "skenario"], ["act", "bertindak"], ["respond", "merespon"], ["fluently", "dengan lancar"]], e: ["Act out the scenario.", "Respond fluently.", "Good roleplay."] },
    89: { v: [["fluent", "lancar"], ["confident", "percaya diri"], ["natural", "alami"], ["vocabulary", "kosakata"], ["ultimate", "tertinggi"]], e: ["Speak naturally.", "Use the vocabulary.", "The ultimate practice."] },
    90: { v: [["mastery", "penguasaan"], ["finish", "menyelesaikan"], ["journey", "perjalanan"], ["graduate", "lulus"], ["proud", "bangga"]], e: ["Proud of this journey.", "You have reached mastery.", "Time to graduate."] }
};

const topicConversationProfiles = {
    daily: {
        phrases: topic => [
            [`When it comes to ${topic.toLowerCase()}, I usually...`, `Kalau membahas ${topic.toLowerCase()}, saya biasanya...`, `When it comes to ${topic.toLowerCase()}, I usually keep things simple.`],
            ['After that, I usually...', 'Setelah itu, saya biasanya...', 'After that, I usually take a short break.'],
            ['One thing I enjoy is...', 'Satu hal yang saya nikmati adalah...', 'One thing I enjoy is having a relaxed morning.']
        ],
        questions: topic => [
            `How does ${topic.toLowerCase()} fit into your normal day?`,
            `What do you usually do first when it comes to ${topic.toLowerCase()}?`,
            `What part of ${topic.toLowerCase()} do you enjoy the most?`,
            `Is there anything you want to change about ${topic.toLowerCase()}?`,
            `Can you describe a recent example related to ${topic.toLowerCase()}?`
        ]
    },
    social: {
        phrases: topic => [
            [`Speaking of ${topic.toLowerCase()}, I think...`, `Berbicara tentang ${topic.toLowerCase()}, menurut saya...`, `Speaking of ${topic.toLowerCase()}, I think it is easier when we stay relaxed.`],
            ['From my experience,...', 'Dari pengalaman saya,...', 'From my experience, a friendly question helps the conversation.'],
            ['Could you tell me more about...?', 'Bisakah kamu bercerita lebih banyak tentang...?', 'Could you tell me more about your experience?']
        ],
        questions: topic => [
            `How would you start a conversation about ${topic.toLowerCase()}?`,
            `What would you say to keep the conversation natural?`,
            `Which question would you ask another person about ${topic.toLowerCase()}?`,
            `Have you had a recent conversation related to ${topic.toLowerCase()}?`,
            `What answer would you give if someone asked you about ${topic.toLowerCase()}?`
        ]
    },
    work: {
        phrases: topic => [
            [`Regarding ${topic.toLowerCase()}, I am responsible for...`, `Terkait ${topic.toLowerCase()}, saya bertanggung jawab untuk...`, `Regarding ${topic.toLowerCase()}, I am responsible for keeping the team updated.`],
            ['The main priority is...', 'Prioritas utamanya adalah...', 'The main priority is finishing the task on time.'],
            ['I usually handle it by...', 'Saya biasanya menanganinya dengan...', 'I usually handle it by checking the details first.']
        ],
        questions: topic => [
            `How does ${topic.toLowerCase()} relate to your work?`,
            `What do you usually do when dealing with ${topic.toLowerCase()}?`,
            `What is the biggest challenge related to ${topic.toLowerCase()}?`,
            `Can you share a recent work example about ${topic.toLowerCase()}?`,
            `How would you explain ${topic.toLowerCase()} to a colleague?`
        ]
    },
    academic: {
        phrases: topic => [
            [`For ${topic.toLowerCase()}, I am currently working on...`, `Untuk ${topic.toLowerCase()}, saat ini saya sedang mengerjakan...`, `For ${topic.toLowerCase()}, I am currently working on a short assignment.`],
            ['The main point is...', 'Poin utamanya adalah...', 'The main point is understanding the result clearly.'],
            ['I still need to learn more about...', 'Saya masih perlu belajar lebih banyak tentang...', 'I still need to learn more about the research method.']
        ],
        questions: topic => [
            `What are you currently learning about ${topic.toLowerCase()}?`,
            `Which part of ${topic.toLowerCase()} is most interesting to you?`,
            `What part of ${topic.toLowerCase()} is still difficult?`,
            `Can you explain one example related to ${topic.toLowerCase()}?`,
            `What would you like to improve about ${topic.toLowerCase()}?`
        ]
    },
    programming: {
        phrases: topic => [
            [`When working on ${topic.toLowerCase()}, I usually...`, `Saat mengerjakan ${topic.toLowerCase()}, saya biasanya...`, `When working on ${topic.toLowerCase()}, I usually test one part at a time.`],
            ['The main issue is...', 'Masalah utamanya adalah...', 'The main issue is an error in the application.'],
            ['I solved it by...', 'Saya menyelesaikannya dengan...', 'I solved it by checking the code and testing the fix.']
        ],
        questions: topic => [
            `How would you explain ${topic.toLowerCase()} to a beginner?`,
            `Which tools do you use when working on ${topic.toLowerCase()}?`,
            `What problem can happen when working on ${topic.toLowerCase()}?`,
            `How would you solve a problem related to ${topic.toLowerCase()}?`,
            `Can you describe a project example involving ${topic.toLowerCase()}?`
        ]
    },
    practical: {
        phrases: topic => [
            [`I would like to talk about ${topic.toLowerCase()}.`, `Saya ingin membicarakan ${topic.toLowerCase()}.`, `I would like to talk about ${topic.toLowerCase()} from my own experience.`],
            ['The first thing I would do is...', 'Hal pertama yang akan saya lakukan adalah...', 'The first thing I would do is check the available options.'],
            ['In my situation,...', 'Dalam situasi saya,...', 'In my situation, I would choose the simplest option.']
        ],
        questions: topic => [
            `What is your personal experience with ${topic.toLowerCase()}?`,
            `What do you usually need when dealing with ${topic.toLowerCase()}?`,
            `What would you do first in a situation involving ${topic.toLowerCase()}?`,
            `What problem could happen with ${topic.toLowerCase()}?`,
            `What advice would you give someone about ${topic.toLowerCase()}?`
        ]
    },
    opinion: {
        phrases: topic => [
            [`In my opinion, ${topic.toLowerCase()}...`, `Menurut saya, ${topic.toLowerCase()}...`, `In my opinion, ${topic.toLowerCase()} should be explained clearly.`],
            ['I agree because...', 'Saya setuju karena...', 'I agree because the reason makes sense.'],
            ['Another option would be...', 'Pilihan lainnya adalah...', 'Another option would be to compare the advantages first.']
        ],
        questions: topic => [
            `What is your opinion about ${topic.toLowerCase()}?`,
            `What is your main reason for that opinion?`,
            `Would you agree or disagree with a different viewpoint? Why?`,
            `Can you give an example that supports your opinion?`,
            `What suggestion would you give after discussing ${topic.toLowerCase()}?`
        ]
    },
    storytelling: {
        phrases: topic => [
            [`I would like to share ${topic.toLowerCase()}.`, `Saya ingin menceritakan ${topic.toLowerCase()}.`, `I would like to share a memorable experience from last year.`],
            ['At first,...', 'Pada awalnya,...', 'At first, I did not know what to do.'],
            ['In the end,...', 'Pada akhirnya,...', 'In the end, I learned an important lesson.']
        ],
        questions: topic => [
            `When did the experience related to ${topic.toLowerCase()} happen?`,
            `Who was involved in the situation?`,
            `What happened at the beginning?`,
            `How did you respond to the situation?`,
            `What did you learn from the experience?`
        ]
    },
    interview: {
        phrases: topic => [
            [`Regarding ${topic.toLowerCase()}, I would say...`, `Terkait ${topic.toLowerCase()}, saya ingin mengatakan...`, `Regarding ${topic.toLowerCase()}, I would say that I am always willing to learn.`],
            ['One example is...', 'Salah satu contohnya adalah...', 'One example is a web project that I completed last year.'],
            ['This experience taught me...', 'Pengalaman ini mengajarkan saya...', 'This experience taught me how to communicate clearly.']
        ],
        questions: topic => [
            `How would you answer an interview question about ${topic.toLowerCase()}?`,
            `What example would you use to support your answer?`,
            `What did you learn from your experience?`,
            `How does ${topic.toLowerCase()} make you a stronger candidate?`,
            `What would you like the interviewer to remember about your answer?`
        ]
    },
    review: {
        phrases: () => [
            ['This week, I learned...', 'Minggu ini, saya belajar...', 'This week, I learned several useful expressions.'],
            ['I still need to practice...', 'Saya masih perlu berlatih...', 'I still need to practice speaking more naturally.'],
            ['My next goal is...', 'Tujuan saya berikutnya adalah...', 'My next goal is using the new phrases in conversation.']
        ],
        questions: (topic, dayNumber) => [
            `For day ${dayNumber}, which useful phrases can you remember?`,
            `Which earlier topic would you combine during ${topic.toLowerCase()}?`,
            'Which topic do you still need to practice?',
            'Can you give one example sentence from an earlier lesson?',
            'What is your next speaking goal after this practice?'
        ]
    }
};

const topicProfileGroups = {
    daily: ['Daily Routine', 'Morning Activities', 'Workday Routine', 'Weekend Activities', 'Present Habit', 'Past Activities', 'Future Plans', 'Asking About Time', 'Talking About Your Day', 'Likes and Dislikes', 'Feelings', 'Hobbies', 'Food', 'Home & City'],
    social: ['Self Introduction', 'Simple Questions', 'Describing People', 'Describing Places', 'Small Talk', 'Meeting New People', 'Talking About Yourself', 'Casual Conversation', 'Meeting Someone New', 'Workplace Small Talk', 'Family'],
    work: ['Talking About Your Work', 'My Job', 'Tasks and Responsibilities', 'Meetings', 'Deadlines', 'Asking for Help', 'Explaining Problems', 'My Work Experience'],
    academic: ['Talking About Your Study', 'University Life', 'Thesis Topic', 'Research Method', 'Data and Analysis', 'Explaining Results', 'Asking Academic Questions', 'Academic Roleplay', 'My Learning Journey'],
    programming: ['Programming Basics', 'Web Development', 'Application Features', 'Bugs and Fixes', 'Learning New Skills', 'Explaining a Project', 'Problem-Solving Roleplay', 'Discussing a Project'],
    practical: ['Social Media', 'Shopping', 'Restaurant', 'Travel', 'Health', 'Making Plans', 'Workplace Roleplay'],
    opinion: ['Giving Opinions', 'Agreeing and Disagreeing', 'Explaining Reasons', 'Comparing Options', 'Talking About Preferences', 'Giving Suggestions', 'Opinion Discussion'],
    storytelling: ['Memorable Experience', 'A Difficult Day', 'A Problem I Solved', 'My Future Goals'],
    interview: ['Job Interview Introduction', 'Strengths and Weaknesses', 'Explaining Skills', 'Explaining Experience'],
    review: ['Mixed Practice', 'Final Mixed Practice']
};

const topicQuestionOverrides = {
    'Daily Routine': ['What time do you usually wake up?', 'What do you do after waking up?', 'What is your busiest time of day?', 'What do you usually do after work or study?', 'Which part of your routine would you like to improve?'],
    'Family': ['How many people are there in your family?', 'Who do you live with?', 'What do you usually do with your family?', 'Who are you closest to in your family?', 'Can you describe one family member?'],
    'Hobbies': ['What do you like to do in your free time?', 'How often do you do your hobby?', 'When did you start this hobby?', 'Why do you enjoy it?', 'Would you like to try a new hobby?'],
    'Food': ['What food do you usually eat at home?', 'What is your favorite meal?', 'Do you prefer spicy or mild food?', 'Can you cook your favorite food?', 'What food would you recommend to a friend?'],
    'Feelings': ['How do you feel today?', 'What usually makes you feel happy?', 'What makes you feel stressed?', 'What do you do when you feel tired?', 'How do you calm yourself when you feel anxious?'],
    'Small Talk': ['How would you greet a new colleague?', 'What simple topic would you use to start a conversation?', "How would you ask about someone's weekend?", "What would you say about today's weather?", 'How would you end a short conversation politely?'],
    'My Job': ['What do you do for a living?', 'Where do you work?', 'What are your main responsibilities?', 'What tools do you usually use at work?', 'What do you enjoy most about your job?'],
    'Travel': ['Where would you like to travel?', 'How do you usually prepare for a trip?', 'Do you prefer traveling by train, bus, or plane?', 'What do you usually book before leaving?', 'Can you describe a memorable trip?'],
    'Health': ['How do you feel today?', 'What do you do to stay healthy?', 'What do you usually do when you feel sick?', 'How often do you exercise?', 'What healthy habit would you like to improve?'],
    'Programming Basics': ['What programming language are you learning?', 'What is a variable?', 'What is a function used for?', 'Which programming concept is difficult for you?', 'How do you practice programming basics?'],
    'Web Development': ['What kind of website have you built?', 'Do you prefer frontend or backend development?', 'Which technologies do you use for web development?', 'What makes a website easy to use?', 'What web development skill do you want to improve?'],
    'Bugs and Fixes': ['What bug did you find recently?', 'How did the bug affect the application?', 'How did you find the cause?', 'What did you do to fix it?', 'How did you test the solution?'],
    'My Future Goals': ['What is your main goal for the future?', 'Why is this goal important to you?', 'What steps are you taking now?', 'What challenge might you face?', 'How will you know that you achieved your goal?']
};

const getTopicConversationContent = (topic, dayNumber) => {
    let profileName = Object.entries(topicProfileGroups).find(([, topics]) => topics.includes(topic))?.[0] || 'social';
    let profile = topicConversationProfiles[profileName];
    return {
        phrases: profile.phrases(topic).map(([en, id, example]) => ({ en, id, example })),
        questions: topicQuestionOverrides[topic] || profile.questions(topic, dayNumber)
    };
};

const curriculum = [];
for (let i = 1; i <= 90; i++) {
    let type = 'normal';
    if (i % 30 === 0) type = 'test';
    else if (i % 7 === 0) type = 'review';
    else if (i === 29 || i === 59 || i === 89) type = 'mixed';

    let t = topicsList[i - 1] || `Day ${i} Topic`;
    
    // Get unique mapped vocabularies or fallback dynamically
    let specific = daySpecificData[i] || { 
        v: [["aspect", "aspek"], ["consider", "mempertimbangkan"], ["impact", "dampak"], ["usually", "biasanya"], ["relate", "berhubungan"]], 
        e: [`One important aspect of ${t.toLowerCase()} is consistency.`, `We must consider the impact of this topic.`, `I usually relate this to my daily life.`] 
    };

    let conversationContent = getTopicConversationContent(t, i);

    curriculum.push({
        day: i, month: Math.ceil(i / 30), week: Math.ceil(i / 7), topic: t, type: type,
        goal: `Master conversational expressions about ${t}.`,
        phrases: conversationContent.phrases,
        vocabulary: specific.v.map(item => ({ en: item[0], id: item[1] })),
        examples: specific.e,
        questions: conversationContent.questions,
        speakingChallenge: `Talk non-stop for 60 seconds explaining your personal thoughts on ${t}.`
    });
}

// Override Day 1, 2 for realism
curriculum[0] = { ...curriculum[0], 
    phrases: [
        { en: "My name is...", id: "Nama saya...", example: "My name is Budi." },
        { en: "I am from...", id: "Saya berasal dari...", example: "I am from Jakarta." },
        { en: "I work as...", id: "Saya bekerja sebagai...", example: "I work as a web developer." }
    ],
    vocabulary: [ { en: "name", id: "nama" }, { en: "live", id: "tinggal" }, { en: "work", id: "bekerja" }, { en: "student", id: "mahasiswa" }, { en: "hometown", id: "kampung halaman" } ],
    examples: [ "My name is Budi and I am from Jakarta.", "I live in a small apartment.", "Nice to meet you, I work as a developer." ],
    questions: [ "What is your full name?", "Where are you originally from?", "Where do you live right now?", "What do you do for a living?", "Are you a student or a worker?" ],
    speakingChallenge: "Introduce yourself completely: name, origin, current city, and what you do."
};

// Data Parser Helpers to save code space
const parseData = (rawStr, mapFn) => rawStr.trim().split('\n').map(line => {
    let parts = line.split('|');
    return mapFn(parts);
}).filter(Boolean);

// 1. CHUNKS DATABASE (>200 items, grouped)
const rawChunks = `
Daily Conversation|I usually...|Saya biasanya...|I usually wake up at 6 AM.
Daily Conversation|I often...|Saya sering...|I often read books at night.
Daily Conversation|I rarely...|Saya jarang...|I rarely eat fast food.
Daily Conversation|I want to...|Saya ingin...|I want to learn English.
Daily Conversation|I need to...|Saya perlu...|I need to finish this today.
Daily Conversation|I have to...|Saya harus...|I have to go now.
Daily Conversation|I am going to...|Saya akan...|I am going to call him.
Daily Conversation|I like...|Saya suka...|I like listening to music.
Daily Conversation|I don't like...|Saya tidak suka...|I don't like waiting.
Daily Conversation|I prefer...|Saya lebih suka...|I prefer coffee over tea.
Daily Conversation|I plan to...|Saya berencana untuk...|I plan to travel next year.
Daily Conversation|It seems that...|Sepertinya...|It seems that it will rain.
Daily Conversation|I'm used to...|Saya terbiasa...|I'm used to waking up early.
Daily Conversation|I can't wait to...|Saya tidak sabar untuk...|I can't wait to see you.
Daily Conversation|It's time to...|Saatnya untuk...|It's time to go to bed.
Daily Conversation|I'm looking forward to...|Saya menantikan...|I'm looking forward to the weekend.
Daily Conversation|Do you mind if...|Apakah Anda keberatan jika...|Do you mind if I sit here?
Daily Conversation|I'm thinking about...|Saya sedang memikirkan...|I'm thinking about changing jobs.
Daily Conversation|Let me know if...|Beri tahu saya jika...|Let me know if you need help.
Daily Conversation|By the way,...|Ngomong-ngomong,...|By the way, how is your family?
Asking Questions|What do you mean?|Apa maksudmu?|What do you mean by that statement?
Asking Questions|Could you repeat that?|Bisa tolong ulangi?|Could you repeat that, please?
Asking Questions|What happened?|Apa yang terjadi?|What happened to the system?
Asking Questions|Why do you think so?|Mengapa Anda berpikir begitu?|Why do you think so? I disagree.
Asking Questions|Can you explain?|Bisa tolong jelaskan?|Can you explain how this works?
Asking Questions|How does it work?|Bagaimana cara kerjanya?|How does it work exactly?
Asking Questions|What should I do?|Apa yang harus saya lakukan?|What should I do if it fails?
Asking Questions|Is it possible to...?|Apakah mungkin untuk...?|Is it possible to extend the deadline?
Asking Questions|How long does it take?|Berapa lama waktu yang dibutuhkan?|How long does it take to compile?
Asking Questions|What is the difference between...?|Apa perbedaan antara...?|What is the difference between these two?
Asking Questions|Are you sure?|Apakah kamu yakin?|Are you sure about the data?
Asking Questions|Could you give an example?|Bisa berikan contoh?|Could you give an example of that?
Asking Questions|What are you looking for?|Apa yang sedang kamu cari?|What are you looking for in this project?
Asking Questions|How do you spell that?|Bagaimana kamu mengejanya?|How do you spell your last name?
Asking Questions|Who is in charge of...?|Siapa yang bertanggung jawab atas...?|Who is in charge of this team?
Asking Questions|Have you ever...?|Pernahkah kamu...?|Have you ever used this software?
Asking Questions|What's the matter?|Ada masalah apa?|What's the matter with the connection?
Asking Questions|Do you have any idea?|Apakah kamu tahu/punya ide?|Do you have any idea where he is?
Asking Questions|What if...?|Bagaimana jika...?|What if we change the layout?
Asking Questions|Where can I find...?|Di mana saya bisa menemukan...?|Where can I find the documentation?
Giving Opinions|I think...|Saya pikir...|I think this is a good idea.
Giving Opinions|In my opinion...|Menurut pendapat saya...|In my opinion, we should wait.
Giving Opinions|As far as I know...|Sejauh yang saya tahu...|As far as I know, the server is up.
Giving Opinions|I believe...|Saya percaya/yakin...|I believe we can achieve the target.
Giving Opinions|From my experience...|Dari pengalaman saya...|From my experience, this method works best.
Giving Opinions|To be honest,...|Sejujurnya,...|To be honest, I'm not satisfied.
Giving Opinions|Personally, I feel...|Secara pribadi, saya merasa...|Personally, I feel this is too risky.
Giving Opinions|If you ask me,...|Kalau Anda bertanya pada saya,...|If you ask me, we need more time.
Giving Opinions|It seems to me that...|Tampaknya bagi saya...|It seems to me that we are losing focus.
Giving Opinions|I strongly believe...|Saya sangat yakin...|I strongly believe in this project.
Giving Opinions|I assume that...|Saya berasumsi bahwa...|I assume that everyone agrees.
Giving Opinions|I figure that...|Saya menyimpulkan bahwa...|I figure that it will cost more.
Giving Opinions|As I see it,...|Seperti yang saya lihat,...|As I see it, there are two options.
Giving Opinions|I'm convinced that...|Saya yakin bahwa...|I'm convinced that this is the right path.
Giving Opinions|To my mind,...|Menurut pikiran saya,...|To my mind, quality is more important.
Giving Opinions|I guess...|Saya tebak/rasa...|I guess we should start now.
Giving Opinions|I suppose...|Saya mengira...|I suppose it's not a big deal.
Giving Opinions|What I mean is...|Maksud saya adalah...|What I mean is we need a backup.
Giving Opinions|I would say that...|Saya akan mengatakan bahwa...|I would say that it was successful.
Giving Opinions|Without a doubt,...|Tanpa ragu,...|Without a doubt, she is the best candidate.
Work Conversation|I am working on...|Saya sedang mengerjakan...|I am working on the new feature.
Work Conversation|I have finished...|Saya telah menyelesaikan...|I have finished the report.
Work Conversation|I need more time...|Saya butuh lebih banyak waktu...|I need more time to test it.
Work Conversation|Let's discuss...|Mari kita diskusikan...|Let's discuss this in the meeting.
Work Conversation|I found an issue...|Saya menemukan masalah...|I found an issue in the code.
Work Conversation|Please send me...|Tolong kirimkan saya...|Please send me the updated file.
Work Conversation|I'll look into it.|Saya akan memeriksanya.|I'll look into it right away.
Work Conversation|Can we schedule a meeting?|Bisa kita jadwalkan rapat?|Can we schedule a meeting for tomorrow?
Work Conversation|Keep me updated.|Beri tahu saya perkembangannya.|Keep me updated on the progress.
Work Conversation|I'll get back to you.|Saya akan menghubungi Anda kembali.|I'll get back to you soon.
Work Conversation|I'm in a meeting right now.|Saya sedang rapat sekarang.|I'm in a meeting right now, I'll call back.
Work Conversation|Could you prioritize this?|Bisa tolong prioritaskan ini?|Could you prioritize this task?
Work Conversation|We are behind schedule.|Kita tertinggal dari jadwal.|We are behind schedule on the launch.
Work Conversation|Good job on...|Kerja bagus pada...|Good job on the presentation today.
Work Conversation|I need your approval.|Saya butuh persetujuan Anda.|I need your approval before I proceed.
Work Conversation|Let's wrap this up.|Mari kita selesaikan ini.|Let's wrap this up by 5 PM.
Work Conversation|I will take care of it.|Saya akan mengurusnya.|Don't worry, I will take care of it.
Work Conversation|Please find attached...|Terlampir...|Please find attached the invoice.
Work Conversation|I'm out of the office.|Saya sedang tidak di kantor.|I'm out of the office until Monday.
Work Conversation|Let's catch up later.|Mari ngobrol lagi nanti.|Let's catch up later this afternoon.
Study Conversation|I have an assignment...|Saya punya tugas...|I have an assignment due tomorrow.
Study Conversation|I need to study for...|Saya harus belajar untuk...|I need to study for the final exam.
Study Conversation|I didn't understand the lecture.|Saya tidak mengerti kuliahnya.|I didn't understand the lecture today.
Study Conversation|Can I borrow your notes?|Boleh saya pinjam catatanmu?|Can I borrow your notes from yesterday?
Study Conversation|I'm struggling with...|Saya kesulitan dengan...|I'm struggling with this math problem.
Study Conversation|Let's study together.|Ayo belajar bersama.|Let's study together in the library.
Study Conversation|What's the deadline?|Kapan tenggat waktunya?|What's the deadline for the paper?
Study Conversation|I failed the test.|Saya gagal dalam ujian.|I failed the test, I need to retake it.
Study Conversation|I passed the exam!|Saya lulus ujian!|I passed the exam with flying colors!
Study Conversation|I'm writing my thesis on...|Saya menulis tesis tentang...|I'm writing my thesis on AI.
Study Conversation|When is it due?|Kapan ini harus dikumpulkan?|When is the project due?
Study Conversation|I got a good grade.|Saya mendapat nilai bagus.|I got a good grade in physics.
Study Conversation|Who is your professor?|Siapa dosenmu?|Who is your professor for biology?
Study Conversation|I missed the class.|Saya melewatkan kelas.|I missed the class because I was sick.
Study Conversation|I need to review...|Saya perlu meninjau ulang...|I need to review chapter 3.
Study Conversation|Have you finished the reading?|Sudahkah kamu selesai membaca?|Have you finished the reading assignment?
Study Conversation|Can you tutor me?|Bisakah kamu mengajariku?|Can you tutor me in chemistry?
Study Conversation|I'm dropping this class.|Saya membatalkan kelas ini.|I'm dropping this class, it's too hard.
Study Conversation|I'm majoring in...|Saya mengambil jurusan...|I'm majoring in computer science.
Study Conversation|What's on the syllabus?|Apa saja yang ada di silabus?|What's on the syllabus for this week?
Technology Conversation|The system is working.|Sistemnya berjalan.|The system is working perfectly.
Technology Conversation|The application needs improvement.|Aplikasi butuh perbaikan.|The application needs improvement in UI.
Technology Conversation|I found a bug.|Saya menemukan bug.|I found a bug in the login page.
Technology Conversation|The feature is completed.|Fiturnya sudah selesai.|The payment feature is completed.
Technology Conversation|The server is down.|Server sedang mati.|The main server is down right now.
Technology Conversation|Please clear your cache.|Tolong bersihkan cache Anda.|Please clear your cache and try again.
Technology Conversation|Try restarting the app.|Coba mulai ulang aplikasinya.|Try restarting the app if it freezes.
Technology Conversation|I need access to...|Saya butuh akses ke...|I need access to the database.
Technology Conversation|The network is slow.|Jaringannya lambat.|The network is slow today.
Technology Conversation|Update your software.|Perbarui perangkat lunak Anda.|Please update your software to the latest version.
Technology Conversation|It's compatible with...|Ini kompatibel dengan...|It's compatible with Android and iOS.
Technology Conversation|We need to deploy...|Kita perlu men-deploy...|We need to deploy the code tonight.
Technology Conversation|The data is corrupted.|Datanya rusak.|The user data is corrupted.
Technology Conversation|I forgot my password.|Saya lupa kata sandi saya.|I forgot my password, how to reset it?
Technology Conversation|Is it secure?|Apakah ini aman?|Is the transaction secure?
Technology Conversation|Let's run a test.|Mari kita jalankan pengujian.|Let's run a test before launching.
Technology Conversation|The interface is user-friendly.|Antarmukanya ramah pengguna.|The new interface is very user-friendly.
Technology Conversation|We have an outage.|Kita mengalami pemadaman/gangguan.|We have an outage in the cloud region.
Technology Conversation|Backup the files.|Cadangkan file-file tersebut.|Always backup the files daily.
Technology Conversation|Check the logs.|Periksa lognya.|Check the error logs to find the issue.
Problem Solving|Let's find a solution.|Mari temukan solusi.|Let's find a solution to this issue.
Problem Solving|What is the root cause?|Apa penyebab utamanya?|We need to find what is the root cause.
Problem Solving|We can fix this by...|Kita bisa memperbaiki ini dengan...|We can fix this by updating the script.
Problem Solving|How about we try...?|Bagaimana kalau kita mencoba...?|How about we try a different approach?
Problem Solving|That didn't work.|Itu tidak berhasil.|That didn't work, let's try plan B.
Problem Solving|Let's brainstorm.|Mari kita bertukar pikiran.|Let's brainstorm some ideas.
Problem Solving|I have a suggestion.|Saya punya saran.|I have a suggestion to solve this.
Problem Solving|What are the alternatives?|Apa alternatifnya?|What are the alternatives if this fails?
Problem Solving|We should consider...|Kita harus mempertimbangkan...|We should consider the risks.
Problem Solving|Let's break it down.|Mari kita pecah/uraikan.|Let's break it down into smaller steps.
Problem Solving|Here's the plan.|Ini rencananya.|Here's the plan to resolve the crisis.
Problem Solving|I can handle this.|Saya bisa menangani ini.|Don't worry, I can handle this part.
Problem Solving|Who can assist with this?|Siapa yang bisa membantu ini?|Who can assist with this bug?
Problem Solving|It's too complicated.|Ini terlalu rumit.|It's too complicated, let's simplify it.
Problem Solving|Let's focus on...|Mari kita fokus pada...|Let's focus on the main error first.
Problem Solving|We need a workaround.|Kita butuh jalan pintas sementara.|We need a workaround until it's fully fixed.
Problem Solving|Are there any other options?|Apakah ada opsi lain?|Are there any other options available?
Problem Solving|This is a priority.|Ini adalah prioritas.|Fixing this bug is a priority.
Problem Solving|I will take responsibility.|Saya akan bertanggung jawab.|I will take responsibility for this error.
Problem Solving|Let's test it again.|Mari kita uji lagi.|Let's test it again after the changes.
Time Expressions|Right now|Sekarang juga|I need it right now.
Time Expressions|In the meantime|Sementara itu|In the meantime, let's prepare the docs.
Time Expressions|Sooner or later|Cepat atau lambat|Sooner or later, we have to update it.
Time Expressions|From time to time|Sesekali|I check the logs from time to time.
Time Expressions|At the moment|Saat ini|She is busy at the moment.
Time Expressions|Ahead of time|Lebih awal|We finished the project ahead of time.
Time Expressions|Out of time|Kehabisan waktu|We are running out of time.
Time Expressions|Just in time|Tepat waktu|You arrived just in time for the meeting.
Time Expressions|Day by day|Hari demi hari|It gets better day by day.
Time Expressions|All day long|Sepanjang hari|I was coding all day long.
Time Expressions|In a hurry|Buru-buru|Sorry, I am in a hurry.
Time Expressions|Take your time|Santai saja/Jangan terburu-buru|Take your time reviewing the code.
Time Expressions|Overnight|Semalaman/Tiba-tiba|The system crashed overnight.
Time Expressions|Once in a while|Sekali-sekali|I drink coffee once in a while.
Time Expressions|Up to date|Terbaru|Ensure your software is up to date.
Time Expressions|For the time being|Untuk sementara waktu|Let's use this server for the time being.
Time Expressions|As soon as possible|Secepat mungkin|Please reply as soon as possible.
Time Expressions|A long time ago|Dulu sekali|I learned Java a long time ago.
Time Expressions|Right on time|Tepat pada waktunya|The bus arrived right on time.
Time Expressions|By the end of the day|Pada akhir hari|Submit it by the end of the day.
Agreement & Disagreement|I completely agree.|Saya sangat setuju.|I completely agree with your point.
Agreement & Disagreement|That's absolutely right.|Itu sangat benar.|That's absolutely right, we need more budget.
Agreement & Disagreement|I'm with you on that.|Saya sependapat denganmu.|I'm with you on that decision.
Agreement & Disagreement|No doubt about it.|Tidak ada keraguan tentang itu.|No doubt about it, she is skilled.
Agreement & Disagreement|You have a point there.|Kamu benar juga di situ.|You have a point there, but consider this.
Agreement & Disagreement|I see your point, but...|Saya mengerti maksudmu, tapi...|I see your point, but it's expensive.
Agreement & Disagreement|I totally disagree.|Saya sangat tidak setuju.|I totally disagree with the new policy.
Agreement & Disagreement|I'm afraid I disagree.|Maaf, saya tidak setuju.|I'm afraid I disagree with the deadline.
Agreement & Disagreement|That's not always true.|Itu tidak selalu benar.|That's not always true for every case.
Agreement & Disagreement|I don't think so.|Saya tidak berpikir begitu.|I don't think so, the data says otherwise.
Agreement & Disagreement|Exactly!|Tepat sekali!|Exactly! That's what I meant.
Agreement & Disagreement|I couldn't agree more.|Saya sangat setuju.|I couldn't agree more with the CEO.
Agreement & Disagreement|You're right.|Kamu benar.|You're right, we should test it first.
Agreement & Disagreement|I guess so.|Saya rasa begitu.|I guess so, if you say it works.
Agreement & Disagreement|Fair enough.|Masuk akal/Bisa diterima.|Fair enough, we will do it your way.
Agreement & Disagreement|I completely disagree.|Saya sepenuhnya tidak setuju.|I completely disagree with the approach.
Agreement & Disagreement|That's out of the question.|Itu tidak mungkin.|Reducing the budget is out of the question.
Agreement & Disagreement|I beg to differ.|Saya punya pendapat berbeda.|I beg to differ on that matter.
Agreement & Disagreement|Not necessarily.|Belum tentu.|Not necessarily, it depends on the user.
Agreement & Disagreement|Let's agree to disagree.|Mari sepakat untuk tidak sepakat.|We won't solve this, let's agree to disagree.
Emergency Speaking Fillers|Let me think.|Biarkan saya berpikir.|Let me think... maybe tomorrow?
Emergency Speaking Fillers|Give me a second.|Beri saya waktu sebentar.|Give me a second to open the file.
Emergency Speaking Fillers|I'm not sure.|Saya tidak yakin.|I'm not sure about the exact number.
Emergency Speaking Fillers|That's a good question.|Itu pertanyaan yang bagus.|That's a good question, let me check.
Emergency Speaking Fillers|How can I explain it?|Bagaimana saya menjelaskannya?|How can I explain it? It's like a loop.
Emergency Speaking Fillers|You know,...|Kau tahu,...|You know, it's actually quite simple.
Emergency Speaking Fillers|Well,...|Yah,...|Well, I think we should wait.
Emergency Speaking Fillers|Basically,...|Pada dasarnya,...|Basically, the app is a calculator.
Emergency Speaking Fillers|I mean,...|Maksud saya,...|It's cheap. I mean, it's affordable.
Emergency Speaking Fillers|Actually,...|Sebenarnya,...|Actually, I have a better idea.
Emergency Speaking Fillers|To be honest,...|Sejujurnya,...|To be honest, I forgot.
Emergency Speaking Fillers|What I'm trying to say is...|Yang saya coba katakan adalah...|What I'm trying to say is we need help.
Emergency Speaking Fillers|It's kind of...|Ini semacam...|It's kind of difficult to set up.
Emergency Speaking Fillers|Like I said,...|Seperti yang saya bilang,...|Like I said, the meeting is at 2.
Emergency Speaking Fillers|At the end of the day,...|Pada akhirnya,...|At the end of the day, quality matters.
Emergency Speaking Fillers|Let's see...|Mari kita lihat...|Let's see... we have three options.
Emergency Speaking Fillers|Wait a minute.|Tunggu sebentar.|Wait a minute, I found the error.
Emergency Speaking Fillers|If I'm not mistaken,...|Kalau saya tidak salah,...|If I'm not mistaken, he resigned.
Emergency Speaking Fillers|As a matter of fact,...|Faktanya,...|As a matter of fact, the project is done.
Emergency Speaking Fillers|Whatever you call it,...|Apa pun sebutannya,...|It's a bug or a glitch, whatever you call it.`;

const chunksData = parseData(rawChunks, p => ({ category: p[0], en: p[1], id: p[2], example: p[3] }));

const rawVocab = `
A|assignment|tugas|I need to finish my assignment tonight.
A|application|aplikasi|The web application is ready.
A|analysis|analisis|We need a deep analysis of the data.
A|achieve|mencapai|We must achieve our monthly target.
A|access|akses|I don't have access to the server.
A|account|akun|Please log in to your account.
A|address|alamat/mengatasi|We need to address this issue.
A|advantage|keuntungan|What is the advantage of this tool?
B|bug|kutu/kesalahan|I found a bug in the code.
B|business|bisnis|He runs a software business.
B|budget|anggaran|The project is over budget.
B|background|latar belakang|Tell me about your background.
B|backup|cadangan|Always backup your files.
B|benefit|manfaat|The benefit of studying English is huge.
B|branch|cabang|Merge the code into the main branch.
B|browser|peramban|Open the link in your browser.
C|customer|pelanggan|The customer is complaining about the UI.
C|code|kode|The code is clean and readable.
C|company|perusahaan|I work for a tech company.
C|challenge|tantangan|This task is a big challenge.
C|client|klien|We have a meeting with the client.
C|colleague|rekan kerja|My colleague helped me fix it.
C|communication|komunikasi|Good communication is key.
C|connection|koneksi|Check your internet connection.
D|data|data|The data is stored in the database.
D|deadline|tenggat waktu|The deadline is next Friday.
D|discussion|diskusi|Let's have a discussion about the plan.
D|decision|keputusan|It was a hard decision to make.
D|department|departemen|He works in the IT department.
D|development|pengembangan|Software development takes time.
D|device|perangkat|Is this app responsive on mobile devices?
D|document|dokumen|Please sign the document.
E|email|surel|I will send you an email later.
E|error|kesalahan|There is an error on line 50.
E|experience|pengalaman|She has 5 years of experience.
E|employee|karyawan|The company has 100 employees.
E|environment|lingkungan|We need a good work environment.
E|equipment|peralatan|The office has new equipment.
E|event|acara|Are you joining the company event?
E|example|contoh|Can you give me an example?
F|feature|fitur|The new feature is amazing.
F|feedback|umpan balik|We need feedback from users.
F|file|berkas|Attach the file to the email.
F|focus|fokus|I need to focus on my study.
F|framework|kerangka kerja|React is a popular framework.
F|function|fungsi|This function calculates the total.
F|future|masa depan|What are your plans for the future?
F|failure|kegagalan|Failure is the first step to success.
G|goal|tujuan|My goal is to be fluent in English.
G|growth|pertumbuhan|The company shows steady growth.
G|guide|panduan|Read the user guide carefully.
G|gap|celah|There is a gap in our knowledge.
G|global|global|We are a global company.
G|grade|nilai|I got a good grade in math.
G|group|kelompok|We work in a group of five.
G|guest|tamu|We have a special guest today.
H|habit|kebiasaan|Reading daily is a good habit.
H|hardware|perangkat keras|The hardware is outdated.
H|headquarters|kantor pusat|The headquarters is in London.
H|health|kesehatan|Health is more important than wealth.
H|history|sejarah|Clear your browser history.
H|hobby|hobi|My hobby is playing guitar.
H|host|tuan rumah/peladen|The site is hosted on AWS.
H|hour|jam|The meeting lasted for one hour.
I|idea|ide|That's a brilliant idea.
I|impact|dampak|The update has a positive impact.
I|improvement|perbaikan/peningkatan|The app needs improvement.
I|industry|industri|The tech industry is growing fast.
I|information|informasi|I need more information about this.
I|input|masukan|Please provide your input.
I|issue|masalah|We have a major issue with the server.
I|interview|wawancara|I have a job interview tomorrow.
J|job|pekerjaan|I love my new job.
J|journey|perjalanan|Learning English is a journey.
J|junior|pemula/junior|He is a junior developer.
J|judgment|penilaian|I trust your judgment.
J|journal|jurnal|I read a science journal.
J|justice|keadilan|We fight for justice.
J|join|bergabung|Click the link to join the meeting.
K|key|kunci|Communication is the key to success.
K|knowledge|pengetahuan|Knowledge is power.
K|keyboard|papan ketik|My keyboard is broken.
K|kind|jenis|What kind of music do you like?
K|keyword|kata kunci|Search for the right keyword.
L|language|bahasa|JavaScript is a programming language.
L|laptop|komputer jinjing|I need a new laptop for work.
L|leader|pemimpin|She is a great team leader.
L|lecture|kuliah/ceramah|The professor gave a long lecture.
L|level|tingkat|What is your English level?
L|library|perpustakaan|I study at the library.
L|link|tautan|Click the link to verify your email.
L|logic|logika|The logic of this code is complex.
M|management|manajemen|Time management is crucial.
M|manager|manajer|My manager is very supportive.
M|market|pasar|We target the global market.
M|meeting|rapat|The meeting starts at 9 AM.
M|member|anggota|He is a member of the IT team.
M|message|pesan|I received your message.
M|method|metode|We use an agile method.
M|mistake|kesalahan|I made a mistake in the report.
N|name|nama|What is the project name?
N|network|jaringan|The network is down.
N|news|berita|Did you hear the good news?
N|note|catatan|Take a note during the lecture.
N|number|nomor/angka|The number of users is increasing.
N|nature|sifat/alam|The nature of this problem is complex.
N|notification|pemberitahuan|Turn on the notification.
O|objective|tujuan/sasaran|Our main objective is to increase sales.
O|office|kantor|I am leaving the office now.
O|opinion|pendapat|What is your opinion on this?
O|opportunity|peluang|This is a great opportunity.
O|option|pilihan|We have two options here.
O|order|pesanan/perintah|The customer canceled the order.
O|outcome|hasil|The outcome was better than expected.
O|owner|pemilik|Who is the owner of this repository?
P|password|kata sandi|Don't share your password.
P|performance|kinerja|We need to optimize the performance.
P|plan|rencana|What is the plan for tomorrow?
P|problem|masalah|We have a problem with the API.
P|process|proses|The hiring process takes two weeks.
P|product|produk|We are launching a new product.
P|project|proyek|The project is almost done.
P|purpose|tujuan|What is the purpose of this meeting?
Q|quality|kualitas|Code quality is very important.
Q|quantity|kuantitas|Quality is better than quantity.
Q|question|pertanyaan|I have a question for you.
Q|queue|antrean|The job is placed in the queue.
Q|quote|kutipan/penawaran|Please send us a price quote.
R|reason|alasan|What is the reason for the delay?
R|record|rekaman/catatan|Keep a record of all transactions.
R|report|laporan|Submit the report by Friday.
R|request|permintaan|I have a feature request.
R|requirement|persyaratan|Check the system requirements.
R|research|penelitian|She is doing research on AI.
R|resource|sumber daya|We don't have enough resources.
R|result|hasil|The test result is positive.
S|schedule|jadwal|Check your schedule for tomorrow.
S|security|keamanan|Data security is our top priority.
S|service|layanan|The customer service is excellent.
S|skill|keterampilan|Programming is a valuable skill.
S|software|perangkat lunak|Install the latest software.
S|solution|solusi|We need to find a quick solution.
S|strategy|strategi|Our marketing strategy is working.
S|system|sistem|The system is currently undergoing maintenance.
T|target|target/sasaran|We reached our sales target.
T|task|tugas|I have many tasks today.
T|team|tim|Our team is very productive.
T|technology|teknologi|Technology is changing the world.
T|test|pengujian|We need to run a test.
T|time|waktu|Time is money.
T|tool|alat|VS Code is a great tool for developers.
T|topic|topik|The topic of the presentation is interesting.
U|update|pembaruan|There is a new system update.
U|user|pengguna|The user cannot log in.
U|university|universitas|He graduated from a top university.
U|understanding|pemahaman|I have a clear understanding of it.
U|unit|unit|We need to perform unit testing.
U|usage|penggunaan|Monitor the CPU usage.
V|value|nilai|Provide value to the customers.
V|variable|variabel|Define the variable at the top.
V|version|versi|We are using version 2.0.
V|view|tampilan/pandangan|From my point of view, it's fine.
V|vision|visi|The company has a clear vision.
V|voice|suara|Your voice is breaking up.
W|warning|peringatan|Ignore the warning in the console.
W|way|cara/jalan|Is there a better way to do this?
W|website|situs web|Our website is down.
W|week|minggu|I have a day off next week.
W|window|jendela|Open a new browser window.
W|work|pekerjaan|I have a lot of work to do.
X|xml|XML (Format Data)|The data is exported in XML format.
Y|year|tahun|It's been a busy year.
Y|yield|hasil|The investment yields a high return.
Z|zone|zona|We are in a different time zone.
Z|zoom|perbesaran/Zoom app|Let's have a Zoom meeting.`;

const programmingWords = new Set(`
api application backend browser bug cache code component console cpu csv database deploy developer documentation
error feature file folder framework function github html interface javascript keyword laptop logic network notification
password performance repository script security server software system test tool unit update usage user variable version website window xml
`.trim().split(/\s+/));

const studyWords = new Set(`
academic analysis assignment campus course data education exam journal knowledge lecture library method note question research result skill thesis university
`.trim().split(/\s+/));

const categorizeLegacyVocab = word => {
    if (programmingWords.has(word)) return 'Programming';
    if (studyWords.has(word)) return 'Study';
    return 'Work';
};

const legacyVocabData = parseData(rawVocab, p => ({
    letter: p[0],
    word: p[1],
    meaning: p[2],
    id: p[2],
    category: categorizeLegacyVocab(p[1]),
    example: p[3]
}));

const personalVocabGroups = {
    'Daily Life': `
morning=pagi;night=malam;breakfast=sarapan;dinner=makan malam;work=bekerja;study=belajar;sleep=tidur;clean=membersihkan;rest=beristirahat;routine=rutinitas;
afternoon=siang;schedule=jadwal;habit=kebiasaan;weekend=akhir pekan;weekday=hari kerja;today=hari ini;tomorrow=besok;yesterday=kemarin;early=lebih awal;late=terlambat;
busy=sibuk;free=luang;tired=lelah;hungry=lapar;thirsty=haus;healthy=sehat;sick=sakit;ready=siap;careful=berhati-hati;comfortable=nyaman;
shower=mandi;laundry=cucian;exercise=olahraga;walk=berjalan kaki;meal=makanan;snack=camilan;coffee=kopi;tea=teh;water=air;rice=nasi;
bread=roti;fruit=buah;soup=sup;vegetable=sayuran;weather=cuaca;rain=hujan;sunshine=sinar matahari;traffic=lalu lintas;commute=perjalanan kerja;neighborhood=lingkungan;
friend=teman;family=keluarga;parent=orang tua;sibling=saudara kandung;conversation=percakapan;message=pesan;phone=telepon;wallet=dompet;key=kunci;money=uang;
clothes=pakaian;shirt=kemeja;shoes=sepatu;bag=tas;umbrella=payung;grocery=belanjaan;market=pasar;store=toko;queue=antrean;receipt=struk;
appointment=janji temu;medicine=obat;break=istirahat singkat;hobby=hobi;music=musik;movie=film;book=buku;game=permainan;week=minggu;month=bulan;
minute=menit;hour=jam;always=selalu;usually=biasanya;sometimes=kadang-kadang;often=sering;rarely=jarang;never=tidak pernah;before=sebelum;after=sesudah;
inside=di dalam;outside=di luar;near=dekat;far=jauh;together=bersama;alone=sendirian;again=lagi;already=sudah;still=masih;enough=cukup
    `,
    'Things at Home': `
table=meja;chair=kursi;bed=tempat tidur;pillow=bantal;blanket=selimut;mirror=cermin;fan=kipas angin;lamp=lampu;wardrobe=lemari pakaian;kitchen=dapur;
spoon=sendok;plate=piring;glass=gelas;towel=handuk;remote=remot;charger=pengisi daya;sofa=sofa;door=pintu;window=jendela;floor=lantai;
wall=dinding;roof=atap;room=kamar;bathroom=kamar mandi;bedroom=kamar tidur;living room=ruang keluarga;garage=garasi;garden=kebun;stairs=tangga;balcony=balkon;
curtain=tirai;carpet=karpet;shelf=rak;drawer=laci;cupboard=lemari;desk=meja kerja;clock=jam dinding;calendar=kalender;basket=keranjang;box=kotak;
bottle=botol;cup=cangkir;bowl=mangkuk;fork=garpu;knife=pisau;pan=wajan;pot=panci;kettle=ketel;stove=kompor;fridge=kulkas;
freezer=lemari pembeku;sink=wastafel;tap=keran;soap=sabun;shampoo=sampo;toothbrush=sikat gigi;toothpaste=pasta gigi;broom=sapu;mop=pel;bucket=ember;
trash bin=tempat sampah;tissue=tisu;washing machine=mesin cuci;iron=setrika;vacuum cleaner=penyedot debu;television=televisi;speaker=pengeras suara;headphones=headphone;cable=kabel;plug=steker;
socket=stopkontak;router=router;computer=komputer;screen=layar;mouse=mouse;keyboard=papan ketik;notebook=buku catatan;pen=pulpen;scissors=gunting;hanger=gantungan baju;
doorbell=bel pintu;lock=kunci pintu;mat=keset;container=wadah;tray=nampan;oven=oven;microwave=microwave;detergent=deterjen;stool=bangku;switch=sakelar
    `,
    'K-pop Life': `
album=album;photocard=kartu foto;concert=konser;ticket=tiket;comeback=comeback;fandom=fandom;bias=idola favorit;playlist=daftar putar;merchandise=barang resmi;lightstick=lightstick;
fan meeting=pertemuan penggemar;stage=panggung;performance=penampilan;teaser=teaser;music video=video musik;idol=idola;group=grup;member=anggota;leader=pemimpin;rapper=rapper;
vocalist=vokalis;dancer=penari;soloist=penyanyi solo;trainee=peserta pelatihan;debut=debut;title track=lagu utama;b-side=lagu pendamping;single=singel;release=rilis;streaming=streaming;
lyrics=lirik;choreography=koreografi;outfit=pakaian panggung;concept=konsep;poster=poster;pre-order=pesan awal;package=paket;version=versi;collection=koleksi;sleeve=pelindung kartu;
trade=bertukar;wishlist=daftar keinginan;unboxing=membuka paket;livestream=siaran langsung;award=penghargaan;vote=memilih;chart=tangga lagu;encore=penampilan tambahan;subtitles=teks terjemahan;episode=episode;
variety show=acara ragam;rehearsal=latihan panggung;venue=lokasi acara;seat=kursi;queue=antrean;fanbase=komunitas penggemar;update=pembaruan;announcement=pengumuman;favorite=favorit;autograph=tanda tangan
    `,
    'Travel': `
airport=bandara;ticket=tiket;passport=paspor;suitcase=koper;hotel=hotel;destination=tujuan perjalanan;trip=perjalanan;train=kereta;bus=bus;station=stasiun;
map=peta;booking=pemesanan;check-in=check-in;departure=keberangkatan;arrival=kedatangan;flight=penerbangan;gate=gerbang;terminal=terminal;boarding pass=kartu naik pesawat;luggage=bagasi;
backpack=ransel;visa=visa;customs=bea cukai;immigration=imigrasi;platform=peron;route=rute;direction=arah;address=alamat;guide=pemandu;tour=tur;
tourist=wisatawan;journey=perjalanan;vacation=liburan;holiday=hari libur;reservation=reservasi;hostel=hostel;guesthouse=penginapan;reception=resepsionis;room key=kunci kamar;lobby=lobi;
elevator=lift;beach=pantai;mountain=gunung;island=pulau;city=kota;village=desa;country=negara;museum=museum;restaurant=restoran;cafe=kafe;
souvenir=suvenir;photo=foto;camera=kamera;itinerary=rencana perjalanan;delay=keterlambatan;cancel=pembatalan;transfer=transit;seat=kursi;aisle=lorong;window seat=kursi dekat jendela;
taxi=taksi;driver=pengemudi;rent=menyewa;car=mobil;motorbike=sepeda motor;walk=berjalan kaki;crossing=penyeberangan;corner=sudut;straight=lurus;left=kiri;
right=kanan;nearby=di dekat sini;distance=jarak;fare=tarif;cash=uang tunai;card=kartu;exchange=penukaran;currency=mata uang;local=lokal;foreign=asing;
safe=aman;crowded=ramai;quiet=tenang;view=pemandangan;adventure=petualangan
    `,
    'Study': `
assignment=tugas;campus=kampus;class=kelas;course=mata kuliah;lesson=pelajaran;teacher=guru;lecturer=dosen;student=mahasiswa;classmate=teman sekelas;semester=semester;
major=jurusan;subject=mata pelajaran;exam=ujian;quiz=kuis;score=nilai;grade=nilai;answer=jawaban;question=pertanyaan;exercise=latihan;practice=latihan;
homework=pekerjaan rumah;project=proyek;presentation=presentasi;slide=salindia;topic=topik;idea=ide;example=contoh;explanation=penjelasan;discussion=diskusi;group=kelompok;
research=penelitian;thesis=skripsi;theory=teori;method=metode;analysis=analisis;result=hasil;conclusion=kesimpulan;reference=referensi;source=sumber;article=artikel;
journal=jurnal;paper=makalah;chapter=bab;paragraph=paragraf;sentence=kalimat;word=kata;meaning=arti;grammar=tata bahasa;vocabulary=kosakata;pronunciation=pelafalan;
speaking=berbicara;listening=mendengarkan;reading=membaca;writing=menulis;note=catatan;notebook=buku catatan;pen=pulpen;marker=spidol;library=perpustakaan;book=buku;
deadline=tenggat waktu;schedule=jadwal;progress=kemajuan;feedback=umpan balik;revision=revisi;submit=mengumpulkan;learn=belajar;review=mengulas;understand=memahami;remember=mengingat;
focus=fokus;skill=keterampilan;knowledge=pengetahuan;certificate=sertifikat;scholarship=beasiswa
    `,
    'Programming': `
algorithm=algoritma;api=API;application=aplikasi;array=array;backend=backend;backup=cadangan;branch=branch;browser=browser;bug=bug;cache=cache;
class=class;client=klien;code=kode;command=perintah;component=komponen;console=console;database=basis data;debug=debug;deploy=deploy;design=desain;
developer=pengembang;documentation=dokumentasi;domain=domain;endpoint=endpoint;error=kesalahan;feature=fitur;file=berkas;folder=folder;framework=framework;frontend=frontend;
function=fungsi;github=GitHub;html=HTML;input=input;interface=antarmuka;javascript=JavaScript;keyword=kata kunci;laptop=laptop;layout=tata letak;library=library;
link=tautan;logic=logika;login=masuk;network=jaringan;notification=notifikasi;output=output;password=kata sandi;performance=kinerja;plugin=plugin;program=program;
repository=repositori;request=permintaan;response=respons;route=rute;script=skrip;security=keamanan;server=server;software=perangkat lunak;storage=penyimpanan;system=sistem;
terminal=terminal;test=pengujian;token=token;tool=alat;update=pembaruan;upload=mengunggah;url=URL;user=pengguna;variable=variabel;version=versi;
website=situs web;window=jendela;workflow=alur kerja;xml=XML;zoom=memperbesar
    `,
    'Work': `
agenda=agenda;agreement=kesepakatan;approval=persetujuan;assistant=asisten;attendance=kehadiran;benefit=tunjangan;boss=atasan;budget=anggaran;business=bisnis;career=karier;
client=klien;colleague=rekan kerja;company=perusahaan;contract=kontrak;customer=pelanggan;deadline=tenggat waktu;department=departemen;document=dokumen;email=surel;employee=karyawan;
employer=pemberi kerja;experience=pengalaman;feedback=umpan balik;goal=tujuan;interview=wawancara;invoice=faktur;job=pekerjaan;manager=manajer;meeting=rapat;office=kantor;
overtime=lembur;payment=pembayaran;position=posisi;professional=profesional;project=proyek;promotion=promosi;report=laporan;responsibility=tanggung jawab;salary=gaji;schedule=jadwal;
shift=giliran kerja;staff=staf;task=tugas;team=tim;training=pelatihan;workplace=tempat kerja;workload=beban kerja;remote=jarak jauh;target=target;priority=prioritas
    `
};

const vocabExampleOverrides = {
    'Daily Life:morning': 'I usually drink coffee in the morning.',
    'Daily Life:night': 'I study English at night.',
    'Daily Life:breakfast': 'I eat breakfast before work.',
    'Daily Life:dinner': 'We have dinner together at seven.',
    'Daily Life:work': 'I have a lot of work to finish today.',
    'Daily Life:study': 'I need a quiet place to study.',
    'Daily Life:sleep': 'I need enough sleep to feel refreshed.',
    'Daily Life:clean': 'I clean my room every Sunday.',
    'Daily Life:rest': 'I take a short rest after lunch.',
    'Daily Life:routine': 'My morning routine starts at six.',
    'Daily Life:today': 'I have an appointment today.',
    'Daily Life:tomorrow': 'I will buy groceries tomorrow.',
    'Daily Life:yesterday': 'I stayed at home yesterday.',
    'Daily Life:early': 'I woke up early this morning.',
    'Daily Life:late': 'The bus was late again.',
    'Daily Life:busy': 'I am busy with work today.',
    'Daily Life:free': 'I am free after dinner.',
    'Daily Life:tired': 'I feel tired after a long day.',
    'Daily Life:hungry': 'I am hungry, so I will make a sandwich.',
    'Daily Life:thirsty': 'I drink water when I feel thirsty.',
    'Daily Life:healthy': 'Walking every morning keeps me healthy.',
    'Daily Life:sick': 'I stayed home because I felt sick.',
    'Daily Life:ready': 'I am ready to leave the house.',
    'Daily Life:careful': 'Be careful when you cross the street.',
    'Daily Life:comfortable': 'These shoes are comfortable for walking.',
    'Daily Life:shower': 'I take a shower before breakfast.',
    'Daily Life:laundry': 'I do my laundry on the weekend.',
    'Daily Life:exercise': 'Regular exercise gives me more energy.',
    'Daily Life:walk': 'I take a short walk after dinner.',
    'Daily Life:weather': 'The weather is nice this morning.',
    'Daily Life:rain': 'The rain started before I left home.',
    'Daily Life:sunshine': 'The morning sunshine feels warm.',
    'Daily Life:traffic': 'The traffic is heavy during rush hour.',
    'Daily Life:commute': 'My daily commute takes about thirty minutes.',
    'Daily Life:neighborhood': 'There is a small cafe in my neighborhood.',
    'Daily Life:conversation': 'We had a nice conversation after lunch.',
    'Daily Life:message': 'I replied to her message this morning.',
    'Daily Life:phone': 'I left my phone on the table.',
    'Daily Life:wallet': 'I keep my card in my wallet.',
    'Daily Life:key': 'I cannot find my house key.',
    'Daily Life:money': 'I need to save some money this month.',
    'Daily Life:bag': 'I put my wallet in my bag.',
    'Daily Life:umbrella': 'Take an umbrella because it might rain.',
    'Daily Life:grocery': 'I bought some grocery items after work.',
    'Daily Life:market': 'I buy fresh vegetables at the market.',
    'Daily Life:store': 'The store closes at nine.',
    'Daily Life:queue': 'I waited in the queue for ten minutes.',
    'Daily Life:receipt': 'Please keep the receipt after you pay.',
    'Daily Life:appointment': 'I have a dentist appointment tomorrow.',
    'Daily Life:medicine': 'I take my medicine after breakfast.',
    'Daily Life:break': 'Let us take a short break.',
    'Daily Life:hobby': 'Reading is my favorite hobby.',
    'Daily Life:music': 'I listen to music on my way home.',
    'Daily Life:movie': 'We watched a movie last night.',
    'Daily Life:book': 'I read a book before going to sleep.',
    'Daily Life:game': 'We played a game after dinner.',
    'Daily Life:before': 'I wash my hands before dinner.',
    'Daily Life:after': 'I usually rest after work.',
    'Daily Life:inside': 'Please wait inside the house.',
    'Daily Life:outside': 'My shoes are outside the door.',
    'Daily Life:near': 'The store is near my house.',
    'Daily Life:far': 'My office is far from home.',
    'Daily Life:together': 'We usually eat dinner together.',
    'Daily Life:alone': 'I sometimes study alone at night.',
    'Daily Life:again': 'Please call me again after work.',
    'Daily Life:already': 'I have already finished my dinner.',
    'Daily Life:still': 'I am still waiting for the bus.',
    'Daily Life:enough': 'I have enough time to finish this task.',
    'Things at Home:blanket': 'I use a blanket when the weather is cold.',
    'Things at Home:charger': 'My phone charger is next to the bed.',
    'Things at Home:fan': 'The fan is too noisy.',
    'Things at Home:kitchen': 'I make breakfast in the kitchen.',
    'Things at Home:iron': 'I use the iron before going to work.',
    'Things at Home:tray': 'Please put the drinks on the tray.',
    'Things at Home:container': 'I keep the leftovers in a container.',
    'Things at Home:window': 'Please close the window before you leave.',
    'Things at Home:doorbell': 'The doorbell rang while I was cooking.',
    'Things at Home:lock': 'Please check the lock before going to bed.',
    'K-pop Life:album': 'I bought a new K-pop album last week.',
    'K-pop Life:photocard': 'I keep my favorite photocard in a sleeve.',
    'K-pop Life:concert': 'We bought tickets for the concert.',
    'K-pop Life:comeback': 'I watched the comeback stage last night.',
    'K-pop Life:ticket': 'I saved my concert ticket as a souvenir.',
    'K-pop Life:playlist': 'I added the new song to my playlist.',
    'K-pop Life:stage': 'The group performed on stage last night.',
    'K-pop Life:performance': 'Their live performance was amazing.',
    'K-pop Life:teaser': 'The new teaser was released this morning.',
    'K-pop Life:fan meeting': 'She met her favorite idol at the fan meeting.',
    'K-pop Life:lightstick': 'I brought my lightstick to the concert.',
    'K-pop Life:music video': 'The new music video looks amazing.',
    'K-pop Life:title track': 'The title track has a catchy chorus.',
    'K-pop Life:b-side': 'This b-side is my favorite song on the album.',
    'K-pop Life:streaming': 'Streaming helps more fans discover the song.',
    'K-pop Life:lyrics': 'I read the lyrics while listening to the song.',
    'K-pop Life:choreography': 'The choreography looks difficult to learn.',
    'K-pop Life:outfit': 'Her stage outfit looks beautiful.',
    'K-pop Life:concept': 'I like the concept of the new album.',
    'K-pop Life:trade': 'I want to trade this photocard with another fan.',
    'K-pop Life:unboxing': 'I recorded an unboxing video for my new album.',
    'K-pop Life:livestream': 'I watched the livestream after work.',
    'K-pop Life:award': 'The group won an award last night.',
    'K-pop Life:vote': 'Fans can vote for the group through the app.',
    'K-pop Life:chart': 'The new song reached the top of the chart.',
    'K-pop Life:encore': 'The fans cheered loudly during the encore.',
    'K-pop Life:subtitles': 'I turned on the subtitles while watching the show.',
    'K-pop Life:episode': 'I watched the latest episode after dinner.',
    'K-pop Life:variety show': 'The members were funny on the variety show.',
    'K-pop Life:rehearsal': 'The group practiced the song during rehearsal.',
    'K-pop Life:update': 'I saw a new update from the fanbase.',
    'K-pop Life:announcement': 'The concert announcement surprised the fans.',
    'K-pop Life:favorite': 'This is my favorite song from the new album.',
    'Travel:airport': 'I arrived at the airport two hours early.',
    'Travel:passport': 'Please keep your passport in a safe place.',
    'Travel:suitcase': 'My suitcase is too heavy.',
    'Travel:check-in': 'The hotel check-in starts at two.',
    'Travel:departure': 'Our departure is scheduled for eight.',
    'Travel:arrival': 'Please check the arrival time before leaving.',
    'Travel:boarding pass': 'I showed my boarding pass at the gate.',
    'Travel:customs': 'We went through customs after landing.',
    'Travel:immigration': 'The line at immigration was quite long.',
    'Travel:room key': 'I left my room key at the reception desk.',
    'Travel:delay': 'The flight delay lasted for two hours.',
    'Travel:cancel': 'The airline had to cancel our flight.',
    'Travel:transfer': 'We have a short transfer in Singapore.',
    'Travel:window seat': 'I requested a window seat for the flight.',
    'Travel:walk': 'We can walk to the station from here.',
    'Travel:straight': 'Go straight until you see the hotel.',
    'Travel:left': 'Turn left at the next corner.',
    'Travel:right': 'The museum is on your right.',
    'Travel:nearby': 'Is there a restaurant nearby?',
    'Travel:safe': 'This area feels safe at night.',
    'Travel:crowded': 'The station was crowded this morning.',
    'Travel:quiet': 'We found a quiet cafe near the hotel.',
    'Travel:photo': 'I took a photo near the beach.',
    'Travel:foreign': 'I exchanged my money for foreign currency.',
    'Study:vocabulary': 'I review new English words every evening.',
    'Study:word': 'Please write one English word in your notebook.',
    'Study:meaning': 'I checked the meaning in my dictionary.',
    'Study:submit': 'I need to submit my assignment before midnight.',
    'Study:learn': 'I learn five new English words every day.',
    'Study:review': 'I review my notes before the exam.',
    'Study:understand': 'I understand the lesson better now.',
    'Study:remember': 'I write notes to remember important details.',
    'Study:focus': 'I need to focus during the lecture.',
    'Study:skill': 'Speaking is an important skill to practice.',
    'Study:certificate': 'She received a certificate after completing the course.',
    'Study:scholarship': 'He applied for a scholarship last month.',
    'Programming:branch': 'I created a new branch before fixing the bug.',
    'Programming:bug': 'I found a bug in the login page.',
    'Programming:debug': 'I need to debug the payment feature.',
    'Programming:deploy': 'We will deploy the update tonight.',
    'Programming:error': 'The server returned an error after deployment.',
    'Programming:github': 'I pushed the latest code to GitHub.',
    'Programming:login': 'The login page is not loading correctly.',
    'Programming:upload': 'Users can upload a profile photo.',
    'Programming:zoom': 'You can zoom in to read the small text.',
    'Work:deadline': 'I need to finish this task before the deadline.',
    'Work:email': 'I sent the report by email this morning.',
    'Work:meeting': 'We discussed the project in the meeting.',
    'Work:report': 'I sent the report to my manager.',
    'Work:remote': 'I work remote three days a week.'
};

const createVocabPattern = (words, example) => ({
    words: new Set(words.trim().split('|')),
    example
});

const vocabExamplePatterns = {
    'Daily Life': [
        createVocabPattern('afternoon|weekend|weekday|week|month', word => `I usually plan my schedule for the ${word}.`),
        createVocabPattern('schedule|habit', word => `I changed my ${word} to make more time for rest.`),
        createVocabPattern('meal|snack|coffee|tea|water|rice|bread|fruit|soup|vegetable', word => `I usually have ${word} at home.`),
        createVocabPattern('friend|family|parent|sibling', word => `I called my ${word} after work.`),
        createVocabPattern('clothes|shirt|shoes', word => `I prepared my ${word} before going to bed.`),
        createVocabPattern('minute|hour', word => `Please wait for one more ${word}.`),
        createVocabPattern('always|usually|sometimes|often|rarely|never', word => `I ${word} check my schedule before work.`)
    ],
    'Things at Home': [
        createVocabPattern('table|chair|bed|pillow|sofa|desk|stool', word => `The ${word} is next to the window.`),
        createVocabPattern('mirror|lamp|wardrobe|curtain|carpet|shelf|drawer|cupboard|clock|calendar|basket|box|hanger|mat|container|tray', word => `I put the ${word} in the bedroom.`),
        createVocabPattern('spoon|plate|glass|bottle|cup|bowl|fork|knife|pan|pot|kettle', word => `Please put the ${word} in the kitchen.`),
        createVocabPattern('towel|soap|shampoo|toothbrush|toothpaste|tissue', word => `I keep the ${word} in the bathroom.`),
        createVocabPattern('door|floor|wall|roof|room|bathroom|bedroom|living room|garage|garden|stairs|balcony', word => `I cleaned the ${word} this morning.`),
        createVocabPattern('stove|fridge|freezer|sink|tap|oven|microwave', word => `Please check the ${word} before you leave the kitchen.`),
        createVocabPattern('broom|mop|bucket|trash bin|washing machine|iron|vacuum cleaner|detergent', word => `I used the ${word} while doing chores at home.`),
        createVocabPattern('remote|television|speaker|headphones|cable|plug|socket|router|computer|screen|mouse|keyboard|notebook|pen|scissors|switch', word => `I cannot find the ${word} in my room.`)
    ],
    'K-pop Life': [
        createVocabPattern('ticket|merchandise|poster|package|version|collection|sleeve|wishlist|autograph', word => `I added the ${word} to my K-pop collection.`),
        createVocabPattern('fandom|bias|idol|group|member|leader|rapper|vocalist|dancer|soloist|trainee|fanbase', word => `My friend told me about the ${word} after the concert.`),
        createVocabPattern('playlist|stage|performance|teaser|debut|single|release|streaming|lyrics|choreography|outfit|concept|unboxing|livestream|award|chart|encore|subtitles|episode|variety show|rehearsal|update|announcement', word => `I watched the latest ${word} after work.`),
        createVocabPattern('pre-order|venue|seat|queue', word => `I checked the ${word} before the concert.`)
    ],
    'Travel': [
        createVocabPattern('ticket|booking|reservation|visa|itinerary|map|address|route|direction|distance|fare|currency|exchange', word => `I checked the ${word} before the trip.`),
        createVocabPattern('hotel|hostel|guesthouse|reception|lobby|elevator|restaurant|cafe', word => `I asked about the ${word} when we arrived.`),
        createVocabPattern('destination|trip|tour|journey|vacation|holiday|adventure', word => `We planned the ${word} several weeks ago.`),
        createVocabPattern('train|bus|station|flight|gate|terminal|platform|taxi|driver|car|motorbike|crossing|corner', word => `I found the ${word} without any trouble.`),
        createVocabPattern('luggage|backpack|seat|aisle|camera|cash|card', word => `I checked my ${word} before leaving the hotel.`),
        createVocabPattern('guide|tourist|local|foreign', word => `I spoke with a ${word} near the museum.`),
        createVocabPattern('beach|mountain|island|city|village|country|museum|souvenir|photo|view', word => `We took a photo of the ${word} during our trip.`),
        createVocabPattern('rent', word => `We decided to ${word} a car for two days.`)
    ],
    'Study': [
        createVocabPattern('assignment|course|lesson|subject|exam|quiz|exercise|practice|homework|project|presentation|slide|topic|idea|example|explanation|discussion|research|thesis|theory|method|analysis|result|conclusion|reference|source|article|journal|paper|chapter|paragraph|sentence|word|grammar|pronunciation|speaking|listening|reading|writing|note|deadline|schedule|progress|feedback|revision|skill|knowledge|certificate|scholarship', word => `I reviewed the ${word} before class.`),
        createVocabPattern('campus|class|semester|major|library', word => `We talked about the ${word} after the lecture.`),
        createVocabPattern('teacher|lecturer|student|classmate|group', word => `I asked the ${word} for help after class.`),
        createVocabPattern('score|grade|answer|question', word => `I checked my ${word} after the quiz.`),
        createVocabPattern('notebook|pen|marker|book', word => `I brought my ${word} to class.`)
    ],
    'Programming': [
        createVocabPattern('algorithm|api|application|array|backend|backup|browser|cache|class|client|code|command|component|console|database|design|documentation|domain|endpoint|feature|file|folder|framework|frontend|function|html|input|interface|javascript|keyword|layout|library|link|logic|network|notification|output|password|performance|plugin|program|repository|request|response|route|script|security|server|software|storage|system|terminal|test|token|tool|update|url|user|variable|version|website|window|workflow|xml', word => `I checked the ${word} before deploying the application.`),
        createVocabPattern('developer', word => `The ${word} fixed the issue this morning.`),
        createVocabPattern('laptop', word => `I use my ${word} to write code.`)
    ],
    'Work': [
        createVocabPattern('agenda|agreement|approval|attendance|benefit|budget|business|career|contract|document|experience|feedback|goal|interview|invoice|job|overtime|payment|position|project|promotion|responsibility|salary|schedule|shift|task|training|workload|target|priority', word => `We discussed the ${word} during the meeting.`),
        createVocabPattern('assistant|boss|client|colleague|customer|employee|employer|manager|staff|team', word => `I spoke with the ${word} this morning.`),
        createVocabPattern('company|department|office|workplace', word => `I arrived at the ${word} before nine.`),
        createVocabPattern('professional', word => `She gave a ${word} response to the client.`)
    ]
};

const getVocabExample = (category, word) => {
    const override = vocabExampleOverrides[`${category}:${word}`];
    if(override) return override;

    const pattern = vocabExamplePatterns[category].find(item => item.words.has(word));
    if(!pattern) throw new Error(`Missing natural vocabulary example for ${category}: ${word}`);
    return pattern.example(word);
};

const createPersonalVocab = () => Object.entries(personalVocabGroups).flatMap(([category, rawEntries]) =>
    rawEntries.trim().split(';').map(entry => entry.trim()).filter(Boolean).map(entry => {
        const [word, meaning] = entry.split('=');
        return {
            letter: word[0].toUpperCase(),
            word,
            meaning,
            id: meaning,
            category,
            example: getVocabExample(category, word)
        };
    })
);

const vocabData = [...legacyVocabData, ...createPersonalVocab()]
    .reduce((items, item) => items.set(item.word.toLowerCase(), item), new Map())
    .values();

const sortedVocabData = [...vocabData].sort((a, b) => a.word.localeCompare(b.word));

const rawVerbs = `
A|ask|asked|asked|bertanya/meminta|I ask a question.
A|answer|answered|answered|menjawab|She answers the phone.
A|arrive|arrived|arrived|tiba|We arrive at the office.
A|accept|accepted|accepted|menerima|I accept the offer.
A|allow|allowed|allowed|mengizinkan|They allow remote work.
A|apply|applied|applied|menerapkan/melamar|I apply for the job.
A|add|added|added|menambahkan|Please add more details.
A|agree|agreed|agreed|setuju|We agree on the terms.
B|build|built|built|membangun|I build web applications.
B|bring|brought|brought|membawa|Bring your laptop to the meeting.
B|buy|bought|bought|membeli|I need to buy a new mouse.
B|become|became|become|menjadi|He became a senior developer.
B|begin|began|begun|memulai|Let's begin the presentation.
B|break|broke|broken|memecahkan/merusak|Don't break the code.
B|believe|believed|believed|percaya|I believe we can do it.
C|call|called|called|memanggil/menelepon|I will call you later.
C|check|checked|checked|memeriksa|Please check your email.
C|clean|cleaned|cleaned|membersihkan|Clean the database records.
C|create|created|created|membuat|Create a new file.
C|change|changed|changed|mengubah|They change the design.
C|choose|chose|chosen|memilih|Choose the best option.
C|close|closed|closed|menutup|Close the application.
C|come|came|come|datang|Come to my desk.
C|compare|compared|compared|membandingkan|Let's compare the results.
C|complete|completed|completed|menyelesaikan|Complete the form.
D|decide|decided|decided|memutuskan|We need to decide now.
D|deliver|delivered|delivered|mengirimkan|Deliver the project on time.
D|discuss|discussed|discussed|mendiskusikan|Let's discuss the issue.
D|do|did|done|melakukan|I do my homework.
D|develop|developed|developed|mengembangkan|We develop software.
D|design|designed|designed|merancang|She designs the UI.
D|delete|deleted|deleted|menghapus|Delete the wrong entry.
D|deploy|deployed|deployed|merilis/mendeploy|Deploy the app to production.
E|eat|ate|eaten|makan|I eat lunch at 1 PM.
E|edit|edited|edited|mengedit|Edit the document.
E|explain|explained|explained|menjelaskan|Can you explain this?
E|expect|expected|expected|mengharapkan|I expect a good result.
E|experience|experienced|experienced|mengalami|We experienced a bug.
E|execute|executed|executed|mengeksekusi|Execute the program.
E|export|exported|exported|mengekspor|Export the data to CSV.
F|fix|fixed|fixed|memperbaiki|I fix the bug.
F|find|found|found|menemukan|I find a solution.
F|finish|finished|finished|menyelesaikan|Finish your work.
F|feel|felt|felt|merasa|I feel tired.
F|forget|forgot|forgotten|lupa|Don't forget the password.
F|focus|focused|focused|fokus|Focus on the main task.
F|follow|followed|followed|mengikuti|Follow the instructions.
G|go|went|gone|pergi|I go to the office.
G|give|gave|given|memberikan|Give me a second.
G|get|got|got/gotten|mendapatkan|I get an error message.
G|grow|grew|grown|tumbuh/berkembang|The company grows fast.
G|generate|generated|generated|menghasilkan|Generate a report.
H|help|helped|helped|membantu|Can you help me?
H|have|had|had|memiliki|I have a question.
H|hear|heard|heard|mendengar|I hear you clearly.
H|happen|happened|happened|terjadi|What happened here?
H|handle|handled|handled|menangani|I handle the backend.
H|hire|hired|hired|mempekerjakan|We hire new staff.
I|improve|improved|improved|meningkatkan|We improve the performance.
I|install|installed|installed|menginstal|Install the updates.
I|invite|invited|invited|mengundang|Invite him to the call.
I|include|included|included|memasukkan/termasuk|Include the tax in the invoice.
I|increase|increased|increased|meningkat|Increase the server capacity.
I|implement|implemented|implemented|menerapkan|Implement the new feature.
I|ignore|ignored|ignored|mengabaikan|Ignore the warning.
J|join|joined|joined|bergabung|Join the meeting link.
J|jump|jumped|jumped|melompat|Don't jump to conclusions.
J|justify|justified|justified|membenarkan/menjelaskan|Justify your code changes.
K|keep|kept|kept|menyimpan/menjaga|Keep the code clean.
K|know|knew|known|mengetahui|I know the answer.
L|learn|learned|learned|belajar|I learn English daily.
L|listen|listened|listened|mendengarkan|Listen to the user feedback.
L|look|looked|looked|melihat|Look at this chart.
L|leave|left|left|meninggalkan|I leave the office at 5.
L|let|let|let|membiarkan|Let me check.
L|lose|lost|lost|kehilangan/kalah|Don't lose the data.
L|launch|launched|launched|meluncurkan|We launch the app today.
L|load|loaded|loaded|memuat|Load the page again.
M|make|made|made|membuat|Make a decision.
M|meet|met|met|bertemu|Let's meet tomorrow.
M|move|moved|moved|bergerak/pindah|Move the file to the folder.
M|manage|managed|managed|mengelola|She manages the team.
M|mean|meant|meant|bermaksud/berarti|What do you mean?
M|maintain|maintained|maintained|memelihara|Maintain the server.
M|monitor|monitored|monitored|memantau|Monitor the traffic.
N|need|needed|needed|membutuhkan|I need help.
N|notice|noticed|noticed|menyadari|I noticed a bug.
N|navigate|navigated|navigated|mengarahkan|Navigate to the dashboard.
O|open|opened|opened|membuka|Open the file.
O|organize|organized|organized|mengatur|Organize your tasks.
O|occur|occurred|occurred|terjadi|An error occurred.
O|obtain|obtained|obtained|memperoleh|Obtain the access token.
P|practice|practiced|practiced|berlatih|I practice speaking.
P|prepare|prepared|prepared|mempersiapkan|Prepare the presentation.
P|plan|planned|planned|merencanakan|We plan to expand.
P|play|played|played|bermain|I play games to relax.
P|put|put|put|meletakkan|Put the file here.
P|pay|paid|paid|membayar|Pay the invoice.
P|provide|provided|provided|menyediakan|Provide the documentation.
P|push|pushed|pushed|mendorong/mengunggah|Push the code to GitHub.
Q|quit|quit|quit|berhenti/keluar|Quit the application.
Q|query|queried|queried|meminta/menanyakan(data)|Query the database.
R|read|read|read|membaca|Read the manual.
R|reply|replied|replied|membalas|Reply to the email.
R|review|reviewed|reviewed|meninjau|Review the code.
R|run|ran|run|menjalankan|Run the program.
R|resolve|resolved|resolved|menyelesaikan|Resolve the issue.
R|require|required|required|membutuhkan|This requires admin access.
R|replace|replaced|replaced|mengganti|Replace the old hard drive.
R|remove|removed|removed|menghapus|Remove the cache.
S|study|studied|studied|belajar|Study for the exam.
S|send|sent|sent|mengirim|Send the message.
S|speak|spoke|spoken|berbicara|Speak clearly.
S|solve|solved|solved|memecahkan|Solve the math problem.
S|see|saw|seen|melihat|I see your point.
S|say|said|said|mengatakan|What did you say?
S|show|showed|shown|menunjukkan|Show me the result.
S|start|started|started|memulai|Start the server.
S|stop|stopped|stopped|berhenti|Stop the process.
S|save|saved|saved|menyimpan|Save your work.
S|submit|submitted|submitted|menyerahkan|Submit the form.
T|talk|talked|talked|berbicara|Talk to the manager.
T|teach|taught|taught|mengajar|Teach me how to code.
T|test|tested|tested|menguji|Test the application.
T|take|took|taken|mengambil|Take a break.
T|tell|told|told|memberi tahu|Tell me the truth.
T|think|thought|thought|berpikir|I think it's ready.
T|try|tried|tried|mencoba|Try again later.
T|type|typed|typed|mengetik|Type your password.
U|update|updated|updated|memperbarui|Update the software.
U|understand|understood|understood|mengerti|I understand the logic.
U|use|used|used|menggunakan|Use this function.
U|upload|uploaded|uploaded|mengunggah|Upload the image.
U|upgrade|upgraded|upgraded|meningkatkan|Upgrade to premium.
V|visit|visited|visited|mengunjungi|Visit the website.
V|verify|verified|verified|memverifikasi|Verify your email.
W|work|worked|worked|bekerja|I work remotely.
W|write|wrote|written|menulis|Write a script.
W|watch|watched|watched|menonton/mengawasi|Watch the tutorial.
W|want|wanted|wanted|menginginkan|I want to learn.
W|wait|waited|waited|menunggu|Wait a moment.
X|x-ray|x-rayed|x-rayed|sinar-x (memeriksa)|The doctor x-rayed my arm.
Y|yield|yielded|yielded|menghasilkan|The test yielded good results.
Z|zoom|zoomed|zoomed|memperbesar|Zoom in the picture.`;

const programmingVerbWords = new Set(`
build code compile configure connect create debug delete deploy develop edit execute export generate implement install load maintain monitor navigate push query remove replace resolve run save start test type update upload upgrade verify zoom
`.trim().split(/\s+/));

const studyVerbWords = new Set(`
answer ask calculate compare explain focus learn practice read research review study submit teach understand write
`.trim().split(/\s+/));

const communicationVerbWords = new Set(`
agree answer ask call discuss explain hear invite join listen reply say show speak talk tell
`.trim().split(/\s+/));

const travelVerbWords = new Set(`
arrive bring come drive explore leave pack ride return take travel visit walk
`.trim().split(/\s+/));

const categorizeLegacyVerb = verb => {
    if(programmingVerbWords.has(verb)) return 'Programming';
    if(studyVerbWords.has(verb)) return 'Study';
    if(communicationVerbWords.has(verb)) return 'Communication';
    if(travelVerbWords.has(verb)) return 'Travel';
    return 'Work';
};

const legacyVerbsData = parseData(rawVerbs, p => ({
    letter: p[0],
    v1: p[1],
    v2: p[2],
    v3: p[3],
    meaning: p[4],
    id: p[4],
    category: categorizeLegacyVerb(p[1]),
    example: p[5]
}));

const personalVerbGroups = {
    'Daily Life': `
wake|woke|woken|bangun;sleep|slept|slept|tidur;eat|ate|eaten|makan;drink|drank|drunk|minum;cook|cooked|cooked|memasak;clean|cleaned|cleaned|membersihkan;wash|washed|washed|mencuci;shower|showered|showered|mandi;dress|dressed|dressed|berpakaian;prepare|prepared|prepared|mempersiapkan;
rest|rested|rested|beristirahat;walk|walked|walked|berjalan;sit|sat|sat|duduk;stand|stood|stood|berdiri;wait|waited|waited|menunggu;buy|bought|bought|membeli;pay|paid|paid|membayar;open|opened|opened|membuka;close|closed|closed|menutup;carry|carried|carried|membawa;
bring|brought|brought|membawa;take|took|taken|mengambil;put|put|put|meletakkan;use|used|used|menggunakan;need|needed|needed|membutuhkan;want|wanted|wanted|menginginkan;like|liked|liked|menyukai;watch|watched|watched|menonton;listen|listened|listened|mendengarkan;read|read|read|membaca;
write|wrote|written|menulis;call|called|called|menelepon;text|texted|texted|mengirim pesan;reply|replied|replied|membalas;meet|met|met|bertemu;visit|visited|visited|mengunjungi;help|helped|helped|membantu;try|tried|tried|mencoba;practice|practiced|practiced|berlatih;remember|remembered|remembered|mengingat;
forget|forgot|forgotten|melupakan;leave|left|left|pergi;come|came|come|datang;go|went|gone|pergi;start|started|started|memulai;finish|finished|finished|menyelesaikan;choose|chose|chosen|memilih;order|ordered|ordered|memesan;shop|shopped|shopped|berbelanja;relax|relaxed|relaxed|bersantai;
exercise|exercised|exercised|berolahraga;stretch|stretched|stretched|meregangkan;smile|smiled|smiled|tersenyum;laugh|laughed|laughed|tertawa;cry|cried|cried|menangis;feel|felt|felt|merasa;enjoy|enjoyed|enjoyed|menikmati;plan|planned|planned|merencanakan;check|checked|checked|memeriksa;keep|kept|kept|menjaga;
wear|wore|worn|memakai;change|changed|changed|mengganti;brush|brushed|brushed|menyikat;comb|combed|combed|menyisir;dry|dried|dried|mengeringkan;fill|filled|filled|mengisi;empty|emptied|emptied|mengosongkan;throw|threw|thrown|membuang;pick|picked|picked|mengambil;hold|held|held|memegang;
borrow|borrowed|borrowed|meminjam;lend|lent|lent|meminjamkan;spend|spent|spent|menghabiskan;save|saved|saved|menyimpan;share|shared|shared|berbagi;send|sent|sent|mengirim;receive|received|received|menerima;return|returned|returned|mengembalikan;turn|turned|turned|berbelok;stop|stopped|stopped|berhenti
    `,
    'Things at Home': `
sweep|swept|swept|menyapu;mop|mopped|mopped|mengepel;wash|washed|washed|mencuci;fold|folded|folded|melipat;iron|ironed|ironed|menyetrika;cook|cooked|cooked|memasak;boil|boiled|boiled|merebus;fry|fried|fried|menggoreng;cut|cut|cut|memotong;serve|served|served|menyajikan;
clean|cleaned|cleaned|membersihkan;organize|organized|organized|mengatur;arrange|arranged|arranged|menata;plug|plugged|plugged|mencolokkan;unplug|unplugged|unplugged|mencabut;charge|charged|charged|mengisi daya;turn on|turned on|turned on|menyalakan;turn off|turned off|turned off|mematikan;repair|repaired|repaired|memperbaiki;move|moved|moved|memindahkan;
wipe|wiped|wiped|mengelap;dust|dusted|dusted|membersihkan debu;rinse|rinsed|rinsed|membilas;pour|poured|poured|menuangkan;mix|mixed|mixed|mencampur;bake|baked|baked|memanggang;store|stored|stored|menyimpan;lock|locked|locked|mengunci;unlock|unlocked|unlocked|membuka kunci;decorate|decorated|decorated|menghias
    `,
    Work: `
work|worked|worked|bekerja;finish|finished|finished|menyelesaikan;submit|submitted|submitted|menyerahkan;review|reviewed|reviewed|meninjau;discuss|discussed|discussed|mendiskusikan;attend|attended|attended|menghadiri;schedule|scheduled|scheduled|menjadwalkan;report|reported|reported|melaporkan;check|checked|checked|memeriksa;send|sent|sent|mengirim;
receive|received|received|menerima;explain|explained|explained|menjelaskan;prepare|prepared|prepared|mempersiapkan;manage|managed|managed|mengelola;handle|handled|handled|menangani;update|updated|updated|memperbarui;follow up|followed up|followed up|menindaklanjuti;assign|assigned|assigned|menugaskan;approve|approved|approved|menyetujui;confirm|confirmed|confirmed|mengonfirmasi;
deliver|delivered|delivered|mengirimkan;prioritize|prioritized|prioritized|memprioritaskan;coordinate|coordinated|coordinated|mengoordinasikan;contact|contacted|contacted|menghubungi;hire|hired|hired|mempekerjakan;lead|led|led|memimpin;support|supported|supported|mendukung;present|presented|presented|mempresentasikan;request|requested|requested|meminta;complete|completed|completed|menyelesaikan
    `,
    Study: `
study|studied|studied|belajar;learn|learned|learned|mempelajari;read|read|read|membaca;write|wrote|written|menulis;review|reviewed|reviewed|mengulas;memorize|memorized|memorized|menghafal;practice|practiced|practiced|berlatih;understand|understood|understood|memahami;explain|explained|explained|menjelaskan;answer|answered|answered|menjawab;
ask|asked|asked|bertanya;submit|submitted|submitted|mengumpulkan;research|researched|researched|meneliti;analyze|analyzed|analyzed|menganalisis;calculate|calculated|calculated|menghitung;present|presented|presented|mempresentasikan;attend|attended|attended|menghadiri;note|noted|noted|mencatat;summarize|summarized|summarized|merangkum;compare|compared|compared|membandingkan;
observe|observed|observed|mengamati;collect|collected|collected|mengumpulkan;cite|cited|cited|mengutip;revise|revised|revised|merevisi;discuss|discussed|discussed|berdiskusi;focus|focused|focused|berfokus;solve|solved|solved|menyelesaikan;graduate|graduated|graduated|lulus;improve|improved|improved|meningkatkan;evaluate|evaluated|evaluated|mengevaluasi
    `,
    Programming: `
code|coded|coded|menulis kode;debug|debugged|debugged|melakukan debug;fix|fixed|fixed|memperbaiki;build|built|built|membangun;deploy|deployed|deployed|mendeploy;install|installed|installed|menginstal;update|updated|updated|memperbarui;test|tested|tested|menguji;run|ran|run|menjalankan;create|created|created|membuat;
delete|deleted|deleted|menghapus;edit|edited|edited|mengedit;save|saved|saved|menyimpan;connect|connected|connected|menghubungkan;configure|configured|configured|mengonfigurasi;compile|compiled|compiled|mengompilasi;push|pushed|pushed|mengunggah;pull|pulled|pulled|mengambil;merge|merged|merged|menggabungkan;commit|committed|committed|menyimpan perubahan;
clone|cloned|cloned|menggandakan;render|rendered|rendered|merender;validate|validated|validated|memvalidasi;refactor|refactored|refactored|merapikan kode;integrate|integrated|integrated|mengintegrasikan;query|queried|queried|melakukan query;monitor|monitored|monitored|memantau;restart|restarted|restarted|memulai ulang;upload|uploaded|uploaded|mengunggah;download|downloaded|downloaded|mengunduh
    `,
    Communication: `
speak|spoke|spoken|berbicara;talk|talked|talked|berbicara;say|said|said|mengatakan;tell|told|told|memberi tahu;ask|asked|asked|bertanya;answer|answered|answered|menjawab;reply|replied|replied|membalas;explain|explained|explained|menjelaskan;discuss|discussed|discussed|berdiskusi;suggest|suggested|suggested|menyarankan;
agree|agreed|agreed|setuju;disagree|disagreed|disagreed|tidak setuju;repeat|repeated|repeated|mengulangi;clarify|clarified|clarified|mengklarifikasi;invite|invited|invited|mengundang;introduce|introduced|introduced|memperkenalkan;greet|greeted|greeted|menyapa;mention|mentioned|mentioned|menyebutkan;describe|described|described|menggambarkan;respond|responded|responded|merespons;
communicate|communicated|communicated|berkomunikasi;announce|announced|announced|mengumumkan;recommend|recommended|recommended|merekomendasikan;apologize|apologized|apologized|meminta maaf;thank|thanked|thanked|berterima kasih
    `,
    Travel: `
travel|traveled|traveled|bepergian;book|booked|booked|memesan;pack|packed|packed|mengemas;arrive|arrived|arrived|tiba;depart|departed|departed|berangkat;check in|checked in|checked in|check-in;check out|checked out|checked out|check-out;wait|waited|waited|menunggu;ride|rode|ridden|mengendarai;drive|drove|driven|mengemudi;
walk|walked|walked|berjalan;visit|visited|visited|mengunjungi;explore|explored|explored|menjelajahi;return|returned|returned|kembali;bring|brought|brought|membawa;carry|carried|carried|membawa;board|boarded|boarded|naik kendaraan;land|landed|landed|mendarat;reserve|reserved|reserved|memesan;cancel|canceled|canceled|membatalkan;
rent|rented|rented|menyewa;stay|stayed|stayed|menginap;follow|followed|followed|mengikuti;turn|turned|turned|berbelok;cross|crossed|crossed|menyeberang
    `,
    'K-pop Life': `
listen|listened|listened|mendengarkan;watch|watched|watched|menonton;stream|streamed|streamed|melakukan streaming;buy|bought|bought|membeli;collect|collected|collected|mengoleksi;trade|traded|traded|bertukar;attend|attended|attended|menghadiri;cheer|cheered|cheered|bersorak;vote|voted|voted|memberi suara;follow|followed|followed|mengikuti;
support|supported|supported|mendukung;preorder|preordered|preordered|memesan awal;unbox|unboxed|unboxed|membuka paket;save|saved|saved|menyimpan;share|shared|shared|membagikan;dance|danced|danced|menari;sing|sang|sung|bernyanyi;replay|replayed|replayed|memutar ulang;recommend|recommended|recommended|merekomendasikan;join|joined|joined|bergabung
    `
};

const personalVerbExampleGroups = {
    'Daily Life': `
wake|I wake up at six every morning.
sleep|I sleep for seven hours every night.
eat|I eat breakfast before work.
drink|I drink coffee in the morning.
cook|I cook dinner after work.
clean|I clean my room every Sunday.
wash|I wash my hands before eating.
shower|I shower before getting dressed.
dress|I dress quickly before leaving home.
prepare|I prepare my bag the night before.
rest|I rest after a long day.
walk|I walk to the store near my house.
sit|I sit by the window during my break.
stand|I stand near the door while waiting.
wait|I wait for the bus every morning.
buy|I buy fresh fruit at the market.
pay|I pay my bills at the end of the month.
open|I open the window every morning.
close|I close the door before leaving.
carry|I carry a water bottle in my bag.
bring|I bring lunch from home.
take|I take a short break after lunch.
put|I put my phone on the table.
use|I use my laptop for work.
need|I need some rest after work.
want|I want a cup of tea.
like|I like quiet mornings at home.
watch|I watch a movie on the weekend.
listen|I listen to music on my way home.
read|I read a book before sleeping.
write|I write my plans in a notebook.
call|I call my family every weekend.
text|I text my friend after work.
reply|I reply to messages during my break.
meet|I meet my friends on Saturday.
visit|I visit my parents once a month.
help|I help my sister with the groceries.
try|I try a new recipe on the weekend.
practice|I practice English every night.
remember|I remember to bring my umbrella.
forget|I sometimes forget where I put my keys.
leave|I leave home at seven every morning.
come|I come home before dinner.
go|I go to work by bus.
start|I start my day with a glass of water.
finish|I finish work at five.
choose|I choose my clothes before breakfast.
order|I order food when I am too tired to cook.
shop|I shop for groceries on Sunday.
relax|I relax by listening to music.
exercise|I exercise for thirty minutes every morning.
stretch|I stretch my legs after sitting too long.
smile|I smile when I see my friends.
laugh|I laugh at my brother's jokes.
cry|I cry when I watch a sad movie.
feel|I feel tired after a busy day.
enjoy|I enjoy a quiet evening at home.
plan|I plan my schedule every Sunday.
check|I check my phone after breakfast.
keep|I keep my wallet in my bag.
wear|I wear comfortable shoes to work.
change|I change my clothes after work.
brush|I brush my teeth before sleeping.
comb|I comb my hair after showering.
dry|I dry my clothes in the sun.
fill|I fill my bottle with water.
empty|I empty the trash bin every morning.
throw|I throw the receipt in the trash bin.
pick|I pick up my bag before leaving.
hold|I hold the umbrella when it rains.
borrow|I borrow a book from my friend.
lend|I lend my charger to my sister.
spend|I spend my free time reading.
save|I save some money every month.
share|I share snacks with my friends.
send|I send a message when I arrive.
receive|I receive a package at home.
return|I return the book after reading it.
turn|I turn left at the next corner.
stop|I stop at the store after work.
    `,
    'Things at Home': `
sweep|I sweep the floor every morning.
mop|I mop the kitchen floor after cooking.
wash|I wash the dishes after dinner.
fold|I fold my clothes after washing them.
iron|I iron my shirt before work.
cook|I cook soup in a large pot.
boil|I boil water for tea.
fry|I fry an egg for breakfast.
cut|I cut the vegetables with a knife.
serve|I serve dinner on clean plates.
clean|I clean the bathroom every Saturday.
organize|I organize my clothes in the wardrobe.
arrange|I arrange my books on the shelf.
plug|I plug the charger into the socket.
unplug|I unplug the iron after using it.
charge|I charge my phone beside the bed.
turn on|I turn on the fan when the room feels hot.
turn off|I turn off the lamp before sleeping.
repair|I repair the broken chair in the living room.
move|I move the table closer to the wall.
wipe|I wipe the table after dinner.
dust|I dust the shelf once a week.
rinse|I rinse the glass before using it.
pour|I pour water into the kettle.
mix|I mix the ingredients in a bowl.
bake|I bake bread in the oven.
store|I store the plates in the cupboard.
lock|I lock the door before going to bed.
unlock|I unlock the door when I get home.
decorate|I decorate my room with small posters.
    `,
    Work: `
work|I work with my team every day.
finish|I finish my tasks before the deadline.
submit|I submit my report before lunch.
review|I review the document before sending it.
discuss|I discuss the project with my manager.
attend|I attend a meeting every Monday.
schedule|I schedule a call with the client.
report|I report the issue to my manager.
check|I check my email when I arrive at the office.
send|I send the report to my manager.
receive|I receive updates from the team every morning.
explain|I explain the problem during the meeting.
prepare|I prepare the presentation before the meeting.
manage|I manage several tasks at work.
handle|I handle customer requests every day.
update|I update the project status every Friday.
follow up|I follow up with the client after lunch.
assign|I assign the task to the right person.
approve|I approve the document after reviewing it.
confirm|I confirm the meeting time by email.
deliver|I deliver the project on time.
prioritize|I prioritize urgent tasks in the morning.
coordinate|I coordinate the schedule with my team.
contact|I contact the client when I need more details.
hire|We hire new staff when the team grows.
lead|I lead a short meeting every morning.
support|I support my colleagues when they need help.
present|I present the weekly report to my manager.
request|I request approval before starting the work.
complete|I complete my daily tasks before going home.
    `,
    Study: `
study|I study English at night.
learn|I learn five new words every day.
read|I read articles for my thesis.
write|I write notes during the lecture.
review|I review my notes before the exam.
memorize|I memorize new words with flashcards.
practice|I practice speaking with my classmate.
understand|I understand the lesson better after practicing.
explain|I explain my answer to the teacher.
answer|I answer the questions after reading the text.
ask|I ask my lecturer for more details.
submit|I submit my assignment before midnight.
research|I research articles for my thesis.
analyze|I analyze the survey results for my paper.
calculate|I calculate the final score carefully.
present|I present my project in front of the class.
attend|I attend the lecture every Tuesday.
note|I note important points in my notebook.
summarize|I summarize the article in one paragraph.
compare|I compare the two theories in my paper.
observe|I observe the results during the experiment.
collect|I collect data for my research.
cite|I cite reliable sources in my thesis.
revise|I revise my paper after receiving feedback.
discuss|I discuss the assignment with my group.
focus|I focus better when the room is quiet.
solve|I solve practice questions before the exam.
graduate|I hope to graduate next year.
improve|I improve my writing by practicing every day.
evaluate|I evaluate the results before writing my conclusion.
    `,
    Programming: `
code|I code a simple feature for the application.
debug|I debug the code when the app crashes.
fix|I fix the bug before deployment.
build|I build web applications with JavaScript.
deploy|I deploy the update after testing it.
install|I install the required package before running the project.
update|I update the application to the latest version.
test|I test the feature before deployment.
run|I run the project on localhost.
create|I create a new branch for each feature.
delete|I delete unused files from the project.
edit|I edit the configuration file carefully.
save|I save my changes before closing the editor.
connect|I connect the application to the database.
configure|I configure the server before deployment.
compile|I compile the code before running the program.
push|I push the latest code to GitHub.
pull|I pull the latest changes before starting work.
merge|I merge the branch after reviewing the code.
commit|I commit my changes with a clear message.
clone|I clone the repository to my laptop.
render|I render the list on the page.
validate|I validate the form before saving the data.
refactor|I refactor the function to make it easier to read.
integrate|I integrate the payment service into the application.
query|I query the database to find the user.
monitor|I monitor the server after deployment.
restart|I restart the server after changing the configuration.
upload|I upload the image to the server.
download|I download the log file for debugging.
    `,
    Communication: `
speak|I speak English during practice.
talk|I talk to my teammate about the issue.
say|I say hello when I join the call.
tell|I tell my manager about the delay.
ask|I ask my teammate for help.
answer|I answer the question clearly.
reply|I reply to her message after work.
explain|I explain the problem clearly.
discuss|I discuss the plan with my team.
suggest|I suggest a simpler solution.
agree|I agree with your idea.
disagree|I disagree with that decision.
repeat|I repeat the sentence more slowly.
clarify|I clarify the deadline with my manager.
invite|I invite my colleague to the meeting.
introduce|I introduce myself at the beginning of the call.
greet|I greet the client with a smile.
mention|I mention the problem during the meeting.
describe|I describe the issue in a short message.
respond|I respond to emails before lunch.
communicate|I communicate with my team through chat.
announce|I announce the schedule change to the team.
recommend|I recommend this course to my friend.
apologize|I apologize for replying late.
thank|I thank my teammate for the help.
    `,
    Travel: `
travel|I travel by train when possible.
book|I book a hotel near the station.
pack|I pack my suitcase before the trip.
arrive|I arrive at the airport two hours early.
depart|I depart from the station at eight.
check in|I check in at the airport before my flight.
check out|I check out of the hotel before noon.
wait|I wait for the train on the platform.
ride|I ride the bus to the city center.
drive|I drive carefully on unfamiliar roads.
walk|I walk to the museum from the hotel.
visit|I visit a local market during my trip.
explore|I explore the city with a map.
return|I return to the hotel before dark.
bring|I bring my passport on every trip abroad.
carry|I carry my suitcase carefully.
board|I board the train at platform three.
land|I land at the airport in the afternoon.
reserve|I reserve a window seat for the flight.
cancel|I cancel the booking when my plans change.
rent|I rent a car near the airport.
stay|I stay at a small hotel near the beach.
follow|I follow the map to find the station.
turn|I turn right at the next corner.
cross|I cross the street near the hotel.
    `,
    'K-pop Life': `
listen|I listen to my favorite K-pop playlist every morning.
watch|I watch the comeback stage after work.
stream|I stream the new music video after release.
buy|I buy a new album during the comeback.
collect|I collect photocards from different albums.
trade|I trade photocards with other fans.
attend|I attend a concert with my friends.
cheer|I cheer loudly during the encore.
vote|I vote for my favorite group through the app.
follow|I follow the group's official account for updates.
support|I support my favorite group by streaming their songs.
preorder|I preorder the album before the comeback.
unbox|I unbox the new album on camera.
save|I save the teaser photos on my phone.
share|I share the music video with my friends.
dance|I dance along with the choreography.
sing|I sing along during the concert.
replay|I replay my favorite part of the music video.
recommend|I recommend this song to my friend.
join|I join the livestream after dinner.
    `
};

const personalVerbExamples = Object.fromEntries(
    Object.entries(personalVerbExampleGroups).map(([category, rawExamples]) => [
        category,
        new Map(rawExamples.trim().split('\n').map(line => {
            const dividerIndex = line.indexOf('|');
            return [line.slice(0, dividerIndex), line.slice(dividerIndex + 1)];
        }))
    ])
);

const getPersonalVerbExample = (category, verb) => {
    const example = personalVerbExamples[category].get(verb);
    if(!example) throw new Error(`Missing natural verb example for ${category}: ${verb}`);
    return example;
};

const createPersonalVerbs = () => Object.entries(personalVerbGroups).flatMap(([category, rawEntries]) =>
    rawEntries.trim().split(';').map(entry => entry.trim()).filter(Boolean).map(entry => {
        const [v1, v2, v3, meaning] = entry.split('|');
        return {
            letter: v1[0].toUpperCase(),
            v1, v2, v3, meaning, id: meaning, category,
            example: getPersonalVerbExample(category, v1)
        };
    })
);

const verbsData = [...legacyVerbsData, ...createPersonalVerbs()]
    .sort((a, b) => a.v1.localeCompare(b.v1) || a.category.localeCompare(b.category));

const grammarLessons = {
    present: {
        shortTitle: 'Simple Present',
        title: 'Simple Present Tense',
        description: 'Use this tense to talk about habits, facts, routines, and things that happen in general.',
        functionText: 'Digunakan untuk kebiasaan, fakta, aktivitas rutin, dan hal yang terjadi secara umum.',
        patterns: [
            { name: 'Positive', formula: 'Subject + Verb 1', note: 'Untuk he/she/it: Subject + Verb 1 + s/es', examples: ['I work every day.', 'She works every day.'] },
            { name: 'Negative', formula: 'Subject + do/does + not + Verb 1', examples: ['I do not work on Sunday.', 'She does not work on Sunday.'] },
            { name: 'Question', formula: 'Do/Does + Subject + Verb 1?', examples: ['Do you work every day?', 'Does she work every day?'] }
        ],
        examples: [
            ['I work every day.', 'Saya bekerja setiap hari.'],
            ['I study English at night.', 'Saya belajar bahasa Inggris pada malam hari.'],
            ['I usually drink coffee in the morning.', 'Saya biasanya minum kopi pada pagi hari.'],
            ['She works in an office.', 'Dia bekerja di kantor.'],
            ['He studies programming.', 'Dia belajar programming.'],
            ['I do not work on Sunday.', 'Saya tidak bekerja pada hari Minggu.'],
            ['She does not like spicy food.', 'Dia tidak menyukai makanan pedas.'],
            ['Do you study every night?', 'Apakah kamu belajar setiap malam?'],
            ['Does he work from home?', 'Apakah dia bekerja dari rumah?'],
            ['I usually listen to music after work.', 'Saya biasanya mendengarkan musik setelah bekerja.'],
            ['My sister cleans her room every weekend.', 'Saudara perempuan saya membersihkan kamarnya setiap akhir pekan.'],
            ['We eat breakfast before leaving home.', 'Kami sarapan sebelum meninggalkan rumah.'],
            ['The train arrives at eight o clock.', 'Kereta tiba pada pukul delapan.'],
            ['They practice English together.', 'Mereka berlatih bahasa Inggris bersama.'],
            ['My manager checks the report every morning.', 'Manajer saya memeriksa laporan setiap pagi.'],
            ['I keep my photocards in an album.', 'Saya menyimpan photocard saya di dalam album.'],
            ['She does not watch television at night.', 'Dia tidak menonton televisi pada malam hari.'],
            ['Do you bring your charger to work?', 'Apakah kamu membawa charger ke tempat kerja?'],
            ['Does your class start at nine?', 'Apakah kelasmu dimulai pukul sembilan?'],
            ['We often talk about our favorite music.', 'Kami sering membicarakan musik favorit kami.']
        ],
        practices: [
            ['Saya belajar bahasa Inggris setiap malam.', 'I study English every night.'],
            ['Saya bekerja dari rumah setiap hari Jumat.', 'I work from home every Friday.'],
            ['Dia minum kopi pada pagi hari.', 'She drinks coffee in the morning.'],
            ['Kami biasanya sarapan sebelum bekerja.', 'We usually eat breakfast before work.'],
            ['Dia tidak menyukai makanan pedas.', 'He does not like spicy food.'],
            ['Saya tidak bekerja pada hari Minggu.', 'I do not work on Sunday.'],
            ['Apakah kamu mendengarkan musik setiap hari?', 'Do you listen to music every day?'],
            ['Apakah dia belajar programming?', 'Does she study programming?'],
            ['Kereta tiba pukul delapan.', 'The train arrives at eight o clock.'],
            ['Saya menyimpan photocard saya di dalam album.', 'I keep my photocards in an album.']
        ]
    },
    past: {
        shortTitle: 'Simple Past',
        title: 'Simple Past Tense',
        description: 'Use this tense to talk about completed activities in the past.',
        functionText: 'Digunakan untuk aktivitas yang sudah terjadi di masa lalu.',
        patterns: [
            { name: 'Positive', formula: 'Subject + Verb 2', examples: ['I worked yesterday.'] },
            { name: 'Negative', formula: 'Subject + did not + Verb 1', examples: ['I did not work yesterday.'] },
            { name: 'Question', formula: 'Did + Subject + Verb 1?', examples: ['Did you work yesterday?'] }
        ],
        examples: [
            ['I worked yesterday.', 'Saya bekerja kemarin.'],
            ['I studied English last night.', 'Saya belajar bahasa Inggris tadi malam.'],
            ['I watched a movie last weekend.', 'Saya menonton film akhir pekan lalu.'],
            ['I bought a K-pop album last month.', 'Saya membeli album K-pop bulan lalu.'],
            ['I went to the office yesterday.', 'Saya pergi ke kantor kemarin.'],
            ['I did not work last Sunday.', 'Saya tidak bekerja hari Minggu lalu.'],
            ['I did not study last night.', 'Saya tidak belajar tadi malam.'],
            ['Did you work yesterday?', 'Apakah kamu bekerja kemarin?'],
            ['Did you watch the concert?', 'Apakah kamu menonton konsernya?'],
            ['Did you finish your assignment?', 'Apakah kamu menyelesaikan tugasmu?'],
            ['She cleaned her room this morning.', 'Dia membersihkan kamarnya pagi ini.'],
            ['We arrived at the airport early.', 'Kami tiba di bandara lebih awal.'],
            ['They booked a hotel near the station.', 'Mereka memesan hotel dekat stasiun.'],
            ['My friend sent a message yesterday.', 'Teman saya mengirim pesan kemarin.'],
            ['I forgot to bring my charger.', 'Saya lupa membawa charger saya.'],
            ['He did not join the meeting.', 'Dia tidak bergabung dalam rapat.'],
            ['We did not take the train.', 'Kami tidak naik kereta.'],
            ['Did she buy a concert ticket?', 'Apakah dia membeli tiket konser?'],
            ['Did they submit the report?', 'Apakah mereka mengumpulkan laporannya?'],
            ['I practiced speaking before the interview.', 'Saya berlatih speaking sebelum wawancara.']
        ],
        practices: [
            ['Saya belajar bahasa Inggris tadi malam.', 'I studied English last night.'],
            ['Saya bekerja kemarin.', 'I worked yesterday.'],
            ['Kami tiba di bandara lebih awal.', 'We arrived at the airport early.'],
            ['Dia membeli album K-pop bulan lalu.', 'She bought a K-pop album last month.'],
            ['Saya tidak bekerja hari Minggu lalu.', 'I did not work last Sunday.'],
            ['Kami tidak naik kereta.', 'We did not take the train.'],
            ['Apakah kamu menyelesaikan tugasmu?', 'Did you finish your assignment?'],
            ['Apakah dia membeli tiket konser?', 'Did she buy a concert ticket?'],
            ['Teman saya mengirim pesan kemarin.', 'My friend sent a message yesterday.'],
            ['Saya lupa membawa charger saya.', 'I forgot to bring my charger.']
        ]
    }
};

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[character]));

const escapeForOnClick = text => String(text)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;')
    .replace(/\n/g, ' ');

let availableVoices = [];

function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();
}

if('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

function speakText(text) {
    if(!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
        alert('Text to speech is not supported in this browser.');
        return;
    }

    if(!text || !text.trim()) {
        alert('No text to read.');
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    if(voices.length) availableVoices = voices;
    const voicePool = voices.length ? voices : availableVoices;
    const englishVoice =
        voicePool.find(voice => voice.lang === 'en-US') ||
        voicePool.find(voice => voice.lang && voice.lang.startsWith('en')) ||
        voicePool[0];

    if(englishVoice) utterance.voice = englishVoice;

    utterance.onerror = event => {
        console.error('Speech synthesis error:', event);
        // alert('Text to speech failed. Please try again in Chrome or Edge.');
    };

    window.speechSynthesis.speak(utterance);
}

let activeRecognition = null;
let isListening = false;
let finalTranscript = '';
let activeTargetTextareaId = null;
let preserveSpeechErrorOnEnd = false;

function getSpeechRecognitionConstructor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function isSpeechRecognitionSupported() {
    return !!getSpeechRecognitionConstructor();
}

function showSpeechMessage(message, type = 'info', statusId = 'speech-status') {
    const statusEl = document.getElementById(statusId);
    if(statusEl) {
        const baseClass = String(statusEl.className || '').includes('speech-message')
            ? 'speech-message'
            : 'speech-status';
        statusEl.textContent = message;
        statusEl.className = `${baseClass} ${type}`;
    } else {
        console.log(message);
    }
}

function startContinuousSpeech(targetTextareaId) {
    const SpeechRecognition = getSpeechRecognitionConstructor();
    if(!SpeechRecognition) {
        showSpeechMessage('Speech recognition is not supported in this browser. You can still type manually.', 'warning');
        return;
    }
    if(isListening && activeRecognition) return;

    const textarea = document.getElementById(targetTextareaId);
    if(!textarea) {
        showSpeechMessage('Textarea not found. You can still type manually.', 'error');
        return;
    }

    finalTranscript = textarea.value ? `${textarea.value.trim()} ` : '';
    activeTargetTextareaId = targetTextareaId;
    preserveSpeechErrorOnEnd = false;
    const recognition = new SpeechRecognition();
    activeRecognition = recognition;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;
    isListening = true;
    showSpeechMessage('Listening... Click Stop when finished.', 'info');

    recognition.onresult = event => {
        let interimTranscript = '';
        for(let index = event.resultIndex; index < event.results.length; index++) {
            const transcript = event.results[index][0].transcript;
            if(event.results[index].isFinal) finalTranscript += `${transcript} `;
            else interimTranscript += transcript;
        }
        textarea.value = `${finalTranscript}${interimTranscript}`.trim();
    };

    recognition.onerror = event => {
        console.warn('Speech recognition error:', event.error);
        if(event.error === 'no-speech') {
            showSpeechMessage('Still listening. Please continue speaking.', 'info');
            return;
        }
        if(event.error === 'aborted') {
            showSpeechMessage('Speech stopped.', 'info');
            return;
        }
        if(event.error === 'not-allowed') {
            isListening = false;
            activeRecognition = null;
            activeTargetTextareaId = null;
            preserveSpeechErrorOnEnd = true;
            showSpeechMessage('Microphone permission was blocked. You can still type manually.', 'error');
            return;
        }
        if(event.error === 'audio-capture') {
            isListening = false;
            activeRecognition = null;
            activeTargetTextareaId = null;
            preserveSpeechErrorOnEnd = true;
            showSpeechMessage('Microphone was not detected. You can still type manually.', 'error');
            return;
        }
        if(event.error === 'network') {
            showSpeechMessage('Speech service network issue. You can still type manually.', 'warning');
            return;
        }
        showSpeechMessage(`Speech recognition issue: ${event.error}`, 'warning');
    };

    recognition.onend = () => {
        if(isListening && activeRecognition === recognition) {
            try {
                recognition.start();
                showSpeechMessage('Listening...', 'info');
            } catch(error) {
                console.warn('Restart recognition failed:', error);
            }
        } else if(!preserveSpeechErrorOnEnd) {
            showSpeechMessage('Speech stopped.', 'info');
        }
        preserveSpeechErrorOnEnd = false;
    };

    try {
        recognition.start();
    } catch(error) {
        console.error(error);
        isListening = false;
        activeRecognition = null;
        activeTargetTextareaId = null;
        showSpeechMessage('Could not start microphone. You can still type manually.', 'error');
    }
}

function stopContinuousSpeech() {
    isListening = false;
    if(activeRecognition) {
        try {
            activeRecognition.stop();
        } catch(error) {
            console.warn('Stop recognition failed:', error);
        }
    }
    activeRecognition = null;
    activeTargetTextareaId = null;
    preserveSpeechErrorOnEnd = false;
    showSpeechMessage('Speech stopped.', 'info');
}

const speakingScriptCategories = [
    'Self Introduction', 'Daily Life', 'My Job', 'My Study', 'English Learning',
    'Technology', 'Programming', 'Future Goals', 'Custom Topic'
];

const storyBuilderCategories = ['Daily Life', 'Work', 'Study', 'Technology', 'Travel', 'K-pop', 'Family'];
const storyBuilderLevels = ['Beginner', 'Intermediate'];

const storyBuilderData = {
    'Daily Life': {
        times: ['Yesterday morning', 'Last weekend', 'After work', 'This morning'],
        situations: ['Cleaning my room', 'Preparing breakfast', 'Going to the market', 'Starting my daily routine'],
        problems: ['I could not find an important item', 'I was running late', 'The room was very messy', 'I forgot something at home'],
        solutions: ['I checked everything carefully', 'I asked for help', 'I made a simple plan', 'I finished one task at a time'],
        vocabulary: ['routine', 'prepare', 'clean', 'late', 'careful', 'finish'],
        chunks: ['At first,...', 'After that,...', 'In the end,...']
    },
    Work: {
        times: ['Yesterday', 'During a meeting', 'Last Monday', 'Before the deadline'],
        situations: ['Working on a project', 'Talking with my team', 'Preparing a report', 'Checking a client request'],
        problems: ['I found an error', 'The deadline was very close', 'The task was unclear', 'A file was missing'],
        solutions: ['I discussed it with my colleague', 'I fixed the issue', 'I checked the requirements again', 'I sent an updated report'],
        vocabulary: ['deadline', 'project', 'report', 'issue', 'colleague', 'update'],
        chunks: ['The main issue was...', 'I decided to...', 'Finally, I...']
    },
    Study: {
        times: ['Last night', 'Before class', 'Last week', 'During my study session'],
        situations: ['Working on an assignment', 'Preparing for an exam', 'Reading a research paper', 'Practicing English'],
        problems: ['I did not understand one topic', 'I forgot an important note', 'The assignment was difficult', 'I could not focus'],
        solutions: ['I reviewed the material', 'I asked my lecturer', 'I studied with a friend', 'I practiced step by step'],
        vocabulary: ['assignment', 'review', 'focus', 'understand', 'practice', 'material'],
        chunks: ['I needed to...', 'To solve the problem,...', 'I learned that...']
    },
    Technology: {
        times: ['Yesterday afternoon', 'While using my laptop', 'During an online meeting', 'Last weekend'],
        situations: ['Using an application', 'Joining a video call', 'Updating my software', 'Checking my internet connection'],
        problems: ['The application stopped working', 'The network was slow', 'I forgot my password', 'The update failed'],
        solutions: ['I restarted the application', 'I checked the connection', 'I reset my password', 'I installed the update again'],
        vocabulary: ['application', 'network', 'password', 'update', 'restart', 'connection'],
        chunks: ['Suddenly,...', 'I tried to...', 'After a few minutes,...']
    },
    Travel: {
        times: ['Last month', 'During my last trip', 'Early in the morning', 'Before my departure'],
        situations: ['Going to the airport', 'Checking in at a hotel', 'Taking a train', 'Exploring a new city'],
        problems: ['My luggage was too heavy', 'I almost missed the train', 'I could not find the hotel', 'My flight was delayed'],
        solutions: ['I asked for directions', 'I checked the map', 'I called the hotel', 'I waited and changed my plan'],
        vocabulary: ['airport', 'luggage', 'departure', 'delay', 'direction', 'destination'],
        chunks: ['When I arrived,...', 'Because of that,...', 'Eventually,...']
    },
    'K-pop': {
        times: ['Last month', 'Yesterday evening', 'During the comeback week', 'Before the concert'],
        situations: ['Buying a new album', 'Watching a music video', 'Preparing for a concert', 'Joining a fan meeting'],
        problems: ['The ticket sold out quickly', 'I could not find my favorite photocard', 'The livestream started late', 'My lightstick battery was low'],
        solutions: ['I checked another store', 'I traded with another fan', 'I waited for the official update', 'I bought new batteries'],
        vocabulary: ['album', 'photocard', 'concert', 'ticket', 'comeback', 'lightstick'],
        chunks: ['I was excited because...', 'Unfortunately,...', 'Luckily,...']
    },
    Family: {
        times: ['Last Sunday', 'During a family gathering', 'Yesterday evening', 'Last weekend'],
        situations: ['Having dinner with my family', 'Visiting my parents', 'Helping my sibling', 'Planning a family event'],
        problems: ['We could not choose a place', 'Someone arrived late', 'My sibling needed help', 'We forgot to prepare something'],
        solutions: ['We discussed it together', 'I helped prepare everything', 'We changed the plan', 'We shared the tasks'],
        vocabulary: ['family', 'gathering', 'sibling', 'prepare', 'discuss', 'together'],
        chunks: ['My family and I...', 'We agreed to...', 'It was a good experience because...']
    }
};

const randomItem = items => items[Math.floor(Math.random() * items.length)];

const shadowingItems = [
    { id: 'daily-beginner', category: 'Daily Life', level: 'Beginner', title: 'Daily Routine', text: "I usually wake up at six o'clock.\nI prepare breakfast.\nThen I go to work." },
    { id: 'daily-intermediate', category: 'Daily Life', level: 'Intermediate', title: 'A Productive Morning', text: "I try to start my morning with a simple routine.\nAfter preparing breakfast, I review my schedule and choose my priorities.\nThis habit helps me stay focused throughout the day." },
    { id: 'work-beginner', category: 'Work', level: 'Beginner', title: 'My Workday', text: "I start work at nine o'clock.\nI check my tasks.\nThen I talk with my team." },
    { id: 'work-intermediate', category: 'Work', level: 'Intermediate', title: 'Handling a Deadline', text: "Yesterday, my team had a tight deadline.\nWe discussed the most important tasks and shared the workload.\nFinally, we submitted the project on time." },
    { id: 'study-beginner', category: 'Study', level: 'Beginner', title: 'Studying English', text: "I study English every night.\nI review new words.\nThen I practice speaking." },
    { id: 'study-intermediate', category: 'Study', level: 'Intermediate', title: 'Preparing for an Exam', text: "I have an important exam next week.\nI made a study plan and started reviewing each chapter.\nWhen a topic feels difficult, I ask my classmate for help." },
    { id: 'technology-beginner', category: 'Technology', level: 'Beginner', title: 'Using an Application', text: "I use this application every day.\nIt is simple and useful.\nIt helps me finish my work." },
    { id: 'technology-intermediate', category: 'Technology', level: 'Intermediate', title: 'Solving a Technical Issue', text: "The application stopped working during the meeting.\nI checked the connection and restarted the program.\nAfter a few minutes, everything worked normally again." },
    { id: 'travel-beginner', category: 'Travel', level: 'Beginner', title: 'At the Airport', text: "I arrived at the airport early.\nI checked in my luggage.\nThen I waited near the gate." },
    { id: 'travel-intermediate', category: 'Travel', level: 'Intermediate', title: 'A Delayed Flight', text: "My flight was delayed because of the weather.\nI checked the new departure time and called the hotel.\nAlthough the wait was long, I stayed calm and changed my plan." },
    { id: 'kpop-beginner', category: 'K-pop', level: 'Beginner', title: 'My Favorite Album', text: "I bought a new K-pop album.\nThe songs are very good.\nMy favorite photocard is inside the album." },
    { id: 'kpop-intermediate', category: 'K-pop', level: 'Intermediate', title: 'Preparing for a Concert', text: "I am excited because the concert is next week.\nI already prepared my ticket and checked my lightstick battery.\nI cannot wait to watch the performance with my friends." },
    { id: 'smalltalk-beginner', category: 'Small Talk', level: 'Beginner', title: 'Weekend Chat', text: "How was your weekend?\nI stayed at home and watched a movie.\nWhat did you do?" },
    { id: 'smalltalk-intermediate', category: 'Small Talk', level: 'Intermediate', title: 'Talking with a New Colleague', text: "It is nice to finally meet you.\nI heard that you joined the team last week.\nHow are you finding the new workplace so far?" },
    { id: 'interview-beginner', category: 'Job Interview', level: 'Beginner', title: 'Introducing Myself', text: "My name is Budi.\nI work as a web developer.\nI enjoy learning new technology." },
    { id: 'interview-intermediate', category: 'Job Interview', level: 'Intermediate', title: 'Explaining My Strength', text: "One of my strengths is problem-solving.\nWhen I find an issue, I try to understand the cause before making changes.\nThis approach helps me deliver reliable results." }
];

const personalTopicSeeds = {
    'Programming English': [
        ['Explaining a Bug', 'Practice explaining a software bug and the steps you used to solve it.', ['I found a bug...', 'The issue occurs when...', 'I fixed the problem by...'], ['bug', 'error', 'system', 'feature', 'database'], ['find', 'check', 'fix', 'test', 'deploy']],
        ['Describing a Feature', 'Explain the purpose and value of an application feature.', ['This feature allows users to...', 'The main benefit is...', 'It works by...'], ['feature', 'user', 'button', 'dashboard', 'interface'], ['describe', 'allow', 'use', 'improve', 'launch']],
        ['Talking About a Database', 'Describe how an application stores and uses data.', ['The database stores...', 'We use this table for...', 'The data is connected to...'], ['database', 'table', 'record', 'query', 'data'], ['store', 'connect', 'query', 'update', 'delete']],
        ['Explaining an API', 'Talk about how two systems communicate through an API.', ['The API receives...', 'The endpoint returns...', 'We send a request to...'], ['API', 'endpoint', 'request', 'response', 'token'], ['send', 'receive', 'return', 'connect', 'verify']],
        ['Describing Your Code', 'Explain the purpose of a piece of code clearly.', ['This function is used to...', 'First, the code checks...', 'Then it returns...'], ['function', 'variable', 'logic', 'condition', 'result'], ['define', 'check', 'run', 'return', 'refactor']],
        ['Talking About Frontend Work', 'Describe the user interface of a web application.', ['On the frontend, I built...', 'The page includes...', 'Users can click...'], ['frontend', 'layout', 'component', 'form', 'button'], ['build', 'design', 'click', 'display', 'validate']],
        ['Talking About Backend Work', 'Explain server-side responsibilities in simple English.', ['On the backend, I handle...', 'The server processes...', 'The system saves...'], ['backend', 'server', 'database', 'request', 'authentication'], ['handle', 'process', 'save', 'secure', 'respond']],
        ['Explaining a Deployment', 'Talk about releasing an application update.', ['Before deployment, we...', 'We released the update to...', 'After deployment, I checked...'], ['deployment', 'server', 'version', 'release', 'production'], ['deploy', 'release', 'monitor', 'test', 'rollback']],
        ['Discussing Code Review', 'Practice discussing code quality with a teammate.', ['I reviewed the code and found...', 'Could you update this part?', 'This change improves...'], ['review', 'quality', 'comment', 'branch', 'repository'], ['review', 'suggest', 'update', 'improve', 'merge']],
        ['Explaining a Project', 'Give a short overview of a programming project.', ['The project is designed to...', 'I was responsible for...', 'The biggest challenge was...'], ['project', 'application', 'technology', 'challenge', 'solution'], ['develop', 'manage', 'solve', 'integrate', 'deliver']]
    ],
    'Workplace English': [
        ['Introducing Your Job', 'Explain your role and daily responsibilities at work.', ['I work as...', 'I am responsible for...', 'On a normal day, I...'], ['job', 'role', 'responsibility', 'team', 'task'], ['work', 'handle', 'manage', 'support', 'report']],
        ['Giving a Work Update', 'Share progress and blockers with your team.', ['Here is a quick update...', 'I have completed...', 'I am still working on...'], ['progress', 'update', 'blocker', 'deadline', 'priority'], ['complete', 'update', 'continue', 'finish', 'report']],
        ['Asking for Help', 'Ask a colleague for support politely.', ['Could you help me with...?', 'I am having trouble with...', 'Can you show me how to...?'], ['help', 'issue', 'support', 'guidance', 'task'], ['ask', 'help', 'explain', 'show', 'assist']],
        ['Joining a Meeting', 'Practice useful expressions for a team meeting.', ['Let us start with...', 'I would like to add...', 'Could you clarify...?'], ['meeting', 'agenda', 'discussion', 'decision', 'note'], ['join', 'discuss', 'clarify', 'agree', 'decide']],
        ['Managing a Deadline', 'Talk about a tight deadline and your plan.', ['The deadline is...', 'We need to prioritize...', 'I can finish this by...'], ['deadline', 'schedule', 'priority', 'delay', 'plan'], ['prioritize', 'schedule', 'finish', 'submit', 'postpone']],
        ['Explaining a Problem', 'Describe a workplace issue and its impact.', ['We have an issue with...', 'The problem affects...', 'I suggest that we...'], ['problem', 'impact', 'solution', 'customer', 'process'], ['explain', 'affect', 'solve', 'suggest', 'prevent']],
        ['Talking to a Client', 'Explain progress or requirements to a client.', ['Thank you for your request.', 'To confirm your requirement...', 'We will send the update by...'], ['client', 'requirement', 'request', 'feedback', 'delivery'], ['confirm', 'send', 'review', 'deliver', 'discuss']],
        ['Receiving Feedback', 'Respond professionally to feedback.', ['Thank you for the feedback.', 'I understand your point.', 'I will improve...'], ['feedback', 'suggestion', 'improvement', 'quality', 'result'], ['receive', 'understand', 'improve', 'revise', 'apply']],
        ['Talking About Overtime', 'Discuss workload and overtime clearly.', ['I need extra time to...', 'The workload is...', 'Can we adjust the schedule?'], ['overtime', 'workload', 'schedule', 'task', 'balance'], ['adjust', 'finish', 'manage', 'discuss', 'rest']],
        ['Explaining Teamwork', 'Talk about collaboration with colleagues.', ['Our team works together to...', 'My colleague helped me...', 'Good communication is important because...'], ['teamwork', 'colleague', 'communication', 'support', 'goal'], ['collaborate', 'communicate', 'support', 'share', 'achieve']]
    ],
    'University English': [
        ['Introducing Your Major', 'Talk about your field of study and interests.', ['I am majoring in...', 'I chose this major because...', 'I am interested in...'], ['major', 'campus', 'subject', 'semester', 'interest'], ['study', 'choose', 'learn', 'attend', 'graduate']],
        ['Talking About an Assignment', 'Explain an assignment and its requirements.', ['The assignment is about...', 'I need to submit...', 'The deadline is...'], ['assignment', 'deadline', 'requirement', 'topic', 'submission'], ['write', 'submit', 'review', 'prepare', 'finish']],
        ['Preparing for an Exam', 'Describe how you study for an exam.', ['I am preparing for...', 'I need to review...', 'The most difficult topic is...'], ['exam', 'chapter', 'note', 'practice', 'score'], ['prepare', 'review', 'remember', 'practice', 'pass']],
        ['Talking About a Lecture', 'Discuss a lecture and what you learned.', ['The lecture was about...', 'The lecturer explained...', 'I learned that...'], ['lecture', 'lecturer', 'material', 'example', 'question'], ['attend', 'explain', 'learn', 'ask', 'understand']],
        ['Group Discussion', 'Practice sharing ideas during a class discussion.', ['In my opinion...', 'I agree because...', 'Can you explain your idea?'], ['discussion', 'idea', 'opinion', 'reason', 'example'], ['discuss', 'agree', 'explain', 'share', 'compare']],
        ['Giving a Presentation', 'Talk through a short academic presentation.', ['Today I will present...', 'The main point is...', 'In conclusion...'], ['presentation', 'slide', 'topic', 'result', 'conclusion'], ['present', 'describe', 'show', 'summarize', 'conclude']],
        ['Asking a Lecturer', 'Ask clear academic questions politely.', ['Could you explain...?', 'I would like to ask about...', 'Do you have a reference for...?'], ['question', 'reference', 'example', 'explanation', 'material'], ['ask', 'clarify', 'explain', 'recommend', 'understand']],
        ['Studying at the Library', 'Describe your study routine at the library.', ['I usually study at...', 'I focus better when...', 'I use the library to...'], ['library', 'book', 'note', 'focus', 'routine'], ['read', 'study', 'review', 'borrow', 'focus']],
        ['Talking About Grades', 'Discuss academic results and improvement.', ['I received a good grade in...', 'I need to improve...', 'My goal is to...'], ['grade', 'score', 'result', 'progress', 'goal'], ['receive', 'improve', 'practice', 'evaluate', 'achieve']],
        ['Campus Life', 'Talk about your normal activities on campus.', ['On campus, I usually...', 'My favorite place is...', 'After class, I...'], ['campus', 'classmate', 'cafeteria', 'club', 'activity'], ['attend', 'meet', 'join', 'study', 'relax']]
    ],
    'Thesis English': [
        ['Introducing Your Thesis', 'Give a simple introduction to your thesis topic.', ['My thesis is about...', 'The main focus is...', 'I chose this topic because...'], ['thesis', 'topic', 'focus', 'research', 'background'], ['research', 'choose', 'focus', 'explain', 'study']],
        ['Explaining the Research Problem', 'Describe the problem your research addresses.', ['The main problem is...', 'This issue affects...', 'My research tries to...'], ['problem', 'issue', 'impact', 'research', 'solution'], ['identify', 'affect', 'analyze', 'solve', 'investigate']],
        ['Explaining Your Method', 'Talk about the method used in your thesis.', ['I use a qualitative method.', 'The data is collected through...', 'This method helps me...'], ['method', 'qualitative', 'quantitative', 'survey', 'interview'], ['collect', 'observe', 'interview', 'measure', 'analyze']],
        ['Describing Your Data', 'Explain where your research data comes from.', ['My data comes from...', 'I collected the data by...', 'The sample includes...'], ['data', 'sample', 'source', 'respondent', 'record'], ['collect', 'select', 'record', 'organize', 'validate']],
        ['Explaining Analysis', 'Describe how you analyze research data.', ['First, I organize the data.', 'Then I compare...', 'The analysis shows...'], ['analysis', 'pattern', 'comparison', 'chart', 'finding'], ['organize', 'compare', 'analyze', 'identify', 'show']],
        ['Talking About Results', 'Present the main findings of your thesis.', ['The result shows that...', 'One important finding is...', 'Based on the data...'], ['result', 'finding', 'evidence', 'trend', 'conclusion'], ['show', 'find', 'prove', 'conclude', 'summarize']],
        ['Asking for Thesis Feedback', 'Ask your supervisor for useful feedback.', ['Could you review this section?', 'Do I need to revise...?', 'What should I improve?'], ['feedback', 'revision', 'section', 'supervisor', 'draft'], ['review', 'revise', 'improve', 'suggest', 'clarify']],
        ['Explaining Your Progress', 'Share the current status of your thesis.', ['I have completed...', 'I am currently working on...', 'My next step is...'], ['progress', 'chapter', 'deadline', 'draft', 'step'], ['complete', 'write', 'revise', 'submit', 'continue']],
        ['Discussing References', 'Talk about papers and sources used in research.', ['This paper explains...', 'According to this source...', 'I cited this article because...'], ['reference', 'paper', 'source', 'citation', 'journal'], ['cite', 'read', 'refer', 'support', 'publish']],
        ['Preparing for Thesis Defense', 'Practice explaining your thesis confidently.', ['Today I will explain...', 'My research contributes to...', 'I am ready to answer questions about...'], ['defense', 'presentation', 'contribution', 'question', 'argument'], ['present', 'defend', 'answer', 'explain', 'justify']]
    ],
    'Technology English': [
        ['Using a New Application', 'Describe your experience with an application.', ['I use this application to...', 'The most useful feature is...', 'It would be better if...'], ['application', 'feature', 'interface', 'user', 'update'], ['use', 'install', 'update', 'improve', 'recommend']],
        ['Talking About Internet Problems', 'Explain an internet connection issue.', ['The connection is unstable.', 'The network becomes slow when...', 'I tried to restart...'], ['internet', 'network', 'connection', 'router', 'signal'], ['connect', 'restart', 'check', 'slow', 'improve']],
        ['Explaining Password Security', 'Talk about simple account security practices.', ['A strong password should...', 'I use two-factor authentication.', 'Never share your password with...'], ['password', 'security', 'account', 'token', 'authentication'], ['protect', 'verify', 'share', 'reset', 'secure']],
        ['Updating Software', 'Describe why software updates are important.', ['The new update includes...', 'Before updating, I...', 'After the update...'], ['software', 'update', 'version', 'backup', 'device'], ['update', 'install', 'backup', 'restart', 'check']],
        ['Talking About Social Media', 'Discuss your habits when using social media.', ['I usually use social media to...', 'I follow accounts about...', 'I try not to...'], ['social media', 'post', 'comment', 'account', 'notification'], ['post', 'share', 'follow', 'comment', 'scroll']],
        ['Choosing a Device', 'Compare devices for work or study.', ['I prefer this device because...', 'The main difference is...', 'For my needs...'], ['device', 'laptop', 'screen', 'battery', 'performance'], ['compare', 'choose', 'prefer', 'use', 'charge']],
        ['Explaining Cloud Storage', 'Talk about saving and sharing files online.', ['I store my files in...', 'Cloud storage makes it easy to...', 'I can access the file from...'], ['cloud', 'storage', 'file', 'backup', 'access'], ['store', 'upload', 'download', 'share', 'access']],
        ['Joining an Online Meeting', 'Practice expressions for video calls.', ['Can you hear me clearly?', 'Your voice is breaking up.', 'Let me share my screen.'], ['meeting', 'microphone', 'camera', 'screen', 'connection'], ['join', 'hear', 'share', 'mute', 'connect']],
        ['Talking About Artificial Intelligence', 'Share a simple opinion about AI.', ['AI can help people to...', 'One benefit is...', 'We should be careful about...'], ['AI', 'automation', 'tool', 'data', 'privacy'], ['help', 'automate', 'analyze', 'protect', 'use']],
        ['Solving a Device Problem', 'Describe a problem with your phone or laptop.', ['My device suddenly...', 'I tried to fix it by...', 'In the end...'], ['device', 'battery', 'screen', 'charger', 'problem'], ['restart', 'charge', 'repair', 'check', 'solve']]
    ],
    'Daily Life English': [
        ['My Morning Routine', 'Describe what you usually do after waking up.', ['I usually wake up at...', 'After that, I...', 'Before leaving home...'], ['morning', 'breakfast', 'shower', 'routine', 'prepare'], ['wake up', 'prepare', 'eat', 'leave', 'start']],
        ['My Evening Routine', 'Talk about how you end your day.', ['After work, I usually...', 'In the evening...', 'Before going to bed...'], ['evening', 'dinner', 'rest', 'sleep', 'tired'], ['finish', 'eat', 'relax', 'watch', 'sleep']],
        ['Cleaning My Room', 'Explain how you clean and organize your room.', ['First, I clean...', 'Then I put away...', 'Finally, the room looks...'], ['room', 'floor', 'table', 'wardrobe', 'laundry'], ['clean', 'organize', 'sweep', 'put', 'finish']],
        ['Cooking at Home', 'Talk about preparing a simple meal.', ['I want to cook...', 'The ingredients are...', 'It takes about...'], ['recipe', 'ingredient', 'kitchen', 'meal', 'spicy'], ['cook', 'prepare', 'cut', 'boil', 'serve']],
        ['Going Shopping', 'Describe a normal shopping trip.', ['I need to buy...', 'I usually shop at...', 'The price is...'], ['store', 'market', 'price', 'discount', 'receipt'], ['buy', 'choose', 'pay', 'compare', 'bring']],
        ['Talking About Hobbies', 'Explain what you enjoy doing in your free time.', ['In my free time, I...', 'I enjoy this hobby because...', 'I usually do it...'], ['hobby', 'weekend', 'music', 'movie', 'game'], ['enjoy', 'watch', 'listen', 'play', 'spend']],
        ['Talking About Feelings', 'Describe your current mood and its reason.', ['Today I feel...', 'I am happy because...', 'When I feel stressed...'], ['happy', 'tired', 'stressed', 'excited', 'calm'], ['feel', 'relax', 'worry', 'enjoy', 'rest']],
        ['Planning My Weekend', 'Talk about simple weekend plans.', ['This weekend, I plan to...', 'I want to visit...', 'If the weather is good...'], ['weekend', 'plan', 'friend', 'park', 'weather'], ['plan', 'visit', 'meet', 'relax', 'decide']],
        ['Talking About Family', 'Introduce your family and shared activities.', ['There are ... people in my family.', 'I live with...', 'We often...'], ['family', 'parent', 'sibling', 'home', 'together'], ['live', 'gather', 'help', 'talk', 'support']],
        ['Describing My Home', 'Talk about your home and favorite room.', ['I live in...', 'My favorite room is...', 'There is a ... near...'], ['home', 'bedroom', 'kitchen', 'table', 'comfortable'], ['live', 'describe', 'use', 'keep', 'relax']]
    ],
    'K-pop English': [
        ['Talking About My Bias', 'Describe your favorite K-pop idol.', ['My bias is...', 'I like ... because...', 'My favorite performance is...'], ['bias', 'idol', 'member', 'performance', 'favorite'], ['like', 'admire', 'watch', 'follow', 'support']],
        ['Buying an Album', 'Talk about purchasing and opening an album.', ['I bought a new album...', 'The album includes...', 'I hope to get...'], ['album', 'photocard', 'version', 'package', 'collection'], ['buy', 'open', 'collect', 'choose', 'receive']],
        ['Preparing for a Concert', 'Describe your plans before attending a concert.', ['Before the concert, I...', 'I already prepared...', 'I cannot wait to...'], ['concert', 'ticket', 'venue', 'lightstick', 'seat'], ['prepare', 'bring', 'check', 'attend', 'enjoy']],
        ['Talking About a Comeback', 'Discuss a group comeback and teaser.', ['The group is having a comeback.', 'The teaser looks...', 'I am excited for...'], ['comeback', 'teaser', 'concept', 'release', 'title track'], ['release', 'watch', 'wait', 'stream', 'share']],
        ['Watching a Music Video', 'Describe your reaction to a new music video.', ['I watched the music video...', 'My favorite scene is...', 'The choreography looks...'], ['music video', 'scene', 'choreography', 'outfit', 'song'], ['watch', 'notice', 'enjoy', 'replay', 'comment']],
        ['Joining a Fandom', 'Talk about your experience as a fan.', ['I joined the fandom when...', 'I usually follow...', 'Being a fan is fun because...'], ['fandom', 'fanbase', 'update', 'community', 'support'], ['join', 'follow', 'support', 'share', 'discuss']],
        ['Collecting Photocards', 'Explain your photocard collection.', ['I collect photocards of...', 'My favorite photocard is...', 'I keep them in...'], ['photocard', 'sleeve', 'binder', 'trade', 'collection'], ['collect', 'keep', 'trade', 'find', 'organize']],
        ['Talking About a Playlist', 'Share songs you often listen to.', ['My playlist includes...', 'I listen to this song when...', 'My favorite track is...'], ['playlist', 'track', 'song', 'lyrics', 'mood'], ['listen', 'add', 'repeat', 'recommend', 'enjoy']],
        ['Watching a Livestream', 'Describe a livestream or fan meeting.', ['I watched the livestream...', 'The members talked about...', 'My favorite moment was...'], ['livestream', 'fan meeting', 'member', 'subtitles', 'moment'], ['watch', 'talk', 'laugh', 'answer', 'enjoy']],
        ['Discussing a Performance', 'Talk about a memorable stage performance.', ['The performance was...', 'I liked the choreography because...', 'The stage looked...'], ['stage', 'performance', 'outfit', 'choreography', 'encore'], ['perform', 'dance', 'sing', 'impress', 'remember']]
    ],
    'Travel English': [
        ['Planning a Trip', 'Talk about preparing for a future trip.', ['I am planning a trip to...', 'Before leaving, I need to...', 'I want to visit...'], ['trip', 'destination', 'booking', 'passport', 'itinerary'], ['plan', 'book', 'prepare', 'visit', 'explore']],
        ['At the Airport', 'Practice useful airport expressions.', ['Where is the check-in counter?', 'My flight departs at...', 'Which gate should I go to?'], ['airport', 'flight', 'gate', 'departure', 'luggage'], ['check in', 'depart', 'arrive', 'wait', 'board']],
        ['Checking in at a Hotel', 'Talk to hotel staff during check-in.', ['I have a reservation.', 'I would like to check in.', 'Is breakfast included?'], ['hotel', 'reservation', 'reception', 'room key', 'lobby'], ['book', 'check in', 'stay', 'ask', 'confirm']],
        ['Taking a Train', 'Discuss a train journey and station directions.', ['Which platform is it?', 'What time does the train leave?', 'Is this seat available?'], ['train', 'station', 'platform', 'ticket', 'seat'], ['leave', 'arrive', 'take', 'wait', 'find']],
        ['Asking for Directions', 'Ask for and understand simple directions.', ['How do I get to...?', 'Is it far from here?', 'Should I turn left or right?'], ['direction', 'map', 'corner', 'straight', 'nearby'], ['turn', 'walk', 'cross', 'follow', 'find']],
        ['Talking About a Delay', 'Explain a delay and adjust your plan.', ['My flight was delayed.', 'The new departure time is...', 'I need to change...'], ['delay', 'schedule', 'departure', 'arrival', 'transfer'], ['delay', 'change', 'wait', 'call', 'confirm']],
        ['Ordering at a Restaurant', 'Practice ordering food while traveling.', ['Could I see the menu?', 'I would like to order...', 'Can I have the bill, please?'], ['restaurant', 'menu', 'order', 'bill', 'table'], ['order', 'choose', 'eat', 'pay', 'recommend']],
        ['Talking About a Destination', 'Describe a place you want to visit.', ['I would like to visit...', 'The place is famous for...', 'I want to experience...'], ['destination', 'city', 'beach', 'museum', 'culture'], ['visit', 'explore', 'see', 'experience', 'enjoy']],
        ['Buying Souvenirs', 'Talk about choosing gifts during a trip.', ['I want to buy a souvenir for...', 'How much does this cost?', 'Do you have another color?'], ['souvenir', 'gift', 'price', 'market', 'cash'], ['buy', 'choose', 'pay', 'ask', 'bring']],
        ['Sharing a Travel Experience', 'Tell a short story about a memorable trip.', ['Last year, I traveled to...', 'My favorite part was...', 'I learned that...'], ['journey', 'experience', 'adventure', 'photo', 'memory'], ['travel', 'visit', 'remember', 'learn', 'share']]
    ]
};

const makeTopicQuestions = topic => [
    `What can you tell me about ${topic.toLowerCase()}?`,
    `What is your personal experience with ${topic.toLowerCase()}?`,
    `What is the most important thing to remember about ${topic.toLowerCase()}?`
];

const personalTopicLibrary = Object.entries(personalTopicSeeds).flatMap(([category, topics]) =>
    topics.map(([topic, description, chunks, vocabulary, verbs], index) => ({
        id: `${category.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`,
        category,
        topic,
        description,
        chunks,
        vocabulary,
        verbs,
        questions: makeTopicQuestions(topic),
        challenge: `Talk about ${topic.toLowerCase()} for 2 minutes. Use at least two useful chunks and three vocabulary words.`
    }))
);

const app = {
    contentDiv: document.getElementById('app-content'),
    userData: {
        progress: {}, sentences: {}, conversations: {}, speaking: {}, tests: {}, reviewAgain: [], lastDayOpened: null,
        favChunks: [], favVocab: [], favVerbs: [], grammarAnswers: {}, grammarPracticeCompleted: { present: [], past: [] },
        speakingScripts: [], stories: [], shadowingProgress: {}, shadowingSessionsCompleted: 0
    },
    currentDayData: null,
    recallState: { items: [], index: 0 },
    convoState: { index: 0, answers: [] },
    vocabFilters: { letter: 'All', category: 'All' },
    verbFilters: { letter: 'All', category: 'All' },
    currentStoryPrompt: null,
    currentShadowingItem: null,
    speechRecognition: null,
    timerInterval: null,

    init() {
        this.loadProgress();
        this.navigate('dashboard');
    },

    saveProgress() {
        localStorage.setItem('epc_user_data', JSON.stringify(this.userData));
    },

    startSpeechToText(textareaId, messageId) {
        const textarea = document.getElementById(textareaId);
        const SpeechRecognition = getSpeechRecognitionConstructor();
        if(!textarea) return;
        if(!SpeechRecognition) {
            showSpeechMessage('Speech recognition is not supported in this browser. You can still type manually.', 'warning', messageId);
            return;
        }

        if(this.speechRecognition) {
            try {
                this.speechRecognition.stop();
            } catch(error) {
                console.warn('Stop recognition failed:', error);
            }
        }
        const recognition = new SpeechRecognition();
        this.speechRecognition = recognition;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.continuous = false;
        showSpeechMessage('Listening... Speak in English. You can edit the transcript afterward.', 'info', messageId);

        recognition.onresult = event => {
            const transcript = Array.from(event.results).map(result => result[0].transcript).join(' ').trim();
            textarea.value = [textarea.value.trim(), transcript].filter(Boolean).join(textarea.value.trim() ? '\n' : '');
            showSpeechMessage('Transcript added. You can edit it before saving.', 'info', messageId);
        };
        recognition.onerror = event => {
            console.warn('Speech recognition error:', event.error);
            if(event.error === 'no-speech') {
                showSpeechMessage('No speech detected. You can still type manually.', 'info', messageId);
                return;
            }
            if(event.error === 'aborted') {
                showSpeechMessage('Speech stopped.', 'info', messageId);
                return;
            }
            if(event.error === 'not-allowed') {
                showSpeechMessage('Microphone permission was blocked. You can still type manually.', 'error', messageId);
                return;
            }
            if(event.error === 'audio-capture') {
                showSpeechMessage('Microphone was not detected. You can still type manually.', 'error', messageId);
                return;
            }
            if(event.error === 'network') {
                showSpeechMessage('Speech service network issue. You can still type manually.', 'warning', messageId);
                return;
            }
            showSpeechMessage(`Speech recognition issue: ${event.error}`, 'warning', messageId);
        };
        recognition.onend = () => {
            if(this.speechRecognition === recognition) this.speechRecognition = null;
        };
        try {
            recognition.start();
        } catch(error) {
            console.warn('Start recognition failed:', error);
            this.speechRecognition = null;
            showSpeechMessage('Could not start microphone. You can still type manually.', 'error', messageId);
        }
    },

    loadProgress() {
        const saved = localStorage.getItem('epc_user_data');
        if (saved) {
            this.userData = { ...this.userData, ...JSON.parse(saved) };
            if(!this.userData.favChunks) this.userData.favChunks = [];
            if(!this.userData.favVocab) this.userData.favVocab = [];
            if(!this.userData.favVerbs) this.userData.favVerbs = [];
            if(!this.userData.grammarAnswers) this.userData.grammarAnswers = {};
            if(!this.userData.grammarPracticeCompleted) this.userData.grammarPracticeCompleted = { present: [], past: [] };
            if(!this.userData.grammarPracticeCompleted.present) this.userData.grammarPracticeCompleted.present = [];
            if(!this.userData.grammarPracticeCompleted.past) this.userData.grammarPracticeCompleted.past = [];
            if(!this.userData.speakingScripts) this.userData.speakingScripts = [];
            if(!this.userData.stories) this.userData.stories = [];
            if(!this.userData.shadowingProgress) this.userData.shadowingProgress = {};
            if(!this.userData.shadowingSessionsCompleted) this.userData.shadowingSessionsCompleted = 0;
        }
    },

    toggleMobileNav() {
        const links = document.getElementById('nav-links');
        const toggle = document.querySelector('.nav-toggle');
        const isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    },

    closeMobileNav() {
        const links = document.getElementById('nav-links');
        const toggle = document.querySelector('.nav-toggle');
        if(links) links.classList.remove('open');
        if(toggle) toggle.setAttribute('aria-expanded', 'false');
    },

    navigate(view, param = null) {
        document.querySelectorAll('.nav-links button').forEach(btn => btn.classList.remove('active'));
        const navBtn = document.getElementById(`nav-${view}`);
        if(navBtn) navBtn.classList.add('active');
        if(this.timerInterval) clearInterval(this.timerInterval);
        if(isListening) stopContinuousSpeech();
        window.scrollTo(0, 0);

        if (view === 'dashboard') this.renderDashboard();
        else if (view === 'day') this.openDay(param);
        else if (view === 'review') this.renderReviewPage();
        else if (view === 'progress') this.renderProgressPage();
        else if (view === 'chunks') this.renderChunks();
        else if (view === 'vocab') this.renderVocab();
        else if (view === 'verbs') this.renderVerbs();
        else if (view === 'grammar') this.renderGrammarHome();
        else if (view === 'scripts') this.renderSpeakingScripts();
        else if (view === 'story-builder') this.renderStoryBuilder();
        else if (view === 'shadowing') this.renderShadowingLibrary();
        else if (view === 'topic-library') this.renderPersonalTopicLibrary();
        this.closeMobileNav();
    },

    renderDashboard() {
        let html = `<div class="section-title">Your 90-Day Journey</div>`;
        for (let month = 1; month <= 3; month++) {
            let monthTitles = ["Month 1: Foundation Conversation", "Month 2: Daily & Workplace Conversation", "Month 3: Confidence & Real Conversation Simulation"];
            html += `<h2 class="month-header">${monthTitles[month - 1]}</h2><div class="grid-4">`;
            
            curriculum.filter(d => d.month === month).forEach(d => {
                let status = this.userData.progress[d.day] || 'not-started';
                let statusText = status === 'done' ? 'Done' : (status === 'in_progress' ? 'In Progress' : 'Not Started');
                let dayTypeBadge = d.type === 'review' ? '⭐ Review' : (d.type === 'test' ? '🏆 Test' : '');

                html += `
                    <div class="day-card" onclick="app.navigate('day', ${d.day})">
                        <div class="day-header">
                            <span class="day-num">Day ${d.day} <span style="font-size:0.8rem;color:var(--primary);">${dayTypeBadge}</span></span>
                            <span class="badge ${status.replace('_', '-')}">${statusText}</span>
                        </div>
                        <div class="day-topic" style="font-weight: 500; font-size:0.95rem;">${d.topic}</div>
                    </div>`;
            });
            html += `</div>`;
        }
        this.contentDiv.innerHTML = html;
    },

    openDay(dayNum) {
        this.currentDayData = curriculum.find(d => d.day === dayNum);
        this.userData.lastDayOpened = dayNum;
        if(this.userData.progress[dayNum] !== 'done') this.userData.progress[dayNum] = 'in_progress';
        this.saveProgress();

        if (this.currentDayData.type === 'test') this.renderMonthlyTest();
        else if (this.currentDayData.type === 'review') this.renderWeeklyReview();
        else this.renderNormalDay();
    },

    renderNormalDay() {
        const d = this.currentDayData;
        this.contentDiv.innerHTML = `
            <div class="card mb-10" style="background:#f8fafc;">
                <button class="btn btn-outline mb-10" onclick="app.navigate('dashboard')">← Dashboard</button>
                <h2 style="font-size: 1.8rem; color:var(--primary);">Day ${d.day}: ${d.topic}</h2>
                <p style="color: var(--text-muted);">${d.goal}</p>
            </div>
            
            <div class="msg-box"><strong>Instructions:</strong> Review materials, complete active recall, build sentences, and practice speaking!</div>

            <div class="card">
                <h3 class="mb-20"><span class="step-number">1</span> Material: Phrases & Vocabulary</h3>
                <div class="grid-2">
                    <div>
                        <h4 class="mb-10">Phrases</h4>
                        <ul class="phrase-list">${d.phrases.map(p => `<li><span class="en-text">${p.en}</span><span class="id-text">${p.id}</span>${p.example ? `<span class="phrase-example">Example: ${p.example}</span>` : ''}</li>`).join('')}</ul>
                    </div>
                    <div>
                        <h4 class="mb-10">Vocabulary</h4>
                        <ul class="vocab-list">${d.vocabulary.map(v => `<li><span class="en-text">${v.en}</span><span class="id-text">${v.id}</span></li>`).join('')}</ul>
                    </div>
                </div>
                <div class="mt-20">
                    <h4 class="mb-10">Example Sentences</h4>
                    <ul class="listen-list">${d.examples.map(ex => `<li><span>${ex}</span><button class="speech-btn" onclick="speakText('${escapeForOnClick(ex)}')">&#128266; Listen</button></li>`).join('')}</ul>
                </div>
            </div>

            <div class="card study-step" id="section-recall">
                <h3 class="mb-10"><span class="step-number">2</span> Active Recall</h3>
                <p class="mb-10 text-muted">Test your memory. Look at the Indonesian hint and type English.</p>
                <div id="recall-area"><button class="btn btn-primary" onclick="app.startActiveRecall()">Start Practice</button></div>
            </div>

            <div class="card study-step">
                <h3 class="mb-10"><span class="step-number">3</span> Sentence Builder</h3>
                <select id="sb-phrase">${d.phrases.map(p => `<option value="${p.en}">${p.en}</option>`).join('')}</select>
                <textarea id="sb-input" placeholder="Create your own complete sentence..."></textarea>
                <button class="btn btn-primary" onclick="app.saveSentence()">Save Sentence</button>
                <button class="btn btn-outline" onclick="app.openSpeakingScriptFromPractice('story')">Save As Speaking Script</button>
                <div id="sb-saved" class="mt-20">${this.renderSavedSentences()}</div>
            </div>

            <div class="card study-step">
                <h3 class="mb-10"><span class="step-number">4</span> Mini Conversation</h3>
                <div id="convo-area" style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <button class="btn btn-primary" onclick="app.startConversation()">Start Conversation</button>
                </div>
                <div id="convo-saved" class="mt-20">${this.renderSavedConversations()}</div>
            </div>

            <div class="card study-step">
                <h3 class="mb-10"><span class="step-number">5</span> Speaking Challenge</h3>
                <div class="msg-box" style="background: #fffbeb; border-color: #f59e0b;">
                    <strong>Instruction:</strong> Read the prompt, speak out loud for 60s, then write a summary.
                </div>
                <div class="listen-row mb-10">
                    <p style="font-size: 1.1rem; font-weight: bold;">Prompt: "${d.speakingChallenge}"</p>
                    <button class="speech-btn" onclick="speakText('${escapeForOnClick(d.speakingChallenge)}')">&#128266; Listen</button>
                </div>
                <div class="flex gap-10 align-center mb-10">
                    <button class="btn btn-warning" onclick="app.startSpeakingTimer()">Start 60s Timer</button>
                    <span id="speaking-timer" style="font-size: 1.5rem; font-weight: bold;">60s</span>
                </div>
                <textarea id="speaking-input" placeholder="Type a summary of what you just spoke...">${this.userData.speaking[d.day] || ''}</textarea>
                <div class="speech-controls">
                    <button class="btn btn-primary" onclick="startContinuousSpeech('speaking-input')">&#127897; Start Speaking</button>
                    <button class="btn btn-danger" onclick="stopContinuousSpeech()">&#9209; Stop</button>
                </div>
                <p id="speech-status" class="speech-status">Microphone inactive.</p>
                <button class="btn btn-primary" onclick="app.saveSpeaking(event)">Save Speaking Draft</button>
                <button class="btn btn-outline" onclick="app.openSpeakingScriptFromPractice('speaking')">Save As Speaking Script</button>
            </div>

            <div class="card text-center study-step" style="background: #f0fdf4; border-color: #86efac;">
                <h3>Great Job!</h3><p class="mb-10">Ready to complete today?</p>
                <button class="btn btn-success" style="padding: 12px 24px;" onclick="app.markDayDone()">Mark Day ${d.day} Done</button>
            </div>
        `;
    },

    startActiveRecall() {
        let d = this.currentDayData;
        this.recallState.items = [...d.phrases, ...d.vocabulary].sort(() => Math.random() - 0.5);
        this.recallState.index = 0;
        this.renderRecallItem();
    },
    renderRecallItem() {
        let state = this.recallState;
        if(state.index >= state.items.length) {
            document.getElementById('recall-area').innerHTML = `<div style="color:var(--success); font-weight:bold; font-size:1.2rem;">🎉 Session Completed!</div><button class="btn btn-outline mt-10" onclick="app.startActiveRecall()">Practice Again</button>`;
            return;
        }
        let item = state.items[state.index];
        document.getElementById('recall-area').innerHTML = `
            <div id="recall-hint">Indonesian: <strong>${item.id}</strong></div>
            <input type="text" id="recall-input" placeholder="Type the English translation..." autocomplete="off">
            <button class="btn btn-primary mt-10" onclick="app.checkRecall()">Check Answer</button>
            <div id="recall-answer" style="display:none; color:var(--success); font-weight:bold; font-size:1.2rem; margin-top:15px;"></div>
            <div id="recall-actions" class="hidden flex gap-10 justify-center mt-10">
                <button class="btn btn-success" onclick="app.nextRecall(true)">Correct (Got it!)</button>
                <button class="btn btn-warning" onclick="app.nextRecall(false)">Review Again Later</button>
            </div>
            <div class="mt-10 text-muted" style="font-size: 0.85rem;">Item ${state.index + 1} of ${state.items.length}</div>
        `;
    },
    checkRecall() {
        let item = this.recallState.items[this.recallState.index];
        let ansDiv = document.getElementById('recall-answer');
        ansDiv.style.display = 'block'; ansDiv.innerHTML = `Correct English: <strong>${item.en}</strong>`;
        document.getElementById('recall-actions').classList.remove('hidden');
    },
    nextRecall(isCorrect) {
        let item = this.recallState.items[this.recallState.index];
        if(!isCorrect && !this.userData.reviewAgain.find(i => i.en === item.en)) {
            this.userData.reviewAgain.push(item); this.saveProgress();
        }
        this.recallState.index++; this.renderRecallItem();
    },

    saveSentence() {
        let d = this.currentDayData; let val = document.getElementById('sb-input').value.trim();
        if(!val) return;
        if(!this.userData.sentences[d.day]) this.userData.sentences[d.day] = [];
        this.userData.sentences[d.day].push(val); this.saveProgress();
        document.getElementById('sb-input').value = '';
        document.getElementById('sb-saved').innerHTML = this.renderSavedSentences();
    },
    renderSavedSentences() {
        let sents = this.userData.sentences[this.currentDayData.day] || [];
        if(!sents.length) return '';
        return `<h4>My Sentences:</h4><ul style="background:#f8fafc; padding:15px 30px; border-radius:6px; margin-top:10px;">${sents.map(s => `<li>${s}</li>`).join('')}</ul>`;
    },

    startConversation() {
        this.convoState.index = 0; this.convoState.answers = []; this.renderConvoQuestion();
    },
    renderConvoQuestion() {
        let qList = this.currentDayData.questions; let idx = this.convoState.index;
        if(idx >= qList.length) {
            this.userData.conversations[this.currentDayData.day] = this.convoState.answers; this.saveProgress();
            document.getElementById('convo-area').innerHTML = `<div style="color:var(--success); font-weight:bold;">Conversation Completed!</div>`;
            document.getElementById('convo-saved').innerHTML = this.renderSavedConversations();
            return;
        }
        document.getElementById('convo-area').innerHTML = `
            <div class="listen-row mb-10">
                <div style="font-weight:bold; color:var(--primary);">Q${idx+1}: ${qList[idx]}</div>
                <button class="speech-btn" onclick="speakText('${escapeForOnClick(qList[idx])}')">&#128266; Listen</button>
            </div>
            <textarea id="convo-input" placeholder="Type your answer naturally..."></textarea>
            <div id="convo-speech-message" class="speech-message"></div>
            <button class="btn btn-primary" onclick="app.nextConvoQuestion()">Next Question</button>
            <button class="btn btn-outline" onclick="app.startSpeechToText('convo-input', 'convo-speech-message')">&#127897; Speak</button>
        `;
    },
    nextConvoQuestion() {
        let val = document.getElementById('convo-input').value.trim();
        this.convoState.answers.push({ q: this.currentDayData.questions[this.convoState.index], a: val || "(No answer)" });
        this.convoState.index++; this.renderConvoQuestion();
    },
    renderSavedConversations() {
        let convos = this.userData.conversations[this.currentDayData.day] || [];
        if(!convos.length) return '';
        return `<h4>My Conversation Answers:</h4><div style="margin-top: 10px;">` + 
            convos.map(c => `<div style="background:#f8fafc; padding:10px; margin-bottom:10px; border-radius:6px; border:1px solid var(--border);"><div style="font-weight:500;">Q: ${c.q}</div><div style="color:var(--primary);">A: ${c.a}</div></div>`).join('') + 
            `<button class="btn btn-outline" onclick="app.openSpeakingScriptFromPractice('conversation')">Save As Speaking Script</button></div>`;
    },

    startSpeakingTimer() {
        let timeLeft = 60; let timerEl = document.getElementById('speaking-timer');
        timerEl.innerText = timeLeft + 's'; timerEl.style.color = 'var(--text-main)'; timerEl.style.background = 'transparent';
        if(this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            timeLeft--; timerEl.innerText = timeLeft + 's';
            if(timeLeft <= 10) timerEl.style.color = 'red';
            if(timeLeft <= 0) { clearInterval(this.timerInterval); timerEl.innerText = "Time's Up!"; timerEl.style.background = '#fee2e2'; timerEl.style.padding = '0 10px'; timerEl.style.borderRadius = '4px'; }
        }, 1000);
    },
    saveSpeaking(event) {
        this.userData.speaking[this.currentDayData.day] = document.getElementById('speaking-input').value.trim();
        this.saveProgress();
        let btn = event.target; btn.innerText = "Saved!"; btn.classList.replace('btn-primary', 'btn-success');
        setTimeout(() => { btn.innerText = "Save Speaking Draft"; btn.classList.replace('btn-success', 'btn-primary'); }, 2000);
    },

    inferSpeakingScriptCategory(topic = '') {
        let normalizedTopic = topic.toLowerCase();
        if(normalizedTopic.includes('introduc') || normalizedTopic.includes('yourself')) return 'Self Introduction';
        if(normalizedTopic.includes('job') || normalizedTopic.includes('work')) return 'My Job';
        if(normalizedTopic.includes('study') || normalizedTopic.includes('academic') || normalizedTopic.includes('university')) return 'My Study';
        if(normalizedTopic.includes('english') || normalizedTopic.includes('learning')) return 'English Learning';
        if(normalizedTopic.includes('program') || normalizedTopic.includes('web') || normalizedTopic.includes('bug') || normalizedTopic.includes('project')) return 'Programming';
        if(normalizedTopic.includes('technology') || normalizedTopic.includes('application')) return 'Technology';
        if(normalizedTopic.includes('future') || normalizedTopic.includes('goal') || normalizedTopic.includes('plan')) return 'Future Goals';
        if(normalizedTopic.includes('routine') || normalizedTopic.includes('day') || normalizedTopic.includes('home') || normalizedTopic.includes('hobby')) return 'Daily Life';
        return 'Custom Topic';
    },

    openSpeakingScriptFromPractice(source) {
        const d = this.currentDayData;
        let content = '';
        let title = `Day ${d.day}: ${d.topic}`;

        if(source === 'story') {
            let savedSentences = this.userData.sentences[d.day] || [];
            let draft = document.getElementById('sb-input').value.trim();
            content = [...savedSentences, draft].filter(Boolean).join('\n');
            title += ' - Story Builder';
        } else if(source === 'conversation') {
            let answers = this.userData.conversations[d.day] || [];
            content = answers.map(item => item.a).filter(answer => answer && answer !== '(No answer)').join('\n');
            title += ' - Conversation';
        } else if(source === 'speaking') {
            content = document.getElementById('speaking-input').value.trim();
            title += ' - Speaking Challenge';
        }

        if(!content) {
            alert('Write or save your practice answer first, then save it as a speaking script.');
            return;
        }

        this.navigate('scripts');
        this.showSpeakingScriptForm('', {
            title,
            category: this.inferSpeakingScriptCategory(d.topic),
            content
        });
    },

    renderSpeakingScripts() {
        this.contentDiv.innerHTML = `
            <div class="section-title">My Speaking Scripts</div>
            <div class="msg-box">Save your best answers here, improve them over time, and reuse them for speaking practice.</div>
            <div class="script-toolbar">
                <button class="btn btn-primary" onclick="app.showSpeakingScriptForm()">Create Script</button>
                <input type="text" id="search-scripts" placeholder="Search scripts by title, category, or content..." oninput="app.filterSpeakingScripts()">
            </div>
            <div id="script-editor" class="card hidden"></div>
            <p class="vocab-result-count mb-10" id="script-result-count"></p>
            <div class="grid-3" id="scripts-container"></div>
        `;
        this.filterSpeakingScripts();
    },

    filterSpeakingScripts() {
        let query = document.getElementById('search-scripts').value.trim().toLowerCase();
        let filtered = this.userData.speakingScripts
            .filter(script => [script.title, script.category, script.content].some(value => value.toLowerCase().includes(query)))
            .sort((a, b) => Number(b.favorite) - Number(a.favorite) || b.updatedAt.localeCompare(a.updatedAt));

        document.getElementById('script-result-count').innerText = `${filtered.length} speaking scripts`;
        document.getElementById('scripts-container').innerHTML = filtered.map(script => `
            <div class="speaking-script-card">
                <button class="fav-btn ${script.favorite ? 'active' : ''}" onclick="app.toggleFavoriteScript('${script.id}')">${script.favorite ? '&#9733;' : '&#9734;'}</button>
                <div class="category-label">${escapeHtml(script.category)}</div>
                <h3>${escapeHtml(script.title)}</h3>
                <div class="speaking-script-content">${escapeHtml(script.content)}</div>
                <div class="script-card-actions">
                    <button class="btn btn-outline" onclick="app.showSpeakingScriptForm('${script.id}')">Edit Script</button>
                    <button class="btn btn-danger" onclick="app.deleteSpeakingScript('${script.id}')">Delete Script</button>
                </div>
            </div>
        `).join('') || '<div class="card text-center">No speaking scripts found. Create your first script from this page or from a daily practice.</div>';
    },

    showSpeakingScriptForm(scriptId = '', preset = null) {
        let script = this.userData.speakingScripts.find(item => item.id === scriptId);
        let values = script || preset || { title: '', category: 'Custom Topic', content: '' };
        let editor = document.getElementById('script-editor');
        editor.classList.remove('hidden');
        editor.innerHTML = `
            <div class="flex justify-between align-center mb-10">
                <h3>${script ? 'Edit Speaking Script' : 'Create Speaking Script'}</h3>
                <button class="btn btn-outline" onclick="app.closeSpeakingScriptForm()">Cancel</button>
            </div>
            <input type="hidden" id="script-id" value="${escapeHtml(scriptId)}">
            <label for="script-title">Title</label>
            <input type="text" id="script-title" value="${escapeHtml(values.title)}" placeholder="Example: My Job">
            <label for="script-category">Category</label>
            <select id="script-category">
                ${speakingScriptCategories.map(category => `<option value="${category}" ${category === values.category ? 'selected' : ''}>${category}</option>`).join('')}
            </select>
            <label for="script-content">Script Content</label>
            <textarea id="script-content" placeholder="Write your best speaking script here...">${escapeHtml(values.content)}</textarea>
            <div id="script-speech-message" class="speech-message"></div>
            <div id="script-form-message" class="script-form-message"></div>
            <button class="btn btn-outline" onclick="app.startSpeechToText('script-content', 'script-speech-message')">&#127897; Speak</button>
            <button class="btn btn-success" onclick="app.saveSpeakingScript()">Save Script</button>
        `;
        editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    closeSpeakingScriptForm() {
        document.getElementById('script-editor').classList.add('hidden');
    },

    saveSpeakingScript() {
        let id = document.getElementById('script-id').value;
        let title = document.getElementById('script-title').value.trim();
        let category = document.getElementById('script-category').value;
        let content = document.getElementById('script-content').value.trim();
        let message = document.getElementById('script-form-message');

        if(!title || !content) {
            message.innerText = 'Title and Script Content are required.';
            return;
        }

        let now = new Date().toISOString();
        let existing = this.userData.speakingScripts.find(script => script.id === id);
        if(existing) {
            Object.assign(existing, { title, category, content, updatedAt: now });
        } else {
            this.userData.speakingScripts.push({
                id: `script-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                title, category, content, favorite: false, createdAt: now, updatedAt: now
            });
        }
        this.saveProgress();
        this.renderSpeakingScripts();
    },

    deleteSpeakingScript(scriptId) {
        this.userData.speakingScripts = this.userData.speakingScripts.filter(script => script.id !== scriptId);
        this.saveProgress();
        this.filterSpeakingScripts();
    },

    toggleFavoriteScript(scriptId) {
        let script = this.userData.speakingScripts.find(item => item.id === scriptId);
        if(!script) return;
        script.favorite = !script.favorite;
        script.updatedAt = new Date().toISOString();
        this.saveProgress();
        this.filterSpeakingScripts();
    },

    renderStoryBuilder() {
        this.contentDiv.innerHTML = `
            <div class="section-title">Story Builder</div>
            <div class="msg-box">Build a simple story from a random prompt. Use the keywords, suggested vocabulary, and chunks as speaking support.</div>
            <div class="card">
                <div class="story-builder-controls">
                    <div>
                        <label for="story-category">Category</label>
                        <select id="story-category">
                            ${storyBuilderCategories.map(category => `<option value="${category}">${category}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label for="story-level">Level</label>
                        <select id="story-level">
                            ${storyBuilderLevels.map(level => `<option value="${level}">${level}</option>`).join('')}
                        </select>
                    </div>
                    <button class="btn btn-primary" onclick="app.generateStoryPrompt()">Generate Story Prompt</button>
                </div>
            </div>
            <div id="story-workspace" class="hidden"></div>
            <div class="mt-20">
                <h3 class="mb-10">Saved Stories</h3>
                <div class="grid-3" id="saved-stories"></div>
            </div>
        `;
        this.renderSavedStories();
    },

    generateStoryPrompt() {
        const category = document.getElementById('story-category').value;
        const level = document.getElementById('story-level').value;
        const data = storyBuilderData[category];
        this.currentStoryPrompt = {
            category,
            level,
            time: randomItem(data.times),
            situation: randomItem(data.situations),
            problem: randomItem(data.problems),
            solution: randomItem(data.solutions),
            vocabulary: data.vocabulary.slice(0, level === 'Beginner' ? 4 : 6),
            chunks: data.chunks.slice(0, level === 'Beginner' ? 2 : 3)
        };
        this.renderStoryWorkspace();
    },

    renderStoryWorkspace(story = null) {
        const prompt = story || this.currentStoryPrompt;
        if(!prompt) return;
        if(isListening) stopContinuousSpeech();
        this.currentStoryPrompt = {
            category: prompt.category,
            level: prompt.level,
            time: prompt.time,
            situation: prompt.situation,
            problem: prompt.problem,
            solution: prompt.solution,
            vocabulary: [...prompt.vocabulary],
            chunks: [...prompt.chunks]
        };
        const workspace = document.getElementById('story-workspace');
        workspace.classList.remove('hidden');
        workspace.innerHTML = `
            <div class="story-prompt-grid">
                ${[
                    ['Time', prompt.time],
                    ['Situation', prompt.situation],
                    ['Problem', prompt.problem],
                    ['Solution', prompt.solution]
                ].map(([label, value]) => `
                    <div class="story-prompt-card">
                        <span>${label}</span>
                        <strong>${escapeHtml(value)}</strong>
                    </div>
                `).join('')}
            </div>
            <div class="card">
                <div class="story-support-grid">
                    <div>
                        <h4>Keywords</h4>
                        <div class="story-tags">${[prompt.time, prompt.situation, prompt.problem, prompt.solution].map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>
                    </div>
                    <div>
                        <h4>Suggested Vocabulary</h4>
                        <div class="story-tags">${prompt.vocabulary.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>
                    </div>
                    <div>
                        <h4>Suggested Chunks</h4>
                        <div class="story-tags">${prompt.chunks.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>
                    </div>
                </div>
                <label for="story-content">Your Story</label>
                <textarea id="story-content" placeholder="Write your story here...">${story ? escapeHtml(story.content) : ''}</textarea>
                <div class="speech-controls">
                    <button class="btn btn-primary" onclick="startContinuousSpeech('story-content')">&#127897; Start Speaking</button>
                    <button class="btn btn-danger" onclick="stopContinuousSpeech()">&#9209; Stop</button>
                </div>
                <p id="speech-status" class="speech-status">Microphone inactive.</p>
                <div id="story-message" class="script-form-message"></div>
                <div class="script-card-actions">
                    <button class="btn btn-success" onclick="app.saveStory()">Save Story</button>
                    <button class="btn btn-outline" onclick="app.saveStoryAsSpeakingScript()">Save As Speaking Script</button>
                </div>
            </div>
        `;
        workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    saveStory() {
        const content = document.getElementById('story-content').value.trim();
        if(!content) {
            document.getElementById('story-message').innerText = 'Write your story before saving it.';
            return;
        }
        const prompt = this.currentStoryPrompt;
        const now = new Date().toISOString();
        this.userData.stories.push({
            id: `story-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            ...prompt,
            content,
            createdAt: now
        });
        this.saveProgress();
        document.getElementById('story-message').innerText = 'Story saved.';
        this.renderSavedStories();
    },

    renderSavedStories() {
        const container = document.getElementById('saved-stories');
        if(!container) return;
        container.innerHTML = [...this.userData.stories].reverse().map(story => `
            <div class="speaking-script-card">
                <div class="category-label">${escapeHtml(story.category)} - ${escapeHtml(story.level)}</div>
                <h3>${escapeHtml(story.time)}</h3>
                <div class="speaking-script-content">${escapeHtml(story.content)}</div>
                <div class="script-card-actions">
                    <button class="btn btn-outline" onclick="app.openSavedStory('${story.id}')">Open Story</button>
                    <button class="btn btn-danger" onclick="app.deleteStory('${story.id}')">Delete Story</button>
                </div>
            </div>
        `).join('') || '<div class="card text-center">No saved stories yet. Generate a prompt and write your first story.</div>';
    },

    openSavedStory(storyId) {
        const story = this.userData.stories.find(item => item.id === storyId);
        if(story) this.renderStoryWorkspace(story);
    },

    deleteStory(storyId) {
        this.userData.stories = this.userData.stories.filter(story => story.id !== storyId);
        this.saveProgress();
        this.renderSavedStories();
    },

    saveStoryAsSpeakingScript() {
        const content = document.getElementById('story-content').value.trim();
        if(!content) {
            document.getElementById('story-message').innerText = 'Write your story before saving it as a speaking script.';
            return;
        }
        const prompt = this.currentStoryPrompt;
        const scriptCategory = {
            Work: 'My Job',
            Study: 'My Study',
            Technology: 'Technology',
            'Daily Life': 'Daily Life'
        }[prompt.category] || 'Custom Topic';
        this.navigate('scripts');
        this.showSpeakingScriptForm('', {
            title: `${prompt.category} Story - ${prompt.time}`,
            category: scriptCategory,
            content
        });
    },

    renderShadowingLibrary(category = 'All', level = 'All') {
        const categories = ['All', ...new Set(shadowingItems.map(item => item.category))];
        const levels = ['All', 'Beginner', 'Intermediate'];
        const filtered = shadowingItems.filter(item =>
            (category === 'All' || item.category === category) &&
            (level === 'All' || item.level === level)
        );
        this.contentDiv.innerHTML = `
            <div class="section-title">Shadowing Library</div>
            <div class="msg-box">Read aloud with a timer, repeat the text several times, and build smoother pronunciation and speaking fluency.</div>
            <h4 class="mb-10">Category</h4>
            <div class="category-tabs">
                ${categories.map(item => `<button class="${item === category ? 'active' : ''}" onclick="app.renderShadowingLibrary('${item}', '${level}')">${item}</button>`).join('')}
            </div>
            <h4 class="mb-10">Level</h4>
            <div class="category-tabs">
                ${levels.map(item => `<button class="${item === level ? 'active' : ''}" onclick="app.renderShadowingLibrary('${category}', '${item}')">${item}</button>`).join('')}
            </div>
            <div id="shadowing-workspace"></div>
            <div class="grid-3">
                ${filtered.map(item => {
                    const progress = this.userData.shadowingProgress[item.id];
                    return `
                        <div class="shadowing-library-card">
                            <div class="category-label">${item.category} - ${item.level}</div>
                            <h3>${item.title}</h3>
                            <p>${escapeHtml(item.text).replace(/\n/g, ' ')}</p>
                            <button class="btn ${progress?.completed ? 'btn-success' : 'btn-primary'}" onclick="app.openShadowingItem('${item.id}')">
                                ${progress?.completed ? 'Practice Again' : 'Start Shadowing'}
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    openShadowingItem(itemId) {
        const item = shadowingItems.find(entry => entry.id === itemId);
        if(!item) return;
        this.currentShadowingItem = item;
        if(this.timerInterval) clearInterval(this.timerInterval);
        const progress = this.userData.shadowingProgress[item.id] || { read1: false, read3: false, read5: false, completed: false };
        const workspace = document.getElementById('shadowing-workspace');
        workspace.innerHTML = `
            <div class="card shadowing-workspace-card">
                <div class="category-label">${item.category} - ${item.level}</div>
                <h2>${item.title}</h2>
                <div class="listen-row mb-10">
                    <div class="shadowing-text">${escapeHtml(item.text).replace(/\n/g, '<br>')}</div>
                    <button class="speech-btn" onclick="speakText('${escapeForOnClick(item.text)}')">&#128266; Listen</button>
                </div>
                <div class="shadowing-timer-row">
                    <strong id="shadowing-timer">Ready</strong>
                    <div class="script-card-actions">
                        <button class="btn btn-outline" onclick="app.startShadowingTimer(30)">30 seconds</button>
                        <button class="btn btn-outline" onclick="app.startShadowingTimer(60)">60 seconds</button>
                        <button class="btn btn-outline" onclick="app.startShadowingTimer(90)">90 seconds</button>
                    </div>
                </div>
                <div class="shadowing-checklist">
                    ${[
                        ['read1', 'Read 1 time'],
                        ['read3', 'Read 3 times'],
                        ['read5', 'Read 5 times']
                    ].map(([key, label]) => `
                        <label>
                            <input type="checkbox" ${progress[key] ? 'checked' : ''} onchange="app.updateShadowingChecklist('${key}', this.checked)">
                            <span>${label}</span>
                        </label>
                    `).join('')}
                </div>
                <div id="shadowing-message" class="script-form-message"></div>
                <button class="btn btn-success" onclick="app.completeShadowingSession()">Mark Session Complete</button>
            </div>
        `;
        workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    startShadowingTimer(seconds) {
        let timeLeft = seconds;
        const timer = document.getElementById('shadowing-timer');
        if(this.timerInterval) clearInterval(this.timerInterval);
        timer.innerText = `${timeLeft}s`;
        timer.classList.remove('done');
        this.timerInterval = setInterval(() => {
            timeLeft--;
            timer.innerText = `${timeLeft}s`;
            if(timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
                timer.innerText = "Time's Up!";
                timer.classList.add('done');
            }
        }, 1000);
    },

    updateShadowingChecklist(key, checked) {
        const item = this.currentShadowingItem;
        if(!item) return;
        const progress = this.userData.shadowingProgress[item.id] || { read1: false, read3: false, read5: false, completed: false };
        progress[key] = checked;
        this.userData.shadowingProgress[item.id] = progress;
        this.saveProgress();
    },

    completeShadowingSession() {
        const item = this.currentShadowingItem;
        if(!item) return;
        const progress = this.userData.shadowingProgress[item.id] || { read1: false, read3: false, read5: false, completed: false };
        progress.completed = true;
        progress.lastCompletedAt = new Date().toISOString();
        this.userData.shadowingProgress[item.id] = progress;
        this.userData.shadowingSessionsCompleted++;
        this.saveProgress();
        document.getElementById('shadowing-message').innerText = 'Shadowing session completed and saved.';
    },

    renderPersonalTopicLibrary(category = 'All') {
        const categories = ['All', ...Object.keys(personalTopicSeeds)];
        this.contentDiv.innerHTML = `
            <div class="section-title">Personal Topic Library</div>
            <div class="msg-box">Choose a topic that matches your real life, review the useful expressions, and use the speaking challenge for focused practice.</div>
            <div class="category-tabs">
                ${categories.map(item => `<button class="${item === category ? 'active' : ''}" onclick="app.renderPersonalTopicLibrary('${item}')">${item}</button>`).join('')}
            </div>
            <input type="text" id="search-personal-topics" placeholder="Search topics, vocabulary, chunks, or verbs..." oninput="app.filterPersonalTopics('${category}')">
            <p class="vocab-result-count mb-10" id="personal-topic-result-count"></p>
            <div id="personal-topic-detail"></div>
            <div class="grid-3" id="personal-topic-container"></div>
        `;
        this.filterPersonalTopics(category);
    },

    filterPersonalTopics(category = 'All') {
        const searchInput = document.getElementById('search-personal-topics');
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const filtered = personalTopicLibrary.filter(item => {
            const matchesCategory = category === 'All' || item.category === category;
            const searchable = [
                item.topic, item.description, item.category,
                ...item.chunks, ...item.vocabulary, ...item.verbs
            ].join(' ').toLowerCase();
            return matchesCategory && searchable.includes(query);
        });
        document.getElementById('personal-topic-result-count').innerText = `${filtered.length} speaking topics`;
        document.getElementById('personal-topic-container').innerHTML = filtered.map(item => `
            <button class="personal-topic-card" onclick="app.openPersonalTopic('${item.id}')">
                <span class="category-label">${item.category}</span>
                <strong>${item.topic}</strong>
                <span>${item.description}</span>
                <small>Open speaking material</small>
            </button>
        `).join('') || '<div class="card text-center">No speaking topics found. Try another keyword or category.</div>';
    },

    openPersonalTopic(topicId) {
        const item = personalTopicLibrary.find(topic => topic.id === topicId);
        if(!item) return;
        const detail = document.getElementById('personal-topic-detail');
        detail.innerHTML = `
            <div class="card personal-topic-detail">
                <div class="flex justify-between align-center personal-topic-detail-header">
                    <div>
                        <span class="category-label">${item.category}</span>
                        <h2>${item.topic}</h2>
                    </div>
                    <button class="btn btn-outline" onclick="app.closePersonalTopic()">Close</button>
                </div>
                <p class="mb-20">${item.description}</p>
                <div class="personal-topic-columns">
                    <div>
                        <h4>Useful Chunks</h4>
                        <ul>${item.chunks.map(chunk => `<li>${chunk}</li>`).join('')}</ul>
                    </div>
                    <div>
                        <h4>Useful Vocabulary</h4>
                        <div class="story-tags">${item.vocabulary.map(word => `<span>${word}</span>`).join('')}</div>
                    </div>
                    <div>
                        <h4>Useful Verbs</h4>
                        <div class="story-tags">${item.verbs.map(verb => `<span>${verb}</span>`).join('')}</div>
                    </div>
                </div>
                <div class="personal-topic-questions">
                    <h4>Conversation Questions</h4>
                    <ol>${item.questions.map(question => `<li>${question}</li>`).join('')}</ol>
                </div>
                <div class="msg-box personal-topic-challenge">
                    <strong>Speaking Challenge:</strong> ${item.challenge}
                </div>
            </div>
        `;
        detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    closePersonalTopic() {
        document.getElementById('personal-topic-detail').innerHTML = '';
    },

    markDayDone() { this.userData.progress[this.currentDayData.day] = 'done'; this.saveProgress(); this.navigate('dashboard'); },

    renderChunks(filterCat = 'All') {
        let categories = ['All', ...new Set(chunksData.map(c => c.category))];
        let html = `
            <div class="section-title">English Chunks Cheatsheet</div>
            <div class="msg-box">Memorize these chunks to improve your speaking speed and fluency.</div>
            <div class="category-tabs">
                ${categories.map(c => `<button class="${c===filterCat?'active':''}" onclick="app.renderChunks('${c}')">${c}</button>`).join('')}
            </div>
            <input type="text" id="search-chunks" placeholder="Search chunks in English or Indonesian..." onkeyup="app.filterChunks('${filterCat}')">
            <div class="grid-3" id="chunks-container"></div>
        `;
        this.contentDiv.innerHTML = html;
        this.filterChunks(filterCat);
    },
    filterChunks(filterCat) {
        let query = document.getElementById('search-chunks').value.toLowerCase();
        let filtered = chunksData.filter(c => (filterCat === 'All' || c.category === filterCat) && (c.en.toLowerCase().includes(query) || c.id.toLowerCase().includes(query)));
        
        let container = document.getElementById('chunks-container');
        container.innerHTML = filtered.map(c => {
            let isFav = this.userData.favChunks.includes(c.en);
            return `
            <div class="cheatsheet-card">
                <button class="fav-btn ${isFav?'active':''}" onclick="app.toggleFav('Chunks', '${c.en.replace(/'/g, "\\'")}', this)">${isFav?'★':'☆'}</button>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:5px; text-transform:uppercase;">${c.category}</div>
                <div class="cheatsheet-title">${c.en}</div>
                <div class="cheatsheet-meaning">${c.id}</div>
                <div class="cheatsheet-example">"${c.example}"</div>
            </div>`;
        }).join('');
    },

    renderVocab(filterLetter = 'All', filterCategory = 'All') {
        let letters = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
        let categories = ['All', 'Daily Life', 'Things at Home', 'K-pop Life', 'Travel', 'Work', 'Study', 'Programming'];
        this.vocabFilters = { letter: filterLetter, category: filterCategory };
        let html = `
            <div class="section-title">Vocabulary A-Z</div>
            <div class="msg-box">Explore ${sortedVocabData.length} practical words for daily life, home, K-pop, travel, work, study, and programming.</div>
            <h4 class="mb-10">Filter by category</h4>
            <div class="category-tabs">
                ${categories.map(category => `<button class="${category===filterCategory?'active':''}" onclick="app.renderVocab('${filterLetter}', '${category}')">${category}</button>`).join('')}
            </div>
            <h4 class="mb-10">Filter by letter</h4>
            <div class="alphabet-filter">
                ${letters.map(letter => `<button class="${letter===filterLetter?'active':''}" onclick="app.renderVocab('${letter}', '${filterCategory}')">${letter}</button>`).join('')}
            </div>
            <input type="text" id="search-vocab" placeholder="Search vocabulary, meaning, or category..." oninput="app.filterVocab()">
            <p class="vocab-result-count mb-10" id="vocab-result-count"></p>
            <div class="grid-3" id="vocab-container"></div>
        `;
        this.contentDiv.innerHTML = html;
        this.filterVocab();
    },
    filterVocab() {
        let query = document.getElementById('search-vocab').value.toLowerCase();
        let { letter, category } = this.vocabFilters;
        let filtered = sortedVocabData.filter(v =>
            (letter === 'All' || v.letter === letter) &&
            (category === 'All' || v.category === category) &&
            (v.word.toLowerCase().includes(query) || v.id.toLowerCase().includes(query) || v.category.toLowerCase().includes(query))
        );

        document.getElementById('vocab-result-count').innerText = `${filtered.length} vocabulary items`;
        document.getElementById('vocab-container').innerHTML = filtered.map(v => {
            let isFav = this.userData.favVocab.includes(v.word);
            return `
            <div class="cheatsheet-card">
                <button class="fav-btn ${isFav?'active':''}" onclick="app.toggleFav('Vocab', '${v.word}', this)">${isFav?'★':'☆'}</button>
                <div class="category-label">${v.category}</div>
                <div class="cheatsheet-title" style="font-size:1.2rem;">${v.word}</div>
                <div class="cheatsheet-meaning">${v.id}</div>
                <div class="cheatsheet-example">"${v.example}"</div>
                <div class="listen-actions">
                    <button class="btn btn-outline" onclick="speakText('${escapeForOnClick(v.word)}')">&#128266; Word</button>
                    <button class="btn btn-outline" onclick="speakText('${escapeForOnClick(v.example)}')">&#128266; Example</button>
                </div>
            </div>`;
        }).join('') || '<div class="card text-center">No vocabulary items found. Try another filter or keyword.</div>';
    },

    renderGrammarHome() {
        const completed = this.userData.grammarPracticeCompleted;
        this.contentDiv.innerHTML = `
            <div class="section-title">Simple Grammar</div>
            <div class="msg-box">Grammar dasar yang langsung bisa dipakai untuk speaking dan membuat kalimat. Pilih satu materi untuk mulai belajar.</div>
            <div class="grid-2">
                ${Object.entries(grammarLessons).map(([tense, lesson]) => `
                    <button class="grammar-topic-card" onclick="app.renderGrammarLesson('${tense}')">
                        <span class="grammar-kicker">Beginner grammar</span>
                        <strong>${lesson.title}</strong>
                        <span>${lesson.description}</span>
                        <small>${completed[tense].length} / ${lesson.practices.length} mini practices completed</small>
                    </button>
                `).join('')}
            </div>
        `;
    },

    renderGrammarLesson(tense) {
        const lesson = grammarLessons[tense];
        if(!lesson) return this.renderGrammarHome();
        const completed = this.userData.grammarPracticeCompleted[tense];
        this.contentDiv.innerHTML = `
            <button class="btn btn-outline mb-20" onclick="app.renderGrammarHome()">Back to Simple Grammar</button>
            <div class="grammar-hero card">
                <span class="grammar-kicker">Practical speaking grammar</span>
                <h2>${lesson.title}</h2>
                <p>${lesson.functionText}</p>
            </div>

            <h3 class="mb-10">Sentence Patterns</h3>
            <div class="grid-3 mb-20">
                ${lesson.patterns.map(pattern => `
                    <div class="card grammar-pattern">
                        <h4>${pattern.name}</h4>
                        <code>${pattern.formula}</code>
                        ${pattern.note ? `<p>${pattern.note}</p>` : ''}
                        ${pattern.examples.map(example => `<div class="pattern-example">${example}</div>`).join('')}
                    </div>
                `).join('')}
            </div>

            <div class="card">
                <h3 class="mb-10">20 Examples</h3>
                <div class="grammar-example-list">
                    ${lesson.examples.map(([english, indonesian], index) => `
                        <div class="grammar-example">
                            <span>${index + 1}</span>
                            <div><strong>${english}</strong><small>${indonesian}</small></div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card">
                <div class="flex justify-between align-center grammar-practice-heading">
                    <div>
                        <h3>Mini Practice</h3>
                        <p>Terjemahkan prompt berikut ke bahasa Inggris, lalu lihat suggested answer.</p>
                    </div>
                    <strong>${completed.length} / ${lesson.practices.length} completed</strong>
                </div>
                <div class="grammar-practice-list">
                    ${lesson.practices.map(([prompt, suggestedAnswer], index) => {
                        const answerKey = `${tense}-${index}`;
                        const savedAnswer = this.userData.grammarAnswers[answerKey] || '';
                        return `
                            <div class="grammar-practice">
                                <label for="grammar-answer-${answerKey}">${index + 1}. ${prompt}</label>
                                <input id="grammar-answer-${answerKey}" type="text" value="${escapeHtml(savedAnswer)}" placeholder="Type your English sentence...">
                                <button class="btn btn-primary" onclick="app.saveGrammarPractice('${tense}', ${index})">Show Suggested Answer</button>
                                <div class="grammar-feedback ${savedAnswer ? '' : 'hidden'}" id="grammar-feedback-${answerKey}">
                                    <span>Suggested answer</span>
                                    <strong>${suggestedAnswer}</strong>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    saveGrammarPractice(tense, index) {
        const answerKey = `${tense}-${index}`;
        const input = document.getElementById(`grammar-answer-${answerKey}`);
        const feedback = document.getElementById(`grammar-feedback-${answerKey}`);
        this.userData.grammarAnswers[answerKey] = input.value.trim();
        if(!this.userData.grammarPracticeCompleted[tense].includes(index)) {
            this.userData.grammarPracticeCompleted[tense].push(index);
        }
        this.saveProgress();
        feedback.classList.remove('hidden');
    },

    renderVerbs(filterLetter = 'All', filterCategory = 'All') {
        let letters = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
        let categories = ['All', 'Daily Life', 'Things at Home', 'Work', 'Study', 'Programming', 'Communication', 'Travel', 'K-pop Life'];
        this.verbFilters = { letter: filterLetter, category: filterCategory };
        let html = `
            <div class="section-title">Daily Verbs A-Z</div>
            <div class="msg-box">Explore ${verbsData.length} practical verbs for daily life, home, work, study, programming, communication, travel, and K-pop.</div>
            <h4 class="mb-10">Filter by category</h4>
            <div class="category-tabs">
                ${categories.map(category => `<button class="${category===filterCategory?'active':''}" onclick="app.renderVerbs('${filterLetter}', '${category}')">${category}</button>`).join('')}
            </div>
            <h4 class="mb-10">Filter by letter</h4>
            <div class="alphabet-filter">
                ${letters.map(letter => `<button class="${letter===filterLetter?'active':''}" onclick="app.renderVerbs('${letter}', '${filterCategory}')">${letter}</button>`).join('')}
            </div>
            <input type="text" id="search-verbs" placeholder="Search verbs in V1, V2, V3, meaning, or category..." oninput="app.filterVerbs()">
            <p class="vocab-result-count mb-10" id="verbs-result-count"></p>
            <div class="grid-3" id="verbs-container"></div>
        `;
        this.contentDiv.innerHTML = html;
        this.filterVerbs();
    },
    filterVerbs() {
        let query = document.getElementById('search-verbs').value.toLowerCase();
        let { letter, category } = this.verbFilters;
        let filtered = verbsData.filter(v =>
            (letter === 'All' || v.letter === letter) &&
            (category === 'All' || v.category === category) &&
            (v.v1.toLowerCase().includes(query) || v.v2.toLowerCase().includes(query) || v.v3.toLowerCase().includes(query) || v.id.toLowerCase().includes(query) || v.category.toLowerCase().includes(query))
        );

        document.getElementById('verbs-result-count').innerText = `${filtered.length} verbs`;
        document.getElementById('verbs-container').innerHTML = filtered.map(v => {
            let isFav = this.userData.favVerbs.includes(v.v1);
            return `
            <div class="cheatsheet-card">
                <button class="fav-btn ${isFav?'active':''}" onclick="app.toggleFav('Verbs', '${v.v1}', this)">${isFav?'★':'☆'}</button>
                <div class="category-label">${v.category}</div>
                <div class="cheatsheet-v-tags"><span class="v-tag">V1: ${v.v1}</span><span class="v-tag">V2: ${v.v2}</span><span class="v-tag">V3: ${v.v3}</span></div>
                <div class="cheatsheet-meaning" style="margin-top:10px;">Meaning: ${v.id}</div>
                <div class="cheatsheet-example">"${v.example}"</div>
                <div class="listen-actions">
                    <button class="btn btn-outline" onclick="speakText('${escapeForOnClick(v.v1)}')">&#128266; V1</button>
                    <button class="btn btn-outline" onclick="speakText('${escapeForOnClick(v.v2)}')">&#128266; V2</button>
                    <button class="btn btn-outline" onclick="speakText('${escapeForOnClick(v.v3)}')">&#128266; V3</button>
                    <button class="btn btn-outline" onclick="speakText('${escapeForOnClick(v.example)}')">&#128266; Example</button>
                </div>
            </div>`;
        }).join('') || '<div class="card text-center">No verbs found. Try another filter or keyword.</div>';
    },

    toggleFav(type, key, btnEl) {
        let listName = 'fav' + type;
        let list = this.userData[listName];
        let idx = list.indexOf(key);
        if(idx > -1) { list.splice(idx, 1); btnEl.classList.remove('active'); btnEl.innerText = '☆'; } 
        else { list.push(key); btnEl.classList.add('active'); btnEl.innerText = '★'; }
        this.saveProgress();
    },

    renderReviewPage() {
        let revItems = this.userData.reviewAgain || [];
        let html = `
            <div class="section-title">Mastery Review</div>
            <div class="card text-center" style="background: #f0fdfa; border-color: #5eead4;">
                <h3>Need to Review</h3>
                <p class="mb-10">You have ${revItems.length} items marked for review.</p>
                <button class="btn btn-primary" ${revItems.length===0?'disabled':''} onclick="app.startGlobalReview()">Practice Review Items</button>
                <button class="btn btn-outline" ${revItems.length===0?'disabled':''} onclick="app.showClearReviewUI()">Clear List</button>
            </div>
            
            <!-- Custom Modal / UI to replace confirm() -->
            <div id="clear-confirm-ui" class="hidden msg-box" style="border-left-color:var(--danger); background:#fef2f2;">
                <h4 style="color:var(--danger); margin-bottom:10px;">Are you sure you want to clear the review list?</h4>
                <div class="flex gap-10">
                    <button class="btn btn-danger" onclick="app.executeClearReview()">Yes, Clear It</button>
                    <button class="btn btn-outline" onclick="document.getElementById('clear-confirm-ui').classList.add('hidden')">Cancel</button>
                </div>
            </div>

            <div id="global-recall-area" class="card hidden"></div>
            <div class="card">
                <h3>Learned from 90 Days</h3>
                <div class="grid-2 mt-10">`;

        curriculum.forEach(d => {
            if(this.userData.progress[d.day] === 'done' && (d.type === 'normal' || d.type === 'mixed')) {
                html += `<div style="border-bottom: 1px solid var(--border); padding-bottom: 10px;">
                    <strong style="color: var(--primary);">Day ${d.day}: ${d.topic}</strong>
                    <ul class="vocab-list" style="margin-top: 5px;">${[...d.phrases, ...d.vocabulary].map(item => `<li><span class="en-text" style="font-size:0.95rem;">${item.en}</span><span class="id-text" style="font-size:0.85rem;">${item.id}</span></li>`).join('')}</ul>
                </div>`;
            }
        });
        html += `</div></div>`;
        this.contentDiv.innerHTML = html;
    },
    showClearReviewUI() { document.getElementById('clear-confirm-ui').classList.remove('hidden'); },
    executeClearReview() { this.userData.reviewAgain = []; this.saveProgress(); this.renderReviewPage(); },

    startGlobalReview() {
        document.getElementById('global-recall-area').classList.remove('hidden');
        this.recallState.items = [...this.userData.reviewAgain].sort(() => 0.5 - Math.random());
        this.recallState.index = 0;
        
        this.renderGlobalRecallItem = function() {
            let state = this.recallState;
            if(state.index >= state.items.length) {
                document.getElementById('global-recall-area').innerHTML = `<div style="color:var(--success); font-weight:bold;">Review Done!</div><button class="btn btn-outline mt-10" onclick="document.getElementById('global-recall-area').classList.add('hidden')">Close</button>`; return;
            }
            let item = state.items[state.index];
            document.getElementById('global-recall-area').innerHTML = `
                <div id="recall-hint">Indonesian: <strong>${item.id}</strong></div>
                <input type="text" id="recall-input" placeholder="Type English translation..." autocomplete="off">
                <button class="btn btn-primary mt-10" onclick="app.checkGlobalRecall()">Check Answer</button>
                <div id="recall-answer" style="display:none; color:var(--success); font-weight:bold; margin-top:10px;">Correct: ${item.en}</div>
                <div id="recall-actions" class="hidden flex gap-10 justify-center mt-10">
                    <button class="btn btn-success" onclick="app.nextGlobalRecall(true)">Memorized (Remove)</button>
                    <button class="btn btn-warning" onclick="app.nextGlobalRecall(false)">Still Hard (Keep)</button>
                </div>
            `;
        };
        this.renderGlobalRecallItem();
    },
    checkGlobalRecall() { document.getElementById('recall-answer').style.display = 'block'; document.getElementById('recall-actions').classList.remove('hidden'); },
    nextGlobalRecall(memorized) {
        let item = this.recallState.items[this.recallState.index];
        if(memorized) { this.userData.reviewAgain = this.userData.reviewAgain.filter(i => i.en !== item.en); this.saveProgress(); }
        this.recallState.index++; this.renderGlobalRecallItem();
    },

    renderProgressPage() {
        let completedDays = Object.values(this.userData.progress).filter(status => status === 'done').length;
        let pct = Math.round((completedDays / 90) * 100);
        let totSents = Object.values(this.userData.sentences).reduce((a, b) => a + b.length, 0);
        let totConvos = Object.values(this.userData.conversations).reduce((a, b) => a + b.length, 0);
        let presentPractices = this.userData.grammarPracticeCompleted.present.length;
        let pastPractices = this.userData.grammarPracticeCompleted.past.length;
        let grammarPractices = presentPractices + pastPractices;
        
        this.contentDiv.innerHTML = `
            <div class="section-title">My Progress</div>
            <div class="card text-center">
                <h2>${pct}% Completed Journey</h2>
                <div style="background:var(--border); height:20px; border-radius:10px; margin:15px 0; overflow:hidden;">
                    <div style="background:var(--success); height:100%; width:${pct}%;"></div>
                </div>
                <p class="text-muted">${completedDays} out of 90 days finished</p>
            </div>
            
            <h3 class="mt-20 mb-10">90-Day Challenge Stats</h3>
            <div class="grid-4">
                <div class="card text-center"><h1 style="color:var(--primary); font-size:2.5rem;">${totSents}</h1><p>Sentences</p></div>
                <div class="card text-center"><h1 style="color:var(--primary); font-size:2.5rem;">${totConvos}</h1><p>Conversations</p></div>
                <div class="card text-center"><h1 style="color:var(--warning); font-size:2.5rem;">${this.userData.reviewAgain.length}</h1><p>To Review</p></div>
                <div class="card text-center"><h1 style="color:var(--success); font-size:2.5rem;">${Object.keys(this.userData.tests).length}</h1><p>Tests Done</p></div>
            </div>

            <h3 class="mt-20 mb-10">Cheatsheet Favorites Stats</h3>
            <div class="grid-3">
                <div class="card text-center"><h1 style="color:#f59e0b; font-size:2.5rem;">${this.userData.favVocab.length}</h1><p>Total Favorite Vocabulary</p></div>
                <div class="card text-center"><h1 style="color:#f59e0b; font-size:2.5rem;">${this.userData.favVerbs.length}</h1><p>Total Favorite Verbs</p></div>
                <div class="card text-center"><h1 style="color:#f59e0b; font-size:2.5rem;">${this.userData.favChunks.length}</h1><p>Total Favorite Chunks</p></div>
            </div>

            <h3 class="mt-20 mb-10">Simple Grammar Stats</h3>
            <div class="grid-3">
                <div class="card text-center"><h1 style="color:var(--primary); font-size:2.5rem;">${grammarPractices}</h1><p>Grammar Practices Completed</p></div>
                <div class="card text-center"><h1 style="color:var(--primary); font-size:2.5rem;">${presentPractices}</h1><p>Simple Present Practice Completed</p></div>
                <div class="card text-center"><h1 style="color:var(--primary); font-size:2.5rem;">${pastPractices}</h1><p>Simple Past Practice Completed</p></div>
            </div>

            <h3 class="mt-20 mb-10">Speaking Scripts Stats</h3>
            <div class="grid-3">
                <div class="card text-center"><h1 style="color:var(--success); font-size:2.5rem;">${this.userData.speakingScripts.length}</h1><p>Total Speaking Scripts</p></div>
                <div class="card text-center"><h1 style="color:var(--success); font-size:2.5rem;">${this.userData.stories.length}</h1><p>Stories Completed</p></div>
                <div class="card text-center"><h1 style="color:var(--success); font-size:2.5rem;">${this.userData.shadowingSessionsCompleted}</h1><p>Shadowing Sessions Completed</p></div>
            </div>
        `;
    },

    // Simplified Test & Review renderer to fit space
    renderWeeklyReview() {
        const d = this.currentDayData;
        this.contentDiv.innerHTML = `
            <div class="card text-center" style="background:#eef2ff;"><h2 style="color:var(--primary);">Week ${d.week} Review</h2><p>Review this week's progress.</p></div>
            <div class="card"><h3>Weekly Reflection</h3><p>Summarize what you learned.</p>
                <textarea id="test-intro" class="mt-10" placeholder="Write reflection..."></textarea>
                <button class="btn btn-success mt-10" onclick="app.markDayDone()">Finish Weekly Review</button>
            </div>`;
    },
    renderMonthlyTest() {
        const d = this.currentDayData;
        this.contentDiv.innerHTML = `
            <div class="card text-center" style="background:#fff7ed; border-color:#fdba74;"><h2 style="color:#ea580c;">Month ${d.month} Test</h2><p>Answer the full scenario below.</p></div>
            <div class="card">
                <h3>Written Speaking Test</h3><p>Introduce yourself, describe your routine, and state your goals.</p>
                <textarea id="test-intro" class="mt-10" placeholder="Write full response..."></textarea>
                <button class="btn btn-success mt-10" onclick="app.markDayDone()">Submit Test</button>
            </div>`;
    }
};

window.onload = () => app.init();
