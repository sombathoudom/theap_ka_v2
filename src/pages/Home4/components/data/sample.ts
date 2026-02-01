import { format, parseISO } from "date-fns";
import { km } from "date-fns/locale";
import { toKhmerNumeral } from "../../../../utils/validation";
import { TimeLineItem } from "../TimeLine";
import { Calendar } from "lucide-react";
export type InvType = typeof INVSAMPE;
export type Lang = "en" | "kh";
export const INVSAMPE = {
  parents: {
    kh: [
      {
        name1: {
          label: "លោក",
          value: "ហាយ សៀងហៃ",
        },
        name2: {
          label: "លោកស្រី",
          value: "អ៊ូច សាវឿន",
        },
      },
      {
        name1: {
          label: "លោក",
          value: "ចក់ ធឿន",
        },
        name2: {
          label: "លោកស្រី",
          value: "លី ម៉ាលីន",
        },
      },
    ],
    en: [
      {
        name1: {
          label: "Mr",
          value: "HOY SIENGHAI",
        },
        name2: {
          label: "Mrs",
          value: "OUCH SAVOEUN",
        },
      },
      {
        name1: {
          label: "Mr",
          value: "CHAK THUEN",
        },
        name2: {
          label: "Mrs",
          value: "LY MALIN",
        },
      },
    ],
  },
  header: {
    kh: {
      main: "សិរីមង្គលអាពាហ៍ពិពាហ៍",
      title: "យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ",
      desc: `ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងភ្ញៀវកិតិ្តយសដ៏ខ្ពង់ខ្ពស់ក្នុង <strong class="text-sm text-primary">ពិធីរៀបអាពាហ៍ពិពាហ៍</strong> កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ`,
    },
    en: {
      main: "The Wedding Invitation",
      title: "",
      desc: `Cordially Request the hornor of Your Presence of the Auspicious Occasion of the Wedding Reception of Our Children`,
    },
  },
  map: {
    desc: `កម្មវិធីប្រព្រឹត្តទៅនៅថ្ងៃ
          <b class="text-sm text-primary moul-regular">
            អាទិត្យ ៦កើត ខែផល្គុន ឆ្នាំម្សាញ់ សប្ដស័ក ព.ស ២៥៦៩
          </b>
          ត្រូវនឹង
          <b className="text-sm text-primary moul-regular">
            ${toKhmerNumeral(
              format(
                parseISO("2026-02-22T05:00:00"),
                "ថ្ងៃទី dd ខែ MMMM ឆ្នាំ yyyy វេលាម៉ោង HH:mm ល្ងាច",
                {
                  locale: km,
                },
              ),
            )}
          </b>
          ស្ថិតនៅ
          <b class="text-sm text-primary moul-regular">
            ទីស្នាក់ការគណបក្សប្រជាជនកម្ពុជា(ខណ្ឌដង្កោ) សង្កាត់ដង្កោ ខណ្ឌដង្កោ
            រាជធានីភ្នំពេញ
          </b>
          ដោយមេត្រីភាព។`,
  },
  couple: {
    kh: {
      name1: {
        label: "កូនប្រុសនាម",
        value: "ឆេង សម្បត្តិឧត្តម",
      },
      name2: {
        label: "កូនស្រីនាម",
        value: "គង់ លីណា",
      },
    },
    en: {
      name1: {
        label: "Groom",
        value: "CHHENG SOMBATHOUDOM",
      },
      name2: {
        label: "Bride",
        value: "KONG LYNA",
      },
    },
  },
  date: "2026-02-22T17:00:00",
};

