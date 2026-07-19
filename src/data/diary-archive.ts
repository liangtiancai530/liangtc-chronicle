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
  {
    year: "2019",
    entries: [
      {
        id: "2019-06-16",
        date: "Jun 16, 2019",
        weather: "Cloudy, rainy in the afternoon",
        body:
          "A furious morning. I was angry that Huaite encouraged Tina not to eat what I had cooked in the morning, and I threw away the food she had prepared with the cook. She was so mean and disappointing — I really do not want to continue this marriage at all.",
      },
      {
        id: "2019-08-04",
        date: "Aug 4, 2019 — South Africa & Egypt tour",
        body:
          "A long summer tour with the family. Jul 14 — left for Terminal 3 at 3:30 pm, transited Shenzhen. Jul 15 — landed Johannesburg, flew on to Cape Town; Table Mountain, Signal Hill, Robben Island where Mandela was jailed 28 years. Jul 16 — Cape Point, Simon's Town navy base, penguins at Boulders Beach, Hout Bay's Seal Island (the boat was so bumpy I was frightened), then the cable car up Table Mountain and the old lighthouse.\n\nJul 17 — Malay Colourful Area, Franschhoek by shuttle train, wine tasting at a vineyard; night flight to Johannesburg, Misty Hill Country Hotel. Jul 18 — Sun City, Pilanesberg game drive (elephants, hippos, leopards, buffalo); won 400 rand at the casino. Jul 19 — Voortrekker Monument in Pretoria (highlight of the trip), Union Buildings and Mandela's statue; night flight to Cairo.\n\nJul 20 — Giza pyramids and Sphinx; tried to enter Khufu but too crowded and hot; Egyptian Museum; flew south to Luxor. Jul 21 — Valley of the Kings (too hot to leave the bus), Karnak-era temples, then to Hurghada; swam in the Red Sea and touched real coral for the first time. Jul 22 — glass-bottom boat over the Red Sea. Jul 23 — long drive back to Cairo. Jul 24 — Memphis, statue of Ramesses II, papyrus workshop, then home via a 9-hour flight to Beijing. Goodbye South Africa and Egypt!",
      },
      {
        id: "2019-09-07",
        date: "Sep 7, 2019",
        weather: "Sunny, very hot, 34 °C",
        body:
          "Writing at a Zilihangjian study session with my daughter and Huate. This afternoon, dinner with friends in Yanjiao. Last month, after Egypt, I travelled for business to Yanzhou, Zhoushan, Shanghai, Guangxi and Beihai, visiting two or three new-build or newly delivered ships — good service prospects. Tried but failed to apply for the Beijing scholarship for lack of time to submit materials. September will be busy — receiving the Greek basketball team and other groups — but my focus is on helping Tina prepare for her Nov 2 TOEFL.",
      },
      {
        id: "2019-11-20",
        date: "Nov 20–27, 2019 — Norway & Greece",
        body:
          "Nov 20 — departed midnight for Oslo via Copenhagen and SAS 1462, checked into Quality Hotel 33, then to Wilhelmsen HQ to meet Jon and Steine from Norsea, brief courtesy call on Bjoerge, then a seafood dinner in the harbour with Jan, Geire, Schou and Bjorn in heavy rain. Fined 600 NOK for parking.\n\nNov 21–22 — drove five hours to Kristiansand in rain; met Bjorn at his old-town office and talked three hours about Chinese seafarer crewing, offshore ship repair, Iran business, Batservice group. Moose-meat dinner at the Bjorns' home.\n\nNov 23 — 4 am checkout, flew Kristiansand → Amsterdam via KLM 1206. Half a day in Amsterdam: Dam Square, Parliament, one hour in the Van Gogh Museum (19 €), then the Rijksmuseum, then flew to Athens. Nov 24 — climbed the Acropolis and the Theatre of Dionysos with the old boss Mao, visited the Acropolis Museum (just visited by President Xi ten days earlier), Constitution Square, Parliament. Nov 25 — client visits at BPS and a seaside seafood lunch; COSCO dinner in the evening. Nov 26 — Acropolis, Roman & Greek markets, library, then a lamb barbecue with COSCO. Nov 27 — flew back to Beijing on CA 864, home at 6 am, three hours' sleep, then to the office.",
      },
    ],
  },
  {
    year: "2020",
    entries: [
      {
        id: "2020-04-21",
        date: "Apr 21, 2020",
        weather: "Windy and freezing, ~10 °C",
        body:
          "Almost half a year without a diary — the reason is the coronavirus pandemic, which has locked down almost the whole world. I have not travelled outside Beijing for nearly three months. Since Lunar New Year the virus has escalated in China and then worldwide; more than 160,000 people have died. We have been on a stay-at-home plus office model; next week we return to normal office work.\n\nUnfortunately I have suffered another illness — tinnitus cerebra. Hospital checks also found some blockage in the blood vessels of my brain and neck, so I am on a lot of medicine for cholesterol, prostate and blood-vessel problems. The head ringing gets more serious by the day and I fear it will not be solved quickly. Two years ago at almost the same time I suffered depression, a facial tumour and other issues; surgery and medicine conquered those, and I hope these will be conquered too. The three of us are at least spending more time together; Tina is preparing for SSAT and TOEFL for June or July.",
      },
      {
        id: "2020-04-23",
        date: "Apr 23, 2020",
        weather: "Sunny but windy",
        body:
          "A shadowy year so far. First a loss of about US$3,000 in HSBC wealth management, then some 20,000 more in the crude-oil ETF. But most annoying is the tinnitus cerebra and a return of the depression. Every day I take medicines for cholesterol, vascular blockage and brain ringing. Life feels hard this year — hopefully I recover from the brain ringing soon, it is a very annoying sickness.",
      },
    ],
  },
  {
    year: "2022",
    entries: [
      {
        id: "2022-12-15",
        date: "Dec 15, 2022 · Thursday",
        weather: "−12 °C, sunny in Beijing",
        body:
          "COVID — it has finally reached me. Luckily my wife has not caught it yet, so she takes care of me. The first night was awful: no sleep at all, sharp joint aches, digestion upset. Yesterday I had a 39 °C fever and felt cold under two quilts, but Panadol works well — three tablets made me comfortable enough to hold two online meetings with clients and Tina's counsellors in the US. Today I feel better; temperature down to 37 °C and I can walk outside for a while. Tina starts her Christmas holidays the day after tomorrow — she has been anxious with homework; I told her to stop studying earlier in the evening and sleep sooner.",
      },
      {
        id: "2022-12-19",
        date: "Dec 19, 2022",
        weather: "Sunny but cold, −10 °C",
        body:
          "Sixth day with COVID; feeling better. Yesterday I jogged 5 km in Wenyu Park; today, after a bidding evaluation, another 4.5 km in Yuyuantan Park. Very few tourists — a very different place from the crowded summer scenes I saw three times this year. Tina has arrived in LA for two weeks of Christmas holidays.",
      },
    ],
  },
  {
    year: "2023",
    entries: [
      {
        id: "2023-01-10",
        date: "Jan 10, 2023",
        weather: "Sunny, 10 °C in Beijing",
        body:
          "Group New Year greeting video in the meeting room this morning; then to China-Japan Hospital for an eye check — diagnosed with epipephysitis in the right eye, cause unclear, probably COVID-related. Got eye drops. Last week I was in Tanggu for business — met MSA and Minsheng Leasing clients — but drank several times and worsened my post-COVID state. Thursday I fly to Shanghai and Zhoushan; hopefully less alcohol. I have been swimming in cold water at Dongzhimen since December; another eight-minute swim there today.",
      },
      {
        id: "2023-01-24",
        date: "Jan 24, 2023",
        weather: "Sunny, very cold, −15 °C at night",
        body:
          "Two weeks of travel — Shanghai, Ningbo, Zhoushan, then Pingdingshan for a family reunion with the parents-in-law. Chest pain and shortness of breath keep growing; CT and blood tests find little, but different doctors give different explanations — some say normal post-COVID, others warn of long COVID. I need to slow down. In Pingdingshan I visited Baiguishan Reservoir, the new town, Hilltop Park (beautiful but poorly managed for tourist safety), the pedestrian street and Wanda Square. In Shanghai and Ningbo, met key clients — feedback on our services is positive. Decided to rest at home for a while and recover.",
      },
      {
        id: "2023-02-14",
        date: "Feb 14, 2023",
        weather: "Cloudy, cold, −5 °C",
        body:
          "First full day in the office after Lunar New Year. After the holiday I drank two meals with liquor in Tanggu; chest pain, shortness of breath and violent heart palpitations have lasted more than 30 days. Yesterday afternoon the pain was unbearable and I went to Anzhen Hospital's emergency; nothing serious found. Tomorrow, results of a coronary CTA. If nothing shows up, my only remedy is more rest. Before and after Lunar New Year I toured Shanghai, Ningbo and Zhoushan with Li Liqian and other Huayang managers; then Pingdingshan; then Dalian right after Jan 31, visiting Chunan and Xinfeng, dinners with MSA and DMU cadres. Then Tanggu for three days — inter-division exchange, dinner with staff, interviewing candidates for deputy/assistant deputy GM of the ship-management division. Last Thursday flew to Guangzhou — Guangdong Shipping, Jiaoyin Leasing, Yuedian Shipping; colleagues drank heavily. I swam twice in the hotel's natural- and hot-water pools — fantastic. Also visited the Huanghuagang 72 Martyrs' tombs and Yuexiu Park — Guangzhou has both historic and modern charm.",
      },
      {
        id: "2023-03-06",
        date: "Mar 6, 2023",
        weather: "Smoggy but warm, 21 °C",
        body:
          "In the past month, back at Anzhen Hospital several times; a left coronary artery is 50% blocked, and I was hospitalised for three days. Prescribed a lot of medicine, but Bisulfate and Aspirin bother my stomach/intestines and I stopped them last week. The message is clear: pay more attention to health — some diseases are in my genes, others come from aging and long-term unhealthy habits. Diet and more exercise needed. Also managing long-COVID symptoms — heart still beats faster than normal, cannot exercise long. Severe insomnia last night — asleep near 2 am — but not tired today. Visited Tanggu last week; the Russian clients were fiercely patriotic and sure Russia will win in Ukraine. No alcohol for some time — good, given all the medicine.",
      },
      {
        id: "2023-04-06",
        date: "Apr 6, 2023",
        weather: "Cool and windy, air clean, 18 °C",
        body:
          "Beijing's golden spring — lilac, peony, cherry, begonia, plum all in blossom. Yesterday, Tina, her mother and I walked 6 km in the Old Summer Palace, finding places we had never seen before. This afternoon I fly with Tina to Xiamen for her onward flight to the US, then to Quanzhou (first time) to meet Xingtong Maritime. Saturday I fly to Luoyang for Huayang's annual meeting — several sessions on performance, ship-management trends, IT management; need to prepare speeches. Apr 13 to Yangzhou for a new-build ceremony, then five days of Party School study.",
      },
      {
        id: "2023-05-03",
        date: "May 3, 2023",
        weather: "Warm, windy, 30 °C in Beijing",
        body:
          "Fifth day of the May holidays; slept until 9:30 after returning at 3 am from Shenyang. May 1–2 spent visiting my ailing second uncle-in-law and second auntie, with sightseeing in Shenyang — the Marshal Zhang Xueliang & Zhang Zuolin residence, the outside of the Forbidden City, the 918 Memorial Hall, the North Tomb. My uncle-in-law recovered well after surgery. Food only so-so, sights impressive but very crowded. Met Jiang Kai, a good friend of Wang Lu — no alcohol, which was good.",
      },
      {
        id: "2023-05-16",
        date: "May 16, 2023",
        weather: "Sunny but foggy, 36 °C",
        body:
          "Tested positive for COVID yesterday — very mild. Symptoms confined to throat and nose, no fever. Cautious, given how badly the first infection hit me. Cancelled the Qinhuangdao trip. At home I researched UK university applications through UCAS; not many majors match Tina's plan compared with the US or Canada — UK looks hard. Tomorrow I am meeting guests from Ruining Shipping.",
      },
      {
        id: "2023-06-15",
        date: "Jun 15, 2023",
        weather: "35 °C in Beijing",
        body:
          "Handed over and took over jobs in Huayang. Fortunately I no longer run ship management — a high-risk business — but I take over information technology, a big challenge. No more frequent Tanggu trips for safety oversight. Hope to be less nervous with work and focus more on my health. Tina has been home for weeks preparing for her SAT next week.",
      },
      {
        id: "2023-08-11",
        date: "Aug 11, 2023",
        weather: "35 °C, in Beijing",
        body:
          "Saturday in the office with Tina, both working on SAT practice and other tasks. Tina has been preparing for the Aug 26 SAT for about 20 days; the practice seems to be working. Twelve days until she leaves for the US again. Early August brought roughly 400 mm of rain in Beijing — unprecedented; hundreds died. Similar disaster in Maui, where the whole city was flattened by fire. Climate change is moving at unprecedented speed. My new remit — HR, new marketing business and IT — is new to me and I am adjusting.",
      },
      {
        id: "2023-09-17",
        date: "Sep 17, 2023",
        body:
          "Long time since I wrote. Last week — Tianjin and Jinan for two meetings; the Jinan session was wonderful — learned about blockchain and how it might be used in seafaring software. Sightseeing in Jinan: Baotu Spring, Jiefangge, Daminghu — unique scenery, beautiful weather; wanted to swim in a spring but missed the timing. Tina scored 1510 on SAT on Aug 26 — not so good, not so bad. She will take another one for trial. This is application season; hope for good results in the long run.",
      },
      {
        id: "2023-11-05",
        date: "Nov 5, 2023 · Sunday — Hong Kong & Singapore",
        weather: "Hot & sunny in Singapore, 34 °C; cold & cloudy in Beijing, 10 °C",
        body:
          "Flew Singapore → Beijing today after a seven-day trip.\n\nDay 1 (Oct 30) — Beijing → Hong Kong; Wen and Zhou met me and we drove to Royal Garden Hotel in Kowloon, near the office and facing HK Island. Visited HK University in the afternoon — Tina not qualified for business majors. Seafood buffet dinner with the four staff; but limited by post-COVID appetite. Felt dizzy that afternoon.\n\nDay 2 (Oct 31) — morning run along the coast to Kowloon Park; signed BOC HK documents at the office; long chat with Wen on the business. Afternoon at CUHK — big, beautiful campus; asked a young teacher through a fence window about admissions — Tina may qualify for some majors. HK Poly wouldn't let outsiders in; back to hotel for dinner, sauna on the 17th floor.\n\nDay 3 (Nov 1) — one-hour subway + bus 11 to HKUST; met a Chinese visiting scholar who guided me to admissions — a helpful young officer, Tina seems to qualify. Back to hotel, then with Wen and Zhou to HK Marine Department for a two-hour meeting with Mr Wang and Mr Zhou. Seafood dinner opposite the hotel with old friend Qiu Wei.\n\nDay 4 (Nov 2) — 6 am checkout, SQ899 HK → Singapore, ~3 hours; Wang Yaoting met me and we drove to PARKROYAL on Beach Road. Visited the office, then NUS — I was not surprised to hear NUS requires five APs. Hotpot dinner with Wang (too hot, no alcohol); night walk to Marina Bay and to the WWII memorial with four pillars for the four peoples of Singapore.\n\nDay 5 (Nov 3) — morning run near the Istana; taxi to the Wilhelmsen office to meet Jamie — chatted about the four years since, and the business competition we had. Then Singapore Management University with Wang — admission office manned by two students who answered many questions.\n\nHome now — dinners along the way and a lot learned about our clients' overseas offices and about the schools Tina might attend.",
      },
    ],
  },
  {
    year: "2024",
    entries: [
      {
        id: "2024-01-24",
        date: "Jan 24, 2024",
        weather: "Sunny but cold, −1 °C",
        body:
          "Cold ten days last December. Tina came home for 17 days and left last Tuesday. Busy with HK and Singapore university applications, but the agent has been slow — pushing them to speed up. Dinner this afternoon with four doctorate mates — Shijun, Zhouyi, Yang Haijun. Tomorrow, dinner with old superiors like Zhang Baochen and Shi Shiwu. Left leg is hurt so no river swimming lately.",
      },
      {
        id: "2024-01-29",
        date: "Jan 29, 2024",
        weather: "Sunny but cold, 3 °C",
        body:
          "Recent two weeks — Tianjin and Zhoushan for MSA talks (tug boats and other cooperation); then Shanghai Jan 18–21 for a Wilhelmsen board meeting with Jamie, a visit to Shanghai MSA Haiping on MSA pre-inspection cooperation, and a visit to an AI company called Chato that introduced me to AI applications in office and company work. Last week to Xiamen — MSA officials and cooperation talks, plus Jimei University's navigation and engineering schools. Winter swimming three times in Dongzhi and Xizhi — better sleep and relaxation. Good news: UIUC business school admitted Tina — a face-saving result. Now on to Singapore applications.",
      },
      {
        id: "2024-02-08",
        date: "Feb 8, 2024",
        weather: "Sunny in Beijing, 6 °C",
        body:
          "Writing before I catch the train to Pingdingshan — the last office day before Lunar New Year. Looking back at 2023: overall better as it went on. Early in the year I was consumed by post-COVID chest pain and coronary blockage; the second half was calmer as symptoms faded. Long-time issues remain — frequent urination, poor sleep. Hoping 2024 is good for all of us — a good university for Tina, and better health for the family.",
      },
      {
        id: "2024-02-16",
        date: "Feb 16, 2024",
        weather: "Sunny in Beijing, 10 °C",
        body:
          "This morning news: HK Poly admitted Tina — but we had to decline (only two days to pay the deposit). Noon drive to the Railway Museum with dozens of trains from different Chinese and world eras.\n\nRecap of the last seven days: Feb 8, started the 11-day Lunar New Year holiday, morning train to Pingdingshan; drove straight to Baiguishan Reservoir dam — tried to swim, went to the wrong place. Feb 9 (New Year's Eve), climbed Pingdingshan Hill and made it to the top for the first time since long COVID — a real sign of recovery; in the afternoon Zhang and I found the right swimming spot at the reservoir and I swam three times and ran 2 km. Feb 10 (first day of Lunar 2024), walked the old town, drove to Yongcheng Square, ran 2 km. Feb 11, express train back to Beijing; brief swim at Dongzhimen — wonderful. Feb 12, Duolingo and the Summer Palace, where the river water was clear to the bottom — swam 2 minutes, dived twice, then ran 6 km with big crowds. Feb 15, Yao Guohui and his family visited for lunch; afternoon at Heiqiao Park, 5 km run, then the Cinema Museum for the film 热辣滚烫 by Jialing — a huge success that reminds people that if you try your best, you may make it. Feb 16, HK Poly admission, Railway Museum, and Tongzhimen winter swim — fantastic.",
      },
      {
        id: "2024-03-23",
        date: "Mar 23, 2024",
        weather: "Cloudy in Beijing, 20 °C",
        body:
          "Saturday spring outing at the Xiaobeihe park with Tina and her mother. Tina has been home since Mar 15 and returns to the US in 8 days. Several offers arrived — Toronto, UC, UIUC as expected — but most others waitlists or declines. US application looks done; HK may still yield something. Dinner with Guo Chi and Yan discussing Canada schooling, which I think would be a good long-term choice. Last week — Anhui and Henan for two meetings; good to travel and enjoy different food and scenery in spring.",
      },
      {
        id: "2024-06-05",
        date: "Jun 5–11, 2024 — Pittsburgh trip to pick Tina up",
        body:
          "Jun 5 — Beijing → Tokyo Haneda by Air China at 8 am, half an hour at 都立芝公园 near Tokyo Tower with Jackie (last time Tina and I climbed to the top), fantastic Japanese dinner at the airport, then 11-hour United flight to Chicago O'Hare T5, transferred via T1 with rest in the ANA lounge, on to Pittsburgh at 9 pm, Hertz car by 10, Airbnb near Highland Park by midnight.\n\nJun 6 — Tina toured me around Shady Side Academy; good teaching and sports facilities, poor dorms. Squirrel Hill Chinese lunch, Giant Eagle groceries.\n\nJun 7 — early to school to pack Tina's luggage; ran a lap around SSA — so many good sports grounds. Drove to North Park; 2 km lakeside walk with Tina; lunch with Ms Schneider in the Market District to thank her for three years of care; drove past Wexford Allegheny where Tina and her mum lived 8 months; more Giant Eagle, then dinner at Jinny's; back to hotel, 3 km in Highland Park, white wine to rest.\n\nJun 8 — picked up Amber's mother at 8 am; graduation ceremony at 9; met the principal; back to dorm to pack, left school at 2, Squirrel Hill four-dish Chinese lunch.\n\nJun 9 — Highland Park run, breakfast for the kids, Costco with Amber and her mother.\n\nJun 10 — Heinz Museum in downtown Pittsburgh with Amber; Cranberry Costco, pizza; brief stop at Jinny's; refuelled — $56 — for the airport run.\n\nJun 11 — 4 am to Pittsburgh Airport, return car, Dallas layover, on to Shanghai; landed 2:30 pm, Ocean Hotel check-in.",
      },
      {
        id: "2024-09-09",
        date: "Sep 9, 2024",
        weather: "Cloudy and rainy in Beijing, 25 °C",
        body:
          "Summer gone quickly; autumn already. This summer I travelled to Dalian, Yantai, Shanghai, Zhoushan, Ningbo, Tanggu, Jining in Shandong, Yanjiao in Hebei and elsewhere. My portfolio has shifted — I now oversee SCT innovation business and Zhoushan affairs. We successfully won the HK-flag vessel inspection bid. Organised two weeks of cadre training including 3rd-Plenum self-study for more than 100 HY managers; I addressed the learners. My father-in-law has been diagnosed with possible lung cancer — the family is worried; he will have exams at Beijing Xiehe Hospital soon. Next up: meeting Changjiu Logistics on the joint venture.",
      },
      {
        id: "2024-11-02",
        date: "Nov 2, 2024",
        weather: "Smoggy in Beijing, 17 °C",
        body:
          "Three weeks travelling Henan, Zhejiang and Guangdong. Oct 13–22: train to Huayang's Luoyang base for a consultation meeting with 9 retired MSA guests on Huayang's development strategy; two days of meetings and a visit to the Yellow River and Xiaolangdi Dam, then downtown sightseeing at Longmen and elsewhere. Flew to Zhoushan for a petroleum-industry meeting; then Ningbo to meet MSA officials Yang and Wang. Saturday — trained to Shaoxing (a city of my dreams): Lu Xun's former residence, Shenyuan, Zhou Enlai's ancestral home, local food; back to Ningbo. Sunday — Zhoushan again with Liu, meeting some 20 people and scouting staff housing and a spares warehouse. Back to Beijing Oct 22. Three quiet days in the office; my wife had a serious anal operation and I stayed with her on the weekend.",
      },
    ],
  },
  {
    year: "2025",
    entries: [
      {
        id: "2025-01-27",
        date: "Jan 27, 2025",
        weather: "Sunny but very cold, 0 °C in Beijing",
        body:
          "Long time since my last diary in November. One day before Lunar New Year, at home resting. Yesterday dinner at Tazi's home and a swim in Dongzhimen. This break is the longest in Huayang for many years — 12 days. Before the holiday: Shanghai, Changchun (bidding evaluation) and Zhoushan for business. Tina relaxed at home almost three weeks after four tense months at WashU and returned two weeks ago — so we won't be together for Chunjie, the most important festival for Chinese. Feng's family may come here any time — but each time I want to invite my relatives she opposes it. A tense workload ahead in 2025; hoping for a smooth and peaceful year for me, the company and everyone.",
      },
      {
        id: "2025-01-29",
        date: "Jan 29–30, 2025 — Changsha journey",
        body:
          "Jan 29 — arrived Changsha on CA1373, crisp 5 °C, overcast. Line 6 to Line 2, off at Rongwan Town Exit 3, into the modest Tongcheng Lushan Hotel (¥339). Drawn to Yuelu Mountain 500 m away; even at night crowds were climbing, so I joined — 3 km of winding paths to the summit at 330 m, where the Changsha TV Tower stood over shimmering city lights. Down the main path, 2 km jog through the East Gate to Dongfanghong Square, Hunan University and Yuelu Academy, then Line 4 home by 9 pm.\n\nJan 30 — Orange Isle (had grabbed a ticket the day before): shuttle bus south to the inscription of Mao's poem 'Qinyuan Spring: Changsha', through Plum and Bamboo Gardens to the young-Mao statue at the southern tip. Walked 1 km on the west, cycled the northern beaches and amphibious area. Back on Line 2 to Wuyi Square, walked to Jia Yi's former residence, then Taiping Street and Pozi Street — spicy duck and stinky tofu too fiery for me. Cycled to Hunan Normal University, Hunan University and Yuelu Academy (closed — disappointment). West Lake Park by bike, 5 km loop. Back near the hotel, a beer and stinky tofu at KFC — too spicy. Lines 2 and 6 to the airport; flight home on points (¥140), arrived 11:30 pm, applied erythromycin to irritated eyes and slept dreaming of Changsha. Two-day cost: ~¥629.",
      },
      {
        id: "2025-03-23",
        date: "Mar 23, 2025",
        weather: "Sunny and hot, 28 °C (abnormal)",
        body:
          "Six weeks since Lunar New Year — six trips outside Beijing: Zhoushan (twice), Ningbo, Qingdao, Tianjin/Tanggu, Shanghai, Taizhou in Jiangsu — business visits and meetings with MSA Zhejiang and Ningbo among others. More travel ahead this year. Knees and sacrum have been aching, probably from Jingshi gym exercise, but I keep on. Cold-water swimming continues — more than 20 times in Dongzhi and Xizhimen in the past two months — good for health, but weight up by 2 kg, so I have to cut from three meals to two. Still learning Spanish and French — similar, and probably good for the brain. Sightseeing: West Lake, Xixi Wetland — places I have visited before.",
      },
      {
        id: "2025-09-07",
        date: "Sep 7, 2025 · Sunday",
        weather: "Sunny, 30 °C",
        body:
          "No diary for almost half a year. Drove to Sunhe Open Market for fruit and vegetables — first time. Dinner with Long Qixun from Yantai tonight. Last week — Zhoushan, Ningbo, Shanghai for Bao Rensong's retirement, a Zhoushan firm-development forum and other visits. Half-year recap: several trips outside Beijing, a hometown visit with old relatives, but the main things were a month at Party School and time with Tina. Sightseeing: Taizhou, Tiantai Mountain in Tiantai, Luoyang and Zhengzhou in detail for the first time, Naiman in Tongliao. No trips abroad. Tina was home over 100 days this summer — the longest since she went to the US four years ago. She did a software-engineer probation at our company, took the Spanish DELE exam and visited Korea and my hometown. We quarreled about her late nights and lax study — hard for her to change habits, hard for me to change mine.",
      },
      {
        id: "2025-10-01",
        date: "Oct 1, 2025 · Wednesday",
        weather: "Sunny, 26 °C",
        body:
          "First of the 8-day National Holiday. Returned last night from Zhejiang — visited Zhejiang MSA, Liuheng Island and Zhoushan on seafarer issues; several deals in prospect. Last Tuesday to Zhangjiakou for another military-camp bidding. The company's fate is increasingly uncertain — we've been asked for different scenarios on whether we'll remain in MOT. Waist, knees and legs have been in pain, so I've stopped running for now — I have to accept I am older and cannot keep up long-distance running or overly aggressive activity.",
      },
      {
        id: "2025-10-28",
        date: "Oct 28, 2025 · Yanjiao Party School",
        weather: "Smoggy, 16 °C",
        body:
          "Started Belt-and-Road diplomacy studies in Yanjiao — second time here this year; last was a month in June. A good way to meet more people. Last work-week in Zhoushan and Zhejiang — keynote at the Zhoushan Petro Dealer Meeting calling for developing Zhoushan's seafarer sector; visited Liuheng Island to discuss the Seafarer Home project for international and domestic crew during dry-docking (an MOT initiative). Also visits to two companies to promote HMC products. Next week — Shanghai for a UK-night event and Liu Changqing on the power-saving project; Wednesday, a meeting on new-product promotion collaboration.",
      },
      {
        id: "2025-11-22",
        date: "Nov 22, 2025",
        weather: "Warm and sunny, 15 °C",
        body:
          "Down with the flu for several days — throat and nose pain, no sneezes. Last week I had another coronary angiogram (did one two years ago); vessels are in sound shape — even improved. As I age, colossal diseases appear step by step. Next week — booked gastroenteroscopy; if that's clear I may keep taking aspirin for blood viscosity. Then Guangzhou and Shenzhen for two days before the surgery. Tina did well in a campus show performance.",
      },
      {
        id: "2025-12-25",
        date: "Dec 25, 2025",
        weather: "Sunny but cold, −8 °C at night, 2 °C in the day",
        body:
          "Christmas in cold days. Tina came home last week but is busy socialising with classmates — perhaps all adult children grow more alienated from their parents. What worries me most is her schoolwork and grades. Huayang has to lower salaries under new regulations; I've been busy preparing the year-end salary and bonus distribution. Swum several times since November but it doesn't feel the same as in the past three years — my back pain may be a factor.",
      },
    ],
  },
  {
    year: "2026",
    entries: [
      {
        id: "2026-01-01",
        date: "Jan 1, 2026",
        weather: "Warm and sunny, 3 °C",
        body:
          "The last two or three weeks have been full of year-end evaluations and salary/bonus distribution. New MOT and WTI requirements limit total salary and bonus for state-owned businesses; we secured the bonus but below expectation. Tina came home two weeks ago but seems fully relaxed — parties and gatherings with classmates; I rarely see her study. Slept poorly last night — up three times to the toilet. This morning I proofread for Feng, sent Tina to Xizhimen for dancing, then swam two minutes there (~3 °C) with other winter swimmers. Back to the office for two hours, picked Tina up with Wang Jinyi, cooked at home, then an hour of physical exercise at Jingshi (closed at 8 for the holiday).",
      },
      {
        id: "2026-01-12",
        date: "Jan 12, 2026 — Dalian",
        weather: "Cold and windy",
        body:
          "Right after Tina left for WashU I flew to Dalian for three days — first time in several months. Tina was kind before leaving, asking for the cash she needs for accommodation and food. On the plane a Japanese mother and daughter chatted a lot — complaining about the new Japanese PM (Takaichi), and about Taiwanese and Shanghainese pushing Tokyo real-estate prices up; I helped her with luggage at Dalian airport and she thanked me warmly. Met good friends in Dalian — Liu Li, Zhao Baogang and others — dinner, chat and cards. Today, met Li Daze at the hotel. Tomorrow — Dalian Maritime University cadres on the power-saving business.",
      },
      {
        id: "2026-02-01",
        date: "Feb 1, 2026 · Sunday",
        weather: "Warm, 10 °C",
        body:
          "Swam about 90 seconds in Tongzhimen and dived once. Waist pain has kept me from doing much winter swimming; morning acupuncture at the clinic. Recent travel: Zhoushan to learn more about the Crew Home construction and meet local MSA officials in Liuheng; Jan 20–23 in Shanghai with Li Liqian to meet Jamie's guests and the Shanghai Huayang team on JV and sales matters — dinners with Mr Xu, Mr Guo and other dignitaries. Jan 26–29 in Ningbo and Hangzhou with Mr Zhu Jianhua and Li Liqian, meeting Ningbo and Zhejiang MSA officials; then Tianjin to meet Sun Wenchang and Gang Zijun — good meetings. Several more meetings and discussions next week.",
      },
      {
        id: "2026-02-25",
        date: "Feb 25, 2026",
        weather: "Cloudy, windy, 8 °C",
        body:
          "Lunar New Year is over and 2026 has really begun. During the holidays (Feb 14–18) I toured Nha Trang, Vietnam, for six days with nine other Chinese travellers. The warmth made my waist pain quickly disappear, but the city's motor traffic and bad traffic lights make walking dangerous, and the coastline is especially unsafe — the safety awareness is low. Enjoyed the arranged programme plus dinners in a starred hotel and free walks on the streets. Vietnam is poor — big groups squeezed into tiny rooms for lunch, and in the suburbs people live in poor houses. I bought coffee and fried mango chips to support locals. A worthwhile trip — didn't spend too much, and enjoyed good seats and rest on the flights. Lunch today with Lu Xiaofeng — a good chat about many years past. Back to work now with real challenges ahead for 2026.",
      },
      {
        id: "2026-07-18",
        date: "Jul 18–22, 2026 — Yangzhou business trip",
        body:
          "Jul 18 (Fri) — 11 pm Air China flight from Beijing Daxing to Yangzhou; checked into Jinling Grand Hotel and slept.\n\nJul 19 (Sat) — 8 am, 5 km on an electric scooter to Slender West Lake along the Grand Canal; entered South Gate, sightseeing and jogging out the West Gate then up to the central northern area and out the North Gate; taxi back. 10:30 met Yin Xiumeng and the Yinghai Technology team to discuss a supply-chain platform for the alliance — productive; drafted a meeting summary; asked them to deepen requirements with Tianjin Ship Management the following week. Lunch at the hotel with newly arrived guests; afternoon at the conference venue preparing my speech. Evening — hosted a dinner table for foreign guests including the GMs of Bernhard Schulte and Wilhelmsen Ship Management, PHIPPS, Chen Xiang and others.\n\nJul 20 (Sun) — ship-management forum in the morning, buffet lunch; delivered my speech at 4 pm, then dinner with guests. Later, taxi to Dongguan Street — Geyuan Garden already closed for ticket sales, so walked west-to-east along the Grand Canal, bought medicine, and reached Jiang Zemin's former residence (also closed) — decided to return the next morning.\n\nJul 21 (Mon) — 8 am taxi to Heyuan Garden; motorbike taxi to Zhu Ziqing's former residence, where a young student guide told stories of his life and major works; walked 700 m to Comrade Jiang Zemin's former residence — his remarkable life and Yangzhou ties; 200 m more to Geyuan Garden — history and the bamboo grove, out the North Gate; taxi to Emperor Yang Guang's tomb site and the Yang Guang Museum; back to the hotel for lunch with guests, checked out, high-speed train from Zhenjiang South, home in Beijing at 7 pm; Jingshi gym by 8 and slept soundly.\n\nJul 22 (Tue) — rest, exercise and a visit to Tianzi's family to see Dudu.",
      },
    ],
  },
];
