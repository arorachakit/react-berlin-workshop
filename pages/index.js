import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/Layout"

import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react"

export default function Home({story}) {
  story = useStoryblokState(story, {
    resolveRelations: ["popular-articles.articles"],
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* <h1>
          {props.story ? props.story.name : 'My Site'}
        </h1> */}
      </header>

      <main>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    resolve_relations: ["popular-articles.articles"],
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}