import { PortableText } from '@portabletext/react';

const components = {
    types: {
        block: (props) => {
            switch (props.value.style) { // Make sure `props.value.style` is the correct path
                case 'h1':
                    return <h1>{props.children}</h1>;
                case 'h2':
                    return <h2>{props.children}</h2>;
                case 'blockquote':
                    return <blockquote>{props.children}</blockquote>;
                default:
                    return <p>{props.children}</p>;
            }
        },
        // Add other serializers as needed
    },
};

const SanityBlockContent = ({ blocks }) => {
    if (!blocks) {
        return <p>No content available.</p>; // Helpful for debugging empty content
    }

    return (
        <PortableText
            value={blocks}
            components={components}
        />
    );
};
