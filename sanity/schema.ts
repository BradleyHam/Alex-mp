// Importing necessary Sanity types and components
import { type SchemaTypeDefinition } from 'sanity'



// Schema definition starts here
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Home Page Schema
    {
      title: "Home Page",
      name: "homePage",
      type: "document",
      fields: [
        {
          title: "Mission Statement Heading",
          name: "missionStatementHeading",
          type: "text"
        },
        {
          title: "Mission Statement",
          name: "missionStatement",
          type: "text"
        },
        {
          title: "Areas of Focus Heading",
          name: "areasOfFocusHeading",
          type: "text"
        },
        {
          title: "Areas of Focus",
          name: "areasOfFocus",
          type: "array",
          of: [
            {
              type: 'object',
              fields: [
                {
                  title: 'Focus Heading',
                  name: 'areaOfFocus',
                  type: 'string'
                },
                {
                  title: 'Problem Description',
                  name: 'problemDescription',
                  type: 'text'
                },
                {
                  title: 'Proposed Solution Description',
                  name: 'proposedSolutionDescription',
                  type: 'text'
                }
              ]
            }
          ]
        },
        {
          title: "Get Involved Heading",
          name: "getInvolvedHeading",
          type: "text"
        },
        {
          title: "Vote Instructions",
          name: "voteInstructions",
          type: "text"
        },
        {
          title: "Link to vote",
          name: "linkToVote",
          type: "url"
        },
        {
          title: "Volunteer heading",
          name: "volunteerHeading",
          type: "text",
          description: 'text displayed aboved volunteer form'
        },
        {
          title: "Donate Instructions",
          name: "donateInstructions",
          type: "text"
        },
        {
          title: "Link to donate",
          name: "linkToDonate",
          type: "url"
        },
        {
          title: "News Heading",
          name: "newsHeading",
          type: "text"
        },  
        {
          title: "Contact Section Heading",
          name: "contactSectionHeading",
          type: "text"
        }
       
      ],
      preview: {
        prepare() {
          return {
            title: 'Home Page'  // Static title for all documents of this type
          }
        }
      }
      
    },  
   

    // About Page Schema
    {
      title: "About Page",
      name: "aboutPage",
      type: "document",
      fields: [
        {
          title: "About Title",
          name: "aboutTitle",
          type: "text",
        },
        {
          title: "About",
          name: "about",
          type: "text"
        },
        {
          title: "About Image",
          name: "aboutImage",
          type: "image"
        },
        {
          title: "Why vote heading",
          name: "whyVoteHeading",
          type: "text"
        },
        {
          title: "Why vote points",
          name: "whyVotePoints",
          type: "array",
          of: [
            {
              type: 'text'
            }
          ]
        }
      ],
      preview: {
        prepare() {
          return {
            title: 'About Page'  // Static title for all documents of this type
          }
        }
      }
    },
    // Post Schema for News Articles
    {
      title: "News Post",
      name: "post",
      type: "document",
      fields: [
        {
          title: "Post Title",
          name: "postTitle",
          type: "string"
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: "postTitle",
            maxLength: 96
          }
        },
        {
          title: "Post Image",
          name: "postImage",
          type: "image"
        },
        {
          title: "Date",
          name: "date",
          type: "date"
        },
        {
          title: "Short description",
          name: "shortDescription",
          type: "text",
          description: 'a short description for the news card on the news page, not displayed on the post page'
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          of: [
            {
              type: 'block'
            }
          ]}
      ]
    },


    // Contact Page Schema
    {
      title: "Contact Page",
      name: "contactPage",
      type: "document",
      fields: [
        {
          title: "Contact Page Heading",
          name: "contactPageHeading",
          type: "text"
        },
        {
          title: "Contact Details",
          name: "contactDetails",
          type: "array",
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          title: "Contact Form Heading",
          name: "contactFormHeading",
          type: "text"
        },
        
      ],
      preview: {
        prepare() {
          return {
            title: 'Contact Page'  // Static title for all documents of this type
          }
        }
      }
    },
  ],
  
}
