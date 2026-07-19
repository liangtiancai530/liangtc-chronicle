export type ArchivedDiaryEntry = {
  id: string;
  date: string;
  weather?: string;
  body: string;
};

export type ArchivedDiaryYear = {
  year: string;
  entries: ArchivedDiaryEntry[];
};

// Entries drawn from Liang's original diaries (2009–2018).
// Chinese entries have been summarised in English; English entries are lightly
// tidied from the original text.
export const DIARY_ARCHIVE: ArchivedDiaryYear[] = [
  {
    year: "2009",
    entries: [
      {
        id: "2009-12-25",
        date: "Dec 25, 2009 · Friday",
        weather: "About −10 °C, Beijing",
        body:
          "Christmas Eve — the kindergarten sent the children home so families could be together, so I couldn't join the Center's evening party. My wife has been busy at work, so I'm the full-time nanny today. I picked Xinxin up at 4:30 and the parents were already lined up at the gate — today's children are so lucky. We stopped at KFC (her favourite Christmas tree and slide), then tried to reach the Wangjing Jiamao Christmas show, but the queue of cars stretched out of the parking lot and we turned home disappointed. Second Aunt is away, and only now do we realise how much she does — Xinxin kept asking, 'Papa, do you actually know how to do this?', and reminded me at bedtime to turn off the heater and the TV: 'saves electricity and gas.'\n\nOn the 25th she reminded me it was a Friday licence-plate restriction day, so we took the 944 and then the very crowded 101 bus. The driver and conductor were so kind that other passengers gave up seats for her, and she in turn found me one. We ate baozi together before I dropped her at class. At noon I saw Ren Li, who I haven't seen for a long time — glad to hear he and his wife are doing well.",
      },
      {
        id: "2009-12-28",
        date: "Dec 28, 2009 · Monday",
        body:
          "Spent the whole weekend with Xinxin while her mother worked overtime. Milk, dressing, washing, brushing, breakfast — all on me. She refused the porridge, so we went to Walmart for two hours where she tried every free sample; then home for a nap, then Ouhaus in the evening. When my wife finally came home I ran 7–8 km — no longer feels tiring, consistency really pays. Sunday was Carrefour and Yoshinoya. Monday morning up at 7, downstairs by 7:40. She's slow with numbers — I'll have to practise counting with her. My spare time is finally opening up; time to find myself some side work again. Also need to draft the department year-end summary today. Chunsheng sent word that he's about to go to sea — I admire that boy's resolve.",
      },
      {
        id: "2009-12-29",
        date: "Dec 29, 2009",
        body:
          "Called an internal meeting on year-end reviews — everyone will submit their departmental summary and next-year plan before Thursday. In the afternoon the Director convened a ship-management business session; the view was unanimous — start negotiating with P&F as soon as possible and drop the Maple Leaf partnership.",
      },
      {
        id: "2009-12-30",
        date: "Dec 30, 2009",
        body:
          "Drafted two proposals — one on the P&F cooperation, one to Shenzhen MSA — and waited for a reply. Sat two tour-guide re-exam papers before leaving work; one didn't pass, which annoyed me, because the question bank itself was faulty, not me.",
      },
      {
        id: "2009-12-31",
        date: "Dec 31, 2009",
        body:
          "Tried to take Xinxin to kindergarten as usual, but her aunt called to say she'd come over, and her mother decided it counted as a New Year's holiday. Xinxin cried when I pressed her to go. Is school more important than staying home to wait for an aunt? Parents disagreeing about the child's education — when will that ever end?",
      },
    ],
  },
  {
    year: "2010",
    entries: [
      {
        id: "2010-01-04",
        date: "Jan 4, 2010",
        body:
          "First day back at the office. Read each department's 2009 summary and pulled out the highlights and 2010 ideas. This evening the Center's leadership will host the Director for a farewell dinner. Also need to check the Testing Centre is being staffed properly and push the Shenzhen MSA letter out the door.\n\nThe three-day holiday was tiring but productive: fixed Xinxin's small bed, bought cabinets and furniture for the second bedroom (three-door, bedside, three-tier — 1720 + 40, very cheap), picked up Second Aunt on the 2nd (finally someone to run the household again). Snow on the 1st, then a full day of heavy snow — reportedly Beijing's biggest fall in 40 years. Kindergarten closed on the 4th; I got to work by 9:45.",
      },
      {
        id: "2010-01-05",
        date: "Jan 5, 2010 · Tuesday",
        weather: "−15.5 °C in the car; probably −16 outside",
        body:
          "Dropped Xinxin off — she agreed to a full boarding day, which made me very happy. Met with Xiao Lin to discuss next year's salary, but I still need to confirm with the manager.\n\nCall from Zhou in Qingdao Huayang: the pilot station complained about our two boats — poor sanitation, no written emergency rules and other missing regulations. My god. I'll co-ordinate with colleagues on the customer relationship, and on Thursday and Friday I need to report to the boss on the upcoming law-knowledge training and prepare a speech draft. Also planning one-on-ones with the four managers to gather input for the HMC Annual Conference.",
      },
    ],
  },
  {
    year: "2011",
    entries: [
      {
        id: "2011-11-14",
        date: "Nov 14, 2011",
        weather: "15 °C in Shanghai — foggy; sunny in Beijing",
        body:
          "Four days in Shanghai for a seafarer COC training-textbook compilation meeting for the English subject. Fierce debates on what the textbooks should look like and contain — the teachers seemed to want to out-argue each other. We'll reconvene once their preliminary drafts are ready.\n\nAlso took a trip to Kunshan Yangchenghu for crab-eating. To be frank I didn't enjoy it — the crabs there looked heavily polluted and eating a lot of them can't be a good idea. Attended a dinner hosted by Captain Fan of Cosco Shanghai training centre aboard a Shanghai–Osaka cruise liner — first time on this kind of ship, food was delicious, all Japanese ingredients and cooking.\n\nThis morning up at 7 and off to Navigation Technology to sort out a thesis publication. Missed Mr. Wu Maoyu, the chief editor, but talked to some of the other editors. Then drove to Wilhelmsen Huayang Ship Service Company; met Neal but not Capt. Bi, and discussed the Asian economy and the JV's business. Then on to LES Shipping Shanghai to see Mr. Zhou Liyu and exchange ideas on crewing and finances, before heading back to Hongqiao.\n\nAngry to hear Xinxin hadn't gone to kindergarten on time — called her twice; she finally agreed to go. Funny and sad at once.",
      },
      {
        id: "2011-11-17",
        date: "Nov 17, 2011",
        weather: "8 °C, rainy in Beijing",
        body:
          "Two days in the office plus a morning invigilating IELTS. Interviewed three DMU job-seekers — two aren't really qualified. Now on the flight from Beijing to Dalian for another business trip.\n\nSat in on Xinxin's evening English class and realised I need to devote more time to her studies. She's a bright girl but needs to revise after class so she can stay at the top, which will build her confidence long-term.\n\nThis Dalian trip: a project meeting, more DMU interviews, a visit to the IT department of Liaoning MSA on business, and — if there's time — meeting a middle-school classmate and his daughter, who's looking for a better major in Dalian. This year has been busy with work and travel across China; the constant movement is starting to feel boring. Last week I nearly lost my suitcase at Hongqiao — perseverance eventually recovered my belongings. Backed up my computer files in the office.",
      },
      {
        id: "2011-12-05",
        date: "Dec 5, 2011",
        weather: "Foggy, −3 °C in Beijing",
        body:
          "On the flight from Beijing to Fuzhou for a business trip to a client whose son is getting married — we intend to attend the ceremony. Probably the first client wedding I've been to in the 19 years since I began working. Last week we moved Xinxin back to Golden Cradle Kindergarten, where she'd been for almost three years — she seems happy to be back. Whatever school makes her happy, we'll do our best. Also travelled to Tianjin to look at the ship-management business — Tianjin isn't a bad place to operate from.\n\nThis week our IT department is chasing two MSA bids. Not easy — the competitors are strong, and more famous IT firms are stepping into this space. We're also holding a summary meeting with the relevant department managers as we prepare for the end-of-year annual meeting.",
      },
      {
        id: "2011-12-06",
        date: "Dec 6, 2011",
        weather: "Foggy in Beijing",
        body:
          "Flight from Fuzhou back to Beijing after the wedding — I think we were very well received by the Fuzhou ship-owner client. Also talked business with Mr. Jianbin about FOC registry and Panamanian matters.",
      },
    ],
  },
  {
    year: "2014",
    entries: [
      {
        id: "2014-06-30",
        date: "Jun 30, 2014",
        body:
          "Got up at 5:30 in Sydney to shower and pack again, and made it to Sydney Airport around 7:15. The Indian handler told me each package could carry about 30 kg, but China Southern told me only 23 — I had to go back and get him to repack, and he charged me more for redoing it. Shit! Cleared passport control and security (the staff were efficient), then wandered the duty-free — the goods were even more expensive than in the supermarket, but I still bought six bottles of wine for a few dignitaries, and grabbed a coffee and a burger. This trip cost me over 2,000 dollars extra — a lot.",
      },
      {
        id: "2014-07-11",
        date: "Jul 11, 2014",
        weather: "Sunny and hot in Beijing, 38 °C",
        body:
          "Home since 30 June from the Australia–New Zealand trip — 11 days in total. Back to work on 1 July, handed out souvenirs to friends and relatives, and briefed seniors and friends. Planned to see Li Daze and Wang Jinhua last weekend and Zhao Guangtao and Li Liqian on Monday.\n\nBut last Saturday I was seriously cut at home by a balcony glass, and the hospital experience turned very bitter. China–Japan Friendship Hospital said they couldn't treat it and sent us to Jishuitan; but the 120 ambulance believed JST had no beds and we had to agree on the Military Hospital, where the checks weren't what I needed. So we taxied to Xiehe, where the doctor said it must be JST after all. We called 999, who repeated the beds story, but we insisted — they took us there. When we arrived JST was reluctant to admit me too, but we pushed until they did. After a three-hour wait for checks and surgery, we finally made it through a horrible 90-minute operation. My legs went numb — I got back to the ward barely conscious.",
      },
    ],
  },
  {
    year: "2015",
    entries: [
      {
        id: "2015-01-24",
        date: "Jan 24, 2015",
        body:
          "On the high-speed train from Shanghai to Beijing — about five hours end to end, my first time on the Shanghai–Beijing express. Fast and stable, though there was a small incident about an hour out of Shanghai. Two busy days in Shanghai: first afternoon at the Vessel Traffic Centre in Pudong, then dinner with Ruining Shipping managers; also handled a PSC inspection matter with Yuhuan port. Next morning we went to China Shipping Shanghai Branch and talked with top management about the possible withdrawal of the four vessels under our management — a fruitful conversation reaching agreement on nearly everything: the debt owed to us, the handover of the four vessels, outstanding spares/stores, and reimbursement for the seafarer who died last year. At the hotel I ran into Chen Zhenghua (retired two-plus years). In the afternoon we called on Shanghai MSA with Mr. Guo and had a very good talk with leaders including Chang Huzhi and Chen Guozhong, playing the Huayang films and briefing them on Beijing IT and the seafarer testing-and-evaluation centre. A very good dinner and plenty of drinks. Woke around 3 a.m., couldn't sleep for a while, up again at 7 to book my train — a fruitful journey. Hoping to travel again next week.",
      },
      {
        id: "2015-07-10",
        date: "Jul 10, 2015",
        weather: "Sunny in Beijing; misty on take-off",
        body:
          "Flight from Beijing to Luoyang with Tina — her first trip to Henan. I'm bringing her because her mother is away and there's no one at home to look after her. Once we arrive we'll visit the Longmen Grottoes and White Horse Temple, and this evening try the local Shuixi water banquet. Tomorrow I'll address the Huayang Seafarer and Manning Manager Seminar — the first time we've held this kind of meeting for the ship-management circle. Next week: sightseeing in Hailar and Manzhouli.\n\nLast weekend we bought Tina a puppy she named Babe — cuter than last year's, and adored by her friends; she's sent it to another family for now. Been anxious about the stock market — bought some shares hoping for a rebound but the market slid sharply and I lost money; yesterday the trend seemed to shift.",
      },
      {
        id: "2015-07-21",
        date: "Jul 21, 2015",
        weather: "Cloudy in Beijing, 30 °C",
        body:
          "Back from five fantastic days in Hulunbuir with Tina.\n\n15 Jul — up at 5:20, taxi to the airport, punctual CA flight to Hailar. Rented a small Kia II from Zhongchang at 320/day, drove north to Jinzhanghan for sightseeing; Tina rode a horse for 20 minutes at 120 yuan, then we played by the river. Back to the city for the Anti-Japan Museum — walked 300 m of the underground bunker; I hurt myself trying to climb the tank with Tina. Noodle lunch at the railway station, then to Long Fang Jiayuan (booked by Qiu Fengcun), returned the rental, hotpot dinner with Qiu's family, an hour around the square, then bed.\n\n16 Jul — met Lai's family at the hotel at 9, refuelled and set off for Ergun. Two hours' drive with a roadside break, then a big Russian-style lunch with barbecue; on to the Wetlands for two hours, then Enhe town for the night — quick dinner, an hour of tricycles with Tina and Brandon, an hour chatting under the sky.\n\n17 Jul — breakfast of local milk, bread and porridge; back through Ergun with photo stops in the birch forest and at Ken River; a 390-yuan lunch (mediocre, unripe watermelon), then ~150 km on to Manzhouli. No petrol stations the whole way — the tank was almost empty when we finally found one in town and squeezed in 5 litres. Met Ma Zongqin and his wife Han Dandan, checked into a good five-room hotel, dinner at a Mongol Nomad restaurant with plenty of drinks and songs; Tina had to visit a hospital for allergies and a stomach problem before we went back to talk more at the hotel.\n\n18 Jul — up at 7 for the National Gate — too many tourists, didn't climb to the top. Barbecue by the lake, which turned out badly polluted and smelly, but Zongqin's enthusiasm carried it. Tina and Brandon stayed in the air-conditioned car. Back downtown, refuelled, dinner, hotel by 11.\n\n19 Jul — washed up, breakfast at the Baize restaurant, flight home; Zhuanche from the airport, then a good sleep. A truly fantastic trip.",
      },
      {
        id: "2015-07-24",
        date: "Jul 24, 2015",
        weather: "Sunny with an evening shower, 31 °C",
        body:
          "Two days in Zhengzhou for the IT framework-contract signing with Henan MSA — warm welcome, banquet at their own kitchen, agreement signed the next morning under their leadership. Home around 6 p.m. via Zhengzhoudong; irritated to find my phone charger missing again — knew White was to blame, but she wouldn't admit it. Found it later in Tina's drawer. This morning talked with Zhang and Xiao from MSA about who should be the Party secretary of HMC — I recommended Guo and Yan. Tomorrow, dinner with Gao Weiguang and Chen Tianhua at a Mongolian restaurant in northern Beijing.",
      },
      {
        id: "2015-11-01",
        date: "Nov 1, 2015",
        weather: "Sunny, 16 °C",
        body:
          "Time really flies. Three months without writing. In those months a big event happened: Mr. Guo left as the boss of our company on 21 October; Wang has taken over. My wife and Tina went to the US for an eight-month study programme. I spent two months uneasy waiting for the results, only to find the new boss isn't quite what some had hoped. Last week I reported on my remit and went with him to Tianjin for inspections; this week I'll go to Shanghai to see clients.",
      },
    ],
  },
  {
    year: "2016",
    entries: [
      {
        id: "2016-02-04",
        date: "Feb 4, 2016",
        weather: "Sunny, 7 °C in daytime",
        body:
          "Last week before Lunar New Year 2016. Spent two days in Weifang and Qingdao on a project, then came back. In the past month I took the IELTS test and scraped a band 6.5 — just meeting the requirement.",
      },
    ],
  },
  {
    year: "2017",
    entries: [
      {
        id: "2017-02-05",
        date: "Feb 5, 2017",
        weather: "Cloudy in Winnipeg, about −16 °C",
        body:
          "On Canada Airlines 029 from Vancouver back to Beijing. Day nine of a Canada trip — spent the whole Lunar New Year here on an exploratory visit and learned a great deal. Winnipeg isn't a large city by world standards, but it has its own advantages. Over the seven days I visited two museums (the Manitoba Museum and the Museum for Human Rights), watched a Monster Jam show, and played some games at a casino.",
      },
      {
        id: "2017-02-28",
        date: "Feb 28, 2017",
        weather: "Sunny in Beijing, about 13 °C",
        body:
          "On the flight from Beijing to Shenzhen — my second business trip after the Lunar New Year. Visiting Shenzhen Pilot Station for IT co-operation and to place an outsourced engineer for their network. Tomorrow, on to Qingdao and Weifang for talks with Shandong Communication Vocational College about IT co-operation, then a visit to Yantai Pilot Station.\n\nOn 12 Feb my colleague Wang Jinhua passed away — apparently by jumping from the roof of her building. It shocked and saddened me deeply. I'm not sure why she chose to end her life in this unimaginable way; many others feel the same. She leaves a lonely daughter, a heart-broken husband, a grieving mother and grandmother. Was it really the confusion over Huayang's decision to buy vessels — a fiasco from the start — that she couldn't escape? Whatever the reason, this will hurt for a long time.\n\nIn the past three days I've met the boss of Tianjin Pilot Centre Mr. Zhao Jidong, Mr. Xiang Hongchuan of Huaneng Group and other business friends to widen our co-operation, and stayed focused on my daughter's studies. Hoping she becomes more self-disciplined and more attentive to her work.",
      },
      {
        id: "2017-03-02",
        date: "Mar 2, 2017",
        weather: "Sunny in Weifang, Shandong, about 13 °C",
        body:
          "On the express train Weifang → Beijing after a three-day tour of Shenzhen and Weifang. In Shenzhen we met Mr. Zhuang and the SPS leaders and talked IT and other matters. Flew to Jinan (my first landing there) and transferred to Weifang. Yesterday afternoon we walked about 10 km around Quenching Square, Baotu Spring Garden and Daming Lake — impressed by the clear, deep springs, worth another visit. Today I went to Shandong Communication Vocational College for a good chat with the deans about their seafarer evaluation centre project. I need to get back to the office tonight to meet people from other organisations tomorrow morning.",
      },
      {
        id: "2017-03-24",
        date: "Mar 24, 2017",
        weather: "Cloudy in Shanghai, occasional rain, about 13 °C",
        body:
          "On flight 1518 Shanghai → Beijing — my first Shanghai trip since Lunar New Year. On Wednesday I flew to Dalian and had breakfast with Zhang Senlin, talking through operations. In Shanghai I visited Shanghai MSA, attended a meeting with the Yiyou Fund Center closing out an IT project, then spoke with Chen Yu, Chen Xiaohua and other cadres including Lu Xilei and Yu Yongquan. Yesterday afternoon I went to Wilhelmsen Huayang for a chat with Michael Chen Xiang and had dinner with a British colleague and other staff, discussing the company's new situation. Driven back to the hotel and straight to bed. Up at 6, 4 km run in the gym, 30-minute swim, breakfast at the Sheraton buffet, exchanged numbers with the booking staff. Left slightly late; the driver took the wrong road to the shipyard so we missed the ceremony and only made the party — met some new ship brokers and shipbuilders. Left at 12:12 for Hongqiao. A busy but fruitful trip.",
      },
      {
        id: "2017-04-11",
        date: "Apr 11, 2017",
        weather: "Windy and sunny in Dalian, about 13 °C",
        body:
          "Flight Beijing → Dalian. I was here two weeks ago; this time we're at Dalian Maritime University for recruitment interviews with IT graduates. I'm a little doubtful about the impact of this trip but want to see the talent for myself. On the 4th I successfully withdrew from the MPNP programme, which had consumed the previous two weeks — plenty of work still ahead. Tomorrow I'll take the fast train to Qinhuangdao for a business visit.",
      },
    ],
  },
  {
    year: "2018",
    entries: [
      {
        id: "2018-03-01",
        date: "Mar 1, 2018",
        weather: "Sunny and warm",
        body:
          "A beautiful season — and the first diary of the year. My mood in the past two months has been at the lowest point of my life. I can hardly believe I'm caught in a so-called corruption scandal, under investigation by the discipline committee. Without anti-depression medicine I might not have made it through the last few days.\n\nHonestly, I have done things that violate our Party's discipline. I have always loathed corrupt officials and businessmen; I never took personal profit or money. To entertain government clients over the last two years I even used my own money — nearly 40,000 yuan last year alone. But some of those clients are greedy and casual, still thinking in the ways of five years ago — luxurious dining, gifts, even small amounts of cash. It has been painful. Business development is the core of my job as a senior manager; without good customer relations, no business — and without business, the company, my colleagues, and I all suffer. I would be looked down on. I would feel ashamed.\n\nAnd yet I know few people will step up to say I was doing this purely for Huayang. Some may even be pleased at my misfortune. What a dangerous world. More audits and other investigations are said to be coming. I'm not sure how long this can last. I have thought of ending myself, but whenever I think of my daughter, my wife, my poor family, and those who love me, I lose my courage. But I cannot go on like this either. God, please help me out.",
      },
      {
        id: "2018-03-03",
        date: "Mar 3, 2018",
        body:
          "On duty for two conferences. Kept checking fortune-teller websites — I don't know why I'm so superstitious about fate. But one's destiny is in one's own hands. I have to work and live confidently and deal with whatever comes. This afternoon I went to Anding Hospital for a mental-health check: nervousness and depression, and I need to take anti-depressants for a while. I agree — I've been in a bad state too long to conquer this without help, however harmful the drugs may be. Working in the office beats brooding at home. May God and my soul bless me.",
      },
      {
        id: "2018-03-05",
        date: "Mar 5, 2018",
        weather: "Sunny and windy",
        body:
          "Physically OK this morning but very sleepy — after a nap my whole body felt uncomfortable. Not sure whether to keep taking the anti-depressants. Learned my elder brother has had a cerebral haemorrhage; devastated — I fear he may share our father's fate. What a hard life that would be, for him and for the whole family. Life is so heavy right now — when will I ever have a relaxed life?",
      },
      {
        id: "2018-03-16",
        date: "Mar 16, 2018",
        weather: "9 °C",
        body:
          "Nearly two weeks of pills and my mind feels better, though I'm still very afraid. Tomorrow I'll go back to Anding Hospital for a review and more medicine. Hope I can pull through and get back to a normal life. The facial trauma also makes me anxious — I'll see the doctor at Xiehe Hospital next week to find out what exactly it is.",
      },
      {
        id: "2018-04-03",
        date: "Apr 3, 2018",
        weather: "Cloudy in Beijing, 17 °C",
        body:
          "Days consumed by smog — worse since Lunar New Year — but wind and cloud today have blown it away. Since the festival I've only travelled to Tianjin for business; I've been in no shape mentally to do more. Being taken off IT duties has released me from a lot of daily work. Next week I plan to go out again to see some very important clients. Tina has been admitted to RUC Attached Chaoyang School, which is a big relief. I've been focusing on teaching her New Concept English so she can sit the CAE exam this June.",
      },
      {
        id: "2018-04-15",
        date: "Apr 15, 2018",
        weather: "Sunny, 20 °C in Beijing",
        body:
          "A very sunny Sunday — a rest day; tutored both Tina and my wife in English. Last Tuesday I had a facial-tumour operation at Xiehe Hospital, staying from Sunday to Wednesday. Didn't sleep at all the first night, but the surgery went smoothly and I've been recovering quickly. Last Thursday I went in to have the drainage tube removed from my mouth; planning to return tomorrow to have the sutures out. Work first tomorrow, then hospital. Happily, I've been recovering spiritually and sleeping more normally.",
      },
      {
        id: "2018-05-22",
        date: "May 22, 2018",
        weather: "Sunny and windy, 26 °C",
        body:
          "This morning I visited RDFZ Chaoyang Branch to cancel Tina's enrolment. It's a well-built school with excellent facilities and sports grounds, but I'm unsure whether we'll get our 34,000-yuan deposit back — I hope so. My wife spent the last month hunting for a good primary/middle school and Tina was lucky enough to be recruited by RDFZ Chaoyang. Now we're weighing whether to stay in Wangjing or move closer to RDFZ. I haven't travelled for work this past month; I've mostly recovered from the depression, though the facial surgery is still healing — I'll go back to Xiehe tomorrow for another check.",
      },
      {
        id: "2018-05-31",
        date: "May 31, 2018",
        weather: "30 °C in Fuzhou, humid and hot",
        body:
          "On the flight Fuzhou → Tianjin. Earlier this week: Monday to Shanghai to see MSA's Mr. Xia Darong and Tao Liangshen of Ruining; 29th to Fuzhou for the HMC new-business seminar; whole-day seminar on the 30th where I opened with a speech and then listened to others on new business. Dinner in the evening at own cost, where I met Xu Zengfu and Huang Danhua of Fujian MSA; Liqian and I then had an hour with Mr. Zhang Baochen. Up at 6:45 for a 45-minute jog by the Minjiang River, shower, pack, met Mr. Zhang in the lobby (also back from a run), and breakfast with Bar Rensong on business. Tianjin office this afternoon for an ISM inspection; home tomorrow afternoon.",
      },
      {
        id: "2018-06-14",
        date: "Jun 14, 2018",
        weather: "30 °C in Beijing and Fuzhou, humid and hot",
        body:
          "Flight Beijing → Fuzhou — second Fuzhou trip in a month. This time to discuss a merger and share-expansion plan with Fuzhou Huayang: junior Wen first, then senior Wen separately. This evening I may also meet my friend Li Endong. In the past week I've decided on Tina's school and where we'll live, and finalised the board-arrangement schedule for Huayang and its invested companies. Also helped Wang Yongxin with their UK visa application.",
      },
      {
        id: "2018-07-23",
        date: "Jul 23, 2018",
        weather: "32 °C in Beijing, humid and hot",
        body:
          "Home yesterday from a GB and Ireland tour with 26 people — mostly seniors and juniors from north-east and west China, six from Wangjing. Generally a good tour, but most hotels were far from the cities, especially the third one where rooms were tiny and mosquito-ridden.\n\nDay 1 (Tue 12 Jul) — landed at Manchester at 6 a.m., waited about an hour for the bus, drove to Stratford-upon-Avon to visit the Shakespeare Centre and the shopping district; grabbed Subway, then three hours at Bicester Village outlets (bought a pair of Levi's and some Itsu food); hotel near Oxford, dinner at a Chinese restaurant.\n\nDay 2 (Fri 13 Jul) — up at 7, off at 8 to Oxford, walked the streets among the very old and crowded buildings…",
      },
    ],
  },
];
