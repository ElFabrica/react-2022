import { Header } from "./components/Header"
import "./global.css"
import styles from "./app.module.css"
import { Sidebar } from "./components/Sidebar"
function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        Meus posts posts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste adipisci doloremque vitae cum beatae! Suscipit nobis vero dolores doloribus dicta incidunt voluptatum nihil labore natus hic. Perferendis temporibus sint blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo iure voluptas pariatur quaerat laudantium sint nesciunt eligendi consequatur facilis. Aliquid inventore omnis minus est aut nobis iste consequuntur soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sequi a iure, eos unde, magnam ipsum deleniti aperiam culpa veniam tempora repudiandae quam. Dolore impedit, quia animi reiciendis doloribus sit.
      </main>
      </div>
    </div>
  )
}

export default App
