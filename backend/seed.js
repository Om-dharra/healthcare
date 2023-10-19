const mongoose=require('mongoose');
const doctor=require('./models/Doctors')

const dummyData=[

    {
        "doc_id": 1,
        "name": "Lee S. Williamson",
        "specialize": "Cardiology",
        "doc_img": "https://i.ibb.co/b6SDFTN/01.jpg"
    },
    {
        "doc_id": 2,
        "name": "Sarah J. Anderson",
        "specialize": "Pediatrics",
        "doc_img": "https://i.ibb.co/0fVFLw4/02.jpg"
    },
    {
        "doc_id": 3,
        "name": "John M. Smith",
        "specialize": "Orthopedics",
        "doc_img": "https://i.ibb.co/jy7pFRL/03.jpg"
    },
    {
        "doc_id": 4,
        "name": "Emily R. Garcia",
        "specialize": "Dermatology",
        "doc_img": "https://i.ibb.co/8zLzq3N/04.jpg"
    },
    {
        "doc_id": 5,
        "name": "Michael A. Johnson",
        "specialize": "Ophthalmology",
        "doc_img": "https://i.ibb.co/FVW3L1M/05.jpg"
    },
    {
        "doc_id": 6,
        "name": "David L. Martinez",
        "specialize": "Neurology",
        "doc_img": "https://i.ibb.co/XkY9Cv0/06.jpg"
    },
    {
        "doc_id": 7,
        "name": "Linda K. Wilson",
        "specialize": "Gynecology",
        "doc_img": "https://i.ibb.co/y5SLsZ0/07.jpg"
    },
    {
        "doc_id": 8,
        "name": "Robert P. Brown",
        "specialize": "Cardiothoracic Surgery",
        "doc_img": "https://i.ibb.co/tC9Nvhc/08.jpg"
    },
    {
        "doc_id": 9,
        "name": "Susan E. Davis",
        "specialize": "Internal Medicine",
        "doc_img": "https://i.ibb.co/BnPQ2BJ/09.jpg"
    },
    {
        "doc_id": 10,
        "name": "James W. Clark",
        "specialize": "Urology",
        "doc_img": "https://i.ibb.co/H2P56Kz/10.jpg"
    },
    {
        "doc_id": 11,
        "name": "Jennifer R. Hall",
        "specialize": "Oncology",
        "doc_img": "https://i.ibb.co/7Gg7WgG/11.jpg"
    },
    {
        "doc_id": 12,
        "name": "Richard H. Lee",
        "specialize": "Psychiatry",
        "doc_img": "https://i.ibb.co/9g3cY0N/12.jpg"
    },
    {
        "doc_id": 13,
        "name": "Karen L. Adams",
        "specialize": "Endocrinology",
        "doc_img": "https://i.ibb.co/K96DY7C/13.jpg"
    },
    {
        "doc_id": 14,
        "name": "William A. Taylor",
        "specialize": "Pulmonology",
        "doc_img": "https://i.ibb.co/2gXdYm0/14.jpg"
    },
    {
        "doc_id": 15,
        "name": "Megan B. White",
        "specialize": "Dentistry",
        "doc_img": "https://i.ibb.co/YNHtD6z/15.jpg"
    },
    {
        "doc_id": 16,
        "name": "Joseph P. Harris",
        "specialize": "Rheumatology",
        "doc_img": "https://i.ibb.co/3s0ZL80/16.jpg"
    },
    {
        "doc_id": 17,
        "name": "Laura M. Turner",
        "specialize": "Allergy and Immunology",
        "doc_img": "https://i.ibb.co/hf88NQ4/17.jpg"
    },
    {
        "doc_id": 18,
        "name": "Daniel K. Miller",
        "specialize": "Gastroenterology",
        "doc_img": "https://i.ibb.co/n8NYsCx/18.jpg"
    },
    {
        "doc_id": 19,
        "name": "Catherine D. Hall",
        "specialize": "Otolaryngology",
        "doc_img": "https://i.ibb.co/W5sG2YG/19.jpg"
    },
    {
        "doc_id": 20,
        "name": "Timothy R. Baker",
        "specialize": "Dermatology",
        "doc_img": "https://i.ibb.co/FYMwWbG/20.jpg"
    },
    {
        "doc_id": 21,
        "name": "Jessica S. Walker",
        "specialize": "Neurology",
        "doc_img": "https://i.ibb.co/s1ZKvjR/21.jpg"
    },
    {
        "doc_id": 22,
        "name": "Peter J. Turner",
        "specialize": "Cardiology",
        "doc_img": "https://i.ibb.co/F5Km3Z1/22.jpg"
    },
    {
        "doc_id": 23,
        "name": "Nancy L. King",
        "specialize": "Pediatrics",
        "doc_img": "https://i.ibb.co/0nr8KVR/23.jpg"
    },
    {
        "doc_id": 24,
        "name": "George R. Clark",
        "specialize": "Orthopedics",
        "doc_img": "https://i.ibb.co/y8rsbK0/24.jpg"
    },
    {
        "doc_id": 25,
        "name": "Mary E. Nelson",
        "specialize": "Obstetrics and Gynecology",
        "doc_img": "https://i.ibb.co/nfydR5V/25.jpg"
    },
    {
        "doc_id": 26,
        "name": "Andrew T. White",
        "specialize": "Cardiothoracic Surgery",
        "doc_img": "https://i.ibb.co/K00jPCg/26.jpg"
    },
    {
        "doc_id": 27,
        "name": "Julia A. Allen",
        "specialize": "Internal Medicine",
        "doc_img": "https://i.ibb.co/0m0CFkK/27.jpg"
    },
    {
        "doc_id": 28,
        "name": "Samuel P. Johnson",
        "specialize": "Urology",
        "doc_img": "https://i.ibb.co/yXwzRvS/28.jpg"
    },
    {
        "doc_id": 29,
        "name": "Rebecca L. Harris",
        "specialize": "Oncology",
        "doc_img": "https://i.ibb.co/4PW8w47/29.jpg"
    },
    {
        "doc_id": 30,
        "name": "Charles M. Turner",
        "specialize": "Psychiatry",
        "doc_img": "https://i.ibb.co/m6ZqT09/30.jpg"
    },
    {
        "doc_id": 31,
        "name": "Jennifer K. Adams",
        "specialize": "Endocrinology",
        "doc_img": "https://i.ibb.co/VV3Chwv/31.jpg"
    },
    {
        "doc_id": 32,
        "name": "William L. Taylor",
        "specialize": "Pulmonology",
        "doc_img": "https://i.ibb.co/zGqSTsp/32.jpg"
    },
    {
        "doc_id": 33,
        "name": "Elizabeth M. White",
        "specialize": "Dentistry",
        "doc_img": "https://i.ibb.co/YtGg6NW/33.jpg"
    },
    {
        "doc_id": 34,
        "name": "Matthew P. Harris",
        "specialize": "Rheumatology",
        "doc_img": "https://i.ibb.co/G35tzJn/34.jpg"
    },
    {
        "doc_id": 35,
        "name": "Margaret A. Turner",
        "specialize": "Allergy and Immunology",
        "doc_img": "https://i.ibb.co/K2YzRmV/35.jpg"
    },
    {
        "doc_id": 36,
        "name": "David J. Miller",
        "specialize": "Gastroenterology",
        "doc_img": "https://i.ibb.co/Ypmk1P6/36.jpg"
    },
    {
        "doc_id": 37,
        "name": "Amy D. Hall",
        "specialize": "Otolaryngology",
        "doc_img": "https://i.ibb.co/QFNCRk0/37.jpg"
    },
    {
        "doc_id": 38,
        "name": "Steven R. Baker",
        "specialize": "Dermatology",
        "doc_img": "https://i.ibb.co/VHngyB5/38.jpg"
    },
    {
        "doc_id": 39,
        "name": "Michelle S. Walker",
        "specialize": "Neurology",
        "doc_img": "https://i.ibb.co/3TsWRfb/39.jpg"
    },
    {
        "doc_id": 40,
        "name": "Richard J. Turner",
        "specialize": "Cardiology",
        "doc_img": "https://i.ibb.co/zQgW5b4/40.jpg"
    }
    
]

async function seedDb(){
    await doctor.deleteMany({})
    await doctor.insertMany(dummyData)
    console.log("Db seeded")
}
module.exports=seedDb;
