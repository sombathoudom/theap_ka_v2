import MusicPlayer from "../components/MusicPlayer";
import { useEffect, useState } from "react";
import KHLogo from "/khlogo.png";
import { ChevronDown, Heart } from "lucide-react";
import img1 from "../assets/images/IMG_3407.webp";
import img2 from "../assets/images/IMG_3396.webp";
import img3 from "../assets/images/IMG_3399.webp";
import img4 from "../assets/images/IMG_3400.webp";
import img5 from "../assets/images/IMG_3402.webp";
import img6 from "../assets/images/IMG_3404.webp";
import img7 from "../assets/images/IMG_3727.webp";
import img8 from "../assets/images/IMG_3728.webp";
import LocationButton from "../components/LocationButton";
import Agenda from "../components/Agenda";
import Countdown from "../components/Countdown";
import { motion } from "framer-motion";

function Invitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full min-h-screen bg-fixed bg-white">
        <MusicPlayer />
        <img
          src="/lframe.png"
          className="fixed top-0 -left-16 h-screen object-cover z-10 pointer-events-none"
          alt=""
        />
        <img
          src="/rframe.png"
          className="fixed top-0 -right-16 h-screen object-cover z-10 pointer-events-none"
          alt=""
        />
        {/* <img src="/texture.png" className="fixed object-cover z-0 pointer-events-none" alt="" /> */}
        <div className="py-24 px-3 relative z-10">
          {/* Opening */}
          <div className="text-center">
            <div className="moulpali-bold text-[1.35rem] text-nude2 my-4 md:text-3xl md:mt-16">
              <div>សិរីមង្គល</div>
              <div className="mt-2 md:mt-6">ពិធីពិសាស្លាដក់កន្សែង</div>
            </div>

            <div className="relative w-64 max-w-md h-auto mx-auto py-4 md:w-96">
              {/* Image */}
              <img
                src={KHLogo}
                className="mx-auto w-56 h-auto md:w-72 animate-turn3D"
                alt=""
              />

              {/* Floating Names */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center gap-12">
                <div className="groom-name text-center">
                  <p className="metal-regular text-sm text-nude2 mb-2 md:text-xl">
                    កូនប្រុសនាម
                  </p>
                  <h1 className="moul-regular text-lg text-mediumearth md:text-2xl md:mt-4">
                    នៅ<br></br>គីមសេង
                  </h1>
                </div>
                <div className="bride-name text-center">
                  <p className="metal-regular text-sm text-nude2 mb-2 md:text-xl">
                    កូនស្រីនាម
                  </p>
                  <h1 className="moul-regular text-lg text-mediumearth md:text-2xl md:mt-4">
                    រិន<br></br>សានាថ
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center animate-float py-6 text-nude2 md:mt-8">
              <ChevronDown size={32} className="md:w-12 md:h-auto" />
              <p className="metal-regular text-sm md:text-lg">ទាញចុះក្រោម</p>
            </div>
          </div>

          {/* Album */}
          <div className="py-10 md:py-16">
            <h1 className="moulpali-medium text-center text-nude2 mt-4 mb-10 text-xl md:text-3xl md:mt-8 md:mb-16">
              កម្រងរូបភាពអនុស្សាវរីយ៍
            </h1>
            <div className="flex justify-center gap-x-4 md:gap-x-8">
              <img
                src={img1}
                onClick={() => openImage(img1)}
                className="w-32 h-auto rotate-6 md:w-56 lg:w-72"
                alt=""
              />
              <img
                src={img2}
                onClick={() => openImage(img2)}
                className="w-32 h-auto -rotate-6 md:w-56 lg:w-72"
                alt=""
              />
            </div>
            <div className="flex justify-center gap-x-4 my-4 md:gap-x-8 lg:my-12">
              <img
                src={img6}
                onClick={() => openImage(img6)}
                className="w-32 h-auto -rotate-6 md:w-56 lg:w-72"
                alt=""
              />
              <img
                src={img4}
                onClick={() => openImage(img4)}
                className="w-32 h-auto rotate-6 md:w-56 lg:w-72"
                alt=""
              />
            </div>
            <div className="flex justify-center gap-x-4 my-4 md:gap-x-8 lg:my-12">
              <img
                src={img5}
                onClick={() => openImage(img5)}
                className="w-32 h-auto rotate-6 md:w-56 lg:w-72"
                alt=""
              />
              <img
                src={img3}
                onClick={() => openImage(img3)}
                className="w-32 h-auto -rotate-6 md:w-56 lg:w-72"
                alt=""
              />
            </div>
            <div className="flex justify-center gap-x-4 md:gap-x-8">
              <img
                src={img7}
                onClick={() => openImage(img7)}
                className="w-32 h-auto -rotate-6 md:w-56 lg:w-72"
                alt=""
              />
              <img
                src={img8}
                onClick={() => openImage(img8)}
                className="w-32 h-auto rotate-6 md:w-56 lg:w-72"
                alt=""
              />
            </div>
          </div>

          {/* Family */}
          <div className="py-10 md:py-16">
            <h1 className="moulpali-medium text-center pb-8 text-nude2 text-xl md:text-3xl md:pb-16">
              ពិធីពិសាស្លាដក់កន្សែង
            </h1>
            <div className="flex justify-around">
              <div className="">
                <div className="flex gap-1 items-center mb-2 md:gap-4">
                  <p className="metal-regular text-xs text-nude2 md:text-lg">
                    លោក
                  </p>
                  <p className="moul-regular text-sm text-mediumearth md:text-2xl">
                    នៅ ធី
                  </p>
                </div>
                <div className="flex gap-1 items-center mb-2 md:gap-4">
                  <p className="metal-regular text-xs text-nude2 md:text-lg">
                    លោកស្រី
                  </p>
                  <p className="moul-regular text-sm text-mediumearth md:text-2xl">
                    គ្រី សុខហេង
                  </p>
                </div>
              </div>
              <div className="">
                {/* <h1 className="title">លោក នៅ ធី</h1> */}
                <div className="flex gap-1 items-center md:gap-4">
                  <p className="metal-regular text-xs text-nude2 md:text-lg">
                    លោកស្រី
                  </p>
                  <p className="moul-regular text-sm text-mediumearth md:text-2xl">
                    ហ៊ី សនសានី
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-center moulpali-medium mt-4 text-sm text-nude2 md:text-xl md:py-6">
              មានកិត្តិយសសូមគោរពអញ្ជើញ
            </h1>
            <p className="metal-regular text-center text-[0.8rem] leading-7 mt-6 text-nude3 px-2 md:text-lg md:leading-10 md:px-8 lg:px-32 xl:px-56">
              ឯកឧត្តម លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា​ ឧកញ៉ា លោកជំទាវ លោក លោកស្រី
              អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស
              ដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្តីជ័យមង្គល
              ក្នុងពិធីពិសាស្លាដក់កន្សែងកូនប្រុសស្រីរបស់យើងខ្ញុំ
            </p>
            <div className="flex justify-around items-center py-6 lg:px-32">
              <div className="text-center md:mt-6">
                <p className="metal-regular text-xs text-nude2 md:text-lg">
                  កូនប្រុសនាម
                </p>
                <h1 className="moul-regular text-center mt-2 text-mediumearth md:text-2xl md:mt-5">
                  នៅ<br></br>គីមសេង
                </h1>
              </div>

              <Heart
                size={32}
                className="fill-mediumearth text-mediumearth md:w-16 md:h-auto"
              />
              <div className="text-center md:mt-6">
                <p className="metal-regular text-xs text-nude2 md:text-lg">
                  កូនស្រីនាម
                </p>
                <h1 className="moul-regular text-center mt-2 text-mediumearth md:text-2xl md:mt-5">
                  រិន<br></br>សានាថ
                </h1>
              </div>
            </div>
            <p className="metal-regular text-center text-[0.8rem] leading-7 text-nude3 md:text-lg md:leading-10 md:my-4">
              ដែលនឹងប្រព្រឹត្តទៅនៅថ្ងៃសៅរ៍ ៥កើត ខែជេស្ឋ ឆ្នាំម្សាញ់ <br></br>
              សប្តស័ក ពុទ្ធសករាជ២៥៦៩ ត្រូវនឹងថ្ងៃទី៣១ ខែឧសភា ឆ្នាំ២០២៥ <br></br>
              វេលាម៉ោង ៩:០០ ព្រឹក ស្ថិតនៅភោជនីយដ្ធាន ជីងឡុង
            </p>

            <div className="text-center mt-6">
              <LocationButton />
            </div>
          </div>

          {/* Agenda */}
          <div className="py-6 md:py-16">
            <h1 className="moulpali-medium text-center pb-10 text-nude2 text-xl md:text-3xl">
              ដំណើរការកម្មវិធី
            </h1>
            <Agenda />
          </div>

          {/* Countdown */}
          <div className="py-6 md:py-16">
            <h1 className="moulpali-medium text-center pb-10 text-nude2 text-xl md:text-3xl md:mb-4">
              ចំនួនថ្ងៃរាប់ថយក្រោយ
            </h1>
            <Countdown />
          </div>

          {/* Dress Code */}
          <div className="py-6 md:py-16">
            <h1 className="moulpali-medium text-center pb-10 text-nude2 text-xl md:text-3xl">
              កូដសម្លៀកបំពាក់
            </h1>
            <div className="flex justify-center gap-1 px-1 md:gap-4 md:mt-4">
              <div className="w-20 h-40 md:w-24 md:h-48 bg-[#D4CDBD] flex items-center justify-center text-white"></div>
              <div className="w-20 h-40 md:w-24 md:h-48 bg-[#A9B5BA] flex items-center justify-center text-white"></div>
              <div className="w-20 h-40 md:w-24 md:h-48 bg-[#C7D2AB] flex items-center justify-center text-white"></div>
              <div className="w-20 h-40 md:w-24 md:h-48 bg-[#A7A155] flex items-center justify-center text-white"></div>
              <div className="w-20 h-40 md:w-24 md:h-48 bg-[#C8AC94] flex items-center justify-center text-white"></div>
            </div>
          </div>

          {/* Thanks Message */}
          <div>
            <h1 className="moulpali-medium text-center mt-16 pb-4 text-nude2 text-xl md:text-3xl">
              សេចក្តីថ្លែងអំណរគុណ
            </h1>
            <p className="metal-regular text-center text-[0.8rem] leading-7 mt-6 text-nude3 px-2 md:text-lg md:leading-10 md:px-8 lg:px-32 xl:px-56">
              យើងខ្ញុំជាមាតាបិតា
              សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួម
              ជាភ្ញៀវកិត្តិយសក្នុងពិធីពិសាស្លាដក់កន្សែង កូនប្រុស កូនស្រី
              របស់យើងខ្ញុំ។ សូមគោរពជូនពរ ឯកឧត្តម លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា​ ឧកញ៉ា
              លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងភ្ញៀវកិត្តិយសទាំងអស់
              សូមមានសុខភាពល្អ និងទទួលជោគជ័យគ្រប់ភារកិច្ច សូមអរគុណ។
            </p>
          </div>

          <div>
            <h1 className="moulpali-medium text-center pt-8 pb-4 text-nude2 text-xl md:text-3xl md:mt-10">
              លិខិតសូមអភ័យទោស
            </h1>
            <p className="metal-regular text-center text-[0.8rem] leading-7 mt-6 text-nude3 px-2 md:text-lg md:leading-10 md:px-8 lg:px-32 xl:px-56">
              យើងខ្ញុំជាមាតាបិតា កូនប្រុស កូនស្រី សូមអភ័យទោស
              ដោយពុំបានជួបអញ្ជើញដោយផ្ទាល់។ វត្តមានរបស់ ឯកឧត្តម លោកអ្នកឧកញ៉ា
              អ្នកឧកញ៉ា​ ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
              និងភ្ញៀវកិត្តិយសទាំងអស់
              គឺជាកិត្តិយសដ៏ឧត្តុង្គឧត្តមសម្រាប់គ្រួសាររបស់យើងខ្ញុំ។
            </p>
          </div>
        </div>
      </div>

      {/* Image Model */}
      {isOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeImage} // close when clicking anywhere
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // stop click from bubbling up
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeImage}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] rounded-md"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Invitation;
