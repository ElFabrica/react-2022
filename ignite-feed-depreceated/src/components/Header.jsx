import styles from "./header.module.css"
import igniteLogo from "../assets/ignite-logo.svg"

console.log(igniteLogo)

export function Header() {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite"/>
      <strong>Iginte Feed</strong>
      <main>
        
      </main>
    </div>
  )
}