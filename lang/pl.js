export default async (context, locale) => {
  return await Promise.resolve({
    header: {
      welcome: 'Hej,',
      tellmemore1: 'powiedz mi więcej',
      tellmemore2: 'o',
      company: 'firmie',
      resp: 'zadaniach',
      role: 'roli',
      stack: 'technologiach',
      renum: 'wynagrodzeniu',
      benefits: 'benefitach',
      sub1: 'Wyobraź sobie, że próbujesz sprzedać komuś auto, mówiąc tylko, że jest szybkie i ma czarne opony. Dodatkowo prosisz przy tym o prawo jazdy, nie wspominając nawet o',
      carmake: 'marce i modelu auta',
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
            msg1: 'Hej! Szukam ludzi o umiejętnościach podobnych do twoich. Czy chciałbyś usłyszeć więcej?',
            ts1: '13:38',
            msg2: 'Oczywiście. Firma jest duża, ekologiczna, oraz jest super miejscem do pracy. Stanowisko też niczego sobie. Czy mógłbyś przesłać mi swoje aktualne CV i wypełnić tę',
            msg_survey: 'krótką 5-minutową ankietę',
            ts2: '13:41',
          },
        },
        recruitee: {
          msgs: {
            msg1: 'Hej, Toby. Jasne, czy mógłbyś powiedzieć mi jednak nieco więcej o tej ofercie?',
            ts1: '13:39',
            msg2: 'Wypełniłem tę ankietę. To nie było 5 minut... 😠',
            ts2: '14:10',
          },
        },
      },
      good: {
        recruiter: {
          msgs: {
            msg1_a:
              'Hej! Szukam ludzi o umiejętnościach podobnych do twoich. Tutaj jest',
            msg1_company_website: 'strona firmy',
            msg1_b: ', a tutaj jest',
            msg1_role_desc: 'opis stanowiska',
            msg1_c: '. Czy chciałbyś o tym porozmawiać?',
            ts1: '13:38',
            msg2_a: 'Brzmi świetnie! Zadzwonię do ciebie po',
            msg2_calltime: '15:00.',
            msg2_b: 'Jeszcze jedno, czy mógłbyś przesłać mi swoje aktualne CV?',
            ts2: '13:44',
          },
        },
        recruitee: {
          msgs: {
            msg1: 'Hej, Holly. Oczywiście, wygląda nieźle. Możemy kontynuować tutaj, albo przez telefon. Jestem wolny po',
            msg1_calltime: '15:00.',
            ts1: '13:43',
            msg2: 'Jasne, załączyłem swoje CV do czatu. Do usłyszenia niebawem! 😀',
            ts2: '13:45',
          },
        },
      },
    },
    example: {
      bad: {
        header: '❌ Proszę, nie rób tego:',
        body: {
          text1:
            'Zauważ, o ile sprawniej mogłaby przebiec ta rozmowa, gdyby Toby przeszedł od razu do sedna.',
          text2:
            'Rozumiem, że prawdopodobnie musisz skontaktować się z ogromną ilością osób, aby znaleźć odpowiedniego kandydata. Rozpoczęcie rozmowy od przekazania najważniejszych informacji mogłoby jednak pomóc ci znaleźć tę osobę dużo szybciej!',
          list_start: 'Proszę, nie zrozum mnie źle, ale proszenie mnie o:',
          list1: '❌ wysłanie aktualnego CV',
          list2:
            '❌ uzupełnienie ankiety nt. mojego doświadczenia i umiejętności',
          list3:
            '❌ przejrzenie oferty na web developera, gdy jestem inżynierem danych',
          list4:
            '❌ posiadanie 5 lat doświadczenia w technologii, która jest na rynku od 2 lat',
          list5:
            '❌ pozostanie online podczas gdy nie mówisz mi niczego konkretnego',
          list_end:
            'bez podawania mi najważniejszych dla mnie informacji nie jest do końca optymalnym podejściem.',
          end: 'Przejdźmy więc od razu do rzeczy! 🎯',
        },
      },
      good: {
        header: '✅ Spróbuj zatem tego:',
        body: {
          text1:
            'W niecałe 5 minut przeszliśmy z całkowicie obcych sobie osób do rozmowy telefonicznej! Co jest jeszcze lepsze - oboje posiadamy informacje potrzebne do przeprowadzenia tej rozmowy.',
          list_start:
            'Dostałem od ciebie wiele przydatnych informacji, takich jak:',
          list1: '🌐 nazwa firmy oraz jej strona internetowa',
          list2: '🔧 obowiązki związane z rolą na którą rekrutujesz',
          list3: '📄 typ kontraktu, lokalizacja, możliwość pracy zdalnej',
          list4: '💰 wynagrodzenie oraz benefity',
          list5: '💻 stos technologiczny',
          list_end:
            'Bardzo możliwe, że dostałem od ciebie nawet informacje na temat wartości, którym kieruje się firma, czy jej misję.',
          end: 'Nie mogę się doczekać, aby usłyszeć o kolejnych krokach w procesie! Dzięki tobie jestem podekscytowany! 👏',
        },
      },
    },
    footer: {
      footer_note1:
        'Proszę, nie traktuj tego zbyt poważnie i nie denerwuj się zbytnio na osobę, która odesłała cię na tę stronę.',
      footer_note2:
        'Jeżeli czujesz się urażony/a, autor strony naprawdę cię przeprasza; nigdy nie miał na celu urażenia kogokolwiek.',
      footer_warning:
        'Pamiętaj jednak, że pisząc jak Toby do kogoś kto ma link do tej strony w swoim bio/statusie, musisz liczyć się z byciem zignorowanym.',
      footer_inspiration1: 'Autor bardzo mocno (👀) inspirował się ',
      footer_inspiration_nohello: 'nohello.net',
      footer_inspiration2: 'Awatary pochodzą z ',
      footer_inspiration_office: 'The Office',
      footer_inspiration3: 'Open-source na ',
      footer_inspiration_github: 'Github',
      footer_lang: 'Strona dostępna jest również po:',
      footer_lang_en: 'angielsku',
      footer_lang_pl: 'polsku',
    },
  })
}
