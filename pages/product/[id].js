import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Product.module.css'
import Layout from '../../components/layout'

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

        {/* Absolute path to the public directory for our logo */}
        <img src="/svg/logo.svg" alt="Thinx Logo" className={styles.logo} />

        {/* Using router we can access data based on the product slug */}
        <div>Product info for {id}.</div>

        {/* POST form submission to our email API endpoint. */}
        <form className={styles.form} method="POST" action="http://localhost:3000/api/email">
          <p>Pre-order this now!</p>
          <input type="email" name="email" defaultValue="andrew.lpuig@gmail.com" />
          <button type="submit" className={styles.btn}>Submit</button>
        </form>

        {/* Link component with client-side navigation */}
        <Link href="/">
          <a className={styles.uglyButton}>Home</a>
        </Link>

      </div>
    </Layout>
  );
}

export default Product