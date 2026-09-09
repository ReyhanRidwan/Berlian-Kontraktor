/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Modifikasi URL Cloudinary secara otomatis dengan menambahkan path:
 * /upload/f_auto,q_auto,w_1200,c_limit/ untuk kompresi maksimal tanpa kehilangan detail.
 */
export function optimizeCloudinaryUrl(url: string): string {
  if (!url) return "";
  if (!url.includes("cloudinary.com")) return url;

  // Jika URL berisi '/upload/q_auto/f_auto/', ubah menjadi '/upload/f_auto,q_auto,w_1200,c_limit/'
  if (url.includes("/upload/q_auto/f_auto/")) {
    return url.replace("/upload/q_auto/f_auto/", "/upload/f_auto,q_auto,w_1200,c_limit/");
  }

  // Jika berisi '/upload/f_auto,q_auto/', juga ditangani
  if (url.includes("/upload/f_auto,q_auto/")) {
    return url.replace("/upload/f_auto,q_auto/", "/upload/f_auto,q_auto,w_1200,c_limit/");
  }

  // Fallback standar replacing '/upload/'
  if (url.includes("/upload/")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_1200,c_limit/");
  }

  return url;
}

export const IMAGES = {
  // Company Logo (Fully Transparent with Cloudinary AI background removal)
  companyLogo: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto,e_background_removal/v1788884322/02347409-c2f7-4734-abfd-4a8d3b12d0be-removebg-preview_yvwivx.png",

  // Hero section - Extreme Speed Optimized for LCP & CLS (Google Ads & PageSpeed)
  heroSlide1: {
    raw: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1788859529/72394245-35d3-4c11-9615-f92c9f2e8aba.png",
    desktop: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859529/72394245-35d3-4c11-9615-f92c9f2e8aba.png",
    mobile: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_600,c_limit/v1788859529/72394245-35d3-4c11-9615-f92c9f2e8aba.png",
  },
  heroSlide2: {
    raw: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1788859555/f73ff313-53cb-451b-aa8b-d784dd37b886.png",
    desktop: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859555/f73ff313-53cb-451b-aa8b-d784dd37b886.png",
    mobile: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_600,c_limit/v1788859555/f73ff313-53cb-451b-aa8b-d784dd37b886.png",
  },
  heroSlide3: {
    raw: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1788859568/f7a99f3c-e65e-48d7-a41b-5502ab36e8f4.png",
    desktop: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859568/f7a99f3c-e65e-48d7-a41b-5502ab36e8f4.png",
    mobile: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_600,c_limit/v1788859568/f7a99f3c-e65e-48d7-a41b-5502ab36e8f4.png",
  },

  hero1: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859529/72394245-35d3-4c11-9615-f92c9f2e8aba.png",
  hero2: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859555/f73ff313-53cb-451b-aa8b-d784dd37b886.png",
  hero3: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859568/f7a99f3c-e65e-48d7-a41b-5502ab36e8f4.png",

  // Featured Projects in Home (from projects documentation)
  wismaEms: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto,w_662,c_limit/v1785152665/Renovasi_Wisma_EMS_Cisarua_-_Bogor_iqaytg.webp",
  villaTeguh: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1785152572/Renovasi_Villa_Bpk_Teguh_Puncak_-_Bogor_bt5btu.webp"),
  kantorCakung: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1785151712/Proyek_renovasi_Alun_Indah_-_cakung_gs1ovh.webp"),
  alunIndahCakung: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1785151712/Proyek_renovasi_Alun_Indah_-_cakung_gs1ovh.webp"),

  // Services highlight
  serviceHighlight: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941746/naksha-banwao-3ddHcjHmiGw-unsplash_jdslxv.jpg"),

  // Portfolio Before & After
  portfolioBefore: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941823/sebastian-herrmann-ysqlsEnWpLg-unsplash_pbv806.jpg"),
  portfolioAfter: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941801/ronnie-george-S0-e9aITeHc-unsplash_ogymgo.jpg"),

  // Project 1
  project1Before: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941813/sandy-millar-u1KG_wZTnkg-unsplash_kglxsg.jpg"),
  project1After: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg"),
  project1Gallery: [
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941380/iwood-R5v8Xtc0ecg-unsplash_nfr6rt.jpg"),
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941776/roberto-nickson-emqnSQwQQDo-unsplash_vrhxtd.jpg"),
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941755/naksha-banwao-nAFuA8t5K9Y-unsplash_v8sxdy.jpg")
  ],

  // Project 2
  project2Before: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941769/olek-buzunov-cm-gqu42F20-unsplash_gmblqa.jpg"),
  project2After: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941852/spacejoy-4xRP0Ajk9ys-unsplash_olxzns.jpg"),
  project2Gallery: [
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941832/serhat-beyazkaya-ayWgRkCk2sQ-unsplash_whjzpo.jpg"),
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941380/iwood-R5v8Xtc0ecg-unsplash_nfr6rt.jpg"),
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941885/zac-gudakov-ztWpwTEx728-unsplash_b2wvie.jpg")
  ],

  // Project 3
  project3Before: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941363/house_decoration_fgbtju.jpg"),
  project3After: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941867/spacejoy-YI2YkyaREHk-unsplash_t2s8ka.jpg"),
  project3Gallery: [
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg"),
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941859/spacejoy-9M66C_w_ToM-unsplash_kqkwhw.jpg"),
    optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941100/collov-home-design-4_jQL4JCS98-unsplash_borowp.jpg")
  ],

  // Services page individual images (using real project documentation photos)
  serviceConstructionBuilding: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1788852095/91891168-efae-43f2-a95e-f2652aed341b.png"),
  serviceDesignBuilding: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1788852230/4ee9421f-e3d1-48dc-8991-de9539a1e282.png"),
  serviceHomeMaintenance: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1788852233/c0a8debf-6e65-437b-b68d-1260814e6fd5.png"),
  serviceNewBuild: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1788852095/91891168-efae-43f2-a95e-f2652aed341b.png"),
  serviceRenovation: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1785151712/Proyek_renovasi_Alun_Indah_-_cakung_gs1ovh.webp"),
  serviceArchitecture: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1788852230/4ee9421f-e3d1-48dc-8991-de9539a1e282.png"),
  serviceContractor: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1788852233/c0a8debf-6e65-437b-b68d-1260814e6fd5.png"),

  // About page individual images
  teamConstruction: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941792/ronnakorn-triraganon-IvEYfb-3B70-unsplash_fwhdz6.jpg"),
  founder: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778943896/15ba0e3c10587844c0e73ad425d1adcd_gedrjd.jpg"),

  // Generic fallback placeholder image
  placeholder: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
};
