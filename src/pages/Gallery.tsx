// import { useState } from "react";
// import { X } from "lucide-react";
// import { Layout } from "@/components/layout/Layout";
// import { PageHeader } from "@/components/common/PageHeader";

// const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

// const galleryImages = Array.from({ length: 8 }, (_, i) => ({
//   id: i + 1,
//   url: `${BASE_URL}/images/gallery/slider/p${i + 1}.JPG`,
//   name: `Gallery Photo ${i + 1}`,
// }));

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <Layout>
//       <PageHeader
//         title="Photo Gallery"
//         description="Explore our campus, events, and student activities through our photo gallery."
//         breadcrumbs={[{ label: "Photo Gallery" }]}
//       />

//       <section className="py-12">
//         <div className="container">
//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {galleryImages.map((image) => (
//               <button
//                 key={image.id}
//                 onClick={() => setSelectedImage(image.url)}
//                 className="group relative aspect-video overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all"
//               >
//                 <img
//                   src={image.url}
//                   alt={image.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//                   <div className="absolute bottom-3 left-3">
//                     <p className="text-background font-medium text-sm">{image.name}</p>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button
//             className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
//             onClick={() => setSelectedImage(null)}
//           >
//             <X className="w-6 h-6 text-foreground" />
//           </button>
//           <img
//             src={selectedImage}
//             alt="Gallery image"
//             className="max-w-full max-h-[90vh] object-contain rounded-lg"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default Gallery;


import { useState } from "react";
import { X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const sliderImages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  url: `${BASE_URL}/images/gallery/slider/p${i + 1}.JPG`,
  name: `Gallery Photo ${i + 1}`,
}));

const photo2425All = Array.from({ length: 166 }, (_, i) => ({
  id: i + 1,
  url: `${BASE_URL}/images/gallery/gallery/${i + 1}.JPG`,
  name: `Photo 2024–25 (${i + 1})`,
}));

const INITIAL_COUNT = 10;
const LOAD_MORE_COUNT = 20;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"slider" | "2425">("slider");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const photo2425Visible = photo2425All.slice(0, visibleCount);
  const hasMore = visibleCount < photo2425All.length;

  return (
    <Layout>
      <PageHeader
        title="Photo Gallery"
        description="Explore our campus, events, and student activities through our photo gallery."
        breadcrumbs={[{ label: "Photo Gallery" }]}
      />

      <section className="py-12">
        <div className="container">

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Button
              variant={activeTab === "slider" ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => setActiveTab("slider")}
            >
              Gallery
            </Button>
            <Button
              variant={activeTab === "2425" ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => { setActiveTab("2425"); setVisibleCount(INITIAL_COUNT); }}
            >
              2024–25
            </Button>
          </div>

          {/* Campus Gallery */}
          {activeTab === "slider" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sliderImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.url)}
                  className="group relative aspect-video overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all"
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3">
                      <p className="text-background font-medium text-sm">{image.name}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Photo 2024-25 */}
          {activeTab === "2425" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {photo2425Visible.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image.url)}
                    className="group relative aspect-video overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all"
                  >
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-3 left-3">
                        <p className="text-background font-medium text-sm">{image.name}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Show More / Show Less */}
              <div className="flex justify-center gap-4 mt-8">
                {hasMore && (
                  <Button
                    variant="default"
                    className="rounded-full px-8"
                    onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, photo2425All.length))}
                  >
                    Show More ({photo2425All.length - visibleCount} remaining)
                  </Button>
                )}
                {visibleCount > INITIAL_COUNT && (
                  <Button
                    variant="outline"
                    className="rounded-full px-8"
                    onClick={() => setVisibleCount(INITIAL_COUNT)}
                  >
                    Show Less
                  </Button>
                )}
              </div>
            </>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;