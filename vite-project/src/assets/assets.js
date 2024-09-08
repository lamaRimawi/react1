import basket_icon from './new-employee.png'
import logo from './logo-search-grid-1x.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'
import user from './user.png'
import {z} from 'zod';
import aboutUs from './2672335.jpg'
import food_1 from './pexels-christian-diokno-1666462-3841338.jpg'
import food_2 from './pexels-cottonbro-3201694.jpg'
import food_3 from './pexels-jeffreyreed-769745.jpg'
import food_4 from './pexels-olly-762020.jpg'
import food_5 from './pexels-olly-774095.jpg'
import food_6 from './pexels-emmy-e-1252107-2381069.jpg'
import food_7 from './pexels-goodcitizen-2072453.jpg'
import food_8 from './pexels-pixabay-415263.jpg'
import food_9 from './pexels-moose-photos-170195-1587009.jpg'
import food_10 from './pexels-iriser-1800456.jpg'
import food_11 from './pexels-christian-diokno-1666462-3841338.jpg'
import food_12 from './pexels-guilhermealmeida-1858175.jpg'
import food_13 from './pexels-simon-robben-55958-614810.jpg'
import food_14 from './pexels-stefanstefancik-91227.jpg'
import food_15 from './pexels-olly-774909.jpg'
import food_16 from './pexels-iriser-1800456.jpg'
import food_17 from './pexels-christian-diokno-1666462-3841338.jpg'
import food_18 from './pexels-goodcitizen-2072453.jpg'
import food_19 from './pexels-moose-photos-170195-1587009.jpg'
import food_20 from './pexels-olly-762020.jpg'
import food_21 from './pexels-simon-robben-55958-614810.jpg'
import food_22 from './pexels-simon-robben-55958-614810.jpg'
import food_23 from './pexels-stefanstefancik-91227.jpg'
import food_24 from './pexels-jeffreyreed-769745.jpg'
import food_25 from './pexels-jeffreyreed-769745.jpg'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'
import sad from './sad.png'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import contactus from './contact-us-communication-support-service-assistance-concept.jpg'

export const assets = {
   contactus,
    aboutUs,
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    sad,
    food_22,
    food_5,
    food_8,
    user
}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }]

