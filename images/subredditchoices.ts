/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export const subredditChoices: { label: string; name: string; value: string; }[] = [];


const subredditStrings = [
    "▀▄▀▄▀▄▀▄▀▄▀▄ 𝙂𝙄𝙁𝙎 ▄▀▄▀▄▄▀▄▀▄▀",
    "gifs",
    "behindthegifs",
    "gif",
    "Cinemagraphs",
    "WastedGifs",
    "educationalgifs",
    "perfectloops",
    "highqualitygifs",
    "gifsound",
    "combinedgifs",
    "retiredgif",
    "michaelbaygifs",
    "gifrecipes",
    "mechanical_gifs",
    "bettereveryloop",
    "gifextra",
    "slygifs",
    "gifsthatkeepongiving",
    "wholesomegifs",
    "noisygifs",
    "brokengifs",
    "loadingicon",
    "splitdepthgifs",
    "blackpeoplegifs",
    "whitepeoplegifs",
    "asianpeoplegifs",
    "scriptedasiangifs",
    "reactiongifs",
    "shittyreactiongifs",
    "chemicalreactiongifs",
    "▀▄▀▄▀▄▀▄▀▄▀▄ 𝙎𝘼𝙏𝙄𝙎𝙁𝙔𝙄𝙉𝙂 ▄▀▄▀▄▄▀▄▀▄▀",
    "photography",
    "itookapicture",
    "Filmmakers",
    "astrophotography",
    "analog",
    "photocritique",
    "postprocessing",
    "pics",
    "PhotoshopBattles",
    "perfecttiming",
    "Pareidolia",
    "ExpectationVSReality",
    "dogpictures",
    "misleadingthumbnails",
    "FifthWorldPics",
    "TheWayWeWere",
    "pic",
    "nocontextpics",
    "miniworlds",
    "foundpaper",
    "images",
    "screenshots",
    "mildlyinteresting",
    "interestingasfuck",
    "damnthatsinteresting",
    "beamazed",
    "reallifeshinies",
    "thatsinsane",
    "playitagainsam",
    "whatsthisbug",
    "whatsthisplant",
    "whatsthissnake",
    "Art",
    "redditgetsdrawn",
    "heavymind",
    "drawing",
    "graffiti",
    "retrofuturism",
    "sketchdaily",
    "pixelart",
    "artfundamentals",
    "learnart",
    "specart",
    "animation",
    "illustration",
    "streetart",
    "painting",
    "minipainting",
    "art",
    "Drawing",
    "crafts",
    "alternativeart",
    "artporn",
    "glitch_art",
    "coloringcorruptions",
    "restofthefuckingowl",
    "DisneyVacation",
    "dashcamgifs",
    "MilitaryPorn",
    "military",
    "combatfootage",
    "militarygfys",
    "army",
    "warshipporn",
    "guns",
    "gunporn",
    "EngineeringPorn",
    "gopro",
    "blender",
    "cableporn",
    "SpacePorn",
    "astronomy",
    "aliens",
    "rockets",
    "spacex",
    "nasa",
    "woodworking",
    "somethingimade",
    "architecture",
    "CoolGuides",
    "WorldBuilding",
    "redneckengineering",
    "CrappyDesign",
    "dataisbeautiful",
    "MapPorn",
    "woahdude",
    "frisson",
    "VaporwaveAesthetics",
    "glitchinthematrix",
    "marijuanaenthusiasts",
    "TreesSuckingOnThings",
    "natureismetal",
    "Natureisbrutal",
    "naturewasmetal",
    "AbandonedPorn",
    "OddlySatisfying",
    "RoomPorn",
    "nonononoyes",
    "minimalism",
    "CityPorn",
    "penmanshipporn",
    "ImaginaryLandscapes",
    "eyebleach",
    "DesignPorn",
    "perfectfit",
    "humansbeingbros",
    "powerwashingporn",
    "nevertellmetheodds",
    "typography",
    "cozyplaces",
    "breathinginformation",
    "desirepath",
    "tiltshift",
    "mostbeautiful",
    "raining",
    "AccidentalWesAnderson",
    "unstirredpaint",
    "handwriting",
    "thatpeelingfeeling",
    "gtage",
    "satisfyingasfuck",
    "EarthPorn",
    "BotanicalPorn",
    "WaterPorn",
    "SeaPorn",
    "SkyPorn",
    "FirePorn",
    "DesertPorn",
    "WinterPorn",
    "AutumnPorn",
    "WeatherPorn",
    "GeologyPorn",
    "BeachPorn",
    "MushroomPorn",
    "SpringPorn",
    "SummerPorn",
    "LavaPorn",
    "LakePorn",
    "VillagePorn",
    "RuralPorn",
    "ArchitecturePorn",
    "HousePorn",
    "CabinPorn",
    "ChurchPorn",
    "CemeteryPorn",
    "InfrastructurePorn",
    "MachinePorn",
    "CarPorn",
    "F1Porn",
    "MotorcyclePorn",
    "GunPorn",
    "KnifePorn",
    "BoatPorn",
    "RidesPorn",
    "DestructionPorn",
    "ThingsCutInHalfPorn",
    "StarshipPorn",
    "ToolPorn",
    "TechnologyPorn",
    "BridgePorn",
    "PolicePorn",
    "SteamPorn",
    "RetailPorn",
    "SpaceFlightPorn",
    "roadporn",
    "drydockporn",
    "AnimalPorn",
    "HumanPorn",
    "EarthlingPorn",
    "AdrenalinePorn",
    "ClimbingPorn",
    "SportsPorn",
    "AgriculturePorn",
    "TeaPorn",
    "BonsaiPorn",
    "FoodPorn",
    "CulinaryPorn",
    "DessertPorn",
    "AlbumArtPorn",
    "MetalPorn",
    "MoviePosterPorn",
    "TelevisionPosterPorn",
    "ComicBookPorn",
    "StreetArtPorn",
    "AdPorn",
    "ArtPorn",
    "FractalPorn",
    "InstrumentPorn",
    "ExposurePorn",
    "MacroPorn",
    "MicroPorn",
    "GeekPorn",
    "MTGPorn",
    "GamerPorn",
    "PowerWashingPorn",
    "AerialPorn",
    "OrganizationPorn",
    "FashionPorn",
    "AVPorn",
    "ApocalypsePorn",
    "InfraredPorn",
    "ViewPorn",
    "HellscapePorn",
    "sculptureporn",
    "HistoryPorn",
    "UniformPorn",
    "BookPorn",
    "NewsPorn",
    "QuotesPorn",
    "FuturePorn",
    "FossilPorn",
    "MegalithPorn",
    "ArtefactPorn",
    "▀▄▀▄▀▄▀▄▀▄▀▄ 𝑀𝐸𝑀𝐸𝒮 ▄▀▄▀▄▄▀▄▀▄▀",
    "fiftyfifty",
    "firstworldproblems",
    "idiotsfightingthings",
    "floridaman",
    "nottheonion",
    "lotrmemes",
    "historymemes",
    "contagiouslaughter",
    "ChildrenFallingOver",
    "dark_humor",
    "blackpeopletwitter",
    "scottishpeopletwitter",
    "WhitePeopleTwitter",
    "wholesomebpt",
    "latinopeopletwitter",
    "terriblefacebookmemes",
    "insanepeoplefacebook",
    "facepalm",
    "oldpeoplefacebook",
    "tiktokcringe",
    "crackheadcraigslist",
    "bannedfromclubpenguin",
    "snaplenses",
    "InternetIsBeautiful",
    "creepyPMs",
    "antijokes",
    "meanjokes",
    "3amjokes",
    "birdsarentreal",
    "cringepics",
    "cringe",
    "publicfreakout",
    "actualpublicfreakouts",
    "amibeingdetained",
    "engrish",
    "wokekids",
    "masterhacker",
    "cringetopia",
    "holup",
    "agedlikemilk",
    "woooosh",
    "badfaketexts",
    "boneappletea",
    "niceguys",
    "mallninjashit",
    "ChoosingBeggars",
    "gatekeeping",
    "creepyasterisks",
    "inceltears",
    "humblebrag",
    "nothowdrugswork",
    "whiteknighting",
    "neckbeardrpg",
    "virginsvschad",
    "nicegirls",
    "notliketheothergirls",
    "notlikeothergirls",
    "entitledbitch",
    "iamverysmart",
    "iamverybadass",
    "iamveryrandom",
    "shittyaskscience",
    "shittyfoodporn",
    "crappydesign",
    "Shitty_Car_Mods",
    "shittyadvice",
    "shittyrobots",
    "ShittyLifeProTips",
    "shittykickstarters",
    "shittyanimalfacts",
    "shitpost",
    "shittymoviedetails",
    "unexpected",
    "UnexpectedThugLife",
    "unexpectedjihad",
    "blackmagicfuckery",
    "unexpectedhogwarts",
    "UnexpectedMulaney",
    "ADHDmemes",
    "AlternateHistoryMemes",
    "AnimalMemes",
    "animememes",
    "Animemes",
    "Antimoneymemes",
    "anxietymemes",
    "astrologymemes",
    "autismmemes",
    "baldursgatememes",
    "Bandmemes",
    "BeelcitosMemes",
    "bestconspiracymemes",
    "blendermemes",
    "bloxymemes",
    "bollywoodmemes",
    "BPDmemes",
    "BrexitMemes",
    "ByzantineMemes",
    "Catmemes",
    "cfbmemes",
    "chemistrymemes",
    "chessmemes",
    "ClassConscienceMemes",
    "CloneWarsMemes",
    "CommunismMemes",
    "ConservativeMemes",
    "CoupleMemes",
    "cursed_videomemes",
    "cursedmemes",
    "czechmemes",
    "DankAndrastianMemes",
    "dankchristianmemes",
    "dankmemes",
    "DankMemes",
    "DankPrecolumbianMemes",
    "danktintinmemes",
    "Darkhumourmemes",
    "darkwingsdankmemes",
    "depression_memes",
    "depressionmemes",
    "desimemes",
    "DesiVideoMemes",
    "DestinyMemes",
    "deutschememes",
    "DHHMemes",
    "Discordmemes",
    "distressingmemes",
    "dunememes",
    "Eggy_memes",
    "EldenRingMemes",
    "feedthememes",
    "Funnymemes",
    "furrymemes",
    "gamingmemes",
    "GarlicBreadMemes",
    "Godzillamemes",
    "GoodGoodMemes",
    "GreatBritishMemes",
    "HandOfMemes",
    "Helluvabossmemes",
    "hermitcraftmemes",
    "HistoryAnimemes",
    "hockeymemes",
    "HollowKnightMemes",
    "HorribleHistoryMemes",
    "IndianDankMemes",
    "introvertmemes",
    "ISR_historymemes",
    "JoJoMemes",
    "JurassicMemes",
    "KamenRiderMemes",
    "KOTORmemes",
    "KSPMemes",
    "LeagueOfMemes",
    "lgbtmemes",
    "linuxmemes",
    "LowQualityMemes",
    "MartialMemes",
    "marvelmemes",
    "Marxism_Memes",
    "MassEffectMemes",
    "mathmemes",
    "mbtimemes",
    "MetalMemes",
    "MexicanMemes",
    "MGRmemes",
    "MinecraftMemes",
    "mmamemes",
    "MoldyMemes",
    "MyLittleMemes",
    "mythologymemes",
    "narutomemes",
    "NederlandseMemes",
    "networkingmemes",
    "NewVegasMemes",
    "NintendoMemes",
    "Nordichistorymemes",
    "nukedmemes",
    "OCDmemes",
    "Omorimemes",
    "OshiNoKoMemes",
    "OTMemes",
    "Overwatch_Memes",
    "pathfindermemes",
    "pelotonmemes",
    "PercyJacksonMemes",
    "PhilosophyMemes",
    "physicsmemes",
    "pokememes",
    "pokemonmemes",
    "PoliticalCompassMemes",
    "PoliticalMemes",
    "PolitiekeMemes",
    "PrehistoricMemes",
    "PrequelMemes",
    "ProgrammerAnimemes",
    "PunkMemes",
    "raimimemes",
    "RelationshipMemes",
    "romemes",
    "RoughRomanMemes",
    "sciencememes",
    "SCPMemes",
    "SequelMemes",
    "Silmarillionmemes",
    "SkyrimMemes",
    "surrealmemes",
    "tf2memes",
    "wholesomememes",
    "▀▄▀▄▀▄▀▄▀▄▀▄ 𝙒𝙏𝙁 ▄▀▄▀▄▄▀▄▀▄▀",
    "yiffinhell",
    "mildlyinfuriating",
    "rage",
    "Bad_Cop_No_Donut",
    "gifsthatendtoosoon",
    "peoplebeingjerks",
    "casualchildabuse",
    "fuckthesepeople",
    "makemesuffer",
    "cursedimages",
    "cursedcomments",
    "tihi",
    "blursedimages",
    "cursed_images",
    "imgoingtohellforthis",
    "toosoon",
    "trashy",
    "awfuleyebrows",
    "awfuleverything",
    "13or30",
    "ghettoglamourshots",
    "peopleofwalmart",
    "hittablefaces",
    "punchablefaces",
    "botchedsurgeries",
    "subwaycreatures",
    "lastimages",
    "ghosts",
    "ANormalDayInRussia",
    "▀▄▀▄▀▄▀▄▀▄▀▄ 𝓒𝓤𝑇𝓔 ▄▀▄▀▄▄▀▄▀▄▀",
    "aww",
    "cats",
    "animalsbeingjerks",
    "animalsbeingbros",
    "Awwducational",
    "dogs",
    "corgi",
    "thisismylifenow",
    "blep",
    "eyebeach",
    "tippytaps",
    "awww",
    "babycorgis",
    "AnimalsBeingDerps",
    "likeus",
    "stoppedworking",
    "hitmanimals",
    "animaltextgifs",
    "BeforeNAfterAdoption",
    "sneks",
    "TsundereSharks",
    "HybridAnimals",
    "zoomies",
    "brushybrushy",
    "bigboye",
    "curledfeetsies",
    "mlem",
    "Floof",
    "animalsthatlovemagic",
    "spiderbro",
    "properanimalnames",
    "reverseanimalrescue",
    "animalsdoingstuff",
    "birbs",
    "partyparrot",
    "birdsbeingdicks",
    "emuwarflashbacks",
    "babyelephantgifs",
    "sloths",
    "foxes",
    "trashpandas",
    "happycowgifs",
    "rabbits",
    "goatparkour",
    "bearsdoinghumanthings",
    "startledcats",
    "catpictures",
    "catsstandingup",
    "catpranks",
    "meow_irl",
    "holdmycatnip",
    "catslaps",
    "thecatdimension",
    "babybigcatgifs",
    "catloaf",
    "thisismylifemeow",
    "cattaps",
    "teefies",
    "tuckedinkitties",
    "catsareassholes",
    "catsisuottatfo",
    "stuffoncats",
    "bigcatgifs",
    "jellybeantoes",
    "catsareliquid",
    "catgifs",
    "blackcats",
    "supermodelcats",
    "chonkers",
    "tightpussy",
    "catswithjobs",
    "catswhoyell",
    "whatswrongwithyourcat",
    "illegallysmolcats",
    "dogtraining",
    "woof_irl",
    "WhatsWrongWithYourDog",
    "dogberg",
    "dogswithjobs",
    "masterreturns",
    "barkour",
    "blop",
    "puppysmiles",
    "puppies",
    "petthedamndog",
    "Pitbulls",
    "goldenretrievers",
    "incorgnito"
];


subredditStrings.forEach(subreddit => {
    subredditChoices.push({
        label: subreddit,
        name: subreddit,
        value: subreddit
    });
});
