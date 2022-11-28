import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import Article from '../components/Article';
import AllArticles from '../components/AllArticles'
import PopularArtices from '../components/PopularArticles';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  article: Article,
  'all-articles': AllArticles,
  'popular-articles': PopularArtices
};

storyblokInit({
  accessToken: "yRMjqUhByJG7Las0vyoH3wtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
