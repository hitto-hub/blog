import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="hitto" subtitle="サブタイトル" imageOn />
    </Container>
  );
}
