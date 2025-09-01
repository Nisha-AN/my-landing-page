import ResponsiveHero from '../components/hero/ResponsiveHero'; 
import FeatureRow from '../components/featureRow';

export default function Home() {
  return (
    <main>
      <ResponsiveHero />

      <section id="features">
        <FeatureRow
          title="Sunrise"
          text="Waves meet the sun, and a new day begins."
          image={{ src: '/poster1.webp', alt: 'Performance', width: 1200, height: 900 }}
        />
        <FeatureRow
          reverse
          title="Cliff View"
          text="The ocean looks even bigger from up here."
          image={{ src: '/poster2.jpeg', alt: 'Responsive layout', width: 1200, height: 900 }}
        />
      </section>
    </main>
  );
}