export const TIMELINE: TimeLineItem[] = [
  {
    title: "វេលាម៉ោង ​១៣:៥០ រសៀល",
    subtitle: "ជួបជុំភ្ញៀវកិត្តិយសទាំងអស់ដើម្បីរៀបចំកិច្ចក្រុងពាលី",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​១៤:០០ រសៀល",
    subtitle: "ពិធីសែនក្រុងពាលី",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​១៥:០០ រសៀល",
    subtitle: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​១៦:០០ រសៀល",
    subtitle: "ពិធីសែនព្រេនជីដូន ជីតា គួចចំណងដៃតូច​ ជុំពេលានិងចាវខាន់ស្លា",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​១៦:៥០ រសៀល",
    subtitle: "អញ្ជើញភ្ញៀវកិត្តិយសទទួលទានអាហារពេលល្ងាច",
    icon: Calendar,
  },
];

export const TIMELINE_SECOND: TimeLineItem[] = [
  {
    title: "វេលាម៉ោង ០៦:៣០ ព្រឹក",
    subtitle: "ជួបជុំភ្ញៀវកិត្តិយសទាំងអស់ដើម្បីរៀបចំពិធីហែជំនួន",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​០៧:០០ ព្រឹក",
    subtitle:
      "ពិធីហែរជំនូន និយាយជើងការ ទទួលទានស្លាកំណត់ ពិធីច្រៀងរៀបរាប់ផ្លែឈើតូច ឬ ភ្ជាប់ព្រលឹងទាំង១៩ ព្រេនឬសែនជំនូន" +
      "<br/>" +
      "អញ្ជើញភ្ញៀវកិត្តិយសទទួលទានអាហារពេលព្រឹក",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​០៨:៣០ ព្រឹក",
    subtitle: "ពិធីកាត់សក់បង្កក់សេរី",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​១០:១៥ ព្រឹក",
    subtitle: "ពិធីសំពះពេលា",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​១០:២៥​ ព្រឹក",
    subtitle:
      "ពិធីបើកវាំងនន ដកដាវបើកទាប <br/> ពិធីសំពះផ្ទឹមចងដៃ ព្រះថោងតោងស្បៃនាងនាគ",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​១២:០០ រសៀល",
    subtitle: "អញ្ជើញភ្ញៀវកិត្តិយសទទួលទានអាហារថ្ងៃត្រង់",
    icon: Calendar,
  },
  {
    title: "វេលាម៉ោង ​០៥:០០ ល្ងាច",
    subtitle: "អញ្ជើញភ្ញៀវកិត្តិយសទទួលទានអាហារពេលល្ងាច",
    icon: Calendar,
  },
];

export const items: {
  id: string;
  img: string;
  height: number;
  orientation: "vertical" | "horizontal";
}[] = [
  {
    id: "1",
    img: "/pre_wedding_img/IMG_2728.webp",
    height: 1,
    orientation: "vertical",
  },
  {
    id: "2",
    img: "/pre_wedding_img/IMG_2742.webp",
    height: 400,
    orientation: "vertical",
  },
  {
    id: "3",
    img: "/pre_wedding_img/IMG_2751.webp",
    height: 600,
    orientation: "horizontal",
  },
  {
    id: "4",
    img: "/pre_wedding_img/IMG_2768.webp",
    height: 300,
    orientation: "vertical",
  },
  {
    id: "6",
    img: "/pre_wedding_img/IMG_2783.webp",
    height: 600,
    orientation: "vertical",
  },
  {
    id: "5",
    img: "/pre_wedding_img/IMG_2782.webp",
    height: 500,
    orientation: "horizontal",
  },
];

