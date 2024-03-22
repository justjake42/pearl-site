import { Card, Metric, Title, Text } from "@tremor/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-10">

      <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center gap-5 pt-10">
        <Image
          className="rounded-lg md:self-center sm:self-center"
          src="/images/PXL_20240104_120631846.jpg"
          width={400}
          height={200}
          alt="Picture of the author"
        />
        <div className="self-center text-center gap-11">
          <Metric className="text-8xl">
            Happy birthday!
          </Metric>
          <Text className="text-sm pt-5">
            (Cooked up this site soooo fast so I wasn't able to polish it.)
          </Text>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center gap-5">
        <div className="flex flex-col justify-center">
          <Text className="w-auto lg:text-end md:text-center text-xl">
            I want to give you something that is uniquely me, uniquely Jake. So, how about a website?
            I mean this is something up my field. Here are some pics of you that I have through the years.
            I've said this to you a lot, and repeating na but.
          </Text>
          <Metric className="pt-10 lg:text-end md:text-center text-5xl">I'm glad I met you, You've changed my life in a positive way.</Metric>
          <Text className="pt-10 w-auto lg:text-end md:text-center text-xl">
            Is there any more of me to say? I've said it a lot in the 10 years we've known each other.
          </Text>
        </div>
        <Image
          className="rounded-lg md:self-center sm:self-center"
          src="/images/IMG_20231030_162647.jpg"
          width={400}
          height={200}
          alt="Picture of the author"
        />

      </div>
      <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center gap-5">
        <Image
          className="rounded-lg md:self-center sm:self-center"
          src="/images/00100sPORTRAIT_00100_BURST20200219113923184_COVER.jpg"
          width={400}
          height={200}
          alt="Picture of the author"
        />


        <Image
          className="rounded-lg md:self-center sm:self-center"
          src="/images/IMG_20181106_152330.jpg"
          width={400}
          height={200}
          alt="Picture of the author"
        />

        <Image
          className="rounded-lg md:self-center sm:self-center"
          src="/images/00100sPORTRAIT_00100_BURST20200213170321517_COVER.jpg"
          width={400}
          height={200}
          alt="Picture of the author"
        />

      </div>

      <div className="flex lg:flex-col md:flex-col sm:flex-col xs:flex-col justify-center">
        <Text className="pt-10 w-auto lg:text-center md:text-center text-xl">
          Well, for now I'll say this: thanks for being there when I feel like crap, thanks for being there when I feel like my worth is almost zero. You've been a guiding light throughout the years. I won't be around as much as I used to, but I'll be sure to meet up with you when I'm in town.        </Text>
        <Metric className="pt-10 lg:text-center md:text-center text-5xl">
          No need for pleasantries, no need for me to yap longer, you know how you mean to me.
        </Metric>
        <Title className="pt-10 w-auto lg:text-center md:text-center text-xl">
          Coded with love (and some janky code), Jacob
        </Title>

      </div>


      <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center gap-5 pb-10">
        <Image
          className="rounded-lg md:self-center sm:self-center"
          src="/images/received_982486508459073.jpeg"
          width={600}
          height={200}
          alt="Picture of the author"
        />
      </div>

    </div>
  );
}
