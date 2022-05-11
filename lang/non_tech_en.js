export default async (context, locale) => {
  return await Promise.resolve({
    header: {
      welcome: 'Hello,',
      tellmemore1: 'please tell me more',
      tellmemore2: 'about the',
      company: 'company',
      resp: 'tasks',
      role: 'role',
      stack: 'tools used', // tech stack ->
      renum: 'salary',
      benefits: 'benefits',
      sub1: "Imagine trying to sell someone a car, then immediately asking to see their driver's license and saying that the car is fast and has black tires, but not mentioning the",
      carmake: 'make and model',
      disappointment: '... 🤦‍♀️',
    },
    punctuation: {
      exclamation: '!',
      question: '?',
      fullstop: '.',
      comma: ',',
    },
    chat: {
      recruiter: {
        good_name: 'Holly',
        bad_name: 'Toby',
      },
      recruitee: {
        name: 'Jim',
      },
      bad: {
        recruiter: {
          msgs: {
            msg1: 'Hello! I am looking for people with a skill set similar to yours. Would you like to hear more?',
            ts1: '1:38 PM',
            msg2: 'Sure. The company is pretty big, eco-friendly, and a great place to work at. The job is also really cool. Could you please send me an updated resume of yours, as well as fill out ',
            msg_survey: 'this short 5-minute survey',
            ts2: '1:41 PM',
          },
        },
        recruitee: {
          msgs: {
            msg1: 'Hey, Toby. Sure, could you please provide me with some more details about the opportunity?',
            ts1: '1:39 PM',
            msg2: "I am afraid that these were not really the information I was looking for... also, I have filled out the survey. It wouldn't call it short, though. 😞",
            ts2: '2:10 PM',
          },
        },
      },
      good: {
        recruiter: {
          msgs: {
            msg1_a:
              "Hello! I am looking for people with a skill set similar to yours. Here's",
            msg1_company_website: 'the company website',
            msg1_b: ", and here's the",
            msg1_role_desc: 'role description',
            msg1_c: '. Would you like to talk about it?',
            ts1: '1:38 PM',
            msg2_a: 'Sounds great! Expect a call sometime after',
            msg2_calltime: '3 PM.',
            msg2_b:
              'Also, could you please send me an updated resume of yours?',
            ts2: '1:44 PM',
          },
        },
        recruitee: {
          msgs: {
            msg1: 'Hey, Holly. Sure, this looks good. We can continue here, or would you rather have a call? I am free after',
            msg1_calltime: '3 PM.',
            ts1: '1:43 PM',
            msg2: 'Sure, I attached my resume. Talk to you soon! 😀',
            ts2: '1:45 PM',
          },
        },
      },
    },
    example: {
      bad: {
        header: "❌ Please, don't do this:",
        body: {
          text1:
            "Notice how that interaction could've went much smoother, had Toby went straight to the point?",
          text2:
            'While I do understand you probably have to contact a lot of people just to find that one right candidate, starting out with more information could help you connect with the right person much sooner!',
          list_start: "Please don't take this the wrong way, but asking me to:",
          list1: '❌ send you an updated resume',
          list2: '❌ fill out a survey about my skills and industry knowledge',
          list3:
            "❌ look at a role that's completely different to what I specialize in",
          list4:
            "❌ have 5 years of experience with a tool that's been out for 2 years",
          list5: '❌ stay online while not telling me anything useful (sic!)',
          list_end:
            'without telling me anything specific is not really the most efficient approach.',
          end: "Let's get straight to the point! 🎯",
        },
      },
      good: {
        header: '✅ Try this instead:',
        body: {
          text1:
            "We went from complete strangers to a phone call, and it only took us 5 minutes! What's even cooler, is that both you and I have all the information we need.",
          list_start: 'You were incredibly helpful and have provided me with:',
          list1: '🌐 company name and website',
          list2: '🔧 responsibilities for the role',
          list3: '📄 contract type, location and possibility of remote work',
          list4: '💰 renumeration and benefits',
          list5: '💻 tools used',
          list_end:
            "You might have even went the extra mile and told me something about the company's mission statement and their culture and values.",
          end: "I can't wait to hear what the next step in the process might be! You got me excited! 👏",
        },
      },
    },
    footer: {
      footer_note1:
        "This is only kind of serious, so please don't get angry at the person who sent you here.",
      footer_note2:
        "If you do feel offended, please accept the website author's sincerest apology; it was never their intention to offend anyone.",
      footer_warning:
        "That being said, if you see the URL to this website in someone's bio/profile description, please be prepared to be ignored if you act like Toby.",
      footer_inspiration1: 'Author took a lot (👀) of inspiration from ',
      footer_inspiration_nohello: 'nohello.net',
      footer_inspiration2: 'Avatars taken from ',
      footer_inspiration_office: 'The Office',
      footer_inspiration3: 'Open-source on ',
      footer_inspiration_github: 'Github',
      footer_lang: 'This website is available in:',
      footer_lang_en: 'english',
      footer_lang_pl: 'polish',
      footer_lang_nontech: ', or in a less tech/IT oriented version in:',
    },
  })
}
