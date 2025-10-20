import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'priyankamanickkam2994@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Priyanka Manickkam, I am reaching out to you because...',

    upworkProfile: '/resume/PriyankaM-SFD-Resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Priya2994' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/priyanka-m-0319a5143/',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },

        {
            name: 'HTML',
            icon: '/logo/html.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Strapi.Js',
            icon: '/logo/strapi.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Github',
            icon: '/logo/github.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'GoodGamin',
        slug: 'goodgamin',
        liveUrl: 'https://goodgamin.com/',
        year: 2025,
        description: `
      Good Gamin is quickly becoming one of the premier and leading gaming platforms in the industry. With innovative gameplay mechanics and cutting-edge technology.<br/>
      `,
        role: `
      Senior Software Engineer <br/>
        - Currently working on this project and converting html to nextjs project, so more details will be added soon.
        - this website is built using HTML, Tailwind CSS <br/>
        - Converted the figma designs into pixel perfect pages<br/>
        - made the website fuilly responsive<br/>
        - Enhanced user interaction with animations and transitions,,
        - used slick slider for the carousel`,
        techStack: ['Nextjs', 'Tailwind CSS', 'React.js', 'HTML'],
        thumbnail: '/projects/thumbnail/goodgamin.png',
        longThumbnail: '/projects/long/goodgamin.png',
        images: [
            '/projects/images/goodgamin1.png',
            '/projects/images/goodgamin2.png',
            '/projects/images/goodgamin3.png',
        ],
    },
    {
        title: 'Mahzooz Static',
        slug: 'Mahzooz-static',
        liveUrl: 'https://kycf.mahzooz.ae',
        year: 2025,
        description: `
      Celebrate life-changing possibilities with Mahzooz – the UAE’s first and leading weekly draw known for its consistent and highest payouts, offering participants the chance to win big. We've made it easy to unlock millions of dirhams every Saturday, turning Saturday into the best – and luckiest – day of the week! <br/> <br/>
      `,
        role: `
      Senior Software Engineer <br/>
      Owned the entire development lifecycle of the website including english and arabic languages, involved in reviewing and merging the PR'S, 
      Involved in the design and architecture of the project, Involved in guiding the team members for the best practices and code quality: <br/>
      <ul>
      
        <li>Created the single page website with responsive view</li>
        <li>Created the entire base of the website</li>
        <li>Created all the required components using latest technologies</li>
      </ul>
      `,
        techStack: ['Next.js 15.5.0', 'Reactjs', 'Tailwind 4'],
        thumbnail: '/projects/thumbnail/mahzooz-static.png',
        longThumbnail: '/projects/long/mahzooz-static.png',
        images: [
            '/projects/images/mahzooz-static1.png',
            '/projects/images/mahzooz-static2.png',
        ],
    },
    {
        title: 'Mahzooz',
        slug: 'Mahzooz',
        liveUrl: 'https://kycf.mahzooz.ae',
        year: 2024,
        description: `
      Celebrate life-changing possibilities with Mahzooz – the UAE’s first and leading weekly draw known for its consistent and highest payouts, offering participants the chance to win big. We've made it easy to unlock millions of dirhams every Saturday, turning Saturday into the best – and luckiest – day of the week! <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>✍️ Site Management: SEO-friendly pages with dynamic contents and SEO contents managed in CMS</li>
        <li>🛒 Product Catalog: Can able to add water bottles and purchase the tickets</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with Lazy loading , image optimization techniques</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Created the entire base of the website </li>
        <li>Customized strapi CMS admin panel for intuitive content management</li>
        <li>Developed Next.js API routes as a proxy layer to securely interact with backend services, preventing direct exposure of original API endpoints. </li>
        <li>Developed reusable UI components with bootstrap for design consistency</li>
      </ul>
      `,
        role: `
      Senior Software Engineer <br/>
      Owned the entire development lifecycle of the website including english and arabic languages, involved in reviewing and merging the PR'S, 
      Involved in the design and architecture of the project, Involved in guiding the team members for the best practices and code quality: <br/>
      <ul>
      
        <li>Configured efficient data fetching strategies in Next.js</li>
        <li>Integrated facebook, snapchat and pixel integration for capturing the events</li>
        <li>✅ Backend: Configured Strapi CMS with custom collections for contactus, news, and products</li>
        <li>🎨 Frontend: Built all UI components using SASS and bootstrap</li>
        <li>🔄 State Management: Used Redux for state management</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'SASS',
            'Reactjs',
            'Strapi CMS',
            'Bootstrap',
            'Redux',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/mahzooz.png',
        longThumbnail: '/projects/long/mahzooz.png',
        images: ['/projects/images/winners.png'],
    },
    {
        title: 'Millionaire',
        slug: 'millionaire',
        techStack: [
            'Nextjs',
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/millionaire.jpg',
        longThumbnail: '/projects/long/millionaire.jpg',
        images: [
            '/projects/images/millionaire1.jpg',
            '/projects/images/millionaire2.png',
            '/projects/images/millionaire3.png',
            '/projects/images/millionaire4.png',
        ],
        liveUrl: 'https://millionaire.iq/',
        year: 2025,
        description: `Celebrate life-changing possibilities with Millionaire – the Iraq first and leading weekly draw known for its consistent and highest payouts, offering participants the chance to win big. We've made it easy to unlock millions of dinar every Saturday, turning Saturday into the best – and luckiest – day of the week!`,
        role: `As the frontend developer in a team of three, I: <br/>
        - Built the frontend from scratch using React, Redux, Redux, and Tailwind CSS.<br/>
        - Created many resuable components for the project.<br/>
        - Integrated dynamic state management for efficient handling of data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br
        - Developed the home page , buy now page , cart page, product page, recharge flow, withdrawal flow, add credit flow, checkout flow, latest news pages with fully responsive. <br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.<br/>,
        - Involved in code review and merging the PR's, ensuring code quality and best practices.<br/>
        - Implemented SEO optimizations for better search engine visibility.<br/>
        - Migrated the web application from Next.js 14 to 15, React.js 18 to 19.<br/>
        - Integrated Next PWA , Web Push Notifications into our application.<br/>
        - Optimized Next.js pages and improved performance from 30% to 82%`,
    },
    {
        title: 'Musafir.com',
        slug: 'musafir',
        techStack: [
            'Next.js',
            'React.js',
            'Postgressql',
            'Material UI',
            'Redux',
            'React Hook Form',
            'Starpi.js',
            'Storybook',
        ],
        thumbnail: '/projects/thumbnail/musafir.png',
        longThumbnail: '/projects/long/musafir.png',
        images: [
            '/projects/images/musafir1.png',
            '/projects/images/musafir2.png',
            '/projects/images/musafir3.png',
            '/projects/images/musafir4.png',
        ],
        liveUrl: 'https://www.musafir.com/',
        year: 2023,
        description:
            'Musafir.com is a leading travel platform in the Middle East, offering a wide range of travel services including flights, hotels, and holiday packages. The platform is designed to provide users with a seamless booking experience, featuring advanced search capabilities, personalized recommendations, and a user-friendly interface.',
        role: `As a senior frontend developer , I:<br/>
        - Learned Strapi.js and successfully migrated the system from version 3.0 to 4.9 independently along with database migration of PostgreySQL.<br/>
        - Created multiple new and reusable components in Strapi V4 with multilingual support (i18n).<br/>
        - Built a new B2C Single Page Application with responsive design using Next.js, Material UI,
React.js, and SCSS, with content managed via Strapi,
        - Used GraphQL to efficiently fetch dynamic content from Strapi,
        - Optimized performance of both React and Next.js pages and increased performance from 42% to 85%,
        - Migrated Storybook from version 6 to 7.
        - Created custom widgets in Storybook (React) for Flights, Visas, and Hotel Booking,
        - Delivered pixel-perfect, responsive pages using React.js, Material UI, SCSS, and Redux,
        - Contributed to enhancements and bug fixes for existing B2B and B2C applications,
        - Actively participated in code reviews, PR merges, and mentored team members on best
practices.`,
    },
    {
        title: 'Al Deyafa Dental Clinic',
        slug: 'al-dehyafa',
        techStack: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'Php'],
        thumbnail: '/projects/thumbnail/aldehyafa.png',
        longThumbnail: '/projects/long/aldehyafa.png',
        images: [
            '/projects/images/aldehyafa1.png',
            '/projects/images/aldehyafa2.png',
            '/projects/images/aldehyafa3.png',
        ],
        liveUrl: 'https://aldehyafaclinic.com/',
        year: 2023,
        description:
            'Al Defyafa Dental Clinic is a leading dental practice located Dubai, United Arab Emirates, serving patients since 2003. We offer a comprehensive range of dental services, including dental cleaning, veneers, implants, orthodontics, fillings, inlay and onlay, crowns, root canal treatments, gum disease treatment, extractions, pediatric dentistry, inhalation sedation, teeth whitening, bridges, gum bleaching, painless anesthesia, and laser dentistry.',
        role: `As the frontend developer, I:<br/>
        - Built the entire website using HTML,CSS,bootstrap, Jquery.<br/>
        - Converted the figma designs into pixel perfect pages<br/>
        - made the website fuilly responsive<br/>
        - Enhanced user interaction with animations and transitions using Animate on scroll.`,
    },
    {
        title: 'Soukchic',
        slug: 'soukchic',
        techStack: ['Reactjs', 'HTML', 'SASS', 'Bootstrap', 'Jquery'],
        thumbnail: '/projects/thumbnail/soukchic.png',
        longThumbnail: '/projects/long/soukchic.png',
        images: ['/projects/images/soukchic.png'],
        liveUrl:
            'https://www.linkedin.com/company/soukchicofficial/?originalSubdomain=ae',
        year: 2023,
        description:
            'Soukchic is an e-commerce platform that empowers women to look and feel their best without breaking the bank. Soukchic offers everything a woman could possibly need under one platform and allows you to explore products from your favorite brands while discovering our unique Soukchic product range.Currently, Soukchic is not available as company is not operating any more',
        role: `As the frontend developer, I:<br/>
        - Built the entire ecommerce website using HTML,CSS,bootstrap, Jquery.<br/>
        - Created home , login, create account, forgot password, product details, cart, checkout, order confirmation pages.<br/>
        - Converted the figma designs into pixel perfect pages<br/>
        - made the website fuilly responsive<br/>
        - Enhanced user interaction with animations and transitions using Animate on scroll<br/>
        - Created the dashboard for the admin to manage the products, orders, users and categories.<br/>
        - Integrated the payment gateway for the checkout process.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Software Engineer - UI',
        company: 'Ewings LLC',
        duration: 'Aug 2024 - Present',
        location: 'Dubai, UAE',
    },
    {
        title: 'Senior Software Engineer',
        company: 'Musafir',
        duration: 'Oct 2022 - July 2024',
        location: 'Dubai, UAE',
    },
    {
        title: 'Frontend Engineer',
        company: 'Altaligence',
        duration: 'Mar 2021 - Mar 2022',
        location: 'Dubai, UAE',
    },
    {
        title: 'Senior Software Engineer – UI',
        company: 'I-exceed Technologies',
        duration: 'Dec 2019 - Nov 2020',
        location: 'Bangalore, India',
    },
    {
        title: 'UI Developer',
        company: 'GainInsights Solutions Pvt Ltd,',
        duration: 'Jul 2018 - Nov 2019',
        location: 'Bangalore, India',
    },
    {
        title: 'Software Engineer',
        company: 'CreativeK Technologies,',
        duration: 'Oct 2015 - Jul 2018',
        location: 'Bangalore, India',
    },
];
