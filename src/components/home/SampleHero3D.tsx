import Spline from "@splinetool/react-spline";

export default function SampleHero3D() {
  return (
    <section className="relative flex h-screen w-full overflow-hidden bg-background">
      <div className="flex h-full w-full">
        <Spline
          scene="https://prod.spline.design/yBvt-RSpNFpUcULN/scene.splinecode"
          width={1440}
          height={800}
        />
      </div>
    </section>
  );
}
