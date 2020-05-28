import Head from "next/head";
import { FootNotes, Note, Ref } from "../components/notes";
import Image from "../components/image";
import UL from "../components/ul";
import LI from "../components/li";
import P from "../components/p";
import Home from "../components/home";
import Pa from "../components/pa";
import Title from "../components/title";
import Wrapper from "../components/wrapper";
import Figure from "../components/figure";

export default () => (
  <Wrapper>
    <Home />
    <Head>
      <title>My experience using hackintosh low-end PC for 3 years.</title>
    </Head>

    <Figure>
      <Image src="https://res.cloudinary.com/aranajhonny/image/upload/v1497476227/fun_e92gtn.webp" />
    </Figure>
    <Title> My experience using hackintosh low-end PC for 3 years.</Title>

    <P>
      Almost 3 years ago I installed Mac OS X mavericks for the first time on my
      personal computer, before this I used a lot of distributions of gnu linux.
      but sometimes I had heard about Mac OS X and hackintosh, in that moment it
      seemed something Impossible to do.
    </P>
    <P>
      After spending hours reading guides in forums, reddit, tonymac86. I
      decided to try installing mavericks. The first thing I did was to download
      a torrent of niresh. For that moment there was no support for Yosemite.
    </P>
    <P>
      In which I finished downloading follow the installation guide of
      hackintosh[dot]zone the first thing I found when trying to start the usb
      was a black screen that showed a warning of kernel panic. This happened
      because I was doing the installation with the video card placed in the
      computer and it did not have support.
    </P>
    <Figure desc="Reference image of kernel panic.">
      <Image src="https://res.cloudinary.com/aranajhonny/image/upload/v1497476218/301n3aw_bysabg.webp" />
    </Figure>
    <P>
      After reading and trying several times, it worked!, At that moment the
      emotion I felt was incredible to be able to use the Mac OS X system in a
      computer with so few resources.
    </P>
    <Figure desc="Mac OS X Mavericks by Niresh 2014~2015">
      <Image src="https://res.cloudinary.com/aranajhonny/image/upload/v1497476202/mavericks_aq0v4c.webp" />
    </Figure>
    <P>
      Later on I got to read a lot about the Kexts that basically are the
      equivalent of the drivers in microsoft windows and look for the ones that
      would serve me for my video card, Everything worked fine.
    </P>
    <P>
      A few months passed until Yosemite came out, with a renewed interface a
      lot of improvements, and even included support for my set up. Then I
      decided to do the same, and try to install it, the installation process
      was quite similar, although the performance was not the same, it cost me
      to configure the video card since I did not save a copy of the kexts
      files, but in the end it worked fine But consumed half of my memory.
    </P>
    <Figure desc="Mac OS X Yosemite by Niresh 2015~2016">
      <Image src="https://res.cloudinary.com/aranajhonny/image/upload/v1497476299/yosemite_mp3mbb.webp" />
    </Figure>
    <P>
      That version 10.10.1 used for a long time almost 1 year, then the time
      came to install El Capitan, which to my surprise never leave a distro
      niresh. I had to do the vanilla installation process, which was very
      complicated, but not impossible.
    </P>
    <Figure desc="Mac OS X Capitan 2016~2017">
      <Image src="https://res.cloudinary.com/aranajhonny/image/upload/v1497476495/capitan_url6gh.webp" />
    </Figure>
    <P>
      After using this version for a long time, my video card stopped working,
      and it took almost a year to buy another, the reason is that I live in
      Venezuela and here to buy hardware is very expensive.
    </P>
    <P>
      But I did the same again when buying my new GT520 card. And to this day
      everything has worked perfectly, it is noteworthy that I use the computer
      only to program in php, nodejs, and some python. Also my family usually do
      things that ordinary people do like watching movies, edit spreadsheets.
      Although I have installed the nvidia driver I do not usually play here,
      nor edit 3d files, nor videos. Since that requires a lot of Ram and I only
      have 4 gb.
    </P>

    <Figure desc="Mac OS X Yosemite 2017~Present">
      <Image src="https://res.cloudinary.com/aranajhonny/image/upload/v1497476398/now_wyce2z.webp" />
    </Figure>

    <P>
      Advantages of using Mac OS X during this time:
      <UL>
        <LI>
          <Pa>* Use all programs that are exclusive to Mac OS X</Pa>
        </LI>
        <LI>
          <Pa>
            * Have microsoft office and do not need something like wine in
            linux.
          </Pa>
        </LI>
        <LI>
          <Pa>* Everything works at first most of the time.</Pa>
        </LI>
        <LI>
          <Pa>* To learn how to develop iphone applications with xcode</Pa>
        </LI>
        <LI>
          <Pa>* Something that I like is that very little fails.</Pa>
        </LI>
      </UL>
    </P>
    <P> </P>
    <P>
      Disadvantages:
      <UL>
        <LI>
          <Pa>
            * Not being able to access iCloud, App Store or any of that because
            it is not a real mac.
          </Pa>
        </LI>
        <LI>
          <Pa>
            * The ram memory consumption is very high here, compared to linux or
            windows.
          </Pa>
        </LI>
        <LI>
          <Pa>* The incompatibility with some pci devices.</Pa>
        </LI>
      </UL>
    </P>
    <FootNotes>
      <Note id="1">
        Thank you for reading. if you have any questions DM to
        aranajhonny@outlook.com
      </Note>
      <Note id="2">
        Some react components used in this blog were taken from rauchg.com
      </Note>
      <Note id="3">
        Sorry for any mistakes, english is not my native language. I like AI and
        use the google translate.
      </Note>
    </FootNotes>
    <P />
    <style jsx>{`
      .image {
      }
      a {
        color: #0366d6;
        text-decoration: none;
      }
      a:hover {
        background-color: #0366d6;
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </Wrapper>
);
