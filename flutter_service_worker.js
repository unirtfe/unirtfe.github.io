'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a5cb14d72b0b43f352e2af4ac5c68687",
"index.html": "ba0557cb407603435446461cb02d179b",
"/": "ba0557cb407603435446461cb02d179b",
"main.dart.js": "b92d6864bcca27e5a02cd767d7f50333",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "fa5fca13191569c95a4f9a6d274dd408",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d67f68a6e92a5aa956068fabd3e6f4c",
"assets/AssetManifest.json": "2a0ad3b4c75410de4cd80ace00800b8e",
"assets/NOTICES": "d6c148bf8976dbd79fddf692105268e7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "0ef1335b20918859ab8f2d183e2ecb66",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "2a351f7eaacdb3a8a90d6589ae78e502",
"assets/fonts/MaterialIcons-Regular.otf": "9b25a00c30364d5c4bc58925ae2c6e1d",
"assets/assets/images/episodes/episode7/episode7_view1.png": "95dca413a3353f13042cb6dd12e8cfc0",
"assets/assets/images/episodes/episode7/episode7_view3.png": "f299b5b49e43e757b899c2b9492a690e",
"assets/assets/images/episodes/episode7/episode7_view2.png": "40658f500878d81753856f085fd67a3a",
"assets/assets/images/episodes/episode7/episode7_view6.png": "b18bdfe833742d6152e3f584a340da7f",
"assets/assets/images/episodes/episode7/episode7_view5.png": "ed697e4c4ba31461ba3933c6fb3297e3",
"assets/assets/images/episodes/episode7/episode7_view4.png": "f1c1528038acc2d276b8eafcf31d4ddf",
"assets/assets/images/episodes/episode14/episode14_view1.png": "fbdcf821ecd4e4bc47eeeab1863c16d8",
"assets/assets/images/episodes/episode14/episode14_view3.png": "995bdf0838d360fbacd3015cfe1940c0",
"assets/assets/images/episodes/episode14/episode14_view2.png": "db863df26337ac40435d4411826cd0b0",
"assets/assets/images/episodes/episode9/episode9_view2.png": "0240e2b4593cf4632ef21064c05358ff",
"assets/assets/images/episodes/episode9/episode9_view22.png": "b62eab9331ab29c62f9263127deea372",
"assets/assets/images/episodes/episode9/episode9_view36.png": "73c374fe4ae23e96d11c8f396189d2c2",
"assets/assets/images/episodes/episode9/episode9_view37.png": "d499a04aa0931a9fea2b88e5d7576416",
"assets/assets/images/episodes/episode9/episode9_view3.png": "ab48758b6ccee99052e3d6baa87d4dde",
"assets/assets/images/episodes/episode9/episode9_view23.png": "a5e5ce551ab5563b69d9529e5cef3356",
"assets/assets/images/episodes/episode9/episode9_view35.png": "2f762b19d8d1e5e882c1399b777878f1",
"assets/assets/images/episodes/episode9/episode9_view21.png": "9f33ca661da3a44c4fba053c6ee5799d",
"assets/assets/images/episodes/episode9/episode9_view1.png": "968e43fb20477ae9182851c1cb65668d",
"assets/assets/images/episodes/episode9/episode9_view20.png": "441bf75e06d00bd2a6166a337e396850",
"assets/assets/images/episodes/episode9/episode9_view34.png": "7a4596dce332c31848c604fe5339eab3",
"assets/assets/images/episodes/episode9/episode9_view30.png": "52907a4b3bc01c4fa33c2c68875d55fe",
"assets/assets/images/episodes/episode9/episode9_view4.png": "18a76c609542cb7b51a4a3cb17f3759e",
"assets/assets/images/episodes/episode9/episode9_view24.png": "fcad782e242c3dc28d802ba4fc13154d",
"assets/assets/images/episodes/episode9/episode9_view18.png": "ace612eb62e937569510b6bfad31721f",
"assets/assets/images/episodes/episode9/episode9_view19.png": "4062f2eecd222a5eb53cd826cf481f80",
"assets/assets/images/episodes/episode9/episode9_view5.png": "0e80583709ee6c7aeb9580017aa3acfb",
"assets/assets/images/episodes/episode9/episode9_view25.png": "715b20226ebe1690a1f95ff4a1674a37",
"assets/assets/images/episodes/episode9/episode9_view31.png": "288ab714aef28a14e96fb1b19fc3594c",
"assets/assets/images/episodes/episode9/episode9_view27.png": "9a4a9a34932ecf5b1931b4d507944c80",
"assets/assets/images/episodes/episode9/episode9_view7.png": "7df9decdfff8e2066aad05e79b4b2ce7",
"assets/assets/images/episodes/episode9/episode9_view33.png": "6cdf2fb052db3e82779c923b5421eca9",
"assets/assets/images/episodes/episode9/episode9_view32.png": "1f86bc2c45f96dd4d4284d5bca8255e1",
"assets/assets/images/episodes/episode9/episode9_view26.png": "71c087bfd8baa72c356c1cbbf476a311",
"assets/assets/images/episodes/episode9/episode9_view6.png": "30f64d7fa0146f1163862dca3360396e",
"assets/assets/images/episodes/episode9/episode9_view40.png": "89612888a0f900f49b2d97cac81c9241",
"assets/assets/images/episodes/episode9/episode9_view17.png": "d534da53c7f25d35918806880ddc0007",
"assets/assets/images/episodes/episode9/episode9_view16.png": "ecfebfe6f174722d0a5df78368da317d",
"assets/assets/images/episodes/episode9/episode9_view8.png": "8e9293cf960e6d4ba75f0a46c66c8350",
"assets/assets/images/episodes/episode9/episode9_view28.png": "78e7ced33d8f620b052ae96fce7b9be5",
"assets/assets/images/episodes/episode9/episode9_view14.png": "12d4e4e9ac2fae71798a4ce96edd73f1",
"assets/assets/images/episodes/episode9/episode9_view15.png": "c2c978ff696a2643f3cd55d77a029743",
"assets/assets/images/episodes/episode9/episode9_view9.png": "081e6f6bc40ebe3fa7542557d41e2571",
"assets/assets/images/episodes/episode9/episode9_view29.png": "e4de21b92f5d2d9eb8f0893e12b6acba",
"assets/assets/images/episodes/episode9/episode9_view11.png": "9383f0d84338f469f891f1a64f05586c",
"assets/assets/images/episodes/episode9/episode9_view39.png": "e63d9671da869679ce1dc8e859f5ccbc",
"assets/assets/images/episodes/episode9/episode9_view38.png": "deca1dcf14c9e719d6a5231f276b59ed",
"assets/assets/images/episodes/episode9/episode9_view10.png": "f855b1e67977c03714a4f7450a90b8f4",
"assets/assets/images/episodes/episode9/episode9_view12.png": "8bea116ab0ab20a3f45f15b20d1dd37d",
"assets/assets/images/episodes/episode9/episode9_view13.png": "82e7ba6fd890bed6bab962e8f1b6b0c7",
"assets/assets/images/episodes/episode13/episode13_view1.png": "e22f5fe31e91d869fa5fc5691e73a015",
"assets/assets/images/episodes/episode13/episode13_view2.png": "d16ddfb5cf129ad072500fb59c7f6f61",
"assets/assets/images/episodes/episode13/episode13_view3.png": "0d6100183ef9321ee468be53bc5cac7c",
"assets/assets/images/episodes/episode13/episode13_view4.png": "7df82bdfb2c545de867a18eaad005bb6",
"assets/assets/images/episodes/episode12/episode12_view1.png": "8c5a5d23fa5baad738f32795787c9ffd",
"assets/assets/images/episodes/episode12/episode12_view2.png": "5dcddcd86c52915e85372f6bfa757174",
"assets/assets/images/episodes/episode12/episode12_view3.png": "d78aaaf60a5c183b0238cb92fc5a8a3e",
"assets/assets/images/episodes/episode12/episode12_view7.png": "15e038fb8f7d943dccab758bd7dd8a65",
"assets/assets/images/episodes/episode12/episode12_view6.png": "214ab23f5d9da4bc99a78f6b8549e795",
"assets/assets/images/episodes/episode12/episode12_view4.png": "881e1f846312d9971b6902a884a6aa7b",
"assets/assets/images/episodes/episode12/episode12_view5.png": "321616b5f0169ed6b1cffdc26e7f5b53",
"assets/assets/images/episodes/episode12/episode12_view18.png": "211fb9126f1ed575abbfba86f6bfa08b",
"assets/assets/images/episodes/episode12/episode12_view19.png": "66e9adddf686ef1cd74f7ccd3de666e8",
"assets/assets/images/episodes/episode12/episode12_view20.png": "9428b5ff4538b714fce084e70717e0c3",
"assets/assets/images/episodes/episode12/episode12_view12.png": "5e96912a6960f2191b7c24afe9dc0fab",
"assets/assets/images/episodes/episode12/episode12_view13.png": "008df5221d08ce54e3a7d5527ad25ba3",
"assets/assets/images/episodes/episode12/episode12_view11.png": "80e43811dce6a1389f5996e183bf314a",
"assets/assets/images/episodes/episode12/episode12_view10.png": "d41752ce94aa4ee937ef9cd1e6e1df4b",
"assets/assets/images/episodes/episode12/episode12_view14.png": "e4d1c908322bcabf0815b6bcc8f3f797",
"assets/assets/images/episodes/episode12/episode12_view15.png": "56a76790d20035e62519dc003452bcc2",
"assets/assets/images/episodes/episode12/episode12_view17.png": "e32f2dcf4c821322b78b701cf379c199",
"assets/assets/images/episodes/episode12/episode12_view16.png": "4f997eb4bd43a707e41d8b96cf0ebc37",
"assets/assets/images/episodes/episode12/episode12_view8.png": "d3feab5b80a4dc7a445e9940fbe98ac2",
"assets/assets/images/episodes/episode12/episode12_view9.png": "710f75689a9b022a4e03e5ae5fa5657e",
"assets/assets/images/episodes/episode8/episode8_view2.png": "ee4d100959e0d096ad351850d1f44bab",
"assets/assets/images/episodes/episode8/episode8_view11.png": "ba3770805d925f22a5d4ecc85f8eb7c7",
"assets/assets/images/episodes/episode8/episode8_view10.png": "728d6bd717d86b00e8c398f6b350c01c",
"assets/assets/images/episodes/episode8/episode8_view3.png": "c2ff9050eb5c4edf1f10ce83f3fefb18",
"assets/assets/images/episodes/episode8/episode8_view12.png": "ae8724cf4f773ac34e4fb5ea7e3a8838",
"assets/assets/images/episodes/episode8/episode8_view1.png": "8b38d6bd419b2fe12b8ff3e8fa4a6286",
"assets/assets/images/episodes/episode8/episode8_view13.png": "fe5fe5e1058e2072a89704620e704a6a",
"assets/assets/images/episodes/episode8/episode8_view17.png": "971edd29459e8412957075a74ab17ace",
"assets/assets/images/episodes/episode8/episode8_view4.png": "c2d9d7d4f78c68443b38f6fd75caa201",
"assets/assets/images/episodes/episode8/episode8_view5.png": "87883d1fb3a9ba039dd3a5411e7af60a",
"assets/assets/images/episodes/episode8/episode8_view16.png": "4f150cd8fdc8eb2c0acfbd786c0fb53b",
"assets/assets/images/episodes/episode8/episode8_view7.png": "2c8d085d5e0c5ba545fed98ce5f74f5b",
"assets/assets/images/episodes/episode8/episode8_view14.png": "3faa86ff548e5421a3ecd0183e18a746",
"assets/assets/images/episodes/episode8/episode8_view15.png": "f8723e8ca0ccab40d00bd4ecd7426915",
"assets/assets/images/episodes/episode8/episode8_view6.png": "75b6c8e764ca7ae68e420367cce55991",
"assets/assets/images/episodes/episode8/episode8_view24.png": "57564ca5f6c6c28b151a71e7caf461da",
"assets/assets/images/episodes/episode8/episode8_view18.png": "50ab723530cd81651574bd4b7005fcdd",
"assets/assets/images/episodes/episode8/episode8_view19.png": "85ce90fae67aa2be84a476601184f3e5",
"assets/assets/images/episodes/episode8/episode8_view25.png": "ed643a485d6c964403c6841043ec68cd",
"assets/assets/images/episodes/episode8/episode8_view8.png": "91df85bf873bda30a5b4ccbc92e7c063",
"assets/assets/images/episodes/episode8/episode8_view9.png": "107b00f9c2353ef5ad531150635f7582",
"assets/assets/images/episodes/episode8/episode8_view22.png": "f31dc990794fe29de4399e7159ef4769",
"assets/assets/images/episodes/episode8/episode8_view23.png": "ab26926747133a9abae468f692a085cc",
"assets/assets/images/episodes/episode8/episode8_view21.png": "fa39dca2fe989df0089869d280ca4455",
"assets/assets/images/episodes/episode8/episode8_view20.png": "14a70a5f705a25e66530c98a541d06fb",
"assets/assets/images/episodes/episode6/episode6_view20.png": "46cb29e0a92083f3349c318f4b1a13a3",
"assets/assets/images/episodes/episode6/episode6_view9.png": "6856787863d16fd6d57be2464aea3400",
"assets/assets/images/episodes/episode6/episode6_view8.png": "722d185fdfbb950693f76c0b5dfcf377",
"assets/assets/images/episodes/episode6/episode6_view21.png": "1969a614374cbb32c8bb24c16833eb31",
"assets/assets/images/episodes/episode6/episode6_view23.png": "4acdebc25f31d5446686aacc8a26c6cf",
"assets/assets/images/episodes/episode6/episode6_view22.png": "06e4ffd3046fb5c988837142df994d4e",
"assets/assets/images/episodes/episode6/episode6_view19.png": "d5a19b4d837e5e2a261e9f41271eb4b8",
"assets/assets/images/episodes/episode6/episode6_view18.png": "b49fb24e6ce3759424cb381c7d3d4f96",
"assets/assets/images/episodes/episode6/episode6_view15.png": "f7687dec3634704801f8a503d6a1449b",
"assets/assets/images/episodes/episode6/episode6_view1.png": "e2a713b79359571e34b0cb5b5ad63783",
"assets/assets/images/episodes/episode6/episode6_view14.png": "0f9ee21b53b18cc64cd1a8bcaff063f9",
"assets/assets/images/episodes/episode6/episode6_view16.png": "afd26a937f03dd5cde694212ee8909b8",
"assets/assets/images/episodes/episode6/episode6_view3.png": "40727ae71e4b0b16bc57fbee0220e92b",
"assets/assets/images/episodes/episode6/episode6_view2.png": "c11ce560a500b42f3149921dacbe1354",
"assets/assets/images/episodes/episode6/episode6_view17.png": "2ff74dabe4b9db89aa7993195955d95f",
"assets/assets/images/episodes/episode6/episode6_view13.png": "150c0f05ef8042f05abe74ff536edd7a",
"assets/assets/images/episodes/episode6/episode6_view6.png": "a71a422509d4efed2383f798c9866f96",
"assets/assets/images/episodes/episode6/episode6_view7.png": "b56607a51b55f2ce1ec2e1a93944b8a8",
"assets/assets/images/episodes/episode6/episode6_view12.png": "31a93005bac4630b5b208179391a6041",
"assets/assets/images/episodes/episode6/episode6_view10.png": "1931adbf1c22f4ef29557e8e66aafde3",
"assets/assets/images/episodes/episode6/episode6_view5.png": "193e0aada86b6eecc3191edfa60f540d",
"assets/assets/images/episodes/episode6/episode6_view4.png": "05143269dfd2baf6b12fbe6583da093e",
"assets/assets/images/episodes/episode6/episode6_view11.png": "f09b03a9f9c828576cf2e313ad396bc8",
"assets/assets/images/episodes/episode1/episode1_view8.png": "d110a9a1a1fbd911afd788661f76b71f",
"assets/assets/images/episodes/episode1/episode1_view7.png": "b8718ba200f892a579a5cd17375080b3",
"assets/assets/images/episodes/episode1/episode1_view6.png": "91cbbbc28385720e382ec38a90f01e13",
"assets/assets/images/episodes/episode1/episode1_view4.png": "037f7336f037975741c68489857223ed",
"assets/assets/images/episodes/episode1/episode1_view5.png": "69ea0a5a8bf62e669ad11fa6b338fc78",
"assets/assets/images/episodes/episode1/episode1_view1.png": "8ceb9ffd08b0ad088648b0e18d5bada7",
"assets/assets/images/episodes/episode1/episode1_view2.png": "e222193877800645753fc04ad9b21c54",
"assets/assets/images/episodes/episode1/episode1_view3.png": "3e912360c3ed1395cefd87609f09827d",
"assets/assets/images/episodes/episode4/episode4_view1.png": "9905a30f3fc1e0d9e190b282f137647c",
"assets/assets/images/episodes/episode4/episode4_view21.png": "5a0bcbfc28f88ed9efb4caf7a7fdfd8f",
"assets/assets/images/episodes/episode4/episode4_view20.png": "e80055d6c2ded188a156ec4be08d83ce",
"assets/assets/images/episodes/episode4/episode4_view2.png": "29702fd6e693ac8e0a30550696739bd0",
"assets/assets/images/episodes/episode4/episode4_view22.png": "a0aae0fc9e7c0f00ab69c5bb063e3dac",
"assets/assets/images/episodes/episode4/episode4_view23.png": "161e270644d6eaebd5b06c65c48e80b5",
"assets/assets/images/episodes/episode4/episode4_view3.png": "bc78351e415263364122e5c91fb5eb3a",
"assets/assets/images/episodes/episode4/episode4_view7.png": "a2696472a7f748036513812cfc53de60",
"assets/assets/images/episodes/episode4/episode4_view6.png": "525694561bd06c1b7a08baa57b0b886c",
"assets/assets/images/episodes/episode4/episode4_view4.png": "4a3058dcb9804664c53c04249ef2a9d1",
"assets/assets/images/episodes/episode4/episode4_view24.png": "6ff29a8f7b2f529ee46f4b3fefb64ee0",
"assets/assets/images/episodes/episode4/episode4_view18.png": "a8211f7f32845c93442b7909ea5e2076",
"assets/assets/images/episodes/episode4/episode4_view19.png": "f8d68a4bb02c5dad3033e3782c7a73a3",
"assets/assets/images/episodes/episode4/episode4_view5.png": "f23dc10f30eb94efceb7472ab7cbf277",
"assets/assets/images/episodes/episode4/episode4_view8.png": "6f165239cc71a5461215b36041316a5a",
"assets/assets/images/episodes/episode4/episode4_view14.png": "7645ac725a185fb0ba1b2eac01da3a79",
"assets/assets/images/episodes/episode4/episode4_view15.png": "8417121e609ba8eefcdc77cbf1067141",
"assets/assets/images/episodes/episode4/episode4_view9.png": "915825d2e7506f0a69f224eb18ec8208",
"assets/assets/images/episodes/episode4/episode4_view17.png": "4813a4b94e9cce6a963576957a4008d9",
"assets/assets/images/episodes/episode4/episode4_view16.png": "57d66366b65ab1a05f3617a83467b483",
"assets/assets/images/episodes/episode4/episode4_view12.png": "b88f207240ce336e3cf64480ca6fb1ee",
"assets/assets/images/episodes/episode4/episode4_view13.png": "a2ce7ec2545378820a735a882b4d8041",
"assets/assets/images/episodes/episode4/episode4_view11.png": "a150346b35d580165ecdbf8b6db98da0",
"assets/assets/images/episodes/episode4/episode4_view10.png": "47f413516ab323cf8d623e8402cd2f5d",
"assets/assets/images/episodes/episode3/episode3_view6.png": "cbe876756a3471baf0811c26e8821623",
"assets/assets/images/episodes/episode3/episode3_view7.png": "0a470b956b293204a56cc04a9ac6af99",
"assets/assets/images/episodes/episode3/episode3_view5.png": "5cbb3925eddf102ed971fed700e858b7",
"assets/assets/images/episodes/episode3/episode3_view4.png": "19f6f5289af9ad49ab4cd1782b941899",
"assets/assets/images/episodes/episode3/episode3_view1.png": "85f53d1d93b604c509483697485ac873",
"assets/assets/images/episodes/episode3/episode3_view3.png": "2221db3c35f7493bf524f5c261dbe506",
"assets/assets/images/episodes/episode3/episode3_view2.png": "c276fd2fe45e4790e8265bb1abfaf68b",
"assets/assets/images/episodes/episode3/episode3_view10.png": "3efcd3be995fc0754fb41ce7d341c197",
"assets/assets/images/episodes/episode3/episode3_view11.png": "ed11e8c77bff1f1faf0afe420deab7d1",
"assets/assets/images/episodes/episode3/episode3_view13.png": "d4e9eac8378af7ad4d607c69a78fb7e1",
"assets/assets/images/episodes/episode3/episode3_view12.png": "d1f25946c229e0dfcf02d813900a05f3",
"assets/assets/images/episodes/episode3/episode3_view9.png": "fb40b6265695b5a160f1ff05509dfe58",
"assets/assets/images/episodes/episode3/episode3_view8.png": "beff403d6dadfc63dc64da3c8e07f373",
"assets/assets/images/episodes/episode10/episode10_view32.png": "df8b0a236b424faffd7d43a6afead7e2",
"assets/assets/images/episodes/episode10/episode10_view26.png": "6daf64eaaae867620e3df160fe9a3c7d",
"assets/assets/images/episodes/episode10/episode10_view27.png": "b4f24d0d6417382be2caab7ad6ee3e9b",
"assets/assets/images/episodes/episode10/episode10_view33.png": "ddea6358ec115c6b40e19c3a4f30e269",
"assets/assets/images/episodes/episode10/episode10_view25.png": "68728b7c17c62b95d42283011369e9b2",
"assets/assets/images/episodes/episode10/episode10_view31.png": "6af30f225dfb61fe4f0a15a039ffb013",
"assets/assets/images/episodes/episode10/episode10_view19.png": "f59c88627f29ab66cb33466b90c254ef",
"assets/assets/images/episodes/episode10/episode10_view18.png": "d864cd5300b9c9ab232642ff33925e5d",
"assets/assets/images/episodes/episode10/episode10_view30.png": "6dde6b346eab56baa4e628c88108084d",
"assets/assets/images/episodes/episode10/episode10_view24.png": "2ee0f385099dd535e6d104da689ee301",
"assets/assets/images/episodes/episode10/episode10_view20.png": "680f89cd611a081cef8c1bd5ab1e9fd8",
"assets/assets/images/episodes/episode10/episode10_view34.png": "b657fdc96ae4d2f8e2f5aa3092312234",
"assets/assets/images/episodes/episode10/episode10_view35.png": "95a0ead2039dd6d7886a2f10974db6d5",
"assets/assets/images/episodes/episode10/episode10_view21.png": "a3b8695541863be4a62ca017fddcedb0",
"assets/assets/images/episodes/episode10/episode10_view37.png": "1d72c7fbbad8b91f2df3e5c957022567",
"assets/assets/images/episodes/episode10/episode10_view23.png": "f18f27b66806a4f33bf9f92db1df6ebd",
"assets/assets/images/episodes/episode10/episode10_view22.png": "02d9c2863aa20af5cbddd31dec8fd871",
"assets/assets/images/episodes/episode10/episode10_view36.png": "62c2ae1297678c6cfa4139dc8dcb3ef7",
"assets/assets/images/episodes/episode10/episode10_view45.png": "6f3dd9f37f60485a3bbd03209912f420",
"assets/assets/images/episodes/episode10/episode10_view9.png": "29d4310101a7c1e8ae0002db82274acb",
"assets/assets/images/episodes/episode10/episode10_view8.png": "0ea88ba6f6a7cbcc432aa0b937ba98ec",
"assets/assets/images/episodes/episode10/episode10_view44.png": "e94df0014a7912d932873115c9145551",
"assets/assets/images/episodes/episode10/episode10_view46.png": "84652fba88875ab45cc42460b4d3591c",
"assets/assets/images/episodes/episode10/episode10_view47.png": "ad8ac098818fac31168692b995e69d37",
"assets/assets/images/episodes/episode10/episode10_view43.png": "75facd2424bddf81d0ce034ed5d01c4f",
"assets/assets/images/episodes/episode10/episode10_view42.png": "d006f8a3626b5ee446585928b3ace3d2",
"assets/assets/images/episodes/episode10/episode10_view40.png": "9e52818a698eb0c9c5d0c8927d7ea179",
"assets/assets/images/episodes/episode10/episode10_view41.png": "ccc6d1db779752c83abdad3c7cda4915",
"assets/assets/images/episodes/episode10/episode10_view1.png": "c28cfee691871ae2ef8dd8cd0278b325",
"assets/assets/images/episodes/episode10/episode10_view3.png": "80edd340d5b04bc4d7951fb90166b856",
"assets/assets/images/episodes/episode10/episode10_view2.png": "4c6034e7b5aa11c5cc6b11f58cd13ff8",
"assets/assets/images/episodes/episode10/episode10_view6.png": "72ea77361b9b4cecde7e7d320cf5c4fa",
"assets/assets/images/episodes/episode10/episode10_view7.png": "2576f882bec44288737d31329eb9df5a",
"assets/assets/images/episodes/episode10/episode10_view5.png": "ebe4808233073a3b25951783b43fd31a",
"assets/assets/images/episodes/episode10/episode10_view4.png": "4525af566769f88fc547aafb49d33b28",
"assets/assets/images/episodes/episode10/episode10_view48.png": "aa40a92c09337427f93bb46938891e05",
"assets/assets/images/episodes/episode10/episode10_view13.png": "32f2106662e60b0e41994c177a572f3f",
"assets/assets/images/episodes/episode10/episode10_view12.png": "1f520ef520b1c956de146f10a0d3373b",
"assets/assets/images/episodes/episode10/episode10_view10.png": "ea01bc04a6b068269584fa3f4011e3ea",
"assets/assets/images/episodes/episode10/episode10_view38.png": "b931d5f5183f9ac9c843ff4c4806d253",
"assets/assets/images/episodes/episode10/episode10_view39.png": "e492bb8fb6e6acd5fb453ce73fd3a7aa",
"assets/assets/images/episodes/episode10/episode10_view11.png": "a8bc5f1eef6177e50e693fd2cd95efc8",
"assets/assets/images/episodes/episode10/episode10_view29.png": "45de142c9a52f91511e501b58d199749",
"assets/assets/images/episodes/episode10/episode10_view15.png": "cbe7b2d2c20ea699b5e1ce6fecdf482d",
"assets/assets/images/episodes/episode10/episode10_view14.png": "d620c62f21e7bea65148d9ffde6d6c1c",
"assets/assets/images/episodes/episode10/episode10_view28.png": "5d115441ebc3cc876eb3d3f02f5b94df",
"assets/assets/images/episodes/episode10/episode10_view16.png": "477c410eee09a33828ee38c7423b83de",
"assets/assets/images/episodes/episode10/episode10_view17.png": "e5da56630046d266cc140c2d5e67e08f",
"assets/assets/images/episodes/episode11/episode11_view9.png": "ecd8ae710294f23fea291de37caf4a40",
"assets/assets/images/episodes/episode11/episode11_view8.png": "294da660cdbb1f2a11a6b7993a8c8ce9",
"assets/assets/images/episodes/episode11/episode11_view15.png": "9091a91de2128ecc9b38e5fdb5a44f33",
"assets/assets/images/episodes/episode11/episode11_view14.png": "136c90e00df43f26755ca84237906efd",
"assets/assets/images/episodes/episode11/episode11_view16.png": "278760446934107ae6a9677b4304b2c8",
"assets/assets/images/episodes/episode11/episode11_view13.png": "7c81cc46b2f629bdf6a5ae3349d1c09d",
"assets/assets/images/episodes/episode11/episode11_view12.png": "ac977ad106e564abc6dda0d154fec4c1",
"assets/assets/images/episodes/episode11/episode11_view10.png": "e89318c7a7a5072bc6d8df1ef0dcaf99",
"assets/assets/images/episodes/episode11/episode11_view11.png": "b979e407e4ae67873869d617e1bed67e",
"assets/assets/images/episodes/episode11/episode11_view1.png": "6d058146442ca1a337e35bed248fa3a3",
"assets/assets/images/episodes/episode11/episode11_view3.png": "02a4a3860ee9c9920d74e5d54b13d41a",
"assets/assets/images/episodes/episode11/episode11_view2.png": "d62ff9586a3415b79e38f388cce35ecd",
"assets/assets/images/episodes/episode11/episode11_view6.png": "f81ba64a19f5fd41c35db38b02b517db",
"assets/assets/images/episodes/episode11/episode11_view7.png": "afa59eb67c1e49af4e1dbf2dccf4e871",
"assets/assets/images/episodes/episode11/episode11_view5.png": "ab7d6809c4cc3c8c005abc93e85b62f2",
"assets/assets/images/episodes/episode11/episode11_view4.png": "8bb7dcad6d545b8e5f1fb746495b9baa",
"assets/assets/images/episodes/episode2/episode2_view16.png": "4a8d14a5a61d90f9c018f58f642ce2d4",
"assets/assets/images/episodes/episode2/episode2_view6.png": "e942a84d1bd3468f5126c615e85c5fbe",
"assets/assets/images/episodes/episode2/episode2_view7.png": "d7c52da0c3eb8f90421c4edb9365e2e8",
"assets/assets/images/episodes/episode2/episode2_view17.png": "9e151fb0528592568d69c0d6b4e0c309",
"assets/assets/images/episodes/episode2/episode2_view15.png": "f56af989698fa31b478b50f9faec867e",
"assets/assets/images/episodes/episode2/episode2_view29.png": "28f14f36ef5f5b411cc12e05fb970dc3",
"assets/assets/images/episodes/episode2/episode2_view5.png": "454da35c38ca7f47f5ce4d037880dca3",
"assets/assets/images/episodes/episode2/episode2_view4.png": "2f7fc587c65da00f67a6758870d667d7",
"assets/assets/images/episodes/episode2/episode2_view28.png": "caf4b96027c51c90ceae93df83d1789b",
"assets/assets/images/episodes/episode2/episode2_view14.png": "18535d14b213904486834afb6f4a1299",
"assets/assets/images/episodes/episode2/episode2_view10.png": "3ddabb0b746b5101c751e1e77c10d277",
"assets/assets/images/episodes/episode2/episode2_view1.png": "c8fd6721d18c2adde0170f842c2648d1",
"assets/assets/images/episodes/episode2/episode2_view11.png": "bd99177e30f294006755eb3b7d676100",
"assets/assets/images/episodes/episode2/episode2_view13.png": "2b722a2c7278ff80887ce91ad4dfe074",
"assets/assets/images/episodes/episode2/episode2_view3.png": "e56c7a908728ad7e5329231926ecc4c9",
"assets/assets/images/episodes/episode2/episode2_view2.png": "36765ce2dbede20040bf3b09960c0592",
"assets/assets/images/episodes/episode2/episode2_view12.png": "906c15b7b1283f4687dace07353515d5",
"assets/assets/images/episodes/episode2/episode2_view23.png": "85240950db115bd6b90c54051f768cc5",
"assets/assets/images/episodes/episode2/episode2_view22.png": "377b21c7f0b9f9c2f2a9c4996e11a570",
"assets/assets/images/episodes/episode2/episode2_view20.png": "982084e6ab21cf1f7b6fd5850f70c13f",
"assets/assets/images/episodes/episode2/episode2_view34.png": "a25091fdebee34263d5599f1ae8eff8f",
"assets/assets/images/episodes/episode2/episode2_view35.png": "15789708fca89e8d6fdb0378fab3325b",
"assets/assets/images/episodes/episode2/episode2_view21.png": "c77ab1aa67cc1ca6dfe9171cef905196",
"assets/assets/images/episodes/episode2/episode2_view19.png": "88c8390af19cfcf47ad5dc7b01c62648",
"assets/assets/images/episodes/episode2/episode2_view25.png": "d14fc36282487bd41fa85e96057b2549",
"assets/assets/images/episodes/episode2/episode2_view31.png": "f192aeaa9a8f2ab4fea93f9dd9e35a2c",
"assets/assets/images/episodes/episode2/episode2_view9.png": "db1cd5621f0960f74d9a25ff240d82db",
"assets/assets/images/episodes/episode2/episode2_view8.png": "d4f13dc0669529f906eafb73f4d1548a",
"assets/assets/images/episodes/episode2/episode2_view30.png": "7822dbd1ef71415a1794e9d26b454c00",
"assets/assets/images/episodes/episode2/episode2_view24.png": "3a2df50fe787978822bca5a72aa99b2a",
"assets/assets/images/episodes/episode2/episode2_view18.png": "06fb2a29db4eec421ffe2dfdb0636f40",
"assets/assets/images/episodes/episode2/episode2_view32.png": "c26e1b54c1f29e4d62d6359cb9fa9cfe",
"assets/assets/images/episodes/episode2/episode2_view26.png": "8f54d84cb0a8f33cf1658f7e47f09f33",
"assets/assets/images/episodes/episode2/episode2_view27.png": "66296e145d07e720c2e07efa260fd980",
"assets/assets/images/episodes/episode2/episode2_view33.png": "166d9c047649a3164c7c1ff3e949e271",
"assets/assets/images/episodes/episode5/episode5_view12.png": "5d710515f53d926ecab6704d14c451fb",
"assets/assets/images/episodes/episode5/episode5_view1.png": "4f0257658fef3799b53c703e2336655b",
"assets/assets/images/episodes/episode5/episode5_view13.png": "c82947b0dcd180f54a3893c434f92bf8",
"assets/assets/images/episodes/episode5/episode5_view11.png": "63b84c8423b65d38b2e5e594a9431cca",
"assets/assets/images/episodes/episode5/episode5_view2.png": "3a2cd050b5ea55c250cda30d8ede2fed",
"assets/assets/images/episodes/episode5/episode5_view3.png": "3ac2c1620c1506d2fc0b83863d7db92e",
"assets/assets/images/episodes/episode5/episode5_view10.png": "4da8acd1c728f5f5b6b8bfdabe8357f8",
"assets/assets/images/episodes/episode5/episode5_view14.png": "2a116b05bd4777ba989d78a67f7f84c9",
"assets/assets/images/episodes/episode5/episode5_view7.png": "642ee9809fbf7fe5d23ead6f1618cbfb",
"assets/assets/images/episodes/episode5/episode5_view6.png": "8963efa3374b507c032045f60e46ecd3",
"assets/assets/images/episodes/episode5/episode5_view15.png": "14fb547f32c0514f1b3423d90c038d1f",
"assets/assets/images/episodes/episode5/episode5_view17.png": "4c5a1ad9c7ced6f92294442f443db683",
"assets/assets/images/episodes/episode5/episode5_view4.png": "2ecffc9e160bbf80273c5409e17b96c6",
"assets/assets/images/episodes/episode5/episode5_view5.png": "de2b9f58ce0e56da25fdc5ea1c3fe4a3",
"assets/assets/images/episodes/episode5/episode5_view16.png": "89df73784c131d47ac9beaa6d4df5e99",
"assets/assets/images/episodes/episode5/episode5_view8.png": "fc3cf87b7df82e2253914cdb54f78538",
"assets/assets/images/episodes/episode5/episode5_view9.png": "6b709fda53c0a1799851751a3ee92c05",
"assets/assets/images/episodes/episode5/episode5_view18.png": "ad3ebc3e8e4888a360677d268b02b7a3",
"assets/assets/images/logos/arrugas.png": "538a410003086e4008d98f702173f7a9",
"assets/assets/images/logos/personaje.png": "0816a44b4efc86ad318e4f44b9a1a4f6",
"assets/assets/images/klondike-sprites.png": "96dc56353d56d5a1ea8089d0b0a1ad0a",
"assets/assets/images/hubs/entrance.png": "79c4ba3b1961caeb6a35f178291ed228",
"assets/assets/images/games/episode2/hall.png": "b8126fb6b871abdf1e188c47e739ddd5",
"assets/assets/audio/music/menuOpen.mp3": "caabf9de7f31834c5280edda989ad34a",
"assets/assets/audio/music/christmas-stars.mp3": "9ecab2b1c25bbe1dafe4adc582af1f93",
"assets/assets/audio/music/relaxing.mp3": "ced43a6de423bf4b6737295ba6327c22",
"assets/assets/audio/music/relaxed-walk-113607.mp3": "146f54bb9c99f66db7502691803eb6de",
"assets/assets/audio/music/setting_click.mp3": "f40d80ebe38857a0083cac96fe2fd883",
"assets/assets/audio/music/button-click.mp3": "437937cee6cbf56c0ee054a5eddfcae8",
"assets/assets/audio/music/piano-moment.mp3": "3cf18be440c1751a6aa29850119d4d79",
"assets/assets/audio/music/lazy-afternoon.mp3": "fbbd06870e88a2d6a7f387248cf2217d",
"assets/assets/audio/music/episode-open.mp3": "cf71de46692fa05b499cf5862a95f904",
"assets/assets/audio/music/next-page-1.mp3": "a53f28c2216f3b9bc89e7e20018c647f",
"assets/assets/audio/music/next-page-2.mp3": "0086ffcd3d84e5e968c573aade4dc3e7",
"assets/assets/audio/music/next-page-3.mp3": "5384235a95effda4b0de7e958a4d93b2",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
