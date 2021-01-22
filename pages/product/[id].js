import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Product.module.css'
import Layout from '../../components/Layout'

/*
Ok this is a slightly bigger page, but still just a page.
*/
const Product = () => {

  // Use router to get unique url slug info, like the [id].
  const router = useRouter()
  const { id } = router.query

  return (

    <Layout>

      {/* Set <title> element using Next.js <Head> component. */}
      <Head>
        <title>Thinx - {id}</title>
      </Head>

      <div>

        {/* Link component with client-side navigation. (test background color)*/}
        <Link href="/">
          <a className={styles.logo}>
            {/* Absolute path to the public directory for our logo. */}
            <img src="/svg/logo.svg" alt="Thinx Logo" />
          </a>
        </Link>

        <h1 className={styles.p}>Product info for {id}.</h1>

        <p className={styles.label}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni porro ex esse, voluptas quidem perspiciatis maxime labore at assumenda quaerat hic repudiandae accusantium voluptatum! Quidem fugiat labore ratione soluta.</p>

        {/* POST form submission to our email API endpoint. */}
        <form className={styles.form} method="POST" action="http://localhost:3000/api/email">
          <input type="email" name="email" autoComplete="off" className={styles.input} placeholder="Your email please :)" />
          <button type="submit" className={styles.btn}>Submit</button>
        </form>

      </div>
    </Layout>
  );
}

export default Product