export const employee_list = [
    {
        _id: "1",
        name: "John Doe",
        image:food_1,
        salary: 60000,
        jobInfo: {
            position: "Software Engineer",
            department: "IT",
            location: "New York",
        },
        description: "John is responsible for developing and maintaining software applications."
    },
    {
        _id: "2",
        image: food_2,
        name: "Jane Smith",
        salary: 75000,
        jobInfo: {
            position: "Project Manager",
            department: "Operations",
            location: "Chicago",
        },
        description: "Jane oversees project management and ensures that projects are completed ."
    },
    {
        _id: "3",
        image: food_3,
        name: "Michael Brown",
        salary: 50000,
        jobInfo: {
            position: "Sales Executive",
            department: "Sales",
            location: "San Francisco",
        },
        description: "Michael is responsible for client relations and increasing company sales."
    },
    {
        _id: "4",
        image: food_4,
        name: "Emily Davis",
        salary: 68000,
        jobInfo: {
            position: "Marketing Specialist",
            department: "Marketing",
            location: "Los Angeles",
        },
        description: "Emily creates and manages marketing campaigns to promote company products."
    },
    {
        _id: "5",
        name: "David Wilson",
        image: food_5,
        salary: 80000,
        jobInfo: {
            position: "HR Manager",
            department: "Human Resources",
            location: "Seattle",
        },
        description: "David manages the HR department and oversees recruitment and employee relations."
    },
    {
        _id: "6",
        image: food_6,
        name: "Sarah Johnson",
        salary: 55000,
        jobInfo: {
            position: "Financial Analyst",
            department: "Finance",
            location: "Boston",
        },
        description: "Sarah analyzes financial data to help the company make informed business decisions."
    },
    {
        _id: "7",
        image: food_7,
        name: "Chris Lee",
        salary: 95000,
        jobInfo: {
            position: "Senior Developer",
            department: "IT",
            location: "San Diego",
        },
        description: "Chris is a senior developer specializing in backend systems and architecture."
    },
    {
        _id: "8",
        image: food_8,
        name: "Anna Martinez",
        salary: 72000,
        jobInfo: {
            position: "Product Designer",
            department: "Design",
            location: "Miami",
        },
        description: "Anna designs user interfaces and experiences for the company's products."
    },
    {
        _id: "9",
        name: "James Anderson",
        image: food_9,
        salary: 87000,
        jobInfo: {
            position: "DevOps Engineer",
            department: "IT",
            location: "Denver",
        },
        description: "James manages the company's infrastructure and deployment pipelines."
    },
    {
        _id: "10",
        image: food_10,
        name: "Maria Garcia",
        salary: 56000,
        jobInfo: {
            position: "Content Writer",
            department: "Marketing",
            location: "New York",
        },
        description: "Maria writes and edits content for the company's website and marketing materials."
    },
    {
        _id: "11",
        image: food_11,
        name: "William Harris",
        salary: 60000,
        jobInfo: {
            position: "Business Analyst",
            department: "Business",
            location: "Chicago",
        },
        description: "William analyzes business processes and provides insights for improvement."
    },
    {
        _id: "12",
        image: food_12,
        name: "Sophia Miller",
        salary: 64000,
        jobInfo: {
            position: "UX Researcher",
            department: "Design",
            location: "San Francisco",
        },
        description: "Sophia conducts user research to improve the user experience of the company's products."
    },
    {
        _id: "13",
        image: food_13,
        name: "Jacob Moore",
        salary: 58000,
        jobInfo: {
            position: "Technical Support",
            department: "Support",
            location: "Dallas",
        },
        description: "Jacob provides technical support to clients and resolves product-related issues."
    },
    {
        _id: "14",
        name: "Isabella Taylor",
        image: food_14,
        salary: 82000,
        jobInfo: {
            position: "Lead Developer",
            department: "IT",
            location: "Boston",
        },
        description: "Isabella leads a team of developers working on new software projects."
    },
    {
        _id: "15",
        image: food_15,
        name: "Ethan Jackson",
        salary: 93000,
        jobInfo: {
            position: "Cloud Engineer",
            department: "IT",
            location: "Seattle",
        },
        description: "Ethan designs and manages cloud infrastructure for the company's services."
    },
    {
        _id: "16",
        image: food_16,
        name: "Ava White",
        salary: 69000,
        jobInfo: {
            position: "Data Analyst",
            department: "Data Science",
            location: "Austin",
        },
        description: "Ava analyzes data to help the company make data-driven decisions."
    },
    {
        _id: "17",
        image: food_17,
        name: "Alexander Martinez",
        salary: 72000,
        jobInfo: {
            position: "System Administrator",
            department: "IT",
            location: "Houston",
        },
        description: "Alexander manages the company's internal systems and servers."
    },
    {
        _id: "18",
        image: food_18,
        name: "Mia Clark",
        salary: 67000,
        jobInfo: {
            position: "SEO Specialist",
            department: "Marketing",
            location: "Phoenix",
        },
        description: "Mia optimizes the company's web presence to improve search engine rankings."
    },
    {
        _id: "19",
        image: food_19,
        name: "Daniel Thompson",
        salary: 62000,
        jobInfo: {
            position: "Network Engineer",
            department: "IT",
            location: "Philadelphia",
        },
        description: "Daniel maintains and troubleshoots the company's network infrastructure."
    },
    {
        _id: "20",
        image: food_20,
        name: "Emma Robinson",
        salary: 85000,
        jobInfo: {
            position: "Product Manager",
            department: "Product",
            location: "San Diego",
        },
        description: "Emma manages the product lifecycle from concept to launch."
    },
    {
        _id: "21",
        image: food_21,
        name: "Oliver Perez",
        salary: 77000,
        jobInfo: {
            position: "Scrum Master",
            department: "Operations",
            location: "San Francisco",
        },
        description: "Oliver facilitates Agile processes and ensures team collaboration."
    },
    {
        _id: "22",
        image: food_22,
        name: "Amelia Gonzalez",
        salary: 58000,
        jobInfo: {
            position: "Customer Success Manager",
            department: "Customer Service",
            location: "Las Vegas",
        },
        description: "Amelia helps clients get the most out of the company's products."
    },
    {
        _id: "23",
        name: "Noah Walker",
        image: food_23,
        salary: 69000,
        jobInfo: {
            position: "Security Analyst",
            department: "IT",
            location: "Atlanta",
        },
        description: "Noah monitors and ensures the security of the company's information systems."
    },
    {
        _id: "24",
        image: food_24,
        name: "Liam Lewis",
        salary: 88000,
        jobInfo: {
            position: "Lead Architect",
            department: "IT",
            location: "Portland",
        },
        description: "Liam designs software architecture and leads development projects."
    },
    // {
    //     _id: "25",
    //     image: food_25,
    //     name: "Sophia Hall",
    //     salary: 71000,
    //     jobInfo: {
    //         position: "UI Designer",
    //         department: "Design",
    //         location: "Miami",
    //     },
    //     description: "Sophia creates visual designs for the user interfaces of the company's applications."
    // },
    // {
    //     _id: "26",
    //     name: "Lucas Allen",
    //     salary: 75000,
    //     jobInfo: {
    //         position: "IT Support Manager",
    //         department: "Support",
    //         location: "San Antonio",
    //     },
    //     description: "Lucas manages the IT support team and handles escalated technical issues."
    // },
    // {
    //     _id: "27",
    //     name: "Charlotte Young",
    //     salary: 79000,
    //     jobInfo: {
    //         position: "Quality Assurance Lead",
    //         department: "Quality Assurance",
    //         location: "Orlando",
    //     },
    //     description: "Charlotte leads the QA team and ensures the quality of software products."
    // },
    // {
    //     _id: "28",
    //     name: "Henry King",
    //     salary: 83000,
    //     jobInfo: {
    //         position: "Full Stack Developer",
    //         department: "IT",
    //         location: "Denver",
    //     },
    //     description: "Henry works on both frontend and backend development of web applications."
    // },
    // {
    //     _id: "29",
    //     name: "Grace Wright",
    //     salary: 76000,
    //     jobInfo: {
    //         position: "Operations Manager",
    //         department: "Operations",
    //         location: "Detroit",
    //     },
    //     description: "Grace oversees daily operations and ensures smooth functioning of the company."
    // },
    // {
    //     _id: "30",
    //     name: "Jack Lopez",
    //     salary: 94000,
    //     jobInfo: {
    //         position: "Machine Learning Engineer",
    //         department: "Data Science",
    //         location: "Raleigh",
    //     },
    //     description: "Jack develops machine learning models and algorithms for data-driven solutions."
    // },
    // {
    //     _id: "31",
    //     name: "Chloe Hill",
    //     salary: 67000,
    //     jobInfo: {
    //         position: "Recruiter",
    //         department: "Human Resources",
    //         location: "Salt Lake City",
    //     },
    //     description: "Chloe recruits new talent and manages the hiring process for the company."
    // },
    // {
    //     _id: "32",
    //     name: "Olivia Turner",
    //     salary: 90000,
    //     jobInfo: {
    //         position: "Lead Data Scientist",
    //         department: "Data Science",
    //         location: "Austin",
    //     },
    //     description: "Olivia leads the data science team, focusing on data analysis and predictive modeling."
    // }
];


