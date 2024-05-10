import { createClient, groq } from "next-sanity";



export default async function getHomePage() {

    const client = createClient({
        apiVersion: '2024-03-30',
        projectId: '0sms5lnz',
        dataset: 'production',
        useCdn: false,
      })
      
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
        volunteerText,
        donateInstructions,
        newsHeading,
        contactSectionHeading
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
