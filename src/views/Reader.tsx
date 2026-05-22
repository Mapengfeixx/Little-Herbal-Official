import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

interface ReaderProps {
  navigate: (view: string) => void;
  bookId: string;
}

export default function Reader({ navigate, bookId }: ReaderProps) {
  const customStyles = `
    .paper-texture {
        background-color: #f3f4ec;
        background-image: 
            linear-gradient(90deg, rgba(200,195,185,0.05) 1px, transparent 1px),
            linear-gradient(rgba(200,195,185,0.05) 1px, transparent 1px);
        background-size: 20px 20px;
        box-shadow: inset 0 0 40px rgba(100, 95, 80, 0.05);
    }
    .scroll-edge {
        background: linear-gradient(to right, #d4cfc1, #eae4b1, #d4cfc1);
        border-radius: 8px;
        box-shadow: 2px 4px 10px rgba(0,0,0,0.15);
    }
    .book-page-container {
        position: relative;
        perspective: 1500px;
    }
    .page-shadow {
        box-shadow: 
            -10px 0 20px -5px rgba(0,0,0,0.1),
            10px 0 20px -5px rgba(0,0,0,0.1);
    }
    .page-image {
        transition: opacity 0.3s ease-in-out;
    }
  `;

  const bookData: Record<string, { title: string, pages: string[] }> = {
    jinyinhua: {
        title: '《金银花小精灵》',
        pages: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAjm30yd79-81wYrHIdApT3ezt9WPXnhks9634usVjYkuzmle49QpRgHETQ0j5t3QnK2hd6hZgqnqF0dLIDfszq5pr7HgJ1wYi4DsxLGKTMmyIUf7S6VnOCf2_Wqa2Re7SPcjLF_Hccrr2s-2YNnlHFoXLjvqGlqF6XGudrCKjsOXHNZ7vihVHPFgOTNYlJPq9Qvs-LvBzPKWH3R2NtC95G6kgLtwGoZw2GNDwB3LEStv9xTlJmL9HsSdC39d8NWQ7De3fiBo_M0E0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDCSIe2NxNKjhGerWjGcOspRt39UD5xEyJfdU15UVvKdWRFPS6hvfcuMu0qRm-dh8DR8Geqwhi7r93uidQufVpIrT-ZlxRxbUrFk-WhTx3vVV0V4nRQT8Uy8q_7XfcpBhKxX2zgq1BD8Gcf77EbJLEpCntZID-5f0KXWLCqZqb-0ItUdoHJKKve3ttZjMN90AcePNM50O-O-aakAt5p6ydDdpfEtWKXmXB-B89s6U4l-difyeZV-ZOtHd7uM6a1TkvmBT6Rf43pKNo",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbzER5TIr09q4BTm7cUa-8-CRKxmtIRzW7RaXX9SgmUKO7UK_duHdmzUwZj8VcQFfPTZwXWq-hwnTqS-p_3Iv7ddcmo2ksQ8QyzeZuRLI3qGdMU8c6nrzPNV63Pcla434sszy-FYgEkPzhteF1ArjHKeASQxjomC0kP1PHO8YetTwSqQHyBGVeXlwyyG_hwzNZVcLxjin3axMKVTtnNdnCtMG6Fh8m1GklmgBkNlD1U9gNeoaTJloLtsAjGOcM_08dzqJFajJP98w",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDbcN6isX6shnYxiaqrBK_BIbbA0Z3wn-WhrYeurCDMSS9FnKRWokFUICwgUXlve6dXG-VJHT1GGy_nvvQd9mGZCPNU-JNVRJUW2JLVTrOsTLPq4_V5JE9tp5NvPupLNBYUUowXO5iYds1USuumWeRlkGTmQf-TuxzJBjy6HNrKTs1tORGZPngKzM0q622Z7Lx5IwNVBERX1vjwsQ6aPjjZX8WS9yZR6t0P5lliWi5qAimWQQIpbXTSbZmSyBWke3PaN_X2E_ySCOo"
        ]
    },
    shanzha: {
        title: '《山楂红了》',
        pages: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAdDo9lhdyq14G2p_o9eApa6OY-hqX5tkpjPhYhExIkRLyt_rfYR2-bjoDd1shNMeykheTrP-YZ7kZ4ppQlC2Sa751CdcfPFf2d7CPKK3e-8cPOC8zL7AA8-daySfcyPrkEy2i1vcHVDa2I7sG32QyE_B3qQ2m-vStT1RI6WbePd3X6uqPnJfkQoa696eWSfO-f7e1k7q7cArWg2fJKkcucFQMItHYj5fhPjMw0OM6UR8CltDNcDjZNKUeNb6aCeB7RW9nxs2_6ld4",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDvlRVME9VHepNOM_QMmfhm2C6JJFL0meB0Ae_Rkd0faMmdCAUi5duDPsJRrDLv_nWz-RSI4O-JIePni3_rU3R58qxMByzoKqUkLj2pBz2zlmKMOS8mZGYr6MLC8Hgq0C6HO4niIsQvteGYi_IWnMxVWR-nainfom57CkCgK6vH45bcECVi_taw6PyyRd0y60cQovRiDrMxcKSbk35Qlqj4aQ_Fws8XpvfVViArpb98mW7_iI_nhB4PP17sGrrmpKDQrcid3zrmtSE",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBo1O7EdndlJkODQVMdrqTrVYpHekyz6AgHoOLWX_cuqiF0zdOMhzkNPy8q5Ixc94fD36hIBh72yuHHCn0hUiiIs7BD_mowzJk68km5z9Wdg7XIAJQ5kQ16qabeazKXgthdPn9BzJPhOhjlXPVffrz2m7IWnlYvdvTrTeYYTNhbLZY_xdGfRTTOYRTtIzkEx2yqF5qpYX_ADTN_WagqUwqKNoZQEq3SVSeXdcniyOw7NMFHrY0AIYVLidfHUQOeGzlZArcqjdlpoIg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAxrSx9AdV2evzzV13uLqBYGP4BAEnALpGP5Zo9L428G-C7J05UMFxkkY-mMopTJw3kLzPbFCSp4BQLDVnpBSKwX9bupIr_L4fDdfaQok8t1c60D7aON9tP_1yfW-DrMD6zbXcJG0SWJn8UOEEMufdlXh4iH7fA2iubua3Hro0vTRGj7AWSlzQzN0k3Qs-9wo0azH9RyxY3n6cxMYmdB-zHpBe_1DRbpMejz1j6MyGKsIbCoGQF8U3t2wCx5IPq80DA58IQT8uUVGw"
        ]
    },
    juhua: {
        title: '《菊花姐姐的秋日信》',
        pages: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBI7RZu-8ESXTt2Pi-6mxNbUDdBcvG4pyHa1_-e3TVjVe6GCPiFBEY-Uv2JzS3crI7iokyUK4JbpsoSK3n2vohbvNuF6NLj9N8BYJMmvSeDNHq55N4rSXIuksolwX90hk18kCeu4xK68mrCD76nucphqm5HMhKiC8IcY3ZlYbFERiTo6xiC4WkRS53mzkh3Wion7MQrDjZ8rmTZEjgv_MLsNFq7K6BLKcSm5KeSUXx1DVqoRN3QHZ9CUJxDt5J-MYxn2uu0wBqsS-Q",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDrumOcnV0Y9VXkjLxl48YpitwUr5r16qP7lUBqWY_DiQOHcvoSxVoFhatBsNOw9VD26_1OPzBY6hWMMfEMJxLrnvOUINKPsksckCsK-9zFNkLoNQdIyOTG0NeZcUChdEVDwZ5lgEnbkJAP9wpwD6EZ27zLanpvMzZyZWSVhGJWy9ZRwZ672TGQJu8u0KyHZxJodhj1xaW8wb70tu8YH2bKGlGz9M8gmbVFUhjw6RrrcmJ_WFxbpgXIr3fYmBDfmpu4F1-JVdQsx7A",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNKupeH7Sj3XjUjlGJ16RAAXAfYq01_4Pw-7ajDh14YMYScc26pXWy1O5qRxzXSuvqD2e0zxLXpW5vYwxdzLMdGw0i8LoqWDaGJKv6IyNEgdNouLbhd3NFR2u_tPMf6vV2upJMkTj6h_VQnbN2zEsd_jKcJ47LL-HknBuK3mFWeBXxgp3ASJi21cdFwND-h0W56H-aCZQHso1MddDZdSgFqSg4kR5OHp8ALIBknWONatAQ_r6sO8NESWHkSshs34H8S_XNW8V-e3c",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAh-pPuWRmzfX3PsIA7vqCMB9hzwMeBORzxJkm4RotaYPBi-t78xotKKBaWIt2MII_6Qyj1Yub8cU5LTCyVOR2Abt44XjBL-TOHE2gc_WtHymZGzzAUwvhT2ZBGv0Ytu4yw9J64H3Tfxyvvz-fniJeKAnQihkl5f_KeBnzAV-MTxaK7KQ7YgCza04qdP6Qy6BOBLTGFn1AX0Ebt7MzQpBg4FSPoqa9tE961VcvxjJm8bp0s0V7VaTLbJzXQhiAOth2Ocm9aho3Xmg0"
        ]
    },
    aicao: {
        title: '《艾草香囊的故事》',
        pages: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBCnkJKclFsfKYwJPplz2ooNZAEN9XauLA5JNp6u6W0XeAaO7b0j2Ke7nGz-P5jR0hPzdAh_duSKpd76nqKwyIwWi2pyXaPuT-14Y7adOiJQ4knzo6W8BLD6SMade7PpS56NO6LSY7CECBqNmVTM3dmj79Dpj4gQ9Q-eT7JyYvhnHLPPMCDRS3IXT_j1AhEM-xNPxes_imKeTpoH_hGb23X1JFF85MzwJszuXnYjEQyZ608ajMFqaX0wGGcl-5htOdCArrfYYQ34vU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-OlpG2fbQcJe5iU9jEOY4YmCYUDmgVE94GrGauZ9NL3IvLmvdJMgiRfjhceCG8KB21QU4lcjuNnu9PqCNWJNeyNRKUXu9b1Z1_y_kEKmbGhMlUJuAx0geoMxmXiiGYbbpukI_bZyP161pruwe5S2q4oqU0j7mr_OhkFYju44W-NfY0ET2JOxIU60gMFnupiQzh5FxFbGNIwsTFnBSBlbS4jl9Ubu4qLCIJEHfSjT8iBkm9nmT0s72WxnOlW4CFRd-m0xrZwL3k0Y",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAs_7z-lXj8FMQDCJuxd4jtn2RDFzO9CgUxo872F-tpNDm0bQaiQOLYTtB218JtsBmidVUk-h18EmO8CuNWzs5DIJBIHGLoXB74eRSyhM4SNE0XcaimX1mlLMeifdSQKFrYB23bfIUZWQK6n87YIQ0V0AiLP1AooRnyZs6Wk2U5RmLHbMZHsAHse_yE9BvSLqcvbPCmif8yfv7zoACYpD8q0HQlIq_OLBpYpAVilaTpvpJwpfGHPAknk5tYqNuiczIMV1ErJ5LeKsE",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCwqzUlw46npWecPOVvvKgf5rEiA3O3uTxgP5NhdgKt7PPZUwghT1Msx_lT0UeiLCp5J8NK7Cq7mV4VLN-w-27IlSOdNpQpDIS6Vf2TkbtlSA-5bP8LHOrgcpT3egvC-6jos2BihWWk5SGZpNOSOIOMqeZ2yL7xkHqQGuwbHQoJeyufO2IBCm76Yzzo5o22O_fPEpZSpgGOiVl3lC7MVuRjmm1_j4qr8oFx3pO2e33o4GZ1KGcGzK_nGeaOgikfc408TtZFtsfSOy4"
        ]
    },
    guihua: {
        title: '《桂花落满小院》',
        pages: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBTJ2uPJytZE0-klJul8loqEGyoybJ7ksuoQr_sizdVRJ00oF4o8_c2g_Nu7Q6q36_NbgY-QtUPjp6Jv4CgAjP3Bjtg3wZgOprOre4xFRyVtiTeNS48J6C4mDShsXirfoagm1piXIYyGCRsbO1CkNYS49cfCjzYfOthy6KYPrxYWrU5kgYiDyUoALbmHpDnRSixG-EmbgFhSNQdXUOOrUyL-0-WV9MZHhPVGMdlUPL-omtAmLtjHwnZ8fUVLleyfFPoeE3-L60JB1U",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDJtGaFIzLWZyJqQtZ8CNgQ_BOBHxvor52dVyhfW_XmpwxdEddKsIMUPO_yyozVCTfyHK5ZW-d-mI6UFLjGS-J9qkFkHtMWsLbEDatM0Aclar7tJnP_QihPBvL87umYcCL4c-T_neLjrL5MGLEfAyjpdNGApldCVGn8h-S2yWVyl6AeJFT6SCxNErz426AFPWEBHfuY3RD2By6N6IuFVIE79QRKpCvGqHLD7ZARmXnM3I5uSaGpl5TZ3iohhi1DJ_NTubIRSr-_SU0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDykAdNy76Oc2PIlsPXCqql48Q0-uEexa3vo1rfYWn3jUkTE1zKA9_PgYDzSoIWSIBY77wEgSpLdh-ZGDqjNDnK9hw4rBdZCsKaFXlZRT84uONCkQ8KsBQBPQgTPJ8N41bwMjUzMw_faMfQr-A5UVkEnv9LQ0s2BlazmyXV27_6tuZMU_V8Gha1mQsZSrYFXTxnizjRLt1ftouRm7-NQtmLkhuhFBeShi63UbdvcMekjb9m3g5us6tVHViq5ZuDgkFWQh3WGNlaeMo",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAjc38j-0MqyuLMzCLioy6M2NKQbUPDvI2BRtV6BiMr72I7l2KqMBKXLaxVF4RWEc_-pENG_xq_EjuKX3vIxoGe9WJzK2ogkwtR17vkA7Mkxb8VoTBOFF5eNneiW5CYPz6y9tBwWM0lBu-Z6Pr7v7TGmbzvDWkQIv0sRxPSwZdgAI6FedVhvguLNBqAvvN93SshLhcAudvG1x-t5V0GkKShpz96h_fge-VBuI8DVm7yfeLNtb7pcT7zxPMaegPkeVyxsVBVnbMLtvg"
        ]
    },
    fuling: {
        title: '《茯苓爷爷的木头屋》',
        pages: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA85U0X4ThdNVEWWyaElJ1uRWp_AEm-LIhkHY_Df6FNr_Vn3Eum40QvQ6Unyepjisw6Aq52UyOEtl1UqyNkMUwiM2DFQTTJVG9uFx4fATsJFdTgrBpzF9OcUroyHuX_ekOMX741LCTOiuHAlzFoe4f95rnLnVrj4hdxZAB8Cu6tu8S_zEhX_L9zjLrWZDfONs3qi37ScnFzWAWKSJmhuARRVAfu1KdcYaSkWNap_kizImYjx7fSQQmEvg75Tp9oKFU4RMJa3kyPs3A",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-OlpG2fbQcJe5iU9jEOY4YmCYUDmgVE94GrGauZ9NL3IvLmvdJMgiRfjhceCG8KB21QU4lcjuNnu9PqCNWJNeyNRKUXu9b1Z1_y_kEKmbGhMlUJuAx0geoMxmXiiGYbbpukI_bZyP161pruwe5S2q4oqU0j7mr_OhkFYju44W-NfY0ET2JOxIU60gMFnupiQzh5FxFbGNIwsTFnBSBlbS4jl9Ubu4qLCIJEHfSjT8iBkm9nmT0s72WxnOlW4CFRd-m0xrZwL3k0Y",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAs_7z-lXj8FMQDCJuxd4jtn2RDFzO9CgUxo872F-tpNDm0bQaiQOLYTtB218JtsBmidVUk-h18EmO8CuNWzs5DIJBIHGLoXB74eRSyhM4SNE0XcaimX1mlLMeifdSQKFrYB23bfIUZWQK6n87YIQ0V0AiLP1AooRnyZs6Wk2U5RmLHbMZHsAHse_yE9BvSLqcvbPCmif8yfv7zoACYpD8q0HQlIq_OLBpYpAVilaTpvpJwpfGHPAknk5tYqNuiczIMV1ErJ5LeKsE",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCwqzUlw46npWecPOVvvKgf5rEiA3O3uTxgP5NhdgKt7PPZUwghT1Msx_lT0UeiLCp5J8NK7Cq7mV4VLN-w-27IlSOdNpQpDIS6Vf2TkbtlSA-5bP8LHOrgcpT3egvC-6jos2BihWWk5SGZpNOSOIOMqeZ2yL7xkHqQGuwbHQoJeyufO2IBCm76Yzzo5o22O_fPEpZSpgGOiVl3lC7MVuRjmm1_j4qr8oFx3pO2e33o4GZ1KGcGzK_nGeaOgikfc408TtZFtsfSOy4"
        ]
    },
    bohe: {
        title: '《薄荷森林的清凉风》',
        pages: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAjm30yd79-81wYrHIdApT3ezt9WPXnhks9634usVjYkuzmle49QpRgHETQ0j5t3QnK2hd6hZgqnqF0dLIDfszq5pr7HgJ1wYi4DsxLGKTMmyIUf7S6VnOCf2_Wqa2Re7SPcjLF_Hccrr2s-2YNnlHFoXLjvqGlqF6XGudrCKjsOXHNZ7vihVHPFgOTNYlJPq9Qvs-LvBzPKWH3R2NtC95G6kgLtwGoZw2GNDwB3LEStv9xTlJmL9HsSdC39d8NWQ7De3fiBo_M0E0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDCSIe2NxNKjhGerWjGcOspRt39UD5xEyJfdU15UVvKdWRFPS6hvfcuMu0qRm-dh8DR8Geqwhi7r93uidQufVpIrT-ZlxRxbUrFk-WhTx3vVV0V4nRQT8Uy8q_7XfcpBhKxX2zgq1BD8Gcf77EbJLEpCntZID-5f0KXWLCqZqb-0ItUdoHJKKve3ttZjMN90AcePNM50O-O-aakAt5p6ydDdpfEtWKXmXB-B89s6U4l-difyeZV-ZOtHd7uM6a1TkvmBT6Rf43pKNo",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbzER5TIr09q4BTm7cUa-8-CRKxmtIRzW7RaXX9SgmUKO7UK_duHdmzUwZj8VcQFfPTZwXWq-hwnTqS-p_3Iv7ddcmo2ksQ8QyzeZuRLI3qGdMU8c6nrzPNV63Pcla434sszy-FYgEkPzhteF1ArjHKeASQxjomC0kP1PHO8YetTwSqQHyBGVeXlwyyG_hwzNZVcLxjin3axMKVTtnNdnCtMG6Fh8m1GklmgBkNlD1U9gNeoaTJloLtsAjGOcM_08dzqJFajJP98w",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDbcN6isX6shnYxiaqrBK_BIbbA0Z3wn-WhrYeurCDMSS9FnKRWokFUICwgUXlve6dXG-VJHT1GGy_nvvQd9mGZCPNU-JNVRJUW2JLVTrOsTLPq4_V5JE9tp5NvPupLNBYUUowXO5iYds1USuumWeRlkGTmQf-TuxzJBjy6HNrKTs1tORGZPngKzM0q622Z7Lx5IwNVBERX1vjwsQ6aPjjZX8WS9yZR6t0P5lliWi5qAimWQQIpbXTSbZmSyBWke3PaN_X2E_ySCOo"
        ]
    },
    heye: {
        title: '《荷叶伞下的小故事》',
        pages: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAjm30yd79-81wYrHIdApT3ezt9WPXnhks9634usVjYkuzmle49QpRgHETQ0j5t3QnK2hd6hZgqnqF0dLIDfszq5pr7HgJ1wYi4DsxLGKTMmyIUf7S6VnOCf2_Wqa2Re7SPcjLF_Hccrr2s-2YNnlHFoXLjvqGlqF6XGudrCKjsOXHNZ7vihVHPFgOTNYlJPq9Qvs-LvBzPKWH3R2NtC95G6kgLtwGoZw2GNDwB3LEStv9xTlJmL9HsSdC39d8NWQ7De3fiBo_M0E0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDCSIe2NxNKjhGerWjGcOspRt39UD5xEyJfdU15UVvKdWRFPS6hvfcuMu0qRm-dh8DR8Geqwhi7r93uidQufVpIrT-ZlxRxbUrFk-WhTx3vVV0V4nRQT8Uy8q_7XfcpBhKxX2zgq1BD8Gcf77EbJLEpCntZID-5f0KXWLCqZqb-0ItUdoHJKKve3ttZjMN90AcePNM50O-O-aakAt5p6ydDdpfEtWKXmXB-B89s6U4l-difyeZV-ZOtHd7uM6a1TkvmBT6Rf43pKNo",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbzER5TIr09q4BTm7cUa-8-CRKxmtIRzW7RaXX9SgmUKO7UK_duHdmzUwZj8VcQFfPTZwXWq-hwnTqS-p_3Iv7ddcmo2ksQ8QyzeZuRLI3qGdMU8c6nrzPNV63Pcla434sszy-FYgEkPzhteF1ArjHKeASQxjomC0kP1PHO8YetTwSqQHyBGVeXlwyyG_hwzNZVcLxjin3axMKVTtnNdnCtMG6Fh8m1GklmgBkNlD1U9gNeoaTJloLtsAjGOcM_08dzqJFajJP98w",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDbcN6isX6shnYxiaqrBK_BIbbA0Z3wn-WhrYeurCDMSS9FnKRWokFUICwgUXlve6dXG-VJHT1GGy_nvvQd9mGZCPNU-JNVRJUW2JLVTrOsTLPq4_V5JE9tp5NvPupLNBYUUowXO5iYds1USuumWeRlkGTmQf-TuxzJBjy6HNrKTs1tORGZPngKzM0q622Z7Lx5IwNVBERX1vjwsQ6aPjjZX8WS9yZR6t0P5lliWi5qAimWQQIpbXTSbZmSyBWke3PaN_X2E_ySCOo"
        ]
    }
  };

  const book = bookData[bookId] || bookData['jinyinhua'];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [imageSrc, setImageSrc] = useState(book.pages[0]);

  const updatePage = (newIndex: number) => {
    setOpacity(0);
    setTimeout(() => {
        setImageSrc(book.pages[newIndex]);
        setCurrentPageIndex(newIndex);
        setOpacity(1);
    }, 150);
  };

  const prevPage = () => {
      if (currentPageIndex > 0) updatePage(currentPageIndex - 1);
  };

  const nextPage = () => {
      if (currentPageIndex < book.pages.length - 1) updatePage(currentPageIndex + 1);
  };

  return (
    <div className="bg-background text-on-background flex flex-col items-center antialiased w-full h-screen overflow-hidden relative">
      <style>{customStyles}</style>
      
      <Navigation currentView="library" onNavigate={navigate} />

      {/* Main Content Canvas */}
      <main className="w-full h-full pt-16 flex flex-col items-center justify-center relative z-10 flex-grow">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-24 left-10 opacity-20 pointer-events-none">
          <span className="material-symbols-outlined text-[120px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[180px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
        </div>

        {/* Book Header Area */}
        <div className="mb-6 text-center z-20">
          <h1 className="font-headline-md text-headline-md text-primary mb-2">{book.title}</h1>
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border border-outline-variant shadow-sm">
            <span className="material-symbols-outlined text-tertiary text-sm">auto_stories</span>
            <span className="font-label-caps text-label-caps text-on-surface-variant">第 {currentPageIndex + 1} / {book.pages.length} 页</span>
          </div>
        </div>

        {/* Reading Interface (Portrait Book) */}
        <div className="relative flex items-center justify-center w-full max-w-2xl lg:max-w-4xl z-20 h-[65vh] md:h-[70vh] book-page-container">
          
          {/* Previous Button */}
          <button 
            onClick={prevPage}
            disabled={currentPageIndex === 0}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 bg-surface-container border-2 border-outline-variant rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg transition-transform text-on-surface z-30 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 hover:bg-surface-container-high"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_back_ios_new</span>
          </button>

          {/* The Book Frame (Scroll Style) */}
          <div className="relative h-full aspect-[0.75] bg-surface-container-lowest rounded-sm page-shadow flex border-x-[8px] md:border-x-[12px] border-surface-container-highest">
            {/* Scroll Rods */}
            <div className="absolute top-[-10px] left-[-24px] w-[calc(100%+48px)] h-[24px] scroll-edge z-10"></div>
            <div className="absolute bottom-[-10px] left-[-24px] w-[calc(100%+48px)] h-[24px] scroll-edge z-10"></div>
            
            {/* Page Content Area */}
            <div className="w-full h-full p-4 md:p-6 paper-texture relative overflow-hidden flex flex-col border border-outline-variant/30">
              <div className="absolute top-4 left-4 opacity-30 text-tertiary"><span className="material-symbols-outlined">psychiatry</span></div>
              
              <div className="w-full h-full bg-surface-container-low rounded-lg border border-outline-variant/50 overflow-hidden shadow-inner relative flex items-center justify-center">
                <img 
                  alt="Book Page" 
                  className="w-full h-full object-contain page-image" 
                  src={imageSrc} 
                  style={{ opacity }} 
                />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextPage}
            disabled={currentPageIndex === book.pages.length - 1}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 bg-primary border-2 border-primary-container rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg transition-transform text-on-primary z-30 group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 hover:bg-primary-container"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl transition-transform group-hover:translate-x-1">arrow_forward_ios</span>
          </button>
        </div>

        {/* Interactive Controls / Tools */}
        <div className="mt-8 flex gap-4 md:gap-6 z-20 pb-4">
          <button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-surface-container border border-outline-variant rounded-full hover:bg-surface-container-high transition-colors shadow-sm text-on-surface">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>volume_up</span>
            <span className="font-title-sm text-title-sm">朗读</span>
          </button>
          <button onClick={() => navigate('library')} className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full transition-colors bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high shadow-sm">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_back</span>
            <span className="font-title-sm text-title-sm">返回</span>
          </button>
        </div>
      </main>
    </div>
  );
}
