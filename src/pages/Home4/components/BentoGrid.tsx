import { AnimatePresence, motion } from "framer-motion";
import { items } from "./data/sample";
import { useState } from "react";

const layoutStyles = [
  "row-span-5", // Slot 1 (Left top)
  "row-span-7", // Slot 2 (Right top)
  "row-span-7 row-start-6", // Slot 3 (Left middle-bottom)
  "row-span-5 col-start-2 row-start-8", // Slot 4 (Right bottom)
];

const BentoGrid = () => {
  // State សម្រាប់រក្សាទុក URL រូបភាពដែលត្រូវបង្ហាញក្នុង Dialog
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="w-full relative">
      <div
        className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto"
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${
            Math.ceil(items.length / 2) * 6
          }, minmax(40px, auto))`,
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={`img-${item.id}`} // សម្រាប់ធ្វើចលនាពង្រីក (Shared Layout)
            onClick={() => setSelectedImg(item.img)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.1 }}
            className={`${
              layoutStyles[index % layoutStyles.length]
            } rounded-2xl overflow-hidden cursor-zoom-in border border-primary shadow-xl`}
          >
            <motion.img
              src={item.img}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* --- Dialog / Lightbox Overlay --- */}
      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* ផ្ទៃខាងក្រោយខ្មៅស្រអាប់ (Backdrop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* រូបភាពធំ */}
            <motion.div
              layoutId={`img-${items.find((i) => i.img === selectedImg)?.id}`}
              className="relative max-w-4xl w-full h-auto max-h-[90vh] z-50 flex items-center justify-center"
            >
              <img
                src={selectedImg}
                alt="Enlarged"
                className="rounded-lg shadow-2xl max-w-full max-h-[85vh] object-contain border border-white/20"
              />

              {/* ប៊ូតុងបិទ */}
              {/* <button
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 text-white text-3xl font-light hover:text-amber-400 transition-colors"
              >
                ✕ បិទ
              </button> */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default BentoGrid;
