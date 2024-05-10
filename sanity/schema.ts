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
          title: "News Heading",
          name: "newsHeading",
          type: "text"
        },  
        {
          title: "Contact Section Heading",
          name: "contactSectionHeading",
          type: "text"
        },  
       
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
          title: "Biography",
          name: "biography",
          type: "array",
          of: [
            {
              type: 'block'
            }
          ],
        },
        {
          title: "Vision",
          name: "vision",
          type: "text"
        },
        {
          title: "Mission",
          name: "mission",
          type: "text"
        }
      ]
    },

    // News Page Schema - Document containing multiple posts
    {
      title: "News Page",
      name: "newsPage",
      type: "document",
      fields: [
        {
          title: "Articles",
          name: "articles",
          type: "array",
          of: [{type: 'post'}]
        }
      ]
    },

    // Post Schema for News Articles
    {
      title: "News Post",
      name: "post",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string"
        },
        {
          title: "Date",
          name: "date",
          type: "datetime"
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
          title: "Email",
          name: "email",
          type: "string"
        },
        {
          title: "Phone Number",
          name: "phoneNumber",
          type: "string"
        },
        {
          title: "Address",
          name: "address",
          type: "text"
        },
        {
          title: "Contact Form URL",
          name: "contactFormUrl",
          type: "url"
        }
      ]
    },
  ],
}
