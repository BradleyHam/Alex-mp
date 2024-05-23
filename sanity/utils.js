import { createClient, groq } from "next-sanity";

export const client = createClient({
  apiVersion: '2024-03-30',
  projectId: '0sms5lnz',
  dataset: 'production',
  useCdn: false,
})

export async function getHomePage() {
  try {
    const projects = await client.fetch(groq`*[_type == "homePage"]{
        missionStatementHeading,
        missionStatement,
        areasOfFocusHeading,
        areasOfFocus[]{
          areaOfFocus,
          problemDescription,
          proposedSolutionDescription
        },
        getInvolvedHeading,
        voteInstructions,
        volunteerHeading,
        donateInstructions,
        newsHeading,
        contactSectionHeading,
        linkToVote,
        linkToDonate,
        whyNotLabour
      }[0]`,{},
    {next: {
      revalidate: 1 
    }});


    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of an error
  }
}
export async function getAboutPage() {
  try {
    const projects = await client.fetch(groq`*[_type == "aboutPage"]{
      aboutTitle,
      about,
      "aboutImage": aboutImage.asset->url,
      whyVoteHeading,
      "whyVoteImage": whyVoteImage.asset->url,
      whyVotePoints[],
      whyNotToriesHeading,
      whyNotToriesImage,
      whyNotPoints[]
      }[0]`,{},
    {next: {
      revalidate: 10 
    }});


    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of an error
  }
}
export async function getNewsPosts() {
  try {
    const projects = await client.fetch(groq`*[_type == "post"]{
      postTitle,
      shortDescription,
      "slug": slug.current,
      "postImage": postImage.asset->url,
      date
    }`,{},
    {next: {
      revalidate: 10 
    }});


    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function getContactPage() {
  try {
    const projects = await client.fetch(groq`*[_type == "contactPage"][0]{
      contactPageHeading,
      contactDetails,
      contactFormHeading
    }`,{},
    {next: {
      revalidate: 10 
    }});


    return projects;
  } catch (error) {
    console.error("Error fetching contact page:", error);
    return []; // Return an empty array in case of an error
  }
}

// Function to fetch the post
export async function fetchPostBySlug(slug) {
  try {
    const post = await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]{
      postTitle,
      slug,
      "postImage": postImage.asset->url,
      date,
      shortDescription,
      content
    }`, { slug });

    return post;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null; // Return null in case of an error
  }
}

// get manifesto

export async function getManifesto() {
  try {
    const projects = await client.fetch(groq`
      *[_type == "manifesto"][0]{
        introHeading,
        intro,
        howWillIVote,
        "howWillIVoteTitles": howWillIVote[].title,
        
      }
    `, {},
    {
      next: {
        revalidate: 10 
      }
    });

    return projects;
  } catch (error) {
    console.error("Error fetching manifesto:", error);
    return {}; // Return an empty object in case of an error
  }
}

