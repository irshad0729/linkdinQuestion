import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>My Blog Site</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="blog-post">
          <h2>My First Blog Post</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            risus vitae purus lacinia fringilla. Donec non lacus vitae est
            viverra sagittis ac eu quam. Pellentesque sit amet blandit lorem.
            Vestibulum auctor volutpat velit, in ultrices orci faucibus eget.
          </p>
          <ul>
            <li>
              Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>Item 2 Lorem ipsum dolor</li>
            <li>
              Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <a href="#">Read More</a>
        </section>
        <section className="blog-post">
          <h2>My Second Blog Post</h2>
          <ul className="custom-list">
            <li>
              Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>Item 2 Lorem ipsum dolor</li>
            <li>
              Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>

          <p>
            Nullam ac lorem elit. Sed eget nibh nec lorem bibendum imperdiet.
            Praesent lacinia nulla at nunc sagittis, ut vestibulum lorem
            malesuada. Proin gravida lectus id aliquam dapibus. Curabitur
            pellentesque orci ut odio euismod convallis.
          </p>
          <a href="#">Read More</a>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Blog Site</p>
      </footer>
    </div>
  );
}
