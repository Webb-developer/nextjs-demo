import styles from './Layout.module.css'

/*
The Layout component is used to wrap pages to maintain a consistent styling.
*/
export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}