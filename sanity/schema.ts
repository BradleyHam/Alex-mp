// Importing necessary Sanity types and components
import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent' // Ensure this is set up for rich text fields

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
          title: "Header Image",
          name: "headerImage",
          type: "image",
          options: {
            hotspot: true  // Enables image cropping
          }
        },
        {
          title: "Heading",
          name: "heading",
          type: "string",
          description: "The main heading of the page"
        },
        {
          title: "Main Message",
          name: "mainMessage",
          type: "text"
        },
        {
          title: "Featured Video",
          name: "featuredVideo",
          type: "url",
          description: "Link to a featured video, e.g., a YouTube video"
        },
        {
          title: "Call to Action",
          name: "callToAction",
          type: "string",
          description: "A strong call to action to encourage visitor engagement"
        }
      ]
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
