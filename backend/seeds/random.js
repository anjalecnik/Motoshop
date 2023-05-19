/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('uporabniki').del()
  await knex('uporabniki').insert([
    {
      uporabnisko_ime: "Admin",
      geslo: "12345"
    },
    {
      uporabnisko_ime: "Peter",
      geslo: "7890"
    },
    {
      uporabnisko_ime: "Nik",
      geslo: "adidaspredatorpro"
    }
  ]);

  await knex('izdelki').del()
  await knex('izdelki').insert([
    {
      naziv: "Kawasaki Ninja ZX-10RR",
      cena: "30.966,00 €",
      povezavaSlike: "https://cdp.azureedge.net/products/USA/KA/2021/MC/SUPERSPORT/NINJA_ZX-10RR/50/LIME_GREEN/2000000005.jpg",
      povezavaDoIzdelka: "NinjaZX10RR.html",
      popust: "0"
  },
  {
      naziv: "Ducati DIAVEL V4",
      cena: "27.990,00 €",
      povezavaSlike: "https://mcn-images.bauersecure.com/wp-images/190930/1440x960/ducati_diavel_v4_4.jpg?mode=max&quality=90&scale=down",
      povezavaDoIzdelka: "#",
      popust: "0"
  },
  {
      naziv: "Honda GL1800D GOLD",
      cena: "30.990,00 €",
      povezavaSlike: "https://www.honda-as.com/wp-content/uploads/2021/01/324976_Honda_completes_its_comprehensive_2021_model_line-up_with_updates_to_GL1800-683x1024.jpg",
      povezavaDoIzdelka: "#",
      popust: "0"
  },
  {
      naziv: "Ducati PANIGALE V4 R",
      cena: "44.990,00 €",
      povezavaSlike: "https://cdn.speedsize.com/4022aca3-422d-45a9-b2f1-0683e17036ac/https://avto-magazin.metropolitan.si/media/cache/upload/Photo/2018/11/11/b08_ducati-panigale-v4-r_uc69200_mid_biggalleryimage.jpg",
      povezavaDoIzdelka: "#",
      popust: "0"
  }
  ]);

  await knex('akcijskiIzdelki').del();
  await knex('akcijskiIzdelki').insert([
    {
      naziv: "Kawasaki Z 650",
      cena: "7.983,00 €",
      povezavaSlike: "https://acmotos.com/32526/ixil-rc-exhaust-steel-ck7256rc.jpg",
      popust: "0"
  },
  {
      naziv: "Tromox Ukko-S",
      cena: "5.749,00 €",
      povezavaSlike: "https://ewheelz.nl/wp-content/uploads/2022/06/Tromox-ukko-s.png",
      popust: "0"
  },
  {
      naziv:"Suzuki SV650X",
      cena: "7.490,00 €",
      povezavaSlike:"https://womanrider.com/wp-content/uploads/2019/10/kevinwingphoto-6850.jpg",
      popust: "0"
  }
  ]);

  await knex('sportIzdelki').del();
  await knex('sportIzdelki').insert([
    {
      naziv: "Kawasaki Ninja ZX-10RR",
      cena: 30966.00,
      povezavaSlike:"https://images.carandbike.com/bike-images/large/kawasaki/ninja-zx-10rr/kawasaki-ninja-zx-10rr.jpg?v=8",
      povezavaDoIzdelka: "NinjaZX10RR.html",
      popust: "0",
      opis: "150 kW športni motor Kawasaki"
  },
  {
      naziv: "Yamaha R1",
      cena: 21999.00,
      povezavaSlike: "https://road.moto-nautika.com/wp-content/uploads/2020/04/2020-Yamaha-YZF1000R1-EU-Icon_Blue-Studio-001-03.jpg",
      povezavaDoIzdelka: "YamahaR1.html",
      popust: "5",
      opis: "150 kW športni motor Yamaha"
  },
  {
      naziv: "Yamaha YZF-R125",
      cena: 5949.00,
      povezavaSlike: "https://road.moto-nautika.com/wp-content/uploads/2022/11/2023-Yamaha-YZF-R125-EU-Tech_Black-Studio-001-03.jpg",
      povezavaDoIzdelka: "#",
      popust: "10",
      opis: "125 kW športni motor Yamaha"
  },
  {
      naziv: "CF Moto GT650",
      cena: 7990.00,
      povezavaSlike: "https://global.cfmoto.com/upload/image/20210811/20210811142341.jpg",
      povezavaDoIzdelka: "#",
      popust: "0",
      opis: "650 kW športni motor CF Moto"
  },
  {
      naziv: "Honda CBR 500 R",
      cena: 7590.00,
      povezavaSlike: "https://www.honda-as.com/wp-content/uploads/2021/01/cbr500r-red.jpg",
      povezavaDoIzdelka:"#",
      popust: "0",
      opis: "500 kW športni motor Honda"
  },
  {
      naziv:"BMW S 1000 RR",
      cena:24233.00,
      povezavaSlike:"https://cdn.speedsize.com/4022aca3-422d-45a9-b2f1-0683e17036ac/https://avto-magazin.metropolitan.si/media/cache/upload/Photo/2019/05/07/p90327354_highres_bmw-s-1000-rr-with-mjpg_biggalleryimage.jpg",
      povezavaDoIzdelka:"#",
      popust: "0",
      opis: "1000 kW športni motor BMW"
  }
  ]);

await knex('podatkiKosarice').del()
  await knex('podatkiKosarice').insert([
    {
      izbraniIzdelki: JSON.stringify(['testni', 'podatki']),
      skupnaCena: '51865.05',
      datum: 'blablabla'
    }
  ]);
};