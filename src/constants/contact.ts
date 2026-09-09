/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CONTACT_INFO = {
  // 1. Layanan Pelanggan (CS)
  customerService: {
    label: "Layanan Pelanggan (CS)",
    phone: "0857-1591-0161",
    rawPhone: "085715910161",
    intlPhone: "+62 857-1591-0161",
    telUrl: "tel:085715910161",
    waUrl: "https://wa.me/6285715910161?text=Halo%20Berlian%20Kontraktor,%20saya%20ingin%20menghubungi%20layanan%20pelanggan%20(CS)",
    desc: "Bantuan informasi umum, administrasi proyek, dan layanan pelanggan aktif"
  },

  // Floating Action Button WhatsApp (0857-1591-0161)
  floatingButton: {
    phone: "0857-1591-0161",
    rawPhone: "085715910161",
    waUrl: "https://wa.me/6285715910161?text=Halo%20Admin%20Berlian%20Kontraktor%2C%20saya%20ingin%20konsultasi%20proyek"
  },

  // 3. Email Resmi
  email: {
    label: "Email Resmi",
    address: "kontraktorberlian@gmail.com",
    mailtoUrl: "mailto:kontraktorberlian@gmail.com",
    desc: "Pengiriman proposal gambar teknis, penawaran vendor, dan dokumen resmi"
  },

  // Alamat Fisik Kantor
  office: {
    address: "Jl. Cipinang Muara Il No.12, RT.1/RW.2, Cipinang Besar Sel., Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13410",
    city: "Jakarta Timur",
    area: "Cipinang Besar Selatan, Jatinegara",
    gmapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Jl.+Cipinang+Muara+Il+No.12+RT.1+RW.2+Cipinang+Besar+Selatan+Jatinegara+Jakarta+Timur"
  },

  // Media Sosial
  socials: {
    instagram: "https://www.instagram.com/berlian_kontraktor/",
    tiktok: "https://www.tiktok.com/@berlian.kontraktor"
  }
} as const;
