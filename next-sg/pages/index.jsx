import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import fetch from 'isomorphic-unfetch'

const Home = ({ user }) => {

  const username = user && user.name;;

  const [name, setName] = useState('test');
  const router = useRouter();
  console.log(router);

  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Link to ’ factory Page</h2>
        <div>user:  { user }</div>

        <button
          type="button"
          className="btn"
          onClick={() => router.push('/factory/factoryList')}
        >
          factory
        </button>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="button"
          className="btn"
          onClick={() => router.push(`/factory/${name}`)}
        >
          {name}
          {' '}
          으로 가기
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

    </div>
  );
};

export const getServerSideProps = async () => { 
  try {
    const res = await fetch("https: //api.github.com/users/jerrynim"); 
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} }; 
  } catch (e) { 
    console.log(e);
    return { props: {} }; 
  }
}

export default Home;
