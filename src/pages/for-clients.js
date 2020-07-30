import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import cx from 'classnames'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import Grid, { GridItem } from 'components/Grid'
import WaterColor from 'components/WaterColor'
import ImgCaption from 'components/ImgCaption'

import styles from './for-clients.module.scss'

const ForClientsPage = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const ImgShowcase = data.ImgShowcase.childImageSharp.fluid

  return (
    <Layout className={styles.page}>
      <SEO title="For Clients" />
      <div className={cx(styles.root, 'content')}>
        <h1 className={cx(styles.title, 'content-max-width')}>
          Emergent Works builds software for purpose-driven
          organizations while creating employment opportunities for formerly incarcerated people.
        </h1>
        <ImgCaption
          fluid={ImgShowcase}
          alt="2020 Fellowship Showcase"
          caption="2020 Fellowship Showcase"
        />
        <Grid col={2} gap={4}>
          <GridItem>
            <section className={styles.servicesGroup}>
              <div className={styles.servicesItem}>
                <h2>Full stack web products</h2>
                <p>
                  Our team of web developers can deliver anything from a fully
                  bespoke website, to Squarespace customizations, to internal
                  tooling.
                </p>
              </div>
              <div className={styles.servicesItem}>
                <h2>Impact-driven work</h2>
                <p>
                  Experienced product leads guarantee that teams not only
                  delivery the technology you want, but the business outcomes
                  you need.
                </p>
              </div>
              <div className={styles.servicesItem}>
                <h2>Investment in your community</h2>
                <p>
                  Through our projects, our formerly incarcerated apprentices
                  get valuable, paid work experience to kickstart their careers
                  in tech.
                </p>
              </div>
            </section>
          </GridItem>
          <GridItem align="middle" justify="center">
            <WaterColor alt="" />
          </GridItem>
        </Grid>
        <section className={styles.contactUs}>
          <p className="h2">
            Let’s work together. Whether you have a project in mind, or need
            help defining it, we'd love to collaborate with you.
          </p>
          <p className="h2">
            Contact us at{' '}
            <a href="mailto:agency@emergentworks.org?subject=[Action] Emergent Works Agency">
              agency@emergentworks.org
            </a>
            .
          </p>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    ImgShowcase: file(relativePath: { eq: "showcase-2020-1.jpg" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

ForClientsPage.propTypes = {
  data: PropTypes.object,
}

export default ForClientsPage
