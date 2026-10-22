const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
   {
      id: "1",
      songName:`Ankhhon se batana <br> 
      <div class="subtitle">Dikshant</div>`,
      poster:"img/1.jpeg"
   },
    {
      id: "2",
      songName:`JO Tum mere ho <br> 
      <div class="subtitle">Anuv Jain</div>`,
      poster:"img/2.jpeg"
   },
    {
      id: "3",
      songName:` Dhope shope <br> 
      <div class="subtitle">Honey Singh</div>`,
      poster:"img/3.jpeg"
   },
    {
      id: "4",
      songName:`   G.O.A.T. <br> 
      <div class="subtitle">Diljit Dosanjh</div>`,
      poster:"img/4.jpeg"
   },
    {
      id: "5",
      songName:` Millinior <br> 
      <div class="subtitle">Honey Singh</div>`,
      poster:"img/5.jpeg"
   },
    {
      id: "6",
      songName:` jab tak <br> 
      <div class="subtitle"> Armaan Malik</div>`,
      poster:"img/6.jpeg"
   },
    {
      id: "7",
      songName:`Tu hi mera <br> 
      <div class="subtitle">Shafqat Amanat Ali</div>`,
      poster:"img/7.jpeg"
   },
    {
      id: "8",
      songName:`chahun main ya naa<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/8.jpeg"
   },
    {
      id: "9",
      songName:`  sanam Re <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/9.jpeg"
   },
    {
      id: "10",
      songName:`Main Agar Kahoon <br> 
      <div class="subtitle">Sonu Nigam</div>`,
      poster:"img/10.jpeg"
   },
    {
      id: "11",
      songName:`Tumse Milke Dil Ka <br> 
      <div class="subtitle">Sonu Nigam</div>`,
      poster:"img/11.jpeg"
   },
    {
      id: "12",
      songName:`Tumhe Jo Maine Dekha <br> 
      <div class="subtitle">Abhijeet Bhattacharya</div>`,
      poster:"img/12.jpeg"
   },
    {
      id: "13",
      songName:`Tera Fitoor <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/13.jpeg"
   },
    {
      id: "14",
      songName:`Phir Kabhi<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/14.jpeg"
   },
    {
      id: "15",
      songName:`Sab Tera <br> 
      <div class="subtitle">Armaan Malik</div>`,
      poster:"img/15.jpeg"
   },
    {
      id: "16",
      songName:`Qaafirana <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/16.jpeg"
   },
    {
      id: "17",
      songName:`Khairiyat <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/17.jpeg"
   },
    {
      id: "18",
      songName:`Raanjhanaa <br> 
      <div class="subtitle">Jaswinder Singh</div>`,
      poster:"img/18.jpeg"
   },
    {
      id: "19",
      songName:`Jeene Laga Hoon <br> 
      <div class="subtitle">Atif Aslam</div>`,
      poster:"img/19.jpeg"
   },
    {
      id: "20",
      songName:`Jiya Dhadak Dhadak <br> 
      <div class="subtitle">Rahat Fateh Ali Khan</div>`,
      poster:"img/20.jpeg"
   },
    {
      id: "21",
      songName:`Tum Se Hi <br> 
      <div class="subtitle">Mohit Chauhan</div>`,
      poster:"img/21.jpeg"
   },
    {
      id: "22",
      songName:`Aaoge Jab Tum<br> 
      <div class="subtitle">Ustad Rashid Khan</div>`,
      poster:"img/22.jpeg"
   },
    {
      id: "23",
      songName:`Aapka Kya Hoga<br> 
      <div class="subtitle">Mika Singh</div>`,
      poster:"img/23.jpeg"
   },
    {
      id: "24",
      songName:`Deva Shree Ganesha <br> 
      <div class="subtitle">Ajay Gogavale</div>`,
      poster:"img/24.jpeg"
   },
    {
      id: "25",
      songName:`Apna Bana Le <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/25.jpeg"
   },
    {
      id: "26",
      songName:`Teri Meri Kahaani <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/26.jpeg"
   },
    {
      id: "27",
      songName:`Main Koi Aisa Geet Gaoon <br> 
      <div class="subtitle">Abhijeet Bhattacharya</div>`,
      poster:"img/27.jpeg"
   },
    {
      id: "28",
      songName:`Tum Ho <br> 
      <div class="subtitle">Mohit Chauhan</div>`,
      poster:"img/28.jpeg"
   },
    {
      id: "29",
      songName:`Ae Dil Hai Mushkil <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/29.jpeg"
   },
    {
      id: "30",
      songName:`Heeriye <br> 
      <div class="subtitle">Jasleen Royal</div>`,
      poster:"img/30.jpeg"
   },
    {
      id: "31",
      songName:`Baarish<br> 
      <div class="subtitle">Ash King</div>`,
      poster:"img/31.jpeg"
   },
    {
      id: "32",
      songName:`Phir Bhi Tumko Chaahunga<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/32.jpeg"
   },
    {
      id: "33",
      songName:`Galliyan <br> 
      <div class="subtitle">Ankit Tiwari</div>`,
      poster:"img/33.jpeg"
   },
    {
      id: "34",
      songName:`O Meri Laila <br> 
      <div class="subtitle">Atif Aslam</div>`,
      poster:"img/34.jpeg"
   },
    {
      id: "35",
      songName:`Mere Naam Tu <br> 
      <div class="subtitle">Abhay Jodhpurkar</div>`,
      poster:"img/35.jpeg"
   },
    {
      id: "36",
      songName:`Ghar Se Nikalte Hi <br> 
      <div class="subtitle">Armaan Malik</div>`,
      poster:"img/36.jpeg"
   },
    {
      id: "37",
      songName:`Zara Sa <br> 
      <div class="subtitle">KK</div>`,
      poster:"img/37.jpeg"
   },
    {
      id: "38",
      songName:`Maula Mere Maula<br> 
      <div class="subtitle">Roop Kumar Rathod</div>`,
      poster:"img/38.jpeg"
   },
    {
      id: "39",
      songName:`Tum Hi Ho <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/39.jpeg"
   },
    {
      id: "40",
      songName:`Tere Naina <br> 
      <div class="subtitle">Shankar Mahadevan</div>`,
      poster:"img/40.jpeg"
   },
    {
      id: "41",
      songName:`Tere Mast Mast Do Nain<br> 
      <div class="subtitle">Rahat Fateh Ali Khan</div>`,
      poster:"img/41.jpeg"
   },
    {
      id: "42",
      songName:`Woh Ladki Hai Kahan <br> 
      <div class="subtitle">Shaan</div>`,
      poster:"img/42.jpeg"
   },
    {
      id: "43",
      songName:`Tujhe Main Pyar Karu <br> 
      <div class="subtitle">Shaan</div>`,
      poster:"img/43.jpeg"
   },
    {
      id: "44",
      songName:`Paniyon Sa <br> 
      <div class="subtitle">Atif Aslam</div>`,
      poster:"img/44.jpeg"
   },
    {
      id: "45",
      songName:`Dil Ibaadat<br> 
      <div class="subtitle">KK</div>`,
      poster:"img/45.jpeg"
   },
    {
      id: "46",
      songName:`Tu Hi Haqeeqat <br> 
      <div class="subtitle">Javed Ali</div>`,
      poster:"img/46.jpeg"
   },
    {
      id: "47",
      songName:`Hale Dil <br> 
      <div class="subtitle">Harshit Saxena</div>`,
      poster:"img/47.jpeg"
   },
    {
      id: "48",
      songName:`Tera Deedar Hua <br> 
      <div class="subtitle">Rahat Fateh Ali Khan</div>`,
      poster:"img/48.jpeg"
   },
    {
      id: "49",
      songName:`Aankhon Mein Doob Jaane Ko<br> 
      <div class="subtitle">KK</div>`,
      poster:"img/49.jpeg"
   },
    {
      id: "50",
      songName:`Haan Tu Hai<br> 
      <div class="subtitle">KK</div>`,
      poster:"img/50.jpeg"
   },
    {
      id: "51",
      songName:`Kaho Na Kaho<br> 
      <div class="subtitle">Amir Jamal</div>`,
      poster:"img/51.jpeg"
   },
    {
      id: "52",
      songName:`Tujhe Sochta Hoon <br> 
      <div class="subtitle">KK</div>`,
      poster:"img/52.jpeg"
   },
    {
      id: "53",
      songName:`Guzarish<br> 
      <div class="subtitle">KK</div>`,
      poster:"img/53.jpeg"
   },
    {
      id: "54",
      songName:`Har Kisi Ko <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/54.jpeg"
   },
    {
      id: "55",
      songName:`Aadat<br> 
      <div class="subtitle">Atif Aslam</div>`,
      poster:"img/55.jpeg"
   },
    {
      id: "56",
      songName:`Phir Mohabbat<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/56.jpeg"
   },
    {
      id: "57",
      songName:`Kya Mujhe Pyar Hai <br> 
      <div class="subtitle">KK</div>`,
      poster:"img/57.jpeg"
   },
    {
      id: "58",
      songName:`Are Are Are <br> 
      <div class="subtitle">KK</div>`,
      poster:"img/58.jpeg"
   },
    {
      id: "59",
      songName:`Dard Dilo Ke <br> 
      <div class="subtitle">Mohammad Irfan</div>`,
      poster:"img/59.jpeg"
   },
    {
      id: "60",
      songName:`Mann Mera <br> 
      <div class="subtitle">Gajendra Verma</div>`,
      poster:"img/60.jpeg"
   },
    {
      id: "61",
      songName:`Baaton Ko Teri <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/61.jpeg"
   },
    {
      id: "62",
      songName:`Mera Bina<br> 
      <div class="subtitle">Nikhil D Souza</div>`,
      poster:"img/62.jpeg"
   },
    {
      id: "63",
      songName:`Valam <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/63.jpeg"
   },
    {
      id: "64",
      songName:`Baarish<br> 
      <div class="subtitle">Atif Aslam</div>`,
      poster:"img/64.jpeg"
   },
    {
      id: "65",
      songName:`Admiring <br> 
      <div class="subtitle">Karan Aujla</div>`,
      poster:"img/65.jpeg"
   },
    {
      id: "66",
      songName:`Jab Se Tere Naina <br> 
      <div class="subtitle">Shaan</div>`,
      poster:"img/66.jpeg"
   },
    {
      id: "67",
      songName:`Sach Keh Raha Hai <br> 
      <div class="subtitle">KK</div>`,
      poster:"img/67.jpeg"
   },
    {
      id: '68',
      songName:`Khamoshiyan<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/68.jpeg"
   },
    {
      id: "69",
      songName:`Pyaar Tune Kya Kiya<br> 
      <div class="subtitle">Jubin Nautiyal</div>`,
      poster:"img/69.jpeg"
   },
    {
      id: "70",
      songName:`Mareez-E-Ishq <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/70.jpeg"
   },
    {
      id: "71",
      songName:`Zaroorat<br> 
      <div class="subtitle">Mustafa Zahid</div>`,
      poster:"img/71.jpeg"
   },
    {
      id: "72",
      songName:`Kabhi Jo Baadal Barse <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/72.jpeg"
   },
    {
      id: "73",
      songName:`Jee Karda <br> 
      <div class="subtitle">Divya Kumar</div>`,
      poster:"img/73.jpeg"
   },
    {
      id: "74",
      songName:`Darasal<br> 
      <div class="subtitle">Atif Aslam</div>`,
      poster:"img/74.jpeg"
   },
    {
      id: "75",
      songName:`Tum Mile <br> 
      <div class="subtitle">Neeraj Shridhar</div>`,
      poster:"img/75.jpeg"
   },
    {
      id: "76",
      songName:`Ik Lamha <br> 
      <div class="subtitle">Azaan Sami Khan</div>`,
      poster:"img/76.jpeg"
   },
    {
      id: "77",
      songName:`Maine Khud Ko <br> 
      <div class="subtitle">Mustafa Zahid</div>`,
      poster:"img/77.jpeg"
   },
    {
      id: "78",
      songName:`Akhiyan <br> 
      <div class="subtitle">Mitraz</div>`,
      poster:"img/78.jpeg"
   },
    {
      id: "79",
      songName:`Kinna Sona <br> 
      <div class="subtitle">Sunil Kamath</div>`,
      poster:"img/79.jpeg"
   },
    {
      id: "80",
      songName:`Dekha Hazaro Dafaa <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/80.jpeg"
   },
    {
      id: "81",
      songName:`Char Kadam <br> 
      <div class="subtitle">Shaan</div>`,
      poster:"img/81.jpeg"
   },
    {
      id: "82",
      songName:`Pal <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/82.jpeg"
   },
    {
      id: "83",
      songName:`Shoot Da Order <br> 
      <div class="subtitle">Jass Manak</div>`,
      poster:"img/83.jpeg"
   },
    {
      id: "84",
      songName:`Aashiq Tera <br> 
      <div class="subtitle">Sohail Sen</div>`,
      poster:"img/84.jpeg"
   },
    {
      id: "85",
      songName:`Maan Meri Jaan <br> 
      <div class="subtitle">King</div>`,
      poster:"img/85.jpeg"
   },
    {
      id: "86",
      songName:`Chori Kiya Re Jiya<br> 
      <div class="subtitle">Sonu Nigam</div>`,
      poster:"img/86.jpeg"
   },
    {
      id: "87",
      songName:`Pee Loon<br> 
      <div class="subtitle">Mohit Chauhan</div>`,
      poster:"img/87.jpeg"
   },
    {
      id: "88",
      songName:`Main Rahoon Ya Na Rahoon <br> 
      <div class="subtitle">Armaan Malik</div>`,
      poster:"img/88.jpeg"
   },
    {
      id: "89",
      songName:`Maahi<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/89.jpeg"
   },
    {
      id: "90",
      songName:`Uska Hi Banana<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/90.jpeg"
   },
    {
      id: "91",
      songName:`Lo Maan Liya <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/91.jpeg"
   },
    {
      id: "92",
      songName:`Baatein Ye Kabhi Na <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/92.jpeg"
   },
    {
      id: "93",
      songName:`Tauba Tumhare Ishare <br> 
      <div class="subtitle">Abhijeet Bhattacharya</div>`,
      poster:"img/93.jpeg"
   },
    {
      id: "94",
      songName:`Soniyo <br> 
      <div class="subtitle">Sonu Nigam</div>`,
      poster:"img/94.jpeg"
   },
    {
      id: "95",
      songName:`Bol Do Na Zara<br> 
      <div class="subtitle">Armaan Malik </div>`,
      poster:"img/95.jpeg"
   },
    {
      id: "96",
      songName:`Mere Rang Mein Rangne Wali <br> 
      <div class="subtitle">S. P. Balasubrahmanyam</div>`,
      poster:"img/96.jpeg"
   },
    {
      id: "97",
      songName:`Sahiba <br> 
      <div class="subtitle">Aditya Rikhari</div>`,
      poster:"img/97.jpeg"
   },
    {
      id: "98",
      songName:`Chaand Baaliyan <br> 
      <div class="subtitle">Aditya A</div>`,
      poster:"img/98.jpeg"
   },
    {
      id: "99",
      songName:`Softly<br> 
      <div class="subtitle">Karan Aujla</div>`,
      poster:"img/99.jpeg"
   },
    {
      id: "100",
      songName:`Dhoonde Akhiyaan<br> 
      <div class="subtitle">Yasser Desai</div>`,
      poster:"img/100.jpeg"
   },
    {
      id: "101",
      songName:`Jugraafiya <br> 
      <div class="subtitle">Udit Narayan</div>`,
      poster:"img/101.jpeg"
   },
   {
      id: "102",
      songName:`Finding Her <br> 
      <div class="subtitle">Kushagra</div>`,
      poster:"img/102.jpeg"
   },
   {
      id: "103",
      songName:`Meri Banogi Kya <br> 
      <div class="subtitle">Rito Riba</div>`,
      poster:"img/103.jpeg"
   },
   {
      id: "104",
      songName:`Tere Naino Mein <br> 
      <div class="subtitle">Shankar Mahadevan</div>`,
      poster:"img/104.jpeg"
   },
   {
      id: "105",
      songName:`Suniya Suniya <br> 
      <div class="subtitle">Juss</div>`,
      poster:"img/105.jpeg"
   },
   {
      id: "106",
      songName:`Fell For You <br> 
      <div class="subtitle">Shubh</div>`,
      poster:"img/106.jpeg"
   },
   {
      id: "107",
      songName:`Kinna Chir <br> 
      <div class="subtitle">The PropheC</div>`,
      poster:"img/107.jpeg"
   },
   {
      id: "108",
      songName:`Lover <br> 
      <div class="subtitle">Diljit Dosanjh</div>`,
      poster:"img/108.jpeg"
   },
   {
      id: "109",
      songName:`Samjho Na<br> 
      <div class="subtitle">Aditya Rikhari</div>`,
      poster:"img/109.jpeg"
   },
   {
      id: "110",
      songName:`Naam Tera<br> 
      <div class="subtitle">Ndee Kundu</div>`,
      poster:"img/110.jpeg"
   },
   {
      id: "111",
      songName:`Paaro <br> 
      <div class="subtitle">Aditya Rikhari</div>`,
      poster:"img/111.jpeg"
   },
   {
      id: "112",
      songName:`Pal Pal<br> 
      <div class="subtitle">Afusic</div>`,
      poster:"img/112.jpeg"
   },
   {
      id: "113",
      songName:`Chand Sifarish <br> 
      <div class="subtitle">Shaan</div>`,
      poster:"img/113.jpeg"
   },
   {
      id: "114",
      songName:`Meri Mehbooba <br> 
      <div class="subtitle">Kumar Sanu</div>`,
      poster:"img/114.jpeg"
   },
   {
      id: "115",
      songName:`Ek Do Teen Char<br> 
      <div class="subtitle">Alka Yagnik</div>`,
      poster:"img/115.jpeg"
   },
   {
      id: "116",
      songName:`Tujhe Main Pyar Karu <br> 
      <div class="subtitle">Shaan</div>`,
      poster:"img/116.jpeg"
   },
   {
      id: "117",
      songName:`Dooron Dooron<br> 
      <div class="subtitle">Atif Aslam</div>`,
      poster:"img/117.jpeg"
   },
   {
      id: "118",
      songName:`O Mere Dil Ke Chain <br> 
      <div class="subtitle">Kishore Kumar</div>`,
      poster:"img/118.jpeg"
   },
   {
      id: "119",
      songName:`Ambarsariya <br> 
      <div class="subtitle">Sona Mohapatra</div>`,
      poster:"img/119.jpeg"
   },
   {
      id: "120",
      songName:`Downers At Dusk<br> 
      <div class="subtitle">Talha Anjum</div>`,
      poster:"img/120.jpeg"
   },
   {
      id: "121",
      songName:`Tum Tak <br> 
      <div class="subtitle">Javed Ali</div>`,
      poster:"img/121.jpeg"
   },
   {
      id: "122",
      songName:`Shikayat <br> 
      <div class="subtitle">AUR</div>`,
      poster:"img/122.jpeg"
   },
   {
      id: "123",
      songName:`Gani <br> 
      <div class="subtitle">Preet Harpal</div>`,
      poster:"img/123.jpeg"
   },
   {
      id: "124",
      songName:`Rabba <br> 
      <div class="subtitle">Mohit Chauhan</div>`,
      poster:"img/124.jpeg"
   },
   {
      id: "125",
      songName:`Shayad <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/125.jpeg"
   },
   {
      id: "126",
      songName:`Bahara<br> 
      <div class="subtitle">Shreya Ghoshal</div>`,
      poster:"img/126.jpeg"
   },
   {
      id: "127",
      songName:`Zehnaseeb <br> 
      <div class="subtitle">Chinmayi Sripaada & Shekhar Ravjiani</div>`,
      poster:"img/127.jpeg"
   },
   {
      id: '128',
      songName:`Most Wanted <br> 
      <div class="subtitle">MC GAWTHI</div>`,
      poster:"img/128.jpeg"
   },
   {
      id: "129",
      songName:`RX 100 <br> 
      <div class="subtitle">MC GAWTHI</div>`,
      poster:"img/129.jpeg"
   },
   {
      id: "130",
      songName:`Matter <br> 
      <div class="subtitle">MC GAWTHI</div>`,
      poster:"img/130.jpeg"
   },
   {
      id: "131",
      songName:`Numberkari<br> 
      <div class="subtitle">MC GAWTHI</div>`,
      poster:"img/131.jpeg"
   },
   {
      id: "132",
      songName:`Sagle Tangto<br> 
      <div class="subtitle">MC GAWTHI</div>`,
      poster:"img/132.jpeg"
   },
   {
      id: "133",
      songName:`Pinnak <br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/133.jpeg"
   },
   {
      id: "134",
      songName:`Gangster Shit<br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/134.jpeg"
   },
   {
      id: "135",
      songName:`Palti Fire<br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/135.jpeg"
   },
   {
      id: "136",
      songName:`Nako Raste Changle<br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/136.jpeg"
   },
   {
      id: "137",
      songName:`Kaarte Nibaar <br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/137.jpeg"
   },
   {
      id: "138",
      songName:`Dominance <br> 
      <div class="subtitle">ROCKSUN</div>`,
      poster:"img/138.jpeg"
   },
   {
      id: "139",
      songName:`Nalayak <br> 
      <div class="subtitle">ROCKSUN</div>`,
      poster:"img/139.jpeg"
   },
   {
      id: "140",
      songName:`Mahaan<br> 
      <div class="subtitle">ROCKSUN</div>`,
      poster:"img/140.jpeg"
   },
   {
      id: "141",
      songName:`Saltanat <br> 
      <div class="subtitle">ROCKSUN</div>`,
      poster:"img/141.jpeg"
   },
   {
      id: "142",
      songName:`Hood Life <br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/142.jpeg"
   },
   {
      id: "143",
      songName:`Vazan <br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/143.jpeg"
   },
   {
      id: "144",
      songName:`Cash Flow <br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/144.jpeg"
   },
   {
      id: "145",
      songName:`Black Money<br> 
      <div class="subtitle">SAMBATA</div>`,
      poster:"img/145.jpeg"
   },
   {
      id: "146",
      songName:`No Cap <br> 
      <div class="subtitle">KR$NA</div>`,
      poster:"img/146.jpeg"
   },
   {
      id: "147",
      songName:`Hola Amigo <br> 
      <div class="subtitle">KR$NA</div>`,
      poster:"img/147.jpeg"
   },
   {
      id: "148",
      songName:`Still Standing <br> 
      <div class="subtitle">KR$NA</div>`,
      poster:"img/148.jpeg"
   },
   {
      id: "149",
      songName:`Prarthana <br> 
      <div class="subtitle">KR$NA</div>`,
      poster:"img/149.jpeg"
   },
   {
      id: "150",
      songName:`Wanna Know <br> 
      <div class="subtitle">KR$NA</div>`,
      poster:"img/150.jpeg"
   },
   {
      id: "151",
      songName:`Some Of Us<br> 
      <div class="subtitle">KR$NA</div>`,
      poster:"img/151.jpeg"
   },
   {
      id: "152",
      songName:`I Guess <br> 
      <div class="subtitle">KR$NA</div>`,
      poster:"img/152.jpeg"
   },
   {
      id: "153",
      songName:`3:59 AM<br> 
      <div class="subtitle">DIVINE</div>`,
      poster:"img/153.jpeg"
   },
   {
      id: "154",
      songName:`Punya Paap <br> 
      <div class="subtitle">DIVINE</div>`,
      poster:"img/154.jpeg"
   },
   {
      id: "155",
      songName:`Sitara<br> 
      <div class="subtitle">DIVINE</div>`,
      poster:"img/155.jpeg"
   },
   {
      id: "156",
      songName:`Baazigar <br> 
      <div class="subtitle">DIVINE</div>`,
      poster:"img/156.jpeg"
   },
   {
      id: "157",
      songName:`Disco Rap <br> 
      <div class="subtitle">DIVINE</div>`,
      poster:"img/157.jpeg"
   },
   {
      id: "158",
      songName:`Triple OG <br> 
      <div class="subtitle">DIVINE</div>`,
      poster:"img/158.jpeg"
   },
   {
      id: "159",
      songName:`Bombay Dreams <br> 
      <div class="subtitle">DIVINE</div>`,
      poster:"img/159.jpeg"
   },
   {
      id: "160",
      songName:`Russian Bandana <br> 
      <div class="subtitle">Dhanda Nyoliwala</div>`,
      poster:"img/160.jpeg"
   },
   {
      id: "161",
      songName:`Cold Hours <br> 
      <div class="subtitle">Aleemrk</div>`,
      poster:"img/161.jpeg"
   },
   {
      id: "162",
      songName:`Nature <br> 
      <div class="subtitle">Kabira</div>`,
      poster:"img/162.jpeg"
   },
   {
      id: "163",
      songName:`Still Rollin <br> 
      <div class="subtitle">Shubh</div>`,
      poster:"img/163.jpeg"
   },
   {
      id: "164",
      songName:`Galat Karam <br> 
      <div class="subtitle">Raga & Panther</div>`,
      poster:"img/164.jpeg"
   },
   {
      id: "165",
      songName:`Dolby Walya<br> 
      <div class="subtitle">Nagesh Morvekar</div>`,
      poster:"img/165.jpeg"
   },
   {
      id: "166",
      songName:`Zingaat <br> 
      <div class="subtitle">Ajay-Atul</div>`,
      poster:"img/166.jpeg"
   },
   {
      id: "167",
      songName:`Shantabai <br> 
      <div class="subtitle">Sanjay Londhe</div>`,
      poster:"img/167.jpeg"
   },
   {
      id: "168",
      songName:`Patil Aala  <br> 
      <div class="subtitle">Vaibhav Londhe</div>`,
      poster:"img/168.jpeg"
   },
   {
      id: "169",
      songName:`Turururu Chalu Nako<br> 
      <div class="subtitle">Anand Shinde</div>`,
      poster:"img/169.jpeg"
   },
   {
      id: "170",
      songName:`Tuzya Priticha Vinchu Chawla <br> 
      <div class="subtitle">Ajay Gogavale</div>`,
      poster:"img/170.jpeg"
   },
   {
      id: "171",
      songName:`Yego Yego Maina <br> 
      <div class="subtitle">Ajay Gogavale</div>`,
      poster:"img/171.jpeg"
   },
   {
      id: "172",
      songName:`Gulabi Sadi<br> 
      <div class="subtitle">Sanju Rathod</div>`,
      poster:"img/172.jpeg"
   },
   {
      id: "173",
      songName:`Patlancha Bailgada <br> 
      <div class="subtitle">Vaibhav Londhe</div>`,
      poster:"img/173.jpeg"
   },
   {
      id: "174",
      songName:`Tik Tik Vajate Dokyat <br> 
      <div class="subtitle">Sonu Nigam & Sayali Pankaj</div>`,
      poster:"img/174.jpeg"
   },
   {
      id: "175",
      songName:`Zindagi Zindagi <br> 
      <div class="subtitle">Ajay Gogavale</div>`,
      poster:"img/175.jpeg"
   },
   {
      id: "176",
      songName:`Tola Tola <br> 
      <div class="subtitle">Bela Shende</div>`,
      poster:"img/176.jpeg"
   },
   {
      id: "177",
      songName:`Radha Hi Bawari <br> 
      <div class="subtitle">Swapnil Bandodkar</div>`,
      poster:"img/177.jpeg"
   },
   {
      id: "178",
      songName:`Gulabachi Kali <br> 
      <div class="subtitle">Vaishali Samant</div>`,
      poster:"img/178.jpeg"
   },
   {
      id: "179",
      songName:`Udhal Ho<br> 
      <div class="subtitle">Ajay Gogavale</div>`,
      poster:"img/179.jpeg"
   },
   {
      id: "180",
      songName:`Khanderaya Zali Majhi Daina <br> 
      <div class="subtitle">Ajay Gogavale</div>`,
      poster:"img/180.jpeg"
   },
   {
      id: "181",
      songName:`Punyachi Maina <br> 
      <div class="subtitle">Avadhoot Gupte</div>`,
      poster:"img/181.jpeg"
   },
   {
      id: "182",
      songName:`Aika Dajiba <br> 
      <div class="subtitle">Vaishali Samant</div>`,
      poster:"img/182.jpeg"
   },
   {
      id: "183",
      songName:`Hi Poli Saajuk<br> 
      <div class="subtitle">Reshma Sonawane</div>`,
      poster:"img/183.jpeg"
   },
   {
      id: "184",
      songName:`Cham Cham Karta <br> 
      <div class="subtitle">Vaishali Samant</div>`,
      poster:"img/184.jpeg"
   },
   {
      id: "185",
      songName:`Kombdi Palali <br> 
      <div class="subtitle">Anand Shinde</div>`,
      poster:"img/185.jpeg"
   },
   {
      id: "186",
      songName:`Hridayat Vaje Something <br> 
      <div class="subtitle">Ajay Gogavale</div>`,
      poster:"img/186.jpeg"
   },
   {
      id: "187",
      songName:`Love Fever <br> 
      <div class="subtitle">Mika Singh</div>`,
      poster:"img/187.jpeg"
   },
   {
      id: "188",
      songName:`Yed Lagla<br> 
      <div class="subtitle">Ajay Gogavale</div>`,
      poster:"img/188.jpeg"
   },
   {
      id: "189",
      songName:`Sairat Jhala Ji <br> 
      <div class="subtitle">Ajay Gogavale & Chinmayi</div>`,
      poster:"img/189.jpeg"
   },
   {
      id: "190",
      songName:`Atach Baya Ka Baawrla<br> 
      <div class="subtitle">Shreya Ghoshal</div>`,
      poster:"img/190.jpeg"
   },
   {
      id: "191",
      songName:`Ashi Chik Motyachi Maal<br> 
      <div class="subtitle">Vaishali Samant</div>`,
      poster:"img/191.jpeg"
   },
   {
      id: "192",
      songName:`Wavy<br> 
      <div class="subtitle">Karan Aujla</div>`,
      poster:"img/192.jpeg"
   },
   {
      id: "193",
      songName:`Born To Shine<br> 
      <div class="subtitle">Diljit Dosanjh</div>`,
      poster:"img/193.jpeg"
   },
   {
      id: "194",
      songName:`Knock Knock<br> 
      <div class="subtitle">KR$NA</div>`,
      poster:"img/194.jpeg"
   },
   {
      id: "195",
      songName:`Tere Binaa <br> 
      <div class="subtitle">A.R. Rahman</div>`,
      poster:"img/195.jpeg"
   },
   {
      id: "196",
      songName:`Baarishein <br> 
      <div class="subtitle">Anuv Jain</div>`,
      poster:"img/196.jpeg"
   },
   {
      id: "197",
      songName:`I Wanna Be Yours <br> 
      <div class="subtitle">Arctic Monkeys</div>`,
      poster:"img/197.jpeg"
   },
   {
      id: "198",
      songName:`Mere Sapno Ki Rani <br> 
      <div class="subtitle">Gaurav Jod</div>`,
      poster:"img/198.jpeg"
   },
   {
      id: "199",
      songName:`Señorita <br> 
      <div class="subtitle">Shawn Mendes & Camila Cabello</div>`,
      poster:"img/199.jpeg"
   },
   {
      id: "200",
      songName:`Perfect<br> 
      <div class="subtitle">Ed Sheeran</div>`,
      poster:"img/200.jpeg"
   },

]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img') [0].src = songs[i].poster; 
     e.getElementsByTagName('h5') [0].innerHTML = songs[i].songName; 
});


// search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
   const {id,songName,  poster  } = element;
   // console.log(poster);
   let card = document.createElement('a');
   card.classList.add('card');
   card.href ="#"+ id;
   card.innerHTML = `
   <img src="${poster}" alt="">
                        <div class="content">
                           ${songName}
                        </div>
   `;
   search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
      let as = items[index].getElementsByClassName('content')[0];
      let text_value = as.textContent || as.innerHTML;

      if (text_value.toUpperCase().indexOf(input_value) > -1) {
         items[index].style.display = "flex";
      } else {
        items[index].style.display = "none"; 
      }
      
      if (input.value == 0) {
         search_results.style.display = "none";
      } else {
         search_results.style.display = "";
      }
    }
})

// search data end



let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterplay.addEventListener('click',()=>{
   if (music.paused || music.currentTime <= 0) {
      music.play();
      wave.classList.add('active1');
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
   } else {
     music.pause(); 
     wave.classList.remove('active1');
      masterplay.classList.add('bi-play-fill');
       masterplay.classList.remove('bi-pause-fill');
   }
});

const makeAllBackground = () =>{
   Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
      el.style.background = 'rgb(105, 105, 105, .0)';
   })
}

const makeAllplayes = () =>{
   Array.from(document.getElementsByClassName('playlistplay ')).forEach((el)=>{
       el.classList.add('bi-play-circle-fill');
       el.classList.remove('bi-pause-circle-fill');
   })
}




let index = 0;
// let title = document.getElementById('title');
let download_music = document.getElementById('download_music');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
   e.addEventListener('click',(el)=>{
      index = el.target.id;
      // console.log(index);
      music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
     download_music.href = `audio/${index}.mp3`;


   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

   });
})

let currentstart = document.getElementById('currentstart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',() => {
   let music_curr = music.currentTime;
   let music_dur = music.duration;
   

   let min1 = Math.floor(music_dur / 60);
   let sec1 = Math.floor(music_dur % 60);
//   console.log(min1);
  
if (sec1 < 10) {
   sec1 = `0${sec1}`;
}
 currentEnd.innerText = `${min1}:${sec1}`;

 let min2 = Math.floor(music_curr / 60);
 let sec2 = Math.floor(music_curr % 60);


if (sec2 < 10) {
   sec2 = `0${sec2}`;
}


 currentstart.innerText = `${min2}:${sec2}`;


  let progressBar = parseInt((music_curr / music_dur) * 100);
   seek.value = progressBar;
   // console.log(seek.value);
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change',()=>{
   music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol= document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
   if (vol.value == 0) {
      vol_icon.classList.remove('bi-volume-up-fill');
       vol_icon.classList.remove('bi-volume-down-fill');
       vol_icon.classList.add('bi-volume-off-fill');
   }
   if (vol.value > 0) {
      vol_icon.classList.remove('bi-volume-up-fill');
       vol_icon.classList.add('bi-volume-down-fill');
       vol_icon.classList.remove('bi-volume-off-fill'); 
   }
   if (vol.value > 50) {
      vol_icon.classList.add('bi-volume-up-fill');
       vol_icon.classList.remove('bi-volume-down-fill');
       vol_icon.classList.remove('bi-volume-off-fill'); 
   }
   let vol_a = vol.value;
   vol_bar.style.width = `${vol_a}%`;
   vol_dot.style.left = `${vol_a}%`;
   music.volume = vol_a / 100;

});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
   index -= 1;
   if (index < 1) {
      index = Array.from(document.getElementsByClassName('songItem')).length;
   }
   music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');

   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

})

next.addEventListener('click',()=>{
   index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
      index = 1;
    }
   music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');

   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
});


















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
   pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click',()=>{
   pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click',()=>{
   Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click',()=>{
   Artists_bx.scrollLeft -= 330;
});



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
   let a = shuffle.innerHTML;

   switch (a) {
      case "next":
         shuffle.classList.add('bi-arrow-repeat');
         shuffle.classList.remove('bi-music-note-beamed');
         shuffle.classList.remove('bi-shuffle');
         shuffle.innerHTML = 'repeat';
         break;
   
      case "repeat":
         shuffle.classList.remove('bi-arrow-repeat');
         shuffle.classList.remove('bi-music-note-beamed');
         shuffle.classList.add('bi-shuffle');
         shuffle.innerHTML = 'random';
         break;

         case "random":
         shuffle.classList.remove('bi-arrow-repeat');
         shuffle.classList.add('bi-music-note-beamed');
         shuffle.classList.remove('bi-shuffle');
         shuffle.innerHTML = 'next';
         break;
   }
});




const next_music = () => {
  if (index == songs.length) {
     index = 1
 } else {
     index++;
 }
      music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
     download_music.href = `audio/${index}.mp3`;


   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}


const repeat_music = () => {
     if (index == songs.length) {
     index = 1
 } else {
     index;
 }
      music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
     download_music.href = `audio/${index}.mp3`;


   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}


const random_music = () => {
    if (index == songs.length) {
     index = 1
 } else {
     index = Math.floor((Math.random() * songs.length) + 1);
 }
      music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
     download_music.href = `audio/${index}.mp3`;


   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}




music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;

    switch (b) {
      case 'repeat':
         repeat_music();
         break;
         case 'next':
         next_music();
         break;
         case 'random':
         random_music();
         break;
    }
   
})