export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' })
    .regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/, { message: 'Password must be at least 6 characters long, contain at least one uppercase letter, and one number.' })
});

export const registerSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' })
    .regex(/^[a-zA-Z][a-zA-Z0-9_-]{2,15}[a-zA-Z0-9]$/, { message: 'Please enter a valid username.' }),
  email: z.string().min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' })
    .regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/, { message: 'Password must be at least 6 characters long, contain at least one uppercase letter, and one number.' })
});


const validLocalImagePath = /^\/src\/assets\/.*\.(jpg|jpeg|png|gif)$/i;

export const addEmployeeSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(50, { message: 'Name should not exceed 50 characters' }),
  description: z.string().min(1, { message: 'Description is required' }).max(200, { message: 'Description should not exceed 200 characters' }),
  salary: z
    .number({ invalid_type_error: "Salary must be a number" })
    .positive({ message: "Salary must be positive" })
    .or(z.string().regex(/^\d+(\.\d{1,2})?$/, { message: 'Salary must be a valid number' })),
  position: z.string().min(1, { message: 'Position is required' }).max(50, { message: 'Position should not exceed 50 characters' }),
  image: z.string()
    .min(1, { message: 'Image is required' })
    .refine(value => validLocalImagePath.test(value) || /^https?:\/\/[^\s]+$/.test(value), {
      message: 'Invalid image URL or path',
    }),
});

export const editEmployeeSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(50, { message: 'Name should not exceed 50 characters' }),
  description: z.string().min(1, { message: 'Description is required' }).max(200, { message: 'Description should not exceed 200 characters' }),
  salary: z
    .number({ invalid_type_error: "Salary must be a number" })
    .positive({ message: "Salary must be positive" })
    .or(z.string().regex(/^\d+(\.\d{1,2})?$/, { message: 'Salary must be a valid number' })),
  position: z.string().min(1, { message: 'Position is required' }).max(50, { message: 'Position should not exceed 50 characters' }),
  image: z.string()
    .min(1, { message: 'Image is required' })
    .refine(value => validLocalImagePath.test(value) || /^https?:\/\/[^\s]+$/.test(value), {
      message: 'Invalid image URL or path',
    }),
});

export const contactUsSchema = z.object({
  name: z.string().min(1, { message: 'Username is required' })
    .regex(/^[a-zA-Z][a-zA-Z0-9_-]{2,15}[a-zA-Z0-9]$/, { message: 'Please enter a valid username.' }),
  email: z.string().min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' })
    .regex(/^\+?[0-9]{7,15}$/, { message: 'Please enter a valid phone number.' }),

});
