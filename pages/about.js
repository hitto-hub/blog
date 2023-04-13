import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import {
  TwoColumn,
  TowColumnMain,
  TowColumnSidebar,
} from "components/two-column";
import Image from "next/image";
import eyecatch from "images/about.jpg";

export default function About() {
  return (
    <Container>
      <Meta pageTitle="アバウト" pageDesc="About development activities"  />

      <Hero title="About" subtitle="This is the about page" />

      <figure>
        <Image
          src={eyecatch}
          alt="eyecatch"
          layout="responsive"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TowColumnMain>
          <PostBody>
            <h1>羅生門</h1>
            <h2>第一話</h2>
            <p>
              ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。
            </p>
            <p>
              広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。
            </p>
            <h1>羅生門</h1>
            <h2>第一話</h2>
            <p>
              ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。
            </p>
            <p>
              広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。
            </p>
            <h1>羅生門</h1>
            <h2>第一話</h2>
            <p>
              ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。
            </p>
            <p>
              広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。
            </p>
          </PostBody>
        </TowColumnMain>
        <TowColumnSidebar>
          <Contact />
        </TowColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
