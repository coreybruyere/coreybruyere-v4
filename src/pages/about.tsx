import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>About</h1>
        <p>Welcome to page 2</p>
        <ul>
          <li>
            <Link to="/media/my-first-book">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTwo
