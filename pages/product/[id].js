import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Product.module.css'
import Layout from '../../components/Layout'

// Product page.
const Product = () => {
  const router = useRouter()
  const { id } = router.query

  return (

    <Layout>
      <Head>
        <title>Thinx - {id}</title>
      </Head>

      <div>

        {/* Link component with client-side navigation */}
        <Link href="/">
          <a className={styles.logo}>
            {/* Absolute path to the public directory for our logo */}
            <img src="/svg/logo.svg" alt="Thinx Logo" />
          </a>
        </Link>

        {/* Using router we can access data based on the product slug */}
        <div className={styles.p}>Product info for {id}.</div>
        <p className={styles.label}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni porro ex esse, voluptas quidem perspiciatis maxime labore at assumenda quaerat hic repudiandae accusantium voluptatum! Quidem fugiat labore ratione soluta.</p>

        {/* POST form submission to our email API endpoint. */}
        <form className={styles.form} method="POST" action="http://localhost:3000/api/email">
          <input type="email" name="email" autoComplete="off" defaultValue="andrew@shethinx.com" className={styles.input} placeholder="Your email please" />
          <button type="submit" className={styles.btn}>Submit</button>
        </form>

      </div>
    </Layout>
  );
}

export default Product