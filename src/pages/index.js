import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import data from "../../content/homepage.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>{data.title}</h1>
    {data.content.map((item, index) => {
      return (
        <div key={`content_item_${index}`}>
          <h2>{item.heading}</h2>
          <p>{item.body}</p>
        </div>
      )
    })}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
