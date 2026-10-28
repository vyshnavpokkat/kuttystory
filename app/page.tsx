import Image from 'next/image';
import Link from 'next/link';
import { books } from '@/data/books';
import './landing.css';

const scenes = {
  window: {
    src: '/moments/window.jpg',
    alt: 'Expectant mother standing by a sunlit window, holding her bump',
    position: 'center 18%',
  },
  dream: {
    src: '/moments/dream.jpg',
    alt: 'A hand holding an ultrasound beside a baby cardigan and teddy',
    position: 'center',
  },
  still: {
    src: '/moments/still.jpg',
    alt: 'Knitted baby booties, a sprig of flowers, and a handwritten letter',
    position: 'center',
  },
  hello: {
    src: '/moments/hello.jpg',
    alt: 'A mother kissing her sleeping newborn',
    position: 'center 28%',
  },
  reading: {
    src: '/moments/reading.jpg',
    alt: 'A mother and child reading a storybook together on the sofa',
    position: '72% 50%',
  },
} as const;

function EditorialScene({ kind }: { kind: keyof typeof scenes }) {
  const scene = scenes[kind];
  return (
    <div className={`editorial-scene ${kind}`}>
      <Image
        src={scene.src}
        alt={scene.alt}
        fill
        sizes="(max-width: 780px) 100vw, 58vw"
        style={{ objectFit: 'cover', objectPosition: scene.position }}
        preload={kind === 'window'}
      />
    </div>
  );
}

export default function Home() {
  const flagship = books[0];
  return (
    <main className="landing">
      <section className="campaign-hero wrap">
        <div className="campaign-copy">
          <p className="eyebrow">Little Adventures presents</p>
          <h1>
            Before I met you,
            <br />I already <i>loved you.</i>
          </h1>
          <p>A little story about the love that begins before hello.</p>
          <div className="actions">
            <Link className="button" href="#storybook">
              Discover the storybook
            </Link>
            <Link className="text-link" href="/about">
              Read our story →
            </Link>
          </div>
        </div>
        <EditorialScene kind="window" />
      </section>
      <section className="moment dream-moment">
        <div className="moment-image">
          <EditorialScene kind="dream" />
        </div>
        <div className="moment-copy">
          <p className="eyebrow">The moments before hello</p>
          <h2>
            You were still <i>a dream.</i>
          </h2>
          <p>I imagined your face, your little hands, and the world we would discover together.</p>
        </div>
      </section>
      <section className="still-life wrap">
        <div className="still-copy">
          <p className="eyebrow">Already part of my world</p>
          <h2>
            I hadn’t met you.
            <br />
            <i>Yet you were everywhere.</i>
          </h2>
          <p>In the little things I saved, the names I imagined, and the dreams I carried into every tomorrow.</p>
        </div>
        <EditorialScene kind="still" />
      </section>
      <section className="moment hello-moment">
        <div className="moment-copy">
          <p className="eyebrow">The first hello</p>
          <h2>
            And then, there <i>you were.</i>
          </h2>
          <p>Every dream became a little person I could finally hold.</p>
        </div>
        <div className="moment-image">
          <EditorialScene kind="hello" />
        </div>
      </section>
      <section className="storybook-reveal" id="storybook">
        <div className="wrap reveal-grid">
          <div className="reveal-book">
            <Image
              src="/moments/book.jpg"
              alt="The Before I Met You hardcover storybook"
              fill
              sizes="(max-width: 780px) 92vw, 480px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="reveal-copy">
            <p className="eyebrow">The storybook</p>
            <h2>
              A little piece of
              <br />
              <i>your beginning.</i>
            </h2>
            <p>Made to hold the memories, dreams, and love that came before your first hello.</p>
            <div className="book-detail">
              <span>Before I Met You</span>
              <small>A little story about the love that began before hello.</small>
            </div>
            <Link className="button" href={`/stories/${flagship.slug}`}>
              Discover the storybook
            </Link>
          </div>
        </div>
      </section>
      <section className="return-to wrap">
        <div className="return-copy">
          <p className="eyebrow">A story to return to</p>
          <h2>
            One day, you’ll ask me
            <br />
            how your story <i>began.</i>
          </h2>
          <p>And I’ll open this little book.</p>
          <Link className="button" href="/stories">
            Explore Little Adventures
          </Link>
        </div>
        <EditorialScene kind="reading" />
      </section>
    </main>
  );
}
