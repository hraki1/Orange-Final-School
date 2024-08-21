const englishBadWords = [
  // Arabic bad words
  "كلب", // Kalb (Dog)
  "منيك", // Kalb (Dog)
  "كس", // Kalb (Dog)
  "زب", // Kalb (Dog)
  "حمار", // Himar (Donkey)
  "حمارة", // Himara (Donkey - female)
  "تيس", // Tays (Goat)
  "بغل", // Baghl (Mule)
  "قرد", // Qird (Monkey)
  "حيوان", // Haywan (Animal)
  "قحبة", // Qahba (Whore)
  "عاهرة", // Aahira (Prostitute)
  "زاني", // Zani (Adulterer)
  "زانية", // Zania (Adulteress)
  "مومس", // Moomis (Prostitute)
  "زانيه", // Zaniah (Prostitute - alternative spelling)
  "عربيد", // Arbeed (Scoundrel)
  "نذل", // Nadhil (Scoundrel)
  "غبي", // Ghabi (Stupid)
  "معتوه", // Ma'tooh (Idiot)
  "مغفل", // Mughaffal (Fool)
  "أحمق", // Ahmaq (Fool)
  "سخيف", // Sakhif (Silly)
  "تافه", // Tafeh (Trivial)
  "سافل", // Safil (Vulgar)
  "حقير", // Haqeer (Despicable)
  "خسيس", // Khasees (Mean)
  "داعر", // Da'er (Licentious)
  "لعين", // La'een (Cursed)
  "نذل", // Nazil (Villain)
  "ملعون", // Mal'oon (Damned)
  "ابن الكلب", // Ibn al-Kalb (Son of a dog)
  "ابن الحرام", // Ibn al-Haram (Bastard)
  "ابن الزنا", // Ibn al-Zina (Child of Adultery)
  "كافر", // Kafir (Infidel)
  "خنزير", // Khanzeer (Pig)
  "خنزيرة", // Khanzeera (Pig - female)
  "جرذ", // Jirath (Rat)
  "نمام", // Namam (Backbiter)
  "سارق", // Sariq (Thief)
  "لص", // Liss (Thief)
  "منافق", // Munafiq (Hypocrite)
  "ملحد", // Mulhid (Atheist)
  "حاقد", // Haqed (Spiteful)
  "مخنث", // Mukhannath (Effeminate)
  "جبان", // Jaban (Coward)
  "فاشل", // Fashil (Failure)
  "مذنب", // Mudhnib (Sinner)
  "زنديق", // Zindiq (Heretic)
  "مجرم", // Mujrim (Criminal)
  "وضيع", // Wadheea (Lowly)
  "خنيث", // Khaneeth (Eunuch)
  "ساقط", // Saqit (Fallen)
  "مستحقر", // Mustahqir (Despised)
  "عار", // Aar (Shame)
  "نذل", // Nadheel (Wretched)
  "شرموطة", // Sharmoota (Slut)
  "منحرف", // Munharif (Perverted)
  "متسلق", // Mutsaliq (Opportunist)
  "جرو", // Jaroo (Puppy)
  "عفريت", // Ifreet (Demon)
  "فاسق", // Faseq (Debauched)
  "زاني", // Zanee (Adulterer)
  "فاسق", // Faseq (Corrupt)
  "وضيع", // Wadheea (Despised)
  "محتال", // Mukhtal (Fraud)
  "مذل", // Madheel (Humiliator)
  "سفاح", // Saffaah (Bloodshedder)
  "خائب", // Kha'ib (Failure)
  "مستغل", // Mustaghil (Exploiter)
  "طائش", // Ta'ish (Reckless)
  "مجنون", // Majnoon (Crazy)
  "مهمل", // Muhmal (Negligent)
  "مفسد", // Mufsid (Corruptor)
  "حقير", // Haqeer (Vile)
  "شاذ", // Shaz (Pervert)
  "مقرف", // Muqrif (Disgusting)
  "مقزز", // Muqazziz (Repulsive)
  "عاق", // Aaq (Disobedient)
  "مهزوم", // Mahzoom (Defeated)
  "مفتري", // Muftari (Fabricator)
  "محتقر", // Muhtaqir (Despised)
  "حقير", // Haqeer (Despicable)
  "متواطئ", // Mutawati (Conspirator)
  "غشاش", // Ghishash (Cheat)
  "مفلس", // Muflis (Bankrupt)
  "ذليل", // Dhaleel (Humiliated)
  "مغتصب", // Mughtasib (Rapist)
  "مدنس", // Mudannas (Defiler)
  "منحوس", // Manhoos (Unlucky)
  "محروق", // Mahrooq (Burnt)
  "قواد", // Qawwād (Pimp)
  "قحبة", // Qaḥbah (Prostitute)
  "سحق", // Suḥuq (Lesbian)
  "مخنث", // Mukhannath (Effeminate)
  "قذر", // Qadhir (Dirty)
  "نتن", // Natin (Foul-smelling)
  "وضيع", // Waḍiʻ (Despicable)
  "قذر", // Qadhir (Dirty)
  "غدّار", // Ghaddār (Treacherous)
  "مستغل", // Mustaghill (Exploiter)
  "غدار", // Ghadar (Treacherous)
  "محرض", // Muḥarrid (Instigator)
  "مهمل", // Muhmal (Negligent)
  "حاقد", // Ḥāqid (Spiteful)
  "فاسق", // Fāsiq (Debauched)
  "منبوذ", // Manbūdh (Outcast)
  "منكوح", // Mankūḥ (Sodomized)
  "شرير", // Sharrīr (Evil)
  "مستهتر", // Mustahṭir (Irresponsible)
  "طاغية", // Ṭāghiyah (Tyrant)
  "لص", // Liṣṣ (Thief)
  "قاتل", // Qātil (Killer)
  "مختل", // Mukhtal (Psychopath)
  "محتال", // Muḥtāl (Fraud)
  "نمام", // Nammām (Gossiper)
  "ضال", // Ḍāl (Misguided)
  "شرموطة", // Sharmūṭah (Slut)
  "ملعون", // Malʻūn (Cursed)
  "معفن", // Muʻaffan (Rotten)
  "منيك", // Muʻaffan (Rotten)
  "غبي", // Ghabī (Stupid)
  "كافر", // Kāfir (Infidel)
  "خائن", // Khāʼin (Traitor)
  "مأفون", // Maʼfūn (Idiot)
  "قذر", // Qadhir (Dirty)
  "متكبر", // Mutakabbir (Arrogant)
  "مذموم", // Madhmūm (Blameworthy)
  "مسكين", // Miskīn (Poor)
  "فقير", // Faqīr (Poor)
  "أبله", // Ablaḥ (Foolish)
  "جاهل", // Jāhil (Ignorant)
  "مجنون", // Majnūn (Insane)
  "ضعيف", // Ḍaʻīf (Weak)
  "ass",
  "asshole",
  "bastard",
  "bitch",
  "bollocks",
  "bugger",
  "bullshit",
  "cocksucker",
  "crap",
  "cunt",
  "damn",
  "dick",
  "dickhead",
  "fag",
  "faggot",
  "fuck",
  "fucker",
  "fucking",
  "goddamn",
  "jerk",
  "motherfucker",
  "nigger",
  "nigga",
  "prick",
  "piss",
  "pussy",
  "shit",
  "shithead",
  "slut",
  "son of a bitch",
  "twat",
  "whore",
  "wanker",
  "wank",
  "arse",
  "arsehole",
  "bitchy",
  "bimbo",
  "blowjob",
  "bollocking",
  "bollock",
  "boner",
  "boob",
  "boobs",
  "bugger off",
  "bullshitter",
  "chink",
  "clit",
  "cock",
  "cockhead",
  "cocks",
  "coon",
  "crapper",
  "cum",
  "cumshot",
  "dammit",
  "dickbag",
  "dickface",
  "dildo",
  "douche",
  "douchebag",
  "dyke",
  "fagging",
  "faggots",
  "fanny",
  "fucked",
  "fucking hell",
  "fudgepacker",
  "ginger",
  "git",
  "gooch",
  "gook",
  "homo",
  "hooker",
  "jackass",
  "jerkoff",
  "kike",
  "knob",
  "knobhead",
  "lesbo",
  "masturbate",
  "minge",
  "minger",
  "muff",
  "niglet",
  "nonce",
  "pecker",
  "pikey",
  "piss off",
  "pissed",
  "pisser",
  "pissflaps",
  "poof",
  "poofter",
  "poon",
  "pricktease",
  "pube",
  "punani",
  "queef",
  "queer",
  "redskin",
  "rimjob",
  "scumbag",
  "skank",
  "slag",
  "spic",
  "spunk",
  "spunker",
  "tits",
  "titty",
  "tosser",
  "tranny",
  "turd",
  "twink",
  "wanker",
  "wetback",
  "whorebag",
  "whoreface",
  "wop",
  "bint",
  "buggered",
  "cumdumpster",
  "dong",
  "fuckface",
  "gash",
  "gaylord",
  "gimp",
  "knobend",
  "mingebag",
  "pansy",
  "shag",
  "shitfaced",
  "shithole",
  "skankbag",
  "slapper",
  "slutbag",
  "tosspot",
  "trollop",
  "twatface",
  "twats",
  "whoreson",
  "wog",
  "barf",
  "barfbag",
  "bastardize",
  "beaner",
  "bimbo",
  "blow",
  "blowjob",
  "boner",
  "brothel",
  "bullshit",
  "cocksman",
  "cocksucker",
  "cornhole",
  "cumdumpster",
  "dickhead",
  "douche",
  "dyke",
  "fart",
  "fartknocker",
  "fatass",
  "felcher",
  "flamer",
  "flog",
  "fornicate",
  "fudgepacker",
  "fudge packer",
  "gangbang",
  "goober",
  "harem",
  "ho",
  "honkie",
  "honky",
  "hooker",
  "hussy",
  "jizz",
  "kike",
  "lech",
  "lesbian",
  "lesbo",
  "lezzie",
  "lube",
  "muffdiver",
  "nambla",
  "niggerish",
  "niglet",
  "nympho",
  "orgy",
  "penis",
  "pimp",
  "pisshead",
  "poon",
  "poontang",
  "queer",
  "raghead",
  "rape",
  "rapist",
  "redneck",
  "retard",
  "rimjob",
  "sadist",
  "schlong",
  "scrote",
  "shag",
  "shitcunt",
  "shithead",
  "shitheel",
  "shithouse",
  "skank",
  "slag",
  "slut",
  "snatch",
  "sodomite",
  "spaz",
  "sperm",
  "sphincter",
  "spooge",
  "spunk",
  "taint",
  "thot",
  "tosser",
  "turd",
  "turd burglar",
  "twink",
  "twinkie",
  "twunt",
  "unclefucker",
  "vag",
  "vagina",
  "vulva",
  "wanker",
  "whore",
  "whoremonger",
  "wop",
  "yank",
  "yankee",
  "yobbo",
  "zipperhead",
];

export default englishBadWords;
