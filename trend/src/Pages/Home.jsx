import React, { useEffect, useState } from 'react'
import { Footer } from '../Components/footer'
import "../Styles/Home.css"

export const Home = () => {
const [int,setInt]=useState(0)
    let images=[
        "https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-MainBanner-P3-FootwearCarnival-RedTapeFila-Flat60.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-MainBanner-P5-GantSuperdryClarks-Min50Extra35.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-MainBanner-P7-ArrowUSPA-Upto50.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClearanceSale.jpg"
    ]

    const u=0;

   
    


   

// console.log(int)

  return (
    <div id="HomeMain" >
 
 <div className="home_slider">
{/* <img src={images[int]} alt="" /> */}
<img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClearanceSale.jpg" alt="" />
 </div>
{/* /////////////////////////////////////////// */}
 <div className="home1" >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90-11.jpg" alt="" />
 </div>

 <div className="home1">
    <img src="https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg" alt="" />
 </div>

 <div className="home1">
<img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SpecieUpYourBrandGame-SectionheaderStrip.jpg" alt="" />
 </div>
 {/* /////////////////////////////////////////////////// */}

 <div className='home_slider'>
<img src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P5-Activewear-PumaPerformax-Min50.jpg" alt="" />
 </div>
 {/* ///////////////////////////// */}


 <div className='home1' >
<img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-BankOffer-PayUpto3.jpg" alt="" />
 </div>

{/* ////////////////////////// */}


<div className='main-home2' >
<div className='home1'>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Sectionheader.jpg" alt="" />
</div>
    <div className='home2'>
        <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" alt="" />
        </div>
        <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Relianceone.jpg" alt="" />
        </div>
        <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-inviteFriends.jpg" alt="" />
        </div>
    </div>
</div>

<div className='main-home3'>
    <div className='home1' >
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-SectionHeader.jpg" alt="" />

    </div>

    <div className='home3'>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P1-Puma-4060.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P2-Levis-Flat50Extra10.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P3-Adidas-4060.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P4-Campus-Upto60.jpg" alt="" />
</div>

    </div>

</div>

<div className='home1' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FlashDealsHeaderStrip.jpg" alt="" />
</div>


<div className='home_slider' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-Flash%20Deals-P5-Brands%20-Flat81.jpg" alt="" />
</div>

<div className='home1' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-Sectionheader.jpg" alt="" />
</div>

<div className='home_slider'>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P1-AvaasaNetplayAcai-Upto70.jpg" alt="" />
</div>

<div className='home1'>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-JIT-Sectionheader.jpg" alt="" />
</div>

<div className='home_slider' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-Daily%20Deals%20-P2-Brands-Min50+Extra35s.jpg" alt="" />
</div>



<div className='main-home3'>
    <div className='home1' >
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-Sectionheader.jpg" alt="" />

    </div>

    <div className='home3'>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P1-GAP-Upto25.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P2-Produkt-Upto50.jpg" alt="" />
    {/* pruple */}
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P3-Arbunore-Min50.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P4-Avaasa-Min30.jpg" alt="" />
</div>

    </div>

</div>

<div className='home_slider'>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/UHP-AJIOBeauty-1440x397.jpg" alt="" />
</div>


<div className='home1' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-JIT-SectionHeaderStrip.jpg" alt="" />
</div>


<div className='home_slider' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/20022023-UHP-D-JIT-P3-Brands-upto80..jpg" alt="" />
</div>





<div className='main-home3'>
    <div className='home1' >
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-Sectionheader.jpg" alt="" />

    </div>

    <div className='home3'>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P1-TopsTees-USPAPuma-Starting499.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P2-Dresses-VeroModaONLY-Starting599.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P3-LevisWrangler-JeansJegings-Starting999.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P4-Formalwear-AllenSollyBlackberrys-Starting899.jpg" alt="" />
</div>

    </div>

</div>


<div className='home1' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHER-Sectionheader.jpg" alt="" />
</div>


<div className='home_slider' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-Daily%20Deals%20-P3-Brands-Starting599+Extraupto33.jpg" alt="" />
</div>


<div className='home1' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHIM-Sectionheader.jpg" alt="" />
</div>


<div className='home_slider' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-UHPwomen-p4-zivame-clovia-starting199.jpg" alt="" />
</div>

{/* /////////////////// */}


<div className='main-home3'>
    <div className='home1' >
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-Sectionheader.jpg" alt="" />

    </div>

    <div className='home3'>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P1-KurtiKurtaSets-AvaasaGlamroos-Starting599.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P2-Sarees-IndiePicksHritika-Starting432.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P3-handbags-Brands-Starting499.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P4-Jewellery-Brands-Upto80.jpg" alt="" />
</div>

    </div>

</div>
{/* ////////////////////////// */}


<div className='main-home3'>
    <div className='home1' >
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-SectionHeader.jpg" alt="" />

    </div>

    <div className='home3'>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P1-SportsCasualShoes-ReebokPuma-Starting1199.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P2-CasioFossil-Watches-Upto70.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P3-FlipFlopsSandals-AdidasCampus-Starting299.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P4-Home-GoodomesHomecentre-upto80.jpg" alt="" />
</div>

    </div>

</div>
{/* ////////////////////////////////////////// */}

<div className='main-home3'>
    <div className='home1' >
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-SectionHeader.jpg" alt="" />

    </div>

    <div className='home3'>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P1-Trendyol-4065.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P2-Koton-3060.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P3-NA-KD-3060.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P4-WKND-Upto60.jpg" alt="" />
</div>

    </div>

</div>
{/* //////////////////////////////// */}

<div className='main-home3'>
    <div className='home1' >
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-SectionHeader.jpg" alt="" />

    </div>

    <div className='home3'>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P1-Crocspuma-3060.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P2-MnSUCB-Starting559.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P3-USPAPepeJeans-Min40.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P4-HellcatToonyPort-Upto70.jpg" alt="" />
</div>

    </div>

</div>




{/* //////////////////////////// */}


<div className='main-home3'>
    <div className='home1' >
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-SectionheaderStrip.jpg" alt="" />

    </div>

    <div className='home3'>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-P1-Nike-Upto50.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-P2-UCB-3070.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-P3-Superdry-3050.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-P4-Pedro-min40.jpg" alt="" />
</div>

    </div>

</div>


<div className='home1' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-AJIOGOLD.jpg" alt="" />
</div>

<div className='main-home4'>


<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P2-Trends.jpg" alt="" />
</div>


<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P3-Sneakerhood.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/47.4_1.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P5-Sportswear.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P6-Footwear.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P7-Accessories.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P8-Wedding.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P9-Sarees.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P14-Innerwearmen.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P15-Jewellery.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P16-Lingerie.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P17-Beauty.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P18-yogawear.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P20-MAx.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P10-Homegrownbrands.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P11-Indie.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P12-Home.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P7-Accessories.jpg" alt="" />
</div>

<div>
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P8-Wedding.jpg" alt="" />
</div>


</div>



<div className='home1' >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/Discover%20Online%20Stnkores%20(D).jpg" alt="" />
</div>

<div className='home1' >
<img src="https://assets.ajio.com/cms/AJIO/WEB/13102020-D-unisex-ajiocares-strip.jpg" alt="" />
</div>

<div className='class'>

</div>
<div className="home1" >
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90-11.jpg" alt="" />
 </div>


<Footer/>

    </div>
  )
}
