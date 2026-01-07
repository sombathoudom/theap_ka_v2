export const INVSAMPE = {
  parents: [
    {
      name1: "ហាយ សៀងហៃ",
      name2: "អ៊ូច សាវឿន",
    },
    {
      name1: "ចក់ ធឿន",
      name2: "លី ម៉ាលីន",
    },
  ],
  header: {
    title: "យើងខ្ញុំមានកិត្តិយសសួមគោរពអញ្ជើញ",
    desc: "ចាំ copy text ដាក់មកមែ",
  },
  couple: {
    name1: "ឆេង សម្បត្តិឧត្តម",
    name2: "គង់ លីណា",
  },
  date: "2026-02-22T05:00:00",
};

export const toKhmerNumeral = (num: string | number) => {
  const khmerNumbers = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
  return num.toString().replace(/[0-9]/g, (w) => khmerNumbers[+w]);
};