const newLocal = {
  cmku7nkd40004356o6orh5igg: {
    name: "លោក ចាំង សុវណ្ណរិទ្ធីឌីរតនះ​ និងភរិយា (កុលាប)",
  },
  cmku95kam0005356ozks3es11: {
    name: "Ms. Heng SreyNeth and Honey ( ផ្កាម្លិះ )",
  },
  cmku9bh9q0006356o0beic8hf: {
    name: "Ms. Keo Vimean ( ផ្កាម្លិះ )",
  },
  cmku9c0gu0007356os8geyscp: {
    name: "Ms. Mao Lyly ( ផ្កាម្លិះ )",
  },
  cmkvi5ear0001356lrxm2ilpn: {
    name: "Mr. Heng Bunna ( ផ្កាចំប៉ី )",
  },
  cml3wsi37000004jsdge74td1: {
    name: "បងស្រី Em and Fiance ( ផ្កាឈូក )",
  },
  cml3wtknc000104jsav40acrj: {
    name: "បងស្រី Sous Siev Huy ( ផ្កាឈូក )",
  },
  cml3wu9t7000004l7e2oy4o7h: {
    name: "បងប្រុស Sous Senghong and Honey ( ផ្កាឈូក )",
  },
  cml3wv027000104l73hn53d3g: {
    name: "Tufy and Honey ( ផ្កាឈូក )",
  },
  cml3wv6sk000204l79l0p0rlt: {
    name: "Vannak ( ផ្កាឈូក )",
  },
  cml3wvx57000304l77sh2estp: {
    name: "Tino ( ផ្កាឈូក )",
  },
  cml3ww3kc000404l7ce2na586: {
    name: "Ms. Thida ( ផ្កាឈូក )",
  },
  cml3wy598000504l733eegx7i: {
    name: "Ms. ទេព​ សុម៉ាលីណា ( ផ្កាម្លិះ )",
  },
  cml3wyc09000604l79g5x3cxh: {
    name: "Ms. មំុ សុីឌីរ៉េត ( ផ្កាម្លិះ )",
  },
  cml3wzc5x000704l72ecybcvw: {
    name: "Ms. សៀន លក្ខិណា ( ផ្កាម្លិះ )",
  },
  cml3wzgi0000804l728hv3vhh: {
    name: "Ms. Mei Yu ( ផ្កាម្លិះ )",
  },
  cml3x0a100001804l9r0k1a1: {
    name: "Mr. Mor ( ផ្កាម្លិះ )",
  },
  cml3x0a100021804l3n5q7b2: {
    name: "Mr. Lan ( ផ្កាម្លិះ )",
  },
  cml3x0a100031804lq8f9c3: {
    name: "Mr. Nith ( ផ្កាម្លិះ )",
  },
  cml3x0a100041804l1k2d4e: {
    name: "Mr. Ty ( ផ្កាម្លិះ )",
  },
  cml3x0a100041804l1k2d4o: {
    name: "Mr. Denn ( ផ្កាម្លិះ )",
  },
  cml3x0a100051804l5m6f7g: {
    name: "Mr. Munea ( ផ្កាម្លិះ )",
  },
  cml3x0a100061804l8h9i0j: {
    name: "Mr. Za ( ផ្កាម្លិះ )",
  },
  cml3x0a100071804l2k3l4m: {
    name: "Mr. Sena ( ផ្កាម្លិះ )",
  },
  cml3x0a100081804l6n7o8p: {
    name: "Mr. Dom ( ផ្កាម្លិះ )",
  },
  cml3x0a100091804l9q0r1s: {
    name: "Mr. Bunna ( ផ្កាម្លិះ )",
  },
  cml3x0a1000a1804lt2u3v4: {
    name: "Ms. Yana ( ផ្កាម្លិះ )",
  },
  cml3x0a1000b1804lw5x6y7: {
    name: "Mr. Panha ( ផ្កាម្លិះ )",
  },
  cml3x4kz0000c804l1a2b3c: {
    name: "Mr. ទ្រី គឹមលុច ( ផ្កាម្លិះ )",
  },
  cml3x4kz0000d804l4e5f6g: {
    name: "Mr. ណាក់ សុខទ្រី ( ផ្កាម្លិះ )",
  },
  cml3x4kz0000e804l7h8i9j: {
    name: "Mr.​ កាក់ ចំរើនឆ័យ ( ផ្កាម្លិះ )",
  },
  cml3x4kz0000f804lk1l2m3: {
    name: "Ms. លី ចាន់សូរិយា ( ផ្កាម្លិះ )",
  },
  cml3ykf5m000004l87027gtbn: {
    name: "Mr. Yuth ( ផ្កាម្លិះ )",
  },
};
export const CusName: Record<string, { name: string }> = newLocal;
