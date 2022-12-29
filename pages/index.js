import fs from 'fs/promises'
import path from 'path'

import Link from 'next/link'

function HomePage(props) {
  const { products } = props

  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json')

  const jsonData = await fs.readFile(filePath)

  const data = JSON.parse(jsonData)

  return {
    props: {
      products: data.products,
    },
  }
}

export default HomePage
