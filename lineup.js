const lineup = [
  {
    "id": "wed-1",
    "day": "Wednesday, June 3",
    "band": "Ouineta",
    "time": "17:45",
    "stage": "Parc del Fòrum",
    "description": "AI Summary: Local favorite bringing vibrant energy and genre-blending tracks to the stage."
  },
  {
    "id": "wed-2",
    "day": "Wednesday, June 3",
    "band": "Yard Act",
    "time": "18:55",
    "stage": "Parc del Fòrum",
    "description": "AI Summary: Celebrated for their spiky, spoken-word post-punk, critics praise their sharp social commentary and infectious groove."
  },
  {
    "id": "wed-3",
    "day": "Wednesday, June 3",
    "band": "Guitarricadelafuente",
    "time": "20:15",
    "stage": "Parc del Fòrum",
    "description": "AI Summary: A soulful Spanish artist praised for his raw, acoustic performances and deeply emotional songwriting."
  },
  {
    "id": "wed-4",
    "day": "Wednesday, June 3",
    "band": "Wet Leg",
    "time": "21:55",
    "stage": "Parc del Fòrum",
    "description": "AI Summary: Breakout indie rock duo known for deadpan lyrics and catchy, hook-laden anthems that charm reviewers universally."
  },
  {
    "id": "thu-1",
    "day": "Thursday, June 4",
    "band": "Mourn",
    "time": "18:00",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Acclaimed Catalan indie rock band known for their fierce, energetic punk-infused performances."
  },
  {
    "id": "thu-2",
    "day": "Thursday, June 4",
    "band": "Gara Durán",
    "time": "19:20",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Rising Spanish talent bringing poetic lyrics and captivating pop-folk melodies."
  },
  {
    "id": "thu-3",
    "day": "Thursday, June 4",
    "band": "Dani Dicostas",
    "time": "20:40",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Spanish pop artist recognized for her catchy, synth-driven indie pop and charismatic live presence."
  },
  {
    "id": "thu-4",
    "day": "Thursday, June 4",
    "band": "Cameron Winter",
    "time": "17:00",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: A compelling vocalist and songwriter, bringing intimate and melodic performances to the festival."
  },
  {
    "id": "thu-5",
    "day": "Thursday, June 4",
    "band": "Lucrecia Dalt",
    "time": "19:00",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: Experimental electronic artist whose avant-garde soundscapes are celebrated for their cinematic and eerie qualities."
  },
  {
    "id": "thu-6",
    "day": "Thursday, June 4",
    "band": "caroline",
    "time": "20:30",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: Eight-piece post-rock ensemble delivering sprawling, improvisational pieces praised for their organic complexity."
  },
  {
    "id": "thu-7",
    "day": "Thursday, June 4",
    "band": "Panda Bear",
    "time": "22:00",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: Animal Collective member delivering hypnotic, sample-heavy psychedelic pop. Reviews highlight his celestial vocal harmonies."
  },
  {
    "id": "thu-8",
    "day": "Thursday, June 4",
    "band": "Gisela João",
    "time": "17:15",
    "stage": "Cupra",
    "description": "AI Summary: One of Portugal's leading fado singers, delivering breathtakingly emotional and traditional vocal performances."
  },
  {
    "id": "thu-9",
    "day": "Thursday, June 4",
    "band": "Men I Trust",
    "time": "18:50",
    "stage": "Cupra",
    "description": "AI Summary: Beloved indie-pop trio. Critics praise their smooth, atmospheric grooves and incredibly soothing live presence."
  },
  {
    "id": "thu-10",
    "day": "Thursday, June 4",
    "band": "Oklou",
    "time": "20:50",
    "stage": "Cupra",
    "description": "AI Summary: French electronic producer and vocalist known for her ethereal, ambient pop and stunningly intricate sound design."
  },
  {
    "id": "thu-11",
    "day": "Thursday, June 4",
    "band": "Father John Misty",
    "time": "23:00",
    "stage": "Cupra",
    "description": "AI Summary: Acclaimed for his theatrical indie-folk and biting, satirical lyricism that critics often describe as brilliantly cynical."
  },
  {
    "id": "thu-12",
    "day": "Thursday, June 4",
    "band": "2hollis",
    "time": "01:35",
    "stage": "Cupra",
    "description": "AI Summary: Emerging underground artist blending hyperpop and aggressive electronic rap into a chaotic, high-energy live show."
  },
  {
    "id": "thu-13",
    "day": "Thursday, June 4",
    "band": "¥ØU$UK€ ¥UK1MAT$U",
    "time": "04:30",
    "stage": "Cupra",
    "description": "AI Summary: Legendary Japanese DJ known for unpredictable, wildly eclectic sets that mix everything from noise to club anthems."
  },
  {
    "id": "thu-14",
    "day": "Thursday, June 4",
    "band": "Aiko el Grupo",
    "time": "17:30",
    "stage": "Estrella Damm",
    "description": "AI Summary: High-energy Spanish punk-pop band praised for their incredibly fun, fast-paced, and sarcastic anthems."
  },
  {
    "id": "thu-15",
    "day": "Thursday, June 4",
    "band": "Ravyn Lenae",
    "time": "19:35",
    "stage": "Estrella Damm",
    "description": "AI Summary: R&B powerhouse. Reviewers consistently highlight her stunning vocal range and lush, neo-soul production."
  },
  {
    "id": "thu-61",
    "day": "Thursday, June 4",
    "band": "Massive Attack",
    "time": "22:05",
    "stage": "Estrella Damm",
    "description": "AI Summary: Trip-hop legends. Critics consistently hail their live shows as politically charged, visually stunning, and sonically massive."
  },
  {
    "id": "thu-16",
    "day": "Thursday, June 4",
    "band": "Bad Gyal",
    "time": "01:20",
    "stage": "Estrella Damm",
    "description": "AI Summary: A pioneer in the Spanish dancehall and reggaeton scene, praised for her high-energy performances and club-ready hits."
  },
  {
    "id": "thu-17",
    "day": "Thursday, June 4",
    "band": "Raly",
    "time": "18:00",
    "stage": "Occident",
    "description": "AI Summary: Exciting up-and-coming act bringing fresh rhythms and engaging stage presence."
  },
  {
    "id": "thu-18",
    "day": "Thursday, June 4",
    "band": "Geese",
    "time": "19:45",
    "stage": "Occident",
    "description": "AI Summary: Brooklyn post-punk band acclaimed for their unpredictable, sprawling, and fiercely energetic rock performances."
  },
  {
    "id": "thu-19",
    "day": "Thursday, June 4",
    "band": "Mac DeMarco",
    "time": "21:55",
    "stage": "Occident",
    "description": "AI Summary: The king of 'jangle-pop' and slacker rock, loved by fans and critics alike for his laid-back, goofy charm."
  },
  {
    "id": "thu-20",
    "day": "Thursday, June 4",
    "band": "TV Girl",
    "time": "00:30",
    "stage": "Occident",
    "description": "AI Summary: Indie pop favorites known for their sample-heavy, hypnotic grooves and sardonic lyrical themes."
  },
  {
    "id": "thu-21",
    "day": "Thursday, June 4",
    "band": "Overmono",
    "time": "03:00",
    "stage": "Occident",
    "description": "AI Summary: Electronic duo celebrated for their ecstatic UK bass and techno productions, earning rave reviews for their live sets."
  },
  {
    "id": "thu-22",
    "day": "Thursday, June 4",
    "band": "Sama Yax",
    "time": "18:00",
    "stage": "Plenitude",
    "description": "AI Summary: Dynamic DJ and producer known for weaving global rhythms and deep grooves into their sets."
  },
  {
    "id": "thu-23",
    "day": "Thursday, June 4",
    "band": "berlioz",
    "time": "19:00",
    "stage": "Plenitude",
    "description": "AI Summary: Rising electronic jazz artist whose smooth, lo-fi house beats have taken the internet by storm."
  },
  {
    "id": "thu-24",
    "day": "Thursday, June 4",
    "band": "Guedra Guedra",
    "time": "23:25",
    "stage": "Plenitude",
    "description": "AI Summary: Moroccan producer whose sets are an explosive celebration of North African rhythms and heavy club bass."
  },
  {
    "id": "thu-25",
    "day": "Thursday, June 4",
    "band": "Ahadadream",
    "time": "00:25",
    "stage": "Plenitude",
    "description": "AI Summary: UK club music heavyweight known for his infectious, drum-heavy DJ sets that guarantee a massive dancefloor."
  },
  {
    "id": "thu-26",
    "day": "Thursday, June 4",
    "band": "BAMBII",
    "time": "02:00",
    "stage": "Plenitude",
    "description": "AI Summary: Toronto DJ and producer praised for her exhilarating, genre-defying sets blending dancehall, jungle, and techno."
  },
  {
    "id": "thu-27",
    "day": "Thursday, June 4",
    "band": "Ben UFO",
    "time": "03:00",
    "stage": "Plenitude",
    "description": "AI Summary: Widely considered one of the best DJs in the world, renowned for his seamless, genre-spanning selections."
  },
  {
    "id": "thu-28",
    "day": "Thursday, June 4",
    "band": "Paus",
    "time": "17:15",
    "stage": "Port",
    "description": "AI Summary: Portuguese experimental rock band featuring two drum kits, known for their powerful, rhythmic live shows."
  },
  {
    "id": "thu-29",
    "day": "Thursday, June 4",
    "band": "The New Eves",
    "time": "18:55",
    "stage": "Port",
    "description": "AI Summary: UK folk-punk quartet praised for their raw, ritualistic, and deeply captivating performances."
  },
  {
    "id": "thu-30",
    "day": "Thursday, June 4",
    "band": "Agriculture",
    "time": "20:55",
    "stage": "Port",
    "description": "AI Summary: 'Ecstatic black metal' band from Los Angeles, celebrated for their intensely emotional and uplifting heavy music."
  },
  {
    "id": "thu-31",
    "day": "Thursday, June 4",
    "band": "Florence Road",
    "time": "23:00",
    "stage": "Port",
    "description": "AI Summary: A vibrant new artist bringing energetic hooks and undeniable indie charm."
  },
  {
    "id": "thu-32",
    "day": "Thursday, June 4",
    "band": "Melt-Banana",
    "time": "01:30",
    "stage": "Port",
    "description": "AI Summary: Legendary Japanese noise-rock duo. Their live shows are famously frenetic, ear-splittingly loud, and incredibly precise."
  },
  {
    "id": "thu-33",
    "day": "Thursday, June 4",
    "band": "VVV [Trippin'you]",
    "time": "03:40",
    "stage": "Port",
    "description": "AI Summary: Spanish neo-bakalao trio. Critics highlight their intense, dark, and highly energetic electronic punk shows."
  },
  {
    "id": "thu-34",
    "day": "Thursday, June 4",
    "band": "Muna Khaled",
    "time": "18:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: An intriguing electronic act delivering atmospheric and deeply textured soundscapes."
  },
  {
    "id": "thu-35",
    "day": "Thursday, June 4",
    "band": "Toumba live",
    "time": "19:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Jordanian producer weaving traditional Levantine sounds into forward-thinking club music."
  },
  {
    "id": "thu-36",
    "day": "Thursday, June 4",
    "band": "Bclip",
    "time": "20:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Experimental club producer mixing Latin rhythms with heavy, aggressive electronic beats."
  },
  {
    "id": "thu-37",
    "day": "Thursday, June 4",
    "band": "iza tkm",
    "time": "21:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Innovative DJ bringing a fresh perspective to the underground club scene."
  },
  {
    "id": "thu-38",
    "day": "Thursday, June 4",
    "band": "DJ Playero",
    "time": "22:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: A true pioneer of reggaeton, his sets are a masterclass in Latin dance music history and hype."
  },
  {
    "id": "thu-39",
    "day": "Thursday, June 4",
    "band": "xavisphone",
    "time": "23:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Emerging electronic act with a unique, internet-inspired sound."
  },
  {
    "id": "thu-40",
    "day": "Thursday, June 4",
    "band": "Proc Fiskal live",
    "time": "00:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Scottish producer known for his hyper-speed, incredibly intricate takes on grime and UK bass."
  },
  {
    "id": "thu-41",
    "day": "Thursday, June 4",
    "band": "Stein",
    "time": "01:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Delivering deep, resonant electronic grooves tailored for the late-night crowd."
  },
  {
    "id": "thu-42",
    "day": "Thursday, June 4",
    "band": "Rustie",
    "time": "02:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: A hugely influential figure in maximalist electronic music, returning to deliver his signature euphoric drops."
  },
  {
    "id": "thu-43",
    "day": "Thursday, June 4",
    "band": "Zohar",
    "time": "03:30",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Experimental DJ and producer known for dark, brooding, and bass-heavy selections."
  },
  {
    "id": "thu-44",
    "day": "Thursday, June 4",
    "band": "Mina Galán",
    "time": "05:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Bringing a blend of intense electronic rhythms and atmospheric textures to the stage."
  },
  {
    "id": "thu-45",
    "day": "Thursday, June 4",
    "band": "Blood Orange",
    "time": "18:20",
    "stage": "Revolut",
    "description": "AI Summary: Dev Hynes' acclaimed R&B project. Reviews praise his lush instrumentation and breathtakingly soulful performances."
  },
  {
    "id": "thu-46",
    "day": "Thursday, June 4",
    "band": "Alex G",
    "time": "20:50",
    "stage": "Revolut",
    "description": "AI Summary: Indie rock cult hero. Critics adore his eclectic, lo-fi songwriting and unpredictable, mesmerizing live shows."
  },
  {
    "id": "thu-47",
    "day": "Thursday, June 4",
    "band": "Doja Cat",
    "time": "23:30",
    "stage": "Revolut",
    "description": "AI Summary: Global pop/rap superstar. Her live performances are praised for their incredible choreography, stage design, and vocal talent."
  },
  {
    "id": "thu-48",
    "day": "Thursday, June 4",
    "band": "Hypnosis Therapy",
    "time": "16:30",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Exciting South Korean electronic/rap duo known for their futuristic, high-energy club anthems."
  },
  {
    "id": "thu-49",
    "day": "Thursday, June 4",
    "band": "Renaldo & Clara",
    "time": "18:05",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Catalan indie pop group celebrated for their delicate melodies and bittersweet songwriting."
  },
  {
    "id": "thu-50",
    "day": "Thursday, June 4",
    "band": "LaBlackie",
    "time": "19:55",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Rising Spanish rap artist known for her fierce flow, confident stage presence, and hard-hitting beats."
  },
  {
    "id": "thu-51",
    "day": "Thursday, June 4",
    "band": "Skullcrusher",
    "time": "21:55",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Ambient folk artist praised for her hauntingly beautiful vocals and deeply intimate songwriting."
  },
  {
    "id": "thu-52",
    "day": "Thursday, June 4",
    "band": "Rojuu",
    "time": "00:25",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Spanish emo-trap phenomenon with a massive cult following and wildly energetic, emotional live shows."
  },
  {
    "id": "thu-53",
    "day": "Thursday, June 4",
    "band": "Fcukers",
    "time": "02:40",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Rising NYC indie dance trio praised for their effortlessly cool, 90s-inspired house and pop fusion."
  },
  {
    "id": "thu-54",
    "day": "Thursday, June 4",
    "band": "Six Sex",
    "time": "04:35",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Argentinian reggaeton and club artist known for her unapologetic, hyper-energetic, and raunchy performances."
  },
  {
    "id": "thu-55",
    "day": "Thursday, June 4",
    "band": "Malibu",
    "time": "22:00",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: French ambient producer whose sets are described as breathtakingly beautiful, cinematic, and deeply emotional."
  },
  {
    "id": "thu-56",
    "day": "Thursday, June 4",
    "band": "Brìghde Chaimbeul",
    "time": "23:05",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Award-winning Scottish piper who creates hypnotic, drone-heavy ambient folk music."
  },
  {
    "id": "thu-57",
    "day": "Thursday, June 4",
    "band": "New York",
    "time": "00:10",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Captivating indie act bringing raw, energetic sounds reminiscent of the city's classic rock revival."
  },
  {
    "id": "thu-58",
    "day": "Thursday, June 4",
    "band": "neska",
    "time": "01:15",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Intriguing electronic act with a focus on immersive, rhythmic soundscapes."
  },
  {
    "id": "thu-59",
    "day": "Thursday, June 4",
    "band": "Oli XL Live",
    "time": "02:20",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Swedish producer known for his fragmented, fascinating, and highly original take on UK dance music."
  },
  {
    "id": "thu-60",
    "day": "Thursday, June 4",
    "band": "Anthony Naples",
    "time": "03:25",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Revered house music producer and DJ. His sets are a masterclass in deep, atmospheric grooves."
  },
  {
    "id": "fri-1",
    "day": "Friday, June 5",
    "band": "Bombificadas",
    "time": "18:00",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Local Spanish act delivering energetic, punk-infused pop."
  },
  {
    "id": "fri-2",
    "day": "Friday, June 5",
    "band": "Ouineta",
    "time": "19:20",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Local favorite bringing vibrant energy and genre-blending tracks to the stage."
  },
  {
    "id": "fri-3",
    "day": "Friday, June 5",
    "band": "Paco Te Quiero",
    "time": "20:40",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Fun, irreverent Spanish indie-pop band known for their highly entertaining live shows."
  },
  {
    "id": "fri-4",
    "day": "Friday, June 5",
    "band": "Dharmacide",
    "time": "22:00",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Madrid-based shoegaze and post-punk band delivering massive walls of reverb-drenched sound."
  },
  {
    "id": "fri-5",
    "day": "Friday, June 5",
    "band": "Annahstasia",
    "time": "16:30",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: Soulful folk singer-songwriter whose stunning vocal performances command absolute silence from the crowd."
  },
  {
    "id": "fri-6",
    "day": "Friday, June 5",
    "band": "mark william lewis",
    "time": "18:00",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: UK indie artist praised for his hushed, incredibly intimate, and poetic songwriting."
  },
  {
    "id": "fri-7",
    "day": "Friday, June 5",
    "band": "Einstürzende Neubauten",
    "time": "19:30",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: Industrial music pioneers. Their legendary live shows feature custom-built instruments and avant-garde intensity."
  },
  {
    "id": "fri-8",
    "day": "Friday, June 5",
    "band": "Merzbow",
    "time": "21:00",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: The godfather of Japanese noise music. A Merzbow live set is a famous test of endurance and sonic extremity."
  },
  {
    "id": "fri-9",
    "day": "Friday, June 5",
    "band": "Pavvla",
    "time": "17:15",
    "stage": "Cupra",
    "description": "AI Summary: Catalan indie-pop artist known for her dark, electronic-tinged folk and emotive vocals."
  },
  {
    "id": "fri-10",
    "day": "Friday, June 5",
    "band": "Buscabulla",
    "time": "18:50",
    "stage": "Cupra",
    "description": "AI Summary: Puerto Rican duo celebrated for their effortlessly cool, psychedelic Caribbean dream-pop."
  },
  {
    "id": "fri-11",
    "day": "Friday, June 5",
    "band": "Ralphie Choo",
    "time": "20:55",
    "stage": "Cupra",
    "description": "AI Summary: Genre-defying Spanish artist mixing flamenco, pop, and electronic music into critically acclaimed, chaotic live shows."
  },
  {
    "id": "fri-12",
    "day": "Friday, June 5",
    "band": "Amaarae",
    "time": "23:20",
    "stage": "Cupra",
    "description": "AI Summary: Afro-fusion star. Reviewers praise her whispering vocal style and incredibly slick, genre-bending pop anthems."
  },
  {
    "id": "fri-13",
    "day": "Friday, June 5",
    "band": "PinkPantheress",
    "time": "01:45",
    "stage": "Cupra",
    "description": "AI Summary: Breakout star known for her byte-sized, nostalgic UK garage and drum-n-bass pop tracks that dominate both TikTok and critical lists."
  },
  {
    "id": "fri-14",
    "day": "Friday, June 5",
    "band": "KI/KI",
    "time": "04:10",
    "stage": "Cupra",
    "description": "AI Summary: Dutch techno DJ whose high-BPM, trance-infused sets are legendary for their relentless, euphoric energy."
  },
  {
    "id": "fri-15",
    "day": "Friday, June 5",
    "band": "NewDad",
    "time": "17:40",
    "stage": "Estrella Damm",
    "description": "AI Summary: Irish indie rock band acclaimed for their moody, 90s-inspired alternative rock and shoegaze textures."
  },
  {
    "id": "fri-16",
    "day": "Friday, June 5",
    "band": "Ethel Cain",
    "time": "19:45",
    "stage": "Estrella Damm",
    "description": "AI Summary: Southern gothic indie rock praised for its cinematic storytelling, dark Americana aesthetic, and her hauntingly powerful vocals."
  },
  {
    "id": "fri-17",
    "day": "Friday, June 5",
    "band": "The Cure",
    "time": "22:15",
    "stage": "Estrella Damm",
    "description": "AI Summary: Goth-rock pioneers with a massive catalog. Reviews praise Robert Smith's enduring vocal prowess and their emotionally sweeping concerts."
  },
  {
    "id": "fri-18",
    "day": "Friday, June 5",
    "band": "Slowdive",
    "time": "18:15",
    "stage": "Revolut",
    "description": "AI Summary: Shoegaze titans whose ethereal, wall-of-sound live performances are often described as transcendent and deeply atmospheric."
  },
  {
    "id": "fri-19",
    "day": "Friday, June 5",
    "band": "Addison Rae",
    "time": "21:00",
    "stage": "Revolut",
    "description": "AI Summary: Pop artist who transitioned from viral fame to critical intrigue with her polished, self-aware alt-pop sound."
  },
  {
    "id": "fri-20",
    "day": "Friday, June 5",
    "band": "Skrillex",
    "time": "01:00",
    "stage": "Revolut",
    "description": "AI Summary: Electronic music visionary. His recent sets are praised for pushing genre boundaries and maintaining relentless crowd energy."
  },
  {
    "id": "fri-21",
    "day": "Friday, June 5",
    "band": "Somos la Herencia",
    "time": "18:00",
    "stage": "Occident",
    "description": "AI Summary: Madrid post-punk outfit blending darkwave synths with aggressive, atmospheric rock."
  },
  {
    "id": "fri-22",
    "day": "Friday, June 5",
    "band": "Rilo Kiley",
    "time": "19:50",
    "stage": "Occident",
    "description": "AI Summary: Beloved indie rock band. Fans adore Jenny Lewis's sharp lyrics and the band's emotionally resonant catalog."
  },
  {
    "id": "fri-23",
    "day": "Friday, June 5",
    "band": "Role Model",
    "time": "22:00",
    "stage": "Occident",
    "description": "AI Summary: Alt-pop singer praised for his charismatic stage presence, catchy hooks, and relatable lyricism."
  },
  {
    "id": "fri-24",
    "day": "Friday, June 5",
    "band": "Jade",
    "time": "00:30",
    "stage": "Occident",
    "description": "AI Summary: A highly anticipated solo performance bringing polished pop vocals and dynamic choreography."
  },
  {
    "id": "fri-25",
    "day": "Friday, June 5",
    "band": "Viagra Boys",
    "time": "02:55",
    "stage": "Occident",
    "description": "AI Summary: Swedish post-punk outfit acclaimed for their chaotic, satirical, and aggressively fun live energy."
  },
  {
    "id": "fri-26",
    "day": "Friday, June 5",
    "band": "Malena",
    "time": "18:00",
    "stage": "Plenitude",
    "description": "AI Summary: Up-and-coming DJ bringing a finely curated mix of electronic rhythms."
  },
  {
    "id": "fri-27",
    "day": "Friday, June 5",
    "band": "Powder",
    "time": "19:30",
    "stage": "Plenitude",
    "description": "AI Summary: Japanese DJ and producer known for incredibly subtle, hypnotic, and emotionally nuanced house sets."
  },
  {
    "id": "fri-28",
    "day": "Friday, June 5",
    "band": "Call Super",
    "time": "21:00",
    "stage": "Plenitude",
    "description": "AI Summary: Highly respected DJ praised for his technically flawless and endlessly surprising, genre-spanning mixes."
  },
  {
    "id": "fri-29",
    "day": "Friday, June 5",
    "band": "DJ Koolt",
    "time": "22:30",
    "stage": "Plenitude",
    "description": "AI Summary: Uruguayan underground legend. His vinyl-only sets are a masterclass in deep, rolling house and techno."
  },
  {
    "id": "fri-30",
    "day": "Friday, June 5",
    "band": "Roza Terenzi Live",
    "time": "00:00",
    "stage": "Plenitude",
    "description": "AI Summary: Australian producer delivering bouncy, retro-futuristic electro and breakbeat live sets."
  },
  {
    "id": "fri-31",
    "day": "Friday, June 5",
    "band": "Aurora Halal",
    "time": "01:00",
    "stage": "Plenitude",
    "description": "AI Summary: Brooklyn-based techno producer known for her deep, psychedelic, and intensely immersive live hardware sets."
  },
  {
    "id": "fri-32",
    "day": "Friday, June 5",
    "band": "Sama’ Abdulhadi",
    "time": "02:30",
    "stage": "Plenitude",
    "description": "AI Summary: Palestinian techno pioneer. Her DJ sets are famous worldwide for their massive, hard-hitting energy."
  },
  {
    "id": "fri-33",
    "day": "Friday, June 5",
    "band": "Las Petunias",
    "time": "17:20",
    "stage": "Port",
    "description": "AI Summary: Fun, energetic Spanish punk-pop trio with catchy melodies and relatable lyrics."
  },
  {
    "id": "fri-34",
    "day": "Friday, June 5",
    "band": "Ósserp",
    "time": "19:00",
    "stage": "Port",
    "description": "AI Summary: Brutal Catalan death metal/grindcore band. Their live shows are intense, aggressive, and highly technical."
  },
  {
    "id": "fri-35",
    "day": "Friday, June 5",
    "band": "Water From Your Eyes",
    "time": "21:00",
    "stage": "Port",
    "description": "AI Summary: Experimental pop duo praised for their deadpan delivery and brilliantly chaotic, unpredictable song structures."
  },
  {
    "id": "fri-36",
    "day": "Friday, June 5",
    "band": "Shlohmo",
    "time": "23:15",
    "stage": "Port",
    "description": "AI Summary: Influential electronic producer. His live shows blend dark, heavy bass with melancholic, guitar-driven textures."
  },
  {
    "id": "fri-37",
    "day": "Friday, June 5",
    "band": "Kylesa",
    "time": "01:35",
    "stage": "Port",
    "description": "AI Summary: Legendary sludge metal band returning to the stage, featuring dual drummers and massive, psychedelic riffs."
  },
  {
    "id": "fri-38",
    "day": "Friday, June 5",
    "band": "Tiyumii",
    "time": "18:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: A fresh electronic act setting the mood with deep, atmospheric beats."
  },
  {
    "id": "fri-39",
    "day": "Friday, June 5",
    "band": "Dj Khalipha",
    "time": "19:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Exciting DJ bringing a mix of global club sounds and high-energy rhythms."
  },
  {
    "id": "fri-40",
    "day": "Friday, June 5",
    "band": "GЯEG",
    "time": "20:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Mauritian DJ based in Paris, known for explosive sets blending dancehall, techno, and afro-club sounds."
  },
  {
    "id": "fri-41",
    "day": "Friday, June 5",
    "band": "The Avalanches DJ Set",
    "time": "21:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Legendary sample-plunderers. Their DJ sets are a joyous, unpredictable celebration of music history."
  },
  {
    "id": "fri-42",
    "day": "Friday, June 5",
    "band": "Loukeman",
    "time": "22:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Emerging electronic producer blending sample-heavy house with deep, emotional grooves."
  },
  {
    "id": "fri-43",
    "day": "Friday, June 5",
    "band": "Brutalismus 3000",
    "time": "23:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Berlin duo mixing gabber, techno, and punk into incredibly intense, sweaty, and viral live performances."
  },
  {
    "id": "fri-44",
    "day": "Friday, June 5",
    "band": "Brat Star DJ Set",
    "time": "00:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Versatile DJ known for chaotic, high-energy sets that jump from rap to hard techno seamlessly."
  },
  {
    "id": "fri-45",
    "day": "Friday, June 5",
    "band": "Hannah Diamond (DJ)",
    "time": "01:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: PC Music icon. Her DJ sets are a glittery, hyper-pop sugar rush filled with exclusive edits."
  },
  {
    "id": "fri-46",
    "day": "Friday, June 5",
    "band": "Hekt",
    "time": "02:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Delivering hard-hitting, fast-paced electronic sets for the late-night club crowd."
  },
  {
    "id": "fri-47",
    "day": "Friday, June 5",
    "band": "deBasement",
    "time": "02:45",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Underground collective bringing raw, uncompromising techno and bass music."
  },
  {
    "id": "fri-48",
    "day": "Friday, June 5",
    "band": "Debit",
    "time": "03:45",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Mexican-American producer acclaimed for blending indigenous instrumentation with experimental club music."
  },
  {
    "id": "fri-49",
    "day": "Friday, June 5",
    "band": "Dave P.",
    "time": "04:45",
    "stage": "Cupra Pulse",
    "description": "AI Summary: Making Time legend. His DJ sets are a masterclass in euphoric, futuristic electronic dance music."
  },
  {
    "id": "fri-50",
    "day": "Friday, June 5",
    "band": ".bd.",
    "time": "16:35",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Intriguing experimental artist pushing the boundaries of sonic texture."
  },
  {
    "id": "fri-51",
    "day": "Friday, June 5",
    "band": "Juicy Bae",
    "time": "18:05",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Spanish R&B and trap artist celebrated for her smooth vocals and commanding stage presence."
  },
  {
    "id": "fri-52",
    "day": "Friday, June 5",
    "band": "Texas Is The Reason",
    "time": "19:50",
    "stage": "Schwarzkopf",
    "description": "AI Summary: 90s emo legends. Their live shows are highly emotional, nostalgic, and incredibly cathartic."
  },
  {
    "id": "fri-53",
    "day": "Friday, June 5",
    "band": "Disobey",
    "time": "22:05",
    "stage": "Schwarzkopf",
    "description": "AI Summary: High-energy punk act bringing rebellious anthems and a wild mosh pit."
  },
  {
    "id": "fri-54",
    "day": "Friday, June 5",
    "band": "fakemink",
    "time": "00:25",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Exciting electronic producer delivering forward-thinking club edits."
  },
  {
    "id": "fri-55",
    "day": "Friday, June 5",
    "band": "Cara Delevingne",
    "time": "02:30",
    "stage": "Schwarzkopf",
    "description": "AI Summary: The model-turned-artist brings a highly anticipated, exclusive performance to the festival."
  },
  {
    "id": "fri-56",
    "day": "Friday, June 5",
    "band": "Underground Resistance",
    "time": "04:05",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Detroit techno royalty. Their live shows are politically charged, technically brilliant, and deeply soulful."
  },
  {
    "id": "fri-57",
    "day": "Friday, June 5",
    "band": "Joan La Barbara",
    "time": "22:00",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Avant-garde composer and vocalist. Her performances are celebrated for their breathtaking vocal techniques."
  },
  {
    "id": "fri-58",
    "day": "Friday, June 5",
    "band": "Matmos",
    "time": "22:50",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Experimental electronic duo famous for creating fascinating music out of incredibly unusual recorded samples."
  },
  {
    "id": "fri-59",
    "day": "Friday, June 5",
    "band": "Rashad Becker",
    "time": "23:40",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Mastering engineer and producer delivering complex, highly textured, and abstract electronic performances."
  },
  {
    "id": "fri-60",
    "day": "Friday, June 5",
    "band": "Mohammad Reza Mortazavi",
    "time": "00:45",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Iranian percussion master. His solo tombak performances are mind-bendingly complex and mesmerizing."
  },
  {
    "id": "fri-61",
    "day": "Friday, June 5",
    "band": "Marc Piñol",
    "time": "02:20",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Barcelona club legend. His DJ sets are vast, eclectic journeys through the finest house and techno."
  },
  {
    "id": "fri-62",
    "day": "Friday, June 5",
    "band": "Iglooghost",
    "time": "03:55",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: UK producer known for hyperactive, wildly complex electronic music paired with a rich, fantastical visual world."
  },
  {
    "id": "sat-1",
    "day": "Saturday, June 6",
    "band": "Amiga Date Cuenta",
    "time": "18:00",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Relatable, fun, and energetic Spanish indie pop."
  },
  {
    "id": "sat-2",
    "day": "Saturday, June 6",
    "band": "Perfecto Miserable",
    "time": "19:20",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Shoegaze and dream-pop act delivering nostalgic, reverb-heavy melodies."
  },
  {
    "id": "sat-3",
    "day": "Saturday, June 6",
    "band": "Corte!",
    "time": "20:40",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Sharp, punchy post-punk with aggressive basslines and biting lyrics."
  },
  {
    "id": "sat-4",
    "day": "Saturday, June 6",
    "band": "SVSTO",
    "time": "22:00",
    "stage": "Aperol Island of Joy",
    "description": "AI Summary: Blending electronic pop with indie sensibilities for a highly danceable set."
  },
  {
    "id": "sat-5",
    "day": "Saturday, June 6",
    "band": "These New Puritans",
    "time": "18:00",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: Acclaimed art-rock band. Critics praise their orchestral, highly ambitious, and dramatic live performances."
  },
  {
    "id": "sat-6",
    "day": "Saturday, June 6",
    "band": "Beverly Glenn-Copeland and Elizabeth Copeland",
    "time": "19:30",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: Legendary ambient folk artist. Reviews highlight the profound, tear-jerking spirituality of his live shows."
  },
  {
    "id": "sat-7",
    "day": "Saturday, June 6",
    "band": "Anna von Hausswolff",
    "time": "21:00",
    "stage": "Auditori Rockdelux",
    "description": "AI Summary: Swedish musician famous for playing massive church organs, creating terrifyingly beautiful, doom-laden music."
  },
  {
    "id": "sat-8",
    "day": "Saturday, June 6",
    "band": "Jimena Amarillo",
    "time": "17:10",
    "stage": "Cupra",
    "description": "AI Summary: Rising Spanish star praised for her deeply honest, romantic, and lo-fi pop-folk songwriting."
  },
  {
    "id": "sat-9",
    "day": "Saturday, June 6",
    "band": "Grace Ives",
    "time": "18:10",
    "stage": "Cupra",
    "description": "AI Summary: Brooklyn synth-pop artist. Critics love her punchy, infectious, and incredibly fun solo live performances."
  },
  {
    "id": "sat-10",
    "day": "Saturday, June 6",
    "band": "rusowsky",
    "time": "21:15",
    "stage": "Cupra",
    "description": "AI Summary: Key figure in the Spanish bedroom pop scene, blending classical training with lo-fi beats and autotune."
  },
  {
    "id": "sat-11",
    "day": "Saturday, June 6",
    "band": "Dijon",
    "time": "23:20",
    "stage": "Cupra",
    "description": "AI Summary: R&B/indie artist. Reviews constantly praise his incredibly raw, emotionally unhinged, and spontaneous live band performances."
  },
  {
    "id": "sat-12",
    "day": "Saturday, June 6",
    "band": "Knocked Loose",
    "time": "01:35",
    "stage": "Cupra",
    "description": "AI Summary: Rising act bringing a highly anticipated mix of rhythm, melody, and unique festival energy."
  },
  {
    "id": "sat-13",
    "day": "Saturday, June 6",
    "band": "Peggy Gou",
    "time": "04:15",
    "stage": "Cupra",
    "description": "AI Summary: Global DJ superstar blending house and techno with infectious pop sensibilities, praised for her impeccable crowd control."
  },
  {
    "id": "sat-14",
    "day": "Saturday, June 6",
    "band": "Big Thief",
    "time": "19:40",
    "stage": "Estrella Damm",
    "description": "AI Summary: Indie folk-rock darlings. Critics adore Adrianne Lenker's raw, poetic songwriting and the band's intense, emotive chemistry."
  },
  {
    "id": "sat-15",
    "day": "Saturday, June 6",
    "band": "My Bloody Valentine",
    "time": "22:05",
    "stage": "Estrella Damm",
    "description": "AI Summary: The absolute masters of shoegaze. Their live shows are famously, beautifully, and physically deafening."
  },
  {
    "id": "sat-16",
    "day": "Saturday, June 6",
    "band": "Gorillaz",
    "time": "01:15",
    "stage": "Estrella Damm",
    "description": "AI Summary: Damon Albarn's virtual band is renowned for their eclectic genre-hopping and visually spectacular, guest-heavy live shows."
  },
  {
    "id": "sat-17",
    "day": "Saturday, June 6",
    "band": "Bestia Bebé",
    "time": "17:50",
    "stage": "Occident",
    "description": "AI Summary: Argentine indie rock band known for their infectious melodies and stadium-ready rock anthems."
  },
  {
    "id": "sat-18",
    "day": "Saturday, June 6",
    "band": "Sudan Archives",
    "time": "19:00",
    "stage": "Occident",
    "description": "AI Summary: Singer and violinist whose live shows are celebrated for their incredible swagger, musicianship, and R&B grooves."
  },
  {
    "id": "sat-19",
    "day": "Saturday, June 6",
    "band": "Ashnikko",
    "time": "20:15",
    "stage": "Occident",
    "description": "AI Summary: Alt-pop rapper. Fans adore her visually wild, unapologetic, and fiercely empowering live shows."
  },
  {
    "id": "sat-20",
    "day": "Saturday, June 6",
    "band": "Marina",
    "time": "00:40",
    "stage": "Occident",
    "description": "AI Summary: Pop royalty. Her performances are praised for her operatic vocals and incredibly loyal, energetic fanbase."
  },
  {
    "id": "sat-21",
    "day": "Saturday, June 6",
    "band": "Kneecap",
    "time": "03:00",
    "stage": "Occident",
    "description": "AI Summary: Irish hip-hop trio. Critics highlight their wildly energetic, rebellious, and politically charged bilingual performances."
  },
  {
    "id": "sat-22",
    "day": "Saturday, June 6",
    "band": "M8NSE",
    "time": "18:00",
    "stage": "Plenitude",
    "description": "AI Summary: Fresh electronic act delivering deep, bass-heavy club rhythms."
  },
  {
    "id": "sat-23",
    "day": "Saturday, June 6",
    "band": "Florentino b2b dj g2g",
    "time": "19:30",
    "stage": "Plenitude",
    "description": "AI Summary: A massive back-to-back set guaranteed to deliver high-energy reggaeton, club edits, and heavy bass."
  },
  {
    "id": "sat-24",
    "day": "Saturday, June 6",
    "band": "Safety Trance Live AV",
    "time": "21:35",
    "stage": "Plenitude",
    "description": "AI Summary: High-BPM reggaeton and techno fusion, paired with intense and chaotic visual art."
  },
  {
    "id": "sat-25",
    "day": "Saturday, June 6",
    "band": "Lechuga Zafiro & Verraco: Hyperverbena",
    "time": "22:30",
    "stage": "Plenitude",
    "description": "AI Summary: A special collaboration mixing forward-thinking Latin club sounds with intricate electronic percussion."
  },
  {
    "id": "sat-26",
    "day": "Saturday, June 6",
    "band": "mobilegirl",
    "time": "23:45",
    "stage": "Plenitude",
    "description": "AI Summary: Berlin DJ known for her playful, hyper-energetic blends of R&B, techno, and global club music."
  },
  {
    "id": "sat-27",
    "day": "Saturday, June 6",
    "band": "Mechatok Live",
    "time": "01:15",
    "stage": "Plenitude",
    "description": "AI Summary: Swedish producer creating glossy, emotional, and hyper-melodic electronic pop and club music."
  },
  {
    "id": "sat-28",
    "day": "Saturday, June 6",
    "band": "u.r.trax Live",
    "time": "02:05",
    "stage": "Plenitude",
    "description": "AI Summary: Parisian techno prodigy delivering fast, trippy, and relentless live hardware sets."
  },
  {
    "id": "sat-29",
    "day": "Saturday, June 6",
    "band": "JASSS",
    "time": "02:55",
    "stage": "Plenitude",
    "description": "AI Summary: Acclaimed DJ and producer. Her sets are a masterclass in dark, industrial, and unpredictable techno."
  },
  {
    "id": "sat-30",
    "day": "Saturday, June 6",
    "band": "The Sophs",
    "time": "18:50",
    "stage": "Port",
    "description": "AI Summary: Charming indie rock with earworm melodies and a great live dynamic."
  },
  {
    "id": "sat-31",
    "day": "Saturday, June 6",
    "band": "Smerz",
    "time": "20:55",
    "stage": "Port",
    "description": "AI Summary: Norwegian duo blending R&B vocals with stark, minimal, and experimental electronic production."
  },
  {
    "id": "sat-32",
    "day": "Saturday, June 6",
    "band": "Lambrini Girls",
    "time": "23:10",
    "stage": "Port",
    "description": "AI Summary: Brighton punk band. Their live shows are famous for being fiercely political, chaotic, and incredibly fun."
  },
  {
    "id": "sat-33",
    "day": "Saturday, June 6",
    "band": "Femtanyl",
    "time": "01:30",
    "stage": "Port",
    "description": "AI Summary: Breakout hyperpop and breakcore artist. Expect incredibly fast, aggressive, and internet-poisoned energy."
  },
  {
    "id": "sat-34",
    "day": "Saturday, June 6",
    "band": "Ninajirachi",
    "time": "03:40",
    "stage": "Port",
    "description": "AI Summary: Australian producer delivering glossy, heavy, and meticulously sound-designed club pop."
  },
  {
    "id": "sat-35",
    "day": "Saturday, June 6",
    "band": "Curated by SONNY",
    "time": "18:00",
    "stage": "Cupra Pulse",
    "description": "AI Summary: A special stage takeover featuring hand-picked, cutting-edge electronic and club artists."
  },
  {
    "id": "sat-36",
    "day": "Saturday, June 6",
    "band": "Barry B",
    "time": "17:15",
    "stage": "Revolut",
    "description": "AI Summary: Rising Spanish artist blending indie rock with contemporary pop elements."
  },
  {
    "id": "sat-37",
    "day": "Saturday, June 6",
    "band": "Baxter Dury",
    "time": "18:30",
    "stage": "Revolut",
    "description": "AI Summary: Suave, spoken-word indie rock. Reviewers love his sleazy, charming, and highly theatrical stage persona."
  },
  {
    "id": "sat-38",
    "day": "Saturday, June 6",
    "band": "Little Simz",
    "time": "20:50",
    "stage": "Revolut",
    "description": "AI Summary: One of UK rap's brightest stars. Reviewers consistently award her perfect scores for her lyrical dexterity and grandiose live arrangements."
  },
  {
    "id": "sat-39",
    "day": "Saturday, June 6",
    "band": "The xx",
    "time": "23:40",
    "stage": "Revolut",
    "description": "AI Summary: Known for their intimate, minimalist indie-pop. Critics often highlight the palpable chemistry and emotional vulnerability in their performances."
  },
  {
    "id": "sat-40",
    "day": "Saturday, June 6",
    "band": "Ven’nus",
    "time": "16:35",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Catalan artist bringing soft, electronic-infused indie pop with a beautifully melancholic edge."
  },
  {
    "id": "sat-41",
    "day": "Saturday, June 6",
    "band": "Depresión Sonora",
    "time": "18:00",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Spanish post-punk. Fans resonate deeply with their danceable, gloomy anthems about modern life."
  },
  {
    "id": "sat-42",
    "day": "Saturday, June 6",
    "band": "Gelli Haha",
    "time": "19:45",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Quirky, unpredictable, and highly entertaining alternative pop."
  },
  {
    "id": "sat-52",
    "day": "Saturday, June 6",
    "band": "Touché Amoré",
    "time": "22:00",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Post-hardcore legends. Their live shows are famously passionate, emotionally devastating, and full of crowd-surfing."
  },
  {
    "id": "sat-43",
    "day": "Saturday, June 6",
    "band": "Joey Valence & Brae",
    "time": "00:25",
    "stage": "Schwarzkopf",
    "description": "AI Summary: High-energy rap duo heavily inspired by 90s boom-bap and the Beastie Boys. Incredibly fun live."
  },
  {
    "id": "sat-44",
    "day": "Saturday, June 6",
    "band": "Nick León Live",
    "time": "02:50",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Miami producer known for his massive global club hits. His live sets blend Latin percussion with deep techno."
  },
  {
    "id": "sat-45",
    "day": "Saturday, June 6",
    "band": "Ecco2k",
    "time": "04:35",
    "stage": "Schwarzkopf",
    "description": "AI Summary: Drain Gang member. His ethereal, experimental pop performances are highly stylized and fiercely beloved by fans."
  },
  {
    "id": "sat-46",
    "day": "Saturday, June 6",
    "band": "res_",
    "time": "22:00",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Delivering deep, cerebral techno for the dedicated warehouse crowd."
  },
  {
    "id": "sat-47",
    "day": "Saturday, June 6",
    "band": "DJ Marcelle",
    "time": "23:00",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Legendary Dutch DJ who plays with three turntables, mixing the most bizarre and chaotic records into a danceable set."
  },
  {
    "id": "sat-48",
    "day": "Saturday, June 6",
    "band": "Shackleton Live",
    "time": "00:30",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: UK bass pioneer. His live sets are dark, polyrhythmic, and intensely psychedelic tribal journeys."
  },
  {
    "id": "sat-49",
    "day": "Saturday, June 6",
    "band": "Beatrice M.",
    "time": "01:30",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Bringing deep, rolling basslines and intricate electronic textures."
  },
  {
    "id": "sat-50",
    "day": "Saturday, June 6",
    "band": "A Guy Called Gerald Live",
    "time": "03:00",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Acid house and jungle royalty. A masterclass in vintage, hardware-driven dance music."
  },
  {
    "id": "sat-51",
    "day": "Saturday, June 6",
    "band": "DJ Nobu",
    "time": "04:00",
    "stage": "The Levi's Warehouse",
    "description": "AI Summary: Japanese techno master. Reviewers revere his highly psychedelic, deeply hypnotic, and flawlessly mixed sets."
  },
  {
    "id": "sun-1",
    "day": "Sunday, June 7",
    "band": "Greta",
    "time": "15:00",
    "stage": "Parc del Fòrum",
    "description": "AI Summary: A fresh voice in indie pop, bringing smooth vocals and engaging stage presence."
  },
  {
    "id": "sun-2",
    "day": "Sunday, June 7",
    "band": "BLOND:ISH",
    "time": "16:30",
    "stage": "Parc del Fòrum",
    "description": "AI Summary: Tech-house superstar. Her sets are known for their positive energy, uplifting vocals, and massive festival drops."
  },
  {
    "id": "sun-3",
    "day": "Sunday, June 7",
    "band": "Joseph Capriati",
    "time": "18:00",
    "stage": "Parc del Fòrum",
    "description": "AI Summary: Italian techno giant. Famous for his marathon sets and driving, relentless big-room grooves."
  },
  {
    "id": "sun-4",
    "day": "Sunday, June 7",
    "band": "Carl Cox",
    "time": "20:00",
    "stage": "Parc del Fòrum",
    "description": "AI Summary: A true legend of house and techno. Critics and fans revere his unparalleled mixing skills and joyous stage presence."
  }
];
