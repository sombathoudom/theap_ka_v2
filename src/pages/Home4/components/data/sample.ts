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
                }
              )
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
